goog.provide('example.core');
uix.dev.init_fast_refresh_BANG_();
example.core.refresh = (function example$core$refresh(){
return uix.dev.refresh_BANG_();
});
example.core.tools = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"text","text",-1790561697)], null);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("hello","workd","hello/workd",1342838384),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
return new cljs.core.Keyword(null,"nothing","nothing",-1022703296);
})], 0));
example.core.tool_button = (function example$core$tool_button(p__30475){
var map__30476 = p__30475;
var map__30476__$1 = cljs.core.__destructure_map(map__30476);
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30476__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30476__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_press = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30476__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var with_let30477 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let30477","with-let30477",-1903292126));
var temp__5827__auto___30669 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5827__auto___30669 == null)){
} else {
var c__28922__auto___30670 = temp__5827__auto___30669;
if((with_let30477.generation === c__28922__auto___30670.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let30477.generation = c__28922__auto___30670.ratomGeneration);
}

var init30478 = (with_let30477.length === (0));
var a = ((((init30478) || (cljs.core.not(with_let30477.hasOwnProperty((0))))))?(with_let30477[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((1))):(with_let30477[(0)]));
var res30479 = (function (){
cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hello","workd","hello/workd",1342838384)], null)));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_press,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 8px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(3),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(selected_QMARK_)?"#fff":null),new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(selected_QMARK_)?"#ff89da":null)], null)], null),label], null);
})()
;
return res30479;
});
example.core.toolbar = (function example$core$toolbar(props__29459__auto__){
var clj_props__29460__auto__ = uix.core.glue_args(props__29459__auto__);
var vec__30483 = [clj_props__29460__auto__];
var map__30486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30483,(0),null);
var map__30486__$1 = cljs.core.__destructure_map(map__30486);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30486__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var set_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30486__$1,new cljs.core.Keyword(null,"set-state","set-state",1344116913));
var on_add_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30486__$1,new cljs.core.Keyword(null,"on-add-shape","on-add-shape",1289220499));
var f__29461__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30671 = example.core.toolbar.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30671)){
var f__29390__auto___30672 = temp__5823__auto___30671;
(f__29390__auto___30672.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30672.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30672.call(null, ));
} else {
}
} else {
}

var map__30489 = state;
var map__30489__$1 = cljs.core.__destructure_map(map__30489);
var grid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30489__$1,new cljs.core.Keyword(null,"grid?","grid?",-288406689));
return uix.compiler.aot._GT_el("div",[{'style':{'padding':"8px 16px",'height':(46),'display':"flex",'alignItems':"center",'backgroundColor':"#fff",'position':"relative",'boxShadow':"0 1px 1px rgba(0, 0, 10, 0.2)"}}],[uix.compiler.aot._GT_el("img",[{'src':"https://raw.githubusercontent.com/pitch-io/uix/master/logo.png",'style':{'height':"100%",'margin':"0 16px 0 0"}}],[]),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (t){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.core.tool_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),t,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.name(t),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return (on_add_shape.cljs$core$IFn$_invoke$arity$1 ? on_add_shape.cljs$core$IFn$_invoke$arity$1(t) : on_add_shape.call(null, t));
})], null)], null));
}),example.core.tools),uix.compiler.aot._GT_el("div",[{'style':{'width':(1),'height':"60%",'backgroundColor':"#c1cdd0",'margin':"0 8px"}}],[]),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.core.tool_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"grid",new cljs.core.Keyword(null,"selected?","selected?",-742502788),grid_QMARK_,new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
var G__30490 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"grid?","grid?",-288406689),cljs.core.not);
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__30490) : set_state.call(null, G__30490));
})], null)], null))]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30491 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30492 = example.core.toolbar;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30492);

try{if(((cljs.core.map_QMARK_(clj_props__29460__auto__)) || ((clj_props__29460__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__29460__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__29460__auto__) (clojure.core/nil? clj-props__29460__auto__))"].join('')));
}

return f__29461__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30491);
}} else {
return f__29461__auto__();
}
});

(example.core.toolbar.uix_component_QMARK_ = true);

(example.core.toolbar.displayName = "example.core/toolbar");

Object.defineProperty(example.core.toolbar,"name",(function (){var obj30496 = ({"value":"example.core/toolbar"});
return obj30496;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30674 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30674.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30674.cljs$core$IFn$_invoke$arity$4(example.core.toolbar,"",null,null) : sig__29399__auto___30674.call(null, example.core.toolbar,"",null,null));

window.uix.dev.register_BANG_(example.core.toolbar,example.core.toolbar.displayName);

(example.core.toolbar.fast_refresh_signature = sig__29399__auto___30674);
} else {
}
} else {
}

