goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_29155 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null, this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_29155(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_29160 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null, this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_29160(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__28145 = coll;
var G__28146 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__28145,G__28146) : shadow.dom.lazy_native_coll_seq.call(null, G__28145,G__28146));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__28164 = arguments.length;
switch (G__28164) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__28189 = arguments.length;
switch (G__28189) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__28197 = arguments.length;
switch (G__28197) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__28213 = arguments.length;
switch (G__28213) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__28232 = arguments.length;
switch (G__28232) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__28267 = arguments.length;
switch (G__28267) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e28271){if((e28271 instanceof Object)){
var e = e28271;
return console.log("didnt support attachEvent",el,e);
} else {
throw e28271;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__28282 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__28283 = null;
var count__28284 = (0);
var i__28285 = (0);
while(true){
if((i__28285 < count__28284)){
var el = chunk__28283.cljs$core$IIndexed$_nth$arity$2(null, i__28285);
var handler_29203__$1 = ((function (seq__28282,chunk__28283,count__28284,i__28285,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__28282,chunk__28283,count__28284,i__28285,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29203__$1);


var G__29206 = seq__28282;
var G__29207 = chunk__28283;
var G__29208 = count__28284;
var G__29209 = (i__28285 + (1));
seq__28282 = G__29206;
chunk__28283 = G__29207;
count__28284 = G__29208;
i__28285 = G__29209;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28282);
if(temp__5823__auto__){
var seq__28282__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28282__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28282__$1);
var G__29213 = cljs.core.chunk_rest(seq__28282__$1);
var G__29214 = c__5568__auto__;
var G__29215 = cljs.core.count(c__5568__auto__);
var G__29216 = (0);
seq__28282 = G__29213;
chunk__28283 = G__29214;
count__28284 = G__29215;
i__28285 = G__29216;
continue;
} else {
var el = cljs.core.first(seq__28282__$1);
var handler_29218__$1 = ((function (seq__28282,chunk__28283,count__28284,i__28285,el,seq__28282__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__28282,chunk__28283,count__28284,i__28285,el,seq__28282__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29218__$1);


var G__29219 = cljs.core.next(seq__28282__$1);
var G__29220 = null;
var G__29221 = (0);
var G__29222 = (0);
seq__28282 = G__29219;
chunk__28283 = G__29220;
count__28284 = G__29221;
i__28285 = G__29222;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__28288 = arguments.length;
switch (G__28288) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__28321 = cljs.core.seq(events);
var chunk__28322 = null;
var count__28323 = (0);
var i__28324 = (0);
while(true){
if((i__28324 < count__28323)){
var vec__28335 = chunk__28322.cljs$core$IIndexed$_nth$arity$2(null, i__28324);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28335,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28335,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29235 = seq__28321;
var G__29236 = chunk__28322;
var G__29237 = count__28323;
var G__29238 = (i__28324 + (1));
seq__28321 = G__29235;
chunk__28322 = G__29236;
count__28323 = G__29237;
i__28324 = G__29238;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28321);
if(temp__5823__auto__){
var seq__28321__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28321__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28321__$1);
var G__29240 = cljs.core.chunk_rest(seq__28321__$1);
var G__29241 = c__5568__auto__;
var G__29242 = cljs.core.count(c__5568__auto__);
var G__29243 = (0);
seq__28321 = G__29240;
chunk__28322 = G__29241;
count__28323 = G__29242;
i__28324 = G__29243;
continue;
} else {
var vec__28339 = cljs.core.first(seq__28321__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28339,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28339,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29245 = cljs.core.next(seq__28321__$1);
var G__29246 = null;
var G__29247 = (0);
var G__29248 = (0);
seq__28321 = G__29245;
chunk__28322 = G__29246;
count__28323 = G__29247;
i__28324 = G__29248;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__28347 = cljs.core.seq(styles);
var chunk__28348 = null;
var count__28349 = (0);
var i__28350 = (0);
while(true){
if((i__28350 < count__28349)){
var vec__28358 = chunk__28348.cljs$core$IIndexed$_nth$arity$2(null, i__28350);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28358,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28358,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29252 = seq__28347;
var G__29253 = chunk__28348;
var G__29254 = count__28349;
var G__29255 = (i__28350 + (1));
seq__28347 = G__29252;
chunk__28348 = G__29253;
count__28349 = G__29254;
i__28350 = G__29255;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28347);
if(temp__5823__auto__){
var seq__28347__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28347__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28347__$1);
var G__29257 = cljs.core.chunk_rest(seq__28347__$1);
var G__29258 = c__5568__auto__;
var G__29259 = cljs.core.count(c__5568__auto__);
var G__29260 = (0);
seq__28347 = G__29257;
chunk__28348 = G__29258;
count__28349 = G__29259;
i__28350 = G__29260;
continue;
} else {
var vec__28362 = cljs.core.first(seq__28347__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28362,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28362,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29262 = cljs.core.next(seq__28347__$1);
var G__29263 = null;
var G__29264 = (0);
var G__29265 = (0);
seq__28347 = G__29262;
chunk__28348 = G__29263;
count__28349 = G__29264;
i__28350 = G__29265;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__28365_29267 = key;
var G__28365_29268__$1 = (((G__28365_29267 instanceof cljs.core.Keyword))?G__28365_29267.fqn:null);
switch (G__28365_29268__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_29271 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_29271,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_29271,"aria-");
}
})())){
el.setAttribute(ks_29271,value);
} else {
(el[ks_29271] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__28390){
var map__28391 = p__28390;
var map__28391__$1 = cljs.core.__destructure_map(map__28391);
var props = map__28391__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28391__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__28392 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28392,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28392,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28392,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__28395 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__28395,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__28395;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__28398 = arguments.length;
switch (G__28398) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__28406){
var vec__28407 = p__28406;
var seq__28408 = cljs.core.seq(vec__28407);
var first__28409 = cljs.core.first(seq__28408);
var seq__28408__$1 = cljs.core.next(seq__28408);
var nn = first__28409;
var first__28409__$1 = cljs.core.first(seq__28408__$1);
var seq__28408__$2 = cljs.core.next(seq__28408__$1);
var np = first__28409__$1;
var nc = seq__28408__$2;
var node = vec__28407;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28410 = nn;
var G__28411 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28410,G__28411) : create_fn.call(null, G__28410,G__28411));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28412 = nn;
var G__28413 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28412,G__28413) : create_fn.call(null, G__28412,G__28413));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__28437 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28437,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28437,(1),null);
var seq__28440_29292 = cljs.core.seq(node_children);
var chunk__28441_29293 = null;
var count__28442_29294 = (0);
var i__28443_29295 = (0);
while(true){
if((i__28443_29295 < count__28442_29294)){
var child_struct_29296 = chunk__28441_29293.cljs$core$IIndexed$_nth$arity$2(null, i__28443_29295);
var children_29297 = shadow.dom.dom_node(child_struct_29296);
if(cljs.core.seq_QMARK_(children_29297)){
var seq__28503_29298 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29297));
var chunk__28505_29299 = null;
var count__28506_29300 = (0);
var i__28507_29301 = (0);
while(true){
if((i__28507_29301 < count__28506_29300)){
var child_29302 = chunk__28505_29299.cljs$core$IIndexed$_nth$arity$2(null, i__28507_29301);
if(cljs.core.truth_(child_29302)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29302);


var G__29303 = seq__28503_29298;
var G__29304 = chunk__28505_29299;
var G__29305 = count__28506_29300;
var G__29306 = (i__28507_29301 + (1));
seq__28503_29298 = G__29303;
chunk__28505_29299 = G__29304;
count__28506_29300 = G__29305;
i__28507_29301 = G__29306;
continue;
} else {
var G__29307 = seq__28503_29298;
var G__29308 = chunk__28505_29299;
var G__29309 = count__28506_29300;
var G__29310 = (i__28507_29301 + (1));
seq__28503_29298 = G__29307;
chunk__28505_29299 = G__29308;
count__28506_29300 = G__29309;
i__28507_29301 = G__29310;
continue;
}
} else {
var temp__5823__auto___29311 = cljs.core.seq(seq__28503_29298);
if(temp__5823__auto___29311){
var seq__28503_29312__$1 = temp__5823__auto___29311;
if(cljs.core.chunked_seq_QMARK_(seq__28503_29312__$1)){
var c__5568__auto___29313 = cljs.core.chunk_first(seq__28503_29312__$1);
var G__29314 = cljs.core.chunk_rest(seq__28503_29312__$1);
var G__29315 = c__5568__auto___29313;
var G__29316 = cljs.core.count(c__5568__auto___29313);
var G__29317 = (0);
seq__28503_29298 = G__29314;
chunk__28505_29299 = G__29315;
count__28506_29300 = G__29316;
i__28507_29301 = G__29317;
continue;
} else {
var child_29318 = cljs.core.first(seq__28503_29312__$1);
if(cljs.core.truth_(child_29318)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29318);


var G__29319 = cljs.core.next(seq__28503_29312__$1);
var G__29320 = null;
var G__29321 = (0);
var G__29322 = (0);
seq__28503_29298 = G__29319;
chunk__28505_29299 = G__29320;
count__28506_29300 = G__29321;
i__28507_29301 = G__29322;
continue;
} else {
var G__29323 = cljs.core.next(seq__28503_29312__$1);
var G__29324 = null;
var G__29325 = (0);
var G__29326 = (0);
seq__28503_29298 = G__29323;
chunk__28505_29299 = G__29324;
count__28506_29300 = G__29325;
i__28507_29301 = G__29326;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29297);
}


var G__29327 = seq__28440_29292;
var G__29328 = chunk__28441_29293;
var G__29329 = count__28442_29294;
var G__29330 = (i__28443_29295 + (1));
seq__28440_29292 = G__29327;
chunk__28441_29293 = G__29328;
count__28442_29294 = G__29329;
i__28443_29295 = G__29330;
continue;
} else {
var temp__5823__auto___29331 = cljs.core.seq(seq__28440_29292);
if(temp__5823__auto___29331){
var seq__28440_29332__$1 = temp__5823__auto___29331;
if(cljs.core.chunked_seq_QMARK_(seq__28440_29332__$1)){
var c__5568__auto___29333 = cljs.core.chunk_first(seq__28440_29332__$1);
var G__29334 = cljs.core.chunk_rest(seq__28440_29332__$1);
var G__29335 = c__5568__auto___29333;
var G__29336 = cljs.core.count(c__5568__auto___29333);
var G__29337 = (0);
seq__28440_29292 = G__29334;
chunk__28441_29293 = G__29335;
count__28442_29294 = G__29336;
i__28443_29295 = G__29337;
continue;
} else {
var child_struct_29338 = cljs.core.first(seq__28440_29332__$1);
var children_29339 = shadow.dom.dom_node(child_struct_29338);
if(cljs.core.seq_QMARK_(children_29339)){
var seq__28515_29340 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29339));
var chunk__28517_29341 = null;
var count__28518_29342 = (0);
var i__28519_29343 = (0);
while(true){
if((i__28519_29343 < count__28518_29342)){
var child_29344 = chunk__28517_29341.cljs$core$IIndexed$_nth$arity$2(null, i__28519_29343);
if(cljs.core.truth_(child_29344)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29344);


var G__29345 = seq__28515_29340;
var G__29346 = chunk__28517_29341;
var G__29347 = count__28518_29342;
var G__29348 = (i__28519_29343 + (1));
seq__28515_29340 = G__29345;
chunk__28517_29341 = G__29346;
count__28518_29342 = G__29347;
i__28519_29343 = G__29348;
continue;
} else {
var G__29349 = seq__28515_29340;
var G__29350 = chunk__28517_29341;
var G__29351 = count__28518_29342;
var G__29352 = (i__28519_29343 + (1));
seq__28515_29340 = G__29349;
chunk__28517_29341 = G__29350;
count__28518_29342 = G__29351;
i__28519_29343 = G__29352;
continue;
}
} else {
var temp__5823__auto___29353__$1 = cljs.core.seq(seq__28515_29340);
if(temp__5823__auto___29353__$1){
var seq__28515_29354__$1 = temp__5823__auto___29353__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28515_29354__$1)){
var c__5568__auto___29355 = cljs.core.chunk_first(seq__28515_29354__$1);
var G__29356 = cljs.core.chunk_rest(seq__28515_29354__$1);
var G__29357 = c__5568__auto___29355;
var G__29358 = cljs.core.count(c__5568__auto___29355);
var G__29359 = (0);
seq__28515_29340 = G__29356;
chunk__28517_29341 = G__29357;
count__28518_29342 = G__29358;
i__28519_29343 = G__29359;
continue;
} else {
var child_29360 = cljs.core.first(seq__28515_29354__$1);
if(cljs.core.truth_(child_29360)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29360);


var G__29361 = cljs.core.next(seq__28515_29354__$1);
var G__29362 = null;
var G__29363 = (0);
var G__29364 = (0);
seq__28515_29340 = G__29361;
chunk__28517_29341 = G__29362;
count__28518_29342 = G__29363;
i__28519_29343 = G__29364;
continue;
} else {
var G__29365 = cljs.core.next(seq__28515_29354__$1);
var G__29366 = null;
var G__29367 = (0);
var G__29368 = (0);
seq__28515_29340 = G__29365;
chunk__28517_29341 = G__29366;
count__28518_29342 = G__29367;
i__28519_29343 = G__29368;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29339);
}


var G__29369 = cljs.core.next(seq__28440_29332__$1);
var G__29370 = null;
var G__29371 = (0);
var G__29372 = (0);
seq__28440_29292 = G__29369;
chunk__28441_29293 = G__29370;
count__28442_29294 = G__29371;
i__28443_29295 = G__29372;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__28543 = cljs.core.seq(node);
var chunk__28544 = null;
var count__28545 = (0);
var i__28546 = (0);
while(true){
if((i__28546 < count__28545)){
var n = chunk__28544.cljs$core$IIndexed$_nth$arity$2(null, i__28546);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__29373 = seq__28543;
var G__29374 = chunk__28544;
var G__29375 = count__28545;
var G__29376 = (i__28546 + (1));
seq__28543 = G__29373;
chunk__28544 = G__29374;
count__28545 = G__29375;
i__28546 = G__29376;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28543);
if(temp__5823__auto__){
var seq__28543__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28543__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28543__$1);
var G__29377 = cljs.core.chunk_rest(seq__28543__$1);
var G__29378 = c__5568__auto__;
var G__29379 = cljs.core.count(c__5568__auto__);
var G__29380 = (0);
seq__28543 = G__29377;
chunk__28544 = G__29378;
count__28545 = G__29379;
i__28546 = G__29380;
continue;
} else {
var n = cljs.core.first(seq__28543__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__29381 = cljs.core.next(seq__28543__$1);
var G__29382 = null;
var G__29383 = (0);
var G__29384 = (0);
seq__28543 = G__29381;
chunk__28544 = G__29382;
count__28545 = G__29383;
i__28546 = G__29384;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__28563 = arguments.length;
switch (G__28563) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__28588 = arguments.length;
switch (G__28588) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__28609 = arguments.length;
switch (G__28609) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29388 = arguments.length;
var i__5770__auto___29389 = (0);
while(true){
if((i__5770__auto___29389 < len__5769__auto___29388)){
args__5775__auto__.push((arguments[i__5770__auto___29389]));

var G__29390 = (i__5770__auto___29389 + (1));
i__5770__auto___29389 = G__29390;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__28641_29391 = cljs.core.seq(nodes);
var chunk__28642_29392 = null;
var count__28643_29393 = (0);
var i__28644_29394 = (0);
while(true){
if((i__28644_29394 < count__28643_29393)){
var node_29395 = chunk__28642_29392.cljs$core$IIndexed$_nth$arity$2(null, i__28644_29394);
fragment.appendChild(shadow.dom._to_dom(node_29395));


var G__29396 = seq__28641_29391;
var G__29397 = chunk__28642_29392;
var G__29398 = count__28643_29393;
var G__29399 = (i__28644_29394 + (1));
seq__28641_29391 = G__29396;
chunk__28642_29392 = G__29397;
count__28643_29393 = G__29398;
i__28644_29394 = G__29399;
continue;
} else {
var temp__5823__auto___29400 = cljs.core.seq(seq__28641_29391);
if(temp__5823__auto___29400){
var seq__28641_29401__$1 = temp__5823__auto___29400;
if(cljs.core.chunked_seq_QMARK_(seq__28641_29401__$1)){
var c__5568__auto___29402 = cljs.core.chunk_first(seq__28641_29401__$1);
var G__29403 = cljs.core.chunk_rest(seq__28641_29401__$1);
var G__29404 = c__5568__auto___29402;
var G__29405 = cljs.core.count(c__5568__auto___29402);
var G__29406 = (0);
seq__28641_29391 = G__29403;
chunk__28642_29392 = G__29404;
count__28643_29393 = G__29405;
i__28644_29394 = G__29406;
continue;
} else {
var node_29407 = cljs.core.first(seq__28641_29401__$1);
fragment.appendChild(shadow.dom._to_dom(node_29407));


var G__29408 = cljs.core.next(seq__28641_29401__$1);
var G__29409 = null;
var G__29410 = (0);
var G__29411 = (0);
seq__28641_29391 = G__29408;
chunk__28642_29392 = G__29409;
count__28643_29393 = G__29410;
i__28644_29394 = G__29411;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq28633){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28633));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__28666_29412 = cljs.core.seq(scripts);
var chunk__28667_29413 = null;
var count__28668_29414 = (0);
var i__28669_29415 = (0);
while(true){
if((i__28669_29415 < count__28668_29414)){
var vec__28681_29416 = chunk__28667_29413.cljs$core$IIndexed$_nth$arity$2(null, i__28669_29415);
var script_tag_29417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28681_29416,(0),null);
var script_body_29418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28681_29416,(1),null);
eval(script_body_29418);


var G__29419 = seq__28666_29412;
var G__29420 = chunk__28667_29413;
var G__29421 = count__28668_29414;
var G__29422 = (i__28669_29415 + (1));
seq__28666_29412 = G__29419;
chunk__28667_29413 = G__29420;
count__28668_29414 = G__29421;
i__28669_29415 = G__29422;
continue;
} else {
var temp__5823__auto___29423 = cljs.core.seq(seq__28666_29412);
if(temp__5823__auto___29423){
var seq__28666_29424__$1 = temp__5823__auto___29423;
if(cljs.core.chunked_seq_QMARK_(seq__28666_29424__$1)){
var c__5568__auto___29425 = cljs.core.chunk_first(seq__28666_29424__$1);
var G__29426 = cljs.core.chunk_rest(seq__28666_29424__$1);
var G__29427 = c__5568__auto___29425;
var G__29428 = cljs.core.count(c__5568__auto___29425);
var G__29429 = (0);
seq__28666_29412 = G__29426;
chunk__28667_29413 = G__29427;
count__28668_29414 = G__29428;
i__28669_29415 = G__29429;
continue;
} else {
var vec__28691_29430 = cljs.core.first(seq__28666_29424__$1);
var script_tag_29431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28691_29430,(0),null);
var script_body_29432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28691_29430,(1),null);
eval(script_body_29432);


var G__29433 = cljs.core.next(seq__28666_29424__$1);
var G__29434 = null;
var G__29435 = (0);
var G__29436 = (0);
seq__28666_29412 = G__29433;
chunk__28667_29413 = G__29434;
count__28668_29414 = G__29435;
i__28669_29415 = G__29436;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__28700){
var vec__28702 = p__28700;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28702,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28702,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__28722 = arguments.length;
switch (G__28722) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__28744 = cljs.core.seq(style_keys);
var chunk__28745 = null;
var count__28746 = (0);
var i__28747 = (0);
while(true){
if((i__28747 < count__28746)){
var it = chunk__28745.cljs$core$IIndexed$_nth$arity$2(null, i__28747);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29438 = seq__28744;
var G__29439 = chunk__28745;
var G__29440 = count__28746;
var G__29441 = (i__28747 + (1));
seq__28744 = G__29438;
chunk__28745 = G__29439;
count__28746 = G__29440;
i__28747 = G__29441;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28744);
if(temp__5823__auto__){
var seq__28744__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28744__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28744__$1);
var G__29442 = cljs.core.chunk_rest(seq__28744__$1);
var G__29443 = c__5568__auto__;
var G__29444 = cljs.core.count(c__5568__auto__);
var G__29445 = (0);
seq__28744 = G__29442;
chunk__28745 = G__29443;
count__28746 = G__29444;
i__28747 = G__29445;
continue;
} else {
var it = cljs.core.first(seq__28744__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29446 = cljs.core.next(seq__28744__$1);
var G__29447 = null;
var G__29448 = (0);
var G__29449 = (0);
seq__28744 = G__29446;
chunk__28745 = G__29447;
count__28746 = G__29448;
i__28747 = G__29449;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k28761,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__28772 = k28761;
var G__28772__$1 = (((G__28772 instanceof cljs.core.Keyword))?G__28772.fqn:null);
switch (G__28772__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28761,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__28778){
var vec__28779 = p__28778;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28779,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28779,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null, ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28760){
var self__ = this;
var G__28760__$1 = this;
return (new cljs.core.RecordIter((0),G__28760__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28762,other28763){
var self__ = this;
var this28762__$1 = this;
return (((!((other28763 == null)))) && ((((this28762__$1.constructor === other28763.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28762__$1.x,other28763.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28762__$1.y,other28763.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28762__$1.__extmap,other28763.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k28761){
var self__ = this;
var this__5350__auto____$1 = this;
var G__28794 = k28761;
var G__28794__$1 = (((G__28794 instanceof cljs.core.Keyword))?G__28794.fqn:null);
switch (G__28794__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28761);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__28760){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__28798 = cljs.core.keyword_identical_QMARK_;
var expr__28799 = k__5352__auto__;
if(cljs.core.truth_((pred__28798.cljs$core$IFn$_invoke$arity$2 ? pred__28798.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__28799) : pred__28798.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__28799)))){
return (new shadow.dom.Coordinate(G__28760,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28798.cljs$core$IFn$_invoke$arity$2 ? pred__28798.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__28799) : pred__28798.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__28799)))){
return (new shadow.dom.Coordinate(self__.x,G__28760,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__28760),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__28760){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__28760,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__28766){
var extmap__5385__auto__ = (function (){var G__28806 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28766,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__28766)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28806);
} else {
return G__28806;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__28766),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__28766),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k28822,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__28835 = k28822;
var G__28835__$1 = (((G__28835 instanceof cljs.core.Keyword))?G__28835.fqn:null);
switch (G__28835__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28822,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__28837){
var vec__28838 = p__28837;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28838,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28838,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null, ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28821){
var self__ = this;
var G__28821__$1 = this;
return (new cljs.core.RecordIter((0),G__28821__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28823,other28824){
var self__ = this;
var this28823__$1 = this;
return (((!((other28824 == null)))) && ((((this28823__$1.constructor === other28824.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28823__$1.w,other28824.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28823__$1.h,other28824.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28823__$1.__extmap,other28824.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k28822){
var self__ = this;
var this__5350__auto____$1 = this;
var G__28864 = k28822;
var G__28864__$1 = (((G__28864 instanceof cljs.core.Keyword))?G__28864.fqn:null);
switch (G__28864__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28822);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__28821){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__28867 = cljs.core.keyword_identical_QMARK_;
var expr__28868 = k__5352__auto__;
if(cljs.core.truth_((pred__28867.cljs$core$IFn$_invoke$arity$2 ? pred__28867.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__28868) : pred__28867.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__28868)))){
return (new shadow.dom.Size(G__28821,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28867.cljs$core$IFn$_invoke$arity$2 ? pred__28867.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__28868) : pred__28867.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__28868)))){
return (new shadow.dom.Size(self__.w,G__28821,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__28821),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__28821){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__28821,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__28826){
var extmap__5385__auto__ = (function (){var G__28879 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28826,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__28826)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28879);
} else {
return G__28879;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__28826),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__28826),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__29470 = (i + (1));
var G__29471 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__29470;
ret = G__29471;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28911){
var vec__28912 = p__28911;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28912,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28912,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__28920 = arguments.length;
switch (G__28920) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__29474 = ps;
var G__29475 = (i + (1));
el__$1 = G__29474;
i = G__29475;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__28972 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28972,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28972,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28972,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__28976_29477 = cljs.core.seq(props);
var chunk__28977_29478 = null;
var count__28978_29479 = (0);
var i__28979_29480 = (0);
while(true){
if((i__28979_29480 < count__28978_29479)){
var vec__29007_29481 = chunk__28977_29478.cljs$core$IIndexed$_nth$arity$2(null, i__28979_29480);
var k_29482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29007_29481,(0),null);
var v_29483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29007_29481,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_29482);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29482),v_29483);


var G__29484 = seq__28976_29477;
var G__29485 = chunk__28977_29478;
var G__29486 = count__28978_29479;
var G__29487 = (i__28979_29480 + (1));
seq__28976_29477 = G__29484;
chunk__28977_29478 = G__29485;
count__28978_29479 = G__29486;
i__28979_29480 = G__29487;
continue;
} else {
var temp__5823__auto___29488 = cljs.core.seq(seq__28976_29477);
if(temp__5823__auto___29488){
var seq__28976_29489__$1 = temp__5823__auto___29488;
if(cljs.core.chunked_seq_QMARK_(seq__28976_29489__$1)){
var c__5568__auto___29490 = cljs.core.chunk_first(seq__28976_29489__$1);
var G__29491 = cljs.core.chunk_rest(seq__28976_29489__$1);
var G__29492 = c__5568__auto___29490;
var G__29493 = cljs.core.count(c__5568__auto___29490);
var G__29494 = (0);
seq__28976_29477 = G__29491;
chunk__28977_29478 = G__29492;
count__28978_29479 = G__29493;
i__28979_29480 = G__29494;
continue;
} else {
var vec__29015_29495 = cljs.core.first(seq__28976_29489__$1);
var k_29496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29015_29495,(0),null);
var v_29497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29015_29495,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_29496);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29496),v_29497);


var G__29498 = cljs.core.next(seq__28976_29489__$1);
var G__29499 = null;
var G__29500 = (0);
var G__29501 = (0);
seq__28976_29477 = G__29498;
chunk__28977_29478 = G__29499;
count__28978_29479 = G__29500;
i__28979_29480 = G__29501;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__29028 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29028,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29028,(1),null);
var seq__29031_29502 = cljs.core.seq(node_children);
var chunk__29033_29503 = null;
var count__29034_29504 = (0);
var i__29035_29505 = (0);
while(true){
if((i__29035_29505 < count__29034_29504)){
var child_struct_29506 = chunk__29033_29503.cljs$core$IIndexed$_nth$arity$2(null, i__29035_29505);
if((!((child_struct_29506 == null)))){
if(typeof child_struct_29506 === 'string'){
var text_29507 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29507),child_struct_29506].join(''));
} else {
var children_29508 = shadow.dom.svg_node(child_struct_29506);
if(cljs.core.seq_QMARK_(children_29508)){
var seq__29082_29509 = cljs.core.seq(children_29508);
var chunk__29084_29510 = null;
var count__29085_29511 = (0);
var i__29086_29512 = (0);
while(true){
if((i__29086_29512 < count__29085_29511)){
var child_29513 = chunk__29084_29510.cljs$core$IIndexed$_nth$arity$2(null, i__29086_29512);
if(cljs.core.truth_(child_29513)){
node.appendChild(child_29513);


var G__29515 = seq__29082_29509;
var G__29516 = chunk__29084_29510;
var G__29517 = count__29085_29511;
var G__29518 = (i__29086_29512 + (1));
seq__29082_29509 = G__29515;
chunk__29084_29510 = G__29516;
count__29085_29511 = G__29517;
i__29086_29512 = G__29518;
continue;
} else {
var G__29520 = seq__29082_29509;
var G__29521 = chunk__29084_29510;
var G__29522 = count__29085_29511;
var G__29523 = (i__29086_29512 + (1));
seq__29082_29509 = G__29520;
chunk__29084_29510 = G__29521;
count__29085_29511 = G__29522;
i__29086_29512 = G__29523;
continue;
}
} else {
var temp__5823__auto___29525 = cljs.core.seq(seq__29082_29509);
if(temp__5823__auto___29525){
var seq__29082_29527__$1 = temp__5823__auto___29525;
if(cljs.core.chunked_seq_QMARK_(seq__29082_29527__$1)){
var c__5568__auto___29528 = cljs.core.chunk_first(seq__29082_29527__$1);
var G__29529 = cljs.core.chunk_rest(seq__29082_29527__$1);
var G__29530 = c__5568__auto___29528;
var G__29531 = cljs.core.count(c__5568__auto___29528);
var G__29532 = (0);
seq__29082_29509 = G__29529;
chunk__29084_29510 = G__29530;
count__29085_29511 = G__29531;
i__29086_29512 = G__29532;
continue;
} else {
var child_29533 = cljs.core.first(seq__29082_29527__$1);
if(cljs.core.truth_(child_29533)){
node.appendChild(child_29533);


var G__29534 = cljs.core.next(seq__29082_29527__$1);
var G__29535 = null;
var G__29536 = (0);
var G__29537 = (0);
seq__29082_29509 = G__29534;
chunk__29084_29510 = G__29535;
count__29085_29511 = G__29536;
i__29086_29512 = G__29537;
continue;
} else {
var G__29538 = cljs.core.next(seq__29082_29527__$1);
var G__29539 = null;
var G__29540 = (0);
var G__29541 = (0);
seq__29082_29509 = G__29538;
chunk__29084_29510 = G__29539;
count__29085_29511 = G__29540;
i__29086_29512 = G__29541;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29508);
}
}


var G__29542 = seq__29031_29502;
var G__29543 = chunk__29033_29503;
var G__29544 = count__29034_29504;
var G__29545 = (i__29035_29505 + (1));
seq__29031_29502 = G__29542;
chunk__29033_29503 = G__29543;
count__29034_29504 = G__29544;
i__29035_29505 = G__29545;
continue;
} else {
var G__29549 = seq__29031_29502;
var G__29550 = chunk__29033_29503;
var G__29551 = count__29034_29504;
var G__29552 = (i__29035_29505 + (1));
seq__29031_29502 = G__29549;
chunk__29033_29503 = G__29550;
count__29034_29504 = G__29551;
i__29035_29505 = G__29552;
continue;
}
} else {
var temp__5823__auto___29553 = cljs.core.seq(seq__29031_29502);
if(temp__5823__auto___29553){
var seq__29031_29554__$1 = temp__5823__auto___29553;
if(cljs.core.chunked_seq_QMARK_(seq__29031_29554__$1)){
var c__5568__auto___29555 = cljs.core.chunk_first(seq__29031_29554__$1);
var G__29556 = cljs.core.chunk_rest(seq__29031_29554__$1);
var G__29557 = c__5568__auto___29555;
var G__29558 = cljs.core.count(c__5568__auto___29555);
var G__29559 = (0);
seq__29031_29502 = G__29556;
chunk__29033_29503 = G__29557;
count__29034_29504 = G__29558;
i__29035_29505 = G__29559;
continue;
} else {
var child_struct_29560 = cljs.core.first(seq__29031_29554__$1);
if((!((child_struct_29560 == null)))){
if(typeof child_struct_29560 === 'string'){
var text_29561 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29561),child_struct_29560].join(''));
} else {
var children_29562 = shadow.dom.svg_node(child_struct_29560);
if(cljs.core.seq_QMARK_(children_29562)){
var seq__29102_29563 = cljs.core.seq(children_29562);
var chunk__29105_29564 = null;
var count__29106_29565 = (0);
var i__29107_29566 = (0);
while(true){
if((i__29107_29566 < count__29106_29565)){
var child_29567 = chunk__29105_29564.cljs$core$IIndexed$_nth$arity$2(null, i__29107_29566);
if(cljs.core.truth_(child_29567)){
node.appendChild(child_29567);


var G__29569 = seq__29102_29563;
var G__29570 = chunk__29105_29564;
var G__29571 = count__29106_29565;
var G__29572 = (i__29107_29566 + (1));
seq__29102_29563 = G__29569;
chunk__29105_29564 = G__29570;
count__29106_29565 = G__29571;
i__29107_29566 = G__29572;
continue;
} else {
var G__29573 = seq__29102_29563;
var G__29574 = chunk__29105_29564;
var G__29575 = count__29106_29565;
var G__29576 = (i__29107_29566 + (1));
seq__29102_29563 = G__29573;
chunk__29105_29564 = G__29574;
count__29106_29565 = G__29575;
i__29107_29566 = G__29576;
continue;
}
} else {
var temp__5823__auto___29577__$1 = cljs.core.seq(seq__29102_29563);
if(temp__5823__auto___29577__$1){
var seq__29102_29579__$1 = temp__5823__auto___29577__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29102_29579__$1)){
var c__5568__auto___29580 = cljs.core.chunk_first(seq__29102_29579__$1);
var G__29581 = cljs.core.chunk_rest(seq__29102_29579__$1);
var G__29582 = c__5568__auto___29580;
var G__29583 = cljs.core.count(c__5568__auto___29580);
var G__29584 = (0);
seq__29102_29563 = G__29581;
chunk__29105_29564 = G__29582;
count__29106_29565 = G__29583;
i__29107_29566 = G__29584;
continue;
} else {
var child_29585 = cljs.core.first(seq__29102_29579__$1);
if(cljs.core.truth_(child_29585)){
node.appendChild(child_29585);


var G__29586 = cljs.core.next(seq__29102_29579__$1);
var G__29587 = null;
var G__29588 = (0);
var G__29589 = (0);
seq__29102_29563 = G__29586;
chunk__29105_29564 = G__29587;
count__29106_29565 = G__29588;
i__29107_29566 = G__29589;
continue;
} else {
var G__29590 = cljs.core.next(seq__29102_29579__$1);
var G__29591 = null;
var G__29592 = (0);
var G__29593 = (0);
seq__29102_29563 = G__29590;
chunk__29105_29564 = G__29591;
count__29106_29565 = G__29592;
i__29107_29566 = G__29593;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29562);
}
}


var G__29594 = cljs.core.next(seq__29031_29554__$1);
var G__29595 = null;
var G__29596 = (0);
var G__29597 = (0);
seq__29031_29502 = G__29594;
chunk__29033_29503 = G__29595;
count__29034_29504 = G__29596;
i__29035_29505 = G__29597;
continue;
} else {
var G__29598 = cljs.core.next(seq__29031_29554__$1);
var G__29599 = null;
var G__29600 = (0);
var G__29601 = (0);
seq__29031_29502 = G__29598;
chunk__29033_29503 = G__29599;
count__29034_29504 = G__29600;
i__29035_29505 = G__29601;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29605 = arguments.length;
var i__5770__auto___29606 = (0);
while(true){
if((i__5770__auto___29606 < len__5769__auto___29605)){
args__5775__auto__.push((arguments[i__5770__auto___29606]));

var G__29607 = (i__5770__auto___29606 + (1));
i__5770__auto___29606 = G__29607;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq29131){
var G__29132 = cljs.core.first(seq29131);
var seq29131__$1 = cljs.core.next(seq29131);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29132,seq29131__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
