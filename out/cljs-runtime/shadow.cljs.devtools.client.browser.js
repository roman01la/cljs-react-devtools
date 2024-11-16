goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38218 = arguments.length;
var i__5770__auto___38219 = (0);
while(true){
if((i__5770__auto___38219 < len__5769__auto___38218)){
args__5775__auto__.push((arguments[i__5770__auto___38219]));

var G__38220 = (i__5770__auto___38219 + (1));
i__5770__auto___38219 = G__38220;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37538){
var G__37539 = cljs.core.first(seq37538);
var seq37538__$1 = cljs.core.next(seq37538);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37539,seq37538__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37543 = cljs.core.seq(sources);
var chunk__37544 = null;
var count__37545 = (0);
var i__37546 = (0);
while(true){
if((i__37546 < count__37545)){
var map__37553 = chunk__37544.cljs$core$IIndexed$_nth$arity$2(null, i__37546);
var map__37553__$1 = cljs.core.__destructure_map(map__37553);
var src = map__37553__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37553__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37553__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37553__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37553__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37554){var e_38224 = e37554;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38224);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38224.message)].join('')));
}

var G__38225 = seq__37543;
var G__38226 = chunk__37544;
var G__38227 = count__37545;
var G__38228 = (i__37546 + (1));
seq__37543 = G__38225;
chunk__37544 = G__38226;
count__37545 = G__38227;
i__37546 = G__38228;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37543);
if(temp__5823__auto__){
var seq__37543__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37543__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37543__$1);
var G__38230 = cljs.core.chunk_rest(seq__37543__$1);
var G__38231 = c__5568__auto__;
var G__38232 = cljs.core.count(c__5568__auto__);
var G__38233 = (0);
seq__37543 = G__38230;
chunk__37544 = G__38231;
count__37545 = G__38232;
i__37546 = G__38233;
continue;
} else {
var map__37555 = cljs.core.first(seq__37543__$1);
var map__37555__$1 = cljs.core.__destructure_map(map__37555);
var src = map__37555__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37555__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37555__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37555__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37555__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37556){var e_38236 = e37556;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38236);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38236.message)].join('')));
}

var G__38237 = cljs.core.next(seq__37543__$1);
var G__38238 = null;
var G__38239 = (0);
var G__38240 = (0);
seq__37543 = G__38237;
chunk__37544 = G__38238;
count__37545 = G__38239;
i__37546 = G__38240;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37560 = cljs.core.seq(js_requires);
var chunk__37561 = null;
var count__37562 = (0);
var i__37563 = (0);
while(true){
if((i__37563 < count__37562)){
var js_ns = chunk__37561.cljs$core$IIndexed$_nth$arity$2(null, i__37563);
var require_str_38244 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38244);


var G__38245 = seq__37560;
var G__38246 = chunk__37561;
var G__38247 = count__37562;
var G__38248 = (i__37563 + (1));
seq__37560 = G__38245;
chunk__37561 = G__38246;
count__37562 = G__38247;
i__37563 = G__38248;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37560);
if(temp__5823__auto__){
var seq__37560__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37560__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37560__$1);
var G__38249 = cljs.core.chunk_rest(seq__37560__$1);
var G__38250 = c__5568__auto__;
var G__38251 = cljs.core.count(c__5568__auto__);
var G__38252 = (0);
seq__37560 = G__38249;
chunk__37561 = G__38250;
count__37562 = G__38251;
i__37563 = G__38252;
continue;
} else {
var js_ns = cljs.core.first(seq__37560__$1);
var require_str_38253 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38253);


