goog.provide('cljs_react_devtools.core');
if((typeof cljs_react_devtools !== 'undefined') && (typeof cljs_react_devtools.core !== 'undefined') && (typeof cljs_react_devtools.core.popout_window !== 'undefined')){
} else {
cljs_react_devtools.core.popout_window = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
cljs_react_devtools.core.color_themes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"icon-chevron","icon-chevron",-1823771456),new cljs.core.Keyword(null,"tool-bar-text","tool-bar-text",-1541344509),new cljs.core.Keyword(null,"highlight-text","highlight-text",980506446),new cljs.core.Keyword(null,"resize-handle","resize-handle",542557491),new cljs.core.Keyword(null,"data-view-primitive","data-view-primitive",-805867117),new cljs.core.Keyword(null,"devtools-text","devtools-text",1734170100),new cljs.core.Keyword(null,"data-view-keyword","data-view-keyword",-1300167945),new cljs.core.Keyword(null,"devtools-bg","devtools-bg",-1808526887),new cljs.core.Keyword(null,"tree-view-bg","tree-view-bg",1629664539),new cljs.core.Keyword(null,"highlight-bg","highlight-bg",747485851),new cljs.core.Keyword(null,"data-view-string","data-view-string",2012141852)],["#b78ff1","#a769ff","#8835ff","#fcf8ff","#216aef","#51485f","#c94d22","#fefdff","#fbfafd","#eadcff","#388e28"]),new cljs.core.Keyword(null,"dark","dark",1818973999),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"icon-chevron","icon-chevron",-1823771456),new cljs.core.Keyword(null,"tool-bar-text","tool-bar-text",-1541344509),new cljs.core.Keyword(null,"highlight-text","highlight-text",980506446),new cljs.core.Keyword(null,"resize-handle","resize-handle",542557491),new cljs.core.Keyword(null,"data-view-primitive","data-view-primitive",-805867117),new cljs.core.Keyword(null,"devtools-text","devtools-text",1734170100),new cljs.core.Keyword(null,"data-view-keyword","data-view-keyword",-1300167945),new cljs.core.Keyword(null,"devtools-bg","devtools-bg",-1808526887),new cljs.core.Keyword(null,"tree-view-bg","tree-view-bg",1629664539),new cljs.core.Keyword(null,"highlight-bg","highlight-bg",747485851),new cljs.core.Keyword(null,"data-view-string","data-view-string",2012141852)],["#ede2fd","#ebe0fc","#ebe0fb","#3e2e44","#7be0ff","#ede2ff","#fac543","#302b32","#2d292d","#4d27f9","#5de144"])], null);
cljs_react_devtools.core.theme = uix.core.create_context.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"light","light",1918998747).cljs$core$IFn$_invoke$arity$1(cljs_react_devtools.core.color_themes));
cljs_react_devtools.core.node__GT_siblings = (function cljs_react_devtools$core$node__GT_siblings(node){
if(cljs.core.truth_(node)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(node,(cljs.core.truth_(node.sibling)?(function (){var G__30150 = node.sibling;
return (cljs_react_devtools.core.node__GT_siblings.cljs$core$IFn$_invoke$arity$1 ? cljs_react_devtools.core.node__GT_siblings.cljs$core$IFn$_invoke$arity$1(G__30150) : cljs_react_devtools.core.node__GT_siblings.call(null, G__30150));
})():null));
}),null,null));
} else {
return null;
}
});
cljs_react_devtools.core.fiber__GT_child = (function cljs_react_devtools$core$fiber__GT_child(fiber){
var or__5045__auto__ = fiber.child;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__30151 = fiber;
var G__30151__$1 = (((G__30151 == null))?null:G__30151.alternate);
if((G__30151__$1 == null)){
return null;
} else {
return G__30151__$1.child;
}
}
});
cljs_react_devtools.core.render_children = (function cljs_react_devtools$core$render_children(node,state,set_state){
var child = cljs_react_devtools.core.fiber__GT_child(node);
if(cljs.core.truth_(child)){
var iter__5523__auto__ = (function cljs_react_devtools$core$render_children_$_iter__30152(s__30153){
return (new cljs.core.LazySeq(null,(function (){
var s__30153__$1 = s__30153;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__30153__$1);
if(temp__5823__auto__){
var s__30153__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30153__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30153__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30155 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30154 = (0);
while(true){
if((i__30154 < size__5522__auto__)){
var node__$1 = cljs.core._nth(c__5521__auto__,i__30154);
cljs.core.chunk_append(b__30155,uix.compiler.alpha.component_element(cljs_react_devtools.core.tree_view,[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"node","node",581201198),node__$1,new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"set-state","set-state",1344116913),set_state,new cljs.core.Keyword(null,"key","key",-1516042587),node__$1.index], null)],[]));

var G__30480 = (i__30154 + (1));
i__30154 = G__30480;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30155),cljs_react_devtools$core$render_children_$_iter__30152(cljs.core.chunk_rest(s__30153__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30155),null);
}
} else {
var node__$1 = cljs.core.first(s__30153__$2);
return cljs.core.cons(uix.compiler.alpha.component_element(cljs_react_devtools.core.tree_view,[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"node","node",581201198),node__$1,new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"set-state","set-state",1344116913),set_state,new cljs.core.Keyword(null,"key","key",-1516042587),node__$1.index], null)],[]),cljs_react_devtools$core$render_children_$_iter__30152(cljs.core.rest(s__30153__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs_react_devtools.core.node__GT_siblings(child));
} else {
return null;
}
});
cljs_react_devtools.core.reagent_node_QMARK_ = (function cljs_react_devtools$core$reagent_node_QMARK_(node){
var el_type = node.elementType;
var and__5043__auto__ = cljs.core.fn_QMARK_(el_type);
if(and__5043__auto__){
return el_type.cljs$lang$type;
} else {
return and__5043__auto__;
}
});
cljs_react_devtools.core.uix_node_QMARK_ = (function cljs_react_devtools$core$uix_node_QMARK_(node){
var el_type = node.elementType;
var and__5043__auto__ = cljs.core.fn_QMARK_(el_type);
if(and__5043__auto__){
return el_type.uix_component_QMARK_;
} else {
return and__5043__auto__;
}
});
cljs_react_devtools.core.memo_node_QMARK_ = (function cljs_react_devtools$core$memo_node_QMARK_(node){
var el_type = node.elementType;
var and__5043__auto__ = el_type;
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Object,el_type.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((el_type["$$typeof"]),Symbol.for("react.memo"))));
} else {
return and__5043__auto__;
}
});
cljs_react_devtools.core.demunge_name = (function cljs_react_devtools$core$demunge_name(name){
var s = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.demunge_str(name),/\./);
return [clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.butlast(s)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(s))].join('');
});
cljs_react_devtools.core.demunge_fn_name = (function cljs_react_devtools$core$demunge_fn_name(name){
var s = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.demunge_str(name),/\//);
return [clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.butlast(s)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(s))].join('');
});
cljs_react_devtools.core.node__GT_name = (function cljs_react_devtools$core$node__GT_name(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30482 = arguments.length;
var i__5770__auto___30487 = (0);
while(true){
if((i__5770__auto___30487 < len__5769__auto___30482)){
args__5775__auto__.push((arguments[i__5770__auto___30487]));

var G__30488 = (i__5770__auto___30487 + (1));
i__5770__auto___30487 = G__30488;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs_react_devtools.core.node__GT_name.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs_react_devtools.core.node__GT_name.cljs$core$IFn$_invoke$arity$variadic = (function (node,p__30158){
var map__30159 = p__30158;
var map__30159__$1 = cljs.core.__destructure_map(map__30159);
var lib_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30159__$1,new cljs.core.Keyword(null,"lib?","lib?",-150324554));
var file_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30159__$1,new cljs.core.Keyword(null,"file?","file?",1755223728));
var el_type = node.elementType;
var memo_QMARK_ = cljs_react_devtools.core.memo_node_QMARK_(node.return);
return uix.compiler.aot._GT_el("div",[{'style':{'display':"flex",'justifyContent':"space-between"}}],[uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs(((typeof el_type === 'string')?el_type:(cljs.core.truth_(cljs_react_devtools.core.reagent_node_QMARK_(node))?cljs_react_devtools.core.demunge_name(el_type.displayName):((cljs.core.fn_QMARK_(el_type))?(function (){var or__5045__auto__ = el_type.displayName;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs_react_devtools.core.demunge_fn_name(el_type.name);
}
})():null))),["span",null,null,false],false),[(cljs.core.truth_(memo_QMARK_)?" [memo]":null),(cljs.core.truth_(lib_QMARK_)?(cljs.core.truth_(cljs_react_devtools.core.reagent_node_QMARK_(node))?" [reagent]":(cljs.core.truth_(cljs_react_devtools.core.uix_node_QMARK_(node))?" [uix]":((cljs.core.fn_QMARK_(el_type))?" [react]":null))):null)]),uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs((cljs.core.truth_((function (){var and__5043__auto__ = file_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.fn_QMARK_(el_type);
} else {
return and__5043__auto__;
}
})())?(function (){var temp__5823__auto__ = node.type._source;
if(cljs.core.truth_(temp__5823__auto__)){
var o = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(o.file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(o.lineNumber)].join('');
} else {
return null;
}
})():null),["span",null,null,false],false),[])]);
}));

(cljs_react_devtools.core.node__GT_name.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_react_devtools.core.node__GT_name.cljs$lang$applyTo = (function (seq30156){
var G__30157 = cljs.core.first(seq30156);
var seq30156__$1 = cljs.core.next(seq30156);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30157,seq30156__$1);
}));

cljs_react_devtools.core.button = (function cljs_react_devtools$core$button(props__29459__auto__){
var clj_props__29460__auto__ = uix.core.glue_args(props__29459__auto__);
var vec__30162 = [clj_props__29460__auto__];
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30162,(0),null);
var f__29461__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30493 = cljs_react_devtools.core.button.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30493)){
var f__29390__auto___30494 = temp__5823__auto___30493;
(f__29390__auto___30494.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30494.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30494.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("button",uix.compiler.attributes.interpret_attrs(cljs.core.update.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"style","style",-496642736),(function (p1__30160_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(props))?0.5:null)], null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.val),p1__30160_SHARP_)], 0));
})),["button",null,null,false],false),[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30165 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30166 = cljs_react_devtools.core.button;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30166);

try{if(((cljs.core.map_QMARK_(clj_props__29460__auto__)) || ((clj_props__29460__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__29460__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__29460__auto__) (clojure.core/nil? clj-props__29460__auto__))"].join('')));
}

return f__29461__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30165);
}} else {
return f__29461__auto__();
}
});

(cljs_react_devtools.core.button.uix_component_QMARK_ = true);

(cljs_react_devtools.core.button.displayName = "cljs-react-devtools.core/button");

Object.defineProperty(cljs_react_devtools.core.button,"name",(function (){var obj30168 = ({"value":"cljs-react-devtools.core/button"});
return obj30168;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30498 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30498.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30498.cljs$core$IFn$_invoke$arity$4(cljs_react_devtools.core.button,"",null,null) : sig__29399__auto___30498.call(null, cljs_react_devtools.core.button,"",null,null));

window.uix.dev.register_BANG_(cljs_react_devtools.core.button,cljs_react_devtools.core.button.displayName);

(cljs_react_devtools.core.button.fast_refresh_signature = sig__29399__auto___30498);
} else {
}
} else {
}

cljs_react_devtools.core.icon_chevron_down = uix.compiler.aot._GT_el("svg",[{'xmlns':"http://www.w3.org/2000/svg",'fill':"none",'viewBox':"0 0 24 24",'strokeWidth':"4",'stroke':"currentColor",'width':(8),'height':(8)}],[uix.compiler.aot._GT_el("path",[{'strokeLinecap':"round",'strokeLinejoin':"round",'d':"M19.5 8.25l-7.5 7.5-7.5-7.5"}],[])]);
cljs_react_devtools.core.icon_cursor_rays = uix.compiler.aot._GT_el("svg",[{'xmlns':"http://www.w3.org/2000/svg",'fill':"none",'viewBox':"0 0 24 24",'strokeWidth':"2",'stroke':"currentColor",'width':(18),'height':(18)}],[uix.compiler.aot._GT_el("path",[{'strokeLinecap':"round",'strokeLinejoin':"round",'d':"M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"}],[])]);
cljs_react_devtools.core.icon_window = uix.compiler.aot._GT_el("svg",[{'xmlns':"http://www.w3.org/2000/svg",'fill':"none",'viewBox':"0 0 24 24",'strokeWidth':"2",'stroke':"currentColor",'width':(18),'height':(18)}],[uix.compiler.aot._GT_el("path",[{'strokeLinecap':"round",'strokeLinejoin':"round",'d':"M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"}],[])]);
cljs_react_devtools.core.icon_dock_bottom = uix.compiler.aot._GT_el("svg",[{'width':(18),'height':(18),'viewBox':"0 0 24 24",'fill':"none",'xmlns':"http://www.w3.org/2000/svg"}],[uix.compiler.aot._GT_el("path",[{'d':"M3 14H21M4.125 19.5H19.875C20.496 19.5 21 18.996 21 18.375V5.625C21 5.004 20.496 4.5 19.875 4.5H4.125C3.504 4.5 3 5.004 3 5.625V18.375C3 18.996 3.504 19.5 4.125 19.5Z",'stroke':"currentColor",'strokeWidth':"2",'strokeLinecap':"round",'strokeLinejoin':"round"}],[]),uix.compiler.aot._GT_el("path",[{'d':"M3.375 18L3.375 14.5L20.625 14.5L20.625 18C20.625 18.621 20.121 19.125 19.5 19.125L4.5 19.125C3.879 19.125 3.375 18.621 3.375 18Z",'fill':"currentColor"}],[])]);
cljs_react_devtools.core.icon_dock_right = uix.compiler.aot._GT_el("svg",[{'width':(19),'height':(19),'viewBox':"0 0 24 24",'fill':"none",'xmlns':"http://www.w3.org/2000/svg"}],[uix.compiler.aot._GT_el("path",[{'d':"M4.125 19.5H19.875C20.496 19.5 21 18.996 21 18.375V5.625C21 5.004 20.496 4.5 19.875 4.5H4.125C3.504 4.5 3 5.004 3 5.625V18.375C3 18.996 3.504 19.5 4.125 19.5Z",'stroke':"currentColor",'strokeWidth':"2",'strokeLinecap':"round",'strokeLinejoin':"round"}],[]),uix.compiler.aot._GT_el("path",[{'d':"M19.875 19.5H15V4.5H19.875C20.496 4.5 21 5.004 21 5.625V18.375C21 18.996 20.496 19.5 19.875 19.5Z",'fill':"currentColor"}],[])]);
cljs_react_devtools.core.icon_dock_left = uix.compiler.aot._GT_el("svg",[{'width':(19),'height':(19),'viewBox':"0 0 24 24",'fill':"none",'xmlns':"http://www.w3.org/2000/svg"}],[uix.compiler.aot._GT_el("path",[{'d':"M9 4.5V19.5M4.125 19.5H19.875C20.496 19.5 21 18.996 21 18.375V5.625C21 5.004 20.496 4.5 19.875 4.5H4.125C3.504 4.5 3 5.004 3 5.625V18.375C3 18.996 3.504 19.5 4.125 19.5Z",'stroke':"currentColor",'strokeWidth':"2",'strokeLinecap':"round",'strokeLinejoin':"round"}],[]),uix.compiler.aot._GT_el("path",[{'d':"M4.125 19.5H9V4.5H4.125C3.504 4.5 3 5.004 3 5.625V18.375C3 18.996 3.504 19.5 4.125 19.5Z",'fill':"currentColor"}],[])]);
cljs_react_devtools.core.icon_arrow_path = uix.compiler.aot._GT_el("svg",[{'xmlns':"http://www.w3.org/2000/svg",'fill':"none",'viewBox':"0 0 24 24",'strokeWidth':"2",'stroke':"currentColor",'width':(14),'height':(14)}],[uix.compiler.aot._GT_el("path",[{'strokeLinecap':"round",'strokeLinejoin':"round",'d':"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"}],[])]);
cljs_react_devtools.core.preview_ctx = uix.core.create_context.cljs$core$IFn$_invoke$arity$0();
cljs_react_devtools.core.has_non_primitive_children_QMARK_ = (function cljs_react_devtools$core$has_non_primitive_children_QMARK_(node){
var children = cljs_react_devtools.core.node__GT_siblings(cljs_react_devtools.core.fiber__GT_child(node));
return cljs.core.some((function (p1__30169_SHARP_){
return (p1__30169_SHARP_.elementType == null);
}),children);
});
cljs_react_devtools.core.tree_view = (function cljs_react_devtools$core$tree_view(props__29459__auto__){
var clj_props__29460__auto__ = uix.core.glue_args(props__29459__auto__);
var vec__30171 = [clj_props__29460__auto__];
var map__30174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30171,(0),null);
var map__30174__$1 = cljs.core.__destructure_map(map__30174);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30174__$1,new cljs.core.Keyword(null,"node","node",581201198));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30174__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var set_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30174__$1,new cljs.core.Keyword(null,"set-state","set-state",1344116913));
var f__29461__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30505 = cljs_react_devtools.core.tree_view.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30505)){
var f__29390__auto___30506 = temp__5823__auto___30505;
(f__29390__auto___30506.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30506.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30506.call(null, ));
} else {
}
} else {
}

