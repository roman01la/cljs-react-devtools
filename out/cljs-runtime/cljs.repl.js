goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35054){
var map__35055 = p__35054;
var map__35055__$1 = cljs.core.__destructure_map(map__35055);
var m = map__35055__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35055__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35055__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35063_35422 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35064_35423 = null;
var count__35065_35424 = (0);
var i__35066_35425 = (0);
while(true){
if((i__35066_35425 < count__35065_35424)){
var f_35427 = chunk__35064_35423.cljs$core$IIndexed$_nth$arity$2(null, i__35066_35425);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35427], 0));


var G__35429 = seq__35063_35422;
var G__35430 = chunk__35064_35423;
var G__35431 = count__35065_35424;
var G__35432 = (i__35066_35425 + (1));
seq__35063_35422 = G__35429;
chunk__35064_35423 = G__35430;
count__35065_35424 = G__35431;
i__35066_35425 = G__35432;
continue;
} else {
var temp__5823__auto___35434 = cljs.core.seq(seq__35063_35422);
if(temp__5823__auto___35434){
var seq__35063_35436__$1 = temp__5823__auto___35434;
if(cljs.core.chunked_seq_QMARK_(seq__35063_35436__$1)){
var c__5568__auto___35437 = cljs.core.chunk_first(seq__35063_35436__$1);
var G__35438 = cljs.core.chunk_rest(seq__35063_35436__$1);
var G__35439 = c__5568__auto___35437;
var G__35440 = cljs.core.count(c__5568__auto___35437);
var G__35441 = (0);
seq__35063_35422 = G__35438;
chunk__35064_35423 = G__35439;
count__35065_35424 = G__35440;
i__35066_35425 = G__35441;
continue;
} else {
var f_35442 = cljs.core.first(seq__35063_35436__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35442], 0));


var G__35443 = cljs.core.next(seq__35063_35436__$1);
var G__35444 = null;
var G__35445 = (0);
var G__35446 = (0);
seq__35063_35422 = G__35443;
chunk__35064_35423 = G__35444;
count__35065_35424 = G__35445;
i__35066_35425 = G__35446;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35448 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35448], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35448)))?cljs.core.second(arglists_35448):arglists_35448)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35079_35454 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35080_35455 = null;
var count__35081_35456 = (0);
var i__35082_35457 = (0);
while(true){
if((i__35082_35457 < count__35081_35456)){
var vec__35097_35458 = chunk__35080_35455.cljs$core$IIndexed$_nth$arity$2(null, i__35082_35457);
var name_35459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35097_35458,(0),null);
var map__35100_35460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35097_35458,(1),null);
var map__35100_35461__$1 = cljs.core.__destructure_map(map__35100_35460);
var doc_35462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35100_35461__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35100_35461__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35459], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35463], 0));

if(cljs.core.truth_(doc_35462)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35462], 0));
} else {
}


var G__35467 = seq__35079_35454;
var G__35468 = chunk__35080_35455;
var G__35469 = count__35081_35456;
var G__35470 = (i__35082_35457 + (1));
seq__35079_35454 = G__35467;
chunk__35080_35455 = G__35468;
count__35081_35456 = G__35469;
i__35082_35457 = G__35470;
continue;
} else {
var temp__5823__auto___35471 = cljs.core.seq(seq__35079_35454);
if(temp__5823__auto___35471){
var seq__35079_35472__$1 = temp__5823__auto___35471;
if(cljs.core.chunked_seq_QMARK_(seq__35079_35472__$1)){
var c__5568__auto___35474 = cljs.core.chunk_first(seq__35079_35472__$1);
var G__35476 = cljs.core.chunk_rest(seq__35079_35472__$1);
var G__35477 = c__5568__auto___35474;
var G__35478 = cljs.core.count(c__5568__auto___35474);
var G__35479 = (0);
seq__35079_35454 = G__35476;
chunk__35080_35455 = G__35477;
count__35081_35456 = G__35478;
i__35082_35457 = G__35479;
continue;
} else {
var vec__35107_35480 = cljs.core.first(seq__35079_35472__$1);
var name_35481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35107_35480,(0),null);
var map__35110_35482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35107_35480,(1),null);
var map__35110_35483__$1 = cljs.core.__destructure_map(map__35110_35482);
var doc_35484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35110_35483__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35110_35483__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35481], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35485], 0));

if(cljs.core.truth_(doc_35484)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35484], 0));
} else {
}


var G__35490 = cljs.core.next(seq__35079_35472__$1);
var G__35491 = null;
var G__35492 = (0);
var G__35493 = (0);
seq__35079_35454 = G__35490;
chunk__35080_35455 = G__35491;
count__35081_35456 = G__35492;
i__35082_35457 = G__35493;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35112 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35113 = null;
var count__35114 = (0);
var i__35115 = (0);
while(true){
if((i__35115 < count__35114)){
var role = chunk__35113.cljs$core$IIndexed$_nth$arity$2(null, i__35115);
var temp__5823__auto___35497__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___35497__$1)){
var spec_35498 = temp__5823__auto___35497__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35498)], 0));
} else {
}


var G__35499 = seq__35112;
var G__35501 = chunk__35113;
var G__35502 = count__35114;
var G__35503 = (i__35115 + (1));
seq__35112 = G__35499;
chunk__35113 = G__35501;
count__35114 = G__35502;
i__35115 = G__35503;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__35112);
if(temp__5823__auto____$1){
var seq__35112__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35112__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35112__$1);
var G__35505 = cljs.core.chunk_rest(seq__35112__$1);
var G__35506 = c__5568__auto__;
var G__35507 = cljs.core.count(c__5568__auto__);
var G__35508 = (0);
seq__35112 = G__35505;
chunk__35113 = G__35506;
count__35114 = G__35507;
i__35115 = G__35508;
continue;
} else {
var role = cljs.core.first(seq__35112__$1);
var temp__5823__auto___35509__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___35509__$2)){
var spec_35510 = temp__5823__auto___35509__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35510)], 0));
} else {
}