var G__38254 = cljs.core.next(seq__37560__$1);
var G__38255 = null;
var G__38256 = (0);
var G__38257 = (0);
seq__37560 = G__38254;
chunk__37561 = G__38255;
count__37562 = G__38256;
i__37563 = G__38257;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37568){
var map__37569 = p__37568;
var map__37569__$1 = cljs.core.__destructure_map(map__37569);
var msg = map__37569__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37569__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37569__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37570(s__37571){
return (new cljs.core.LazySeq(null,(function (){
var s__37571__$1 = s__37571;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__37571__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__37576 = cljs.core.first(xs__6383__auto__);
var map__37576__$1 = cljs.core.__destructure_map(map__37576);
var src = map__37576__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37576__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37576__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__37571__$1,map__37576,map__37576__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__37569,map__37569__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37570_$_iter__37572(s__37573){
return (new cljs.core.LazySeq(null,((function (s__37571__$1,map__37576,map__37576__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__37569,map__37569__$1,msg,info,reload_info){
return (function (){
var s__37573__$1 = s__37573;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__37573__$1);
if(temp__5823__auto____$1){
var s__37573__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37573__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__37573__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__37575 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__37574 = (0);
while(true){
if((i__37574 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__37574);
cljs.core.chunk_append(b__37575,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38264 = (i__37574 + (1));
i__37574 = G__38264;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37575),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37570_$_iter__37572(cljs.core.chunk_rest(s__37573__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37575),null);
}
} else {
var warning = cljs.core.first(s__37573__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37570_$_iter__37572(cljs.core.rest(s__37573__$2)));
}
} else {
return null;
}
break;
}
});})(s__37571__$1,map__37576,map__37576__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__37569,map__37569__$1,msg,info,reload_info))
,null,null));
});})(s__37571__$1,map__37576,map__37576__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__37569,map__37569__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37570(cljs.core.rest(s__37571__$1)));
} else {
var G__38267 = cljs.core.rest(s__37571__$1);
s__37571__$1 = G__38267;
continue;
}
} else {
var G__38268 = cljs.core.rest(s__37571__$1);
s__37571__$1 = G__38268;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37577_38269 = cljs.core.seq(warnings);
var chunk__37578_38270 = null;
var count__37579_38271 = (0);
var i__37580_38272 = (0);
while(true){
if((i__37580_38272 < count__37579_38271)){
var map__37583_38275 = chunk__37578_38270.cljs$core$IIndexed$_nth$arity$2(null, i__37580_38272);
var map__37583_38276__$1 = cljs.core.__destructure_map(map__37583_38275);
var w_38277 = map__37583_38276__$1;
var msg_38278__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37583_38276__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37583_38276__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37583_38276__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37583_38276__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38281)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38279),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38280),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38278__$1)].join(''));


var G__38287 = seq__37577_38269;
var G__38288 = chunk__37578_38270;
var G__38289 = count__37579_38271;
var G__38290 = (i__37580_38272 + (1));
seq__37577_38269 = G__38287;
chunk__37578_38270 = G__38288;
count__37579_38271 = G__38289;
i__37580_38272 = G__38290;
continue;
} else {
var temp__5823__auto___38291 = cljs.core.seq(seq__37577_38269);
if(temp__5823__auto___38291){
var seq__37577_38292__$1 = temp__5823__auto___38291;
if(cljs.core.chunked_seq_QMARK_(seq__37577_38292__$1)){
var c__5568__auto___38293 = cljs.core.chunk_first(seq__37577_38292__$1);
var G__38298 = cljs.core.chunk_rest(seq__37577_38292__$1);
var G__38299 = c__5568__auto___38293;
var G__38300 = cljs.core.count(c__5568__auto___38293);
var G__38301 = (0);
seq__37577_38269 = G__38298;
chunk__37578_38270 = G__38299;
count__37579_38271 = G__38300;
i__37580_38272 = G__38301;
continue;
} else {
var map__37584_38302 = cljs.core.first(seq__37577_38292__$1);
var map__37584_38303__$1 = cljs.core.__destructure_map(map__37584_38302);
var w_38304 = map__37584_38303__$1;
var msg_38305__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37584_38303__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37584_38303__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37584_38303__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37584_38303__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38308)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38306),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38307),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38305__$1)].join(''));