var memo_QMARK_ = cljs_react_devtools.core.memo_node_QMARK_(node);
var node__$1 = (cljs.core.truth_(memo_QMARK_)?cljs_react_devtools.core.fiber__GT_child(node):node);
var el_type = node__$1.elementType;
var vec__30175 = uix.core.use_state(false);
var closed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30175,(0),null);
var set_closed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30175,(1),null);
var map__30178 = state;
var map__30178__$1 = cljs.core.__destructure_map(map__30178);
var hide_dom_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30178__$1,new cljs.core.Keyword(null,"hide-dom?","hide-dom?",2128980793));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30178__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,node__$1);
var set_preview_node = uix.core.use_context(cljs_react_devtools.core.preview_ctx);
var colors = uix.core.use_context(cljs_react_devtools.core.theme);
if(cljs.core.truth_((function (){var or__5045__auto__ = (el_type == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var and__5043__auto__ = typeof el_type === 'string';
if(and__5043__auto__){
return hide_dom_QMARK_;
} else {
return and__5043__auto__;
}
}
})())){
return cljs_react_devtools.core.render_children(node__$1,state,set_state);
} else {
return uix.compiler.aot._GT_el("div",[{'style':{'margin':"4px 0 4px 8px"}}],[(cljs.core.truth_(cljs_react_devtools.core.has_non_primitive_children_QMARK_(node__$1))?null:uix.compiler.aot._GT_el("span",[{'style':{'margin':"0 4px 0 0",'color':uix.compiler.attributes.keyword__GT_string(new cljs.core.Keyword(null,"icon-chevron","icon-chevron",-1823771456).cljs$core$IFn$_invoke$arity$1(colors)),'display':"inline-block",'transition':"transform 100ms ease-in-out",'transform':uix.compiler.attributes.keyword__GT_string((cljs.core.truth_(closed_QMARK_)?"rotate(-90deg)":"rotate(0deg)"))}}],[cljs_react_devtools.core.icon_chevron_down])),uix.compiler.alpha.component_element(cljs_react_devtools.core.button,[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"highlight-text","highlight-text",980506446).cljs$core$IFn$_invoke$arity$1(colors),new cljs.core.Keyword(null,"user-select","user-select",-346451650),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"background","background",-863952629),((selected_QMARK_)?new cljs.core.Keyword(null,"highlight-bg","highlight-bg",747485851).cljs$core$IFn$_invoke$arity$1(colors):null)], null),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return (set_preview_node.cljs$core$IFn$_invoke$arity$1 ? set_preview_node.cljs$core$IFn$_invoke$arity$1(node__$1) : set_preview_node.call(null, node__$1));
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return (set_preview_node.cljs$core$IFn$_invoke$arity$1 ? set_preview_node.cljs$core$IFn$_invoke$arity$1(null) : set_preview_node.call(null, null));
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__30179_30514 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"selected","selected",574897764),node__$1);
(set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__30179_30514) : set_state.call(null, G__30179_30514));

if(selected_QMARK_){
return (set_closed.cljs$core$IFn$_invoke$arity$1 ? set_closed.cljs$core$IFn$_invoke$arity$1(cljs.core.not) : set_closed.call(null, cljs.core.not));
} else {
return null;
}
})], null)],[cljs_react_devtools.core.node__GT_name(node__$1)]),(cljs.core.truth_(closed_QMARK_)?null:cljs_react_devtools.core.render_children(node__$1,state,set_state))]);

}
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30180 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30181 = cljs_react_devtools.core.tree_view;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30181);

try{if(((cljs.core.map_QMARK_(clj_props__29460__auto__)) || ((clj_props__29460__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__29460__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__29460__auto__) (clojure.core/nil? clj-props__29460__auto__))"].join('')));
}

return f__29461__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30180);
}} else {
return f__29461__auto__();
}
});

(cljs_react_devtools.core.tree_view.uix_component_QMARK_ = true);

(cljs_react_devtools.core.tree_view.displayName = "cljs-react-devtools.core/tree-view");

Object.defineProperty(cljs_react_devtools.core.tree_view,"name",(function (){var obj30183 = ({"value":"cljs-react-devtools.core/tree-view"});
return obj30183;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30515 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30515.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30515.cljs$core$IFn$_invoke$arity$4(cljs_react_devtools.core.tree_view,"(uix/use-state false)(uix/use-context preview-ctx)(uix/use-context theme)",null,null) : sig__29399__auto___30515.call(null, cljs_react_devtools.core.tree_view,"(uix/use-state false)(uix/use-context preview-ctx)(uix/use-context theme)",null,null));

window.uix.dev.register_BANG_(cljs_react_devtools.core.tree_view,cljs_react_devtools.core.tree_view.displayName);

(cljs_react_devtools.core.tree_view.fast_refresh_signature = sig__29399__auto___30515);
} else {
}
} else {
}


cljs_react_devtools.core.data_view_map = (function cljs_react_devtools$core$data_view_map(props__29459__auto__){
var clj_props__29460__auto__ = uix.core.glue_args(props__29459__auto__);
var vec__30185 = [clj_props__29460__auto__];
var map__30188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30185,(0),null);
var map__30188__$1 = cljs.core.__destructure_map(map__30188);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30188__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30188__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var entries_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30188__$1,new cljs.core.Keyword(null,"entries-fn","entries-fn",792747104),cljs.core.seq);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30188__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),cljs.core.identity);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30188__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var set_open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30188__$1,new cljs.core.Keyword(null,"set-open","set-open",-55119703));
var closing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30188__$1,new cljs.core.Keyword(null,"closing","closing",-1862893890));
var f__29461__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30518 = cljs_react_devtools.core.data_view_map.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30518)){
var f__29390__auto___30519 = temp__5823__auto___30518;
(f__29390__auto___30519.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30519.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30519.call(null, ));
} else {
}
} else {
}

var entries = (entries_fn.cljs$core$IFn$_invoke$arity$1 ? entries_fn.cljs$core$IFn$_invoke$arity$1(data) : entries_fn.call(null, data));
if(cljs.core.seq(entries)){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__30189){
var vec__30190 = p__30189;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30190,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30190,(1),null);
var last_idx_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,(cljs.core.count(entries) - (1)));
var closing__$1 = ((last_idx_QMARK_)?uix.compiler.aot._GT_el(uix.compiler.aot.fragment,uix.compiler.attributes.interpret_attrs("}",[],false),[closing]):null);
return uix.compiler.aot._GT_el("div",[{'key':uix.compiler.attributes.keyword__GT_string(key),'style':{'display':"flex",'margin':uix.compiler.attributes.keyword__GT_string(((last_idx_QMARK_)?null:"0 0 4px 0"))}}],[(((idx === (0)))?uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs([(cljs.core.truth_(tag)?["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," "].join(''):null),"{"].join(''),["span",null,null,false],false),[]):null),uix.compiler.alpha.component_element(cljs_react_devtools.core.data_view,[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(key) : key_fn.call(null, key)),new cljs.core.Keyword(null,"key?","key?",1224624682),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (set_open.cljs$core$IFn$_invoke$arity$1 ? set_open.cljs$core$IFn$_invoke$arity$1(cljs.core.not) : set_open.call(null, cljs.core.not));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(((idx > (0)))?(cljs.core.truth_(tag)?(7.5 * ((3) + cljs.core.count(tag))):(6)):null)], null)], null)],[]),(cljs.core.truth_(open_QMARK_)?uix.compiler.alpha.component_element(cljs_react_devtools.core.data_view,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),val,new cljs.core.Keyword(null,"closing","closing",-1862893890),closing__$1], null)],[]):uix.compiler.aot._GT_el(uix.compiler.aot.fragment,uix.compiler.attributes.interpret_attrs(uix.compiler.alpha.component_element(cljs_react_devtools.core.closed_data_view,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),val,new cljs.core.Keyword(null,"set-open","set-open",-55119703),set_open], null)],[]),[],false),[closing__$1]))]);
}),entries);
} else {
return null;
}
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30193 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30194 = cljs_react_devtools.core.data_view_map;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30194);

try{if(((cljs.core.map_QMARK_(clj_props__29460__auto__)) || ((clj_props__29460__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__29460__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__29460__auto__) (clojure.core/nil? clj-props__29460__auto__))"].join('')));
}

return f__29461__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30193);
}} else {
return f__29461__auto__();
}
});

(cljs_react_devtools.core.data_view_map.uix_component_QMARK_ = true);

(cljs_react_devtools.core.data_view_map.displayName = "cljs-react-devtools.core/data-view-map");

Object.defineProperty(cljs_react_devtools.core.data_view_map,"name",(function (){var obj30196 = ({"value":"cljs-react-devtools.core/data-view-map"});
return obj30196;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30527 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30527.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30527.cljs$core$IFn$_invoke$arity$4(cljs_react_devtools.core.data_view_map,"",null,null) : sig__29399__auto___30527.call(null, cljs_react_devtools.core.data_view_map,"",null,null));

window.uix.dev.register_BANG_(cljs_react_devtools.core.data_view_map,cljs_react_devtools.core.data_view_map.displayName);

(cljs_react_devtools.core.data_view_map.fast_refresh_signature = sig__29399__auto___30527);
} else {
}
} else {
}

cljs_react_devtools.core.data_view_seq = (function cljs_react_devtools$core$data_view_seq(props__29459__auto__){
var clj_props__29460__auto__ = uix.core.glue_args(props__29459__auto__);
var vec__30198 = [clj_props__29460__auto__];
var map__30201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30198,(0),null);
var map__30201__$1 = cljs.core.__destructure_map(map__30201);
var vec__30202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30201__$1,new cljs.core.Keyword(null,"brackets","brackets",1720097338));
var open = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30202,(0),null);
var close = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30202,(1),null);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30201__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30201__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var closing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30201__$1,new cljs.core.Keyword(null,"closing","closing",-1862893890));
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30201__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var set_open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30201__$1,new cljs.core.Keyword(null,"set-open","set-open",-55119703));
var f__29461__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30528 = cljs_react_devtools.core.data_view_seq.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30528)){
var f__29390__auto___30529 = temp__5823__auto___30528;
(f__29390__auto___30529.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30529.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30529.call(null, ));
} else {
}
} else {
}

if(cljs.core.empty_QMARK_(data)){
return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,uix.compiler.attributes.interpret_attrs(open,[],false),[close,closing]);
} else {
return uix.compiler.aot._GT_el("div",[{'style':{'display':"flex"}}],[cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,val){
var last_idx_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,(cljs.core.count(data) - (1)));
var closing__$1 = ((last_idx_QMARK_)?uix.compiler.aot._GT_el(uix.compiler.aot.fragment,uix.compiler.attributes.interpret_attrs(close,[],false),[closing]):null);
return uix.compiler.aot._GT_el("div",[{'key':uix.compiler.attributes.keyword__GT_string(idx),'style':{'display':"flex"}}],[(((idx === (0)))?uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs([(cljs.core.truth_(tag)?["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," "].join(''):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(open)].join(''),["span",null,null,false],false),[]):null),(cljs.core.truth_(open_QMARK_)?uix.compiler.alpha.component_element(cljs_react_devtools.core.data_view,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),val,new cljs.core.Keyword(null,"style","style",-496642736),(((idx === (0)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null):null),new cljs.core.Keyword(null,"closing","closing",-1862893890),closing__$1], null)],[]):uix.compiler.aot._GT_el(uix.compiler.aot.fragment,uix.compiler.attributes.interpret_attrs(uix.compiler.alpha.component_element(cljs_react_devtools.core.closed_data_view,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),val,new cljs.core.Keyword(null,"set-open","set-open",-55119703),set_open,new cljs.core.Keyword(null,"style","style",-496642736),((last_idx_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8)], null))], null)],[]),[],false),[closing__$1]))]);
}),data)]);
}
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30205 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30206 = cljs_react_devtools.core.data_view_seq;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30206);

try{if(((cljs.core.map_QMARK_(clj_props__29460__auto__)) || ((clj_props__29460__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__29460__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__29460__auto__) (clojure.core/nil? clj-props__29460__auto__))"].join('')));
}

return f__29461__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30205);
}} else {
return f__29461__auto__();
}
});

(cljs_react_devtools.core.data_view_seq.uix_component_QMARK_ = true);

(cljs_react_devtools.core.data_view_seq.displayName = "cljs-react-devtools.core/data-view-seq");

Object.defineProperty(cljs_react_devtools.core.data_view_seq,"name",(function (){var obj30208 = ({"value":"cljs-react-devtools.core/data-view-seq"});
return obj30208;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30534 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30534.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30534.cljs$core$IFn$_invoke$arity$4(cljs_react_devtools.core.data_view_seq,"",null,null) : sig__29399__auto___30534.call(null, cljs_react_devtools.core.data_view_seq,"",null,null));

window.uix.dev.register_BANG_(cljs_react_devtools.core.data_view_seq,cljs_react_devtools.core.data_view_seq.displayName);

(cljs_react_devtools.core.data_view_seq.fast_refresh_signature = sig__29399__auto___30534);
} else {
}
} else {
}

if((typeof cljs_react_devtools !== 'undefined') && (typeof cljs_react_devtools.core !== 'undefined') && (typeof cljs_react_devtools.core.hint_ctx !== 'undefined')){
} else {
cljs_react_devtools.core.hint_ctx = uix.core.create_context.cljs$core$IFn$_invoke$arity$0();
}
cljs_react_devtools.core.fmt_fn = (function cljs_react_devtools$core$fmt_fn(data){
return ["fn<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((clojure.string.blank_QMARK_(data.name))?"anonymous":((clojure.string.includes_QMARK_(data.name,"$"))?(function (){var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.demunge(data.name),"/");
var name = cljs.core.last(parts);
var ns = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.butlast(parts));
return [ns,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
})():data.name
))),">"].join('');
});
cljs_react_devtools.core.data_view_primitive = (function cljs_react_devtools$core$data_view_primitive(props__29459__auto__){
var clj_props__29460__auto__ = uix.core.glue_args(props__29459__auto__);
var vec__30210 = [clj_props__29460__auto__];
var map__30213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30210,(0),null);
var map__30213__$1 = cljs.core.__destructure_map(map__30213);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30213__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var data_raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30213__$1,new cljs.core.Keyword(null,"data-raw","data-raw",822066711));
var closing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30213__$1,new cljs.core.Keyword(null,"closing","closing",-1862893890));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30213__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var f__29461__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30544 = cljs_react_devtools.core.data_view_primitive.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30544)){
var f__29390__auto___30545 = temp__5823__auto___30544;
(f__29390__auto___30545.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30545.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30545.call(null, ));
} else {
}
} else {
}

var data__$1 = (function (){var or__5045__auto__ = data_raw;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));
}
})();
return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,uix.compiler.attributes.interpret_attrs(uix.compiler.aot._GT_el("span",[{'title':uix.compiler.attributes.keyword__GT_string(data__$1),'style':{'color':uix.compiler.attributes.keyword__GT_string(color),'maxWidth':(180),'display':"inline-block",'overflow':"hidden",'textOverflow':"ellipsis"}}],[data__$1]),[],false),[closing]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30214 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30215 = cljs_react_devtools.core.data_view_primitive;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30215);

try{if(((cljs.core.map_QMARK_(clj_props__29460__auto__)) || ((clj_props__29460__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__29460__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__29460__auto__) (clojure.core/nil? clj-props__29460__auto__))"].join('')));
}

return f__29461__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30214);
}} else {
return f__29461__auto__();
}
});

(cljs_react_devtools.core.data_view_primitive.uix_component_QMARK_ = true);

(cljs_react_devtools.core.data_view_primitive.displayName = "cljs-react-devtools.core/data-view-primitive");

Object.defineProperty(cljs_react_devtools.core.data_view_primitive,"name",(function (){var obj30217 = ({"value":"cljs-react-devtools.core/data-view-primitive"});
return obj30217;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30551 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30551.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30551.cljs$core$IFn$_invoke$arity$4(cljs_react_devtools.core.data_view_primitive,"",null,null) : sig__29399__auto___30551.call(null, cljs_react_devtools.core.data_view_primitive,"",null,null));

window.uix.dev.register_BANG_(cljs_react_devtools.core.data_view_primitive,cljs_react_devtools.core.data_view_primitive.displayName);

(cljs_react_devtools.core.data_view_primitive.fast_refresh_signature = sig__29399__auto___30551);
} else {
}
} else {
}

