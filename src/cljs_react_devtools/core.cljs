(ns cljs-react-devtools.core
  (:require [clojure.string :as str]
            [uix.core :as uix :refer [$ defui]]
            [uix.dom]
            [goog.functions :as fns]
            [goog.string :as gstr]
            [goog.async.nextTick]))

(defonce popout-window (atom nil))

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
                      :padding    0
                      :opacity (when (:disabled props) 0.5)}
                     (filter (comp some? val) %)))))

(def icon-chevron-down
  ($ :svg {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke-width "4" :stroke "currentColor"
           :width 8 :height 8}
     ($ :path {:stroke-linecap "round" :stroke-linejoin "round" :d "M19.5 8.25l-7.5 7.5-7.5-7.5"})))

(def icon-cursor-rays
  ($ :svg {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke-width "2" :stroke "currentColor"
           :width 18 :height 18}
     ($ :path {:stroke-linecap "round" :stroke-linejoin "round" :d "M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"})))

(def icon-window
  ($ :svg {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke-width "2" :stroke "currentColor"
           :width 18 :height 18}
     ($ :path {:stroke-linecap "round" :stroke-linejoin "round" :d "M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"})))

(def icon-dock-bottom
  ($ :svg {:width 18 :height 18 :viewBox "0 0 24 24" :fill "none" :xmlns "http://www.w3.org/2000/svg"}
     ($ :path {:d "M3 14H21M4.125 19.5H19.875C20.496 19.5 21 18.996 21 18.375V5.625C21 5.004 20.496 4.5 19.875 4.5H4.125C3.504 4.5 3 5.004 3 5.625V18.375C3 18.996 3.504 19.5 4.125 19.5Z" :stroke "currentColor" :stroke-width "2" :stroke-linecap "round" :stroke-linejoin "round"})
     ($ :path {:d "M3.375 18L3.375 14.5L20.625 14.5L20.625 18C20.625 18.621 20.121 19.125 19.5 19.125L4.5 19.125C3.879 19.125 3.375 18.621 3.375 18Z" :fill "currentColor"})))

(def icon-dock-right
  ($ :svg {:width 19 :height 19 :viewBox "0 0 24 24" :fill "none" :xmlns "http://www.w3.org/2000/svg"}
     ($ :path {:d "M4.125 19.5H19.875C20.496 19.5 21 18.996 21 18.375V5.625C21 5.004 20.496 4.5 19.875 4.5H4.125C3.504 4.5 3 5.004 3 5.625V18.375C3 18.996 3.504 19.5 4.125 19.5Z" :stroke "currentColor" :stroke-width "2" :stroke-linecap "round" :stroke-linejoin "round"})
     ($ :path {:d "M19.875 19.5H15V4.5H19.875C20.496 4.5 21 5.004 21 5.625V18.375C21 18.996 20.496 19.5 19.875 19.5Z" :fill "currentColor"})))

(def icon-dock-left
  ($ :svg {:width 19 :height 19 :viewBox "0 0 24 24" :fill "none" :xmlns "http://www.w3.org/2000/svg"}
     ($ :path {:d "M9 4.5V19.5M4.125 19.5H19.875C20.496 19.5 21 18.996 21 18.375V5.625C21 5.004 20.496 4.5 19.875 4.5H4.125C3.504 4.5 3 5.004 3 5.625V18.375C3 18.996 3.504 19.5 4.125 19.5Z" :stroke "currentColor" :stroke-width "2" :stroke-linecap "round" :stroke-linejoin "round"})
     ($ :path {:d "M4.125 19.5H9V4.5H4.125C3.504 4.5 3 5.004 3 5.625V18.375C3 18.996 3.504 19.5 4.125 19.5Z" :fill "currentColor"})))

(def icon-arrow-path
  ($ :svg {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke-width "2" :stroke "currentColor"
           :width 16 :height 16}
     ($ :path {:stroke-linecap "round" :stroke-linejoin "round" :d "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"})))

