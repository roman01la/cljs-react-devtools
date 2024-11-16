goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__38701__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__38701 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38702__i = 0, G__38702__a = new Array(arguments.length -  0);
while (G__38702__i < G__38702__a.length) {G__38702__a[G__38702__i] = arguments[G__38702__i + 0]; ++G__38702__i;}
  args = new cljs.core.IndexedSeq(G__38702__a,0,null);
} 
return G__38701__delegate.call(this,args);};
G__38701.cljs$lang$maxFixedArity = 0;
G__38701.cljs$lang$applyTo = (function (arglist__38703){
var args = cljs.core.seq(arglist__38703);
return G__38701__delegate(args);
});
G__38701.cljs$core$IFn$_invoke$arity$variadic = G__38701__delegate;
return G__38701;
})()
);

(o.error = (function() { 
var G__38704__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__38704 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38705__i = 0, G__38705__a = new Array(arguments.length -  0);
while (G__38705__i < G__38705__a.length) {G__38705__a[G__38705__i] = arguments[G__38705__i + 0]; ++G__38705__i;}
  args = new cljs.core.IndexedSeq(G__38705__a,0,null);
} 
return G__38704__delegate.call(this,args);};
G__38704.cljs$lang$maxFixedArity = 0;
G__38704.cljs$lang$applyTo = (function (arglist__38706){
var args = cljs.core.seq(arglist__38706);
return G__38704__delegate(args);
});
G__38704.cljs$core$IFn$_invoke$arity$variadic = G__38704__delegate;
return G__38704;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