cljs_react_devtools.core.atomic_data_view = (function cljs_react_devtools$core$atomic_data_view(p__30218){
var map__30219 = p__30218;
var map__30219__$1 = cljs.core.__destructure_map(map__30219);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30219__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30219__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
if(typeof data === 'number'){
return uix.compiler.alpha.component_element(cljs_react_devtools.core.data_view_primitive,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"data-view-primitive","data-view-primitive",-805867117).cljs$core$IFn$_invoke$arity$1(colors)], null)],[]);
} else {
if((data == null)){
return uix.compiler.alpha.component_element(cljs_react_devtools.core.data_view_primitive,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"data-view-primitive","data-view-primitive",-805867117).cljs$core$IFn$_invoke$arity$1(colors)], null)],[]);
} else {
if(cljs.core.boolean_QMARK_(data)){
return uix.compiler.alpha.component_element(cljs_react_devtools.core.data_view_primitive,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"data-view-primitive","data-view-primitive",-805867117).cljs$core$IFn$_invoke$arity$1(colors)], null)],[]);
} else {
if(typeof data === 'string'){
return uix.compiler.alpha.component_element(cljs_react_devtools.core.data_view_primitive,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"data-view-string","data-view-string",2012141852).cljs$core$IFn$_invoke$arity$1(colors)], null)],[]);
} else {
if(cljs.core.uuid_QMARK_(data)){
return uix.compiler.alpha.component_element(cljs_react_devtools.core.data_view_primitive,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"data-view-string","data-view-string",2012141852).cljs$core$IFn$_invoke$arity$1(colors)], null)],[]);
} else {
if((data instanceof cljs.core.Keyword)){
return uix.compiler.alpha.component_element(cljs_react_devtools.core.data_view_primitive,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"data-view-keyword","data-view-keyword",-1300167945).cljs$core$IFn$_invoke$arity$1(colors)], null)],[]);
} else {
if(cljs.core.fn_QMARK_(data)){
return uix.compiler.alpha.component_element(cljs_react_devtools.core.data_view_primitive,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-raw","data-raw",822066711),cljs_react_devtools.core.fmt_fn(data),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"data-view-primitive","data-view-primitive",-805867117).cljs$core$IFn$_invoke$arity$1(colors)], null)],[]);
} else {
return null;
}
}
}
}
}
}
}
});
cljs_react_devtools.core.constructor$ = (function cljs_react_devtools$core$constructor(o){
var G__30220 = o;
if((G__30220 == null)){
return null;
} else {
return G__30220.constructor;
}
});
cljs_react_devtools.core.atomic_QMARK_ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.number_QMARK_,cljs.core.nil_QMARK_,cljs.core.boolean_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.string_QMARK_,cljs.core.uuid_QMARK_,cljs.core.keyword_QMARK_,cljs.core.fn_QMARK_], 0));
cljs_react_devtools.core.closed_data_view = (function cljs_react_devtools$core$closed_data_view(props__29459__auto__){
var clj_props__29460__auto__ = uix.core.glue_args(props__29459__auto__);
var vec__30223 = [clj_props__29460__auto__];
var map__30226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30223,(0),null);
var map__30226__$1 = cljs.core.__destructure_map(map__30226);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30226__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30226__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var key_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30226__$1,new cljs.core.Keyword(null,"key?","key?",1224624682));
var set_open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30226__$1,new cljs.core.Keyword(null,"set-open","set-open",-55119703));
var f__29461__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30556 = cljs_react_devtools.core.closed_data_view.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30556)){
var f__29390__auto___30557 = temp__5823__auto___30556;
(f__29390__auto___30557.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30557.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30557.call(null, ));
} else {
}
} else {
}

var set_active = uix.core.use_context(cljs_react_devtools.core.hint_ctx);
var colors = uix.core.use_context(cljs_react_devtools.core.theme);
return uix.compiler.aot._GT_el("pre",[{'style':uix.compiler.attributes.convert_props(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px"], null),style], 0)),[],true),'onMouseEnter':(function (){
return (set_active.cljs$core$IFn$_invoke$arity$1 ? set_active.cljs$core$IFn$_invoke$arity$1(true) : set_active.call(null, true));
}),'onMouseLeave':(function (){
return (set_active.cljs$core$IFn$_invoke$arity$1 ? set_active.cljs$core$IFn$_invoke$arity$1(false) : set_active.call(null, false));
}),'onClick':(function (p1__30221_SHARP_){
if(cljs.core.truth_(cljs_react_devtools.core.atomic_QMARK_(data))){
} else {
(set_open.cljs$core$IFn$_invoke$arity$1 ? set_open.cljs$core$IFn$_invoke$arity$1(cljs.core.not) : set_open.call(null, cljs.core.not));
}

if(cljs.core.truth_(key_QMARK_)){
return null;
} else {
p1__30221_SHARP_.stopPropagation();

return console.dir(data);
}
})}],[((cljs.core.map_QMARK_(data))?((cljs.core.seq(data))?"{...}":"{}"):((cljs.core.vector_QMARK_(data))?((cljs.core.seq(data))?"[...]":"[]"):((cljs.core.set_QMARK_(data))?((cljs.core.seq(data))?"#{...}":"#{}"):((cljs.core.seq_QMARK_(data))?((cljs.core.seq(data))?"(...)":"()"):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Object,cljs_react_devtools.core.constructor$(data)))?(((Object.keys(data).length > (0)))?"#js {...}":"#js {}"):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Array,cljs_react_devtools.core.constructor$(data)))?(((data.length > (0)))?"#js [...]":"#js []"):(function (){var or__5045__auto__ = cljs_react_devtools.core.atomic_data_view(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"colors","colors",1157174732),colors], null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "...";
}
})()
))))))]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30227 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30228 = cljs_react_devtools.core.closed_data_view;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30228);

try{if(((cljs.core.map_QMARK_(clj_props__29460__auto__)) || ((clj_props__29460__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__29460__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__29460__auto__) (clojure.core/nil? clj-props__29460__auto__))"].join('')));
}

return f__29461__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30227);
}} else {
return f__29461__auto__();
}
});

(cljs_react_devtools.core.closed_data_view.uix_component_QMARK_ = true);

(cljs_react_devtools.core.closed_data_view.displayName = "cljs-react-devtools.core/closed-data-view");

Object.defineProperty(cljs_react_devtools.core.closed_data_view,"name",(function (){var obj30230 = ({"value":"cljs-react-devtools.core/closed-data-view"});
return obj30230;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30564 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30564.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30564.cljs$core$IFn$_invoke$arity$4(cljs_react_devtools.core.closed_data_view,"(uix/use-context hint-ctx)(uix/use-context theme)",null,null) : sig__29399__auto___30564.call(null, cljs_react_devtools.core.closed_data_view,"(uix/use-context hint-ctx)(uix/use-context theme)",null,null));

window.uix.dev.register_BANG_(cljs_react_devtools.core.closed_data_view,cljs_react_devtools.core.closed_data_view.displayName);

(cljs_react_devtools.core.closed_data_view.fast_refresh_signature = sig__29399__auto___30564);
} else {
}
} else {
}

cljs_react_devtools.core.data_view30231 = (function cljs_react_devtools$core$data_view30231(props__29459__auto__){
var clj_props__29460__auto__ = uix.core.glue_args(props__29459__auto__);
var vec__30232 = [clj_props__29460__auto__];
var map__30235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30232,(0),null);
var map__30235__$1 = cljs.core.__destructure_map(map__30235);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30235__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30235__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var key_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30235__$1,new cljs.core.Keyword(null,"key?","key?",1224624682));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30235__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30235__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var closing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30235__$1,new cljs.core.Keyword(null,"closing","closing",-1862893890));
var f__29461__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30567 = cljs_react_devtools.core.data_view30231.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30567)){
var f__29390__auto___30568 = temp__5823__auto___30567;
(f__29390__auto___30568.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30568.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30568.call(null, ));
} else {
}
} else {
}

var set_active = uix.core.use_context(cljs_react_devtools.core.hint_ctx);
var colors = uix.core.use_context(cljs_react_devtools.core.theme);
var vec__30236 = uix.core.use_state(open_QMARK_);
var open_QMARK___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30236,(0),null);
var set_open = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30236,(1),null);
return uix.compiler.aot._GT_el("pre",[{'style':uix.compiler.attributes.convert_props(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px"], null),style], 0)),[],true),'onMouseEnter':(function (){
return (set_active.cljs$core$IFn$_invoke$arity$1 ? set_active.cljs$core$IFn$_invoke$arity$1(true) : set_active.call(null, true));
}),'onMouseLeave':(function (){
return (set_active.cljs$core$IFn$_invoke$arity$1 ? set_active.cljs$core$IFn$_invoke$arity$1(false) : set_active.call(null, false));
}),'onClick':(function (e){
if(cljs.core.truth_(on_click)){
(on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null, ));
} else {
}

if(cljs.core.truth_(key_QMARK_)){
return null;
} else {
e.stopPropagation();

return console.dir(data);
}
})}],[((cljs.core.map_QMARK_(data))?uix.compiler.alpha.component_element(cljs_react_devtools.core.data_view_map,[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"open?","open?",1238443125),open_QMARK___$1,new cljs.core.Keyword(null,"set-open","set-open",-55119703),set_open,new cljs.core.Keyword(null,"closing","closing",-1862893890),closing], null)],[]):((cljs.core.vector_QMARK_(data))?uix.compiler.alpha.component_element(cljs_react_devtools.core.data_view_seq,[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"brackets","brackets",1720097338),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null),new cljs.core.Keyword(null,"open?","open?",1238443125),open_QMARK___$1,new cljs.core.Keyword(null,"set-open","set-open",-55119703),set_open,new cljs.core.Keyword(null,"closing","closing",-1862893890),closing], null)],[]):((cljs.core.set_QMARK_(data))?uix.compiler.alpha.component_element(cljs_react_devtools.core.data_view_seq,[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"brackets","brackets",1720097338),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#{","}"], null),new cljs.core.Keyword(null,"open?","open?",1238443125),open_QMARK___$1,new cljs.core.Keyword(null,"set-open","set-open",-55119703),set_open,new cljs.core.Keyword(null,"closing","closing",-1862893890),closing], null)],[]):((cljs.core.seq_QMARK_(data))?uix.compiler.alpha.component_element(cljs_react_devtools.core.data_view_seq,[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"brackets","brackets",1720097338),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"open?","open?",1238443125),open_QMARK___$1,new cljs.core.Keyword(null,"set-open","set-open",-55119703),set_open,new cljs.core.Keyword(null,"closing","closing",-1862893890),closing], null)],[]):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Object,cljs_react_devtools.core.constructor$(data)))?uix.compiler.alpha.component_element(cljs_react_devtools.core.data_view_map,[new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"tag","tag",-1290361223),"js",new cljs.core.Keyword(null,"entries-fn","entries-fn",792747104),Object.entries,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),cljs.core.keyword,new cljs.core.Keyword(null,"open?","open?",1238443125),open_QMARK___$1,new cljs.core.Keyword(null,"set-open","set-open",-55119703),set_open,new cljs.core.Keyword(null,"closing","closing",-1862893890),closing], null)],[]):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Array,cljs_react_devtools.core.constructor$(data)))?uix.compiler.alpha.component_element(cljs_react_devtools.core.data_view_seq,[new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"tag","tag",-1290361223),"js",new cljs.core.Keyword(null,"brackets","brackets",1720097338),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null),new cljs.core.Keyword(null,"open?","open?",1238443125),open_QMARK___$1,new cljs.core.Keyword(null,"set-open","set-open",-55119703),set_open,new cljs.core.Keyword(null,"closing","closing",-1862893890),closing], null)],[]):(function (){var or__5045__auto__ = cljs_react_devtools.core.atomic_data_view(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"colors","colors",1157174732),colors], null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,uix.compiler.attributes.interpret_attrs(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0)),[],false),[closing]);
}
})()
))))))]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30239 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30240 = cljs_react_devtools.core.data_view30231;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30240);

try{if(((cljs.core.map_QMARK_(clj_props__29460__auto__)) || ((clj_props__29460__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__29460__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__29460__auto__) (clojure.core/nil? clj-props__29460__auto__))"].join('')));
}

return f__29461__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30239);
}} else {
return f__29461__auto__();
}
});

(cljs_react_devtools.core.data_view30231.uix_component_QMARK_ = true);

(cljs_react_devtools.core.data_view30231.displayName = "cljs-react-devtools.core/data-view");

Object.defineProperty(cljs_react_devtools.core.data_view30231,"name",(function (){var obj30242 = ({"value":"cljs-react-devtools.core/data-view"});
return obj30242;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30578 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30578.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30578.cljs$core$IFn$_invoke$arity$4(cljs_react_devtools.core.data_view30231,"(uix/use-context hint-ctx)(uix/use-context theme)(uix/use-state open?)",null,null) : sig__29399__auto___30578.call(null, cljs_react_devtools.core.data_view30231,"(uix/use-context hint-ctx)(uix/use-context theme)(uix/use-state open?)",null,null));

window.uix.dev.register_BANG_(cljs_react_devtools.core.data_view30231,cljs_react_devtools.core.data_view30231.displayName);

(cljs_react_devtools.core.data_view30231.fast_refresh_signature = sig__29399__auto___30578);
} else {
}
} else {
}

cljs_react_devtools.core.data_view = uix.core.memo.cljs$core$IFn$_invoke$arity$1(cljs_react_devtools.core.data_view30231);
cljs_react_devtools.core.node__GT_props = (function cljs_react_devtools$core$node__GT_props(node){
var el_type = node.elementType;
if(typeof el_type === 'string'){
return uix.compiler.alpha.component_element(cljs_react_devtools.core.data_view,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),node.memoizedProps,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)],[]);
} else {
if(cljs.core.truth_(cljs_react_devtools.core.reagent_node_QMARK_(node))){
return uix.compiler.alpha.component_element(cljs_react_devtools.core.data_view,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){var props = cljs.core.rest((function (){var G__30243 = node;
var G__30243__$1 = (((G__30243 == null))?null:G__30243.memoizedProps);
if((G__30243__$1 == null)){
return null;
} else {
return G__30243__$1.argv;
}
})());
if(cljs.core.seq(props)){
return cljs.core.vec(props);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)],[]);
} else {
if(cljs.core.truth_(cljs_react_devtools.core.uix_node_QMARK_(node))){
return uix.compiler.alpha.component_element(cljs_react_devtools.core.data_view,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),node.memoizedProps.argv,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)],[]);
} else {
return null;
}
}
}
});
cljs_react_devtools.core.node__GT_hooks = (function cljs_react_devtools$core$node__GT_hooks(mem_state){
if(cljs.core.truth_((function (){var and__5043__auto__ = mem_state;
if(cljs.core.truth_(and__5043__auto__)){
return (!((mem_state.memoizedState == null)));
} else {
return and__5043__auto__;
}
})())){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(mem_state.memoizedState,(cljs.core.truth_(mem_state.next)?(function (){var G__30244 = mem_state.next;
return (cljs_react_devtools.core.node__GT_hooks.cljs$core$IFn$_invoke$arity$1 ? cljs_react_devtools.core.node__GT_hooks.cljs$core$IFn$_invoke$arity$1(G__30244) : cljs_react_devtools.core.node__GT_hooks.call(null, G__30244));
})():null));
}),null,null));
} else {
return null;
}
});
cljs_react_devtools.core.node__GT_captured_state = (function cljs_react_devtools$core$node__GT_captured_state(node){
var G__30245 = node;
var G__30245__$1 = (((G__30245 == null))?null:G__30245.stateNode);
var G__30245__$2 = (((G__30245__$1 == null))?null:G__30245__$1.cljsRatom);
if((G__30245__$2 == null)){
return null;
} else {
return G__30245__$2.captured;
}
});
cljs_react_devtools.core.rf_sub = (function cljs_react_devtools$core$rf_sub(node){
return node.__devtools_label;
});
cljs_react_devtools.core.node__GT_rf_subs = (function cljs_react_devtools$core$node__GT_rf_subs(node){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__30246_SHARP_){
var temp__5823__auto__ = cljs_react_devtools.core.rf_sub(p1__30246_SHARP_);
if(cljs.core.truth_(temp__5823__auto__)){
var label = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uix.compiler.alpha.component_element(cljs_react_devtools.core.data_view,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),label,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)],[]),p1__30246_SHARP_], null);
} else {
return null;
}
}),cljs_react_devtools.core.node__GT_captured_state(node));
});
cljs_react_devtools.core.node__GT_reactions = (function cljs_react_devtools$core$node__GT_reactions(node){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__30247_SHARP_){
if(((cljs.core.not((function (){var G__30248 = p1__30247_SHARP_;
var G__30248__$1 = (((G__30248 == null))?null:G__30248.state);
if((G__30248__$1 == null)){
return null;
} else {
return G__30248__$1.generation;
}
})())) && (cljs.core.not(cljs_react_devtools.core.rf_sub(p1__30247_SHARP_))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ratom",p1__30247_SHARP_], null);
} else {
return null;
}
}),cljs_react_devtools.core.node__GT_captured_state(node));
});
cljs_react_devtools.core.camel_case__GT_kebab_case = (function cljs_react_devtools$core$camel_case__GT_kebab_case(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/(?<=[a-z])(?=[A-Z])/)));
});
cljs_react_devtools.core.section_header = (function cljs_react_devtools$core$section_header(props__29459__auto__){
var clj_props__29460__auto__ = uix.core.glue_args(props__29459__auto__);
var vec__30250 = [clj_props__29460__auto__];
var map__30253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30250,(0),null);
var map__30253__$1 = cljs.core.__destructure_map(map__30253);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30253__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var f__29461__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30588 = cljs_react_devtools.core.section_header.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30588)){
var f__29390__auto___30591 = temp__5823__auto___30588;
(f__29390__auto___30591.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30591.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30591.call(null, ));
} else {
}
} else {
}

