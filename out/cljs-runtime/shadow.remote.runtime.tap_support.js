goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36564,p__36565){
var map__36570 = p__36564;
var map__36570__$1 = cljs.core.__destructure_map(map__36570);
var svc = map__36570__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36570__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36570__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36570__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36571 = p__36565;
var map__36571__$1 = cljs.core.__destructure_map(map__36571);
var msg = map__36571__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36571__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36571__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36571__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36571__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36578,p__36579){
var map__36580 = p__36578;
var map__36580__$1 = cljs.core.__destructure_map(map__36580);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36580__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36581 = p__36579;
var map__36581__$1 = cljs.core.__destructure_map(map__36581);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36581__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36585,p__36586){
var map__36587 = p__36585;
var map__36587__$1 = cljs.core.__destructure_map(map__36587);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36587__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36587__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36588 = p__36586;
var map__36588__$1 = cljs.core.__destructure_map(map__36588);
var msg = map__36588__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36588__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36597,tid){
var map__36598 = p__36597;
var map__36598__$1 = cljs.core.__destructure_map(map__36598);
var svc = map__36598__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36598__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36606 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36607 = null;
var count__36608 = (0);
var i__36609 = (0);
while(true){
if((i__36609 < count__36608)){
var vec__36657 = chunk__36607.cljs$core$IIndexed$_nth$arity$2(null, i__36609);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36657,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36657,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36710 = seq__36606;
var G__36711 = chunk__36607;
var G__36712 = count__36608;
var G__36713 = (i__36609 + (1));
seq__36606 = G__36710;
chunk__36607 = G__36711;
count__36608 = G__36712;
i__36609 = G__36713;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__36606);
if(temp__5823__auto__){
var seq__36606__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36606__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36606__$1);
var G__36714 = cljs.core.chunk_rest(seq__36606__$1);
var G__36715 = c__5568__auto__;
var G__36716 = cljs.core.count(c__5568__auto__);
var G__36717 = (0);
seq__36606 = G__36714;
chunk__36607 = G__36715;
count__36608 = G__36716;
i__36609 = G__36717;
continue;
} else {
var vec__36661 = cljs.core.first(seq__36606__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36661,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36661,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36722 = cljs.core.next(seq__36606__$1);
var G__36723 = null;
var G__36724 = (0);
var G__36725 = (0);
seq__36606 = G__36722;
chunk__36607 = G__36723;
count__36608 = G__36724;
i__36609 = G__36725;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36599_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36599_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36600_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36600_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36601_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36601_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36602_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36602_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__36669){
var map__36670 = p__36669;
var map__36670__$1 = cljs.core.__destructure_map(map__36670);
var svc = map__36670__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36670__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36670__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