example.core.canvas_grid30497 = (function example$core$canvas_grid30497(props__29459__auto__){
var clj_props__29460__auto__ = uix.core.glue_args(props__29459__auto__);
var vec__30499 = [clj_props__29460__auto__];
var map__30502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30499,(0),null);
var map__30502__$1 = cljs.core.__destructure_map(map__30502);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30502__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30502__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30502__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30502__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var f__29461__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30675 = example.core.canvas_grid30497.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30675)){
var f__29390__auto___30676 = temp__5823__auto___30675;
(f__29390__auto___30676.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30676.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30676.call(null, ));
} else {
}
} else {
}

var wn = Math.ceil((width / size));
var hn = Math.ceil((height / size));
return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,uix.compiler.attributes.interpret_attrs(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (widx){
return uix.compiler.aot._GT_el("line",[{'key':uix.compiler.attributes.keyword__GT_string(widx),'x1':(size * widx),'x2':(size * widx),'y1':(0),'y2':uix.compiler.attributes.keyword__GT_string(height),'stroke':uix.compiler.attributes.keyword__GT_string(color)}],[]);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(wn)),[],false),[cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (hidx){
return uix.compiler.aot._GT_el("line",[{'key':uix.compiler.attributes.keyword__GT_string(hidx),'y1':(size * hidx),'y2':(size * hidx),'x1':(0),'x2':uix.compiler.attributes.keyword__GT_string(width),'stroke':uix.compiler.attributes.keyword__GT_string(color)}],[]);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(hn))]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30503 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30504 = example.core.canvas_grid30497;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30504);

try{if(((cljs.core.map_QMARK_(clj_props__29460__auto__)) || ((clj_props__29460__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__29460__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__29460__auto__) (clojure.core/nil? clj-props__29460__auto__))"].join('')));
}

return f__29461__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30503);
}} else {
return f__29461__auto__();
}
});

(example.core.canvas_grid30497.uix_component_QMARK_ = true);

(example.core.canvas_grid30497.displayName = "example.core/canvas-grid");

Object.defineProperty(example.core.canvas_grid30497,"name",(function (){var obj30508 = ({"value":"example.core/canvas-grid"});
return obj30508;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30677 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30677.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30677.cljs$core$IFn$_invoke$arity$4(example.core.canvas_grid30497,"",null,null) : sig__29399__auto___30677.call(null, example.core.canvas_grid30497,"",null,null));

window.uix.dev.register_BANG_(example.core.canvas_grid30497,example.core.canvas_grid30497.displayName);

(example.core.canvas_grid30497.fast_refresh_signature = sig__29399__auto___30677);
} else {
}
} else {
}

example.core.canvas_grid = uix.core.memo.cljs$core$IFn$_invoke$arity$1(example.core.canvas_grid30497);
example.core.cursor = (function example$core$cursor(props__29459__auto__){
var clj_props__29460__auto__ = uix.core.glue_args(props__29459__auto__);
var vec__30510 = [clj_props__29460__auto__];
var map__30513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30510,(0),null);
var map__30513__$1 = cljs.core.__destructure_map(map__30513);
var mx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30513__$1,new cljs.core.Keyword(null,"mx","mx",-199887020));
var my = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30513__$1,new cljs.core.Keyword(null,"my","my",-1055703269));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30513__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30513__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var f__29461__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30678 = example.core.cursor.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30678)){
var f__29390__auto___30679 = temp__5823__auto___30678;
(f__29390__auto___30679.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30679.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30679.call(null, ));
} else {
}
} else {
}

var mx__$1 = (mx + (r / (2)));
var my__$1 = (my + (r / (2)));
return uix.compiler.aot._GT_el("circle",[{'cx':(mx__$1 - (r / (2))),'cy':(my__$1 - (r / (2))),'r':uix.compiler.attributes.keyword__GT_string(r),'fill':uix.compiler.attributes.keyword__GT_string(color)}],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30516 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30517 = example.core.cursor;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30517);

try{if(((cljs.core.map_QMARK_(clj_props__29460__auto__)) || ((clj_props__29460__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__29460__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__29460__auto__) (clojure.core/nil? clj-props__29460__auto__))"].join('')));
}

return f__29461__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30516);
}} else {
return f__29461__auto__();
}
});

(example.core.cursor.uix_component_QMARK_ = true);

(example.core.cursor.displayName = "example.core/cursor");

Object.defineProperty(example.core.cursor,"name",(function (){var obj30521 = ({"value":"example.core/cursor"});
return obj30521;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30682 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30682.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30682.cljs$core$IFn$_invoke$arity$4(example.core.cursor,"",null,null) : sig__29399__auto___30682.call(null, example.core.cursor,"",null,null));

window.uix.dev.register_BANG_(example.core.cursor,example.core.cursor.displayName);

(example.core.cursor.fast_refresh_signature = sig__29399__auto___30682);
} else {
}
} else {
}