var colors = uix.core.use_context(cljs_react_devtools.core.theme);
return uix.compiler.aot._GT_el("div",[{'style':{'color':uix.compiler.attributes.keyword__GT_string(new cljs.core.Keyword(null,"highlight-text","highlight-text",980506446).cljs$core$IFn$_invoke$arity$1(colors)),'background':uix.compiler.attributes.keyword__GT_string(new cljs.core.Keyword(null,"highlight-bg","highlight-bg",747485851).cljs$core$IFn$_invoke$arity$1(colors)),'margin':"0 0 4px 0",'padding':"0 4px"}}],[children]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30254 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30255 = cljs_react_devtools.core.section_header;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30255);

try{if(((cljs.core.map_QMARK_(clj_props__29460__auto__)) || ((clj_props__29460__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__29460__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__29460__auto__) (clojure.core/nil? clj-props__29460__auto__))"].join('')));
}

return f__29461__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30254);
}} else {
return f__29461__auto__();
}
});

(cljs_react_devtools.core.section_header.uix_component_QMARK_ = true);

(cljs_react_devtools.core.section_header.displayName = "cljs-react-devtools.core/section-header");

Object.defineProperty(cljs_react_devtools.core.section_header,"name",(function (){var obj30257 = ({"value":"cljs-react-devtools.core/section-header"});
return obj30257;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30592 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30592.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30592.cljs$core$IFn$_invoke$arity$4(cljs_react_devtools.core.section_header,"(uix/use-context theme)",null,null) : sig__29399__auto___30592.call(null, cljs_react_devtools.core.section_header,"(uix/use-context theme)",null,null));

window.uix.dev.register_BANG_(cljs_react_devtools.core.section_header,cljs_react_devtools.core.section_header.displayName);

(cljs_react_devtools.core.section_header.fast_refresh_signature = sig__29399__auto___30592);
} else {
}
} else {
}

cljs_react_devtools.core.editable_ref = (function cljs_react_devtools$core$editable_ref(props__29459__auto__){
var clj_props__29460__auto__ = uix.core.glue_args(props__29459__auto__);
var vec__30260 = [clj_props__29460__auto__];
var map__30263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30260,(0),null);
var map__30263__$1 = cljs.core.__destructure_map(map__30263);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30263__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var set_hint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30263__$1,new cljs.core.Keyword(null,"set-hint","set-hint",2057522619));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30263__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30263__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var f__29461__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30594 = cljs_react_devtools.core.editable_ref.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30594)){
var f__29390__auto___30595 = temp__5823__auto___30594;
(f__29390__auto___30595.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30595.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30595.call(null, ));
} else {
}
} else {
}

var vec__30264 = uix.core.use_state(false);
var active_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30264,(0),null);
var set_active = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30264,(1),null);
var value = ref.state;
return uix.compiler.aot._GT_el("div",[{'onDoubleClick':(function (){
return (set_active.cljs$core$IFn$_invoke$arity$1 ? set_active.cljs$core$IFn$_invoke$arity$1(true) : set_active.call(null, true));
}),'onMouseEnter':(cljs.core.truth_(active_QMARK_)?null:(function (p1__30258_SHARP_){
var G__30267_30600 = ["double click on the value to update the ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join('');
(set_hint.cljs$core$IFn$_invoke$arity$1 ? set_hint.cljs$core$IFn$_invoke$arity$1(G__30267_30600) : set_hint.call(null, G__30267_30600));

return p1__30258_SHARP_.stopPropagation();
})),'onMouseLeave':(function (){
return (set_hint.cljs$core$IFn$_invoke$arity$1 ? set_hint.cljs$core$IFn$_invoke$arity$1(null) : set_hint.call(null, null));
})}],[(cljs.core.truth_(active_QMARK_)?uix.compiler.aot.create_uix_input("input",[{'defaultValue':uix.compiler.attributes.keyword__GT_string(value),'type':((typeof value === 'number')?new cljs.core.Keyword(null,"number","number",1570378438):new cljs.core.Keyword(null,"text","text",-1790561697)),'autoFocus':true,'onBlur':(function (){
return (set_active.cljs$core$IFn$_invoke$arity$1 ? set_active.cljs$core$IFn$_invoke$arity$1(false) : set_active.call(null, false));
}),'onKeyDown':(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"Enter")){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sub","sub",-2093760025),type)){
(ref.on_set = cljs.core.identity);
} else {
}

if(typeof value === 'number'){
cljs.core.reset_BANG_(ref,parseFloat(e.target.value,(10)));
} else {
cljs.core.reset_BANG_(ref,e.target.value);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sub","sub",-2093760025),type)){
(ref.on_set = undefined);
} else {
}

return (set_active.cljs$core$IFn$_invoke$arity$1 ? set_active.cljs$core$IFn$_invoke$arity$1(false) : set_active.call(null, false));
} else {
return null;
}
})}],[]):uix.compiler.alpha.component_element(cljs_react_devtools.core.data_view,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),value,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)],[]))]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30268 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30269 = cljs_react_devtools.core.editable_ref;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30269);

try{if(((cljs.core.map_QMARK_(clj_props__29460__auto__)) || ((clj_props__29460__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__29460__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__29460__auto__) (clojure.core/nil? clj-props__29460__auto__))"].join('')));
}

return f__29461__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30268);
}} else {
return f__29461__auto__();
}
});

(cljs_react_devtools.core.editable_ref.uix_component_QMARK_ = true);

(cljs_react_devtools.core.editable_ref.displayName = "cljs-react-devtools.core/editable-ref");

Object.defineProperty(cljs_react_devtools.core.editable_ref,"name",(function (){var obj30271 = ({"value":"cljs-react-devtools.core/editable-ref"});
return obj30271;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30603 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30603.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30603.cljs$core$IFn$_invoke$arity$4(cljs_react_devtools.core.editable_ref,"(uix/use-state false)",null,null) : sig__29399__auto___30603.call(null, cljs_react_devtools.core.editable_ref,"(uix/use-state false)",null,null));

window.uix.dev.register_BANG_(cljs_react_devtools.core.editable_ref,cljs_react_devtools.core.editable_ref.displayName);

(cljs_react_devtools.core.editable_ref.fast_refresh_signature = sig__29399__auto___30603);
} else {
}
} else {
}

cljs_react_devtools.core.reactions_view = (function cljs_react_devtools$core$reactions_view(props__29459__auto__){
var clj_props__29460__auto__ = uix.core.glue_args(props__29459__auto__);
var vec__30273 = [clj_props__29460__auto__];
var map__30276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30273,(0),null);
var map__30276__$1 = cljs.core.__destructure_map(map__30276);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30276__$1,new cljs.core.Keyword(null,"node","node",581201198));
var set_hint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30276__$1,new cljs.core.Keyword(null,"set-hint","set-hint",2057522619));
var f__29461__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30606 = cljs_react_devtools.core.reactions_view.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30606)){
var f__29390__auto___30607 = temp__5823__auto___30606;
(f__29390__auto___30607.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30607.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30607.call(null, ));
} else {
}
} else {
}

var reactions = cljs_react_devtools.core.node__GT_reactions(node);
var subs = cljs_react_devtools.core.node__GT_rf_subs(node);
return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,uix.compiler.attributes.interpret_attrs(((cljs.core.seq(reactions))?uix.compiler.aot._GT_el("div",[{'style':{'margin':"8px 0 0 0"}}],[uix.compiler.alpha.component_element(cljs_react_devtools.core.section_header,uix.compiler.attributes.interpret_props("reactions"),[]),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__30277){
var vec__30278 = p__30277;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30278,(0),null);
var reaction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30278,(1),null);
return uix.compiler.aot._GT_el("div",[{'key':uix.compiler.attributes.keyword__GT_string(idx),'style':{'display':"flex",'justifyContent':"space-between"}}],[uix.compiler.aot._GT_el("div",[{'style':{'display':"flex",'gap':(8)}}],[uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs(type,["span",null,null,false],false),[]),uix.compiler.alpha.component_element(cljs_react_devtools.core.editable_ref,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),reaction,new cljs.core.Keyword(null,"set-hint","set-hint",2057522619),set_hint,new cljs.core.Keyword(null,"label","label",1718410804),"reaction"], null)],[])])]);
}),reactions)]):null),[],false),[((cljs.core.seq(subs))?uix.compiler.aot._GT_el("div",[{'style':{'margin':"8px 0 0 0"}}],[uix.compiler.alpha.component_element(cljs_react_devtools.core.section_header,uix.compiler.attributes.interpret_props("re-frame subscriptions"),[]),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__30281){
var vec__30282 = p__30281;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30282,(0),null);
var sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30282,(1),null);
return uix.compiler.aot._GT_el("div",[{'key':uix.compiler.attributes.keyword__GT_string(idx),'style':{'display':"flex",'justifyContent':"space-between"}}],[uix.compiler.aot._GT_el("div",[{'style':{'display':"flex",'gap':(8)}}],[uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs(type,["span",null,null,false],false),[]),uix.compiler.alpha.component_element(cljs_react_devtools.core.editable_ref,[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),sub,new cljs.core.Keyword(null,"set-hint","set-hint",2057522619),set_hint,new cljs.core.Keyword(null,"label","label",1718410804),"subscription",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"sub","sub",-2093760025)], null)],[])])]);
}),subs)]):null)]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30285 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30286 = cljs_react_devtools.core.reactions_view;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30286);

try{if(((cljs.core.map_QMARK_(clj_props__29460__auto__)) || ((clj_props__29460__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__29460__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__29460__auto__) (clojure.core/nil? clj-props__29460__auto__))"].join('')));
}

return f__29461__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30285);
}} else {
return f__29461__auto__();
}
});

(cljs_react_devtools.core.reactions_view.uix_component_QMARK_ = true);

(cljs_react_devtools.core.reactions_view.displayName = "cljs-react-devtools.core/reactions-view");

Object.defineProperty(cljs_react_devtools.core.reactions_view,"name",(function (){var obj30288 = ({"value":"cljs-react-devtools.core/reactions-view"});
return obj30288;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30609 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30609.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30609.cljs$core$IFn$_invoke$arity$4(cljs_react_devtools.core.reactions_view,"",null,null) : sig__29399__auto___30609.call(null, cljs_react_devtools.core.reactions_view,"",null,null));

window.uix.dev.register_BANG_(cljs_react_devtools.core.reactions_view,cljs_react_devtools.core.reactions_view.displayName);

(cljs_react_devtools.core.reactions_view.fast_refresh_signature = sig__29399__auto___30609);
} else {
}
} else {
}

cljs_react_devtools.core.hooks_view = (function cljs_react_devtools$core$hooks_view(props__29459__auto__){
var clj_props__29460__auto__ = uix.core.glue_args(props__29459__auto__);
var vec__30290 = [clj_props__29460__auto__];
var map__30293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30290,(0),null);
var map__30293__$1 = cljs.core.__destructure_map(map__30293);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30293__$1,new cljs.core.Keyword(null,"node","node",581201198));
var f__29461__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30614 = cljs_react_devtools.core.hooks_view.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30614)){
var f__29390__auto___30615 = temp__5823__auto___30614;
(f__29390__auto___30615.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30615.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30615.call(null, ));
} else {
}
} else {
}

var hooks = cljs_react_devtools.core.node__GT_hooks(node.memoizedState);
var colors = uix.core.use_context(cljs_react_devtools.core.theme);
if(cljs.core.seq(hooks)){
return uix.compiler.aot._GT_el("div",[{'style':{'margin':"8px 0 0 0"}}],[uix.compiler.alpha.component_element(cljs_react_devtools.core.section_header,uix.compiler.attributes.interpret_props("hooks"),[]),cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,hook){
if(cljs.core.truth_((function (){var and__5043__auto__ = Array.isArray(hook);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = Array.isArray((hook[(1)]));
if(cljs.core.truth_(and__5043__auto____$1)){
return ((cljs.core.fn_QMARK_(((hook[(1)])[(0)]))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("bound dispatchSetState",((hook[(1)])[(0)]).name)));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return null;
} else {
var name = cljs_react_devtools.core.camel_case__GT_kebab_case((node._debugHookTypes[idx]));
return uix.compiler.aot._GT_el("div",[{'key':uix.compiler.attributes.keyword__GT_string(idx),'style':{'margin':"8px 0"}}],[uix.compiler.aot._GT_el("span",[{'style':{'color':uix.compiler.attributes.keyword__GT_string(new cljs.core.Keyword(null,"highlight-text","highlight-text",980506446).cljs$core$IFn$_invoke$arity$1(colors))}}],[name]),(function (){var G__30294 = name;
switch (G__30294) {
case "use-callback":
return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,uix.compiler.attributes.interpret_attrs(uix.compiler.aot._GT_el("div",[{'style':{'display':"flex",'gap':(8)}}],[uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs("callback:",["span",null,null,false],false),[]),uix.compiler.alpha.component_element(cljs_react_devtools.core.data_view,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),(hook[(0)]),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)],[])]),[],false),[uix.compiler.aot._GT_el("div",[{'style':{'display':"flex",'gap':(8)}}],[uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs("deps:",["span",null,null,false],false),[]),uix.compiler.alpha.component_element(cljs_react_devtools.core.data_view,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((hook[(1)])),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)],[])])]);

break;
case "use-effect":
return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,uix.compiler.attributes.interpret_attrs(uix.compiler.aot._GT_el("div",[{'style':{'display':"flex",'gap':(8)}}],[uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs("effect:",["span",null,null,false],false),[]),uix.compiler.alpha.component_element(cljs_react_devtools.core.data_view,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),hook.create,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)],[])]),[],false),[uix.compiler.aot._GT_el("div",[{'style':{'display':"flex",'gap':(8)}}],[uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs("deps:",["span",null,null,false],false),[]),uix.compiler.alpha.component_element(cljs_react_devtools.core.data_view,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec(hook.deps),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)],[])])]);

break;
case "use-ref":
return uix.compiler.alpha.component_element(cljs_react_devtools.core.data_view,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),hook.current.current,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)],[]);

break;
default:
return uix.compiler.alpha.component_element(cljs_react_devtools.core.data_view,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),hook,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)],[]);

}
})()]);
}
}),hooks)]);
} else {
return null;
}
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30295 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30296 = cljs_react_devtools.core.hooks_view;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30296);

try{if(((cljs.core.map_QMARK_(clj_props__29460__auto__)) || ((clj_props__29460__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__29460__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__29460__auto__) (clojure.core/nil? clj-props__29460__auto__))"].join('')));
}

return f__29461__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30295);
}} else {
return f__29461__auto__();
}
});

(cljs_react_devtools.core.hooks_view.uix_component_QMARK_ = true);

(cljs_react_devtools.core.hooks_view.displayName = "cljs-react-devtools.core/hooks-view");

Object.defineProperty(cljs_react_devtools.core.hooks_view,"name",(function (){var obj30298 = ({"value":"cljs-react-devtools.core/hooks-view"});
return obj30298;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30639 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30639.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30639.cljs$core$IFn$_invoke$arity$4(cljs_react_devtools.core.hooks_view,"(uix/use-context theme)",null,null) : sig__29399__auto___30639.call(null, cljs_react_devtools.core.hooks_view,"(uix/use-context theme)",null,null));

window.uix.dev.register_BANG_(cljs_react_devtools.core.hooks_view,cljs_react_devtools.core.hooks_view.displayName);

(cljs_react_devtools.core.hooks_view.fast_refresh_signature = sig__29399__auto___30639);
} else {
}
} else {
}

cljs_react_devtools.core.use_resize_handler = (function cljs_react_devtools$core$use_resize_handler(p__30300){
var map__30301 = p__30300;
var map__30301__$1 = cljs.core.__destructure_map(map__30301);
var set_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30301__$1,new cljs.core.Keyword(null,"set-size","set-size",-1037159587));
var dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30301__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30301__$1,new cljs.core.Keyword(null,"max","max",61366548),(100));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30301__$1,new cljs.core.Keyword(null,"min","min",444991522),(0));
var location__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30301__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var vec__30302 = uix.core.use_state(false);
var active_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30302,(0),null);
var set_active = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30302,(1),null);
var ref = uix.core.use_ref.cljs$core$IFn$_invoke$arity$0();
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_(active_QMARK_)){
var move_handler = (function (e){
var node = cljs.core.deref(ref);
var bb = node.getBoundingClientRect();
var v = (((100) / ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir,new cljs.core.Keyword(null,"vertical","vertical",718696748)))?window.innerHeight:window.innerWidth)) * ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir,new cljs.core.Keyword(null,"vertical","vertical",718696748)))?(bb.y - e.y):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location__$1,new cljs.core.Keyword(null,"left","left",-399115937)))?(e.x - (bb.x + bb.width)):(bb.x - e.x)
)));
var G__30306 = (function (p1__30299_SHARP_){
var v__$1 = (p1__30299_SHARP_ + v);
if((((max >= v__$1)) && ((v__$1 >= min)))){
return v__$1;
} else {
return p1__30299_SHARP_;
}
});
return (set_size.cljs$core$IFn$_invoke$arity$1 ? set_size.cljs$core$IFn$_invoke$arity$1(G__30306) : set_size.call(null, G__30306));
});
var up_handler = (function (){
return (set_active.cljs$core$IFn$_invoke$arity$1 ? set_active.cljs$core$IFn$_invoke$arity$1(false) : set_active.call(null, false));
});
document.addEventListener("mousemove",move_handler);

document.addEventListener("mouseup",up_handler);

