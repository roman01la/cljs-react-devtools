goog.provide('uix.compiler.input');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
uix.compiler.input.these_inputs_have_selection_api = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["url",null,"tel",null,"text",null,"textarea",null,"password",null,"search",null], null), null);
uix.compiler.input.has_selection_api_QMARK_ = (function uix$compiler$input$has_selection_api_QMARK_(input_type){
return cljs.core.contains_QMARK_(uix.compiler.input.these_inputs_have_selection_api,input_type);
});
uix.compiler.input.should_use_reagent_input_QMARK_ = (function uix$compiler$input$should_use_reagent_input_QMARK_(){
return (((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.util !== 'undefined') && (typeof reagent.impl.util._STAR_non_reactive_STAR_ !== 'undefined')) && (cljs.core.not(reagent.impl.util._STAR_non_reactive_STAR_)));
});
uix.compiler.input.do_after_render = (function uix$compiler$input$do_after_render(f){
return reagent.impl.batching.do_after_render(f);
});
uix.compiler.input.input_node_set_value = (function uix$compiler$input$input_node_set_value(node,rendered_value,dom_value,component){
if((!((((node === document.activeElement)) && (((uix.compiler.input.has_selection_api_QMARK_(node.type)) && (((typeof rendered_value === 'string') && (typeof dom_value === 'string'))))))))){
(component.cljsDOMValue = rendered_value);

return (node.value = rendered_value);
} else {
var node_value = node.value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_value,dom_value)){
var existing_offset_from_end = (cljs.core.count(node_value) - node.selectionStart);
var new_cursor_offset = (cljs.core.count(rendered_value) - existing_offset_from_end);
(component.cljsDOMValue = rendered_value);

(node.value = rendered_value);

(node.selectionStart = new_cursor_offset);

return (node.selectionEnd = new_cursor_offset);
} else {
return null;
}
}
});
uix.compiler.input.input_component_set_value = (function uix$compiler$input$input_component_set_value(this$){
if(cljs.core.truth_(this$.cljsInputLive)){
(this$.cljsInputDirty = false);

var rendered_value = this$.cljsRenderedValue;
var dom_value = this$.cljsDOMValue;
var node = this$.inputEl;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(rendered_value,dom_value)){
return uix.compiler.input.input_node_set_value(node,rendered_value,dom_value,this$);
} else {
return null;
}
} else {
return null;
}
});
uix.compiler.input.input_handle_change = (function uix$compiler$input$input_handle_change(this$,on_change,e){
(this$.cljsDOMValue = e.target.value);

if(cljs.core.truth_(this$.cljsInputDirty)){
} else {
(this$.cljsInputDirty = true);

uix.compiler.input.do_after_render((function (){
return uix.compiler.input.input_component_set_value(this$);
}));
}

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(e) : on_change.call(null, e));
});
uix.compiler.input.input_render_setup = (function uix$compiler$input$input_render_setup(this$,jsprops){
if(cljs.core.truth_((function (){var and__5043__auto__ = (!((jsprops == null)));
if(and__5043__auto__){
var and__5043__auto____$1 = jsprops.hasOwnProperty("onChange");
if(cljs.core.truth_(and__5043__auto____$1)){
return jsprops.hasOwnProperty("value");
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
var v = jsprops.value;
var value = (((v == null))?"":v);
var on_change = jsprops.onChange;
var original_ref_fn = jsprops.ref;
if(cljs.core.truth_(this$.cljsInputLive)){
} else {
(this$.cljsInputLive = true);

(this$.cljsDOMValue = value);
}

if(cljs.core.truth_(this$.reagentRefFn)){
} else {
(this$.reagentRefFn = ((cljs.core.fn_QMARK_(original_ref_fn))?(function (el){
(this$.inputEl = el);

return (original_ref_fn.cljs$core$IFn$_invoke$arity$1 ? original_ref_fn.cljs$core$IFn$_invoke$arity$1(el) : original_ref_fn.call(null, el));
}):(cljs.core.truth_((function (){var and__5043__auto__ = original_ref_fn;
if(cljs.core.truth_(and__5043__auto__)){
return original_ref_fn.hasOwnProperty("current");
} else {
return and__5043__auto__;
}
})())?(function (el){
(this$.inputEl = el);

return (original_ref_fn.current = el);
}):(function (el){
return (this$.inputEl = el);
})
)));
}

(this$.cljsRenderedValue = value);

delete jsprops["value"];

(jsprops.defaultValue = value);

(jsprops.onChange = (function (p1__28217_SHARP_){
return uix.compiler.input.input_handle_change(this$,on_change,p1__28217_SHARP_);
}));

return (jsprops.ref = this$.reagentRefFn);
} else {
return null;
}
});
uix.compiler.input.input_unmount = (function uix$compiler$input$input_unmount(this$){
return (this$.cljsInputLive = null);
});
uix.compiler.input.reagent_input = (function uix$compiler$input$reagent_input(js_props){
var this$ = module$node_modules$react$index.useRef(({})).current;
uix.compiler.input.input_render_setup(this$,js_props.props);

if((typeof document !== 'undefined')){
module$node_modules$react$index.useLayoutEffect((function (){
uix.compiler.input.input_component_set_value(this$);

return undefined;
}));
} else {
}

module$node_modules$react$index.useEffect((function (){
return (function (){
return uix.compiler.input.input_unmount(this$);
});
}),[]);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,js_props.tag,js_props.props,js_props.children);
});

//# sourceMappingURL=uix.compiler.input.js.map