example.core.rect = (function example$core$rect(props__29459__auto__){
var clj_props__29460__auto__ = uix.core.glue_args(props__29459__auto__);
var vec__30523 = [clj_props__29460__auto__];
var map__30526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30523,(0),null);
var map__30526__$1 = cljs.core.__destructure_map(map__30526);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30526__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30526__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30526__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30526__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30526__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var stroke_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30526__$1,new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30526__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var on_mouse_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30526__$1,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470));
var stroke_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30526__$1,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435));
var on_mouse_up = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30526__$1,new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320));
var f__29461__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30683 = example.core.rect.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30683)){
var f__29390__auto___30684 = temp__5823__auto___30683;
(f__29390__auto___30684.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30684.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30684.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("rect",[{'y':uix.compiler.attributes.keyword__GT_string(y),'stroke':uix.compiler.attributes.keyword__GT_string(stroke_color),'fill':uix.compiler.attributes.keyword__GT_string(fill_color),'width':uix.compiler.attributes.keyword__GT_string(width),'onMouseDown':on_mouse_down,'strokeWidth':uix.compiler.attributes.keyword__GT_string(stroke_width),'x':uix.compiler.attributes.keyword__GT_string(x),'height':uix.compiler.attributes.keyword__GT_string(height),'onMouseUp':on_mouse_up}],[children]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30530 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30531 = example.core.rect;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30531);

try{if(((cljs.core.map_QMARK_(clj_props__29460__auto__)) || ((clj_props__29460__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__29460__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__29460__auto__) (clojure.core/nil? clj-props__29460__auto__))"].join('')));
}

return f__29461__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30530);
}} else {
return f__29461__auto__();
}
});

(example.core.rect.uix_component_QMARK_ = true);

(example.core.rect.displayName = "example.core/rect");

Object.defineProperty(example.core.rect,"name",(function (){var obj30533 = ({"value":"example.core/rect"});
return obj30533;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30688 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30688.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30688.cljs$core$IFn$_invoke$arity$4(example.core.rect,"",null,null) : sig__29399__auto___30688.call(null, example.core.rect,"",null,null));

window.uix.dev.register_BANG_(example.core.rect,example.core.rect.displayName);

(example.core.rect.fast_refresh_signature = sig__29399__auto___30688);
} else {
}
} else {
}

example.core.circle = (function example$core$circle(props__29459__auto__){
var clj_props__29460__auto__ = uix.core.glue_args(props__29459__auto__);
var vec__30536 = [clj_props__29460__auto__];
var map__30539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30536,(0),null);
var map__30539__$1 = cljs.core.__destructure_map(map__30539);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30539__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30539__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30539__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30539__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30539__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));
var stroke_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30539__$1,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435));
var stroke_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30539__$1,new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937));
var on_mouse_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30539__$1,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470));
var f__29461__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30689 = example.core.circle.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30689)){
var f__29390__auto___30690 = temp__5823__auto___30689;
(f__29390__auto___30690.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30690.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30690.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("ellipse",[{'onMouseDown':on_mouse_down,'cx':(x + (width / (2))),'cy':(y + (height / (2))),'rx':(width / (2)),'ry':(height / (2)),'fill':uix.compiler.attributes.keyword__GT_string(fill_color),'strokeWidth':uix.compiler.attributes.keyword__GT_string(stroke_width),'stroke':uix.compiler.attributes.keyword__GT_string(stroke_color)}],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30540 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30541 = example.core.circle;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30541);

try{if(((cljs.core.map_QMARK_(clj_props__29460__auto__)) || ((clj_props__29460__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__29460__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__29460__auto__) (clojure.core/nil? clj-props__29460__auto__))"].join('')));
}

return f__29461__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30540);
}} else {
return f__29461__auto__();
}
});

(example.core.circle.uix_component_QMARK_ = true);

(example.core.circle.displayName = "example.core/circle");

Object.defineProperty(example.core.circle,"name",(function (){var obj30543 = ({"value":"example.core/circle"});
return obj30543;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30691 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30691.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30691.cljs$core$IFn$_invoke$arity$4(example.core.circle,"",null,null) : sig__29399__auto___30691.call(null, example.core.circle,"",null,null));

window.uix.dev.register_BANG_(example.core.circle,example.core.circle.displayName);

(example.core.circle.fast_refresh_signature = sig__29399__auto___30691);
} else {
}
} else {
}

