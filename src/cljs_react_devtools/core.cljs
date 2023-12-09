(ns cljs-react-devtools.core
  (:require [clojure.string :as str]
            [uix.core :as uix :refer [$ defui]]
            [uix.dom]))

(def colors
  {:highlight-text "#8835ff"
   :highlight-bg   "#eadcff"})

(defn node->siblings [^js node]
  (lazy-seq
    (cons node (when (.-sibling node)
                 (node->siblings (.-sibling node))))))

(declare tree-view)

(defn render-children [^js node state set-state]
  (let [child (.-child node)]
    (when child
      (for [node (node->siblings child)]
        ($ tree-view {:node      node
                      :state     state
                      :set-state set-state
                      :key       (.-index node)})))))

(defn reagent-node? [^js node]
  (let [el-type (.-elementType node)]
    (and (fn? el-type)
         (.-cljs$lang$type el-type))))

(defn uix-node? [^js node]
  (let [el-type (.-elementType node)]
    (and (fn? el-type)
         (.-uix-component? el-type))))

(defn memo-node? [node]
  (let [el-type (.-elementType node)]
    (and el-type
         (= js/Object (.-constructor el-type))
         (= (aget el-type "$$typeof") (.for js/Symbol "react.memo")))))

(defn node->name [^js node]
  (let [el-type (.-elementType node)
        memo? (memo-node? (.-return node))]
    (str
      (cond
        (string? el-type) el-type

        (reagent-node? node)
        (let [s (str/split (demunge-str (.-displayName el-type)) #"\.")]
          (str (str/join "." (butlast s)) "/" (last s)))

        (fn? el-type) (.-displayName el-type))
      (when memo?
        " [memo]"))))

(defui button [props]
  ($ :button
     (update props :style
             #(merge {:background :transparent
                      :border     :none
                      :cursor     :pointer
                      :padding    0}
                     (filter (comp some? val) %)))))