return (function (){
document.removeEventListener("mousemove",move_handler);

return document.removeEventListener("mouseup",up_handler);
});
} else {
return null;
}
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_QMARK_,set_size,dir,max,min,location__$1], null))]);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref,set_active], null);
});
cljs_react_devtools.core.resize_handle = (function cljs_react_devtools$core$resize_handle(props__29459__auto__){
var clj_props__29460__auto__ = uix.core.glue_args(props__29459__auto__);
var vec__30308 = [clj_props__29460__auto__];
var map__30311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30308,(0),null);
var map__30311__$1 = cljs.core.__destructure_map(map__30311);
var props = map__30311__$1;
var set_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30311__$1,new cljs.core.Keyword(null,"set-size","set-size",-1037159587));
var dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30311__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30311__$1,new cljs.core.Keyword(null,"max","max",61366548));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30311__$1,new cljs.core.Keyword(null,"min","min",444991522));
var location__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30311__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var f__29461__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30644 = cljs_react_devtools.core.resize_handle.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30644)){
var f__29390__auto___30645 = temp__5823__auto___30644;
(f__29390__auto___30645.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30645.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30645.call(null, ));
} else {
}
} else {
}

var vec__30312 = cljs_react_devtools.core.use_resize_handler(props);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30312,(0),null);
var set_active = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30312,(1),null);
var colors = uix.core.use_context(cljs_react_devtools.core.theme);
return uix.compiler.aot._GT_el("div",[{'ref':uix.compiler.attributes.keyword__GT_string(ref),'onMouseDown':(function (){
return (set_active.cljs$core$IFn$_invoke$arity$1 ? set_active.cljs$core$IFn$_invoke$arity$1(true) : set_active.call(null, true));
}),'style':{'height':uix.compiler.attributes.keyword__GT_string(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir,new cljs.core.Keyword(null,"vertical","vertical",718696748)))?"4px":"100%")),'width':uix.compiler.attributes.keyword__GT_string(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir,new cljs.core.Keyword(null,"vertical","vertical",718696748)))?"100%":"4px")),'position':"absolute",'left':uix.compiler.attributes.keyword__GT_string(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(location__$1,new cljs.core.Keyword(null,"left","left",-399115937)))?(0):null)),'right':uix.compiler.attributes.keyword__GT_string(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location__$1,new cljs.core.Keyword(null,"left","left",-399115937)))?(0):null)),'top':(0),'background':uix.compiler.attributes.keyword__GT_string(new cljs.core.Keyword(null,"resize-handle","resize-handle",542557491).cljs$core$IFn$_invoke$arity$1(colors)),'cursor':uix.compiler.attributes.keyword__GT_string(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir,new cljs.core.Keyword(null,"vertical","vertical",718696748)))?new cljs.core.Keyword(null,"ns-resize","ns-resize",956566071):new cljs.core.Keyword(null,"ew-resize","ew-resize",2045777767)))}}],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30315 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30316 = cljs_react_devtools.core.resize_handle;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30316);

try{if(((cljs.core.map_QMARK_(clj_props__29460__auto__)) || ((clj_props__29460__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__29460__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__29460__auto__) (clojure.core/nil? clj-props__29460__auto__))"].join('')));
}

return f__29461__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30315);
}} else {
return f__29461__auto__();
}
});

(cljs_react_devtools.core.resize_handle.uix_component_QMARK_ = true);

(cljs_react_devtools.core.resize_handle.displayName = "cljs-react-devtools.core/resize-handle");

Object.defineProperty(cljs_react_devtools.core.resize_handle,"name",(function (){var obj30318 = ({"value":"cljs-react-devtools.core/resize-handle"});
return obj30318;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30648 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30648.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30648.cljs$core$IFn$_invoke$arity$4(cljs_react_devtools.core.resize_handle,"(use-resize-handler props)(uix/use-context theme)",null,null) : sig__29399__auto___30648.call(null, cljs_react_devtools.core.resize_handle,"(use-resize-handler props)(uix/use-context theme)",null,null));

window.uix.dev.register_BANG_(cljs_react_devtools.core.resize_handle,cljs_react_devtools.core.resize_handle.displayName);

(cljs_react_devtools.core.resize_handle.fast_refresh_signature = sig__29399__auto___30648);
} else {
}
} else {
}

cljs_react_devtools.core.use_size = (function cljs_react_devtools$core$use_size(v,k){
var vec__30320 = uix.core.use_state((function (){
var temp__5821__auto__ = localStorage.getItem(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k));
if(cljs.core.truth_(temp__5821__auto__)){
var n = temp__5821__auto__;
var n__$1 = parseFloat(n,(10));
if(cljs.core.truth_(Number.isNaN(n__$1))){
return v;
} else {
return n__$1;
}
} else {
return v;
}
}));
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30320,(0),null);
var set_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30320,(1),null);
var f = uix.hooks.alpha.use_memo((function (){
return goog.functions.debounce((function (p1__30319_SHARP_){
return localStorage.setItem(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),p1__30319_SHARP_);
}),(100));
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))]);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(size) : f.call(null, size));
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,f], null))]);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,set_size], null);
});
cljs_react_devtools.core.inspector = (function cljs_react_devtools$core$inspector(props__29459__auto__){
var clj_props__29460__auto__ = uix.core.glue_args(props__29459__auto__);
var vec__30324 = [clj_props__29460__auto__];
var map__30327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30324,(0),null);
var map__30327__$1 = cljs.core.__destructure_map(map__30327);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30327__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var set_hint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30327__$1,new cljs.core.Keyword(null,"set-hint","set-hint",2057522619));
var location__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30327__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var f__29461__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30651 = cljs_react_devtools.core.inspector.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30651)){
var f__29390__auto___30652 = temp__5823__auto___30651;
(f__29390__auto___30652.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30652.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30652.call(null, ));
} else {
}
} else {
}

var map__30328 = state;
var map__30328__$1 = cljs.core.__destructure_map(map__30328);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30328__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var vec__30329 = cljs_react_devtools.core.use_size((35),new cljs.core.Keyword("cljs-devtools-inspector","ui-size","cljs-devtools-inspector/ui-size",-1292295346));
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30329,(0),null);
var set_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30329,(1),null);
var vec__30332 = uix.core.use_state(false);
var active_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30332,(0),null);
var set_active = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30332,(1),null);
var horizontal_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),null,new cljs.core.Keyword(null,"window","window",724519534),null], null), null),location__$1);
var colors = uix.core.use_context(cljs_react_devtools.core.theme);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_(active_QMARK_)){
return (set_hint.cljs$core$IFn$_invoke$arity$1 ? set_hint.cljs$core$IFn$_invoke$arity$1("click on the value to log it to console") : set_hint.call(null, "click on the value to log it to console"));
} else {
return (set_hint.cljs$core$IFn$_invoke$arity$1 ? set_hint.cljs$core$IFn$_invoke$arity$1("") : set_hint.call(null, ""));
}
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_QMARK_,set_hint], null))]);

return uix.compiler.aot._GT_el("div",[{'style':{'borderTop':uix.compiler.attributes.keyword__GT_string(((horizontal_QMARK_)?null:"1px solid #8632ff75")),'width':uix.compiler.attributes.keyword__GT_string(((horizontal_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"%"].join(''):"100%")),'flexDirection':"column",'padding':"0 8px 32px",'borderLeft':uix.compiler.attributes.keyword__GT_string(((horizontal_QMARK_)?"1px solid #8632ff75":null)),'display':"flex",'position':"relative",'boxSizing':"border-box",'height':uix.compiler.attributes.keyword__GT_string(((horizontal_QMARK_)?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"vh"].join('')))}}],[uix.compiler.alpha.component_element(cljs_react_devtools.core.resize_handle,[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"set-size","set-size",-1037159587),set_size,new cljs.core.Keyword(null,"dir","dir",1734754661),((horizontal_QMARK_)?new cljs.core.Keyword(null,"horizontal","horizontal",2062109475):new cljs.core.Keyword(null,"vertical","vertical",718696748)),new cljs.core.Keyword(null,"max","max",61366548),(50),new cljs.core.Keyword(null,"min","min",444991522),(20)], null)],[]),(cljs.core.truth_(selected)?uix.compiler.alpha.component_element(cljs_react_devtools.core.hint_ctx.Provider,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),set_active], null)],[uix.compiler.aot._GT_el(uix.compiler.aot.fragment,uix.compiler.attributes.interpret_attrs(uix.compiler.alpha.component_element(cljs_react_devtools.core.button,[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return console.log(selected.elementType);
}),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return (set_active.cljs$core$IFn$_invoke$arity$1 ? set_active.cljs$core$IFn$_invoke$arity$1(true) : set_active.call(null, true));
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return (set_active.cljs$core$IFn$_invoke$arity$1 ? set_active.cljs$core$IFn$_invoke$arity$1(false) : set_active.call(null, false));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"8px 0 0 0",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"highlight-text","highlight-text",980506446).cljs$core$IFn$_invoke$arity$1(colors)], null)], null)],[cljs_react_devtools.core.node__GT_name.cljs$core$IFn$_invoke$arity$variadic(selected,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lib?","lib?",-150324554),true,new cljs.core.Keyword(null,"file?","file?",1755223728),true], 0))]),[],false),[uix.compiler.aot._GT_el("div",[{'style':{'margin':"8px 0 0 0",'overflowY':"auto",'flex':(1)}}],[uix.compiler.alpha.component_element(cljs_react_devtools.core.section_header,uix.compiler.attributes.interpret_props("props"),[]),cljs_react_devtools.core.node__GT_props(selected),(cljs.core.truth_(cljs_react_devtools.core.reagent_node_QMARK_(selected))?uix.compiler.alpha.component_element(cljs_react_devtools.core.reactions_view,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),selected,new cljs.core.Keyword(null,"set-hint","set-hint",2057522619),set_hint], null)],[]):null),uix.compiler.alpha.component_element(cljs_react_devtools.core.hooks_view,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),selected], null)],[])])])]):null)]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30335 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30336 = cljs_react_devtools.core.inspector;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30336);

try{if(((cljs.core.map_QMARK_(clj_props__29460__auto__)) || ((clj_props__29460__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__29460__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__29460__auto__) (clojure.core/nil? clj-props__29460__auto__))"].join('')));
}

return f__29461__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30335);
}} else {
return f__29461__auto__();
}
});

(cljs_react_devtools.core.inspector.uix_component_QMARK_ = true);

(cljs_react_devtools.core.inspector.displayName = "cljs-react-devtools.core/inspector");

Object.defineProperty(cljs_react_devtools.core.inspector,"name",(function (){var obj30338 = ({"value":"cljs-react-devtools.core/inspector"});
return obj30338;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30662 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30662.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30662.cljs$core$IFn$_invoke$arity$4(cljs_react_devtools.core.inspector,"(use-size 35 :cljs-devtools-inspector/ui-size)(uix/use-state false)(uix/use-context theme)(uix/use-effect (fn [] (if active? (set-hint \"click on the value to log it to console\") (set-hint \"\"))) [active? set-hint])",null,null) : sig__29399__auto___30662.call(null, cljs_react_devtools.core.inspector,"(use-size 35 :cljs-devtools-inspector/ui-size)(uix/use-state false)(uix/use-context theme)(uix/use-effect (fn [] (if active? (set-hint \"click on the value to log it to console\") (set-hint \"\"))) [active? set-hint])",null,null));

window.uix.dev.register_BANG_(cljs_react_devtools.core.inspector,cljs_react_devtools.core.inspector.displayName);

(cljs_react_devtools.core.inspector.fast_refresh_signature = sig__29399__auto___30662);
} else {
}
} else {
}

cljs_react_devtools.core.error_boundary = uix.core.create_error_boundary(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"derive-error-state","derive-error-state",-1373095498),(function (error){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null);
})], null),(function (p__30339,p__30340){
var vec__30341 = p__30339;
var map__30344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30341,(0),null);
var map__30344__$1 = cljs.core.__destructure_map(map__30344);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30344__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30341,(1),null);
var map__30345 = p__30340;
var map__30345__$1 = cljs.core.__destructure_map(map__30345);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30345__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_(error)){
return uix.compiler.aot._GT_el("div",[{'style':{'color':"#ec681f",'background':"#faf0ec",'flex':(1),'flexDirection':"column",'justifyContent':"center",'gap':(16),'display':"flex",'fontSize':"16px",'alignItems':"center"}}],[uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("Something went wrong",["div",null,null,false],false),[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs((((error instanceof Error))?error.message:error),["div",null,null,false],false),[]),uix.compiler.aot._GT_el("a",[{'href':"https://github.com/roman01la/cljs-react-devtools",'target':"blank_",'style':{'background':"#ff784b",'color':"#faf0ec",'padding':"8px 12px",'borderRadius':"3px"}}],["report an issue"])]);
} else {
return children;
}
}));
if((typeof cljs_react_devtools !== 'undefined') && (typeof cljs_react_devtools.core !== 'undefined') && (typeof cljs_react_devtools.core.window_settings !== 'undefined')){
} else {
cljs_react_devtools.core.window_settings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"location","location",1815599388),(function (){var v = localStorage.getItem(":cljs-devtools/window-location");
if(clojure.string.blank_QMARK_(v)){
return new cljs.core.Keyword(null,"bottom","bottom",-1550509018);
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
}
})()], null));
}
cljs_react_devtools.core.close_window = (function cljs_react_devtools$core$close_window(location){
if(cljs.core.truth_(cljs.core.deref(cljs_react_devtools.core.popout_window))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_react_devtools.core.window_settings,cljs.core.assoc,new cljs.core.Keyword(null,"location","location",1815599388),location);

return cljs.core.deref(cljs_react_devtools.core.popout_window).close();
} else {
return (cljs_react_devtools.core.dock_devtools.cljs$core$IFn$_invoke$arity$2 ? cljs_react_devtools.core.dock_devtools.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"location","location",1815599388),location) : cljs_react_devtools.core.dock_devtools.call(null, new cljs.core.Keyword(null,"location","location",1815599388),location));
}
});
cljs_react_devtools.core.toolbar = (function cljs_react_devtools$core$toolbar(props__29459__auto__){
var clj_props__29460__auto__ = uix.core.glue_args(props__29459__auto__);
var vec__30347 = [clj_props__29460__auto__];
var map__30350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30347,(0),null);
var map__30350__$1 = cljs.core.__destructure_map(map__30350);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30350__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var set_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30350__$1,new cljs.core.Keyword(null,"set-state","set-state",1344116913));
var hint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30350__$1,new cljs.core.Keyword(null,"hint","hint",439639918));
var set_hint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30350__$1,new cljs.core.Keyword(null,"set-hint","set-hint",2057522619));
var set_inspecting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30350__$1,new cljs.core.Keyword(null,"set-inspecting","set-inspecting",-862492542));
var inspecting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30350__$1,new cljs.core.Keyword(null,"inspecting?","inspecting?",784834160));
var dock_devtools = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30350__$1,new cljs.core.Keyword(null,"dock-devtools","dock-devtools",-2013730452));
var location__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30350__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var f__29461__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30667 = cljs_react_devtools.core.toolbar.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30667)){
var f__29390__auto___30668 = temp__5823__auto___30667;
(f__29390__auto___30668.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30668.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30668.call(null, ));
} else {
}
} else {
}