example.core.text = (function example$core$text(props__29459__auto__){
var clj_props__29460__auto__ = uix.core.glue_args(props__29459__auto__);
var vec__30547 = [clj_props__29460__auto__];
var map__30550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30547,(0),null);
var map__30550__$1 = cljs.core.__destructure_map(map__30550);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30550__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var font_family = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30550__$1,new cljs.core.Keyword(null,"font-family","font-family",-667419874));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30550__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var font_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30550__$1,new cljs.core.Keyword(null,"font-style","font-style",-773672352));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30550__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30550__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));
var font_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30550__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346));
var stroke_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30550__$1,new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30550__$1,new cljs.core.Keyword(null,"value","value",305978217));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30550__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var on_mouse_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30550__$1,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470));
var stroke_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30550__$1,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435));
var f__29461__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30692 = example.core.text.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30692)){
var f__29390__auto___30693 = temp__5823__auto___30692;
(f__29390__auto___30693.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30693.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30693.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("text",[{'onMouseDown':on_mouse_down,'x':uix.compiler.attributes.keyword__GT_string(x),'y':uix.compiler.attributes.keyword__GT_string(y),'fontFamily':uix.compiler.attributes.keyword__GT_string(font_family),'fontSize':uix.compiler.attributes.keyword__GT_string(font_size),'fontStyle':uix.compiler.attributes.keyword__GT_string(font_style)}],[value]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30552 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30553 = example.core.text;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30553);

try{if(((cljs.core.map_QMARK_(clj_props__29460__auto__)) || ((clj_props__29460__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__29460__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__29460__auto__) (clojure.core/nil? clj-props__29460__auto__))"].join('')));
}

return f__29461__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30552);
}} else {
return f__29461__auto__();
}
});

(example.core.text.uix_component_QMARK_ = true);

(example.core.text.displayName = "example.core/text");

Object.defineProperty(example.core.text,"name",(function (){var obj30555 = ({"value":"example.core/text"});
return obj30555;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30696 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30696.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30696.cljs$core$IFn$_invoke$arity$4(example.core.text,"",null,null) : sig__29399__auto___30696.call(null, example.core.text,"",null,null));

window.uix.dev.register_BANG_(example.core.text,example.core.text.displayName);

(example.core.text.fast_refresh_signature = sig__29399__auto___30696);
} else {
}
} else {
}

example.core.map_object = (function example$core$map_object(object,size){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(object,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._STAR_,size),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._STAR_,size),new cljs.core.Keyword(null,"width","width",-384071477),cljs.core._STAR_,size),new cljs.core.Keyword(null,"height","height",1025178622),cljs.core._STAR_,size);
});
example.core.objects_layer30558 = (function example$core$objects_layer30558(props__29459__auto__){
var clj_props__29460__auto__ = uix.core.glue_args(props__29459__auto__);
var vec__30559 = [clj_props__29460__auto__];
var map__30562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30559,(0),null);
var map__30562__$1 = cljs.core.__destructure_map(map__30562);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30562__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30562__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30562__$1,new cljs.core.Keyword(null,"on-select","on-select",-192407950));
var f__29461__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30699 = example.core.objects_layer30558.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30699)){
var f__29390__auto___30700 = temp__5823__auto___30699;
(f__29390__auto___30700.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30700.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30700.call(null, ));
} else {
}
} else {
}

return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30563){
var map__30565 = p__30563;
var map__30565__$1 = cljs.core.__destructure_map(map__30565);
var object = map__30565__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30565__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var idx = objects.indexOf(object);
var object__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(example.core.map_object(object,size),new cljs.core.Keyword(null,"key","key",-1516042587),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (){
return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(idx) : on_select.call(null, idx));
})], 0));
var G__30566 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(object__$1);
var G__30566__$1 = (((G__30566 instanceof cljs.core.Keyword))?G__30566.fqn:null);
switch (G__30566__$1) {
case "rect":
return uix.compiler.alpha.component_element(example.core.rect,uix.compiler.attributes.interpret_props(object__$1),[]);

break;
case "circle":
return uix.compiler.alpha.component_element(example.core.circle,uix.compiler.attributes.interpret_props(object__$1),[]);

break;
case "text":
return uix.compiler.alpha.component_element(example.core.text,uix.compiler.attributes.interpret_props(object__$1),[]);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30566__$1)].join('')));

}
}),objects);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30569 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30570 = example.core.objects_layer30558;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30570);

try{if(((cljs.core.map_QMARK_(clj_props__29460__auto__)) || ((clj_props__29460__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__29460__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__29460__auto__) (clojure.core/nil? clj-props__29460__auto__))"].join('')));
}

return f__29461__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30569);
}} else {
return f__29461__auto__();
}
});

(example.core.objects_layer30558.uix_component_QMARK_ = true);

(example.core.objects_layer30558.displayName = "example.core/objects-layer");