var G__35512 = cljs.core.next(seq__35112__$1);
var G__35513 = null;
var G__35514 = (0);
var G__35515 = (0);
seq__35112 = G__35512;
chunk__35113 = G__35513;
count__35114 = G__35514;
i__35115 = G__35515;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5823__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5823__auto__)){
var msg = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5823__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5823__auto__)){
var ed = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35527 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35528 = cljs.core.ex_cause(t);
via = G__35527;
t = G__35528;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5823__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5823__auto__)){
var root_msg = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5823__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5823__auto__)){
var data = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5823__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5823__auto__)){
var phase = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35253 = datafied_throwable;
var map__35253__$1 = cljs.core.__destructure_map(map__35253);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35253__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35253__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35253__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35254 = cljs.core.last(via);
var map__35254__$1 = cljs.core.__destructure_map(map__35254);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35254__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35254__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35254__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35255 = data;
var map__35255__$1 = cljs.core.__destructure_map(map__35255);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35255__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35255__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35255__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35256 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35256__$1 = cljs.core.__destructure_map(map__35256);
var top_data = map__35256__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35256__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35259 = phase;
var G__35259__$1 = (((G__35259 instanceof cljs.core.Keyword))?G__35259.fqn:null);
switch (G__35259__$1) {
case "read-source":
var map__35262 = data;
var map__35262__$1 = cljs.core.__destructure_map(map__35262);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35262__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35262__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35263 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35263__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35263,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35263);
var G__35263__$2 = (cljs.core.truth_((function (){var fexpr__35267 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35267.cljs$core$IFn$_invoke$arity$1 ? fexpr__35267.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35267.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35263__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35263__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35263__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35263__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35270 = top_data;
var G__35270__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35270,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35270);
var G__35270__$2 = (cljs.core.truth_((function (){var fexpr__35271 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35271.cljs$core$IFn$_invoke$arity$1 ? fexpr__35271.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35271.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35270__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35270__$1);
var G__35270__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35270__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35270__$2);
var G__35270__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35270__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35270__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35270__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35270__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35276 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35276,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35276,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35276,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35276,(3),null);
var G__35279 = top_data;
var G__35279__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35279,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35279);
var G__35279__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35279__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35279__$1);
var G__35279__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35279__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35279__$2);
var G__35279__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35279__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35279__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35279__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35279__$4;
}

break;
case "execution":
var vec__35282 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35282,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35282,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35282,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35282,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35239_SHARP_){
var or__5045__auto__ = (p1__35239_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__35286 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35286.cljs$core$IFn$_invoke$arity$1 ? fexpr__35286.cljs$core$IFn$_invoke$arity$1(p1__35239_SHARP_) : fexpr__35286.call(null, p1__35239_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__35293 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35293__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35293,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35293);
var G__35293__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35293__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35293__$1);
var G__35293__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35293__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35293__$2);
var G__35293__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35293__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35293__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35293__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35293__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35259__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35314){
var map__35315 = p__35314;
var map__35315__$1 = cljs.core.__destructure_map(map__35315);
var triage_data = map__35315__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35315__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35315__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35315__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35315__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35315__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35315__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35315__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35315__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35331 = phase;
var G__35331__$1 = (((G__35331 instanceof cljs.core.Keyword))?G__35331.fqn:null);
switch (G__35331__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35345 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35346 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35347 = loc;
var G__35348 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35350_35593 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35351_35594 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35352_35595 = true;
var _STAR_print_fn_STAR__temp_val__35353_35596 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35352_35595);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35353_35596);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35305_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35305_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35351_35594);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35350_35593);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35345,G__35346,G__35347,G__35348) : format.call(null, G__35345,G__35346,G__35347,G__35348));

break;
case "macroexpansion":
var G__35358 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35359 = cause_type;
var G__35360 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35361 = loc;
var G__35362 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35358,G__35359,G__35360,G__35361,G__35362) : format.call(null, G__35358,G__35359,G__35360,G__35361,G__35362));

break;
case "compile-syntax-check":
var G__35366 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35367 = cause_type;
var G__35368 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35369 = loc;
var G__35370 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35366,G__35367,G__35368,G__35369,G__35370) : format.call(null, G__35366,G__35367,G__35368,G__35369,G__35370));

break;
case "compilation":
var G__35377 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35378 = cause_type;
var G__35379 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35380 = loc;
var G__35381 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35377,G__35378,G__35379,G__35380,G__35381) : format.call(null, G__35377,G__35378,G__35379,G__35380,G__35381));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35384 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35385 = symbol;
var G__35386 = loc;
var G__35387 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35388_35615 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35389_35616 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35390_35617 = true;
var _STAR_print_fn_STAR__temp_val__35391_35618 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35390_35617);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35391_35618);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35309_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35309_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35389_35616);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35388_35615);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35384,G__35385,G__35386,G__35387) : format.call(null, G__35384,G__35385,G__35386,G__35387));
} else {
var G__35400 = "Execution error%s at %s(%s).\n%s\n";
var G__35401 = cause_type;
var G__35402 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35403 = loc;
var G__35404 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35400,G__35401,G__35402,G__35403,G__35404) : format.call(null, G__35400,G__35401,G__35402,G__35403,G__35404));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35331__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