var G__38313 = cljs.core.next(seq__37577_38292__$1);
var G__38314 = null;
var G__38315 = (0);
var G__38316 = (0);
seq__37577_38269 = G__38313;
chunk__37578_38270 = G__38314;
count__37579_38271 = G__38315;
i__37580_38272 = G__38316;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37566_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37566_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37599){
var map__37602 = p__37599;
var map__37602__$1 = cljs.core.__destructure_map(map__37602);
var msg = map__37602__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37602__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37602__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37607 = cljs.core.seq(updates);
var chunk__37610 = null;
var count__37611 = (0);
var i__37612 = (0);
while(true){
if((i__37612 < count__37611)){
var path = chunk__37610.cljs$core$IIndexed$_nth$arity$2(null, i__37612);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37822_38321 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37826_38322 = null;
var count__37827_38323 = (0);
var i__37828_38324 = (0);
while(true){
if((i__37828_38324 < count__37827_38323)){
var node_38325 = chunk__37826_38322.cljs$core$IIndexed$_nth$arity$2(null, i__37828_38324);
if(cljs.core.not(node_38325.shadow$old)){
var path_match_38326 = shadow.cljs.devtools.client.browser.match_paths(node_38325.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38326)){
var new_link_38327 = (function (){var G__37933 = node_38325.cloneNode(true);
G__37933.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38326),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37933;
})();
(node_38325.shadow$old = true);

(new_link_38327.onload = ((function (seq__37822_38321,chunk__37826_38322,count__37827_38323,i__37828_38324,seq__37607,chunk__37610,count__37611,i__37612,new_link_38327,path_match_38326,node_38325,path,map__37602,map__37602__$1,msg,updates,reload_info){
return (function (e){
var seq__37935_38328 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37937_38329 = null;
var count__37938_38330 = (0);
var i__37939_38331 = (0);
while(true){
if((i__37939_38331 < count__37938_38330)){
var map__37962_38332 = chunk__37937_38329.cljs$core$IIndexed$_nth$arity$2(null, i__37939_38331);
var map__37962_38333__$1 = cljs.core.__destructure_map(map__37962_38332);
var task_38334 = map__37962_38333__$1;
var fn_str_38335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37962_38333__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37962_38333__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38337 = goog.getObjectByName(fn_str_38335,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38336)].join(''));

(fn_obj_38337.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38337.cljs$core$IFn$_invoke$arity$2(path,new_link_38327) : fn_obj_38337.call(null, path,new_link_38327));


var G__38338 = seq__37935_38328;
var G__38339 = chunk__37937_38329;
var G__38340 = count__37938_38330;
var G__38341 = (i__37939_38331 + (1));
seq__37935_38328 = G__38338;
chunk__37937_38329 = G__38339;
count__37938_38330 = G__38340;
i__37939_38331 = G__38341;
continue;
} else {
var temp__5823__auto___38343 = cljs.core.seq(seq__37935_38328);
if(temp__5823__auto___38343){
var seq__37935_38344__$1 = temp__5823__auto___38343;
if(cljs.core.chunked_seq_QMARK_(seq__37935_38344__$1)){
var c__5568__auto___38345 = cljs.core.chunk_first(seq__37935_38344__$1);
var G__38346 = cljs.core.chunk_rest(seq__37935_38344__$1);
var G__38347 = c__5568__auto___38345;
var G__38348 = cljs.core.count(c__5568__auto___38345);
var G__38349 = (0);
seq__37935_38328 = G__38346;
chunk__37937_38329 = G__38347;
count__37938_38330 = G__38348;
i__37939_38331 = G__38349;
continue;
} else {
var map__37966_38350 = cljs.core.first(seq__37935_38344__$1);
var map__37966_38351__$1 = cljs.core.__destructure_map(map__37966_38350);
var task_38352 = map__37966_38351__$1;
var fn_str_38353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37966_38351__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37966_38351__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38355 = goog.getObjectByName(fn_str_38353,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38354)].join(''));

(fn_obj_38355.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38355.cljs$core$IFn$_invoke$arity$2(path,new_link_38327) : fn_obj_38355.call(null, path,new_link_38327));


var G__38356 = cljs.core.next(seq__37935_38344__$1);
var G__38357 = null;
var G__38358 = (0);
var G__38359 = (0);
seq__37935_38328 = G__38356;
chunk__37937_38329 = G__38357;
count__37938_38330 = G__38358;
i__37939_38331 = G__38359;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38325);
});})(seq__37822_38321,chunk__37826_38322,count__37827_38323,i__37828_38324,seq__37607,chunk__37610,count__37611,i__37612,new_link_38327,path_match_38326,node_38325,path,map__37602,map__37602__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38326], 0));

goog.dom.insertSiblingAfter(new_link_38327,node_38325);


var G__38360 = seq__37822_38321;
var G__38361 = chunk__37826_38322;
var G__38362 = count__37827_38323;
var G__38363 = (i__37828_38324 + (1));
seq__37822_38321 = G__38360;
chunk__37826_38322 = G__38361;
count__37827_38323 = G__38362;
i__37828_38324 = G__38363;
continue;
} else {
var G__38364 = seq__37822_38321;
var G__38365 = chunk__37826_38322;
var G__38366 = count__37827_38323;
var G__38367 = (i__37828_38324 + (1));
seq__37822_38321 = G__38364;
chunk__37826_38322 = G__38365;
count__37827_38323 = G__38366;
i__37828_38324 = G__38367;
continue;
}
} else {
var G__38368 = seq__37822_38321;
var G__38369 = chunk__37826_38322;
var G__38370 = count__37827_38323;
var G__38371 = (i__37828_38324 + (1));
seq__37822_38321 = G__38368;
chunk__37826_38322 = G__38369;
count__37827_38323 = G__38370;
i__37828_38324 = G__38371;
continue;
}
} else {
var temp__5823__auto___38372 = cljs.core.seq(seq__37822_38321);
if(temp__5823__auto___38372){
var seq__37822_38373__$1 = temp__5823__auto___38372;
if(cljs.core.chunked_seq_QMARK_(seq__37822_38373__$1)){
var c__5568__auto___38374 = cljs.core.chunk_first(seq__37822_38373__$1);
var G__38375 = cljs.core.chunk_rest(seq__37822_38373__$1);
var G__38376 = c__5568__auto___38374;
var G__38377 = cljs.core.count(c__5568__auto___38374);
var G__38378 = (0);
seq__37822_38321 = G__38375;
chunk__37826_38322 = G__38376;
count__37827_38323 = G__38377;
i__37828_38324 = G__38378;
continue;
} else {
var node_38379 = cljs.core.first(seq__37822_38373__$1);
if(cljs.core.not(node_38379.shadow$old)){
var path_match_38380 = shadow.cljs.devtools.client.browser.match_paths(node_38379.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38380)){
var new_link_38384 = (function (){var G__37981 = node_38379.cloneNode(true);
G__37981.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38380),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37981;
})();
(node_38379.shadow$old = true);

(new_link_38384.onload = ((function (seq__37822_38321,chunk__37826_38322,count__37827_38323,i__37828_38324,seq__37607,chunk__37610,count__37611,i__37612,new_link_38384,path_match_38380,node_38379,seq__37822_38373__$1,temp__5823__auto___38372,path,map__37602,map__37602__$1,msg,updates,reload_info){
return (function (e){
var seq__37983_38385 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37985_38386 = null;
var count__37986_38387 = (0);
var i__37987_38388 = (0);
while(true){
if((i__37987_38388 < count__37986_38387)){
var map__38000_38390 = chunk__37985_38386.cljs$core$IIndexed$_nth$arity$2(null, i__37987_38388);
var map__38000_38391__$1 = cljs.core.__destructure_map(map__38000_38390);
var task_38392 = map__38000_38391__$1;
var fn_str_38393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38000_38391__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38000_38391__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38399 = goog.getObjectByName(fn_str_38393,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38394)].join(''));

(fn_obj_38399.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38399.cljs$core$IFn$_invoke$arity$2(path,new_link_38384) : fn_obj_38399.call(null, path,new_link_38384));


var G__38400 = seq__37983_38385;
var G__38401 = chunk__37985_38386;
var G__38402 = count__37986_38387;
var G__38403 = (i__37987_38388 + (1));
seq__37983_38385 = G__38400;
chunk__37985_38386 = G__38401;
count__37986_38387 = G__38402;
i__37987_38388 = G__38403;
continue;
} else {
var temp__5823__auto___38404__$1 = cljs.core.seq(seq__37983_38385);
if(temp__5823__auto___38404__$1){
var seq__37983_38405__$1 = temp__5823__auto___38404__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37983_38405__$1)){
var c__5568__auto___38406 = cljs.core.chunk_first(seq__37983_38405__$1);
var G__38407 = cljs.core.chunk_rest(seq__37983_38405__$1);
var G__38408 = c__5568__auto___38406;
var G__38409 = cljs.core.count(c__5568__auto___38406);
var G__38410 = (0);
seq__37983_38385 = G__38407;
chunk__37985_38386 = G__38408;
count__37986_38387 = G__38409;
i__37987_38388 = G__38410;
continue;
} else {
var map__38008_38411 = cljs.core.first(seq__37983_38405__$1);
var map__38008_38412__$1 = cljs.core.__destructure_map(map__38008_38411);
var task_38413 = map__38008_38412__$1;
var fn_str_38414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38008_38412__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38008_38412__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38416 = goog.getObjectByName(fn_str_38414,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38415)].join(''));

(fn_obj_38416.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38416.cljs$core$IFn$_invoke$arity$2(path,new_link_38384) : fn_obj_38416.call(null, path,new_link_38384));


var G__38417 = cljs.core.next(seq__37983_38405__$1);
var G__38418 = null;
var G__38419 = (0);
var G__38420 = (0);
seq__37983_38385 = G__38417;
chunk__37985_38386 = G__38418;
count__37986_38387 = G__38419;
i__37987_38388 = G__38420;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38379);
});})(seq__37822_38321,chunk__37826_38322,count__37827_38323,i__37828_38324,seq__37607,chunk__37610,count__37611,i__37612,new_link_38384,path_match_38380,node_38379,seq__37822_38373__$1,temp__5823__auto___38372,path,map__37602,map__37602__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38380], 0));

goog.dom.insertSiblingAfter(new_link_38384,node_38379);


var G__38422 = cljs.core.next(seq__37822_38373__$1);
var G__38423 = null;
var G__38424 = (0);
var G__38425 = (0);
seq__37822_38321 = G__38422;
chunk__37826_38322 = G__38423;
count__37827_38323 = G__38424;
i__37828_38324 = G__38425;
continue;
} else {
var G__38426 = cljs.core.next(seq__37822_38373__$1);
var G__38427 = null;
var G__38428 = (0);
var G__38429 = (0);
seq__37822_38321 = G__38426;
chunk__37826_38322 = G__38427;
count__37827_38323 = G__38428;
i__37828_38324 = G__38429;
continue;
}
} else {
var G__38430 = cljs.core.next(seq__37822_38373__$1);
var G__38431 = null;
var G__38432 = (0);
var G__38433 = (0);
seq__37822_38321 = G__38430;
chunk__37826_38322 = G__38431;
count__37827_38323 = G__38432;
i__37828_38324 = G__38433;
continue;
}
}
} else {
}
}
break;
}