Object.defineProperty(example.core.objects_layer30558,"name",(function (){var obj30572 = ({"value":"example.core/objects-layer"});
return obj30572;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30702 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30702.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30702.cljs$core$IFn$_invoke$arity$4(example.core.objects_layer30558,"",null,null) : sig__29399__auto___30702.call(null, example.core.objects_layer30558,"",null,null));

window.uix.dev.register_BANG_(example.core.objects_layer30558,example.core.objects_layer30558.displayName);

(example.core.objects_layer30558.fast_refresh_signature = sig__29399__auto___30702);
} else {
}
} else {
}

example.core.objects_layer = uix.core.memo.cljs$core$IFn$_invoke$arity$1(example.core.objects_layer30558);
example.core.edit_layer30573 = (function example$core$edit_layer30573(props__29459__auto__){
var clj_props__29460__auto__ = uix.core.glue_args(props__29459__auto__);
var vec__30574 = [clj_props__29460__auto__];
var map__30577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30574,(0),null);
var map__30577__$1 = cljs.core.__destructure_map(map__30577);
var mx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30577__$1,new cljs.core.Keyword(null,"mx","mx",-199887020));
var my = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30577__$1,new cljs.core.Keyword(null,"my","my",-1055703269));
var on_object_changed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30577__$1,new cljs.core.Keyword(null,"on-object-changed","on-object-changed",-1493555239));
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30577__$1,new cljs.core.Keyword(null,"on-select","on-select",-192407950));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30577__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30577__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30577__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var f__29461__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30703 = example.core.edit_layer30573.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30703)){
var f__29390__auto___30704 = temp__5823__auto___30703;
(f__29390__auto___30704.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30704.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30704.call(null, ));
} else {
}
} else {
}

var vec__30579 = uix.core.use_state(false);
var active_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30579,(0),null);
var set_active = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30579,(1),null);
var selected_QMARK_ = (!((selected == null)));
var on_move = uix.hooks.alpha.use_callback((function (x,y){
var G__30584 = idx;
var G__30585 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(selected,new cljs.core.Keyword(null,"x","x",2099068185),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),y], 0));
return (on_object_changed.cljs$core$IFn$_invoke$arity$2 ? on_object_changed.cljs$core$IFn$_invoke$arity$2(G__30584,G__30585) : on_object_changed.call(null, G__30584,G__30585));
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,selected,on_object_changed], null))]);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_(active_QMARK_)){
return (on_move.cljs$core$IFn$_invoke$arity$2 ? on_move.cljs$core$IFn$_invoke$arity$2(mx,my) : on_move.call(null, mx,my));
} else {
return null;
}
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_QMARK_,active_QMARK_,mx,my,on_move], null))]);

uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
if(selected_QMARK_){
return (set_active.cljs$core$IFn$_invoke$arity$1 ? set_active.cljs$core$IFn$_invoke$arity$1(true) : set_active.call(null, true));
} else {
return null;
}
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_QMARK_], null))]);

if(cljs.core.truth_(selected)){
return uix.compiler.alpha.component_element(example.core.rect,uix.compiler.attributes.interpret_props(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(example.core.map_object(selected,size),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (){
return (set_active.cljs$core$IFn$_invoke$arity$1 ? set_active.cljs$core$IFn$_invoke$arity$1(true) : set_active.call(null, true));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),(function (){
return (set_active.cljs$core$IFn$_invoke$arity$1 ? set_active.cljs$core$IFn$_invoke$arity$1(false) : set_active.call(null, false));
}),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1),new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),"#0000ff",new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new cljs.core.Keyword(null,"transparent","transparent",-2073609949)], 0))),[]);
} else {
return null;
}
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30586 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30587 = example.core.edit_layer30573;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30587);

try{if(((cljs.core.map_QMARK_(clj_props__29460__auto__)) || ((clj_props__29460__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__29460__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__29460__auto__) (clojure.core/nil? clj-props__29460__auto__))"].join('')));
}

return f__29461__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30586);
}} else {
return f__29461__auto__();
}
});

(example.core.edit_layer30573.uix_component_QMARK_ = true);

(example.core.edit_layer30573.displayName = "example.core/edit-layer");

Object.defineProperty(example.core.edit_layer30573,"name",(function (){var obj30590 = ({"value":"example.core/edit-layer"});
return obj30590;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30708 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30708.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30708.cljs$core$IFn$_invoke$arity$4(example.core.edit_layer30573,"(uix/use-state false)(uix/use-callback (fn [x y] (on-object-changed idx (assoc selected :x x :y y))) [idx selected on-object-changed])(uix/use-effect (fn* [] (when active? (on-move mx my))) [selected? active? mx my on-move])(uix/use-effect (fn* [] (when selected? (set-active true))) [selected?])",null,null) : sig__29399__auto___30708.call(null, example.core.edit_layer30573,"(uix/use-state false)(uix/use-callback (fn [x y] (on-object-changed idx (assoc selected :x x :y y))) [idx selected on-object-changed])(uix/use-effect (fn* [] (when active? (on-move mx my))) [selected? active? mx my on-move])(uix/use-effect (fn* [] (when selected? (set-active true))) [selected?])",null,null));

window.uix.dev.register_BANG_(example.core.edit_layer30573,example.core.edit_layer30573.displayName);

(example.core.edit_layer30573.fast_refresh_signature = sig__29399__auto___30708);
} else {
}
} else {
}