(defui tree-view [{:keys [^js node state set-state]}]
  (let [memo? (memo-node? node)
        node (if memo? (.-child node) node)
        el-type (.-elementType node)
        [closed? set-closed] (uix/use-state false)
        {:keys [hide-dom? selected]} state]
    (cond
      (or (nil? el-type)
          (and (string? el-type) hide-dom?))
      (render-children node state set-state)

      :else
      ($ :div
         {:style {:margin "4px 0 4px 8px"}}
         ($ button
            {:style    {:color      (:highlight-text colors)
                        :background (when (= selected node) (:highlight-bg colors))}
             :on-click #(set-state (assoc state :selected node))}
            (node->name node))
         (when-not closed?
           (render-children node state set-state))))))

(declare data-view)

(defui data-view-map
  [{:keys [data tag entries-fn key-fn]
    :or   {entries-fn seq
           key-fn     identity}}]
  (let [entries (entries-fn data)]
    (when (seq entries)
      (map-indexed
        (fn [idx [key val]]
          (let [last-idx? (= idx (dec (count entries)))]
            ($ :div
               {:key   key
                :style {:display :flex
                        :margin  (when-not last-idx? "0 0 4px 0")}}
               (when (zero? idx)
                 ($ :span (str
                            (when tag
                              (str "#" tag " "))
                            "{")))
               ($ data-view {:data  (key-fn key)
                             :key?  true
                             :style {:margin-left (when (pos? idx)
                                                    (if tag
                                                      (* 7.5 (+ 3 (count tag)))
                                                      6))}})
               ($ data-view {:data val})
               (when last-idx?
                 ($ :div
                    {:style {:display         :flex
                             :flex-direction  :column
                             :justify-content :flex-end}}
                    ($ :span "}"))))))
        entries))))

(defui data-view-seq
  [{:keys        [data tag]
    [open close] :brackets}]
  (if (empty? data)
    ($ :span (str open close))
    ($ :div
       {:style {:display :flex}}
       (map-indexed
         (fn [idx val]
           (let [last-idx? (= idx (dec (count data)))]
             ($ :div
                {:key   idx
                 :style {:display :flex}}
                (when (zero? idx)
                  ($ :span
                     (str (when tag (str "#" tag " ")) open)))
                ($ data-view {:data  val
                              :style (when (zero? idx) {:margin 0})})
                (when last-idx?
                  ($ :div
                     {:style {:display         :flex
                              :flex-direction  :column
                              :justify-content :flex-end}}
                     ($ :span close))))))
         data))))

(defui data-view
  [{:keys [data style key?]}]
  ($ :pre
     {:style    (merge {:margin "0 0 0 8px"
                        :cursor      :pointer
                        :font-size   "12px"}
                       style)
      :on-click #(do
                   (when-not key?
                     (.stopPropagation %)
                     (js/console.dir data)))}
     (cond
       (map? data) ($ data-view-map {:data data})
       (vector? data) ($ data-view-seq {:data data :brackets ["[" "]"]})
       (set? data) ($ data-view-seq {:data data :brackets ["#{" "}"]})
       (number? data) ($ :span {:style {:color "#216aef"}} (pr-str data))
       (nil? data) ($ :span {:style {:color "#216aef"}} (pr-str data))
       (boolean? data) ($ :span {:style {:color "#216aef"}} (pr-str data))
       (string? data) ($ :span {:style {:color "#388e28"}} (pr-str data))
       (keyword? data) ($ :span {:style {:color     "#c94d22"
                                         :text-wrap :nowrap}}
                          (pr-str data))
       (fn? data) ($ :span {:style {:color "#216aef"}} (str "fn<"
                                                            (if (str/blank? (.-name data))
                                                              "anonymous"
                                                              (.-name data))
                                                            ">"))
       (= js/Object (.-constructor data)) ($ data-view-map
                                             {:data       data
                                              :tag        "js"
                                              :entries-fn js/Object.entries
                                              :key-fn     keyword})
       (= js/Array (.-constructor data)) ($ data-view-seq {:data data :tag "js" :brackets ["[" "]"]})
       :else (pr-str data))))

(defn node->props [^js node]
  (let [el-type (.-elementType node)]
    (cond
      (string? el-type)
      ($ :pre {:style {:overflow-x :auto :margin 0}}
         (with-out-str
           (cljs.pprint/pprint
             (.. node -memoizedProps))))

      (reagent-node? node)
      ($ data-view {:data  (vec (rest (some-> node .-memoizedProps .-argv)))
                    :style {:margin 0}})

      (uix-node? node)
      ($ data-view {:data  (.. node -memoizedProps -argv)
                    :style {:margin 0}}))))

(defn node->hooks [^js mem-state]
  (when (and mem-state (some? (.-memoizedState mem-state)))
    (lazy-seq
      (cons (.-memoizedState mem-state)
            (when (.-next mem-state)
              (node->hooks (.-next mem-state)))))))

(defn node->rf-subs [^js node]
  (->> (.. node -stateNode -cljsRatom -captured)
       (keep #(when (.-__devtools-label ^js %)
                [($ data-view {:data (.-__devtools-label ^js %) :style {:margin 0}})
                 (.-state %)]))))

(defn node->reactions [^js node]
  (->> (.. node -stateNode -cljsRatom -captured)
       (keep #(when (.. ^js % -state -generation)
                ["ratom" (.-state (aget (.-state %) 0))]))))