(def preview-ctx (uix/create-context))

(defui tree-view [{:keys [^js node state set-state]}]
  (let [memo? (memo-node? node)
        node (if memo? (.-child node) node)
        el-type (.-elementType node)
        [closed? set-closed] (uix/use-state false)
        {:keys [hide-dom? selected]} state
        selected? (= selected node)
        set-preview-node (uix/use-context preview-ctx)]
    (cond
      (or (nil? el-type)
          (and (string? el-type) hide-dom?))
      (render-children node state set-state)

      :else
      ($ :div {:style {:margin "4px 0 4px 8px"}}
         (when (.-child node)
           ($ :span {:style {:margin "0 4px 0 0"
                             :color "#b78ff1"
                             :display :inline-block
                             :transition "transform 100ms ease-in-out"
                             :transform (if closed? "rotate(-90deg)" "rotate(0deg)")}}
              icon-chevron-down))
         ($ button
            {:style    {:color      (:highlight-text colors)
                        :background (when selected? (:highlight-bg colors))}
             :on-mouse-enter #(set-preview-node node)
             :on-mouse-leave #(set-preview-node nil)
             :on-click #(do (set-state (assoc state :selected node))
                            (when selected?
                              (set-closed not)))}
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

(defonce hint-ctx (uix/create-context))

(defui data-view
  [{:keys [data style key?]}]
  (let [set-active (uix/use-context hint-ctx)]
    ($ :pre
       {:style    (merge {:margin "0 0 0 8px"
                          :cursor      :pointer
                          :font-size   "12px"}
                         style)
        :on-mouse-enter #(set-active true)
        :on-mouse-leave #(set-active false)
        :on-click #(when-not key?
                     (.stopPropagation %)
                     (js/console.dir data))}
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
         :else (pr-str data)))))

(defn node->props [^js node]
  (let [el-type (.-elementType node)]
    (cond
      (string? el-type)
      ($ data-view {:data  (.. node -memoizedProps)
                    :style {:margin 0}})

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

(uix/defhook use-resize-handler [{:keys [set-size dir max min location]
                                  :or {max 100 min 0}}]
  (let [[active? set-active] (uix/use-state false)
        ref (uix/use-ref)]
    (uix/use-effect
      (fn []
        (when active?
          (let [move-handler (fn [^js e]
                               (let [node @ref
                                     bb (.getBoundingClientRect node)
                                     v (* (/ 100 (if (= dir :vertical) js/window.innerHeight js/window.innerWidth))
                                          (cond
                                            (= dir :vertical)
                                            (- (.-y bb) (.-y e))

                                            (= location :left)
                                            (- (.-x e) (+ (.-x bb) (.-width bb)))

                                            :else (- (.-x bb) (.-x e))))]
                                 (set-size
                                   #(let [v (+ % v)]
                                      (if (>= max v min)
                                        v
                                        %)))))
                up-handler #(set-active false)]
            (.addEventListener js/document "mousemove" move-handler)
            (.addEventListener js/document "mouseup" up-handler)
            (fn []
              (.removeEventListener js/document "mousemove" move-handler)
              (.removeEventListener js/document "mouseup" up-handler)))))
      [active? set-size dir max min location])
    [ref set-active]))

(defui resize-handle [{:keys [set-size dir max min location] :as props}]
  (let [[ref set-active] (use-resize-handler props)]
    ($ :div {:ref ref
             :on-mouse-down #(set-active true)
             :style {:height (if (= dir :vertical) "4px" "100%")
                     :width (if (= dir :vertical) "100%" "4px")
                     :position :absolute
                     :left (when (not= location :left) 0)
                     :right (when (= location :left) 0)
                     :top 0
                     :background "#fcf8ff"
                     :cursor (if (= dir :vertical) :ns-resize :ew-resize)}})))

(uix/defhook use-size [v k]
  (let [[size set-size] (uix/use-state #(if-let [n (js/localStorage.getItem (str k))]
                                          (let [n (js/parseFloat n 10)]
                                            (if (js/Number.isNaN n)
                                              v
                                              n))
                                          v))
        f (uix/use-memo (fn []
                          (fns/debounce #(js/localStorage.setItem (str k) %) 100))
                        [k])]
    (uix/use-effect
      #(f size)
      [size f])
    [size set-size]))

(defui inspector [{:keys [state set-hint location]}]
  (let [{:keys [selected]} state
        [size set-size] (use-size 35 :cljs-devtools-inspector/ui-size)
        [active? set-active] (uix/use-state false)
        horizontal? (contains? #{:window :bottom} location)]
    (uix/use-effect
      (fn []
        (if active?
          (set-hint "click on the value to log it to console")
          (set-hint "")))
      [active? set-hint])
    ($ :div
       {:style {:box-sizing :border-box
                :width          (if horizontal? (str size "%") "100%")
                :height         (when-not horizontal? (str size "vh"))
                :border-left    (when horizontal? "1px solid #8632ff75")
                :border-top    (when-not horizontal? "1px solid #8632ff75")
                :padding        "0 8px 32px"
                :display        :flex
                :flex-direction :column
                :position :relative}}
       ($ resize-handle {:set-size set-size
                         :dir (if horizontal? :horizontal :vertical)
                         :max 50
                         :min 20})
       (when selected
         ($ (.-Provider hint-ctx) {:value set-active}
           ($ :<>
              ($ button
                 {:on-click #(js/console.log (.-elementType selected))
                  :on-mouse-enter #(set-active true)
                  :on-mouse-leave #(set-active false)
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
                 ($ hooks-view {:node selected}))))))))

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
           ($ :a
              {:href "https://github.com/roman01la/cljs-react-devtools"
               :target "blank_"
               :style {:background    "#ff784b"
                       :color         "#faf0ec"
                       :padding       "8px 12px"
                       :border-radius "3px"}}
              "report an issue"))
        children))))

(defonce window-settings (atom {:width 800 :height 400 :top 0 :left 0
                                :location (let [v (js/localStorage.getItem ":cljs-devtools/window-location")]
                                            (if (str/blank? v)
                                              :bottom
                                              (keyword v)))}))
(declare dock-devtools)

(defn close-window [location]
  (if @popout-window
    (do
      (swap! window-settings assoc :location location)
      (.close @popout-window))
    (dock-devtools :location location)))

(defui toolbar
  [{:keys [state set-state hint set-hint
           set-inspecting inspecting? dock-devtools location]}]
  (let [{:keys [hide-dom?]} state]
    ($ :div
       {:style {:padding       "4px 8px"
                :border-bottom "1px solid #8632ff75"
                :font-size     "12px"
                :display :flex
                :justify-content :space-between
                :gap 32}}
       ($ :div
          {:on-mouse-enter #(set-hint "toggle DOM nodes in the tree view")
           :on-mouse-leave #(set-hint nil)}
          ($ :input#cljs-devtools_hide-mo-nodes
             {:type      :checkbox
              :checked   hide-dom?
              :on-change #(set-state (update state :hide-dom? not))
              :style     {:margin "0 4px 0 0"}})
          ($ :label
             {:for "cljs-devtools_hide-mo-nodes"}
             "Hide DOM nodes"))
       ($ :div {:style {:display :flex
                        :align-items :center}}
          ($ :div {:style {:color "#a769ff"
                           :opacity (if (str/blank? hint) 0 1)
                           :transition "opacity 100ms ease-in-out"}}
             hint)
          ($ button
             {:style {:color "#a769ff"
                      :background (when inspecting? (:highlight-bg colors))
                      :margin "0 0 0 8px"}
              :on-mouse-enter #(set-hint "select an element to inspect")
              :on-mouse-leave #(set-hint nil)
              :title "Select an element to inspect"
              :on-click #(set-inspecting not)}
             icon-cursor-rays)
          (when (not= :window location)
            ($ button
               {:style {:color "#a769ff"
                        :margin "0 0 0 8px"}
                :on-mouse-enter #(set-hint "undock into separate window")
                :on-mouse-leave #(set-hint nil)
                :title "Undock into separate window"
                :on-click #(dock-devtools :location :window)}
               icon-window))
          ($ button
             {:style {:color "#a769ff"
                      :margin "0 0 0 8px"}
              :on-mouse-enter #(set-hint "dock to bottom")
              :on-mouse-leave #(set-hint nil)
              :title "Dock to bottom"
              :disabled (= location :bottom)
              :on-click #(close-window :bottom)}
             icon-dock-bottom)
          ($ button
             {:style {:color "#a769ff"
                      :margin "0 0 0 8px"}
              :on-mouse-enter #(set-hint "dock to the left")
              :on-mouse-leave #(set-hint nil)
              :title "Dock to the left"
              :disabled (= location :left)
              :on-click #(close-window :left)}
             icon-dock-left)
          ($ button
             {:style {:color "#a769ff"
                      :margin "0 0 0 8px"}
              :on-mouse-enter #(set-hint "dock to the right")
              :on-mouse-leave #(set-hint nil)
              :title "Dock to the right"
              :disabled (= location :right)
              :on-click #(close-window :right)}
             icon-dock-right)))))

(defn intersects? [[x y] rect]
  (and (<= (.-x rect) x (+ (.-x rect) (.-width rect)))
       (<= (.-y rect) y (+ (.-y rect) (.-height rect)))))

(uix/defhook use-dom-inspector [{:keys [root set-inspecting on-target skip-dom? preview-node]}]
  (let [[rect set-rect] (uix/use-state nil)
        nodes (uix/use-memo
                (fn []
                  (->> root
                       (tree-seq #(some? (.-children %)) #(seq (.-children %)))
                       (reverse)))
                [root])]
    (uix/use-effect
      (fn []
        (if preview-node
          (let [nodes (tree-seq #(some? (.-child %)) #(node->siblings (.-child %))
                                preview-node)]
            (when-let [node (some #(when (.-stateNode %) %) nodes)]
              (let [dom-node (.-stateNode node)
                    rect (if (.-getBoundingClientRect dom-node)
                           ;; DOM node
                           (.getBoundingClientRect dom-node)
                           ;; class component
                           (.getBoundingClientRect (uix.dom/find-dom-node dom-node)))]
                (set-rect rect))))
          (let [node! (atom nil)
                mouse-handler (fn [^js e]
                                (let [x (.-x e)
                                      y (.-y e)]
                                  (when-let [node (some #(when (intersects? [x y] (.getBoundingClientRect %)) %)
                                                        nodes)]
                                    (reset! node! node)
                                    (set-rect (.getBoundingClientRect node)))))
                click-handler (fn []
                                (when-let [node @node!]
                                  (when-let [target (->> (js/Object.keys node)
                                                         (some #(when (str/starts-with? % "__reactFiber")
                                                                  (if skip-dom?
                                                                    (.-_debugOwner (aget node %))
                                                                    (aget node %)))))]
                                    (on-target target)
                                    (set-inspecting false)
                                    (when-let [w @popout-window]
                                      (.focus w)))))]
            (.addEventListener js/document "mousemove" mouse-handler)
            (.addEventListener js/document "click" click-handler)
            (fn []
              (.removeEventListener js/document "mousemove" mouse-handler)
              (.removeEventListener js/document "click" click-handler)))))
      [root nodes on-target set-inspecting skip-dom? preview-node])
    rect))

(defui inspector-overlay [{:keys [set-inspecting root on-target skip-dom? preview-node] :as props}]
  (let [rect (use-dom-inspector props)]
    ($ :div
       {:style {:z-index 9998
                :position :fixed
                :width "100vw"
                :height "100vh"
                :top 0
                :left 0
                :background "#e7c2ff1a"
                :on-click #(.stopPropagation %)}}
       (when rect
         ($ :div
            {:style {:position :absolute
                     :top  (.-y rect)
                     :left (.-x rect)
                     :width (.-width rect)
                     :height (.-height rect)
                     :background "#cd80ffa6"
                     :pointer-events :none}})))))

(defui devtools* [{:keys [root location]}]
  (let [[tid set-tid] (uix/use-state 0)
        fiber (uix/use-memo (fn []
                              (when root
                                tid
                                (->> (js/Object.keys root)
                                     (some #(when (str/starts-with? % "__reactContainer") (aget root %))))))
                            [root tid])
        [state set-state] (uix/use-state {:hide-dom? true
                                          :selected  (when (and root fiber) (.-child fiber))})
        [size set-size] (use-size 35 :cljs-devtools/ui-size)
        [hint set-hint] (uix/use-state "")
        [inspecting? set-inspecting] (uix/use-state false)
        [preview-node set-preview-node] (uix/use-state false)
        on-target (uix/use-callback
                    (fn [fiber]
                      (set-state #(assoc % :selected fiber)))
                    [])]
    (uix/use-effect
      (fn []
        (let [handler (fns/throttle #(set-tid inc) 100)
              obs (js/MutationObserver. handler)]
          (.observe obs root #js {:childList true :subtree true :attributes true})
          #(.disconnect obs)))
      [root])
    ($ :<>
      (when (or inspecting? preview-node)
        (uix.dom/create-portal
          ($ inspector-overlay
             {:set-inspecting set-inspecting
              :root root
              :on-target on-target
              :skip-dom? (:hide-dom? state)
              :preview-node preview-node})
          (js/document.getElementById "cljs-devtools-inspector-overlay")))
      ($ :div
         {:style {:position   :fixed
                  :z-index    9999
                  :left       (case location
                                (:bottom :left :window) 0
                                nil)
                  :right       (case location
                                 (:right) 0
                                 nil)
                  :bottom     0
                  :width      (case location
                                (:bottom :window) "100vw"
                                (:left :right) (str size "vw"))
                  :height     (case location
                                (:left :right :window) "100vh"
                                :bottom (str size "vh"))
                  :background "#fefdff"
                  :color      "#51485f"
                  :font       "normal 14px sans-serif"
                  :display    :flex
                  :border-top (when (= location :bottom) "2px solid #8632ff75")
                  :border-left (when (= location :right) "2px solid #8632ff75")
                  :border-right (when (= location :left) "2px solid #8632ff75")}}
         (when-not (= location :window)
           ($ resize-handle
              {:set-size set-size
               :dir (if (= location :bottom)
                      :vertical
                      :horizontal)
               :location location
               :min 10
               :max 90}))
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
                           :set-state set-state
                           :hint (when (#{:bottom :window} location) hint)
                           :set-hint set-hint
                           :inspecting? inspecting?
                           :set-inspecting set-inspecting
                           :dock-devtools dock-devtools
                           :location location})
                       ($ :div {:style {:display    :flex
                                        :flex-direction (if (#{:window :bottom} location) :row :column)
                                        :flex       1
                                        :max-height "100%"
                                        :min-height "100%"}}
                          ($ :div {:style {:flex       1
                                           :overflow-y :auto
                                           :padding    "8px 0"
                                           :background "#fbfafd"}}
                             ($ (.-Provider preview-ctx) {:value set-preview-node}
                               (for [node (node->siblings (.-child fiber))]
                                 ($ tree-view {:node      node
                                               :state     state
                                               :set-state set-state
                                               :key       (.-index node)}))))
                          ($ inspector
                             {:state     state
                              :set-state set-state
                              :set-hint set-hint
                              :location location})))))))))

(defui devtools [{:keys [shortcut location] :as props}]
  (let [[visible? set-visible] (uix/use-state #(let [v (js/JSON.parse (js/localStorage.getItem ":cljs-devtools/visible?"))]
                                                 (or (nil? v) v)))]
    (uix/use-effect
     (fn []
       (when (string? shortcut)
         (let [shortcut (str/split shortcut #"-")]
           (when (seq shortcut)
             (let [down-handler (fn [^js e]
                                  (when
                                    (and (not= :window location)
                                         (->> shortcut
                                              (every? #(case %
                                                         "Control" (.-ctrlKey e)
                                                         "Alt" (.-altKey e)
                                                         "Meta" (.-metaKey e)
                                                         "Shift" (.-shiftKey e)
                                                         (= % (.-key e))))))
                                    (set-visible not)))]
               (.addEventListener js/window "keydown" down-handler)
               (fn []
                 (.removeEventListener js/window "keydown" down-handler)))))))
     [shortcut location])
    (uix/use-effect
      (fn []
        (js/localStorage.setItem ":cljs-devtools/visible?" visible?))
      [visible?])
    (when visible?
      ($ devtools* props))))

(defn hijack-re-frame []
  (when (exists? js/re-frame.core.subscribe)
    (let [subscribe js/re-frame.core.subscribe]
      (set! js/re-frame.core.subscribe
            (fn
              ([query]
               (let [ret (subscribe query)]
                 (set! (.-__devtools-label ^js ret) (first query))
                 ret))
              ([query dynv]
               (let [ret (subscribe query dynv)]
                 (set! (.-__devtools-label ^js ret) (first query))
                 ret)))))))

(defonce opts* (atom nil))

(defui devtools-popup [{:keys [on-mount location]}]
  (uix/use-effect
    #(on-mount)
    [on-mount])
  ($ devtools (assoc @opts* :location location)))

;; https://github.com/day8/re-frame-10x/blob/788bbd8e474c5e61e3cc604d2b01aa2b5a1be75d/src/day8/re_frame_10x/fx/window.cljs

(defn m->str [m]
  (->> m
       (reduce (fn [ret [k v]]
                 (let [k (if (keyword? k) (name k) k)
                       v (if (keyword? v) (name v) v)]
                   (conj ret (str k "=" v))))
               [])
       (str/join ",")))

(defonce devtools-root* (atom nil))

(defn mount [popup-window popup-document props]
  ;; When programming here, we need to be careful about which document and window
  ;; we are operating on, and keep in mind that the window can close without going
  ;; through standard react lifecycle, so we hook the beforeunload event.
  (let [node (.createElement popup-document "div")
        _ (set! (.-id node) "cljs-react-devtools-root")
        _ (.append (.-body popup-document) node)
        shadow-root (.attachShadow node #js {:mode "open"})
        root (uix.dom/create-root shadow-root)
        resize-update-scheduled? (atom false)
        handle-window-resize     (fn [_]
                                   (when-not @resize-update-scheduled?
                                     (goog.async.nextTick
                                       (fn []
                                         (let [width  (.-innerWidth popup-window)
                                               height (.-innerHeight popup-window)]
                                           (swap! window-settings merge {:width width :height height}))
                                         (reset! resize-update-scheduled? false)))
                                     (reset! resize-update-scheduled? true)))
        handle-window-position   (fn []
                                   ;; Only update re-frame if the windows position has changed.
                                   (let [{:keys [left top]} @window-settings
                                         screen-left (.-screenX popup-window)
                                         screen-top  (.-screenY popup-window)]
                                     (when (or (not= left screen-left)
                                               (not= top screen-top))
                                       (swap! window-settings merge {:left screen-left :top screen-top}))))
        window-position-interval (atom nil)
        on-unmount                  (fn [_]
                                      (.removeEventListener popup-window "resize" handle-window-resize)
                                      (some-> @window-position-interval js/clearInterval)
                                      (dock-devtools :location (:location @window-settings) :unload? true)
                                      nil)
        on-mount (fn []
                   (.addEventListener popup-window "resize" handle-window-resize)
                   (.addEventListener popup-window "beforeunload" on-unmount)
                   ;; Check the window position every 2 seconds
                   (reset! window-position-interval
                           (js/setInterval
                             handle-window-position
                             2000)))]
    (aset popup-window "onunload" #(reset! popout-window nil))
    (reset! devtools-root* root)
    (uix.dom/render-root ($ devtools-popup
                            (merge
                              {:on-mount on-mount}
                              props))
                         root)))

(defn open-debugger-window
  "Originally copied from re-frisk.devtool/open-debugger-window"
  [{:keys [width height top left]} props]
  (let [document-title  js/document.title
        window-title    (gstr/escapeString (str "cljs-react-devtools | " document-title))
        window-html     (str "<head><title>"
                             window-title
                             "</title></head><body style=\"margin: 0px;\"></body>")
        window-features (m->str
                          {:width       width
                           :height      height
                           :left        left
                           :top         top
                           :resizable   :yes
                           :scrollbars  :yes
                           :status      :no
                           :directories :no
                           :toolbar     :no
                           :menubar     :no})]
    ;; We would like to set the windows left and top positions to match the monitor that it was on previously, but Chrome doesn't give us
    ;; control over this, it will only position it within the same display that it was popped out on.
    (if-let [w (js/window.open "about:blank" "re-frame-10x-popout" window-features)]
      (let [d (.-document w)]
        ;; We had to comment out the following unmountComponentAtNode as it causes a React exception we assume
        ;; because React says el is not a root container that it knows about.
        ;; In theory by not freeing up the resources associated with this container (e.g. event handlers) we may be
        ;; creating memory leaks. However, with observation of the heap in developer tools we cannot see any significant
        ;; unbounded growth in memory usage.
        ;(when-let [el (.getElementById d "--re-frame-10x--")]
        ;  (r/unmount-component-at-node el)))
        (.open d)
        (.write d window-html)
        (aset w "onload" #(mount w d props))
        (.close d)
        (reset! popout-window w)))))

(declare render-devtools)

(defn dock-devtools [& {:keys [location unload?]}]
  (swap! window-settings assoc :location location)
  (js/localStorage.setItem ":cljs-devtools/window-location" (name location))
  (if @popout-window
    (do
      (.unmount @devtools-root*)
      (reset! devtools-root* nil)
      (when-not unload?
        (.close @popout-window))
      (js/setTimeout #(render-devtools {:location location}) 50))
    (do
      (.unmount @devtools-root*)
      (reset! devtools-root* nil)
      (.remove (js/document.getElementById "cljs-react-devtools-root"))
      (if (= location :window)
        (open-debugger-window @window-settings {:location location})
        (render-devtools {:location location})))))

(defn render-devtools [{:keys [location]}]
  (let [node (js/document.createElement "div")
        shadow-root (.attachShadow node #js {:mode "open"})
        _ (js/document.body.append node)
        _ (set! (.-id node) "cljs-react-devtools-root")
        root (uix.dom/create-root shadow-root)]
    (reset! devtools-root* root)
    (uix.dom/render-root ($ devtools (assoc @opts* :location location)) root)
    nil))

(defonce ^:private initialized? (atom false))

(defn init! [{:keys [root shortcut] :as opts}]
  (when-not @initialized?
    (reset! initialized? true)
    (reset! opts* opts)
    (hijack-re-frame)
    (js/setTimeout
      (fn []
        (let [node (js/document.createElement "div")]
          (set! (.-id node) "cljs-devtools-inspector-overlay")
          (js/document.body.append node)
          (render-devtools {:location (:location @window-settings)})))
      100)))