example.core.edit_layer = uix.core.memo.cljs$core$IFn$_invoke$arity$1(example.core.edit_layer30573);
example.core.background_layer30593 = (function example$core$background_layer30593(props__29459__auto__){
var clj_props__29460__auto__ = uix.core.glue_args(props__29459__auto__);
var vec__30596 = [clj_props__29460__auto__];
var map__30599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30596,(0),null);
var map__30599__$1 = cljs.core.__destructure_map(map__30599);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30599__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30599__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var on_mouse_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30599__$1,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470));
var f__29461__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30710 = example.core.background_layer30593.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30710)){
var f__29390__auto___30711 = temp__5823__auto___30710;
(f__29390__auto___30711.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30711.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30711.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(example.core.rect,[new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (){
return (on_mouse_down.cljs$core$IFn$_invoke$arity$0 ? on_mouse_down.cljs$core$IFn$_invoke$arity$0() : on_mouse_down.call(null, ));
}),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),new cljs.core.Keyword(null,"none","none",1333468478)], null)],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30601 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30602 = example.core.background_layer30593;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30602);

try{if(((cljs.core.map_QMARK_(clj_props__29460__auto__)) || ((clj_props__29460__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__29460__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__29460__auto__) (clojure.core/nil? clj-props__29460__auto__))"].join('')));
}

return f__29461__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30601);
}} else {
return f__29461__auto__();
}
});

(example.core.background_layer30593.uix_component_QMARK_ = true);

(example.core.background_layer30593.displayName = "example.core/background-layer");

Object.defineProperty(example.core.background_layer30593,"name",(function (){var obj30605 = ({"value":"example.core/background-layer"});
return obj30605;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30712 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30712.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30712.cljs$core$IFn$_invoke$arity$4(example.core.background_layer30593,"",null,null) : sig__29399__auto___30712.call(null, example.core.background_layer30593,"",null,null));

window.uix.dev.register_BANG_(example.core.background_layer30593,example.core.background_layer30593.displayName);

(example.core.background_layer30593.fast_refresh_signature = sig__29399__auto___30712);
} else {
}
} else {
}

example.core.background_layer = uix.core.memo.cljs$core$IFn$_invoke$arity$1(example.core.background_layer30593);
example.core.canvas = (function example$core$canvas(props__29459__auto__){
var clj_props__29460__auto__ = uix.core.glue_args(props__29459__auto__);
var vec__30610 = [clj_props__29460__auto__];
var map__30613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30610,(0),null);
var map__30613__$1 = cljs.core.__destructure_map(map__30613);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30613__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var on_object_changed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30613__$1,new cljs.core.Keyword(null,"on-object-changed","on-object-changed",-1493555239));
var on_object_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30613__$1,new cljs.core.Keyword(null,"on-object-select","on-object-select",-1747471264));
var f__29461__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30714 = example.core.canvas.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30714)){
var f__29390__auto___30715 = temp__5823__auto___30714;
(f__29390__auto___30715.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30715.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30715.call(null, ));
} else {
}
} else {
}

var map__30617 = state;
var map__30617__$1 = cljs.core.__destructure_map(map__30617);
var grid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30617__$1,new cljs.core.Keyword(null,"grid?","grid?",-288406689));
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30617__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var vec__30618 = uix.core.use_state(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var vec__30621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30618,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30621,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30621,(1),null);
var set_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30618,(1),null);
var vec__30624 = uix.core.use_state(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var vec__30627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30624,(0),null);
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30627,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30627,(1),null);
var set_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30624,(1),null);
var vec__30630 = uix.core.use_state(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var vec__30633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30630,(0),null);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30633,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30633,(1),null);
var set_mouse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30630,(1),null);
var ref = uix.core.use_ref.cljs$core$IFn$_invoke$arity$0();
var size = (8);
var mx__$1 = cljs.core.quot((mx - ox),size);
var my__$1 = cljs.core.quot((my - oy),size);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
var G__30638_30717 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(ref).offsetLeft,cljs.core.deref(ref).offsetTop], null);
(set_offset.cljs$core$IFn$_invoke$arity$1 ? set_offset.cljs$core$IFn$_invoke$arity$1(G__30638_30717) : set_offset.call(null, G__30638_30717));

