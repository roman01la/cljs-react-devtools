goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null, re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__41272 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__41273 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__41273);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___41356 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___41356)){
var new_db_41357 = temp__5823__auto___41356;
var fexpr__41274_41358 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__41274_41358.cljs$core$IFn$_invoke$arity$1 ? fexpr__41274_41358.cljs$core$IFn$_invoke$arity$1(new_db_41357) : fexpr__41274_41358.call(null, new_db_41357));
} else {
}

var seq__41275 = cljs.core.seq(effects_without_db);
var chunk__41276 = null;
var count__41277 = (0);
var i__41278 = (0);
while(true){
if((i__41278 < count__41277)){
var vec__41301 = chunk__41276.cljs$core$IIndexed$_nth$arity$2(null, i__41278);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41301,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41301,(1),null);
var temp__5821__auto___41359 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___41359)){
var effect_fn_41360 = temp__5821__auto___41359;
(effect_fn_41360.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41360.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41360.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__41361 = seq__41275;
var G__41362 = chunk__41276;
var G__41363 = count__41277;
var G__41364 = (i__41278 + (1));
seq__41275 = G__41361;
chunk__41276 = G__41362;
count__41277 = G__41363;
i__41278 = G__41364;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__41275);
if(temp__5823__auto__){
var seq__41275__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41275__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41275__$1);
var G__41365 = cljs.core.chunk_rest(seq__41275__$1);
var G__41366 = c__5568__auto__;
var G__41367 = cljs.core.count(c__5568__auto__);
var G__41368 = (0);
seq__41275 = G__41365;
chunk__41276 = G__41366;
count__41277 = G__41367;
i__41278 = G__41368;
continue;
} else {
var vec__41304 = cljs.core.first(seq__41275__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41304,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41304,(1),null);
var temp__5821__auto___41369 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___41369)){
var effect_fn_41370 = temp__5821__auto___41369;
(effect_fn_41370.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41370.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41370.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__41371 = cljs.core.next(seq__41275__$1);
var G__41372 = null;
var G__41373 = (0);
var G__41374 = (0);
seq__41275 = G__41371;
chunk__41276 = G__41372;
count__41277 = G__41373;
i__41278 = G__41374;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__40904__auto___41375 = re_frame.interop.now();
var duration__40905__auto___41376 = (end__40904__auto___41375 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__40905__auto___41376,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__40904__auto___41375);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__41272);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___41377 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___41377)){
var new_db_41378 = temp__5823__auto___41377;
var fexpr__41307_41379 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__41307_41379.cljs$core$IFn$_invoke$arity$1 ? fexpr__41307_41379.cljs$core$IFn$_invoke$arity$1(new_db_41378) : fexpr__41307_41379.call(null, new_db_41378));
} else {
}

