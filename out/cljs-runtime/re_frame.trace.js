goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__40926){
var map__40927 = p__40926;
var map__40927__$1 = cljs.core.__destructure_map(map__40927);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40927__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40927__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40927__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40927__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__40930_40959 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__40931_40960 = null;
var count__40932_40961 = (0);
var i__40933_40962 = (0);
while(true){
if((i__40933_40962 < count__40932_40961)){
var vec__40945_40963 = chunk__40931_40960.cljs$core$IIndexed$_nth$arity$2(null, i__40933_40962);
var k_40964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40945_40963,(0),null);
var cb_40965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40945_40963,(1),null);
try{var G__40949_40966 = cljs.core.deref(re_frame.trace.traces);
(cb_40965.cljs$core$IFn$_invoke$arity$1 ? cb_40965.cljs$core$IFn$_invoke$arity$1(G__40949_40966) : cb_40965.call(null, G__40949_40966));
}catch (e40948){var e_40967 = e40948;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_40964,"while storing",cljs.core.deref(re_frame.trace.traces),e_40967], 0));
}

var G__40968 = seq__40930_40959;
var G__40969 = chunk__40931_40960;
var G__40970 = count__40932_40961;
var G__40971 = (i__40933_40962 + (1));
seq__40930_40959 = G__40968;
chunk__40931_40960 = G__40969;
count__40932_40961 = G__40970;
i__40933_40962 = G__40971;
continue;
} else {
var temp__5823__auto___40972 = cljs.core.seq(seq__40930_40959);
if(temp__5823__auto___40972){
var seq__40930_40973__$1 = temp__5823__auto___40972;
if(cljs.core.chunked_seq_QMARK_(seq__40930_40973__$1)){
var c__5568__auto___40974 = cljs.core.chunk_first(seq__40930_40973__$1);
var G__40975 = cljs.core.chunk_rest(seq__40930_40973__$1);
var G__40976 = c__5568__auto___40974;
var G__40977 = cljs.core.count(c__5568__auto___40974);
var G__40978 = (0);
seq__40930_40959 = G__40975;
chunk__40931_40960 = G__40976;
count__40932_40961 = G__40977;
i__40933_40962 = G__40978;
continue;
} else {
var vec__40951_40979 = cljs.core.first(seq__40930_40973__$1);
var k_40980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40951_40979,(0),null);
var cb_40981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40951_40979,(1),null);
try{var G__40955_40982 = cljs.core.deref(re_frame.trace.traces);
(cb_40981.cljs$core$IFn$_invoke$arity$1 ? cb_40981.cljs$core$IFn$_invoke$arity$1(G__40955_40982) : cb_40981.call(null, G__40955_40982));
}catch (e40954){var e_40983 = e40954;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_40980,"while storing",cljs.core.deref(re_frame.trace.traces),e_40983], 0));
}

var G__40984 = cljs.core.next(seq__40930_40973__$1);
var G__40985 = null;
var G__40986 = (0);
var G__40987 = (0);
seq__40930_40959 = G__40984;
chunk__40931_40960 = G__40985;
count__40932_40961 = G__40986;
i__40933_40962 = G__40987;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null, ));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