var map__30351 = state;
var map__30351__$1 = cljs.core.__destructure_map(map__30351);
var hide_dom_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30351__$1,new cljs.core.Keyword(null,"hide-dom?","hide-dom?",2128980793));
var colors = uix.core.use_context(cljs_react_devtools.core.theme);
return uix.compiler.aot._GT_el("div",[{'style':{'padding':"4px 8px",'borderBottom':"1px solid #8632ff75",'fontSize':"12px",'display':"flex",'justifyContent':"space-between",'gap':(32)}}],[uix.compiler.aot._GT_el("div",[{'onMouseEnter':(function (){
return (set_hint.cljs$core$IFn$_invoke$arity$1 ? set_hint.cljs$core$IFn$_invoke$arity$1("toggle DOM nodes in the tree view") : set_hint.call(null, "toggle DOM nodes in the tree view"));
}),'onMouseLeave':(function (){
return (set_hint.cljs$core$IFn$_invoke$arity$1 ? set_hint.cljs$core$IFn$_invoke$arity$1(null) : set_hint.call(null, null));
})}],[uix.compiler.aot.create_uix_input("input",[{'id':"cljs-devtools_hide-mo-nodes",'type':"checkbox",'checked':uix.compiler.attributes.keyword__GT_string(hide_dom_QMARK_),'onChange':(function (){
var G__30352 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"hide-dom?","hide-dom?",2128980793),cljs.core.not);
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__30352) : set_state.call(null, G__30352));
}),'style':{'margin':"0 4px 0 0"}}],[]),uix.compiler.aot._GT_el("label",[{'htmlFor':"cljs-devtools_hide-mo-nodes"}],["Hide DOM nodes"])]),uix.compiler.aot._GT_el("div",[{'style':{'display':"flex",'alignItems':"center"}}],[uix.compiler.aot._GT_el("div",[{'style':{'color':uix.compiler.attributes.keyword__GT_string(new cljs.core.Keyword(null,"tool-bar-text","tool-bar-text",-1541344509).cljs$core$IFn$_invoke$arity$1(colors)),'opacity':uix.compiler.attributes.keyword__GT_string(((clojure.string.blank_QMARK_(hint))?(0):(1))),'transition':"opacity 100ms ease-in-out"}}],[hint]),uix.compiler.alpha.component_element(cljs_react_devtools.core.button,[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"tool-bar-text","tool-bar-text",-1541344509).cljs$core$IFn$_invoke$arity$1(colors),new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(inspecting_QMARK_)?new cljs.core.Keyword(null,"highlight-bg","highlight-bg",747485851).cljs$core$IFn$_invoke$arity$1(colors):null),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 0 8px"], null),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return (set_hint.cljs$core$IFn$_invoke$arity$1 ? set_hint.cljs$core$IFn$_invoke$arity$1("select an element to inspect") : set_hint.call(null, "select an element to inspect"));
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return (set_hint.cljs$core$IFn$_invoke$arity$1 ? set_hint.cljs$core$IFn$_invoke$arity$1(null) : set_hint.call(null, null));
}),new cljs.core.Keyword(null,"title","title",636505583),"Select an element to inspect",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (set_inspecting.cljs$core$IFn$_invoke$arity$1 ? set_inspecting.cljs$core$IFn$_invoke$arity$1(cljs.core.not) : set_inspecting.call(null, cljs.core.not));
})], null)],[cljs_react_devtools.core.icon_cursor_rays]),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"window","window",724519534),location__$1))?uix.compiler.alpha.component_element(cljs_react_devtools.core.button,[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"tool-bar-text","tool-bar-text",-1541344509).cljs$core$IFn$_invoke$arity$1(colors),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 0 8px"], null),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return (set_hint.cljs$core$IFn$_invoke$arity$1 ? set_hint.cljs$core$IFn$_invoke$arity$1("undock into separate window") : set_hint.call(null, "undock into separate window"));
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return (set_hint.cljs$core$IFn$_invoke$arity$1 ? set_hint.cljs$core$IFn$_invoke$arity$1(null) : set_hint.call(null, null));
}),new cljs.core.Keyword(null,"title","title",636505583),"Undock into separate window",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (dock_devtools.cljs$core$IFn$_invoke$arity$2 ? dock_devtools.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"window","window",724519534)) : dock_devtools.call(null, new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"window","window",724519534)));
})], null)],[cljs_react_devtools.core.icon_window]):null),uix.compiler.alpha.component_element(cljs_react_devtools.core.button,[new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"tool-bar-text","tool-bar-text",-1541344509).cljs$core$IFn$_invoke$arity$1(colors),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 0 8px"], null),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return (set_hint.cljs$core$IFn$_invoke$arity$1 ? set_hint.cljs$core$IFn$_invoke$arity$1("dock to bottom") : set_hint.call(null, "dock to bottom"));
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return (set_hint.cljs$core$IFn$_invoke$arity$1 ? set_hint.cljs$core$IFn$_invoke$arity$1(null) : set_hint.call(null, null));
}),new cljs.core.Keyword(null,"title","title",636505583),"Dock to bottom",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location__$1,new cljs.core.Keyword(null,"bottom","bottom",-1550509018)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs_react_devtools.core.close_window(new cljs.core.Keyword(null,"bottom","bottom",-1550509018));
})], null)],[cljs_react_devtools.core.icon_dock_bottom]),uix.compiler.alpha.component_element(cljs_react_devtools.core.button,[new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"tool-bar-text","tool-bar-text",-1541344509).cljs$core$IFn$_invoke$arity$1(colors),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 0 8px"], null),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return (set_hint.cljs$core$IFn$_invoke$arity$1 ? set_hint.cljs$core$IFn$_invoke$arity$1("dock to the left") : set_hint.call(null, "dock to the left"));
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return (set_hint.cljs$core$IFn$_invoke$arity$1 ? set_hint.cljs$core$IFn$_invoke$arity$1(null) : set_hint.call(null, null));
}),new cljs.core.Keyword(null,"title","title",636505583),"Dock to the left",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location__$1,new cljs.core.Keyword(null,"left","left",-399115937)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs_react_devtools.core.close_window(new cljs.core.Keyword(null,"left","left",-399115937));
})], null)],[cljs_react_devtools.core.icon_dock_left]),uix.compiler.alpha.component_element(cljs_react_devtools.core.button,[new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"tool-bar-text","tool-bar-text",-1541344509).cljs$core$IFn$_invoke$arity$1(colors),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 0 8px"], null),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return (set_hint.cljs$core$IFn$_invoke$arity$1 ? set_hint.cljs$core$IFn$_invoke$arity$1("dock to the right") : set_hint.call(null, "dock to the right"));
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return (set_hint.cljs$core$IFn$_invoke$arity$1 ? set_hint.cljs$core$IFn$_invoke$arity$1(null) : set_hint.call(null, null));
}),new cljs.core.Keyword(null,"title","title",636505583),"Dock to the right",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location__$1,new cljs.core.Keyword(null,"right","right",-452581833)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs_react_devtools.core.close_window(new cljs.core.Keyword(null,"right","right",-452581833));
})], null)],[cljs_react_devtools.core.icon_dock_right])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30353 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30354 = cljs_react_devtools.core.toolbar;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30354);

try{if(((cljs.core.map_QMARK_(clj_props__29460__auto__)) || ((clj_props__29460__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__29460__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__29460__auto__) (clojure.core/nil? clj-props__29460__auto__))"].join('')));
}

return f__29461__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30353);
}} else {
return f__29461__auto__();
}
});

(cljs_react_devtools.core.toolbar.uix_component_QMARK_ = true);

(cljs_react_devtools.core.toolbar.displayName = "cljs-react-devtools.core/toolbar");

Object.defineProperty(cljs_react_devtools.core.toolbar,"name",(function (){var obj30356 = ({"value":"cljs-react-devtools.core/toolbar"});
return obj30356;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30673 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30673.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30673.cljs$core$IFn$_invoke$arity$4(cljs_react_devtools.core.toolbar,"(uix/use-context theme)",null,null) : sig__29399__auto___30673.call(null, cljs_react_devtools.core.toolbar,"(uix/use-context theme)",null,null));

window.uix.dev.register_BANG_(cljs_react_devtools.core.toolbar,cljs_react_devtools.core.toolbar.displayName);

(cljs_react_devtools.core.toolbar.fast_refresh_signature = sig__29399__auto___30673);
} else {
}
} else {
}

cljs_react_devtools.core.intersects_QMARK_ = (function cljs_react_devtools$core$intersects_QMARK_(p__30357,rect){
var vec__30358 = p__30357;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30358,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30358,(1),null);
return (((((rect.x <= x)) && ((x <= (rect.x + rect.width))))) && ((((rect.y <= y)) && ((y <= (rect.y + rect.height))))));
});
cljs_react_devtools.core.use_dom_inspector = (function cljs_react_devtools$core$use_dom_inspector(p__30368){
var map__30369 = p__30368;
var map__30369__$1 = cljs.core.__destructure_map(map__30369);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30369__$1,new cljs.core.Keyword(null,"root","root",-448657453));
var set_inspecting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30369__$1,new cljs.core.Keyword(null,"set-inspecting","set-inspecting",-862492542));
var on_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30369__$1,new cljs.core.Keyword(null,"on-target","on-target",-1404015998));
var skip_dom_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30369__$1,new cljs.core.Keyword(null,"skip-dom?","skip-dom?",-1882515885));
var preview_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30369__$1,new cljs.core.Keyword(null,"preview-node","preview-node",310928567));
var vec__30370 = uix.core.use_state(null);
var rect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30370,(0),null);
var set_rect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30370,(1),null);
var nodes = uix.hooks.alpha.use_memo((function (){
return cljs.core.reverse(cljs.core.tree_seq((function (p1__30361_SHARP_){
return (!((p1__30361_SHARP_.children == null)));
}),(function (p1__30362_SHARP_){
return cljs.core.seq(p1__30362_SHARP_.children);
}),root));
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root], null))]);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_(preview_node)){
var nodes__$1 = cljs.core.tree_seq((function (p1__30363_SHARP_){
return (!((cljs_react_devtools.core.fiber__GT_child(p1__30363_SHARP_) == null)));
}),(function (p1__30364_SHARP_){
return cljs_react_devtools.core.node__GT_siblings(cljs_react_devtools.core.fiber__GT_child(p1__30364_SHARP_));
}),preview_node);
var temp__5823__auto__ = cljs.core.some((function (p1__30365_SHARP_){
if(cljs.core.truth_(p1__30365_SHARP_.stateNode)){
return p1__30365_SHARP_;
} else {
return null;
}
}),nodes__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var node = temp__5823__auto__;
var dom_node = node.stateNode;
var temp__5823__auto____$1 = (cljs.core.truth_(dom_node.getBoundingClientRect)?dom_node.getBoundingClientRect():(function (){var G__30375 = uix.dom.find_dom_node(dom_node);
if((G__30375 == null)){
return null;
} else {
return G__30375.getBoundingClientRect();
}
})());
if(cljs.core.truth_(temp__5823__auto____$1)){
var rect__$1 = temp__5823__auto____$1;
return (set_rect.cljs$core$IFn$_invoke$arity$1 ? set_rect.cljs$core$IFn$_invoke$arity$1(rect__$1) : set_rect.call(null, rect__$1));
} else {
return null;
}
} else {
return null;
}
} else {
var node_BANG_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var mouse_handler = (function (e){
var x = e.x;
var y = e.y;
var temp__5823__auto__ = cljs.core.some((function (p1__30366_SHARP_){
if(cljs_react_devtools.core.intersects_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),p1__30366_SHARP_.getBoundingClientRect())){
return p1__30366_SHARP_;
} else {
return null;
}
}),nodes);
if(cljs.core.truth_(temp__5823__auto__)){
var node = temp__5823__auto__;
cljs.core.reset_BANG_(node_BANG_,node);

var G__30376 = node.getBoundingClientRect();
return (set_rect.cljs$core$IFn$_invoke$arity$1 ? set_rect.cljs$core$IFn$_invoke$arity$1(G__30376) : set_rect.call(null, G__30376));
} else {
return null;
}
});
var click_handler = (function (){
var temp__5823__auto__ = cljs.core.deref(node_BANG_);
if(cljs.core.truth_(temp__5823__auto__)){
var node = temp__5823__auto__;
var temp__5823__auto____$1 = cljs.core.some((function (p1__30367_SHARP_){
if(clojure.string.starts_with_QMARK_(p1__30367_SHARP_,"__reactFiber")){
if(cljs.core.truth_(skip_dom_QMARK_)){
return (node[p1__30367_SHARP_])._debugOwner;
} else {
return (node[p1__30367_SHARP_]);
}
} else {
return null;
}
}),Object.keys(node));
if(cljs.core.truth_(temp__5823__auto____$1)){
var target = temp__5823__auto____$1;
(on_target.cljs$core$IFn$_invoke$arity$1 ? on_target.cljs$core$IFn$_invoke$arity$1(target) : on_target.call(null, target));

(set_inspecting.cljs$core$IFn$_invoke$arity$1 ? set_inspecting.cljs$core$IFn$_invoke$arity$1(false) : set_inspecting.call(null, false));

var temp__5823__auto____$2 = cljs.core.deref(cljs_react_devtools.core.popout_window);
if(cljs.core.truth_(temp__5823__auto____$2)){
var w = temp__5823__auto____$2;
return w.focus();
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
document.addEventListener("mousemove",mouse_handler);

document.addEventListener("click",click_handler);

return (function (){
document.removeEventListener("mousemove",mouse_handler);

return document.removeEventListener("click",click_handler);
});
}
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,nodes,on_target,set_inspecting,skip_dom_QMARK_,preview_node], null))]);

return rect;
});
cljs_react_devtools.core.inspector_overlay = (function cljs_react_devtools$core$inspector_overlay(props__29459__auto__){
var clj_props__29460__auto__ = uix.core.glue_args(props__29459__auto__);
var vec__30379 = [clj_props__29460__auto__];
var map__30382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30379,(0),null);
var map__30382__$1 = cljs.core.__destructure_map(map__30382);
var props = map__30382__$1;
var set_inspecting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30382__$1,new cljs.core.Keyword(null,"set-inspecting","set-inspecting",-862492542));
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30382__$1,new cljs.core.Keyword(null,"root","root",-448657453));
var on_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30382__$1,new cljs.core.Keyword(null,"on-target","on-target",-1404015998));
var skip_dom_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30382__$1,new cljs.core.Keyword(null,"skip-dom?","skip-dom?",-1882515885));
var preview_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30382__$1,new cljs.core.Keyword(null,"preview-node","preview-node",310928567));
var f__29461__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30680 = cljs_react_devtools.core.inspector_overlay.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30680)){
var f__29390__auto___30681 = temp__5823__auto___30680;
(f__29390__auto___30681.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30681.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30681.call(null, ));
} else {
}
} else {
}

var temp__5823__auto__ = cljs_react_devtools.core.use_dom_inspector(props);
if(cljs.core.truth_(temp__5823__auto__)){
var rect = temp__5823__auto__;
return uix.compiler.aot._GT_el("div",[{'style':{'zIndex':(9998),'position':"fixed",'width':"100vw",'height':"100vh",'top':(0),'left':(0),'background':"#e7c2ff1a",'onClick':uix.compiler.attributes.keyword__GT_string((function (p1__30377_SHARP_){
return p1__30377_SHARP_.stopPropagation();
}))}}],[uix.compiler.aot._GT_el("div",[{'style':{'pointerEvents':"none",'top':uix.compiler.attributes.keyword__GT_string(rect.y),'width':uix.compiler.attributes.keyword__GT_string(rect.width),'background':"#cd80ffa6",'position':"absolute",'boxSizing':"border-box",'border':"1px dashed #da33ff",'height':uix.compiler.attributes.keyword__GT_string(rect.height),'left':uix.compiler.attributes.keyword__GT_string(rect.x)}}],[])]);
} else {
return null;
}
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30383 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30384 = cljs_react_devtools.core.inspector_overlay;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30384);

try{if(((cljs.core.map_QMARK_(clj_props__29460__auto__)) || ((clj_props__29460__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__29460__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__29460__auto__) (clojure.core/nil? clj-props__29460__auto__))"].join('')));
}

return f__29461__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30383);
}} else {
return f__29461__auto__();
}
});

(cljs_react_devtools.core.inspector_overlay.uix_component_QMARK_ = true);

(cljs_react_devtools.core.inspector_overlay.displayName = "cljs-react-devtools.core/inspector-overlay");

Object.defineProperty(cljs_react_devtools.core.inspector_overlay,"name",(function (){var obj30386 = ({"value":"cljs-react-devtools.core/inspector-overlay"});
return obj30386;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30685 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30685.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30685.cljs$core$IFn$_invoke$arity$4(cljs_react_devtools.core.inspector_overlay,"(use-dom-inspector props)",null,null) : sig__29399__auto___30685.call(null, cljs_react_devtools.core.inspector_overlay,"(use-dom-inspector props)",null,null));

window.uix.dev.register_BANG_(cljs_react_devtools.core.inspector_overlay,cljs_react_devtools.core.inspector_overlay.displayName);

(cljs_react_devtools.core.inspector_overlay.fast_refresh_signature = sig__29399__auto___30685);
} else {
}
} else {
}

cljs_react_devtools.core.devtools_STAR_ = (function cljs_react_devtools$core$devtools_STAR_(props__29459__auto__){
var clj_props__29460__auto__ = uix.core.glue_args(props__29459__auto__);
var vec__30390 = [clj_props__29460__auto__];
var map__30393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30390,(0),null);
var map__30393__$1 = cljs.core.__destructure_map(map__30393);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30393__$1,new cljs.core.Keyword(null,"root","root",-448657453));
var location__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30393__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var f__29461__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30686 = cljs_react_devtools.core.devtools_STAR_.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30686)){
var f__29390__auto___30687 = temp__5823__auto___30686;
(f__29390__auto___30687.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30687.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30687.call(null, ));
} else {
}
} else {
}

var vec__30394 = uix.core.use_state((0));
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30394,(0),null);
var set_tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30394,(1),null);
var fiber = uix.hooks.alpha.use_memo((function (){
if(cljs.core.truth_(root)){

return cljs.core.some((function (p1__30387_SHARP_){
if(clojure.string.starts_with_QMARK_(p1__30387_SHARP_,"__reactContainer")){
return (root[p1__30387_SHARP_]);
} else {
return null;
}
}),Object.keys(root));
} else {
return null;
}
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,tid], null))]);
var vec__30397 = uix.core.use_state(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hide-dom?","hide-dom?",2128980793),true,new cljs.core.Keyword(null,"selected","selected",574897764),(cljs.core.truth_((function (){var and__5043__auto__ = root;
if(cljs.core.truth_(and__5043__auto__)){
return fiber;
} else {
return and__5043__auto__;
}
})())?cljs_react_devtools.core.fiber__GT_child(fiber):null)], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30397,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30397,(1),null);
var vec__30400 = cljs_react_devtools.core.use_size((35),new cljs.core.Keyword("cljs-devtools","ui-size","cljs-devtools/ui-size",1389587364));
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30400,(0),null);
var set_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30400,(1),null);
var vec__30403 = uix.core.use_state("");
var hint = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30403,(0),null);
var set_hint = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30403,(1),null);
var vec__30406 = uix.core.use_state(false);
var inspecting_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30406,(0),null);
var set_inspecting = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30406,(1),null);
var vec__30409 = uix.core.use_state(false);
var preview_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30409,(0),null);
var set_preview_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30409,(1),null);
var on_target = uix.hooks.alpha.use_callback((function (fiber__$1){
var G__30413 = (function (p1__30388_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30388_SHARP_,new cljs.core.Keyword(null,"selected","selected",574897764),fiber__$1);
});
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__30413) : set_state.call(null, G__30413));
}),[uix.hooks.alpha.use_clj_deps(cljs.core.PersistentVector.EMPTY)]);
var colors = uix.core.use_context(cljs_react_devtools.core.theme);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
var handler = goog.functions.throttle((function (){
return (set_tid.cljs$core$IFn$_invoke$arity$1 ? set_tid.cljs$core$IFn$_invoke$arity$1(cljs.core.inc) : set_tid.call(null, cljs.core.inc));
}),(100));
var obs = (new MutationObserver(handler));
obs.observe(root,({"childList": true, "subtree": true, "attributes": true}));

