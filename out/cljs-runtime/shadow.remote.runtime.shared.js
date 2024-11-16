goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__30791){
var map__30792 = p__30791;
var map__30792__$1 = cljs.core.__destructure_map(map__30792);
var runtime = map__30792__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30792__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_31017 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_31017)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__30801 = runtime;
var G__30802 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_31017);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__30801,G__30802) : shadow.remote.runtime.shared.process.call(null, G__30801,G__30802));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__30804,res){
var map__30805 = p__30804;
var map__30805__$1 = cljs.core.__destructure_map(map__30805);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30805__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30805__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__30806 = res;
var G__30806__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30806,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__30806);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30806__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__30806__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__30811 = arguments.length;
switch (G__30811) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__30813,msg,handlers,timeout_after_ms){
var map__30814 = p__30813;
var map__30814__$1 = cljs.core.__destructure_map(map__30814);
var runtime = map__30814__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30814__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31027 = arguments.length;
var i__5770__auto___31028 = (0);
while(true){
if((i__5770__auto___31028 < len__5769__auto___31027)){
args__5775__auto__.push((arguments[i__5770__auto___31028]));

var G__31029 = (i__5770__auto___31028 + (1));
i__5770__auto___31028 = G__31029;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__30827,ev,args){
var map__30828 = p__30827;
var map__30828__$1 = cljs.core.__destructure_map(map__30828);
var runtime = map__30828__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30828__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__30829 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__30832 = null;
var count__30833 = (0);
var i__30834 = (0);
while(true){
if((i__30834 < count__30833)){
var ext = chunk__30832.cljs$core$IIndexed$_nth$arity$2(null, i__30834);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31032 = seq__30829;
var G__31033 = chunk__30832;
var G__31034 = count__30833;
var G__31035 = (i__30834 + (1));
seq__30829 = G__31032;
chunk__30832 = G__31033;
count__30833 = G__31034;
i__30834 = G__31035;
continue;
} else {
var G__31037 = seq__30829;
var G__31038 = chunk__30832;
var G__31039 = count__30833;
var G__31040 = (i__30834 + (1));
seq__30829 = G__31037;
chunk__30832 = G__31038;
count__30833 = G__31039;
i__30834 = G__31040;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__30829);
if(temp__5823__auto__){
var seq__30829__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30829__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30829__$1);
var G__31042 = cljs.core.chunk_rest(seq__30829__$1);
var G__31043 = c__5568__auto__;
var G__31044 = cljs.core.count(c__5568__auto__);
var G__31045 = (0);
seq__30829 = G__31042;
chunk__30832 = G__31043;
count__30833 = G__31044;
i__30834 = G__31045;
continue;
} else {
var ext = cljs.core.first(seq__30829__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31046 = cljs.core.next(seq__30829__$1);
var G__31047 = null;
var G__31048 = (0);
var G__31049 = (0);
seq__30829 = G__31046;
chunk__30832 = G__31047;
count__30833 = G__31048;
i__30834 = G__31049;
continue;
} else {
var G__31050 = cljs.core.next(seq__30829__$1);
var G__31051 = null;
var G__31052 = (0);
var G__31053 = (0);
seq__30829 = G__31050;
chunk__30832 = G__31051;
count__30833 = G__31052;
i__30834 = G__31053;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq30815){
var G__30816 = cljs.core.first(seq30815);
var seq30815__$1 = cljs.core.next(seq30815);
var G__30817 = cljs.core.first(seq30815__$1);
var seq30815__$2 = cljs.core.next(seq30815__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30816,G__30817,seq30815__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__30851,p__30852){
var map__30853 = p__30851;
var map__30853__$1 = cljs.core.__destructure_map(map__30853);
var runtime = map__30853__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30853__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__30855 = p__30852;
var map__30855__$1 = cljs.core.__destructure_map(map__30855);
var msg = map__30855__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30855__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__30857 = cljs.core.deref(state_ref);
var map__30857__$1 = cljs.core.__destructure_map(map__30857);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30857__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30857__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__30864,msg){
var map__30865 = p__30864;
var map__30865__$1 = cljs.core.__destructure_map(map__30865);
var runtime = map__30865__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30865__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__30869,key,p__30870){
var map__30871 = p__30869;
var map__30871__$1 = cljs.core.__destructure_map(map__30871);
var state = map__30871__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30871__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__30872 = p__30870;
var map__30872__$1 = cljs.core.__destructure_map(map__30872);
var spec = map__30872__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30872__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30872__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__30880,key,spec){
var map__30881 = p__30880;
var map__30881__$1 = cljs.core.__destructure_map(map__30881);
var runtime = map__30881__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30881__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___31057 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___31057 == null)){
} else {
var on_welcome_31058 = temp__5827__auto___31057;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_31058.cljs$core$IFn$_invoke$arity$0 ? on_welcome_31058.cljs$core$IFn$_invoke$arity$0() : on_welcome_31058.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__30882_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__30882_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__30883_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__30883_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__30884_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__30884_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__30885_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__30885_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__30886_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__30886_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__30892,key){
var map__30893 = p__30892;
var map__30893__$1 = cljs.core.__destructure_map(map__30893);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30893__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__30898,msg){
var map__30900 = p__30898;
var map__30900__$1 = cljs.core.__destructure_map(map__30900);
var runtime = map__30900__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30900__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__30910,p__30911){
var map__30912 = p__30910;
var map__30912__$1 = cljs.core.__destructure_map(map__30912);
var runtime = map__30912__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30912__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__30913 = p__30911;
var map__30913__$1 = cljs.core.__destructure_map(map__30913);
var msg = map__30913__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30913__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30913__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__30951 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__30953 = null;
var count__30954 = (0);
var i__30955 = (0);
while(true){
if((i__30955 < count__30954)){
var map__30984 = chunk__30953.cljs$core$IIndexed$_nth$arity$2(null, i__30955);
var map__30984__$1 = cljs.core.__destructure_map(map__30984);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30984__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__31093 = seq__30951;
var G__31094 = chunk__30953;
var G__31095 = count__30954;
var G__31096 = (i__30955 + (1));
seq__30951 = G__31093;
chunk__30953 = G__31094;
count__30954 = G__31095;
i__30955 = G__31096;
continue;
} else {
var G__31097 = seq__30951;
var G__31098 = chunk__30953;
var G__31099 = count__30954;
var G__31100 = (i__30955 + (1));
seq__30951 = G__31097;
chunk__30953 = G__31098;
count__30954 = G__31099;
i__30955 = G__31100;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__30951);
if(temp__5823__auto__){
var seq__30951__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30951__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30951__$1);
var G__31101 = cljs.core.chunk_rest(seq__30951__$1);
var G__31102 = c__5568__auto__;
var G__31103 = cljs.core.count(c__5568__auto__);
var G__31104 = (0);
seq__30951 = G__31101;
chunk__30953 = G__31102;
count__30954 = G__31103;
i__30955 = G__31104;
continue;
} else {
var map__30992 = cljs.core.first(seq__30951__$1);
var map__30992__$1 = cljs.core.__destructure_map(map__30992);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30992__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__31105 = cljs.core.next(seq__30951__$1);
var G__31106 = null;
var G__31107 = (0);
var G__31108 = (0);
seq__30951 = G__31105;
chunk__30953 = G__31106;
count__30954 = G__31107;
i__30955 = G__31108;
continue;
} else {
var G__31109 = cljs.core.next(seq__30951__$1);
var G__31110 = null;
var G__31111 = (0);
var G__31112 = (0);
seq__30951 = G__31109;
chunk__30953 = G__31110;
count__30954 = G__31111;
i__30955 = G__31112;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