var G__38434 = seq__37607;
var G__38435 = chunk__37610;
var G__38436 = count__37611;
var G__38437 = (i__37612 + (1));
seq__37607 = G__38434;
chunk__37610 = G__38435;
count__37611 = G__38436;
i__37612 = G__38437;
continue;
} else {
var G__38438 = seq__37607;
var G__38439 = chunk__37610;
var G__38440 = count__37611;
var G__38441 = (i__37612 + (1));
seq__37607 = G__38438;
chunk__37610 = G__38439;
count__37611 = G__38440;
i__37612 = G__38441;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37607);
if(temp__5823__auto__){
var seq__37607__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37607__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37607__$1);
var G__38442 = cljs.core.chunk_rest(seq__37607__$1);
var G__38443 = c__5568__auto__;
var G__38444 = cljs.core.count(c__5568__auto__);
var G__38445 = (0);
seq__37607 = G__38442;
chunk__37610 = G__38443;
count__37611 = G__38444;
i__37612 = G__38445;
continue;
} else {
var path = cljs.core.first(seq__37607__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38014_38446 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38018_38447 = null;
var count__38019_38448 = (0);
var i__38020_38449 = (0);
while(true){
if((i__38020_38449 < count__38019_38448)){
var node_38454 = chunk__38018_38447.cljs$core$IIndexed$_nth$arity$2(null, i__38020_38449);
if(cljs.core.not(node_38454.shadow$old)){
var path_match_38455 = shadow.cljs.devtools.client.browser.match_paths(node_38454.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38455)){
var new_link_38456 = (function (){var G__38090 = node_38454.cloneNode(true);
G__38090.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38455),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38090;
})();
(node_38454.shadow$old = true);

(new_link_38456.onload = ((function (seq__38014_38446,chunk__38018_38447,count__38019_38448,i__38020_38449,seq__37607,chunk__37610,count__37611,i__37612,new_link_38456,path_match_38455,node_38454,path,seq__37607__$1,temp__5823__auto__,map__37602,map__37602__$1,msg,updates,reload_info){
return (function (e){
var seq__38096_38460 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38098_38461 = null;
var count__38099_38462 = (0);
var i__38100_38463 = (0);
while(true){
if((i__38100_38463 < count__38099_38462)){
var map__38111_38464 = chunk__38098_38461.cljs$core$IIndexed$_nth$arity$2(null, i__38100_38463);
var map__38111_38465__$1 = cljs.core.__destructure_map(map__38111_38464);
var task_38466 = map__38111_38465__$1;
var fn_str_38467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38111_38465__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38111_38465__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38469 = goog.getObjectByName(fn_str_38467,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38468)].join(''));

(fn_obj_38469.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38469.cljs$core$IFn$_invoke$arity$2(path,new_link_38456) : fn_obj_38469.call(null, path,new_link_38456));


var G__38473 = seq__38096_38460;
var G__38474 = chunk__38098_38461;
var G__38475 = count__38099_38462;
var G__38476 = (i__38100_38463 + (1));
seq__38096_38460 = G__38473;
chunk__38098_38461 = G__38474;
count__38099_38462 = G__38475;
i__38100_38463 = G__38476;
continue;
} else {
var temp__5823__auto___38477__$1 = cljs.core.seq(seq__38096_38460);
if(temp__5823__auto___38477__$1){
var seq__38096_38478__$1 = temp__5823__auto___38477__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38096_38478__$1)){
var c__5568__auto___38479 = cljs.core.chunk_first(seq__38096_38478__$1);
var G__38481 = cljs.core.chunk_rest(seq__38096_38478__$1);
var G__38482 = c__5568__auto___38479;
var G__38483 = cljs.core.count(c__5568__auto___38479);
var G__38484 = (0);
seq__38096_38460 = G__38481;
chunk__38098_38461 = G__38482;
count__38099_38462 = G__38483;
i__38100_38463 = G__38484;
continue;
} else {
var map__38118_38486 = cljs.core.first(seq__38096_38478__$1);
var map__38118_38487__$1 = cljs.core.__destructure_map(map__38118_38486);
var task_38488 = map__38118_38487__$1;
var fn_str_38489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38118_38487__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38118_38487__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38494 = goog.getObjectByName(fn_str_38489,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38490)].join(''));

(fn_obj_38494.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38494.cljs$core$IFn$_invoke$arity$2(path,new_link_38456) : fn_obj_38494.call(null, path,new_link_38456));


var G__38495 = cljs.core.next(seq__38096_38478__$1);
var G__38496 = null;
var G__38497 = (0);
var G__38498 = (0);
seq__38096_38460 = G__38495;
chunk__38098_38461 = G__38496;
count__38099_38462 = G__38497;
i__38100_38463 = G__38498;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38454);
});})(seq__38014_38446,chunk__38018_38447,count__38019_38448,i__38020_38449,seq__37607,chunk__37610,count__37611,i__37612,new_link_38456,path_match_38455,node_38454,path,seq__37607__$1,temp__5823__auto__,map__37602,map__37602__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38455], 0));

goog.dom.insertSiblingAfter(new_link_38456,node_38454);


var G__38499 = seq__38014_38446;
var G__38500 = chunk__38018_38447;
var G__38501 = count__38019_38448;
var G__38502 = (i__38020_38449 + (1));
seq__38014_38446 = G__38499;
chunk__38018_38447 = G__38500;
count__38019_38448 = G__38501;
i__38020_38449 = G__38502;
continue;
} else {
var G__38503 = seq__38014_38446;
var G__38504 = chunk__38018_38447;
var G__38505 = count__38019_38448;
var G__38506 = (i__38020_38449 + (1));
seq__38014_38446 = G__38503;
chunk__38018_38447 = G__38504;
count__38019_38448 = G__38505;
i__38020_38449 = G__38506;
continue;
}
} else {
var G__38507 = seq__38014_38446;
var G__38508 = chunk__38018_38447;
var G__38509 = count__38019_38448;
var G__38510 = (i__38020_38449 + (1));
seq__38014_38446 = G__38507;
chunk__38018_38447 = G__38508;
count__38019_38448 = G__38509;
i__38020_38449 = G__38510;
continue;
}
} else {
var temp__5823__auto___38511__$1 = cljs.core.seq(seq__38014_38446);
if(temp__5823__auto___38511__$1){
var seq__38014_38512__$1 = temp__5823__auto___38511__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38014_38512__$1)){
var c__5568__auto___38513 = cljs.core.chunk_first(seq__38014_38512__$1);
var G__38514 = cljs.core.chunk_rest(seq__38014_38512__$1);
var G__38515 = c__5568__auto___38513;
var G__38516 = cljs.core.count(c__5568__auto___38513);
var G__38517 = (0);
seq__38014_38446 = G__38514;
chunk__38018_38447 = G__38515;
count__38019_38448 = G__38516;
i__38020_38449 = G__38517;
continue;
} else {
var node_38518 = cljs.core.first(seq__38014_38512__$1);
if(cljs.core.not(node_38518.shadow$old)){
var path_match_38519 = shadow.cljs.devtools.client.browser.match_paths(node_38518.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38519)){
var new_link_38520 = (function (){var G__38125 = node_38518.cloneNode(true);
G__38125.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38519),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38125;
})();
(node_38518.shadow$old = true);

(new_link_38520.onload = ((function (seq__38014_38446,chunk__38018_38447,count__38019_38448,i__38020_38449,seq__37607,chunk__37610,count__37611,i__37612,new_link_38520,path_match_38519,node_38518,seq__38014_38512__$1,temp__5823__auto___38511__$1,path,seq__37607__$1,temp__5823__auto__,map__37602,map__37602__$1,msg,updates,reload_info){
return (function (e){
var seq__38127_38522 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38129_38523 = null;
var count__38130_38524 = (0);
var i__38131_38525 = (0);
while(true){
if((i__38131_38525 < count__38130_38524)){
var map__38138_38526 = chunk__38129_38523.cljs$core$IIndexed$_nth$arity$2(null, i__38131_38525);
var map__38138_38527__$1 = cljs.core.__destructure_map(map__38138_38526);
var task_38528 = map__38138_38527__$1;
var fn_str_38529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38138_38527__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38138_38527__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38531 = goog.getObjectByName(fn_str_38529,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38530)].join(''));

(fn_obj_38531.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38531.cljs$core$IFn$_invoke$arity$2(path,new_link_38520) : fn_obj_38531.call(null, path,new_link_38520));


var G__38532 = seq__38127_38522;
var G__38533 = chunk__38129_38523;
var G__38534 = count__38130_38524;
var G__38535 = (i__38131_38525 + (1));
seq__38127_38522 = G__38532;
chunk__38129_38523 = G__38533;
count__38130_38524 = G__38534;
i__38131_38525 = G__38535;
continue;
} else {
var temp__5823__auto___38536__$2 = cljs.core.seq(seq__38127_38522);
if(temp__5823__auto___38536__$2){
var seq__38127_38538__$1 = temp__5823__auto___38536__$2;
if(cljs.core.chunked_seq_QMARK_(seq__38127_38538__$1)){
var c__5568__auto___38539 = cljs.core.chunk_first(seq__38127_38538__$1);
var G__38540 = cljs.core.chunk_rest(seq__38127_38538__$1);
var G__38541 = c__5568__auto___38539;
var G__38542 = cljs.core.count(c__5568__auto___38539);
var G__38543 = (0);
seq__38127_38522 = G__38540;
chunk__38129_38523 = G__38541;
count__38130_38524 = G__38542;
i__38131_38525 = G__38543;
continue;
} else {
var map__38144_38545 = cljs.core.first(seq__38127_38538__$1);
var map__38144_38546__$1 = cljs.core.__destructure_map(map__38144_38545);
var task_38547 = map__38144_38546__$1;
var fn_str_38548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38144_38546__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38144_38546__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38552 = goog.getObjectByName(fn_str_38548,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38549)].join(''));

(fn_obj_38552.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38552.cljs$core$IFn$_invoke$arity$2(path,new_link_38520) : fn_obj_38552.call(null, path,new_link_38520));


var G__38553 = cljs.core.next(seq__38127_38538__$1);
var G__38554 = null;
var G__38555 = (0);
var G__38556 = (0);
seq__38127_38522 = G__38553;
chunk__38129_38523 = G__38554;
count__38130_38524 = G__38555;
i__38131_38525 = G__38556;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38518);
});})(seq__38014_38446,chunk__38018_38447,count__38019_38448,i__38020_38449,seq__37607,chunk__37610,count__37611,i__37612,new_link_38520,path_match_38519,node_38518,seq__38014_38512__$1,temp__5823__auto___38511__$1,path,seq__37607__$1,temp__5823__auto__,map__37602,map__37602__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38519], 0));