var seq__41308 = cljs.core.seq(effects_without_db);
var chunk__41309 = null;
var count__41310 = (0);
var i__41311 = (0);
while(true){
if((i__41311 < count__41310)){
var vec__41318 = chunk__41309.cljs$core$IIndexed$_nth$arity$2(null, i__41311);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41318,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41318,(1),null);
var temp__5821__auto___41380 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___41380)){
var effect_fn_41381 = temp__5821__auto___41380;
(effect_fn_41381.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41381.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41381.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__41382 = seq__41308;
var G__41383 = chunk__41309;
var G__41384 = count__41310;
var G__41385 = (i__41311 + (1));
seq__41308 = G__41382;
chunk__41309 = G__41383;
count__41310 = G__41384;
i__41311 = G__41385;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__41308);
if(temp__5823__auto__){
var seq__41308__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41308__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41308__$1);
var G__41386 = cljs.core.chunk_rest(seq__41308__$1);
var G__41387 = c__5568__auto__;
var G__41388 = cljs.core.count(c__5568__auto__);
var G__41389 = (0);
seq__41308 = G__41386;
chunk__41309 = G__41387;
count__41310 = G__41388;
i__41311 = G__41389;
continue;
} else {
var vec__41321 = cljs.core.first(seq__41308__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41321,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41321,(1),null);
var temp__5821__auto___41390 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___41390)){
var effect_fn_41391 = temp__5821__auto___41390;
(effect_fn_41391.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41391.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41391.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__41392 = cljs.core.next(seq__41308__$1);
var G__41393 = null;
var G__41394 = (0);
var G__41395 = (0);
seq__41308 = G__41392;
chunk__41309 = G__41393;
count__41310 = G__41394;
i__41311 = G__41395;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__41324){
var map__41325 = p__41324;
var map__41325__$1 = cljs.core.__destructure_map(map__41325);
var effect = map__41325__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41325__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41325__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__41326 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__41327 = null;
var count__41328 = (0);
var i__41329 = (0);
while(true){
if((i__41329 < count__41328)){
var effect = chunk__41327.cljs$core$IIndexed$_nth$arity$2(null, i__41329);
re_frame.fx.dispatch_later(effect);


var G__41396 = seq__41326;
var G__41397 = chunk__41327;
var G__41398 = count__41328;
var G__41399 = (i__41329 + (1));
seq__41326 = G__41396;
chunk__41327 = G__41397;
count__41328 = G__41398;
i__41329 = G__41399;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__41326);
if(temp__5823__auto__){
var seq__41326__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41326__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41326__$1);
var G__41400 = cljs.core.chunk_rest(seq__41326__$1);
var G__41401 = c__5568__auto__;
var G__41402 = cljs.core.count(c__5568__auto__);
var G__41403 = (0);
seq__41326 = G__41400;
chunk__41327 = G__41401;
count__41328 = G__41402;
i__41329 = G__41403;
continue;
} else {
var effect = cljs.core.first(seq__41326__$1);
re_frame.fx.dispatch_later(effect);


var G__41404 = cljs.core.next(seq__41326__$1);
var G__41405 = null;
var G__41406 = (0);
var G__41407 = (0);
seq__41326 = G__41404;
chunk__41327 = G__41405;
count__41328 = G__41406;
i__41329 = G__41407;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__41330 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__41331 = null;
var count__41332 = (0);
var i__41333 = (0);
while(true){
if((i__41333 < count__41332)){
var vec__41340 = chunk__41331.cljs$core$IIndexed$_nth$arity$2(null, i__41333);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41340,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41340,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___41408 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___41408)){
var effect_fn_41409 = temp__5821__auto___41408;
(effect_fn_41409.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41409.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41409.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__41410 = seq__41330;
var G__41411 = chunk__41331;
var G__41412 = count__41332;
var G__41413 = (i__41333 + (1));
seq__41330 = G__41410;
chunk__41331 = G__41411;
count__41332 = G__41412;
i__41333 = G__41413;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__41330);
if(temp__5823__auto__){
var seq__41330__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41330__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41330__$1);
var G__41414 = cljs.core.chunk_rest(seq__41330__$1);
var G__41415 = c__5568__auto__;
var G__41416 = cljs.core.count(c__5568__auto__);
var G__41417 = (0);
seq__41330 = G__41414;
chunk__41331 = G__41415;
count__41332 = G__41416;
i__41333 = G__41417;
continue;
} else {
var vec__41343 = cljs.core.first(seq__41330__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41343,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41343,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___41418 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___41418)){
var effect_fn_41419 = temp__5821__auto___41418;
(effect_fn_41419.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41419.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41419.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__41420 = cljs.core.next(seq__41330__$1);
var G__41421 = null;
var G__41422 = (0);
var G__41423 = (0);
seq__41330 = G__41420;
chunk__41331 = G__41421;
count__41332 = G__41422;
i__41333 = G__41423;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__41346 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__41347 = null;
var count__41348 = (0);
var i__41349 = (0);
while(true){
if((i__41349 < count__41348)){
var event = chunk__41347.cljs$core$IIndexed$_nth$arity$2(null, i__41349);
re_frame.router.dispatch(event);


var G__41424 = seq__41346;
var G__41425 = chunk__41347;
var G__41426 = count__41348;
var G__41427 = (i__41349 + (1));
seq__41346 = G__41424;
chunk__41347 = G__41425;
count__41348 = G__41426;
i__41349 = G__41427;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__41346);
if(temp__5823__auto__){
var seq__41346__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41346__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41346__$1);
var G__41428 = cljs.core.chunk_rest(seq__41346__$1);
var G__41429 = c__5568__auto__;
var G__41430 = cljs.core.count(c__5568__auto__);
var G__41431 = (0);
seq__41346 = G__41428;
chunk__41347 = G__41429;
count__41348 = G__41430;
i__41349 = G__41431;
continue;
} else {
var event = cljs.core.first(seq__41346__$1);
re_frame.router.dispatch(event);


var G__41432 = cljs.core.next(seq__41346__$1);
var G__41433 = null;
var G__41434 = (0);
var G__41435 = (0);
seq__41346 = G__41432;
chunk__41347 = G__41433;
count__41348 = G__41434;
i__41349 = G__41435;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__41350 = cljs.core.seq(value);
var chunk__41351 = null;
var count__41352 = (0);
var i__41353 = (0);
while(true){
if((i__41353 < count__41352)){
var event = chunk__41351.cljs$core$IIndexed$_nth$arity$2(null, i__41353);
clear_event(event);


var G__41436 = seq__41350;
var G__41437 = chunk__41351;
var G__41438 = count__41352;
var G__41439 = (i__41353 + (1));
seq__41350 = G__41436;
chunk__41351 = G__41437;
count__41352 = G__41438;
i__41353 = G__41439;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__41350);
if(temp__5823__auto__){
var seq__41350__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41350__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41350__$1);
var G__41440 = cljs.core.chunk_rest(seq__41350__$1);
var G__41441 = c__5568__auto__;
var G__41442 = cljs.core.count(c__5568__auto__);
var G__41443 = (0);
seq__41350 = G__41440;
chunk__41351 = G__41441;
count__41352 = G__41442;
i__41353 = G__41443;
continue;
} else {
var event = cljs.core.first(seq__41350__$1);
clear_event(event);


var G__41444 = cljs.core.next(seq__41350__$1);
var G__41445 = null;
var G__41446 = (0);
var G__41447 = (0);
seq__41350 = G__41444;
chunk__41351 = G__41445;
count__41352 = G__41446;
i__41353 = G__41447;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__41354 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__41355 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__41355);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__40904__auto___41448 = re_frame.interop.now();
var duration__40905__auto___41449 = (end__40904__auto___41448 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__40905__auto___41449,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__40904__auto___41448);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__41354);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