var G__30640 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [screen.width,screen.height], null);
return (set_size.cljs$core$IFn$_invoke$arity$1 ? set_size.cljs$core$IFn$_invoke$arity$1(G__30640) : set_size.call(null, G__30640));
}),[uix.hooks.alpha.use_clj_deps(cljs.core.PersistentVector.EMPTY)]);

return uix.compiler.aot._GT_el("div",[{'ref':uix.compiler.attributes.keyword__GT_string(ref),'onMouseMove':(function (e){
var G__30641 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
return (set_mouse.cljs$core$IFn$_invoke$arity$1 ? set_mouse.cljs$core$IFn$_invoke$arity$1(G__30641) : set_mouse.call(null, G__30641));
}),'style':{'flex':(1),'position':"relative",'backgroundColor':"#ebeff0"}}],[uix.compiler.aot._GT_el("svg",[{'style':{'width':uix.compiler.attributes.keyword__GT_string(width),'height':uix.compiler.attributes.keyword__GT_string(height),'position':"absolute",'left':(0),'top':(0)},'viewBox':["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height)].join('')}],[(cljs.core.truth_(grid_QMARK_)?uix.compiler.aot._GT_el(uix.compiler.aot.fragment,uix.compiler.attributes.interpret_attrs(uix.compiler.alpha.component_element(example.core.canvas_grid,[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"color","color",1011675173),"#c1cdd0"], null)],[]),[],false),[uix.compiler.alpha.component_element(example.core.cursor,[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),(2),new cljs.core.Keyword(null,"color","color",1011675173),"#4f7f8b",new cljs.core.Keyword(null,"mx","mx",-199887020),(size * mx__$1),new cljs.core.Keyword(null,"my","my",-1055703269),(size * my__$1)], null)],[])]):null),uix.compiler.alpha.component_element(example.core.background_layer,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),on_object_select], null)],[]),uix.compiler.alpha.component_element(example.core.objects_layer,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"objects","objects",2099713734),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(canvas),new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_object_select], null)],[]),uix.compiler.alpha.component_element(example.core.edit_layer,[new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_object_select,new cljs.core.Keyword(null,"on-object-changed","on-object-changed",-1493555239),on_object_changed,new cljs.core.Keyword(null,"mx","mx",-199887020),mx__$1,new cljs.core.Keyword(null,"my","my",-1055703269),my__$1,new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(canvas),new cljs.core.Keyword(null,"selected","selected",574897764),(cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(canvas))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(canvas),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(canvas)):null)], null)],[])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30642 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30643 = example.core.canvas;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30643);

try{if(((cljs.core.map_QMARK_(clj_props__29460__auto__)) || ((clj_props__29460__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__29460__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__29460__auto__) (clojure.core/nil? clj-props__29460__auto__))"].join('')));
}

return f__29461__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30642);
}} else {
return f__29461__auto__();
}
});

(example.core.canvas.uix_component_QMARK_ = true);

(example.core.canvas.displayName = "example.core/canvas");

Object.defineProperty(example.core.canvas,"name",(function (){var obj30647 = ({"value":"example.core/canvas"});
return obj30647;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30723 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30723.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30723.cljs$core$IFn$_invoke$arity$4(example.core.canvas,"(uix/use-state [0 0])(uix/use-state [0 0])(uix/use-state [0 0])(uix/use-ref)(uix/use-effect (fn [] (set-offset [(.-offsetLeft (clojure.core/deref ref)) (.-offsetTop (clojure.core/deref ref))]) (set-size [(.-width js/screen) (.-height js/screen)])) [])",null,null) : sig__29399__auto___30723.call(null, example.core.canvas,"(uix/use-state [0 0])(uix/use-state [0 0])(uix/use-state [0 0])(uix/use-ref)(uix/use-effect (fn [] (set-offset [(.-offsetLeft (clojure.core/deref ref)) (.-offsetTop (clojure.core/deref ref))]) (set-size [(.-width js/screen) (.-height js/screen)])) [])",null,null));

window.uix.dev.register_BANG_(example.core.canvas,example.core.canvas.displayName);

(example.core.canvas.fast_refresh_signature = sig__29399__auto___30723);
} else {
}
} else {
}

example.core.default_styles = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(32),new cljs.core.Keyword(null,"y","y",-1757859776),(32),new cljs.core.Keyword(null,"width","width",-384071477),(12),new cljs.core.Keyword(null,"height","height",1025178622),(12),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),"#ff0000",new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),"#00ff00"], null);
example.core.app = (function example$core$app(){
var f__29457__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___30724 = example.core.app.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___30724)){
var f__29390__auto___30725 = temp__5823__auto___30724;
(f__29390__auto___30725.cljs$core$IFn$_invoke$arity$0 ? f__29390__auto___30725.cljs$core$IFn$_invoke$arity$0() : f__29390__auto___30725.call(null, ));
} else {
}
} else {
}

