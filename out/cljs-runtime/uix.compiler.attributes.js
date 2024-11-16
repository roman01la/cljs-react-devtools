goog.provide('uix.compiler.attributes');
goog.scope(function(){
  uix.compiler.attributes.goog$module$goog$object = goog.module.get('goog.object');
});
uix.compiler.attributes.js_val_QMARK_ = (function uix$compiler$attributes$js_val_QMARK_(x){
return (!(("object" === goog.typeOf(x))));
});
uix.compiler.attributes.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet", "class-id": "classID", "item-id": "itemID"});
uix.compiler.attributes.custom_prop_name_cache = ({});
uix.compiler.attributes.cc_regexp = (new RegExp("-(\\w)","g"));
uix.compiler.attributes.cc_fn = (function uix$compiler$attributes$cc_fn(s){
return clojure.string.upper_case((s[(1)]));
});
uix.compiler.attributes.dash_to_camel = (function uix$compiler$attributes$dash_to_camel(name_str){
if(((clojure.string.starts_with_QMARK_(name_str,"aria-")) || (clojure.string.starts_with_QMARK_(name_str,"data-")))){
return name_str;
} else {
return name_str.replace(uix.compiler.attributes.cc_regexp,uix.compiler.attributes.cc_fn);
}
});
uix.compiler.attributes.keyword__GT_string = (function uix$compiler$attributes$keyword__GT_string(x){
if((x instanceof cljs.core.Keyword)){
return x.cljs$core$INamed$_name$arity$1(null, );
} else {
return x;
}
});
uix.compiler.attributes.cached_prop_name = (function uix$compiler$attributes$cached_prop_name(k){
if((k instanceof cljs.core.Keyword)){
var name_str = k.cljs$core$INamed$_name$arity$1(null, );
var temp__5825__auto__ = (uix.compiler.attributes.prop_name_cache[name_str]);
if((temp__5825__auto__ == null)){
var v = uix.compiler.attributes.dash_to_camel(name_str);
(uix.compiler.attributes.prop_name_cache[name_str] = v);

return v;
} else {
var k_SINGLEQUOTE_ = temp__5825__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
uix.compiler.attributes.cached_custom_prop_name = (function uix$compiler$attributes$cached_custom_prop_name(k){
if((k instanceof cljs.core.Keyword)){
var name_str = k.cljs$core$INamed$_name$arity$1(null, );
var temp__5825__auto__ = (uix.compiler.attributes.custom_prop_name_cache[name_str]);
if((temp__5825__auto__ == null)){
var v = uix.compiler.attributes.dash_to_camel(name_str);
(uix.compiler.attributes.custom_prop_name_cache[name_str] = v);

return v;
} else {
var k_SINGLEQUOTE_ = temp__5825__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
uix.compiler.attributes.convert_interop_prop_value = (function uix$compiler$attributes$convert_interop_prop_value(k,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"style","style",-496642736))){
if(cljs.core.vector_QMARK_(v)){
return v.cljs$core$IReduce$_reduce$arity$3(null, (function (a,v__$1){
a.push((uix.compiler.attributes.convert_prop_value_shallow.cljs$core$IFn$_invoke$arity$1 ? uix.compiler.attributes.convert_prop_value_shallow.cljs$core$IFn$_invoke$arity$1(v__$1) : uix.compiler.attributes.convert_prop_value_shallow.call(null, v__$1)));

return a;
}),[]);
} else {
return (uix.compiler.attributes.convert_prop_value_shallow.cljs$core$IFn$_invoke$arity$1 ? uix.compiler.attributes.convert_prop_value_shallow.cljs$core$IFn$_invoke$arity$1(v) : uix.compiler.attributes.convert_prop_value_shallow.call(null, v));
}
} else {
if((v instanceof cljs.core.Keyword)){
return v.cljs$core$INamed$_name$arity$1(null, );
} else {
return v;

}
}
});
uix.compiler.attributes.kv_conv = (function uix$compiler$attributes$kv_conv(o,k,v){
uix.compiler.attributes.goog$module$goog$object.set(o,uix.compiler.attributes.cached_prop_name(k),(uix.compiler.attributes.convert_prop_value.cljs$core$IFn$_invoke$arity$1 ? uix.compiler.attributes.convert_prop_value.cljs$core$IFn$_invoke$arity$1(v) : uix.compiler.attributes.convert_prop_value.call(null, v)));

return o;
});
uix.compiler.attributes.kv_conv_shallow = (function uix$compiler$attributes$kv_conv_shallow(o,k,v){
uix.compiler.attributes.goog$module$goog$object.set(o,uix.compiler.attributes.cached_prop_name(k),uix.compiler.attributes.convert_interop_prop_value(k,v));

return o;
});
uix.compiler.attributes.custom_kv_conv = (function uix$compiler$attributes$custom_kv_conv(o,k,v){
uix.compiler.attributes.goog$module$goog$object.set(o,uix.compiler.attributes.cached_custom_prop_name(k),(uix.compiler.attributes.convert_prop_value.cljs$core$IFn$_invoke$arity$1 ? uix.compiler.attributes.convert_prop_value.cljs$core$IFn$_invoke$arity$1(v) : uix.compiler.attributes.convert_prop_value.call(null, v)));

return o;
});
uix.compiler.attributes.convert_prop_value = (function uix$compiler$attributes$convert_prop_value(x){
if(uix.compiler.attributes.js_val_QMARK_(x)){
return x;
} else {
if((x instanceof cljs.core.Keyword)){
return x.cljs$core$INamed$_name$arity$1(null, );
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(uix.compiler.attributes.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__28405__delegate = function (rest__28218_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,rest__28218_SHARP_);
};
var G__28405 = function (var_args){
var rest__28218_SHARP_ = null;
if (arguments.length > 0) {
var G__28406__i = 0, G__28406__a = new Array(arguments.length -  0);
while (G__28406__i < G__28406__a.length) {G__28406__a[G__28406__i] = arguments[G__28406__i + 0]; ++G__28406__i;}
  rest__28218_SHARP_ = new cljs.core.IndexedSeq(G__28406__a,0,null);
} 
return G__28405__delegate.call(this,rest__28218_SHARP_);};
G__28405.cljs$lang$maxFixedArity = 0;
G__28405.cljs$lang$applyTo = (function (arglist__28407){
var rest__28218_SHARP_ = cljs.core.seq(arglist__28407);
return G__28405__delegate(rest__28218_SHARP_);
});
G__28405.cljs$core$IFn$_invoke$arity$variadic = G__28405__delegate;
return G__28405;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
uix.compiler.attributes.convert_custom_prop_value = (function uix$compiler$attributes$convert_custom_prop_value(x){
if(uix.compiler.attributes.js_val_QMARK_(x)){
return x;
} else {
if((x instanceof cljs.core.Keyword)){
return x.cljs$core$INamed$_name$arity$1(null, );
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(uix.compiler.attributes.custom_kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__28413__delegate = function (rest__28225_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,rest__28225_SHARP_);
};
var G__28413 = function (var_args){
var rest__28225_SHARP_ = null;
if (arguments.length > 0) {
var G__28414__i = 0, G__28414__a = new Array(arguments.length -  0);
while (G__28414__i < G__28414__a.length) {G__28414__a[G__28414__i] = arguments[G__28414__i + 0]; ++G__28414__i;}
  rest__28225_SHARP_ = new cljs.core.IndexedSeq(G__28414__a,0,null);
} 
return G__28413__delegate.call(this,rest__28225_SHARP_);};
G__28413.cljs$lang$maxFixedArity = 0;
G__28413.cljs$lang$applyTo = (function (arglist__28415){
var rest__28225_SHARP_ = cljs.core.seq(arglist__28415);
return G__28413__delegate(rest__28225_SHARP_);
});
G__28413.cljs$core$IFn$_invoke$arity$variadic = G__28413__delegate;
return G__28413;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
uix.compiler.attributes.convert_prop_value_shallow = (function uix$compiler$attributes$convert_prop_value_shallow(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(uix.compiler.attributes.kv_conv_shallow,({}),x);
} else {
return x;
}
});
uix.compiler.attributes.class_names_coll = (function uix$compiler$attributes$class_names_coll(classes){
var classes__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,c){
if(c){
a.push((((c instanceof cljs.core.Keyword))?c.cljs$core$INamed$_name$arity$1(null, ):(uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$1 ? uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$1(c) : uix.compiler.attributes.class_names.call(null, c))));
} else {
}

return a;
}),[],classes);
if((classes__$1.length > (0))){
return classes__$1.join(" ");
} else {
return null;
}
});
/**
 * Merges a collection of class names into a string
 */
uix.compiler.attributes.class_names = (function uix$compiler$attributes$class_names(var_args){
var G__28279 = arguments.length;
switch (G__28279) {
case 1:
return uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___28442 = arguments.length;
var i__5770__auto___28443 = (0);
while(true){
if((i__5770__auto___28443 < len__5769__auto___28442)){
args_arr__5794__auto__.push((arguments[i__5770__auto___28443]));

var G__28451 = (i__5770__auto___28443 + (1));
i__5770__auto___28443 = G__28451;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$1 = (function (a){
if(((cljs.core.array_QMARK_(a)) || (cljs.core.coll_QMARK_(a)))){
return uix.compiler.attributes.class_names_coll(a);
} else {
if((a instanceof cljs.core.Keyword)){
return a.cljs$core$INamed$_name$arity$1(null, );
} else {
return a;

}
}
}));

(uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(a){
if(b){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$1(a))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$1(b))].join('');
} else {
return uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$1(a);
}
} else {
return uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$1(b);
}
}));

(uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,rst){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(uix.compiler.attributes.class_names,uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(a,b),rst);
}));

/** @this {Function} */
(uix.compiler.attributes.class_names.cljs$lang$applyTo = (function (seq28269){
var G__28277 = cljs.core.first(seq28269);
var seq28269__$1 = cljs.core.next(seq28269);
var G__28278 = cljs.core.first(seq28269__$1);
var seq28269__$2 = cljs.core.next(seq28269__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28277,G__28278,seq28269__$2);
}));

(uix.compiler.attributes.class_names.cljs$lang$maxFixedArity = (2));

/**
 * HyperScript tag pattern :div :div#id.class etc.
 */
uix.compiler.attributes.re_tag = /([^\.#]*)(?:#([^\.#]+))?(?:\.([^#]+))?/;
/**
 * Takes HyperScript tag (:div#id.class) and returns parsed tag, id and class fields,
 *   and boolean indicating if tag name is a custom element (a custom DOM element that has hyphen in the name)
 */
uix.compiler.attributes.parse_tag = (function uix$compiler$attributes$parse_tag(tag){
var tag_str = cljs.core.name(tag);
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not(cljs.core.re_matches(uix.compiler.attributes.re_tag,tag_str));
if(and__5043__auto__){
return cljs.core.re_find(/[#\.]/,tag_str);
} else {
return and__5043__auto__;
}
})())){
throw (new Error(["Invalid tag name (found: ",tag_str,"). Make sure that the name matches the format and ordering is correct `:tag#id.class`"].join('')));
} else {
}

var vec__28305 = cljs.core.next(cljs.core.re_matches(uix.compiler.attributes.re_tag,tag_str));
var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28305,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28305,(1),null);
var class_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28305,(2),null);
var tag__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",tag__$1))?"div":tag__$1);
var class_name__$1 = (((class_name == null))?null:clojure.string.replace(class_name,/\./," "));
return [tag__$2,id,class_name__$1,(!((cljs.core.re_find(/-/,tag__$2) == null)))];
});
/**
 * Takes attributes map and parsed tag, and returns attributes merged with class names and id
 */
uix.compiler.attributes.set_id_class = (function uix$compiler$attributes$set_id_class(props,id_class){
var props_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996));
var id = (id_class[(1)]);
var class$ = (id_class[(2)]);
var G__28317 = props;
var G__28317__$1 = (((((!((id == null)))) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"id","id",-1388402092)) == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28317,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__28317);
if(cljs.core.truth_((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return props_class;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28317__$1,new cljs.core.Keyword(null,"class","class",-2030961996),uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(class$,props_class));
} else {
return G__28317__$1;
}
});
/**
 * Converts `props` Clojure map into JS object suitable for
 *   passing as `props` object into `React.createElement`
 * 
 *   - `props` — Clojure map of props
 *   - `id-class` — a triplet of parsed tag, id and class names
 *   - `shallow?` — indicates whether `props` map should be converted shallowly or not
 */
uix.compiler.attributes.convert_props = (function uix$compiler$attributes$convert_props(props,id_class,shallow_QMARK_){
var props__$1 = uix.compiler.attributes.set_id_class(props,id_class);
if(cljs.core.truth_((id_class[(3)]))){
return uix.compiler.attributes.convert_custom_prop_value(props__$1);
} else {
if(shallow_QMARK_){
return uix.compiler.attributes.convert_prop_value_shallow(props__$1);
} else {
return uix.compiler.attributes.convert_prop_value(props__$1);

}
}
});
/**
 * Returns a tuple of attributes and a child element
 * 
 *   - [attrs] when `attrs` is actually a map of attributes
 *   - [nil attrs] when `attrs` is not a map, thus a child element
 */
uix.compiler.attributes.interpret_attrs = (function uix$compiler$attributes$interpret_attrs(maybe_attrs,id_class,shallow_QMARK_){
if(cljs.core.map_QMARK_(maybe_attrs)){
return [uix.compiler.attributes.convert_props(maybe_attrs,id_class,shallow_QMARK_)];
} else {
return [uix.compiler.attributes.convert_props(cljs.core.PersistentArrayMap.EMPTY,id_class,shallow_QMARK_),maybe_attrs];
}
});
/**
 * Returns a tuple of component props and a child element
 * 
 *   - [props] when `props` is actually a map of attributes
 *   - [nil props] when `props` is not a map, thus a child element
 */
uix.compiler.attributes.interpret_props = (function uix$compiler$attributes$interpret_props(props){
if(cljs.core.map_QMARK_(props)){
return [props];
} else {
return [null,props];
}
});

//# sourceMappingURL=uix.compiler.attributes.js.map