return (function (){
return obs.disconnect();
});
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root], null))]);

return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,uix.compiler.attributes.interpret_attrs((cljs.core.truth_((function (){var or__5045__auto__ = inspecting_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return preview_node;
}
})())?uix.dom.create_portal.cljs$core$IFn$_invoke$arity$2(uix.compiler.alpha.component_element(cljs_react_devtools.core.inspector_overlay,[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"set-inspecting","set-inspecting",-862492542),set_inspecting,new cljs.core.Keyword(null,"root","root",-448657453),root,new cljs.core.Keyword(null,"on-target","on-target",-1404015998),on_target,new cljs.core.Keyword(null,"skip-dom?","skip-dom?",-1882515885),new cljs.core.Keyword(null,"hide-dom?","hide-dom?",2128980793).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"preview-node","preview-node",310928567),preview_node], null)],[]),document.getElementById("cljs-devtools-inspector-overlay")):null),[],false),[uix.compiler.aot._GT_el("div",[{'style':{'color':uix.compiler.attributes.keyword__GT_string(new cljs.core.Keyword(null,"devtools-text","devtools-text",1734170100).cljs$core$IFn$_invoke$arity$1(colors)),'bottom':(0),'borderTop':uix.compiler.attributes.keyword__GT_string(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location__$1,new cljs.core.Keyword(null,"bottom","bottom",-1550509018)))?"2px solid #8632ff75":null)),'width':uix.compiler.attributes.keyword__GT_string((function (){var G__30414 = location__$1;
var G__30414__$1 = (((G__30414 instanceof cljs.core.Keyword))?G__30414.fqn:null);
switch (G__30414__$1) {
case "bottom":
case "window":
return "100vw";

break;
case "left":
case "right":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"vw"].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30414__$1)].join('')));

}
})()),'background':uix.compiler.attributes.keyword__GT_string(new cljs.core.Keyword(null,"devtools-bg","devtools-bg",-1808526887).cljs$core$IFn$_invoke$arity$1(colors)),'font':"normal 14px sans-serif",'borderRight':uix.compiler.attributes.keyword__GT_string(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location__$1,new cljs.core.Keyword(null,"left","left",-399115937)))?"2px solid #8632ff75":null)),'borderLeft':uix.compiler.attributes.keyword__GT_string(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location__$1,new cljs.core.Keyword(null,"right","right",-452581833)))?"2px solid #8632ff75":null)),'zIndex':(9999),'right':uix.compiler.attributes.keyword__GT_string((function (){var G__30415 = location__$1;
var G__30415__$1 = (((G__30415 instanceof cljs.core.Keyword))?G__30415.fqn:null);
switch (G__30415__$1) {
case "right":
return (0);

break;
default:
return null;

}
})()),'display':"flex",'position':"fixed",'height':uix.compiler.attributes.keyword__GT_string((function (){var G__30416 = location__$1;
var G__30416__$1 = (((G__30416 instanceof cljs.core.Keyword))?G__30416.fqn:null);
switch (G__30416__$1) {
case "left":
case "right":
case "window":
return "100vh";

break;
case "bottom":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"vh"].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30416__$1)].join('')));

}
})()),'left':uix.compiler.attributes.keyword__GT_string((function (){var G__30417 = location__$1;
var G__30417__$1 = (((G__30417 instanceof cljs.core.Keyword))?G__30417.fqn:null);
switch (G__30417__$1) {
case "bottom":
case "left":
case "window":
return (0);

break;
default:
return null;

}
})())}}],[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location__$1,new cljs.core.Keyword(null,"window","window",724519534)))?null:uix.compiler.alpha.component_element(cljs_react_devtools.core.resize_handle,[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"set-size","set-size",-1037159587),set_size,new cljs.core.Keyword(null,"dir","dir",1734754661),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location__$1,new cljs.core.Keyword(null,"bottom","bottom",-1550509018)))?new cljs.core.Keyword(null,"vertical","vertical",718696748):new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)),new cljs.core.Keyword(null,"location","location",1815599388),location__$1,new cljs.core.Keyword(null,"min","min",444991522),(10),new cljs.core.Keyword(null,"max","max",61366548),(90)], null)],[])),((((cljs.core.not(root)) || (cljs.core.not(fiber))))?uix.compiler.aot._GT_el("div",[{'style':{'display':"flex",'flexDirection':"column",'gap':(8),'flex':(1),'justifyContent':"center",'alignItems':"center",'color':uix.compiler.attributes.keyword__GT_string(new cljs.core.Keyword(null,"highlight-text","highlight-text",980506446).cljs$core$IFn$_invoke$arity$1(colors)),'fontSize':"18px"}}],[((cljs.core.not(root))?uix.compiler.aot._GT_el(uix.compiler.aot.fragment,uix.compiler.attributes.interpret_attrs("Devtools are not connected to React root",[],false),[uix.compiler.aot._GT_el("span",[{'style':{'fontSize':"16px"}}],["make sure to pass the root node when initializing devtools"]),uix.compiler.aot._GT_el("pre",[{'style':{'fontSize':"14px",'margin':(0)}}],[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.list(new cljs.core.Symbol("cljs-react-devtools.core","init!","cljs-react-devtools.core/init!",185639625,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root","root",-448657453),cljs.core.list(new cljs.core.Symbol("js","document.getElementById","js/document.getElementById",2053304690,null),"root")], null))], 0))])]):"Provided root node doesn't have React app rendered")]):uix.compiler.alpha.component_element(cljs_react_devtools.core.error_boundary,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("div",[{'style':{'flex':(1)}}],[uix.compiler.alpha.component_element(cljs_react_devtools.core.toolbar,[new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"set-state","set-state",1344116913),set_state,new cljs.core.Keyword(null,"hint","hint",439639918),(cljs.core.truth_((function (){var fexpr__30418 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),null,new cljs.core.Keyword(null,"window","window",724519534),null], null), null);
return (fexpr__30418.cljs$core$IFn$_invoke$arity$1 ? fexpr__30418.cljs$core$IFn$_invoke$arity$1(location__$1) : fexpr__30418.call(null, location__$1));
})())?hint:null),new cljs.core.Keyword(null,"set-hint","set-hint",2057522619),set_hint,new cljs.core.Keyword(null,"inspecting?","inspecting?",784834160),inspecting_QMARK_,new cljs.core.Keyword(null,"set-inspecting","set-inspecting",-862492542),set_inspecting,new cljs.core.Keyword(null,"dock-devtools","dock-devtools",-2013730452),cljs_react_devtools.core.dock_devtools,new cljs.core.Keyword(null,"location","location",1815599388),location__$1], null)],[]),uix.compiler.aot._GT_el("div",[{'style':{'display':"flex",'flexDirection':uix.compiler.attributes.keyword__GT_string((cljs.core.truth_((function (){var fexpr__30419 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),null,new cljs.core.Keyword(null,"window","window",724519534),null], null), null);
return (fexpr__30419.cljs$core$IFn$_invoke$arity$1 ? fexpr__30419.cljs$core$IFn$_invoke$arity$1(location__$1) : fexpr__30419.call(null, location__$1));
})())?new cljs.core.Keyword(null,"row","row",-570139521):new cljs.core.Keyword(null,"column","column",2078222095))),'flex':(1),'maxHeight':"100%",'minHeight':"100%",'width':uix.compiler.attributes.keyword__GT_string((cljs.core.truth_((function (){var fexpr__30420 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),null,new cljs.core.Keyword(null,"window","window",724519534),null], null), null);
return (fexpr__30420.cljs$core$IFn$_invoke$arity$1 ? fexpr__30420.cljs$core$IFn$_invoke$arity$1(location__$1) : fexpr__30420.call(null, location__$1));
})())?"100vw":null))}}],[uix.compiler.aot._GT_el("div",[{'style':{'flex':(1),'overflowY':"auto",'padding':"8px 0",'background':uix.compiler.attributes.keyword__GT_string(new cljs.core.Keyword(null,"tree-view-bg","tree-view-bg",1629664539).cljs$core$IFn$_invoke$arity$1(colors))}}],[uix.compiler.alpha.component_element(cljs_react_devtools.core.preview_ctx.Provider,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),set_preview_node], null)],[cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (node){
return uix.compiler.alpha.component_element(cljs_react_devtools.core.tree_view,[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"set-state","set-state",1344116913),set_state,new cljs.core.Keyword(null,"key","key",-1516042587),node.index], null)],[]);
}),cljs_react_devtools.core.node__GT_siblings(cljs_react_devtools.core.fiber__GT_child(fiber)))])]),uix.compiler.alpha.component_element(cljs_react_devtools.core.inspector,[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"set-state","set-state",1344116913),set_state,new cljs.core.Keyword(null,"set-hint","set-hint",2057522619),set_hint,new cljs.core.Keyword(null,"location","location",1815599388),location__$1], null)],[])])])])
)])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30421 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30422 = cljs_react_devtools.core.devtools_STAR_;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30422);

try{if(((cljs.core.map_QMARK_(clj_props__29460__auto__)) || ((clj_props__29460__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__29460__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__29460__auto__) (clojure.core/nil? clj-props__29460__auto__))"].join('')));
}

return f__29461__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30421);
}} else {
return f__29461__auto__();
}
});

(cljs_react_devtools.core.devtools_STAR_.uix_component_QMARK_ = true);

(cljs_react_devtools.core.devtools_STAR_.displayName = "cljs-react-devtools.core/devtools*");

Object.defineProperty(cljs_react_devtools.core.devtools_STAR_,"name",(function (){var obj30424 = ({"value":"cljs-react-devtools.core/devtools*"});
return obj30424;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30705 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30705.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30705.cljs$core$IFn$_invoke$arity$4(cljs_react_devtools.core.devtools_STAR_,"(uix/use-state 0)(uix/use-memo (fn [] (when root tid (->> (js/Object.keys root) (some (fn* [p1] (when (str/starts-with? p1 \"__reactContainer\") (aget root p1))))))) [root tid])(uix/use-state {:hide-dom? true, :selected (when (and root fiber) (fiber->child fiber))})(use-size 35 :cljs-devtools/ui-size)(uix/use-state \"\")(uix/use-state false)(uix/use-state false)(uix/use-callback (fn [fiber] (set-state (fn* [p1] (assoc p1 :selected fiber)))) [])(uix/use-context theme)(uix/use-effect (fn [] (let [handler (fns/throttle (fn* [] (set-tid inc)) 100) obs (js/MutationObserver. handler)] (.observe obs root {:childList true, :subtree true, :attributes true}) (fn* [] (.disconnect obs)))) [root])",null,null) : sig__29399__auto___30705.call(null, cljs_react_devtools.core.devtools_STAR_,"(uix/use-state 0)(uix/use-memo (fn [] (when root tid (->> (js/Object.keys root) (some (fn* [p1] (when (str/starts-with? p1 \"__reactContainer\") (aget root p1))))))) [root tid])(uix/use-state {:hide-dom? true, :selected (when (and root fiber) (fiber->child fiber))})(use-size 35 :cljs-devtools/ui-size)(uix/use-state \"\")(uix/use-state false)(uix/use-state false)(uix/use-callback (fn [fiber] (set-state (fn* [p1] (assoc p1 :selected fiber)))) [])(uix/use-context theme)(uix/use-effect (fn [] (let [handler (fns/throttle (fn* [] (set-tid inc)) 100) obs (js/MutationObserver. handler)] (.observe obs root {:childList true, :subtree true, :attributes true}) (fn* [] (.disconnect obs)))) [root])",null,null));

window.uix.dev.register_BANG_(cljs_react_devtools.core.devtools_STAR_,cljs_react_devtools.core.devtools_STAR_.displayName);

(cljs_react_devtools.core.devtools_STAR_.fast_refresh_signature = sig__29399__auto___30705);
} else {
}
} else {
}

cljs_react_devtools.core.matches_QMARK_ = (function cljs_react_devtools$core$matches_QMARK_(){
return window.matchMedia("(prefers-color-scheme: dark)").matches;
});
cljs_react_devtools.core.devtools = (function cljs_react_devtools$core$devtools(props__29459__auto__){
var clj_props__29460__auto__ = uix.core.glue_args(props__29459__auto__);
var vec__30427 = [clj_props__29460__auto__];
var map__30430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30427,(0),null);
var map__30430__$1 = cljs.core.__destructure_map(map__30430);
var props = map__30430__$1;
var shortcut = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30430__$1,new cljs.core.Keyword(null,"shortcut","shortcut",-431647697));
var location__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30430__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var f__29461__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30706 = cljs_react_devtools.core.devtools.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30706)){
var f__29390__auto___30707 = temp__5823__auto___30706;
(f__29390__auto___30707.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30707.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30707.call(null, ));
} else {
}
} else {
}

var vec__30431 = uix.core.use_state((function (){
var v = JSON.parse(localStorage.getItem(":cljs-devtools/visible?"));
var or__5045__auto__ = (v == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return v;
}
}));
var visible_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30431,(0),null);
var set_visible = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30431,(1),null);
var vec__30434 = uix.core.use_state(cljs_react_devtools.core.matches_QMARK_);
var dark_mode_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30434,(0),null);
var set_dark_mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30434,(1),null);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
var handler = (function (){
var G__30438 = cljs_react_devtools.core.matches_QMARK_();
return (set_dark_mode.cljs$core$IFn$_invoke$arity$1 ? set_dark_mode.cljs$core$IFn$_invoke$arity$1(G__30438) : set_dark_mode.call(null, G__30438));
});
var m = window.matchMedia("(prefers-color-scheme: dark)");
m.addListener(handler);

return (function (){
return m.removeListener(handler);
});
}),[uix.hooks.alpha.use_clj_deps(cljs.core.PersistentVector.EMPTY)]);

uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
if(typeof shortcut === 'string'){
var shortcut__$1 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(shortcut,/-/);
if(cljs.core.seq(shortcut__$1)){
var down_handler = (function (e){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"window","window",724519534),location__$1)) && (cljs.core.every_QMARK_((function (p1__30425_SHARP_){
var G__30440 = p1__30425_SHARP_;
switch (G__30440) {
case "Control":
return e.ctrlKey;

break;
case "Alt":
return e.altKey;

break;
case "Meta":
return e.metaKey;

break;
case "Shift":
return e.shiftKey;

break;
default:
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__30425_SHARP_,e.key);

}
}),shortcut__$1)))){
return (set_visible.cljs$core$IFn$_invoke$arity$1 ? set_visible.cljs$core$IFn$_invoke$arity$1(cljs.core.not) : set_visible.call(null, cljs.core.not));
} else {
return null;
}
});
window.addEventListener("keydown",down_handler);

return (function (){
return window.removeEventListener("keydown",down_handler);
});
} else {
return null;
}
} else {
return null;
}
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shortcut,location__$1], null))]);

uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
return localStorage.setItem(":cljs-devtools/visible?",visible_QMARK_);
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [visible_QMARK_], null))]);

if(cljs.core.truth_(visible_QMARK_)){
return uix.compiler.alpha.component_element(cljs_react_devtools.core.theme.Provider,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(dark_mode_QMARK_)?new cljs.core.Keyword(null,"dark","dark",1818973999).cljs$core$IFn$_invoke$arity$1(cljs_react_devtools.core.color_themes):new cljs.core.Keyword(null,"light","light",1918998747).cljs$core$IFn$_invoke$arity$1(cljs_react_devtools.core.color_themes))], null)],[uix.compiler.alpha.component_element(cljs_react_devtools.core.devtools_STAR_,uix.compiler.attributes.interpret_props(props),[])]);
} else {
return null;
}
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30441 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30442 = cljs_react_devtools.core.devtools;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30442);

try{if(((cljs.core.map_QMARK_(clj_props__29460__auto__)) || ((clj_props__29460__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__29460__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__29460__auto__) (clojure.core/nil? clj-props__29460__auto__))"].join('')));
}

return f__29461__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30441);
}} else {
return f__29461__auto__();
}
});

(cljs_react_devtools.core.devtools.uix_component_QMARK_ = true);

(cljs_react_devtools.core.devtools.displayName = "cljs-react-devtools.core/devtools");