var vec__30653 = uix.core.use_state(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid?","grid?",-288406689),true,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",574897764),null,new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.PersistentVector.EMPTY], null)], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30653,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30653,(1),null);
var on_add_shape = (function (shape){
var id = cljs.core.random_uuid();
var G__30656 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"objects","objects",2099713734)], null),cljs.core.conj,(function (){var G__30657 = shape;
var G__30657__$1 = (((G__30657 instanceof cljs.core.Keyword))?G__30657.fqn:null);
switch (G__30657__$1) {
case "rect":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([example.core.default_styles,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], 0));

break;
case "circle":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([example.core.default_styles,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], 0));

break;
case "text":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([example.core.default_styles,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"value","value",305978217),"text",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Inter",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(32),new cljs.core.Keyword(null,"font-style","font-style",-773672352),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null)], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30657__$1)].join('')));

}
})());
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__30656) : set_state.call(null, G__30656));
});
var on_object_select = (function() {
var G__30732 = null;
var G__30732__0 = (function (){
var G__30658 = cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"selected","selected",574897764)], null),null);
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__30658) : set_state.call(null, G__30658));
});
var G__30732__1 = (function (idx){
var G__30659 = cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"selected","selected",574897764)], null),idx);
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__30659) : set_state.call(null, G__30659));
});
G__30732 = function(idx){
switch(arguments.length){
case 0:
return G__30732__0.call(this);
case 1:
return G__30732__1.call(this,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30732.cljs$core$IFn$_invoke$arity$0 = G__30732__0;
G__30732.cljs$core$IFn$_invoke$arity$1 = G__30732__1;
return G__30732;
})()
;
var on_object_changed = uix.hooks.alpha.use_callback((function (idx,object){
var G__30661 = (function (p1__30649_SHARP_){
return cljs.core.assoc_in(p1__30649_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"objects","objects",2099713734),idx], null),object);
});
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__30661) : set_state.call(null, G__30661));
}),[uix.hooks.alpha.use_clj_deps(cljs.core.PersistentVector.EMPTY)]);
return uix.compiler.aot._GT_el("div",[{'style':{'fontFamily':"Inter",'fontSize':(14),'display':"flex",'flexDirection':"column",'width':"100vw",'height':"100vh"}}],[uix.compiler.alpha.component_element(example.core.toolbar,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"set-state","set-state",1344116913),set_state,new cljs.core.Keyword(null,"on-add-shape","on-add-shape",1289220499),on_add_shape], null)],[]),uix.compiler.alpha.component_element(example.core.canvas,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"on-object-select","on-object-select",-1747471264),on_object_select,new cljs.core.Keyword(null,"on-object-changed","on-object-changed",-1493555239),on_object_changed], null)],[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__30663 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__30664 = example.core.app;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__30664);

try{return f__29457__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__30663);
}} else {
return f__29457__auto__();
}
});

(example.core.app.uix_component_QMARK_ = true);

(example.core.app.displayName = "example.core/app");

Object.defineProperty(example.core.app,"name",(function (){var obj30666 = ({"value":"example.core/app"});
return obj30666;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__29399__auto___30736 = window.uix.dev.signature_BANG_();
(sig__29399__auto___30736.cljs$core$IFn$_invoke$arity$4 ? sig__29399__auto___30736.cljs$core$IFn$_invoke$arity$4(example.core.app,"(uix/use-state {:grid? true, :canvas {:selected nil, :objects []}})(uix/use-callback (fn [idx object] (set-state (fn* [p1] (assoc-in p1 [:canvas :objects idx] object)))) [])",null,null) : sig__29399__auto___30736.call(null, example.core.app,"(uix/use-state {:grid? true, :canvas {:selected nil, :objects []}})(uix/use-callback (fn [idx object] (set-state (fn* [p1] (assoc-in p1 [:canvas :objects idx] object)))) [])",null,null));

window.uix.dev.register_BANG_(example.core.app,example.core.app.displayName);

(example.core.app.fast_refresh_signature = sig__29399__auto___30736);
} else {
}
} else {
}

if((typeof example !== 'undefined') && (typeof example.core !== 'undefined') && (typeof example.core._init !== 'undefined')){
} else {
example.core._init = (function (){var root = uix.dom.create_root.cljs$core$IFn$_invoke$arity$1(document.getElementById("root"));
uix.dom.render_root(uix.compiler.alpha.component_element(example.core.app,[null],[]),root);

return null;
})();
}
cljs_react_devtools.core.init_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"root","root",-448657453),document.getElementById("root"),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),"Control-Shift-Meta-R"], null));

//# sourceMappingURL=example.core.js.map