(defn camel-case->kebab-case [s]
  (->> (str/split s #"(?<=[a-z])(?=[A-Z])")
       (map str/lower-case)
       (str/join "-")))

(defui section-header [{:keys [children]}]
  ($ :div
     {:style {:color      (:highlight-text colors)
              :background (:highlight-bg colors)
              :margin     "0 0 4px 0"
              :padding    "0 4px"}}
     children))

(defui reactions-view [{:keys [node]}]
  (let [reactions (node->reactions node)
        subs (node->rf-subs node)]
    ($ :<>
      (when (seq reactions)
        ($ :div {:style {:margin "8px 0 0 0"}}
           ($ section-header "reactions")
           (map-indexed
             (fn [idx [type reaction]]
               ($ :div
                  {:key   idx
                   :style {:display :flex :gap 8}}
                  ($ :span type)
                  ($ data-view
                     {:data  reaction
                      :style {:margin 0}})))
             reactions)))
      (when (seq subs)
        ($ :div {:style {:margin "8px 0 0 0"}}
           ($ section-header "re-frame subscriptions")
           (map-indexed
             (fn [idx [type sub]]
               ($ :div
                  {:key   idx
                   :style {:display :flex :gap 8}}
                  ($ :span type)
                  ($ data-view
                     {:data  sub
                      :style {:margin 0}})))
             subs))))))

(defui hooks-view [{:keys [node]}]
  (let [hooks (node->hooks (.-memoizedState node))]
    (when (seq hooks)
      ($ :div {:style {:margin "8px 0 0 0"}}
         ($ section-header "hooks")
         (keep-indexed
           (fn [idx hook]
             (when-not (and (js/Array.isArray hook)
                            (js/Array.isArray (aget hook 1))
                            (fn? (aget (aget hook 1) 0))
                            (= "bound dispatchSetState" (.-name (aget (aget hook 1) 0))))
               (let [name (camel-case->kebab-case (aget (.-_debugHookTypes node) idx))]
                 ($ :div {:key   idx
                          :style {:margin "8px 0"}}
                    ($ :span {:style {:color (:highlight-text colors)}}
                       name)
                    (case name
                      "use-callback"
                      ($ :<>
                         ($ :div {:style {:display :flex :gap 8}}
                            ($ :span "callback:")
                            ($ data-view {:data (aget hook 0) :style {:margin 0}}))
                         ($ :div {:style {:display :flex :gap 8}}
                            ($ :span "deps:")
                            ($ data-view {:data (vec (aget hook 1)) :style {:margin 0}})))

                      "use-effect"
                      ($ :<>
                         ($ :div {:style {:display :flex :gap 8}}
                            ($ :span "effect:")
                            ($ data-view {:data (.-create hook) :style {:margin 0}}))
                         ($ :div {:style {:display :flex :gap 8}}
                            ($ :span "deps:")
                            ($ data-view {:data (vec (.-deps hook)) :style {:margin 0}})))

                      "use-ref"
                      ($ data-view {:data (.. hook -current -current) :style {:margin 0}})

                      ($ data-view {:data hook :style {:margin 0}}))))))
           hooks)))))

(defui inspector [{:keys [state]}]
  (let [{:keys [selected]} state]
    ($ :div
       {:style {:width          "35%"
                :border-left    "1px solid #8632ff75"
                :padding        "0 16px 32px 16px"
                :display        :flex
                :flex-direction :column}}
       (when selected
         ($ :<>
            ($ button
               {:on-click #(js/console.log (.-elementType selected))
                :style    {:margin  "8px 0 0 0"
                           :display :block
                           :color   (:highlight-text colors)
                           :width   :fit-content}}
               (node->name selected))
            ($ :div {:style {:margin     "8px 0 0 0"
                             :overflow-y :auto
                             :flex       1}}
               ($ section-header "props")
               (node->props selected)
               (when (reagent-node? selected)
                 ($ reactions-view {:node selected}))
               ($ hooks-view {:node selected})))))))

(def error-boundary
  (uix/create-error-boundary
    {:derive-error-state (fn [error]
                           {:error error})}
    (fn [[{:keys [error]} set-state] {:keys [children]}]
      (if error
        ($ :div
           {:style {:background      "#faf0ec"
                    :color           "#ec681f"
                    :font-size       "16px"
                    :flex            1
                    :display         :flex
                    :flex-direction  :column
                    :gap             16
                    :justify-content :center
                    :align-items     :center}}
           ($ :div
              "Something went wrong")
           ($ :div
              (if (instance? js/Error error)
                (.-message error)
                error))
           ($ button
              {:style {:background    "#ff784b"
                       :color         "#faf0ec"
                       :padding       "8px 12px"
                       :border-radius "3px"}}
              "report the issue"))
        children))))

(defui toolbar [{:keys [state set-state]}]
  (let [{:keys [hide-dom?]} state]
    ($ :div
       {:style {:padding       "4px 8px"
                :border-bottom "1px solid #8632ff75"
                :font-size     "12px"}}
       ($ :div
          ($ :input#uix-devtools_hide-mo-nodes
             {:type      :checkbox
              :checked   hide-dom?
              :on-change #(set-state (update state :hide-dom? not))
              :style     {:margin "0 4px 0 0"}})
          ($ :label
             {:for "uix-devtools_hide-mo-nodes"}
             "Hide DOM nodes")))))

(defui devtools [{:keys [root]}]
  (let [fiber (uix/use-memo (fn []
                              (when root
                                (->> (js/Object.keys root)
                                     (some #(when (str/starts-with? % "__reactContainer") (aget root %))))))
                            [root])
        [state set-state] (uix/use-state {:hide-dom? true
                                          :selected  (when (and root fiber) (.-child fiber))})]
    ($ :div
       {:style {:position   :fixed
                :z-index    9999
                :left       0
                :bottom     0
                :width      "100vw"
                :height     "35vh"
                :background "#fff"
                :color      "#51485f"
                :font       "normal 14px sans-serif"
                :display    :flex
                :border-top "2px solid #8632ff75"}}
       (cond
         (or (not root) (not fiber))
         ($ :div
            {:style {:display         :flex
                     :flex-direction  :column
                     :gap             8
                     :flex            1
                     :justify-content :center
                     :align-items     :center
                     :color           (:highlight-text colors)
                     :font-size       "18px"}}
            (if-not root
              ($ :<>
                "Devtools are not connected to React root"
                ($ :span {:style {:font-size "16px"}}
                   "make sure to pass the root node when initializing devtools")
                ($ :pre {:style {:font-size "14px" :margin 0}}
                   (pr-str
                     '(cljs-react-devtools.core/init!
                        {:root (js/document.getElementById "root")}))))
              "Provided root node doesn't have React app rendered"))

         :else ($ error-boundary
                  ($ :div {:style {:flex 1}}
                     ($ toolbar
                        {:state     state
                         :set-state set-state})
                     ($ :div {:style {:display    :flex
                                      :flex       1
                                      :max-height "100%"
                                      :min-height "100%"}}
                        ($ :div {:style {:flex       1
                                         :overflow-y :auto
                                         :padding    "8px 0"}}
                           (for [node (node->siblings (.-child fiber))]
                             ($ tree-view {:node      node
                                           :state     state
                                           :set-state set-state
                                           :key       (.-index node)})))
                        ($ inspector {:state     state
                                      :set-state set-state}))))))))

(defn high-jack-re-frame []
  (when-let [subscribe js/re-frame.core.subscribe]
    (set! js/re-frame.core.subscribe
          (fn
            ([query]
             (let [ret (subscribe query)]
               (set! (.-__devtools-label ^js ret) (first query))
               ret))
            ([query dynv]
             (let [ret (subscribe query dynv)]
               (set! (.-__devtools-label ^js ret) (first query))
               ret))))))


(defonce __init
         (let [init? (atom false)]
           (defn init! [{:keys [root] :as opts}]
             (when-not @init?
               (reset! init? true)
               (high-jack-re-frame)
               (js/setTimeout
                 (fn []
                   (let [node (js/document.createElement "div")
                         _ (js/document.body.append node)
                         root (uix.dom/create-root node)]
                     (uix.dom/render-root ($ devtools {:root (:root opts)}) root)
                     nil))
                 100)))))