Object.defineProperty(cljs_react_devtools.core.devtools,"name",(function (){var obj30444 = ({"value":"cljs-react-devtools.core/devtools"});
return obj30444;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30713 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30713.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30713.cljs$core$IFn$_invoke$arity$4(cljs_react_devtools.core.devtools,"(uix/use-state (fn* [] (let [v (js/JSON.parse (js/localStorage.getItem \":cljs-devtools/visible?\"))] (or (nil? v) v))))(uix/use-state matches?)(uix/use-effect (fn [] (let [handler (fn* [] (set-dark-mode (matches?))) m (js/window.matchMedia \"(prefers-color-scheme: dark)\")] (.addListener m handler) (fn* [] (.removeListener m handler)))) [])(uix/use-effect (fn [] (when (string? shortcut) (let [shortcut (str/split shortcut #\"-\")] (when (seq shortcut) (let [down-handler (fn [e] (when (and (not= :window location) (->> shortcut (every? (fn* [p1] (case p1 \"Control\" (.-ctrlKey e) \"Alt\" (.-altKey e) \"Meta\" (.-metaKey e) \"Shift\" (.-shiftKey e) (= p1 (.-key e))))))) (set-visible not)))] (.addEventListener js/window \"keydown\" down-handler) (fn [] (.removeEventListener js/window \"keydown\" down-handler))))))) [shortcut location])(uix/use-effect (fn [] (js/localStorage.setItem \":cljs-devtools/visible?\" visible?)) [visible?])",null,null) : sig__29399__auto___30713.call(null, cljs_react_devtools.core.devtools,"(uix/use-state (fn* [] (let [v (js/JSON.parse (js/localStorage.getItem \":cljs-devtools/visible?\"))] (or (nil? v) v))))(uix/use-state matches?)(uix/use-effect (fn [] (let [handler (fn* [] (set-dark-mode (matches?))) m (js/window.matchMedia \"(prefers-color-scheme: dark)\")] (.addListener m handler) (fn* [] (.removeListener m handler)))) [])(uix/use-effect (fn [] (when (string? shortcut) (let [shortcut (str/split shortcut #\"-\")] (when (seq shortcut) (let [down-handler (fn [e] (when (and (not= :window location) (->> shortcut (every? (fn* [p1] (case p1 \"Control\" (.-ctrlKey e) \"Alt\" (.-altKey e) \"Meta\" (.-metaKey e) \"Shift\" (.-shiftKey e) (= p1 (.-key e))))))) (set-visible not)))] (.addEventListener js/window \"keydown\" down-handler) (fn [] (.removeEventListener js/window \"keydown\" down-handler))))))) [shortcut location])(uix/use-effect (fn [] (js/localStorage.setItem \":cljs-devtools/visible?\" visible?)) [visible?])",null,null));

window.uix.dev.register_BANG_(cljs_react_devtools.core.devtools,cljs_react_devtools.core.devtools.displayName);

(cljs_react_devtools.core.devtools.fast_refresh_signature = sig__29399__auto___30713);
} else {
}
} else {
}

cljs_react_devtools.core.hijack_re_frame = (function cljs_react_devtools$core$hijack_re_frame(){
if((typeof re_frame !== 'undefined') && (typeof re_frame.core !== 'undefined') && (typeof re_frame.core.subscribe !== 'undefined')){
var subscribe = re_frame.core.subscribe;
return (re_frame.core.subscribe = (function() {
var G__30716 = null;
var G__30716__1 = (function (query){
var ret = (subscribe.cljs$core$IFn$_invoke$arity$1 ? subscribe.cljs$core$IFn$_invoke$arity$1(query) : subscribe.call(null, query));
(ret.__devtools_label = cljs.core.first(query));

return ret;
});
var G__30716__2 = (function (query,dynv){
var ret = (subscribe.cljs$core$IFn$_invoke$arity$2 ? subscribe.cljs$core$IFn$_invoke$arity$2(query,dynv) : subscribe.call(null, query,dynv));
(ret.__devtools_label = cljs.core.first(query));

return ret;
});
G__30716 = function(query,dynv){
switch(arguments.length){
case 1:
return G__30716__1.call(this,query);
case 2:
return G__30716__2.call(this,query,dynv);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30716.cljs$core$IFn$_invoke$arity$1 = G__30716__1;
G__30716.cljs$core$IFn$_invoke$arity$2 = G__30716__2;
return G__30716;
})()
);
} else {
return null;
}
});
if((typeof cljs_react_devtools !== 'undefined') && (typeof cljs_react_devtools.core !== 'undefined') && (typeof cljs_react_devtools.core.opts_STAR_ !== 'undefined')){
} else {
cljs_react_devtools.core.opts_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
cljs_react_devtools.core.devtools_popup = (function cljs_react_devtools$core$devtools_popup(props__29459__auto__){
var clj_props__29460__auto__ = uix.core.glue_args(props__29459__auto__);
var vec__30446 = [clj_props__29460__auto__];
var map__30449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30446,(0),null);
var map__30449__$1 = cljs.core.__destructure_map(map__30449);
var on_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30449__$1,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840));
var location__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30449__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var f__29461__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30718 = cljs_react_devtools.core.devtools_popup.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30718)){
var f__29390__auto___30719 = temp__5823__auto___30718;
(f__29390__auto___30719.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30719.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30719.call(null, ));
} else {
}
} else {
}

uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
return (on_mount.cljs$core$IFn$_invoke$arity$0 ? on_mount.cljs$core$IFn$_invoke$arity$0() : on_mount.call(null, ));
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_mount], null))]);

return uix.compiler.alpha.component_element(cljs_react_devtools.core.devtools,uix.compiler.attributes.interpret_props(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cljs_react_devtools.core.opts_STAR_),new cljs.core.Keyword(null,"location","location",1815599388),location__$1)),[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30450 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30451 = cljs_react_devtools.core.devtools_popup;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30451);

try{if(((cljs.core.map_QMARK_(clj_props__29460__auto__)) || ((clj_props__29460__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__29460__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__29460__auto__) (clojure.core/nil? clj-props__29460__auto__))"].join('')));
}

return f__29461__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30450);
}} else {
return f__29461__auto__();
}
});

(cljs_react_devtools.core.devtools_popup.uix_component_QMARK_ = true);

(cljs_react_devtools.core.devtools_popup.displayName = "cljs-react-devtools.core/devtools-popup");

Object.defineProperty(cljs_react_devtools.core.devtools_popup,"name",(function (){var obj30453 = ({"value":"cljs-react-devtools.core/devtools-popup"});
return obj30453;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30720 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30720.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30720.cljs$core$IFn$_invoke$arity$4(cljs_react_devtools.core.devtools_popup,"(uix/use-effect (fn* [] (on-mount)) [on-mount])",null,null) : sig__29399__auto___30720.call(null, cljs_react_devtools.core.devtools_popup,"(uix/use-effect (fn* [] (on-mount)) [on-mount])",null,null));

window.uix.dev.register_BANG_(cljs_react_devtools.core.devtools_popup,cljs_react_devtools.core.devtools_popup.displayName);

(cljs_react_devtools.core.devtools_popup.fast_refresh_signature = sig__29399__auto___30720);
} else {
}
} else {
}

cljs_react_devtools.core.m__GT_str = (function cljs_react_devtools$core$m__GT_str(m){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,p__30454){
var vec__30455 = p__30454;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30455,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30455,(1),null);
var k__$1 = (((k instanceof cljs.core.Keyword))?cljs.core.name(k):k);
var v__$1 = (((v instanceof cljs.core.Keyword))?cljs.core.name(v):v);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__$1),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''));
}),cljs.core.PersistentVector.EMPTY,m));
});
if((typeof cljs_react_devtools !== 'undefined') && (typeof cljs_react_devtools.core !== 'undefined') && (typeof cljs_react_devtools.core.devtools_root_STAR_ !== 'undefined')){
} else {
cljs_react_devtools.core.devtools_root_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
cljs_react_devtools.core.mount = (function cljs_react_devtools$core$mount(popup_window,popup_document,props){
var node = popup_document.createElement("div");
var _ = (node.id = "cljs-react-devtools-root");
var ___$1 = popup_document.body.append(node);
var shadow_root = node.attachShadow(({"mode": "open"}));
var root = uix.dom.create_root.cljs$core$IFn$_invoke$arity$1(shadow_root);
var resize_update_scheduled_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handle_window_resize = (function (___$2){
if(cljs.core.truth_(cljs.core.deref(resize_update_scheduled_QMARK_))){
return null;
} else {
goog.async.nextTick((function (){
var width_30721 = popup_window.innerWidth;
var height_30722 = popup_window.innerHeight;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_react_devtools.core.window_settings,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width_30721,new cljs.core.Keyword(null,"height","height",1025178622),height_30722], null));

return cljs.core.reset_BANG_(resize_update_scheduled_QMARK_,false);
}));

return cljs.core.reset_BANG_(resize_update_scheduled_QMARK_,true);
}
});
var handle_window_position = (function (){
var map__30458 = cljs.core.deref(cljs_react_devtools.core.window_settings);
var map__30458__$1 = cljs.core.__destructure_map(map__30458);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30458__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30458__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var screen_left = popup_window.screenX;
var screen_top = popup_window.screenY;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(left,screen_left)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(top,screen_top)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_react_devtools.core.window_settings,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),screen_left,new cljs.core.Keyword(null,"top","top",-1856271961),screen_top], null));
} else {
return null;
}
});
var window_position_interval = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var on_unmount = (function (___$2){
popup_window.removeEventListener("resize",handle_window_resize);

var G__30459_30726 = cljs.core.deref(window_position_interval);
if((G__30459_30726 == null)){
} else {
clearInterval(G__30459_30726);
}

var G__30460_30728 = new cljs.core.Keyword(null,"location","location",1815599388);
var G__30461_30729 = new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_react_devtools.core.window_settings));
var G__30462_30730 = new cljs.core.Keyword(null,"unload?","unload?",436291763);
var G__30463_30731 = true;
(cljs_react_devtools.core.dock_devtools.cljs$core$IFn$_invoke$arity$4 ? cljs_react_devtools.core.dock_devtools.cljs$core$IFn$_invoke$arity$4(G__30460_30728,G__30461_30729,G__30462_30730,G__30463_30731) : cljs_react_devtools.core.dock_devtools.call(null, G__30460_30728,G__30461_30729,G__30462_30730,G__30463_30731));

return null;
});
var on_mount = (function (){
popup_window.addEventListener("resize",handle_window_resize);

popup_window.addEventListener("beforeunload",on_unmount);

return cljs.core.reset_BANG_(window_position_interval,setInterval(handle_window_position,(2000)));
});
(popup_window["onunload"] = (function (){
return cljs.core.reset_BANG_(cljs_react_devtools.core.popout_window,null);
}));

cljs.core.reset_BANG_(cljs_react_devtools.core.devtools_root_STAR_,root);

return uix.dom.render_root(uix.compiler.alpha.component_element(cljs_react_devtools.core.devtools_popup,uix.compiler.attributes.interpret_props(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),on_mount], null),props], 0))),[]),root);
});
/**
 * Originally copied from re-frisk.devtool/open-debugger-window
 */
cljs_react_devtools.core.open_debugger_window = (function cljs_react_devtools$core$open_debugger_window(p__30464,props){
var map__30465 = p__30464;
var map__30465__$1 = cljs.core.__destructure_map(map__30465);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30465__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30465__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30465__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30465__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var document_title = document.title;
var window_title = goog.string.escapeString(["cljs-react-devtools | ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(document_title)].join(''));
var window_html = ["<head><title>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window_title),"</title></head><body style=\"margin: 0px;\"></body>"].join('');
var window_features = cljs_react_devtools.core.m__GT_str(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"resizable","resizable",-2107060206),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"directories","directories",-900278123),new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065),new cljs.core.Keyword(null,"scrollbars","scrollbars",1817245048),new cljs.core.Keyword(null,"menubar","menubar",1684613273),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],[top,width,new cljs.core.Keyword(null,"yes","yes",182838819),new cljs.core.Keyword(null,"no","no",-390373634),new cljs.core.Keyword(null,"no","no",-390373634),new cljs.core.Keyword(null,"no","no",-390373634),new cljs.core.Keyword(null,"yes","yes",182838819),new cljs.core.Keyword(null,"no","no",-390373634),height,left]));
var temp__5821__auto__ = window.open("about:blank","re-frame-10x-popout",window_features);
if(cljs.core.truth_(temp__5821__auto__)){
var w = temp__5821__auto__;
var d = w.document;
d.open();

d.write(window_html);

(w["onload"] = (function (){
return cljs_react_devtools.core.mount(w,d,props);
}));

d.close();

return cljs.core.reset_BANG_(cljs_react_devtools.core.popout_window,w);
} else {
return null;
}
});
cljs_react_devtools.core.dock_devtools = (function cljs_react_devtools$core$dock_devtools(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30733 = arguments.length;
var i__5770__auto___30734 = (0);
while(true){
if((i__5770__auto___30734 < len__5769__auto___30733)){
args__5775__auto__.push((arguments[i__5770__auto___30734]));

var G__30735 = (i__5770__auto___30734 + (1));
i__5770__auto___30734 = G__30735;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return cljs_react_devtools.core.dock_devtools.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(cljs_react_devtools.core.dock_devtools.cljs$core$IFn$_invoke$arity$variadic = (function (p__30467){
var map__30468 = p__30467;
var map__30468__$1 = cljs.core.__destructure_map(map__30468);
var location__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30468__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var unload_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30468__$1,new cljs.core.Keyword(null,"unload?","unload?",436291763));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_react_devtools.core.window_settings,cljs.core.assoc,new cljs.core.Keyword(null,"location","location",1815599388),location__$1);

localStorage.setItem(":cljs-devtools/window-location",cljs.core.name(location__$1));

if(cljs.core.truth_(cljs.core.deref(cljs_react_devtools.core.popout_window))){
cljs.core.deref(cljs_react_devtools.core.devtools_root_STAR_).unmount();

cljs.core.reset_BANG_(cljs_react_devtools.core.devtools_root_STAR_,null);

if(cljs.core.truth_(unload_QMARK_)){
} else {
cljs.core.deref(cljs_react_devtools.core.popout_window).close();
}

return setTimeout((function (){
var G__30469 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location","location",1815599388),location__$1], null);
return (cljs_react_devtools.core.render_devtools.cljs$core$IFn$_invoke$arity$1 ? cljs_react_devtools.core.render_devtools.cljs$core$IFn$_invoke$arity$1(G__30469) : cljs_react_devtools.core.render_devtools.call(null, G__30469));
}),(50));
} else {
cljs.core.deref(cljs_react_devtools.core.devtools_root_STAR_).unmount();

cljs.core.reset_BANG_(cljs_react_devtools.core.devtools_root_STAR_,null);

document.getElementById("cljs-react-devtools-root").remove();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location__$1,new cljs.core.Keyword(null,"window","window",724519534))){
return cljs_react_devtools.core.open_debugger_window(cljs.core.deref(cljs_react_devtools.core.window_settings),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location","location",1815599388),location__$1], null));
} else {
var G__30470 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location","location",1815599388),location__$1], null);
return (cljs_react_devtools.core.render_devtools.cljs$core$IFn$_invoke$arity$1 ? cljs_react_devtools.core.render_devtools.cljs$core$IFn$_invoke$arity$1(G__30470) : cljs_react_devtools.core.render_devtools.call(null, G__30470));
}
}
}));

(cljs_react_devtools.core.dock_devtools.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs_react_devtools.core.dock_devtools.cljs$lang$applyTo = (function (seq30466){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30466));
}));

cljs_react_devtools.core.render_devtools = (function cljs_react_devtools$core$render_devtools(p__30471){
var map__30472 = p__30471;
var map__30472__$1 = cljs.core.__destructure_map(map__30472);
var location__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30472__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var node = document.createElement("div");
var shadow_root = node.attachShadow(({"mode": "open"}));
var _ = document.body.append(node);
var ___$1 = (node.id = "cljs-react-devtools-root");
var root = uix.dom.create_root.cljs$core$IFn$_invoke$arity$1(shadow_root);
cljs.core.reset_BANG_(cljs_react_devtools.core.devtools_root_STAR_,root);

uix.dom.render_root(uix.compiler.alpha.component_element(cljs_react_devtools.core.devtools,uix.compiler.attributes.interpret_props(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cljs_react_devtools.core.opts_STAR_),new cljs.core.Keyword(null,"location","location",1815599388),location__$1)),[]),root);

return null;
});
if((typeof cljs_react_devtools !== 'undefined') && (typeof cljs_react_devtools.core !== 'undefined') && (typeof cljs_react_devtools.core.initialized_QMARK_ !== 'undefined')){
} else {
cljs_react_devtools.core.initialized_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
cljs_react_devtools.core.init_BANG_ = (function cljs_react_devtools$core$init_BANG_(p__30473){
var map__30474 = p__30473;
var map__30474__$1 = cljs.core.__destructure_map(map__30474);
var opts = map__30474__$1;
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30474__$1,new cljs.core.Keyword(null,"root","root",-448657453));
var shortcut = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30474__$1,new cljs.core.Keyword(null,"shortcut","shortcut",-431647697));
if(cljs.core.truth_(cljs.core.deref(cljs_react_devtools.core.initialized_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(cljs_react_devtools.core.initialized_QMARK_,true);

cljs.core.reset_BANG_(cljs_react_devtools.core.opts_STAR_,opts);

cljs_react_devtools.core.hijack_re_frame();

return setTimeout((function (){
var node = document.createElement("div");
(node.id = "cljs-devtools-inspector-overlay");

document.body.append(node);

return cljs_react_devtools.core.render_devtools(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs_react_devtools.core.window_settings))], null));
}),(100));
}
});

//# sourceMappingURL=cljs_react_devtools.core.js.map