goog.dom.insertSiblingAfter(new_link_38520,node_38518);


var G__38557 = cljs.core.next(seq__38014_38512__$1);
var G__38558 = null;
var G__38559 = (0);
var G__38560 = (0);
seq__38014_38446 = G__38557;
chunk__38018_38447 = G__38558;
count__38019_38448 = G__38559;
i__38020_38449 = G__38560;
continue;
} else {
var G__38561 = cljs.core.next(seq__38014_38512__$1);
var G__38562 = null;
var G__38563 = (0);
var G__38564 = (0);
seq__38014_38446 = G__38561;
chunk__38018_38447 = G__38562;
count__38019_38448 = G__38563;
i__38020_38449 = G__38564;
continue;
}
} else {
var G__38565 = cljs.core.next(seq__38014_38512__$1);
var G__38566 = null;
var G__38567 = (0);
var G__38568 = (0);
seq__38014_38446 = G__38565;
chunk__38018_38447 = G__38566;
count__38019_38448 = G__38567;
i__38020_38449 = G__38568;
continue;
}
}
} else {
}
}
break;
}


var G__38569 = cljs.core.next(seq__37607__$1);
var G__38570 = null;
var G__38571 = (0);
var G__38572 = (0);
seq__37607 = G__38569;
chunk__37610 = G__38570;
count__37611 = G__38571;
i__37612 = G__38572;
continue;
} else {
var G__38573 = cljs.core.next(seq__37607__$1);
var G__38574 = null;
var G__38575 = (0);
var G__38576 = (0);
seq__37607 = G__38573;
chunk__37610 = G__38574;
count__37611 = G__38575;
i__37612 = G__38576;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__38166){
var map__38167 = p__38166;
var map__38167__$1 = cljs.core.__destructure_map(map__38167);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38167__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38169,done,error){
var map__38170 = p__38169;
var map__38170__$1 = cljs.core.__destructure_map(map__38170);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38170__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38172,done,error){
var map__38173 = p__38172;
var map__38173__$1 = cljs.core.__destructure_map(map__38173);
var msg = map__38173__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38173__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38173__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38173__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38177){
var map__38178 = p__38177;
var map__38178__$1 = cljs.core.__destructure_map(map__38178);
var src = map__38178__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38178__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__38181 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38181) : done.call(null, G__38181));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__38182){
var map__38183 = p__38182;
var map__38183__$1 = cljs.core.__destructure_map(map__38183);
var msg__$1 = map__38183__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38183__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e38185){var ex = e38185;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__38187){
var map__38188 = p__38187;
var map__38188__$1 = cljs.core.__destructure_map(map__38188);
var env = map__38188__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38188__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38199){
var map__38201 = p__38199;
var map__38201__$1 = cljs.core.__destructure_map(map__38201);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38201__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38201__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__38204){
var map__38205 = p__38204;
var map__38205__$1 = cljs.core.__destructure_map(map__38205);
var svc = map__38205__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38205__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
