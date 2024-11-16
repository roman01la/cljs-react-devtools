goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31548 = (function (f,blockable,meta31549){
this.f = f;
this.blockable = blockable;
this.meta31549 = meta31549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31550,meta31549__$1){
var self__ = this;
var _31550__$1 = this;
return (new cljs.core.async.t_cljs$core$async31548(self__.f,self__.blockable,meta31549__$1));
}));

(cljs.core.async.t_cljs$core$async31548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31550){
var self__ = this;
var _31550__$1 = this;
return self__.meta31549;
}));

(cljs.core.async.t_cljs$core$async31548.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31548.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31548.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31548.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31548.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31549","meta31549",271232379,null)], null);
}));

(cljs.core.async.t_cljs$core$async31548.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31548");

(cljs.core.async.t_cljs$core$async31548.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31548");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31548.
 */
cljs.core.async.__GT_t_cljs$core$async31548 = (function cljs$core$async$__GT_t_cljs$core$async31548(f,blockable,meta31549){
return (new cljs.core.async.t_cljs$core$async31548(f,blockable,meta31549));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31526 = arguments.length;
switch (G__31526) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async31548(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31610 = arguments.length;
switch (G__31610) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31629 = arguments.length;
switch (G__31629) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31638 = arguments.length;
switch (G__31638) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35260 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35260) : fn1.call(null, val_35260));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35260) : fn1.call(null, val_35260));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31657 = arguments.length;
switch (G__31657) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___35273 = n;
var x_35274 = (0);
while(true){
if((x_35274 < n__5636__auto___35273)){
(a[x_35274] = x_35274);

var G__35275 = (x_35274 + (1));
x_35274 = G__35275;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31674 = (function (flag,meta31675){
this.flag = flag;
this.meta31675 = meta31675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31676,meta31675__$1){
var self__ = this;
var _31676__$1 = this;
return (new cljs.core.async.t_cljs$core$async31674(self__.flag,meta31675__$1));
}));

(cljs.core.async.t_cljs$core$async31674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31676){
var self__ = this;
var _31676__$1 = this;
return self__.meta31675;
}));

(cljs.core.async.t_cljs$core$async31674.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31674.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31674.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31674.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31674.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31675","meta31675",1512463763,null)], null);
}));

(cljs.core.async.t_cljs$core$async31674.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31674");

(cljs.core.async.t_cljs$core$async31674.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31674");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31674.
 */
cljs.core.async.__GT_t_cljs$core$async31674 = (function cljs$core$async$__GT_t_cljs$core$async31674(flag,meta31675){
return (new cljs.core.async.t_cljs$core$async31674(flag,meta31675));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async31674(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31687 = (function (flag,cb,meta31688){
this.flag = flag;
this.cb = cb;
this.meta31688 = meta31688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31689,meta31688__$1){
var self__ = this;
var _31689__$1 = this;
return (new cljs.core.async.t_cljs$core$async31687(self__.flag,self__.cb,meta31688__$1));
}));

(cljs.core.async.t_cljs$core$async31687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31689){
var self__ = this;
var _31689__$1 = this;
return self__.meta31688;
}));

(cljs.core.async.t_cljs$core$async31687.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31687.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31687.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31687.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31688","meta31688",-494267054,null)], null);
}));

(cljs.core.async.t_cljs$core$async31687.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31687");

(cljs.core.async.t_cljs$core$async31687.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31687");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31687.
 */
cljs.core.async.__GT_t_cljs$core$async31687 = (function cljs$core$async$__GT_t_cljs$core$async31687(flag,cb,meta31688){
return (new cljs.core.async.t_cljs$core$async31687(flag,cb,meta31688));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async31687(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31715_SHARP_){
var G__31728 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31715_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31728) : fret.call(null, G__31728));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31716_SHARP_){
var G__31730 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31716_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31730) : fret.call(null, G__31730));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35300 = (i + (1));
i = G__35300;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35302 = arguments.length;
var i__5770__auto___35303 = (0);
while(true){
if((i__5770__auto___35303 < len__5769__auto___35302)){
args__5775__auto__.push((arguments[i__5770__auto___35303]));

var G__35304 = (i__5770__auto___35303 + (1));
i__5770__auto___35303 = G__35304;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31747){
var map__31748 = p__31747;
var map__31748__$1 = cljs.core.__destructure_map(map__31748);
var opts = map__31748__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31739){
var G__31740 = cljs.core.first(seq31739);
var seq31739__$1 = cljs.core.next(seq31739);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31740,seq31739__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31761 = arguments.length;
switch (G__31761) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31398__auto___35322 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31399__auto__ = (function (){var switch__30617__auto__ = (function (state_31845){
var state_val_31846 = (state_31845[(1)]);
if((state_val_31846 === (7))){
var inst_31838 = (state_31845[(2)]);
var state_31845__$1 = state_31845;
var statearr_31859_35323 = state_31845__$1;
(statearr_31859_35323[(2)] = inst_31838);

(statearr_31859_35323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (1))){
var state_31845__$1 = state_31845;
var statearr_31862_35324 = state_31845__$1;
(statearr_31862_35324[(2)] = null);

(statearr_31862_35324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (4))){
var inst_31817 = (state_31845[(7)]);
var inst_31817__$1 = (state_31845[(2)]);
var inst_31821 = (inst_31817__$1 == null);
var state_31845__$1 = (function (){var statearr_31867 = state_31845;
(statearr_31867[(7)] = inst_31817__$1);

return statearr_31867;
})();
if(cljs.core.truth_(inst_31821)){
var statearr_31869_35329 = state_31845__$1;
(statearr_31869_35329[(1)] = (5));

} else {
var statearr_31870_35330 = state_31845__$1;
(statearr_31870_35330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (13))){
var state_31845__$1 = state_31845;
var statearr_31876_35332 = state_31845__$1;
(statearr_31876_35332[(2)] = null);

(statearr_31876_35332[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (6))){
var inst_31817 = (state_31845[(7)]);
var state_31845__$1 = state_31845;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31845__$1,(11),to,inst_31817);
} else {
if((state_val_31846 === (3))){
var inst_31840 = (state_31845[(2)]);
var state_31845__$1 = state_31845;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31845__$1,inst_31840);
} else {
if((state_val_31846 === (12))){
var state_31845__$1 = state_31845;
var statearr_31882_35333 = state_31845__$1;
(statearr_31882_35333[(2)] = null);

(statearr_31882_35333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (2))){
var state_31845__$1 = state_31845;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31845__$1,(4),from);
} else {
if((state_val_31846 === (11))){
var inst_31831 = (state_31845[(2)]);
var state_31845__$1 = state_31845;
if(cljs.core.truth_(inst_31831)){
var statearr_31885_35338 = state_31845__$1;
(statearr_31885_35338[(1)] = (12));

} else {
var statearr_31888_35339 = state_31845__$1;
(statearr_31888_35339[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (9))){
var state_31845__$1 = state_31845;
var statearr_31889_35340 = state_31845__$1;
(statearr_31889_35340[(2)] = null);

(statearr_31889_35340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (5))){
var state_31845__$1 = state_31845;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31890_35341 = state_31845__$1;
(statearr_31890_35341[(1)] = (8));

} else {
var statearr_31895_35342 = state_31845__$1;
(statearr_31895_35342[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (14))){
var inst_31836 = (state_31845[(2)]);
var state_31845__$1 = state_31845;
var statearr_31897_35343 = state_31845__$1;
(statearr_31897_35343[(2)] = inst_31836);

(statearr_31897_35343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (10))){
var inst_31828 = (state_31845[(2)]);
var state_31845__$1 = state_31845;
var statearr_31900_35344 = state_31845__$1;
(statearr_31900_35344[(2)] = inst_31828);

(statearr_31900_35344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31846 === (8))){
var inst_31825 = cljs.core.async.close_BANG_(to);
var state_31845__$1 = state_31845;
var statearr_31905_35349 = state_31845__$1;
(statearr_31905_35349[(2)] = inst_31825);

(statearr_31905_35349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30618__auto__ = null;
var cljs$core$async$state_machine__30618__auto____0 = (function (){
var statearr_31906 = [null,null,null,null,null,null,null,null];
(statearr_31906[(0)] = cljs$core$async$state_machine__30618__auto__);

(statearr_31906[(1)] = (1));

return statearr_31906;
});
var cljs$core$async$state_machine__30618__auto____1 = (function (state_31845){
while(true){
var ret_value__30619__auto__ = (function (){try{while(true){
var result__30620__auto__ = switch__30617__auto__(state_31845);
if(cljs.core.keyword_identical_QMARK_(result__30620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30620__auto__;
}
break;
}
}catch (e31908){var ex__30621__auto__ = e31908;
var statearr_31909_35354 = state_31845;
(statearr_31909_35354[(2)] = ex__30621__auto__);


if(cljs.core.seq((state_31845[(4)]))){
var statearr_31910_35355 = state_31845;
(statearr_31910_35355[(1)] = cljs.core.first((state_31845[(4)])));

} else {
throw ex__30621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35356 = state_31845;
state_31845 = G__35356;
continue;
} else {
return ret_value__30619__auto__;
}
break;
}
});
cljs$core$async$state_machine__30618__auto__ = function(state_31845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30618__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30618__auto____1.call(this,state_31845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30618__auto____0;
cljs$core$async$state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30618__auto____1;
return cljs$core$async$state_machine__30618__auto__;
})()
})();
var state__31400__auto__ = (function (){var statearr_31913 = f__31399__auto__();
(statearr_31913[(6)] = c__31398__auto___35322);

return statearr_31913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31400__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__31919){
var vec__31920 = p__31919;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31920,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31920,(1),null);
var job = vec__31920;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31398__auto___35382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31399__auto__ = (function (){var switch__30617__auto__ = (function (state_31927){
var state_val_31928 = (state_31927[(1)]);
if((state_val_31928 === (1))){
var state_31927__$1 = state_31927;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31927__$1,(2),res,v);
} else {
if((state_val_31928 === (2))){
var inst_31924 = (state_31927[(2)]);
var inst_31925 = cljs.core.async.close_BANG_(res);
var state_31927__$1 = (function (){var statearr_31935 = state_31927;
(statearr_31935[(7)] = inst_31924);

return statearr_31935;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31927__$1,inst_31925);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____0 = (function (){
var statearr_31939 = [null,null,null,null,null,null,null,null];
(statearr_31939[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__);

(statearr_31939[(1)] = (1));

return statearr_31939;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____1 = (function (state_31927){
while(true){
var ret_value__30619__auto__ = (function (){try{while(true){
var result__30620__auto__ = switch__30617__auto__(state_31927);
if(cljs.core.keyword_identical_QMARK_(result__30620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30620__auto__;
}
break;
}
}catch (e31940){var ex__30621__auto__ = e31940;
var statearr_31941_35397 = state_31927;
(statearr_31941_35397[(2)] = ex__30621__auto__);


if(cljs.core.seq((state_31927[(4)]))){
var statearr_31942_35398 = state_31927;
(statearr_31942_35398[(1)] = cljs.core.first((state_31927[(4)])));

} else {
throw ex__30621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35399 = state_31927;
state_31927 = G__35399;
continue;
} else {
return ret_value__30619__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__ = function(state_31927){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____1.call(this,state_31927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__;
})()
})();
var state__31400__auto__ = (function (){var statearr_31943 = f__31399__auto__();
(statearr_31943[(6)] = c__31398__auto___35382);

return statearr_31943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31400__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31946){
var vec__31948 = p__31946;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31948,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31948,(1),null);
var job = vec__31948;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___35405 = n;
var __35406 = (0);
while(true){
if((__35406 < n__5636__auto___35405)){
var G__31951_35407 = type;
var G__31951_35408__$1 = (((G__31951_35407 instanceof cljs.core.Keyword))?G__31951_35407.fqn:null);
switch (G__31951_35408__$1) {
case "compute":
var c__31398__auto___35410 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35406,c__31398__auto___35410,G__31951_35407,G__31951_35408__$1,n__5636__auto___35405,jobs,results,process__$1,async){
return (function (){
var f__31399__auto__ = (function (){var switch__30617__auto__ = ((function (__35406,c__31398__auto___35410,G__31951_35407,G__31951_35408__$1,n__5636__auto___35405,jobs,results,process__$1,async){
return (function (state_31964){
var state_val_31965 = (state_31964[(1)]);
if((state_val_31965 === (1))){
var state_31964__$1 = state_31964;
var statearr_31972_35411 = state_31964__$1;
(statearr_31972_35411[(2)] = null);

(statearr_31972_35411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31965 === (2))){
var state_31964__$1 = state_31964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31964__$1,(4),jobs);
} else {
if((state_val_31965 === (3))){
var inst_31962 = (state_31964[(2)]);
var state_31964__$1 = state_31964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31964__$1,inst_31962);
} else {
if((state_val_31965 === (4))){
var inst_31954 = (state_31964[(2)]);
var inst_31955 = process__$1(inst_31954);
var state_31964__$1 = state_31964;
if(cljs.core.truth_(inst_31955)){
var statearr_31975_35412 = state_31964__$1;
(statearr_31975_35412[(1)] = (5));

} else {
var statearr_31976_35413 = state_31964__$1;
(statearr_31976_35413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31965 === (5))){
var state_31964__$1 = state_31964;
var statearr_31979_35414 = state_31964__$1;
(statearr_31979_35414[(2)] = null);

(statearr_31979_35414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31965 === (6))){
var state_31964__$1 = state_31964;
var statearr_31985_35415 = state_31964__$1;
(statearr_31985_35415[(2)] = null);

(statearr_31985_35415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31965 === (7))){
var inst_31960 = (state_31964[(2)]);
var state_31964__$1 = state_31964;
var statearr_31986_35416 = state_31964__$1;
(statearr_31986_35416[(2)] = inst_31960);

(statearr_31986_35416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35406,c__31398__auto___35410,G__31951_35407,G__31951_35408__$1,n__5636__auto___35405,jobs,results,process__$1,async))
;
return ((function (__35406,switch__30617__auto__,c__31398__auto___35410,G__31951_35407,G__31951_35408__$1,n__5636__auto___35405,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____0 = (function (){
var statearr_31990 = [null,null,null,null,null,null,null];
(statearr_31990[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__);

(statearr_31990[(1)] = (1));

return statearr_31990;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____1 = (function (state_31964){
while(true){
var ret_value__30619__auto__ = (function (){try{while(true){
var result__30620__auto__ = switch__30617__auto__(state_31964);
if(cljs.core.keyword_identical_QMARK_(result__30620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30620__auto__;
}
break;
}
}catch (e31991){var ex__30621__auto__ = e31991;
var statearr_31992_35418 = state_31964;
(statearr_31992_35418[(2)] = ex__30621__auto__);


if(cljs.core.seq((state_31964[(4)]))){
var statearr_31993_35419 = state_31964;
(statearr_31993_35419[(1)] = cljs.core.first((state_31964[(4)])));

} else {
throw ex__30621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35420 = state_31964;
state_31964 = G__35420;
continue;
} else {
return ret_value__30619__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__ = function(state_31964){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____1.call(this,state_31964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__;
})()
;})(__35406,switch__30617__auto__,c__31398__auto___35410,G__31951_35407,G__31951_35408__$1,n__5636__auto___35405,jobs,results,process__$1,async))
})();
var state__31400__auto__ = (function (){var statearr_31996 = f__31399__auto__();
(statearr_31996[(6)] = c__31398__auto___35410);

return statearr_31996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31400__auto__);
});})(__35406,c__31398__auto___35410,G__31951_35407,G__31951_35408__$1,n__5636__auto___35405,jobs,results,process__$1,async))
);


break;
case "async":
var c__31398__auto___35421 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35406,c__31398__auto___35421,G__31951_35407,G__31951_35408__$1,n__5636__auto___35405,jobs,results,process__$1,async){
return (function (){
var f__31399__auto__ = (function (){var switch__30617__auto__ = ((function (__35406,c__31398__auto___35421,G__31951_35407,G__31951_35408__$1,n__5636__auto___35405,jobs,results,process__$1,async){
return (function (state_32010){
var state_val_32012 = (state_32010[(1)]);
if((state_val_32012 === (1))){
var state_32010__$1 = state_32010;
var statearr_32021_35433 = state_32010__$1;
(statearr_32021_35433[(2)] = null);

(statearr_32021_35433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32012 === (2))){
var state_32010__$1 = state_32010;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32010__$1,(4),jobs);
} else {
if((state_val_32012 === (3))){
var inst_32008 = (state_32010[(2)]);
var state_32010__$1 = state_32010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32010__$1,inst_32008);
} else {
if((state_val_32012 === (4))){
var inst_31999 = (state_32010[(2)]);
var inst_32000 = async(inst_31999);
var state_32010__$1 = state_32010;
if(cljs.core.truth_(inst_32000)){
var statearr_32022_35447 = state_32010__$1;
(statearr_32022_35447[(1)] = (5));

} else {
var statearr_32023_35449 = state_32010__$1;
(statearr_32023_35449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32012 === (5))){
var state_32010__$1 = state_32010;
var statearr_32024_35450 = state_32010__$1;
(statearr_32024_35450[(2)] = null);

(statearr_32024_35450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32012 === (6))){
var state_32010__$1 = state_32010;
var statearr_32026_35451 = state_32010__$1;
(statearr_32026_35451[(2)] = null);

(statearr_32026_35451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32012 === (7))){
var inst_32006 = (state_32010[(2)]);
var state_32010__$1 = state_32010;
var statearr_32028_35452 = state_32010__$1;
(statearr_32028_35452[(2)] = inst_32006);

(statearr_32028_35452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35406,c__31398__auto___35421,G__31951_35407,G__31951_35408__$1,n__5636__auto___35405,jobs,results,process__$1,async))
;
return ((function (__35406,switch__30617__auto__,c__31398__auto___35421,G__31951_35407,G__31951_35408__$1,n__5636__auto___35405,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____0 = (function (){
var statearr_32029 = [null,null,null,null,null,null,null];
(statearr_32029[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__);

(statearr_32029[(1)] = (1));

return statearr_32029;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____1 = (function (state_32010){
while(true){
var ret_value__30619__auto__ = (function (){try{while(true){
var result__30620__auto__ = switch__30617__auto__(state_32010);
if(cljs.core.keyword_identical_QMARK_(result__30620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30620__auto__;
}
break;
}
}catch (e32030){var ex__30621__auto__ = e32030;
var statearr_32031_35464 = state_32010;
(statearr_32031_35464[(2)] = ex__30621__auto__);


if(cljs.core.seq((state_32010[(4)]))){
var statearr_32032_35465 = state_32010;
(statearr_32032_35465[(1)] = cljs.core.first((state_32010[(4)])));

} else {
throw ex__30621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35466 = state_32010;
state_32010 = G__35466;
continue;
} else {
return ret_value__30619__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__ = function(state_32010){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____1.call(this,state_32010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__;
})()
;})(__35406,switch__30617__auto__,c__31398__auto___35421,G__31951_35407,G__31951_35408__$1,n__5636__auto___35405,jobs,results,process__$1,async))
})();
var state__31400__auto__ = (function (){var statearr_32033 = f__31399__auto__();
(statearr_32033[(6)] = c__31398__auto___35421);

return statearr_32033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31400__auto__);
});})(__35406,c__31398__auto___35421,G__31951_35407,G__31951_35408__$1,n__5636__auto___35405,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31951_35408__$1)].join('')));

}

var G__35473 = (__35406 + (1));
__35406 = G__35473;
continue;
} else {
}
break;
}

var c__31398__auto___35475 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31399__auto__ = (function (){var switch__30617__auto__ = (function (state_32065){
var state_val_32066 = (state_32065[(1)]);
if((state_val_32066 === (7))){
var inst_32059 = (state_32065[(2)]);
var state_32065__$1 = state_32065;
var statearr_32071_35486 = state_32065__$1;
(statearr_32071_35486[(2)] = inst_32059);

(statearr_32071_35486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (1))){
var state_32065__$1 = state_32065;
var statearr_32072_35489 = state_32065__$1;
(statearr_32072_35489[(2)] = null);

(statearr_32072_35489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (4))){
var inst_32041 = (state_32065[(7)]);
var inst_32041__$1 = (state_32065[(2)]);
var inst_32042 = (inst_32041__$1 == null);
var state_32065__$1 = (function (){var statearr_32074 = state_32065;
(statearr_32074[(7)] = inst_32041__$1);

return statearr_32074;
})();
if(cljs.core.truth_(inst_32042)){
var statearr_32075_35494 = state_32065__$1;
(statearr_32075_35494[(1)] = (5));

} else {
var statearr_32076_35495 = state_32065__$1;
(statearr_32076_35495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (6))){
var inst_32046 = (state_32065[(8)]);
var inst_32041 = (state_32065[(7)]);
var inst_32046__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32048 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32049 = [inst_32041,inst_32046__$1];
var inst_32050 = (new cljs.core.PersistentVector(null,2,(5),inst_32048,inst_32049,null));
var state_32065__$1 = (function (){var statearr_32077 = state_32065;
(statearr_32077[(8)] = inst_32046__$1);

return statearr_32077;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32065__$1,(8),jobs,inst_32050);
} else {
if((state_val_32066 === (3))){
var inst_32062 = (state_32065[(2)]);
var state_32065__$1 = state_32065;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32065__$1,inst_32062);
} else {
if((state_val_32066 === (2))){
var state_32065__$1 = state_32065;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32065__$1,(4),from);
} else {
if((state_val_32066 === (9))){
var inst_32056 = (state_32065[(2)]);
var state_32065__$1 = (function (){var statearr_32079 = state_32065;
(statearr_32079[(9)] = inst_32056);

return statearr_32079;
})();
var statearr_32081_35511 = state_32065__$1;
(statearr_32081_35511[(2)] = null);

(statearr_32081_35511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (5))){
var inst_32044 = cljs.core.async.close_BANG_(jobs);
var state_32065__$1 = state_32065;
var statearr_32083_35516 = state_32065__$1;
(statearr_32083_35516[(2)] = inst_32044);

(statearr_32083_35516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (8))){
var inst_32046 = (state_32065[(8)]);
var inst_32052 = (state_32065[(2)]);
var state_32065__$1 = (function (){var statearr_32084 = state_32065;
(statearr_32084[(10)] = inst_32052);

return statearr_32084;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32065__$1,(9),results,inst_32046);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____0 = (function (){
var statearr_32088 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32088[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__);

(statearr_32088[(1)] = (1));

return statearr_32088;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____1 = (function (state_32065){
while(true){
var ret_value__30619__auto__ = (function (){try{while(true){
var result__30620__auto__ = switch__30617__auto__(state_32065);
if(cljs.core.keyword_identical_QMARK_(result__30620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30620__auto__;
}
break;
}
}catch (e32089){var ex__30621__auto__ = e32089;
var statearr_32090_35526 = state_32065;
(statearr_32090_35526[(2)] = ex__30621__auto__);


if(cljs.core.seq((state_32065[(4)]))){
var statearr_32095_35529 = state_32065;
(statearr_32095_35529[(1)] = cljs.core.first((state_32065[(4)])));

} else {
throw ex__30621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35531 = state_32065;
state_32065 = G__35531;
continue;
} else {
return ret_value__30619__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__ = function(state_32065){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____1.call(this,state_32065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__;
})()
})();
var state__31400__auto__ = (function (){var statearr_32096 = f__31399__auto__();
(statearr_32096[(6)] = c__31398__auto___35475);

return statearr_32096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31400__auto__);
}));


var c__31398__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31399__auto__ = (function (){var switch__30617__auto__ = (function (state_32137){
var state_val_32138 = (state_32137[(1)]);
if((state_val_32138 === (7))){
var inst_32133 = (state_32137[(2)]);
var state_32137__$1 = state_32137;
var statearr_32147_35536 = state_32137__$1;
(statearr_32147_35536[(2)] = inst_32133);

(statearr_32147_35536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (20))){
var state_32137__$1 = state_32137;
var statearr_32148_35537 = state_32137__$1;
(statearr_32148_35537[(2)] = null);

(statearr_32148_35537[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (1))){
var state_32137__$1 = state_32137;
var statearr_32149_35538 = state_32137__$1;
(statearr_32149_35538[(2)] = null);

(statearr_32149_35538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (4))){
var inst_32101 = (state_32137[(7)]);
var inst_32101__$1 = (state_32137[(2)]);
var inst_32102 = (inst_32101__$1 == null);
var state_32137__$1 = (function (){var statearr_32150 = state_32137;
(statearr_32150[(7)] = inst_32101__$1);

return statearr_32150;
})();
if(cljs.core.truth_(inst_32102)){
var statearr_32153_35539 = state_32137__$1;
(statearr_32153_35539[(1)] = (5));

} else {
var statearr_32154_35540 = state_32137__$1;
(statearr_32154_35540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (15))){
var inst_32114 = (state_32137[(8)]);
var state_32137__$1 = state_32137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32137__$1,(18),to,inst_32114);
} else {
if((state_val_32138 === (21))){
var inst_32128 = (state_32137[(2)]);
var state_32137__$1 = state_32137;
var statearr_32157_35541 = state_32137__$1;
(statearr_32157_35541[(2)] = inst_32128);

(statearr_32157_35541[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (13))){
var inst_32130 = (state_32137[(2)]);
var state_32137__$1 = (function (){var statearr_32158 = state_32137;
(statearr_32158[(9)] = inst_32130);

return statearr_32158;
})();
var statearr_32159_35543 = state_32137__$1;
(statearr_32159_35543[(2)] = null);

(statearr_32159_35543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (6))){
var inst_32101 = (state_32137[(7)]);
var state_32137__$1 = state_32137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32137__$1,(11),inst_32101);
} else {
if((state_val_32138 === (17))){
var inst_32122 = (state_32137[(2)]);
var state_32137__$1 = state_32137;
if(cljs.core.truth_(inst_32122)){
var statearr_32162_35547 = state_32137__$1;
(statearr_32162_35547[(1)] = (19));

} else {
var statearr_32163_35548 = state_32137__$1;
(statearr_32163_35548[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (3))){
var inst_32135 = (state_32137[(2)]);
var state_32137__$1 = state_32137;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32137__$1,inst_32135);
} else {
if((state_val_32138 === (12))){
var inst_32111 = (state_32137[(10)]);
var state_32137__$1 = state_32137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32137__$1,(14),inst_32111);
} else {
if((state_val_32138 === (2))){
var state_32137__$1 = state_32137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32137__$1,(4),results);
} else {
if((state_val_32138 === (19))){
var state_32137__$1 = state_32137;
var statearr_32164_35551 = state_32137__$1;
(statearr_32164_35551[(2)] = null);

(statearr_32164_35551[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (11))){
var inst_32111 = (state_32137[(2)]);
var state_32137__$1 = (function (){var statearr_32165 = state_32137;
(statearr_32165[(10)] = inst_32111);

return statearr_32165;
})();
var statearr_32166_35554 = state_32137__$1;
(statearr_32166_35554[(2)] = null);

(statearr_32166_35554[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (9))){
var state_32137__$1 = state_32137;
var statearr_32168_35555 = state_32137__$1;
(statearr_32168_35555[(2)] = null);

(statearr_32168_35555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (5))){
var state_32137__$1 = state_32137;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32169_35556 = state_32137__$1;
(statearr_32169_35556[(1)] = (8));

} else {
var statearr_32170_35561 = state_32137__$1;
(statearr_32170_35561[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (14))){
var inst_32114 = (state_32137[(8)]);
var inst_32116 = (state_32137[(11)]);
var inst_32114__$1 = (state_32137[(2)]);
var inst_32115 = (inst_32114__$1 == null);
var inst_32116__$1 = cljs.core.not(inst_32115);
var state_32137__$1 = (function (){var statearr_32174 = state_32137;
(statearr_32174[(8)] = inst_32114__$1);

(statearr_32174[(11)] = inst_32116__$1);

return statearr_32174;
})();
if(inst_32116__$1){
var statearr_32175_35566 = state_32137__$1;
(statearr_32175_35566[(1)] = (15));

} else {
var statearr_32176_35567 = state_32137__$1;
(statearr_32176_35567[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (16))){
var inst_32116 = (state_32137[(11)]);
var state_32137__$1 = state_32137;
var statearr_32177_35569 = state_32137__$1;
(statearr_32177_35569[(2)] = inst_32116);

(statearr_32177_35569[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (10))){
var inst_32108 = (state_32137[(2)]);
var state_32137__$1 = state_32137;
var statearr_32179_35574 = state_32137__$1;
(statearr_32179_35574[(2)] = inst_32108);

(statearr_32179_35574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (18))){
var inst_32119 = (state_32137[(2)]);
var state_32137__$1 = state_32137;
var statearr_32181_35575 = state_32137__$1;
(statearr_32181_35575[(2)] = inst_32119);

(statearr_32181_35575[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (8))){
var inst_32105 = cljs.core.async.close_BANG_(to);
var state_32137__$1 = state_32137;
var statearr_32183_35576 = state_32137__$1;
(statearr_32183_35576[(2)] = inst_32105);

(statearr_32183_35576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____0 = (function (){
var statearr_32187 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32187[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__);

(statearr_32187[(1)] = (1));

return statearr_32187;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____1 = (function (state_32137){
while(true){
var ret_value__30619__auto__ = (function (){try{while(true){
var result__30620__auto__ = switch__30617__auto__(state_32137);
if(cljs.core.keyword_identical_QMARK_(result__30620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30620__auto__;
}
break;
}
}catch (e32193){var ex__30621__auto__ = e32193;
var statearr_32194_35577 = state_32137;
(statearr_32194_35577[(2)] = ex__30621__auto__);


if(cljs.core.seq((state_32137[(4)]))){
var statearr_32196_35578 = state_32137;
(statearr_32196_35578[(1)] = cljs.core.first((state_32137[(4)])));

} else {
throw ex__30621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35579 = state_32137;
state_32137 = G__35579;
continue;
} else {
return ret_value__30619__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__ = function(state_32137){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____1.call(this,state_32137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30618__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30618__auto__;
})()
})();
var state__31400__auto__ = (function (){var statearr_32197 = f__31399__auto__();
(statearr_32197[(6)] = c__31398__auto__);

return statearr_32197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31400__auto__);
}));

return c__31398__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32199 = arguments.length;
switch (G__32199) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32206 = arguments.length;
switch (G__32206) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32231 = arguments.length;
switch (G__32231) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__31398__auto___35597 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31399__auto__ = (function (){var switch__30617__auto__ = (function (state_32265){
var state_val_32266 = (state_32265[(1)]);
if((state_val_32266 === (7))){
var inst_32258 = (state_32265[(2)]);
var state_32265__$1 = state_32265;
var statearr_32275_35598 = state_32265__$1;
(statearr_32275_35598[(2)] = inst_32258);

(statearr_32275_35598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (1))){
var state_32265__$1 = state_32265;
var statearr_32277_35599 = state_32265__$1;
(statearr_32277_35599[(2)] = null);

(statearr_32277_35599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (4))){
var inst_32238 = (state_32265[(7)]);
var inst_32238__$1 = (state_32265[(2)]);
var inst_32239 = (inst_32238__$1 == null);
var state_32265__$1 = (function (){var statearr_32283 = state_32265;
(statearr_32283[(7)] = inst_32238__$1);

return statearr_32283;
})();
if(cljs.core.truth_(inst_32239)){
var statearr_32285_35600 = state_32265__$1;
(statearr_32285_35600[(1)] = (5));

} else {
var statearr_32286_35601 = state_32265__$1;
(statearr_32286_35601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (13))){
var state_32265__$1 = state_32265;
var statearr_32293_35602 = state_32265__$1;
(statearr_32293_35602[(2)] = null);

(statearr_32293_35602[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (6))){
var inst_32238 = (state_32265[(7)]);
var inst_32245 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32238) : p.call(null, inst_32238));
var state_32265__$1 = state_32265;
if(cljs.core.truth_(inst_32245)){
var statearr_32297_35603 = state_32265__$1;
(statearr_32297_35603[(1)] = (9));

} else {
var statearr_32299_35604 = state_32265__$1;
(statearr_32299_35604[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (3))){
var inst_32260 = (state_32265[(2)]);
var state_32265__$1 = state_32265;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32265__$1,inst_32260);
} else {
if((state_val_32266 === (12))){
var state_32265__$1 = state_32265;
var statearr_32301_35609 = state_32265__$1;
(statearr_32301_35609[(2)] = null);

(statearr_32301_35609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (2))){
var state_32265__$1 = state_32265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32265__$1,(4),ch);
} else {
if((state_val_32266 === (11))){
var inst_32238 = (state_32265[(7)]);
var inst_32249 = (state_32265[(2)]);
var state_32265__$1 = state_32265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32265__$1,(8),inst_32249,inst_32238);
} else {
if((state_val_32266 === (9))){
var state_32265__$1 = state_32265;
var statearr_32309_35614 = state_32265__$1;
(statearr_32309_35614[(2)] = tc);

(statearr_32309_35614[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (5))){
var inst_32241 = cljs.core.async.close_BANG_(tc);
var inst_32242 = cljs.core.async.close_BANG_(fc);
var state_32265__$1 = (function (){var statearr_32311 = state_32265;
(statearr_32311[(8)] = inst_32241);

return statearr_32311;
})();
var statearr_32314_35620 = state_32265__$1;
(statearr_32314_35620[(2)] = inst_32242);

(statearr_32314_35620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (14))){
var inst_32256 = (state_32265[(2)]);
var state_32265__$1 = state_32265;
var statearr_32316_35625 = state_32265__$1;
(statearr_32316_35625[(2)] = inst_32256);

(statearr_32316_35625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (10))){
var state_32265__$1 = state_32265;
var statearr_32317_35626 = state_32265__$1;
(statearr_32317_35626[(2)] = fc);

(statearr_32317_35626[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (8))){
var inst_32251 = (state_32265[(2)]);
var state_32265__$1 = state_32265;
if(cljs.core.truth_(inst_32251)){
var statearr_32319_35627 = state_32265__$1;
(statearr_32319_35627[(1)] = (12));

} else {
var statearr_32320_35628 = state_32265__$1;
(statearr_32320_35628[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30618__auto__ = null;
var cljs$core$async$state_machine__30618__auto____0 = (function (){
var statearr_32324 = [null,null,null,null,null,null,null,null,null];
(statearr_32324[(0)] = cljs$core$async$state_machine__30618__auto__);

(statearr_32324[(1)] = (1));

return statearr_32324;
});
var cljs$core$async$state_machine__30618__auto____1 = (function (state_32265){
while(true){
var ret_value__30619__auto__ = (function (){try{while(true){
var result__30620__auto__ = switch__30617__auto__(state_32265);
if(cljs.core.keyword_identical_QMARK_(result__30620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30620__auto__;
}
break;
}
}catch (e32326){var ex__30621__auto__ = e32326;
var statearr_32327_35630 = state_32265;
(statearr_32327_35630[(2)] = ex__30621__auto__);


if(cljs.core.seq((state_32265[(4)]))){
var statearr_32330_35631 = state_32265;
(statearr_32330_35631[(1)] = cljs.core.first((state_32265[(4)])));

} else {
throw ex__30621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35633 = state_32265;
state_32265 = G__35633;
continue;
} else {
return ret_value__30619__auto__;
}
break;
}
});
cljs$core$async$state_machine__30618__auto__ = function(state_32265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30618__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30618__auto____1.call(this,state_32265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30618__auto____0;
cljs$core$async$state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30618__auto____1;
return cljs$core$async$state_machine__30618__auto__;
})()
})();
var state__31400__auto__ = (function (){var statearr_32335 = f__31399__auto__();
(statearr_32335[(6)] = c__31398__auto___35597);

return statearr_32335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31400__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31398__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31399__auto__ = (function (){var switch__30617__auto__ = (function (state_32368){
var state_val_32369 = (state_32368[(1)]);
if((state_val_32369 === (7))){
var inst_32363 = (state_32368[(2)]);
var state_32368__$1 = state_32368;
var statearr_32377_35636 = state_32368__$1;
(statearr_32377_35636[(2)] = inst_32363);

(statearr_32377_35636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (1))){
var inst_32342 = init;
var inst_32344 = inst_32342;
var state_32368__$1 = (function (){var statearr_32384 = state_32368;
(statearr_32384[(7)] = inst_32344);

return statearr_32384;
})();
var statearr_32386_35640 = state_32368__$1;
(statearr_32386_35640[(2)] = null);

(statearr_32386_35640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (4))){
var inst_32349 = (state_32368[(8)]);
var inst_32349__$1 = (state_32368[(2)]);
var inst_32350 = (inst_32349__$1 == null);
var state_32368__$1 = (function (){var statearr_32388 = state_32368;
(statearr_32388[(8)] = inst_32349__$1);

return statearr_32388;
})();
if(cljs.core.truth_(inst_32350)){
var statearr_32389_35641 = state_32368__$1;
(statearr_32389_35641[(1)] = (5));

} else {
var statearr_32390_35642 = state_32368__$1;
(statearr_32390_35642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (6))){
var inst_32344 = (state_32368[(7)]);
var inst_32353 = (state_32368[(9)]);
var inst_32349 = (state_32368[(8)]);
var inst_32353__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32344,inst_32349) : f.call(null, inst_32344,inst_32349));
var inst_32354 = cljs.core.reduced_QMARK_(inst_32353__$1);
var state_32368__$1 = (function (){var statearr_32391 = state_32368;
(statearr_32391[(9)] = inst_32353__$1);

return statearr_32391;
})();
if(inst_32354){
var statearr_32392_35647 = state_32368__$1;
(statearr_32392_35647[(1)] = (8));

} else {
var statearr_32394_35648 = state_32368__$1;
(statearr_32394_35648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (3))){
var inst_32365 = (state_32368[(2)]);
var state_32368__$1 = state_32368;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32368__$1,inst_32365);
} else {
if((state_val_32369 === (2))){
var state_32368__$1 = state_32368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32368__$1,(4),ch);
} else {
if((state_val_32369 === (9))){
var inst_32353 = (state_32368[(9)]);
var inst_32344 = inst_32353;
var state_32368__$1 = (function (){var statearr_32398 = state_32368;
(statearr_32398[(7)] = inst_32344);

return statearr_32398;
})();
var statearr_32399_35652 = state_32368__$1;
(statearr_32399_35652[(2)] = null);

(statearr_32399_35652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (5))){
var inst_32344 = (state_32368[(7)]);
var state_32368__$1 = state_32368;
var statearr_32400_35653 = state_32368__$1;
(statearr_32400_35653[(2)] = inst_32344);

(statearr_32400_35653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (10))){
var inst_32361 = (state_32368[(2)]);
var state_32368__$1 = state_32368;
var statearr_32401_35655 = state_32368__$1;
(statearr_32401_35655[(2)] = inst_32361);

(statearr_32401_35655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32369 === (8))){
var inst_32353 = (state_32368[(9)]);
var inst_32357 = cljs.core.deref(inst_32353);
var state_32368__$1 = state_32368;
var statearr_32405_35662 = state_32368__$1;
(statearr_32405_35662[(2)] = inst_32357);

(statearr_32405_35662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30618__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30618__auto____0 = (function (){
var statearr_32408 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32408[(0)] = cljs$core$async$reduce_$_state_machine__30618__auto__);

(statearr_32408[(1)] = (1));

return statearr_32408;
});
var cljs$core$async$reduce_$_state_machine__30618__auto____1 = (function (state_32368){
while(true){
var ret_value__30619__auto__ = (function (){try{while(true){
var result__30620__auto__ = switch__30617__auto__(state_32368);
if(cljs.core.keyword_identical_QMARK_(result__30620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30620__auto__;
}
break;
}
}catch (e32409){var ex__30621__auto__ = e32409;
var statearr_32410_35664 = state_32368;
(statearr_32410_35664[(2)] = ex__30621__auto__);


if(cljs.core.seq((state_32368[(4)]))){
var statearr_32413_35665 = state_32368;
(statearr_32413_35665[(1)] = cljs.core.first((state_32368[(4)])));

} else {
throw ex__30621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35666 = state_32368;
state_32368 = G__35666;
continue;
} else {
return ret_value__30619__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30618__auto__ = function(state_32368){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30618__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30618__auto____1.call(this,state_32368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30618__auto____0;
cljs$core$async$reduce_$_state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30618__auto____1;
return cljs$core$async$reduce_$_state_machine__30618__auto__;
})()
})();
var state__31400__auto__ = (function (){var statearr_32415 = f__31399__auto__();
(statearr_32415[(6)] = c__31398__auto__);

return statearr_32415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31400__auto__);
}));

return c__31398__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__31398__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31399__auto__ = (function (){var switch__30617__auto__ = (function (state_32425){
var state_val_32426 = (state_32425[(1)]);
if((state_val_32426 === (1))){
var inst_32420 = cljs.core.async.reduce(f__$1,init,ch);
var state_32425__$1 = state_32425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32425__$1,(2),inst_32420);
} else {
if((state_val_32426 === (2))){
var inst_32422 = (state_32425[(2)]);
var inst_32423 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32422) : f__$1.call(null, inst_32422));
var state_32425__$1 = state_32425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32425__$1,inst_32423);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30618__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30618__auto____0 = (function (){
var statearr_32433 = [null,null,null,null,null,null,null];
(statearr_32433[(0)] = cljs$core$async$transduce_$_state_machine__30618__auto__);

(statearr_32433[(1)] = (1));

return statearr_32433;
});
var cljs$core$async$transduce_$_state_machine__30618__auto____1 = (function (state_32425){
while(true){
var ret_value__30619__auto__ = (function (){try{while(true){
var result__30620__auto__ = switch__30617__auto__(state_32425);
if(cljs.core.keyword_identical_QMARK_(result__30620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30620__auto__;
}
break;
}
}catch (e32435){var ex__30621__auto__ = e32435;
var statearr_32436_35668 = state_32425;
(statearr_32436_35668[(2)] = ex__30621__auto__);


if(cljs.core.seq((state_32425[(4)]))){
var statearr_32437_35671 = state_32425;
(statearr_32437_35671[(1)] = cljs.core.first((state_32425[(4)])));

} else {
throw ex__30621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35672 = state_32425;
state_32425 = G__35672;
continue;
} else {
return ret_value__30619__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30618__auto__ = function(state_32425){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30618__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30618__auto____1.call(this,state_32425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30618__auto____0;
cljs$core$async$transduce_$_state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30618__auto____1;
return cljs$core$async$transduce_$_state_machine__30618__auto__;
})()
})();
var state__31400__auto__ = (function (){var statearr_32445 = f__31399__auto__();
(statearr_32445[(6)] = c__31398__auto__);

return statearr_32445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31400__auto__);
}));

return c__31398__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__32450 = arguments.length;
switch (G__32450) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31398__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31399__auto__ = (function (){var switch__30617__auto__ = (function (state_32484){
var state_val_32485 = (state_32484[(1)]);
if((state_val_32485 === (7))){
var inst_32465 = (state_32484[(2)]);
var state_32484__$1 = state_32484;
var statearr_32499_35678 = state_32484__$1;
(statearr_32499_35678[(2)] = inst_32465);

(statearr_32499_35678[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32485 === (1))){
var inst_32455 = cljs.core.seq(coll);
var inst_32456 = inst_32455;
var state_32484__$1 = (function (){var statearr_32512 = state_32484;
(statearr_32512[(7)] = inst_32456);

return statearr_32512;
})();
var statearr_32516_35679 = state_32484__$1;
(statearr_32516_35679[(2)] = null);

(statearr_32516_35679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32485 === (4))){
var inst_32456 = (state_32484[(7)]);
var inst_32463 = cljs.core.first(inst_32456);
var state_32484__$1 = state_32484;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32484__$1,(7),ch,inst_32463);
} else {
if((state_val_32485 === (13))){
var inst_32477 = (state_32484[(2)]);
var state_32484__$1 = state_32484;
var statearr_32530_35680 = state_32484__$1;
(statearr_32530_35680[(2)] = inst_32477);

(statearr_32530_35680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32485 === (6))){
var inst_32468 = (state_32484[(2)]);
var state_32484__$1 = state_32484;
if(cljs.core.truth_(inst_32468)){
var statearr_32534_35681 = state_32484__$1;
(statearr_32534_35681[(1)] = (8));

} else {
var statearr_32535_35682 = state_32484__$1;
(statearr_32535_35682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32485 === (3))){
var inst_32481 = (state_32484[(2)]);
var state_32484__$1 = state_32484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32484__$1,inst_32481);
} else {
if((state_val_32485 === (12))){
var state_32484__$1 = state_32484;
var statearr_32539_35683 = state_32484__$1;
(statearr_32539_35683[(2)] = null);

(statearr_32539_35683[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32485 === (2))){
var inst_32456 = (state_32484[(7)]);
var state_32484__$1 = state_32484;
if(cljs.core.truth_(inst_32456)){
var statearr_32540_35684 = state_32484__$1;
(statearr_32540_35684[(1)] = (4));

} else {
var statearr_32541_35685 = state_32484__$1;
(statearr_32541_35685[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32485 === (11))){
var inst_32474 = cljs.core.async.close_BANG_(ch);
var state_32484__$1 = state_32484;
var statearr_32542_35686 = state_32484__$1;
(statearr_32542_35686[(2)] = inst_32474);

(statearr_32542_35686[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32485 === (9))){
var state_32484__$1 = state_32484;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32543_35687 = state_32484__$1;
(statearr_32543_35687[(1)] = (11));

} else {
var statearr_32544_35688 = state_32484__$1;
(statearr_32544_35688[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32485 === (5))){
var inst_32456 = (state_32484[(7)]);
var state_32484__$1 = state_32484;
var statearr_32545_35689 = state_32484__$1;
(statearr_32545_35689[(2)] = inst_32456);

(statearr_32545_35689[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32485 === (10))){
var inst_32479 = (state_32484[(2)]);
var state_32484__$1 = state_32484;
var statearr_32546_35694 = state_32484__$1;
(statearr_32546_35694[(2)] = inst_32479);

(statearr_32546_35694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32485 === (8))){
var inst_32456 = (state_32484[(7)]);
var inst_32470 = cljs.core.next(inst_32456);
var inst_32456__$1 = inst_32470;
var state_32484__$1 = (function (){var statearr_32547 = state_32484;
(statearr_32547[(7)] = inst_32456__$1);

return statearr_32547;
})();
var statearr_32548_35697 = state_32484__$1;
(statearr_32548_35697[(2)] = null);

(statearr_32548_35697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30618__auto__ = null;
var cljs$core$async$state_machine__30618__auto____0 = (function (){
var statearr_32565 = [null,null,null,null,null,null,null,null];
(statearr_32565[(0)] = cljs$core$async$state_machine__30618__auto__);

(statearr_32565[(1)] = (1));

return statearr_32565;
});
var cljs$core$async$state_machine__30618__auto____1 = (function (state_32484){
while(true){
var ret_value__30619__auto__ = (function (){try{while(true){
var result__30620__auto__ = switch__30617__auto__(state_32484);
if(cljs.core.keyword_identical_QMARK_(result__30620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30620__auto__;
}
break;
}
}catch (e32566){var ex__30621__auto__ = e32566;
var statearr_32568_35699 = state_32484;
(statearr_32568_35699[(2)] = ex__30621__auto__);


if(cljs.core.seq((state_32484[(4)]))){
var statearr_32578_35700 = state_32484;
(statearr_32578_35700[(1)] = cljs.core.first((state_32484[(4)])));

} else {
throw ex__30621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35702 = state_32484;
state_32484 = G__35702;
continue;
} else {
return ret_value__30619__auto__;
}
break;
}
});
cljs$core$async$state_machine__30618__auto__ = function(state_32484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30618__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30618__auto____1.call(this,state_32484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30618__auto____0;
cljs$core$async$state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30618__auto____1;
return cljs$core$async$state_machine__30618__auto__;
})()
})();
var state__31400__auto__ = (function (){var statearr_32591 = f__31399__auto__();
(statearr_32591[(6)] = c__31398__auto__);

return statearr_32591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31400__auto__);
}));

return c__31398__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32605 = arguments.length;
switch (G__32605) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35709 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null, _));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35709(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35714 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35714(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35718 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null, m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35718(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35723 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null, m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35723(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32692 = (function (ch,cs,meta32693){
this.ch = ch;
this.cs = cs;
this.meta32693 = meta32693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32694,meta32693__$1){
var self__ = this;
var _32694__$1 = this;
return (new cljs.core.async.t_cljs$core$async32692(self__.ch,self__.cs,meta32693__$1));
}));

(cljs.core.async.t_cljs$core$async32692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32694){
var self__ = this;
var _32694__$1 = this;
return self__.meta32693;
}));

(cljs.core.async.t_cljs$core$async32692.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32692.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32692.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32692.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32692.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32692.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32693","meta32693",174096489,null)], null);
}));

(cljs.core.async.t_cljs$core$async32692.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32692");

(cljs.core.async.t_cljs$core$async32692.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32692");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32692.
 */
cljs.core.async.__GT_t_cljs$core$async32692 = (function cljs$core$async$__GT_t_cljs$core$async32692(ch,cs,meta32693){
return (new cljs.core.async.t_cljs$core$async32692(ch,cs,meta32693));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async32692(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__31398__auto___35739 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31399__auto__ = (function (){var switch__30617__auto__ = (function (state_32890){
var state_val_32894 = (state_32890[(1)]);
if((state_val_32894 === (7))){
var inst_32886 = (state_32890[(2)]);
var state_32890__$1 = state_32890;
var statearr_32896_35740 = state_32890__$1;
(statearr_32896_35740[(2)] = inst_32886);

(statearr_32896_35740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (20))){
var inst_32764 = (state_32890[(7)]);
var inst_32781 = cljs.core.first(inst_32764);
var inst_32783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32781,(0),null);
var inst_32787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32781,(1),null);
var state_32890__$1 = (function (){var statearr_32898 = state_32890;
(statearr_32898[(8)] = inst_32783);

return statearr_32898;
})();
if(cljs.core.truth_(inst_32787)){
var statearr_32901_35741 = state_32890__$1;
(statearr_32901_35741[(1)] = (22));

} else {
var statearr_32902_35742 = state_32890__$1;
(statearr_32902_35742[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (27))){
var inst_32821 = (state_32890[(9)]);
var inst_32826 = (state_32890[(10)]);
var inst_32728 = (state_32890[(11)]);
var inst_32819 = (state_32890[(12)]);
var inst_32826__$1 = cljs.core._nth(inst_32819,inst_32821);
var inst_32830 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32826__$1,inst_32728,done);
var state_32890__$1 = (function (){var statearr_32903 = state_32890;
(statearr_32903[(10)] = inst_32826__$1);

return statearr_32903;
})();
if(cljs.core.truth_(inst_32830)){
var statearr_32904_35746 = state_32890__$1;
(statearr_32904_35746[(1)] = (30));

} else {
var statearr_32905_35747 = state_32890__$1;
(statearr_32905_35747[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (1))){
var state_32890__$1 = state_32890;
var statearr_32906_35748 = state_32890__$1;
(statearr_32906_35748[(2)] = null);

(statearr_32906_35748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (24))){
var inst_32764 = (state_32890[(7)]);
var inst_32795 = (state_32890[(2)]);
var inst_32796 = cljs.core.next(inst_32764);
var inst_32740 = inst_32796;
var inst_32741 = null;
var inst_32742 = (0);
var inst_32743 = (0);
var state_32890__$1 = (function (){var statearr_32914 = state_32890;
(statearr_32914[(13)] = inst_32742);

(statearr_32914[(14)] = inst_32740);

(statearr_32914[(15)] = inst_32743);

(statearr_32914[(16)] = inst_32741);

(statearr_32914[(17)] = inst_32795);

return statearr_32914;
})();
var statearr_32915_35749 = state_32890__$1;
(statearr_32915_35749[(2)] = null);

(statearr_32915_35749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (39))){
var state_32890__$1 = state_32890;
var statearr_32923_35750 = state_32890__$1;
(statearr_32923_35750[(2)] = null);

(statearr_32923_35750[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (4))){
var inst_32728 = (state_32890[(11)]);
var inst_32728__$1 = (state_32890[(2)]);
var inst_32729 = (inst_32728__$1 == null);
var state_32890__$1 = (function (){var statearr_32925 = state_32890;
(statearr_32925[(11)] = inst_32728__$1);

return statearr_32925;
})();
if(cljs.core.truth_(inst_32729)){
var statearr_32926_35751 = state_32890__$1;
(statearr_32926_35751[(1)] = (5));

} else {
var statearr_32930_35752 = state_32890__$1;
(statearr_32930_35752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (15))){
var inst_32742 = (state_32890[(13)]);
var inst_32740 = (state_32890[(14)]);
var inst_32743 = (state_32890[(15)]);
var inst_32741 = (state_32890[(16)]);
var inst_32760 = (state_32890[(2)]);
var inst_32761 = (inst_32743 + (1));
var tmp32917 = inst_32742;
var tmp32918 = inst_32740;
var tmp32919 = inst_32741;
var inst_32740__$1 = tmp32918;
var inst_32741__$1 = tmp32919;
var inst_32742__$1 = tmp32917;
var inst_32743__$1 = inst_32761;
var state_32890__$1 = (function (){var statearr_32949 = state_32890;
(statearr_32949[(13)] = inst_32742__$1);

(statearr_32949[(14)] = inst_32740__$1);

(statearr_32949[(18)] = inst_32760);

(statearr_32949[(15)] = inst_32743__$1);

(statearr_32949[(16)] = inst_32741__$1);

return statearr_32949;
})();
var statearr_32953_35754 = state_32890__$1;
(statearr_32953_35754[(2)] = null);

(statearr_32953_35754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (21))){
var inst_32799 = (state_32890[(2)]);
var state_32890__$1 = state_32890;
var statearr_32959_35756 = state_32890__$1;
(statearr_32959_35756[(2)] = inst_32799);

(statearr_32959_35756[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (31))){
var inst_32826 = (state_32890[(10)]);
var inst_32833 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_32826);
var state_32890__$1 = state_32890;
var statearr_32960_35760 = state_32890__$1;
(statearr_32960_35760[(2)] = inst_32833);

(statearr_32960_35760[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (32))){
var inst_32821 = (state_32890[(9)]);
var inst_32818 = (state_32890[(19)]);
var inst_32820 = (state_32890[(20)]);
var inst_32819 = (state_32890[(12)]);
var inst_32835 = (state_32890[(2)]);
var inst_32838 = (inst_32821 + (1));
var tmp32956 = inst_32818;
var tmp32957 = inst_32820;
var tmp32958 = inst_32819;
var inst_32818__$1 = tmp32956;
var inst_32819__$1 = tmp32958;
var inst_32820__$1 = tmp32957;
var inst_32821__$1 = inst_32838;
var state_32890__$1 = (function (){var statearr_32966 = state_32890;
(statearr_32966[(9)] = inst_32821__$1);

(statearr_32966[(19)] = inst_32818__$1);

(statearr_32966[(21)] = inst_32835);

(statearr_32966[(20)] = inst_32820__$1);

(statearr_32966[(12)] = inst_32819__$1);

return statearr_32966;
})();
var statearr_32967_35761 = state_32890__$1;
(statearr_32967_35761[(2)] = null);

(statearr_32967_35761[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (40))){
var inst_32853 = (state_32890[(22)]);
var inst_32858 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_32853);
var state_32890__$1 = state_32890;
var statearr_32972_35762 = state_32890__$1;
(statearr_32972_35762[(2)] = inst_32858);

(statearr_32972_35762[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (33))){
var inst_32841 = (state_32890[(23)]);
var inst_32843 = cljs.core.chunked_seq_QMARK_(inst_32841);
var state_32890__$1 = state_32890;
if(inst_32843){
var statearr_32974_35764 = state_32890__$1;
(statearr_32974_35764[(1)] = (36));

} else {
var statearr_32975_35765 = state_32890__$1;
(statearr_32975_35765[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (13))){
var inst_32753 = (state_32890[(24)]);
var inst_32756 = cljs.core.async.close_BANG_(inst_32753);
var state_32890__$1 = state_32890;
var statearr_32977_35766 = state_32890__$1;
(statearr_32977_35766[(2)] = inst_32756);

(statearr_32977_35766[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (22))){
var inst_32783 = (state_32890[(8)]);
var inst_32789 = cljs.core.async.close_BANG_(inst_32783);
var state_32890__$1 = state_32890;
var statearr_32978_35767 = state_32890__$1;
(statearr_32978_35767[(2)] = inst_32789);

(statearr_32978_35767[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (36))){
var inst_32841 = (state_32890[(23)]);
var inst_32845 = cljs.core.chunk_first(inst_32841);
var inst_32846 = cljs.core.chunk_rest(inst_32841);
var inst_32847 = cljs.core.count(inst_32845);
var inst_32818 = inst_32846;
var inst_32819 = inst_32845;
var inst_32820 = inst_32847;
var inst_32821 = (0);
var state_32890__$1 = (function (){var statearr_32982 = state_32890;
(statearr_32982[(9)] = inst_32821);

(statearr_32982[(19)] = inst_32818);

(statearr_32982[(20)] = inst_32820);

(statearr_32982[(12)] = inst_32819);

return statearr_32982;
})();
var statearr_32983_35768 = state_32890__$1;
(statearr_32983_35768[(2)] = null);

(statearr_32983_35768[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (41))){
var inst_32841 = (state_32890[(23)]);
var inst_32862 = (state_32890[(2)]);
var inst_32863 = cljs.core.next(inst_32841);
var inst_32818 = inst_32863;
var inst_32819 = null;
var inst_32820 = (0);
var inst_32821 = (0);
var state_32890__$1 = (function (){var statearr_32984 = state_32890;
(statearr_32984[(9)] = inst_32821);

(statearr_32984[(19)] = inst_32818);

(statearr_32984[(20)] = inst_32820);

(statearr_32984[(25)] = inst_32862);

(statearr_32984[(12)] = inst_32819);

return statearr_32984;
})();
var statearr_32986_35769 = state_32890__$1;
(statearr_32986_35769[(2)] = null);

(statearr_32986_35769[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (43))){
var state_32890__$1 = state_32890;
var statearr_32991_35770 = state_32890__$1;
(statearr_32991_35770[(2)] = null);

(statearr_32991_35770[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (29))){
var inst_32874 = (state_32890[(2)]);
var state_32890__$1 = state_32890;
var statearr_32997_35771 = state_32890__$1;
(statearr_32997_35771[(2)] = inst_32874);

(statearr_32997_35771[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (44))){
var inst_32883 = (state_32890[(2)]);
var state_32890__$1 = (function (){var statearr_32999 = state_32890;
(statearr_32999[(26)] = inst_32883);

return statearr_32999;
})();
var statearr_33000_35772 = state_32890__$1;
(statearr_33000_35772[(2)] = null);

(statearr_33000_35772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (6))){
var inst_32810 = (state_32890[(27)]);
var inst_32809 = cljs.core.deref(cs);
var inst_32810__$1 = cljs.core.keys(inst_32809);
var inst_32811 = cljs.core.count(inst_32810__$1);
var inst_32812 = cljs.core.reset_BANG_(dctr,inst_32811);
var inst_32817 = cljs.core.seq(inst_32810__$1);
var inst_32818 = inst_32817;
var inst_32819 = null;
var inst_32820 = (0);
var inst_32821 = (0);
var state_32890__$1 = (function (){var statearr_33003 = state_32890;
(statearr_33003[(9)] = inst_32821);

(statearr_33003[(19)] = inst_32818);

(statearr_33003[(28)] = inst_32812);

(statearr_33003[(20)] = inst_32820);

(statearr_33003[(27)] = inst_32810__$1);

(statearr_33003[(12)] = inst_32819);

return statearr_33003;
})();
var statearr_33011_35773 = state_32890__$1;
(statearr_33011_35773[(2)] = null);

(statearr_33011_35773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (28))){
var inst_32818 = (state_32890[(19)]);
var inst_32841 = (state_32890[(23)]);
var inst_32841__$1 = cljs.core.seq(inst_32818);
var state_32890__$1 = (function (){var statearr_33015 = state_32890;
(statearr_33015[(23)] = inst_32841__$1);

return statearr_33015;
})();
if(inst_32841__$1){
var statearr_33016_35776 = state_32890__$1;
(statearr_33016_35776[(1)] = (33));

} else {
var statearr_33017_35778 = state_32890__$1;
(statearr_33017_35778[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (25))){
var inst_32821 = (state_32890[(9)]);
var inst_32820 = (state_32890[(20)]);
var inst_32823 = (inst_32821 < inst_32820);
var inst_32824 = inst_32823;
var state_32890__$1 = state_32890;
if(cljs.core.truth_(inst_32824)){
var statearr_33024_35784 = state_32890__$1;
(statearr_33024_35784[(1)] = (27));

} else {
var statearr_33026_35785 = state_32890__$1;
(statearr_33026_35785[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (34))){
var state_32890__$1 = state_32890;
var statearr_33028_35786 = state_32890__$1;
(statearr_33028_35786[(2)] = null);

(statearr_33028_35786[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (17))){
var state_32890__$1 = state_32890;
var statearr_33033_35788 = state_32890__$1;
(statearr_33033_35788[(2)] = null);

(statearr_33033_35788[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (3))){
var inst_32888 = (state_32890[(2)]);
var state_32890__$1 = state_32890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32890__$1,inst_32888);
} else {
if((state_val_32894 === (12))){
var inst_32805 = (state_32890[(2)]);
var state_32890__$1 = state_32890;
var statearr_33034_35790 = state_32890__$1;
(statearr_33034_35790[(2)] = inst_32805);

(statearr_33034_35790[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (2))){
var state_32890__$1 = state_32890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32890__$1,(4),ch);
} else {
if((state_val_32894 === (23))){
var state_32890__$1 = state_32890;
var statearr_33035_35791 = state_32890__$1;
(statearr_33035_35791[(2)] = null);

(statearr_33035_35791[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (35))){
var inst_32872 = (state_32890[(2)]);
var state_32890__$1 = state_32890;
var statearr_33099_35792 = state_32890__$1;
(statearr_33099_35792[(2)] = inst_32872);

(statearr_33099_35792[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (19))){
var inst_32764 = (state_32890[(7)]);
var inst_32772 = cljs.core.chunk_first(inst_32764);
var inst_32773 = cljs.core.chunk_rest(inst_32764);
var inst_32774 = cljs.core.count(inst_32772);
var inst_32740 = inst_32773;
var inst_32741 = inst_32772;
var inst_32742 = inst_32774;
var inst_32743 = (0);
var state_32890__$1 = (function (){var statearr_33100 = state_32890;
(statearr_33100[(13)] = inst_32742);

(statearr_33100[(14)] = inst_32740);

(statearr_33100[(15)] = inst_32743);

(statearr_33100[(16)] = inst_32741);

return statearr_33100;
})();
var statearr_33101_35793 = state_32890__$1;
(statearr_33101_35793[(2)] = null);

(statearr_33101_35793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (11))){
var inst_32740 = (state_32890[(14)]);
var inst_32764 = (state_32890[(7)]);
var inst_32764__$1 = cljs.core.seq(inst_32740);
var state_32890__$1 = (function (){var statearr_33106 = state_32890;
(statearr_33106[(7)] = inst_32764__$1);

return statearr_33106;
})();
if(inst_32764__$1){
var statearr_33111_35794 = state_32890__$1;
(statearr_33111_35794[(1)] = (16));

} else {
var statearr_33112_35795 = state_32890__$1;
(statearr_33112_35795[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (9))){
var inst_32807 = (state_32890[(2)]);
var state_32890__$1 = state_32890;
var statearr_33114_35796 = state_32890__$1;
(statearr_33114_35796[(2)] = inst_32807);

(statearr_33114_35796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (5))){
var inst_32738 = cljs.core.deref(cs);
var inst_32739 = cljs.core.seq(inst_32738);
var inst_32740 = inst_32739;
var inst_32741 = null;
var inst_32742 = (0);
var inst_32743 = (0);
var state_32890__$1 = (function (){var statearr_33118 = state_32890;
(statearr_33118[(13)] = inst_32742);

(statearr_33118[(14)] = inst_32740);

(statearr_33118[(15)] = inst_32743);

(statearr_33118[(16)] = inst_32741);

return statearr_33118;
})();
var statearr_33119_35798 = state_32890__$1;
(statearr_33119_35798[(2)] = null);

(statearr_33119_35798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (14))){
var state_32890__$1 = state_32890;
var statearr_33121_35799 = state_32890__$1;
(statearr_33121_35799[(2)] = null);

(statearr_33121_35799[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (45))){
var inst_32880 = (state_32890[(2)]);
var state_32890__$1 = state_32890;
var statearr_33124_35804 = state_32890__$1;
(statearr_33124_35804[(2)] = inst_32880);

(statearr_33124_35804[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (26))){
var inst_32810 = (state_32890[(27)]);
var inst_32876 = (state_32890[(2)]);
var inst_32877 = cljs.core.seq(inst_32810);
var state_32890__$1 = (function (){var statearr_33127 = state_32890;
(statearr_33127[(29)] = inst_32876);

return statearr_33127;
})();
if(inst_32877){
var statearr_33128_35805 = state_32890__$1;
(statearr_33128_35805[(1)] = (42));

} else {
var statearr_33129_35806 = state_32890__$1;
(statearr_33129_35806[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (16))){
var inst_32764 = (state_32890[(7)]);
var inst_32770 = cljs.core.chunked_seq_QMARK_(inst_32764);
var state_32890__$1 = state_32890;
if(inst_32770){
var statearr_33130_35807 = state_32890__$1;
(statearr_33130_35807[(1)] = (19));

} else {
var statearr_33131_35808 = state_32890__$1;
(statearr_33131_35808[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (38))){
var inst_32866 = (state_32890[(2)]);
var state_32890__$1 = state_32890;
var statearr_33136_35809 = state_32890__$1;
(statearr_33136_35809[(2)] = inst_32866);

(statearr_33136_35809[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (30))){
var state_32890__$1 = state_32890;
var statearr_33137_35813 = state_32890__$1;
(statearr_33137_35813[(2)] = null);

(statearr_33137_35813[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (10))){
var inst_32743 = (state_32890[(15)]);
var inst_32741 = (state_32890[(16)]);
var inst_32752 = cljs.core._nth(inst_32741,inst_32743);
var inst_32753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32752,(0),null);
var inst_32754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32752,(1),null);
var state_32890__$1 = (function (){var statearr_33138 = state_32890;
(statearr_33138[(24)] = inst_32753);

return statearr_33138;
})();
if(cljs.core.truth_(inst_32754)){
var statearr_33139_35816 = state_32890__$1;
(statearr_33139_35816[(1)] = (13));

} else {
var statearr_33140_35818 = state_32890__$1;
(statearr_33140_35818[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (18))){
var inst_32802 = (state_32890[(2)]);
var state_32890__$1 = state_32890;
var statearr_33141_35819 = state_32890__$1;
(statearr_33141_35819[(2)] = inst_32802);

(statearr_33141_35819[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (42))){
var state_32890__$1 = state_32890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32890__$1,(45),dchan);
} else {
if((state_val_32894 === (37))){
var inst_32853 = (state_32890[(22)]);
var inst_32728 = (state_32890[(11)]);
var inst_32841 = (state_32890[(23)]);
var inst_32853__$1 = cljs.core.first(inst_32841);
var inst_32854 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32853__$1,inst_32728,done);
var state_32890__$1 = (function (){var statearr_33142 = state_32890;
(statearr_33142[(22)] = inst_32853__$1);

return statearr_33142;
})();
if(cljs.core.truth_(inst_32854)){
var statearr_33144_35823 = state_32890__$1;
(statearr_33144_35823[(1)] = (39));

} else {
var statearr_33145_35824 = state_32890__$1;
(statearr_33145_35824[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (8))){
var inst_32742 = (state_32890[(13)]);
var inst_32743 = (state_32890[(15)]);
var inst_32746 = (inst_32743 < inst_32742);
var inst_32747 = inst_32746;
var state_32890__$1 = state_32890;
if(cljs.core.truth_(inst_32747)){
var statearr_33147_35825 = state_32890__$1;
(statearr_33147_35825[(1)] = (10));

} else {
var statearr_33148_35826 = state_32890__$1;
(statearr_33148_35826[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30618__auto__ = null;
var cljs$core$async$mult_$_state_machine__30618__auto____0 = (function (){
var statearr_33157 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33157[(0)] = cljs$core$async$mult_$_state_machine__30618__auto__);

(statearr_33157[(1)] = (1));

return statearr_33157;
});
var cljs$core$async$mult_$_state_machine__30618__auto____1 = (function (state_32890){
while(true){
var ret_value__30619__auto__ = (function (){try{while(true){
var result__30620__auto__ = switch__30617__auto__(state_32890);
if(cljs.core.keyword_identical_QMARK_(result__30620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30620__auto__;
}
break;
}
}catch (e33161){var ex__30621__auto__ = e33161;
var statearr_33162_35832 = state_32890;
(statearr_33162_35832[(2)] = ex__30621__auto__);


if(cljs.core.seq((state_32890[(4)]))){
var statearr_33163_35833 = state_32890;
(statearr_33163_35833[(1)] = cljs.core.first((state_32890[(4)])));

} else {
throw ex__30621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35835 = state_32890;
state_32890 = G__35835;
continue;
} else {
return ret_value__30619__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30618__auto__ = function(state_32890){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30618__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30618__auto____1.call(this,state_32890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30618__auto____0;
cljs$core$async$mult_$_state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30618__auto____1;
return cljs$core$async$mult_$_state_machine__30618__auto__;
})()
})();
var state__31400__auto__ = (function (){var statearr_33164 = f__31399__auto__();
(statearr_33164[(6)] = c__31398__auto___35739);

return statearr_33164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31400__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33173 = arguments.length;
switch (G__33173) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35843 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null, m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35843(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35844 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null, m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35844(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35850 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null, m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35850(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35851 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null, m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35851(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35856 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null, m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35856(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35858 = arguments.length;
var i__5770__auto___35859 = (0);
while(true){
if((i__5770__auto___35859 < len__5769__auto___35858)){
args__5775__auto__.push((arguments[i__5770__auto___35859]));

var G__35860 = (i__5770__auto___35859 + (1));
i__5770__auto___35859 = G__35860;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33225){
var map__33226 = p__33225;
var map__33226__$1 = cljs.core.__destructure_map(map__33226);
var opts = map__33226__$1;
var statearr_33227_35861 = state;
(statearr_33227_35861[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33228_35862 = state;
(statearr_33228_35862[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_33231_35863 = state;
(statearr_33231_35863[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33217){
var G__33218 = cljs.core.first(seq33217);
var seq33217__$1 = cljs.core.next(seq33217);
var G__33219 = cljs.core.first(seq33217__$1);
var seq33217__$2 = cljs.core.next(seq33217__$1);
var G__33220 = cljs.core.first(seq33217__$2);
var seq33217__$3 = cljs.core.next(seq33217__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33218,G__33219,G__33220,seq33217__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33242 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33243){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33243 = meta33243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33244,meta33243__$1){
var self__ = this;
var _33244__$1 = this;
return (new cljs.core.async.t_cljs$core$async33242(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33243__$1));
}));

(cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33244){
var self__ = this;
var _33244__$1 = this;
return self__.meta33243;
}));

(cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async33242.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async33242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33243","meta33243",732534308,null)], null);
}));

(cljs.core.async.t_cljs$core$async33242.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33242.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33242");

(cljs.core.async.t_cljs$core$async33242.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33242");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33242.
 */
cljs.core.async.__GT_t_cljs$core$async33242 = (function cljs$core$async$__GT_t_cljs$core$async33242(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33243){
return (new cljs.core.async.t_cljs$core$async33242(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33243));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async33242(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__31398__auto___35869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31399__auto__ = (function (){var switch__30617__auto__ = (function (state_33330){
var state_val_33331 = (state_33330[(1)]);
if((state_val_33331 === (7))){
var inst_33286 = (state_33330[(2)]);
var state_33330__$1 = state_33330;
if(cljs.core.truth_(inst_33286)){
var statearr_33340_35870 = state_33330__$1;
(statearr_33340_35870[(1)] = (8));

} else {
var statearr_33341_35871 = state_33330__$1;
(statearr_33341_35871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (20))){
var inst_33279 = (state_33330[(7)]);
var state_33330__$1 = state_33330;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33330__$1,(23),out,inst_33279);
} else {
if((state_val_33331 === (1))){
var inst_33260 = calc_state();
var inst_33261 = cljs.core.__destructure_map(inst_33260);
var inst_33262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33261,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33261,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33261,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33265 = inst_33260;
var state_33330__$1 = (function (){var statearr_33342 = state_33330;
(statearr_33342[(8)] = inst_33263);

(statearr_33342[(9)] = inst_33264);

(statearr_33342[(10)] = inst_33262);

(statearr_33342[(11)] = inst_33265);

return statearr_33342;
})();
var statearr_33343_35872 = state_33330__$1;
(statearr_33343_35872[(2)] = null);

(statearr_33343_35872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (24))){
var inst_33270 = (state_33330[(12)]);
var inst_33265 = inst_33270;
var state_33330__$1 = (function (){var statearr_33344 = state_33330;
(statearr_33344[(11)] = inst_33265);

return statearr_33344;
})();
var statearr_33345_35873 = state_33330__$1;
(statearr_33345_35873[(2)] = null);

(statearr_33345_35873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (4))){
var inst_33281 = (state_33330[(13)]);
var inst_33279 = (state_33330[(7)]);
var inst_33278 = (state_33330[(2)]);
var inst_33279__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33278,(0),null);
var inst_33280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33278,(1),null);
var inst_33281__$1 = (inst_33279__$1 == null);
var state_33330__$1 = (function (){var statearr_33347 = state_33330;
(statearr_33347[(14)] = inst_33280);

(statearr_33347[(13)] = inst_33281__$1);

(statearr_33347[(7)] = inst_33279__$1);

return statearr_33347;
})();
if(cljs.core.truth_(inst_33281__$1)){
var statearr_33348_35874 = state_33330__$1;
(statearr_33348_35874[(1)] = (5));

} else {
var statearr_33349_35875 = state_33330__$1;
(statearr_33349_35875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (15))){
var inst_33271 = (state_33330[(15)]);
var inst_33300 = (state_33330[(16)]);
var inst_33300__$1 = cljs.core.empty_QMARK_(inst_33271);
var state_33330__$1 = (function (){var statearr_33352 = state_33330;
(statearr_33352[(16)] = inst_33300__$1);

return statearr_33352;
})();
if(inst_33300__$1){
var statearr_33354_35876 = state_33330__$1;
(statearr_33354_35876[(1)] = (17));

} else {
var statearr_33355_35877 = state_33330__$1;
(statearr_33355_35877[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (21))){
var inst_33270 = (state_33330[(12)]);
var inst_33265 = inst_33270;
var state_33330__$1 = (function (){var statearr_33359 = state_33330;
(statearr_33359[(11)] = inst_33265);

return statearr_33359;
})();
var statearr_33360_35878 = state_33330__$1;
(statearr_33360_35878[(2)] = null);

(statearr_33360_35878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (13))){
var inst_33293 = (state_33330[(2)]);
var inst_33294 = calc_state();
var inst_33265 = inst_33294;
var state_33330__$1 = (function (){var statearr_33361 = state_33330;
(statearr_33361[(11)] = inst_33265);

(statearr_33361[(17)] = inst_33293);

return statearr_33361;
})();
var statearr_33362_35879 = state_33330__$1;
(statearr_33362_35879[(2)] = null);

(statearr_33362_35879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (22))){
var inst_33320 = (state_33330[(2)]);
var state_33330__$1 = state_33330;
var statearr_33365_35880 = state_33330__$1;
(statearr_33365_35880[(2)] = inst_33320);

(statearr_33365_35880[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (6))){
var inst_33280 = (state_33330[(14)]);
var inst_33284 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33280,change);
var state_33330__$1 = state_33330;
var statearr_33372_35881 = state_33330__$1;
(statearr_33372_35881[(2)] = inst_33284);

(statearr_33372_35881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (25))){
var state_33330__$1 = state_33330;
var statearr_33374_35882 = state_33330__$1;
(statearr_33374_35882[(2)] = null);

(statearr_33374_35882[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (17))){
var inst_33280 = (state_33330[(14)]);
var inst_33272 = (state_33330[(18)]);
var inst_33302 = (inst_33272.cljs$core$IFn$_invoke$arity$1 ? inst_33272.cljs$core$IFn$_invoke$arity$1(inst_33280) : inst_33272.call(null, inst_33280));
var inst_33303 = cljs.core.not(inst_33302);
var state_33330__$1 = state_33330;
var statearr_33375_35883 = state_33330__$1;
(statearr_33375_35883[(2)] = inst_33303);

(statearr_33375_35883[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (3))){
var inst_33324 = (state_33330[(2)]);
var state_33330__$1 = state_33330;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33330__$1,inst_33324);
} else {
if((state_val_33331 === (12))){
var state_33330__$1 = state_33330;
var statearr_33378_35884 = state_33330__$1;
(statearr_33378_35884[(2)] = null);

(statearr_33378_35884[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (2))){
var inst_33270 = (state_33330[(12)]);
var inst_33265 = (state_33330[(11)]);
var inst_33270__$1 = cljs.core.__destructure_map(inst_33265);
var inst_33271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33270__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33270__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33270__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33330__$1 = (function (){var statearr_33380 = state_33330;
(statearr_33380[(12)] = inst_33270__$1);

(statearr_33380[(15)] = inst_33271);

(statearr_33380[(18)] = inst_33272);

return statearr_33380;
})();
return cljs.core.async.ioc_alts_BANG_(state_33330__$1,(4),inst_33273);
} else {
if((state_val_33331 === (23))){
var inst_33311 = (state_33330[(2)]);
var state_33330__$1 = state_33330;
if(cljs.core.truth_(inst_33311)){
var statearr_33384_35885 = state_33330__$1;
(statearr_33384_35885[(1)] = (24));

} else {
var statearr_33385_35886 = state_33330__$1;
(statearr_33385_35886[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (19))){
var inst_33306 = (state_33330[(2)]);
var state_33330__$1 = state_33330;
var statearr_33386_35887 = state_33330__$1;
(statearr_33386_35887[(2)] = inst_33306);

(statearr_33386_35887[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (11))){
var inst_33280 = (state_33330[(14)]);
var inst_33290 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33280);
var state_33330__$1 = state_33330;
var statearr_33388_35888 = state_33330__$1;
(statearr_33388_35888[(2)] = inst_33290);

(statearr_33388_35888[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (9))){
var inst_33280 = (state_33330[(14)]);
var inst_33271 = (state_33330[(15)]);
var inst_33297 = (state_33330[(19)]);
var inst_33297__$1 = (inst_33271.cljs$core$IFn$_invoke$arity$1 ? inst_33271.cljs$core$IFn$_invoke$arity$1(inst_33280) : inst_33271.call(null, inst_33280));
var state_33330__$1 = (function (){var statearr_33389 = state_33330;
(statearr_33389[(19)] = inst_33297__$1);

return statearr_33389;
})();
if(cljs.core.truth_(inst_33297__$1)){
var statearr_33390_35889 = state_33330__$1;
(statearr_33390_35889[(1)] = (14));

} else {
var statearr_33391_35890 = state_33330__$1;
(statearr_33391_35890[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (5))){
var inst_33281 = (state_33330[(13)]);
var state_33330__$1 = state_33330;
var statearr_33394_35891 = state_33330__$1;
(statearr_33394_35891[(2)] = inst_33281);

(statearr_33394_35891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (14))){
var inst_33297 = (state_33330[(19)]);
var state_33330__$1 = state_33330;
var statearr_33396_35892 = state_33330__$1;
(statearr_33396_35892[(2)] = inst_33297);

(statearr_33396_35892[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (26))){
var inst_33316 = (state_33330[(2)]);
var state_33330__$1 = state_33330;
var statearr_33398_35893 = state_33330__$1;
(statearr_33398_35893[(2)] = inst_33316);

(statearr_33398_35893[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (16))){
var inst_33308 = (state_33330[(2)]);
var state_33330__$1 = state_33330;
if(cljs.core.truth_(inst_33308)){
var statearr_33399_35894 = state_33330__$1;
(statearr_33399_35894[(1)] = (20));

} else {
var statearr_33403_35895 = state_33330__$1;
(statearr_33403_35895[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (10))){
var inst_33322 = (state_33330[(2)]);
var state_33330__$1 = state_33330;
var statearr_33404_35896 = state_33330__$1;
(statearr_33404_35896[(2)] = inst_33322);

(statearr_33404_35896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (18))){
var inst_33300 = (state_33330[(16)]);
var state_33330__$1 = state_33330;
var statearr_33405_35897 = state_33330__$1;
(statearr_33405_35897[(2)] = inst_33300);

(statearr_33405_35897[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33331 === (8))){
var inst_33279 = (state_33330[(7)]);
var inst_33288 = (inst_33279 == null);
var state_33330__$1 = state_33330;
if(cljs.core.truth_(inst_33288)){
var statearr_33406_35898 = state_33330__$1;
(statearr_33406_35898[(1)] = (11));

} else {
var statearr_33407_35899 = state_33330__$1;
(statearr_33407_35899[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__30618__auto__ = null;
var cljs$core$async$mix_$_state_machine__30618__auto____0 = (function (){
var statearr_33416 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33416[(0)] = cljs$core$async$mix_$_state_machine__30618__auto__);

(statearr_33416[(1)] = (1));

return statearr_33416;
});
var cljs$core$async$mix_$_state_machine__30618__auto____1 = (function (state_33330){
while(true){
var ret_value__30619__auto__ = (function (){try{while(true){
var result__30620__auto__ = switch__30617__auto__(state_33330);
if(cljs.core.keyword_identical_QMARK_(result__30620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30620__auto__;
}
break;
}
}catch (e33423){var ex__30621__auto__ = e33423;
var statearr_33424_35900 = state_33330;
(statearr_33424_35900[(2)] = ex__30621__auto__);


if(cljs.core.seq((state_33330[(4)]))){
var statearr_33425_35901 = state_33330;
(statearr_33425_35901[(1)] = cljs.core.first((state_33330[(4)])));

} else {
throw ex__30621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35902 = state_33330;
state_33330 = G__35902;
continue;
} else {
return ret_value__30619__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30618__auto__ = function(state_33330){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30618__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30618__auto____1.call(this,state_33330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30618__auto____0;
cljs$core$async$mix_$_state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30618__auto____1;
return cljs$core$async$mix_$_state_machine__30618__auto__;
})()
})();
var state__31400__auto__ = (function (){var statearr_33432 = f__31399__auto__();
(statearr_33432[(6)] = c__31398__auto___35869);

return statearr_33432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31400__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35903 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35903(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35907 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null, p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35907(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35911 = (function() {
var G__35912 = null;
var G__35912__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null, p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35912__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null, p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35912 = function(p,v){
switch(arguments.length){
case 1:
return G__35912__1.call(this,p);
case 2:
return G__35912__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35912.cljs$core$IFn$_invoke$arity$1 = G__35912__1;
G__35912.cljs$core$IFn$_invoke$arity$2 = G__35912__2;
return G__35912;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33486 = arguments.length;
switch (G__33486) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35911(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35911(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33500 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33501){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33501 = meta33501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33502,meta33501__$1){
var self__ = this;
var _33502__$1 = this;
return (new cljs.core.async.t_cljs$core$async33500(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33501__$1));
}));

(cljs.core.async.t_cljs$core$async33500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33502){
var self__ = this;
var _33502__$1 = this;
return self__.meta33501;
}));

(cljs.core.async.t_cljs$core$async33500.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33500.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33500.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33500.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33500.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33500.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33500.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33500.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33501","meta33501",1128355470,null)], null);
}));

(cljs.core.async.t_cljs$core$async33500.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33500.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33500");

(cljs.core.async.t_cljs$core$async33500.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33500");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33500.
 */
cljs.core.async.__GT_t_cljs$core$async33500 = (function cljs$core$async$__GT_t_cljs$core$async33500(ch,topic_fn,buf_fn,mults,ensure_mult,meta33501){
return (new cljs.core.async.t_cljs$core$async33500(ch,topic_fn,buf_fn,mults,ensure_mult,meta33501));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33496 = arguments.length;
switch (G__33496) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33494_SHARP_){
if(cljs.core.truth_((p1__33494_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33494_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33494_SHARP_.call(null, topic)))){
return p1__33494_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33494_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async33500(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__31398__auto___35933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31399__auto__ = (function (){var switch__30617__auto__ = (function (state_33630){
var state_val_33631 = (state_33630[(1)]);
if((state_val_33631 === (7))){
var inst_33624 = (state_33630[(2)]);
var state_33630__$1 = state_33630;
var statearr_33650_35934 = state_33630__$1;
(statearr_33650_35934[(2)] = inst_33624);

(statearr_33650_35934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (20))){
var state_33630__$1 = state_33630;
var statearr_33654_35935 = state_33630__$1;
(statearr_33654_35935[(2)] = null);

(statearr_33654_35935[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (1))){
var state_33630__$1 = state_33630;
var statearr_33657_35940 = state_33630__$1;
(statearr_33657_35940[(2)] = null);

(statearr_33657_35940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (24))){
var inst_33602 = (state_33630[(7)]);
var inst_33614 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33602);
var state_33630__$1 = state_33630;
var statearr_33663_35942 = state_33630__$1;
(statearr_33663_35942[(2)] = inst_33614);

(statearr_33663_35942[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (4))){
var inst_33539 = (state_33630[(8)]);
var inst_33539__$1 = (state_33630[(2)]);
var inst_33540 = (inst_33539__$1 == null);
var state_33630__$1 = (function (){var statearr_33664 = state_33630;
(statearr_33664[(8)] = inst_33539__$1);

return statearr_33664;
})();
if(cljs.core.truth_(inst_33540)){
var statearr_33666_35944 = state_33630__$1;
(statearr_33666_35944[(1)] = (5));

} else {
var statearr_33667_35945 = state_33630__$1;
(statearr_33667_35945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (15))){
var inst_33596 = (state_33630[(2)]);
var state_33630__$1 = state_33630;
var statearr_33669_35946 = state_33630__$1;
(statearr_33669_35946[(2)] = inst_33596);

(statearr_33669_35946[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (21))){
var inst_33620 = (state_33630[(2)]);
var state_33630__$1 = (function (){var statearr_33670 = state_33630;
(statearr_33670[(9)] = inst_33620);

return statearr_33670;
})();
var statearr_33671_35947 = state_33630__$1;
(statearr_33671_35947[(2)] = null);

(statearr_33671_35947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (13))){
var inst_33573 = (state_33630[(10)]);
var inst_33575 = cljs.core.chunked_seq_QMARK_(inst_33573);
var state_33630__$1 = state_33630;
if(inst_33575){
var statearr_33672_35949 = state_33630__$1;
(statearr_33672_35949[(1)] = (16));

} else {
var statearr_33673_35950 = state_33630__$1;
(statearr_33673_35950[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (22))){
var inst_33610 = (state_33630[(2)]);
var state_33630__$1 = state_33630;
if(cljs.core.truth_(inst_33610)){
var statearr_33674_35951 = state_33630__$1;
(statearr_33674_35951[(1)] = (23));

} else {
var statearr_33675_35952 = state_33630__$1;
(statearr_33675_35952[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (6))){
var inst_33539 = (state_33630[(8)]);
var inst_33604 = (state_33630[(11)]);
var inst_33602 = (state_33630[(7)]);
var inst_33602__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33539) : topic_fn.call(null, inst_33539));
var inst_33603 = cljs.core.deref(mults);
var inst_33604__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33603,inst_33602__$1);
var state_33630__$1 = (function (){var statearr_33683 = state_33630;
(statearr_33683[(11)] = inst_33604__$1);

(statearr_33683[(7)] = inst_33602__$1);

return statearr_33683;
})();
if(cljs.core.truth_(inst_33604__$1)){
var statearr_33692_35955 = state_33630__$1;
(statearr_33692_35955[(1)] = (19));

} else {
var statearr_33693_35957 = state_33630__$1;
(statearr_33693_35957[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (25))){
var inst_33616 = (state_33630[(2)]);
var state_33630__$1 = state_33630;
var statearr_33697_35958 = state_33630__$1;
(statearr_33697_35958[(2)] = inst_33616);

(statearr_33697_35958[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (17))){
var inst_33573 = (state_33630[(10)]);
var inst_33583 = cljs.core.first(inst_33573);
var inst_33585 = cljs.core.async.muxch_STAR_(inst_33583);
var inst_33587 = cljs.core.async.close_BANG_(inst_33585);
var inst_33589 = cljs.core.next(inst_33573);
var inst_33549 = inst_33589;
var inst_33550 = null;
var inst_33551 = (0);
var inst_33552 = (0);
var state_33630__$1 = (function (){var statearr_33701 = state_33630;
(statearr_33701[(12)] = inst_33552);

(statearr_33701[(13)] = inst_33587);

(statearr_33701[(14)] = inst_33549);

(statearr_33701[(15)] = inst_33551);

(statearr_33701[(16)] = inst_33550);

return statearr_33701;
})();
var statearr_33705_35967 = state_33630__$1;
(statearr_33705_35967[(2)] = null);

(statearr_33705_35967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (3))){
var inst_33626 = (state_33630[(2)]);
var state_33630__$1 = state_33630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33630__$1,inst_33626);
} else {
if((state_val_33631 === (12))){
var inst_33598 = (state_33630[(2)]);
var state_33630__$1 = state_33630;
var statearr_33713_35969 = state_33630__$1;
(statearr_33713_35969[(2)] = inst_33598);

(statearr_33713_35969[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (2))){
var state_33630__$1 = state_33630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33630__$1,(4),ch);
} else {
if((state_val_33631 === (23))){
var state_33630__$1 = state_33630;
var statearr_33720_35970 = state_33630__$1;
(statearr_33720_35970[(2)] = null);

(statearr_33720_35970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (19))){
var inst_33539 = (state_33630[(8)]);
var inst_33604 = (state_33630[(11)]);
var inst_33606 = cljs.core.async.muxch_STAR_(inst_33604);
var state_33630__$1 = state_33630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33630__$1,(22),inst_33606,inst_33539);
} else {
if((state_val_33631 === (11))){
var inst_33573 = (state_33630[(10)]);
var inst_33549 = (state_33630[(14)]);
var inst_33573__$1 = cljs.core.seq(inst_33549);
var state_33630__$1 = (function (){var statearr_33728 = state_33630;
(statearr_33728[(10)] = inst_33573__$1);

return statearr_33728;
})();
if(inst_33573__$1){
var statearr_33732_35973 = state_33630__$1;
(statearr_33732_35973[(1)] = (13));

} else {
var statearr_33733_35974 = state_33630__$1;
(statearr_33733_35974[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (9))){
var inst_33600 = (state_33630[(2)]);
var state_33630__$1 = state_33630;
var statearr_33737_35975 = state_33630__$1;
(statearr_33737_35975[(2)] = inst_33600);

(statearr_33737_35975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (5))){
var inst_33546 = cljs.core.deref(mults);
var inst_33547 = cljs.core.vals(inst_33546);
var inst_33548 = cljs.core.seq(inst_33547);
var inst_33549 = inst_33548;
var inst_33550 = null;
var inst_33551 = (0);
var inst_33552 = (0);
var state_33630__$1 = (function (){var statearr_33740 = state_33630;
(statearr_33740[(12)] = inst_33552);

(statearr_33740[(14)] = inst_33549);

(statearr_33740[(15)] = inst_33551);

(statearr_33740[(16)] = inst_33550);

return statearr_33740;
})();
var statearr_33744_35976 = state_33630__$1;
(statearr_33744_35976[(2)] = null);

(statearr_33744_35976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (14))){
var state_33630__$1 = state_33630;
var statearr_33755_35978 = state_33630__$1;
(statearr_33755_35978[(2)] = null);

(statearr_33755_35978[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (16))){
var inst_33573 = (state_33630[(10)]);
var inst_33577 = cljs.core.chunk_first(inst_33573);
var inst_33578 = cljs.core.chunk_rest(inst_33573);
var inst_33579 = cljs.core.count(inst_33577);
var inst_33549 = inst_33578;
var inst_33550 = inst_33577;
var inst_33551 = inst_33579;
var inst_33552 = (0);
var state_33630__$1 = (function (){var statearr_33767 = state_33630;
(statearr_33767[(12)] = inst_33552);

(statearr_33767[(14)] = inst_33549);

(statearr_33767[(15)] = inst_33551);

(statearr_33767[(16)] = inst_33550);

return statearr_33767;
})();
var statearr_33772_35985 = state_33630__$1;
(statearr_33772_35985[(2)] = null);

(statearr_33772_35985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (10))){
var inst_33552 = (state_33630[(12)]);
var inst_33549 = (state_33630[(14)]);
var inst_33551 = (state_33630[(15)]);
var inst_33550 = (state_33630[(16)]);
var inst_33560 = cljs.core._nth(inst_33550,inst_33552);
var inst_33565 = cljs.core.async.muxch_STAR_(inst_33560);
var inst_33566 = cljs.core.async.close_BANG_(inst_33565);
var inst_33569 = (inst_33552 + (1));
var tmp33752 = inst_33549;
var tmp33753 = inst_33551;
var tmp33754 = inst_33550;
var inst_33549__$1 = tmp33752;
var inst_33550__$1 = tmp33754;
var inst_33551__$1 = tmp33753;
var inst_33552__$1 = inst_33569;
var state_33630__$1 = (function (){var statearr_33785 = state_33630;
(statearr_33785[(12)] = inst_33552__$1);

(statearr_33785[(14)] = inst_33549__$1);

(statearr_33785[(15)] = inst_33551__$1);

(statearr_33785[(16)] = inst_33550__$1);

(statearr_33785[(17)] = inst_33566);

return statearr_33785;
})();
var statearr_33786_35986 = state_33630__$1;
(statearr_33786_35986[(2)] = null);

(statearr_33786_35986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (18))){
var inst_33592 = (state_33630[(2)]);
var state_33630__$1 = state_33630;
var statearr_33787_35988 = state_33630__$1;
(statearr_33787_35988[(2)] = inst_33592);

(statearr_33787_35988[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (8))){
var inst_33552 = (state_33630[(12)]);
var inst_33551 = (state_33630[(15)]);
var inst_33554 = (inst_33552 < inst_33551);
var inst_33555 = inst_33554;
var state_33630__$1 = state_33630;
if(cljs.core.truth_(inst_33555)){
var statearr_33788_35989 = state_33630__$1;
(statearr_33788_35989[(1)] = (10));

} else {
var statearr_33790_35991 = state_33630__$1;
(statearr_33790_35991[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30618__auto__ = null;
var cljs$core$async$state_machine__30618__auto____0 = (function (){
var statearr_33791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33791[(0)] = cljs$core$async$state_machine__30618__auto__);

(statearr_33791[(1)] = (1));

return statearr_33791;
});
var cljs$core$async$state_machine__30618__auto____1 = (function (state_33630){
while(true){
var ret_value__30619__auto__ = (function (){try{while(true){
var result__30620__auto__ = switch__30617__auto__(state_33630);
if(cljs.core.keyword_identical_QMARK_(result__30620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30620__auto__;
}
break;
}
}catch (e33794){var ex__30621__auto__ = e33794;
var statearr_33797_35993 = state_33630;
(statearr_33797_35993[(2)] = ex__30621__auto__);


if(cljs.core.seq((state_33630[(4)]))){
var statearr_33809_35994 = state_33630;
(statearr_33809_35994[(1)] = cljs.core.first((state_33630[(4)])));

} else {
throw ex__30621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35996 = state_33630;
state_33630 = G__35996;
continue;
} else {
return ret_value__30619__auto__;
}
break;
}
});
cljs$core$async$state_machine__30618__auto__ = function(state_33630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30618__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30618__auto____1.call(this,state_33630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30618__auto____0;
cljs$core$async$state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30618__auto____1;
return cljs$core$async$state_machine__30618__auto__;
})()
})();
var state__31400__auto__ = (function (){var statearr_33814 = f__31399__auto__();
(statearr_33814[(6)] = c__31398__auto___35933);

return statearr_33814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31400__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33817 = arguments.length;
switch (G__33817) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33837 = arguments.length;
switch (G__33837) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33845 = arguments.length;
switch (G__33845) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__31398__auto___36004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31399__auto__ = (function (){var switch__30617__auto__ = (function (state_33940){
var state_val_33941 = (state_33940[(1)]);
if((state_val_33941 === (7))){
var state_33940__$1 = state_33940;
var statearr_33944_36006 = state_33940__$1;
(statearr_33944_36006[(2)] = null);

(statearr_33944_36006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33941 === (1))){
var state_33940__$1 = state_33940;
var statearr_33948_36007 = state_33940__$1;
(statearr_33948_36007[(2)] = null);

(statearr_33948_36007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33941 === (4))){
var inst_33883 = (state_33940[(7)]);
var inst_33881 = (state_33940[(8)]);
var inst_33885 = (inst_33883 < inst_33881);
var state_33940__$1 = state_33940;
if(cljs.core.truth_(inst_33885)){
var statearr_33954_36008 = state_33940__$1;
(statearr_33954_36008[(1)] = (6));

} else {
var statearr_33955_36009 = state_33940__$1;
(statearr_33955_36009[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33941 === (15))){
var inst_33920 = (state_33940[(9)]);
var inst_33928 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33920);
var state_33940__$1 = state_33940;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33940__$1,(17),out,inst_33928);
} else {
if((state_val_33941 === (13))){
var inst_33920 = (state_33940[(9)]);
var inst_33920__$1 = (state_33940[(2)]);
var inst_33921 = cljs.core.some(cljs.core.nil_QMARK_,inst_33920__$1);
var state_33940__$1 = (function (){var statearr_33957 = state_33940;
(statearr_33957[(9)] = inst_33920__$1);

return statearr_33957;
})();
if(cljs.core.truth_(inst_33921)){
var statearr_33959_36012 = state_33940__$1;
(statearr_33959_36012[(1)] = (14));

} else {
var statearr_33960_36013 = state_33940__$1;
(statearr_33960_36013[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33941 === (6))){
var state_33940__$1 = state_33940;
var statearr_33962_36015 = state_33940__$1;
(statearr_33962_36015[(2)] = null);

(statearr_33962_36015[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33941 === (17))){
var inst_33930 = (state_33940[(2)]);
var state_33940__$1 = (function (){var statearr_33976 = state_33940;
(statearr_33976[(10)] = inst_33930);

return statearr_33976;
})();
var statearr_33981_36017 = state_33940__$1;
(statearr_33981_36017[(2)] = null);

(statearr_33981_36017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33941 === (3))){
var inst_33935 = (state_33940[(2)]);
var state_33940__$1 = state_33940;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33940__$1,inst_33935);
} else {
if((state_val_33941 === (12))){
var _ = (function (){var statearr_33982 = state_33940;
(statearr_33982[(4)] = cljs.core.rest((state_33940[(4)])));

return statearr_33982;
})();
var state_33940__$1 = state_33940;
var ex33974 = (state_33940__$1[(2)]);
var statearr_33983_36018 = state_33940__$1;
(statearr_33983_36018[(5)] = ex33974);


if((ex33974 instanceof Object)){
var statearr_33988_36019 = state_33940__$1;
(statearr_33988_36019[(1)] = (11));

(statearr_33988_36019[(5)] = null);

} else {
throw ex33974;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33941 === (2))){
var inst_33880 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33881 = cnt;
var inst_33883 = (0);
var state_33940__$1 = (function (){var statearr_33992 = state_33940;
(statearr_33992[(7)] = inst_33883);

(statearr_33992[(8)] = inst_33881);

(statearr_33992[(11)] = inst_33880);

return statearr_33992;
})();
var statearr_33993_36020 = state_33940__$1;
(statearr_33993_36020[(2)] = null);

(statearr_33993_36020[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33941 === (11))){
var inst_33895 = (state_33940[(2)]);
var inst_33898 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33940__$1 = (function (){var statearr_33994 = state_33940;
(statearr_33994[(12)] = inst_33895);

return statearr_33994;
})();
var statearr_33995_36021 = state_33940__$1;
(statearr_33995_36021[(2)] = inst_33898);

(statearr_33995_36021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33941 === (9))){
var inst_33883 = (state_33940[(7)]);
var _ = (function (){var statearr_33996 = state_33940;
(statearr_33996[(4)] = cljs.core.cons((12),(state_33940[(4)])));

return statearr_33996;
})();
var inst_33906 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33883) : chs__$1.call(null, inst_33883));
var inst_33907 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33883) : done.call(null, inst_33883));
var inst_33908 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33906,inst_33907);
var ___$1 = (function (){var statearr_33999 = state_33940;
(statearr_33999[(4)] = cljs.core.rest((state_33940[(4)])));

return statearr_33999;
})();
var state_33940__$1 = state_33940;
var statearr_34001_36027 = state_33940__$1;
(statearr_34001_36027[(2)] = inst_33908);

(statearr_34001_36027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33941 === (5))){
var inst_33918 = (state_33940[(2)]);
var state_33940__$1 = (function (){var statearr_34006 = state_33940;
(statearr_34006[(13)] = inst_33918);

return statearr_34006;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33940__$1,(13),dchan);
} else {
if((state_val_33941 === (14))){
var inst_33923 = cljs.core.async.close_BANG_(out);
var state_33940__$1 = state_33940;
var statearr_34010_36028 = state_33940__$1;
(statearr_34010_36028[(2)] = inst_33923);

(statearr_34010_36028[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33941 === (16))){
var inst_33933 = (state_33940[(2)]);
var state_33940__$1 = state_33940;
var statearr_34012_36033 = state_33940__$1;
(statearr_34012_36033[(2)] = inst_33933);

(statearr_34012_36033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33941 === (10))){
var inst_33883 = (state_33940[(7)]);
var inst_33911 = (state_33940[(2)]);
var inst_33912 = (inst_33883 + (1));
var inst_33883__$1 = inst_33912;
var state_33940__$1 = (function (){var statearr_34018 = state_33940;
(statearr_34018[(7)] = inst_33883__$1);

(statearr_34018[(14)] = inst_33911);

return statearr_34018;
})();
var statearr_34019_36035 = state_33940__$1;
(statearr_34019_36035[(2)] = null);

(statearr_34019_36035[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33941 === (8))){
var inst_33916 = (state_33940[(2)]);
var state_33940__$1 = state_33940;
var statearr_34020_36036 = state_33940__$1;
(statearr_34020_36036[(2)] = inst_33916);

(statearr_34020_36036[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30618__auto__ = null;
var cljs$core$async$state_machine__30618__auto____0 = (function (){
var statearr_34021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34021[(0)] = cljs$core$async$state_machine__30618__auto__);

(statearr_34021[(1)] = (1));

return statearr_34021;
});
var cljs$core$async$state_machine__30618__auto____1 = (function (state_33940){
while(true){
var ret_value__30619__auto__ = (function (){try{while(true){
var result__30620__auto__ = switch__30617__auto__(state_33940);
if(cljs.core.keyword_identical_QMARK_(result__30620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30620__auto__;
}
break;
}
}catch (e34024){var ex__30621__auto__ = e34024;
var statearr_34025_36038 = state_33940;
(statearr_34025_36038[(2)] = ex__30621__auto__);


if(cljs.core.seq((state_33940[(4)]))){
var statearr_34026_36039 = state_33940;
(statearr_34026_36039[(1)] = cljs.core.first((state_33940[(4)])));

} else {
throw ex__30621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36040 = state_33940;
state_33940 = G__36040;
continue;
} else {
return ret_value__30619__auto__;
}
break;
}
});
cljs$core$async$state_machine__30618__auto__ = function(state_33940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30618__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30618__auto____1.call(this,state_33940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30618__auto____0;
cljs$core$async$state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30618__auto____1;
return cljs$core$async$state_machine__30618__auto__;
})()
})();
var state__31400__auto__ = (function (){var statearr_34046 = f__31399__auto__();
(statearr_34046[(6)] = c__31398__auto___36004);

return statearr_34046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31400__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34052 = arguments.length;
switch (G__34052) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31398__auto___36044 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31399__auto__ = (function (){var switch__30617__auto__ = (function (state_34109){
var state_val_34110 = (state_34109[(1)]);
if((state_val_34110 === (7))){
var inst_34086 = (state_34109[(7)]);
var inst_34085 = (state_34109[(8)]);
var inst_34085__$1 = (state_34109[(2)]);
var inst_34086__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34085__$1,(0),null);
var inst_34087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34085__$1,(1),null);
var inst_34088 = (inst_34086__$1 == null);
var state_34109__$1 = (function (){var statearr_34119 = state_34109;
(statearr_34119[(7)] = inst_34086__$1);

(statearr_34119[(8)] = inst_34085__$1);

(statearr_34119[(9)] = inst_34087);

return statearr_34119;
})();
if(cljs.core.truth_(inst_34088)){
var statearr_34120_36050 = state_34109__$1;
(statearr_34120_36050[(1)] = (8));

} else {
var statearr_34121_36051 = state_34109__$1;
(statearr_34121_36051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (1))){
var inst_34068 = cljs.core.vec(chs);
var inst_34069 = inst_34068;
var state_34109__$1 = (function (){var statearr_34123 = state_34109;
(statearr_34123[(10)] = inst_34069);

return statearr_34123;
})();
var statearr_34125_36052 = state_34109__$1;
(statearr_34125_36052[(2)] = null);

(statearr_34125_36052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (4))){
var inst_34069 = (state_34109[(10)]);
var state_34109__$1 = state_34109;
return cljs.core.async.ioc_alts_BANG_(state_34109__$1,(7),inst_34069);
} else {
if((state_val_34110 === (6))){
var inst_34105 = (state_34109[(2)]);
var state_34109__$1 = state_34109;
var statearr_34130_36053 = state_34109__$1;
(statearr_34130_36053[(2)] = inst_34105);

(statearr_34130_36053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (3))){
var inst_34107 = (state_34109[(2)]);
var state_34109__$1 = state_34109;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34109__$1,inst_34107);
} else {
if((state_val_34110 === (2))){
var inst_34069 = (state_34109[(10)]);
var inst_34071 = cljs.core.count(inst_34069);
var inst_34072 = (inst_34071 > (0));
var state_34109__$1 = state_34109;
if(cljs.core.truth_(inst_34072)){
var statearr_34138_36054 = state_34109__$1;
(statearr_34138_36054[(1)] = (4));

} else {
var statearr_34139_36055 = state_34109__$1;
(statearr_34139_36055[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (11))){
var inst_34069 = (state_34109[(10)]);
var inst_34098 = (state_34109[(2)]);
var tmp34132 = inst_34069;
var inst_34069__$1 = tmp34132;
var state_34109__$1 = (function (){var statearr_34140 = state_34109;
(statearr_34140[(11)] = inst_34098);

(statearr_34140[(10)] = inst_34069__$1);

return statearr_34140;
})();
var statearr_34141_36056 = state_34109__$1;
(statearr_34141_36056[(2)] = null);

(statearr_34141_36056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (9))){
var inst_34086 = (state_34109[(7)]);
var state_34109__$1 = state_34109;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34109__$1,(11),out,inst_34086);
} else {
if((state_val_34110 === (5))){
var inst_34103 = cljs.core.async.close_BANG_(out);
var state_34109__$1 = state_34109;
var statearr_34154_36057 = state_34109__$1;
(statearr_34154_36057[(2)] = inst_34103);

(statearr_34154_36057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (10))){
var inst_34101 = (state_34109[(2)]);
var state_34109__$1 = state_34109;
var statearr_34157_36058 = state_34109__$1;
(statearr_34157_36058[(2)] = inst_34101);

(statearr_34157_36058[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34110 === (8))){
var inst_34086 = (state_34109[(7)]);
var inst_34069 = (state_34109[(10)]);
var inst_34085 = (state_34109[(8)]);
var inst_34087 = (state_34109[(9)]);
var inst_34092 = (function (){var cs = inst_34069;
var vec__34075 = inst_34085;
var v = inst_34086;
var c = inst_34087;
return (function (p1__34048_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34048_SHARP_);
});
})();
var inst_34093 = cljs.core.filterv(inst_34092,inst_34069);
var inst_34069__$1 = inst_34093;
var state_34109__$1 = (function (){var statearr_34165 = state_34109;
(statearr_34165[(10)] = inst_34069__$1);

return statearr_34165;
})();
var statearr_34167_36059 = state_34109__$1;
(statearr_34167_36059[(2)] = null);

(statearr_34167_36059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30618__auto__ = null;
var cljs$core$async$state_machine__30618__auto____0 = (function (){
var statearr_34173 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34173[(0)] = cljs$core$async$state_machine__30618__auto__);

(statearr_34173[(1)] = (1));

return statearr_34173;
});
var cljs$core$async$state_machine__30618__auto____1 = (function (state_34109){
while(true){
var ret_value__30619__auto__ = (function (){try{while(true){
var result__30620__auto__ = switch__30617__auto__(state_34109);
if(cljs.core.keyword_identical_QMARK_(result__30620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30620__auto__;
}
break;
}
}catch (e34175){var ex__30621__auto__ = e34175;
var statearr_34181_36064 = state_34109;
(statearr_34181_36064[(2)] = ex__30621__auto__);


if(cljs.core.seq((state_34109[(4)]))){
var statearr_34183_36065 = state_34109;
(statearr_34183_36065[(1)] = cljs.core.first((state_34109[(4)])));

} else {
throw ex__30621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36066 = state_34109;
state_34109 = G__36066;
continue;
} else {
return ret_value__30619__auto__;
}
break;
}
});
cljs$core$async$state_machine__30618__auto__ = function(state_34109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30618__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30618__auto____1.call(this,state_34109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30618__auto____0;
cljs$core$async$state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30618__auto____1;
return cljs$core$async$state_machine__30618__auto__;
})()
})();
var state__31400__auto__ = (function (){var statearr_34185 = f__31399__auto__();
(statearr_34185[(6)] = c__31398__auto___36044);

return statearr_34185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31400__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34197 = arguments.length;
switch (G__34197) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31398__auto___36069 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31399__auto__ = (function (){var switch__30617__auto__ = (function (state_34238){
var state_val_34239 = (state_34238[(1)]);
if((state_val_34239 === (7))){
var inst_34211 = (state_34238[(7)]);
var inst_34211__$1 = (state_34238[(2)]);
var inst_34215 = (inst_34211__$1 == null);
var inst_34217 = cljs.core.not(inst_34215);
var state_34238__$1 = (function (){var statearr_34247 = state_34238;
(statearr_34247[(7)] = inst_34211__$1);

return statearr_34247;
})();
if(inst_34217){
var statearr_34248_36071 = state_34238__$1;
(statearr_34248_36071[(1)] = (8));

} else {
var statearr_34249_36072 = state_34238__$1;
(statearr_34249_36072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34239 === (1))){
var inst_34206 = (0);
var state_34238__$1 = (function (){var statearr_34256 = state_34238;
(statearr_34256[(8)] = inst_34206);

return statearr_34256;
})();
var statearr_34257_36073 = state_34238__$1;
(statearr_34257_36073[(2)] = null);

(statearr_34257_36073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34239 === (4))){
var state_34238__$1 = state_34238;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34238__$1,(7),ch);
} else {
if((state_val_34239 === (6))){
var inst_34232 = (state_34238[(2)]);
var state_34238__$1 = state_34238;
var statearr_34261_36075 = state_34238__$1;
(statearr_34261_36075[(2)] = inst_34232);

(statearr_34261_36075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34239 === (3))){
var inst_34234 = (state_34238[(2)]);
var inst_34235 = cljs.core.async.close_BANG_(out);
var state_34238__$1 = (function (){var statearr_34269 = state_34238;
(statearr_34269[(9)] = inst_34234);

return statearr_34269;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34238__$1,inst_34235);
} else {
if((state_val_34239 === (2))){
var inst_34206 = (state_34238[(8)]);
var inst_34208 = (inst_34206 < n);
var state_34238__$1 = state_34238;
if(cljs.core.truth_(inst_34208)){
var statearr_34277_36077 = state_34238__$1;
(statearr_34277_36077[(1)] = (4));

} else {
var statearr_34278_36078 = state_34238__$1;
(statearr_34278_36078[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34239 === (11))){
var inst_34206 = (state_34238[(8)]);
var inst_34221 = (state_34238[(2)]);
var inst_34222 = (inst_34206 + (1));
var inst_34206__$1 = inst_34222;
var state_34238__$1 = (function (){var statearr_34282 = state_34238;
(statearr_34282[(10)] = inst_34221);

(statearr_34282[(8)] = inst_34206__$1);

return statearr_34282;
})();
var statearr_34288_36079 = state_34238__$1;
(statearr_34288_36079[(2)] = null);

(statearr_34288_36079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34239 === (9))){
var state_34238__$1 = state_34238;
var statearr_34297_36083 = state_34238__$1;
(statearr_34297_36083[(2)] = null);

(statearr_34297_36083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34239 === (5))){
var state_34238__$1 = state_34238;
var statearr_34306_36088 = state_34238__$1;
(statearr_34306_36088[(2)] = null);

(statearr_34306_36088[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34239 === (10))){
var inst_34229 = (state_34238[(2)]);
var state_34238__$1 = state_34238;
var statearr_34313_36089 = state_34238__$1;
(statearr_34313_36089[(2)] = inst_34229);

(statearr_34313_36089[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34239 === (8))){
var inst_34211 = (state_34238[(7)]);
var state_34238__$1 = state_34238;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34238__$1,(11),out,inst_34211);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30618__auto__ = null;
var cljs$core$async$state_machine__30618__auto____0 = (function (){
var statearr_34319 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34319[(0)] = cljs$core$async$state_machine__30618__auto__);

(statearr_34319[(1)] = (1));

return statearr_34319;
});
var cljs$core$async$state_machine__30618__auto____1 = (function (state_34238){
while(true){
var ret_value__30619__auto__ = (function (){try{while(true){
var result__30620__auto__ = switch__30617__auto__(state_34238);
if(cljs.core.keyword_identical_QMARK_(result__30620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30620__auto__;
}
break;
}
}catch (e34322){var ex__30621__auto__ = e34322;
var statearr_34323_36090 = state_34238;
(statearr_34323_36090[(2)] = ex__30621__auto__);


if(cljs.core.seq((state_34238[(4)]))){
var statearr_34324_36091 = state_34238;
(statearr_34324_36091[(1)] = cljs.core.first((state_34238[(4)])));

} else {
throw ex__30621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36093 = state_34238;
state_34238 = G__36093;
continue;
} else {
return ret_value__30619__auto__;
}
break;
}
});
cljs$core$async$state_machine__30618__auto__ = function(state_34238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30618__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30618__auto____1.call(this,state_34238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30618__auto____0;
cljs$core$async$state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30618__auto____1;
return cljs$core$async$state_machine__30618__auto__;
})()
})();
var state__31400__auto__ = (function (){var statearr_34326 = f__31399__auto__();
(statearr_34326[(6)] = c__31398__auto___36069);

return statearr_34326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31400__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34360 = (function (f,ch,meta34335,_,fn1,meta34361){
this.f = f;
this.ch = ch;
this.meta34335 = meta34335;
this._ = _;
this.fn1 = fn1;
this.meta34361 = meta34361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34362,meta34361__$1){
var self__ = this;
var _34362__$1 = this;
return (new cljs.core.async.t_cljs$core$async34360(self__.f,self__.ch,self__.meta34335,self__._,self__.fn1,meta34361__$1));
}));

(cljs.core.async.t_cljs$core$async34360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34362){
var self__ = this;
var _34362__$1 = this;
return self__.meta34361;
}));

(cljs.core.async.t_cljs$core$async34360.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34360.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34360.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34360.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34328_SHARP_){
var G__34382 = (((p1__34328_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34328_SHARP_) : self__.f.call(null, p1__34328_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34382) : f1.call(null, G__34382));
});
}));

(cljs.core.async.t_cljs$core$async34360.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34335","meta34335",1072514632,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34334","cljs.core.async/t_cljs$core$async34334",928419466,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34361","meta34361",-1661721914,null)], null);
}));

(cljs.core.async.t_cljs$core$async34360.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34360");

(cljs.core.async.t_cljs$core$async34360.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34360");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34360.
 */
cljs.core.async.__GT_t_cljs$core$async34360 = (function cljs$core$async$__GT_t_cljs$core$async34360(f,ch,meta34335,_,fn1,meta34361){
return (new cljs.core.async.t_cljs$core$async34360(f,ch,meta34335,_,fn1,meta34361));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34334 = (function (f,ch,meta34335){
this.f = f;
this.ch = ch;
this.meta34335 = meta34335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34336,meta34335__$1){
var self__ = this;
var _34336__$1 = this;
return (new cljs.core.async.t_cljs$core$async34334(self__.f,self__.ch,meta34335__$1));
}));

(cljs.core.async.t_cljs$core$async34334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34336){
var self__ = this;
var _34336__$1 = this;
return self__.meta34335;
}));

(cljs.core.async.t_cljs$core$async34334.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34334.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34334.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34334.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34334.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async34360(self__.f,self__.ch,self__.meta34335,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34403 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34403) : self__.f.call(null, G__34403));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34334.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34334.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34334.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34335","meta34335",1072514632,null)], null);
}));

(cljs.core.async.t_cljs$core$async34334.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34334");

(cljs.core.async.t_cljs$core$async34334.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34334");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34334.
 */
cljs.core.async.__GT_t_cljs$core$async34334 = (function cljs$core$async$__GT_t_cljs$core$async34334(f,ch,meta34335){
return (new cljs.core.async.t_cljs$core$async34334(f,ch,meta34335));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34334(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34423 = (function (f,ch,meta34424){
this.f = f;
this.ch = ch;
this.meta34424 = meta34424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34425,meta34424__$1){
var self__ = this;
var _34425__$1 = this;
return (new cljs.core.async.t_cljs$core$async34423(self__.f,self__.ch,meta34424__$1));
}));

(cljs.core.async.t_cljs$core$async34423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34425){
var self__ = this;
var _34425__$1 = this;
return self__.meta34424;
}));

(cljs.core.async.t_cljs$core$async34423.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34423.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34423.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34423.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34423.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34423.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34423.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34424","meta34424",-1213748829,null)], null);
}));

(cljs.core.async.t_cljs$core$async34423.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34423");

(cljs.core.async.t_cljs$core$async34423.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34423");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34423.
 */
cljs.core.async.__GT_t_cljs$core$async34423 = (function cljs$core$async$__GT_t_cljs$core$async34423(f,ch,meta34424){
return (new cljs.core.async.t_cljs$core$async34423(f,ch,meta34424));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34423(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34471 = (function (p,ch,meta34472){
this.p = p;
this.ch = ch;
this.meta34472 = meta34472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34473,meta34472__$1){
var self__ = this;
var _34473__$1 = this;
return (new cljs.core.async.t_cljs$core$async34471(self__.p,self__.ch,meta34472__$1));
}));

(cljs.core.async.t_cljs$core$async34471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34473){
var self__ = this;
var _34473__$1 = this;
return self__.meta34472;
}));

(cljs.core.async.t_cljs$core$async34471.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34471.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34471.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34471.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34471.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34471.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34471.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34471.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34472","meta34472",-197956940,null)], null);
}));

(cljs.core.async.t_cljs$core$async34471.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34471.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34471");

(cljs.core.async.t_cljs$core$async34471.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34471");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34471.
 */
cljs.core.async.__GT_t_cljs$core$async34471 = (function cljs$core$async$__GT_t_cljs$core$async34471(p,ch,meta34472){
return (new cljs.core.async.t_cljs$core$async34471(p,ch,meta34472));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async34471(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34475 = arguments.length;
switch (G__34475) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31398__auto___36123 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31399__auto__ = (function (){var switch__30617__auto__ = (function (state_34500){
var state_val_34501 = (state_34500[(1)]);
if((state_val_34501 === (7))){
var inst_34496 = (state_34500[(2)]);
var state_34500__$1 = state_34500;
var statearr_34505_36127 = state_34500__$1;
(statearr_34505_36127[(2)] = inst_34496);

(statearr_34505_36127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (1))){
var state_34500__$1 = state_34500;
var statearr_34506_36128 = state_34500__$1;
(statearr_34506_36128[(2)] = null);

(statearr_34506_36128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (4))){
var inst_34482 = (state_34500[(7)]);
var inst_34482__$1 = (state_34500[(2)]);
var inst_34483 = (inst_34482__$1 == null);
var state_34500__$1 = (function (){var statearr_34507 = state_34500;
(statearr_34507[(7)] = inst_34482__$1);

return statearr_34507;
})();
if(cljs.core.truth_(inst_34483)){
var statearr_34508_36129 = state_34500__$1;
(statearr_34508_36129[(1)] = (5));

} else {
var statearr_34509_36131 = state_34500__$1;
(statearr_34509_36131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (6))){
var inst_34482 = (state_34500[(7)]);
var inst_34487 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34482) : p.call(null, inst_34482));
var state_34500__$1 = state_34500;
if(cljs.core.truth_(inst_34487)){
var statearr_34510_36133 = state_34500__$1;
(statearr_34510_36133[(1)] = (8));

} else {
var statearr_34511_36134 = state_34500__$1;
(statearr_34511_36134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (3))){
var inst_34498 = (state_34500[(2)]);
var state_34500__$1 = state_34500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34500__$1,inst_34498);
} else {
if((state_val_34501 === (2))){
var state_34500__$1 = state_34500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34500__$1,(4),ch);
} else {
if((state_val_34501 === (11))){
var inst_34490 = (state_34500[(2)]);
var state_34500__$1 = state_34500;
var statearr_34515_36138 = state_34500__$1;
(statearr_34515_36138[(2)] = inst_34490);

(statearr_34515_36138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (9))){
var state_34500__$1 = state_34500;
var statearr_34516_36140 = state_34500__$1;
(statearr_34516_36140[(2)] = null);

(statearr_34516_36140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (5))){
var inst_34485 = cljs.core.async.close_BANG_(out);
var state_34500__$1 = state_34500;
var statearr_34517_36143 = state_34500__$1;
(statearr_34517_36143[(2)] = inst_34485);

(statearr_34517_36143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (10))){
var inst_34493 = (state_34500[(2)]);
var state_34500__$1 = (function (){var statearr_34520 = state_34500;
(statearr_34520[(8)] = inst_34493);

return statearr_34520;
})();
var statearr_34522_36144 = state_34500__$1;
(statearr_34522_36144[(2)] = null);

(statearr_34522_36144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (8))){
var inst_34482 = (state_34500[(7)]);
var state_34500__$1 = state_34500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34500__$1,(11),out,inst_34482);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30618__auto__ = null;
var cljs$core$async$state_machine__30618__auto____0 = (function (){
var statearr_34523 = [null,null,null,null,null,null,null,null,null];
(statearr_34523[(0)] = cljs$core$async$state_machine__30618__auto__);

(statearr_34523[(1)] = (1));

return statearr_34523;
});
var cljs$core$async$state_machine__30618__auto____1 = (function (state_34500){
while(true){
var ret_value__30619__auto__ = (function (){try{while(true){
var result__30620__auto__ = switch__30617__auto__(state_34500);
if(cljs.core.keyword_identical_QMARK_(result__30620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30620__auto__;
}
break;
}
}catch (e34524){var ex__30621__auto__ = e34524;
var statearr_34526_36150 = state_34500;
(statearr_34526_36150[(2)] = ex__30621__auto__);


if(cljs.core.seq((state_34500[(4)]))){
var statearr_34527_36151 = state_34500;
(statearr_34527_36151[(1)] = cljs.core.first((state_34500[(4)])));

} else {
throw ex__30621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36152 = state_34500;
state_34500 = G__36152;
continue;
} else {
return ret_value__30619__auto__;
}
break;
}
});
cljs$core$async$state_machine__30618__auto__ = function(state_34500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30618__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30618__auto____1.call(this,state_34500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30618__auto____0;
cljs$core$async$state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30618__auto____1;
return cljs$core$async$state_machine__30618__auto__;
})()
})();
var state__31400__auto__ = (function (){var statearr_34528 = f__31399__auto__();
(statearr_34528[(6)] = c__31398__auto___36123);

return statearr_34528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31400__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34530 = arguments.length;
switch (G__34530) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31398__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31399__auto__ = (function (){var switch__30617__auto__ = (function (state_34617){
var state_val_34618 = (state_34617[(1)]);
if((state_val_34618 === (7))){
var inst_34608 = (state_34617[(2)]);
var state_34617__$1 = state_34617;
var statearr_34620_36159 = state_34617__$1;
(statearr_34620_36159[(2)] = inst_34608);

(statearr_34620_36159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34618 === (20))){
var inst_34572 = (state_34617[(7)]);
var inst_34589 = (state_34617[(2)]);
var inst_34590 = cljs.core.next(inst_34572);
var inst_34557 = inst_34590;
var inst_34558 = null;
var inst_34559 = (0);
var inst_34560 = (0);
var state_34617__$1 = (function (){var statearr_34621 = state_34617;
(statearr_34621[(8)] = inst_34560);

(statearr_34621[(9)] = inst_34558);

(statearr_34621[(10)] = inst_34589);

(statearr_34621[(11)] = inst_34559);

(statearr_34621[(12)] = inst_34557);

return statearr_34621;
})();
var statearr_34625_36162 = state_34617__$1;
(statearr_34625_36162[(2)] = null);

(statearr_34625_36162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34618 === (1))){
var state_34617__$1 = state_34617;
var statearr_34626_36163 = state_34617__$1;
(statearr_34626_36163[(2)] = null);

(statearr_34626_36163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34618 === (4))){
var inst_34540 = (state_34617[(13)]);
var inst_34540__$1 = (state_34617[(2)]);
var inst_34541 = (inst_34540__$1 == null);
var state_34617__$1 = (function (){var statearr_34627 = state_34617;
(statearr_34627[(13)] = inst_34540__$1);

return statearr_34627;
})();
if(cljs.core.truth_(inst_34541)){
var statearr_34628_36166 = state_34617__$1;
(statearr_34628_36166[(1)] = (5));

} else {
var statearr_34629_36167 = state_34617__$1;
(statearr_34629_36167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34618 === (15))){
var state_34617__$1 = state_34617;
var statearr_34633_36168 = state_34617__$1;
(statearr_34633_36168[(2)] = null);

(statearr_34633_36168[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34618 === (21))){
var state_34617__$1 = state_34617;
var statearr_34636_36169 = state_34617__$1;
(statearr_34636_36169[(2)] = null);

(statearr_34636_36169[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34618 === (13))){
var inst_34560 = (state_34617[(8)]);
var inst_34558 = (state_34617[(9)]);
var inst_34559 = (state_34617[(11)]);
var inst_34557 = (state_34617[(12)]);
var inst_34567 = (state_34617[(2)]);
var inst_34569 = (inst_34560 + (1));
var tmp34630 = inst_34558;
var tmp34631 = inst_34559;
var tmp34632 = inst_34557;
var inst_34557__$1 = tmp34632;
var inst_34558__$1 = tmp34630;
var inst_34559__$1 = tmp34631;
var inst_34560__$1 = inst_34569;
var state_34617__$1 = (function (){var statearr_34642 = state_34617;
(statearr_34642[(14)] = inst_34567);

(statearr_34642[(8)] = inst_34560__$1);

(statearr_34642[(9)] = inst_34558__$1);

(statearr_34642[(11)] = inst_34559__$1);

(statearr_34642[(12)] = inst_34557__$1);

return statearr_34642;
})();
var statearr_34643_36170 = state_34617__$1;
(statearr_34643_36170[(2)] = null);

(statearr_34643_36170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34618 === (22))){
var state_34617__$1 = state_34617;
var statearr_34645_36171 = state_34617__$1;
(statearr_34645_36171[(2)] = null);

(statearr_34645_36171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34618 === (6))){
var inst_34540 = (state_34617[(13)]);
var inst_34555 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34540) : f.call(null, inst_34540));
var inst_34556 = cljs.core.seq(inst_34555);
var inst_34557 = inst_34556;
var inst_34558 = null;
var inst_34559 = (0);
var inst_34560 = (0);
var state_34617__$1 = (function (){var statearr_34647 = state_34617;
(statearr_34647[(8)] = inst_34560);

(statearr_34647[(9)] = inst_34558);

(statearr_34647[(11)] = inst_34559);

(statearr_34647[(12)] = inst_34557);

return statearr_34647;
})();
var statearr_34651_36173 = state_34617__$1;
(statearr_34651_36173[(2)] = null);

(statearr_34651_36173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34618 === (17))){
var inst_34572 = (state_34617[(7)]);
var inst_34577 = cljs.core.chunk_first(inst_34572);
var inst_34582 = cljs.core.chunk_rest(inst_34572);
var inst_34583 = cljs.core.count(inst_34577);
var inst_34557 = inst_34582;
var inst_34558 = inst_34577;
var inst_34559 = inst_34583;
var inst_34560 = (0);
var state_34617__$1 = (function (){var statearr_34656 = state_34617;
(statearr_34656[(8)] = inst_34560);

(statearr_34656[(9)] = inst_34558);

(statearr_34656[(11)] = inst_34559);

(statearr_34656[(12)] = inst_34557);

return statearr_34656;
})();
var statearr_34657_36174 = state_34617__$1;
(statearr_34657_36174[(2)] = null);

(statearr_34657_36174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34618 === (3))){
var inst_34610 = (state_34617[(2)]);
var state_34617__$1 = state_34617;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34617__$1,inst_34610);
} else {
if((state_val_34618 === (12))){
var inst_34598 = (state_34617[(2)]);
var state_34617__$1 = state_34617;
var statearr_34661_36176 = state_34617__$1;
(statearr_34661_36176[(2)] = inst_34598);

(statearr_34661_36176[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34618 === (2))){
var state_34617__$1 = state_34617;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34617__$1,(4),in$);
} else {
if((state_val_34618 === (23))){
var inst_34606 = (state_34617[(2)]);
var state_34617__$1 = state_34617;
var statearr_34662_36177 = state_34617__$1;
(statearr_34662_36177[(2)] = inst_34606);

(statearr_34662_36177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34618 === (19))){
var inst_34593 = (state_34617[(2)]);
var state_34617__$1 = state_34617;
var statearr_34670_36178 = state_34617__$1;
(statearr_34670_36178[(2)] = inst_34593);

(statearr_34670_36178[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34618 === (11))){
var inst_34572 = (state_34617[(7)]);
var inst_34557 = (state_34617[(12)]);
var inst_34572__$1 = cljs.core.seq(inst_34557);
var state_34617__$1 = (function (){var statearr_34678 = state_34617;
(statearr_34678[(7)] = inst_34572__$1);

return statearr_34678;
})();
if(inst_34572__$1){
var statearr_34686_36180 = state_34617__$1;
(statearr_34686_36180[(1)] = (14));

} else {
var statearr_34687_36181 = state_34617__$1;
(statearr_34687_36181[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34618 === (9))){
var inst_34600 = (state_34617[(2)]);
var inst_34601 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34617__$1 = (function (){var statearr_34706 = state_34617;
(statearr_34706[(15)] = inst_34600);

return statearr_34706;
})();
if(cljs.core.truth_(inst_34601)){
var statearr_34713_36182 = state_34617__$1;
(statearr_34713_36182[(1)] = (21));

} else {
var statearr_34719_36183 = state_34617__$1;
(statearr_34719_36183[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34618 === (5))){
var inst_34543 = cljs.core.async.close_BANG_(out);
var state_34617__$1 = state_34617;
var statearr_34720_36184 = state_34617__$1;
(statearr_34720_36184[(2)] = inst_34543);

(statearr_34720_36184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34618 === (14))){
var inst_34572 = (state_34617[(7)]);
var inst_34575 = cljs.core.chunked_seq_QMARK_(inst_34572);
var state_34617__$1 = state_34617;
if(inst_34575){
var statearr_34722_36186 = state_34617__$1;
(statearr_34722_36186[(1)] = (17));

} else {
var statearr_34723_36187 = state_34617__$1;
(statearr_34723_36187[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34618 === (16))){
var inst_34596 = (state_34617[(2)]);
var state_34617__$1 = state_34617;
var statearr_34727_36188 = state_34617__$1;
(statearr_34727_36188[(2)] = inst_34596);

(statearr_34727_36188[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34618 === (10))){
var inst_34560 = (state_34617[(8)]);
var inst_34558 = (state_34617[(9)]);
var inst_34565 = cljs.core._nth(inst_34558,inst_34560);
var state_34617__$1 = state_34617;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34617__$1,(13),out,inst_34565);
} else {
if((state_val_34618 === (18))){
var inst_34572 = (state_34617[(7)]);
var inst_34587 = cljs.core.first(inst_34572);
var state_34617__$1 = state_34617;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34617__$1,(20),out,inst_34587);
} else {
if((state_val_34618 === (8))){
var inst_34560 = (state_34617[(8)]);
var inst_34559 = (state_34617[(11)]);
var inst_34562 = (inst_34560 < inst_34559);
var inst_34563 = inst_34562;
var state_34617__$1 = state_34617;
if(cljs.core.truth_(inst_34563)){
var statearr_34733_36195 = state_34617__$1;
(statearr_34733_36195[(1)] = (10));

} else {
var statearr_34734_36196 = state_34617__$1;
(statearr_34734_36196[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30618__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30618__auto____0 = (function (){
var statearr_34735 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34735[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30618__auto__);

(statearr_34735[(1)] = (1));

return statearr_34735;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30618__auto____1 = (function (state_34617){
while(true){
var ret_value__30619__auto__ = (function (){try{while(true){
var result__30620__auto__ = switch__30617__auto__(state_34617);
if(cljs.core.keyword_identical_QMARK_(result__30620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30620__auto__;
}
break;
}
}catch (e34738){var ex__30621__auto__ = e34738;
var statearr_34743_36198 = state_34617;
(statearr_34743_36198[(2)] = ex__30621__auto__);


if(cljs.core.seq((state_34617[(4)]))){
var statearr_34745_36199 = state_34617;
(statearr_34745_36199[(1)] = cljs.core.first((state_34617[(4)])));

} else {
throw ex__30621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36200 = state_34617;
state_34617 = G__36200;
continue;
} else {
return ret_value__30619__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30618__auto__ = function(state_34617){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30618__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30618__auto____1.call(this,state_34617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30618__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30618__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30618__auto__;
})()
})();
var state__31400__auto__ = (function (){var statearr_34750 = f__31399__auto__();
(statearr_34750[(6)] = c__31398__auto__);

return statearr_34750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31400__auto__);
}));

return c__31398__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34761 = arguments.length;
switch (G__34761) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34765 = arguments.length;
switch (G__34765) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34773 = arguments.length;
switch (G__34773) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31398__auto___36211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31399__auto__ = (function (){var switch__30617__auto__ = (function (state_34805){
var state_val_34806 = (state_34805[(1)]);
if((state_val_34806 === (7))){
var inst_34800 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
var statearr_34814_36212 = state_34805__$1;
(statearr_34814_36212[(2)] = inst_34800);

(statearr_34814_36212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (1))){
var inst_34782 = null;
var state_34805__$1 = (function (){var statearr_34815 = state_34805;
(statearr_34815[(7)] = inst_34782);

return statearr_34815;
})();
var statearr_34816_36213 = state_34805__$1;
(statearr_34816_36213[(2)] = null);

(statearr_34816_36213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (4))){
var inst_34785 = (state_34805[(8)]);
var inst_34785__$1 = (state_34805[(2)]);
var inst_34786 = (inst_34785__$1 == null);
var inst_34787 = cljs.core.not(inst_34786);
var state_34805__$1 = (function (){var statearr_34818 = state_34805;
(statearr_34818[(8)] = inst_34785__$1);

return statearr_34818;
})();
if(inst_34787){
var statearr_34825_36214 = state_34805__$1;
(statearr_34825_36214[(1)] = (5));

} else {
var statearr_34826_36215 = state_34805__$1;
(statearr_34826_36215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (6))){
var state_34805__$1 = state_34805;
var statearr_34827_36217 = state_34805__$1;
(statearr_34827_36217[(2)] = null);

(statearr_34827_36217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (3))){
var inst_34802 = (state_34805[(2)]);
var inst_34803 = cljs.core.async.close_BANG_(out);
var state_34805__$1 = (function (){var statearr_34828 = state_34805;
(statearr_34828[(9)] = inst_34802);

return statearr_34828;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34805__$1,inst_34803);
} else {
if((state_val_34806 === (2))){
var state_34805__$1 = state_34805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34805__$1,(4),ch);
} else {
if((state_val_34806 === (11))){
var inst_34785 = (state_34805[(8)]);
var inst_34794 = (state_34805[(2)]);
var inst_34782 = inst_34785;
var state_34805__$1 = (function (){var statearr_34835 = state_34805;
(statearr_34835[(7)] = inst_34782);

(statearr_34835[(10)] = inst_34794);

return statearr_34835;
})();
var statearr_34837_36226 = state_34805__$1;
(statearr_34837_36226[(2)] = null);

(statearr_34837_36226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (9))){
var inst_34785 = (state_34805[(8)]);
var state_34805__$1 = state_34805;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34805__$1,(11),out,inst_34785);
} else {
if((state_val_34806 === (5))){
var inst_34782 = (state_34805[(7)]);
var inst_34785 = (state_34805[(8)]);
var inst_34789 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34785,inst_34782);
var state_34805__$1 = state_34805;
if(inst_34789){
var statearr_34840_36227 = state_34805__$1;
(statearr_34840_36227[(1)] = (8));

} else {
var statearr_34841_36229 = state_34805__$1;
(statearr_34841_36229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (10))){
var inst_34797 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
var statearr_34842_36230 = state_34805__$1;
(statearr_34842_36230[(2)] = inst_34797);

(statearr_34842_36230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (8))){
var inst_34782 = (state_34805[(7)]);
var tmp34839 = inst_34782;
var inst_34782__$1 = tmp34839;
var state_34805__$1 = (function (){var statearr_34843 = state_34805;
(statearr_34843[(7)] = inst_34782__$1);

return statearr_34843;
})();
var statearr_34844_36231 = state_34805__$1;
(statearr_34844_36231[(2)] = null);

(statearr_34844_36231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30618__auto__ = null;
var cljs$core$async$state_machine__30618__auto____0 = (function (){
var statearr_34857 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34857[(0)] = cljs$core$async$state_machine__30618__auto__);

(statearr_34857[(1)] = (1));

return statearr_34857;
});
var cljs$core$async$state_machine__30618__auto____1 = (function (state_34805){
while(true){
var ret_value__30619__auto__ = (function (){try{while(true){
var result__30620__auto__ = switch__30617__auto__(state_34805);
if(cljs.core.keyword_identical_QMARK_(result__30620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30620__auto__;
}
break;
}
}catch (e34859){var ex__30621__auto__ = e34859;
var statearr_34860_36232 = state_34805;
(statearr_34860_36232[(2)] = ex__30621__auto__);


if(cljs.core.seq((state_34805[(4)]))){
var statearr_34861_36234 = state_34805;
(statearr_34861_36234[(1)] = cljs.core.first((state_34805[(4)])));

} else {
throw ex__30621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36236 = state_34805;
state_34805 = G__36236;
continue;
} else {
return ret_value__30619__auto__;
}
break;
}
});
cljs$core$async$state_machine__30618__auto__ = function(state_34805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30618__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30618__auto____1.call(this,state_34805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30618__auto____0;
cljs$core$async$state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30618__auto____1;
return cljs$core$async$state_machine__30618__auto__;
})()
})();
var state__31400__auto__ = (function (){var statearr_34863 = f__31399__auto__();
(statearr_34863[(6)] = c__31398__auto___36211);

return statearr_34863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31400__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34870 = arguments.length;
switch (G__34870) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31398__auto___36242 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31399__auto__ = (function (){var switch__30617__auto__ = (function (state_34914){
var state_val_34915 = (state_34914[(1)]);
if((state_val_34915 === (7))){
var inst_34909 = (state_34914[(2)]);
var state_34914__$1 = state_34914;
var statearr_34917_36243 = state_34914__$1;
(statearr_34917_36243[(2)] = inst_34909);

(statearr_34917_36243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (1))){
var inst_34874 = (new Array(n));
var inst_34875 = inst_34874;
var inst_34876 = (0);
var state_34914__$1 = (function (){var statearr_34921 = state_34914;
(statearr_34921[(7)] = inst_34876);

(statearr_34921[(8)] = inst_34875);

return statearr_34921;
})();
var statearr_34922_36244 = state_34914__$1;
(statearr_34922_36244[(2)] = null);

(statearr_34922_36244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (4))){
var inst_34880 = (state_34914[(9)]);
var inst_34880__$1 = (state_34914[(2)]);
var inst_34881 = (inst_34880__$1 == null);
var inst_34882 = cljs.core.not(inst_34881);
var state_34914__$1 = (function (){var statearr_34923 = state_34914;
(statearr_34923[(9)] = inst_34880__$1);

return statearr_34923;
})();
if(inst_34882){
var statearr_34924_36245 = state_34914__$1;
(statearr_34924_36245[(1)] = (5));

} else {
var statearr_34925_36246 = state_34914__$1;
(statearr_34925_36246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (15))){
var inst_34903 = (state_34914[(2)]);
var state_34914__$1 = state_34914;
var statearr_34926_36247 = state_34914__$1;
(statearr_34926_36247[(2)] = inst_34903);

(statearr_34926_36247[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (13))){
var state_34914__$1 = state_34914;
var statearr_34927_36249 = state_34914__$1;
(statearr_34927_36249[(2)] = null);

(statearr_34927_36249[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (6))){
var inst_34876 = (state_34914[(7)]);
var inst_34899 = (inst_34876 > (0));
var state_34914__$1 = state_34914;
if(cljs.core.truth_(inst_34899)){
var statearr_34928_36253 = state_34914__$1;
(statearr_34928_36253[(1)] = (12));

} else {
var statearr_34929_36254 = state_34914__$1;
(statearr_34929_36254[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (3))){
var inst_34911 = (state_34914[(2)]);
var state_34914__$1 = state_34914;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34914__$1,inst_34911);
} else {
if((state_val_34915 === (12))){
var inst_34875 = (state_34914[(8)]);
var inst_34901 = cljs.core.vec(inst_34875);
var state_34914__$1 = state_34914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34914__$1,(15),out,inst_34901);
} else {
if((state_val_34915 === (2))){
var state_34914__$1 = state_34914;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34914__$1,(4),ch);
} else {
if((state_val_34915 === (11))){
var inst_34893 = (state_34914[(2)]);
var inst_34894 = (new Array(n));
var inst_34875 = inst_34894;
var inst_34876 = (0);
var state_34914__$1 = (function (){var statearr_34930 = state_34914;
(statearr_34930[(7)] = inst_34876);

(statearr_34930[(8)] = inst_34875);

(statearr_34930[(10)] = inst_34893);

return statearr_34930;
})();
var statearr_34931_36261 = state_34914__$1;
(statearr_34931_36261[(2)] = null);

(statearr_34931_36261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (9))){
var inst_34875 = (state_34914[(8)]);
var inst_34891 = cljs.core.vec(inst_34875);
var state_34914__$1 = state_34914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34914__$1,(11),out,inst_34891);
} else {
if((state_val_34915 === (5))){
var inst_34885 = (state_34914[(11)]);
var inst_34876 = (state_34914[(7)]);
var inst_34875 = (state_34914[(8)]);
var inst_34880 = (state_34914[(9)]);
var inst_34884 = (inst_34875[inst_34876] = inst_34880);
var inst_34885__$1 = (inst_34876 + (1));
var inst_34886 = (inst_34885__$1 < n);
var state_34914__$1 = (function (){var statearr_34937 = state_34914;
(statearr_34937[(11)] = inst_34885__$1);

(statearr_34937[(12)] = inst_34884);

return statearr_34937;
})();
if(cljs.core.truth_(inst_34886)){
var statearr_34941_36263 = state_34914__$1;
(statearr_34941_36263[(1)] = (8));

} else {
var statearr_34942_36264 = state_34914__$1;
(statearr_34942_36264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (14))){
var inst_34906 = (state_34914[(2)]);
var inst_34907 = cljs.core.async.close_BANG_(out);
var state_34914__$1 = (function (){var statearr_34954 = state_34914;
(statearr_34954[(13)] = inst_34906);

return statearr_34954;
})();
var statearr_34955_36265 = state_34914__$1;
(statearr_34955_36265[(2)] = inst_34907);

(statearr_34955_36265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (10))){
var inst_34897 = (state_34914[(2)]);
var state_34914__$1 = state_34914;
var statearr_34956_36268 = state_34914__$1;
(statearr_34956_36268[(2)] = inst_34897);

(statearr_34956_36268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34915 === (8))){
var inst_34885 = (state_34914[(11)]);
var inst_34875 = (state_34914[(8)]);
var tmp34953 = inst_34875;
var inst_34875__$1 = tmp34953;
var inst_34876 = inst_34885;
var state_34914__$1 = (function (){var statearr_34957 = state_34914;
(statearr_34957[(7)] = inst_34876);

(statearr_34957[(8)] = inst_34875__$1);

return statearr_34957;
})();
var statearr_34958_36269 = state_34914__$1;
(statearr_34958_36269[(2)] = null);

(statearr_34958_36269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30618__auto__ = null;
var cljs$core$async$state_machine__30618__auto____0 = (function (){
var statearr_34959 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34959[(0)] = cljs$core$async$state_machine__30618__auto__);

(statearr_34959[(1)] = (1));

return statearr_34959;
});
var cljs$core$async$state_machine__30618__auto____1 = (function (state_34914){
while(true){
var ret_value__30619__auto__ = (function (){try{while(true){
var result__30620__auto__ = switch__30617__auto__(state_34914);
if(cljs.core.keyword_identical_QMARK_(result__30620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30620__auto__;
}
break;
}
}catch (e34960){var ex__30621__auto__ = e34960;
var statearr_34961_36272 = state_34914;
(statearr_34961_36272[(2)] = ex__30621__auto__);


if(cljs.core.seq((state_34914[(4)]))){
var statearr_34962_36274 = state_34914;
(statearr_34962_36274[(1)] = cljs.core.first((state_34914[(4)])));

} else {
throw ex__30621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36276 = state_34914;
state_34914 = G__36276;
continue;
} else {
return ret_value__30619__auto__;
}
break;
}
});
cljs$core$async$state_machine__30618__auto__ = function(state_34914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30618__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30618__auto____1.call(this,state_34914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30618__auto____0;
cljs$core$async$state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30618__auto____1;
return cljs$core$async$state_machine__30618__auto__;
})()
})();
var state__31400__auto__ = (function (){var statearr_34963 = f__31399__auto__();
(statearr_34963[(6)] = c__31398__auto___36242);

return statearr_34963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31400__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34965 = arguments.length;
switch (G__34965) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31398__auto___36280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31399__auto__ = (function (){var switch__30617__auto__ = (function (state_35016){
var state_val_35017 = (state_35016[(1)]);
if((state_val_35017 === (7))){
var inst_35012 = (state_35016[(2)]);
var state_35016__$1 = state_35016;
var statearr_35018_36282 = state_35016__$1;
(statearr_35018_36282[(2)] = inst_35012);

(statearr_35018_36282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35017 === (1))){
var inst_34972 = [];
var inst_34973 = inst_34972;
var inst_34974 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35016__$1 = (function (){var statearr_35019 = state_35016;
(statearr_35019[(7)] = inst_34973);

(statearr_35019[(8)] = inst_34974);

return statearr_35019;
})();
var statearr_35020_36287 = state_35016__$1;
(statearr_35020_36287[(2)] = null);

(statearr_35020_36287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35017 === (4))){
var inst_34977 = (state_35016[(9)]);
var inst_34977__$1 = (state_35016[(2)]);
var inst_34978 = (inst_34977__$1 == null);
var inst_34979 = cljs.core.not(inst_34978);
var state_35016__$1 = (function (){var statearr_35022 = state_35016;
(statearr_35022[(9)] = inst_34977__$1);

return statearr_35022;
})();
if(inst_34979){
var statearr_35024_36297 = state_35016__$1;
(statearr_35024_36297[(1)] = (5));

} else {
var statearr_35025_36299 = state_35016__$1;
(statearr_35025_36299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35017 === (15))){
var inst_34973 = (state_35016[(7)]);
var inst_35004 = cljs.core.vec(inst_34973);
var state_35016__$1 = state_35016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35016__$1,(18),out,inst_35004);
} else {
if((state_val_35017 === (13))){
var inst_34999 = (state_35016[(2)]);
var state_35016__$1 = state_35016;
var statearr_35026_36304 = state_35016__$1;
(statearr_35026_36304[(2)] = inst_34999);

(statearr_35026_36304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35017 === (6))){
var inst_34973 = (state_35016[(7)]);
var inst_35001 = inst_34973.length;
var inst_35002 = (inst_35001 > (0));
var state_35016__$1 = state_35016;
if(cljs.core.truth_(inst_35002)){
var statearr_35027_36309 = state_35016__$1;
(statearr_35027_36309[(1)] = (15));

} else {
var statearr_35028_36310 = state_35016__$1;
(statearr_35028_36310[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35017 === (17))){
var inst_35009 = (state_35016[(2)]);
var inst_35010 = cljs.core.async.close_BANG_(out);
var state_35016__$1 = (function (){var statearr_35029 = state_35016;
(statearr_35029[(10)] = inst_35009);

return statearr_35029;
})();
var statearr_35032_36311 = state_35016__$1;
(statearr_35032_36311[(2)] = inst_35010);

(statearr_35032_36311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35017 === (3))){
var inst_35014 = (state_35016[(2)]);
var state_35016__$1 = state_35016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35016__$1,inst_35014);
} else {
if((state_val_35017 === (12))){
var inst_34973 = (state_35016[(7)]);
var inst_34992 = cljs.core.vec(inst_34973);
var state_35016__$1 = state_35016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35016__$1,(14),out,inst_34992);
} else {
if((state_val_35017 === (2))){
var state_35016__$1 = state_35016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35016__$1,(4),ch);
} else {
if((state_val_35017 === (11))){
var inst_34977 = (state_35016[(9)]);
var inst_34973 = (state_35016[(7)]);
var inst_34981 = (state_35016[(11)]);
var inst_34989 = inst_34973.push(inst_34977);
var tmp35034 = inst_34973;
var inst_34973__$1 = tmp35034;
var inst_34974 = inst_34981;
var state_35016__$1 = (function (){var statearr_35036 = state_35016;
(statearr_35036[(12)] = inst_34989);

(statearr_35036[(7)] = inst_34973__$1);

(statearr_35036[(8)] = inst_34974);

return statearr_35036;
})();
var statearr_35037_36320 = state_35016__$1;
(statearr_35037_36320[(2)] = null);

(statearr_35037_36320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35017 === (9))){
var inst_34974 = (state_35016[(8)]);
var inst_34985 = cljs.core.keyword_identical_QMARK_(inst_34974,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35016__$1 = state_35016;
var statearr_35045_36323 = state_35016__$1;
(statearr_35045_36323[(2)] = inst_34985);

(statearr_35045_36323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35017 === (5))){
var inst_34977 = (state_35016[(9)]);
var inst_34981 = (state_35016[(11)]);
var inst_34982 = (state_35016[(13)]);
var inst_34974 = (state_35016[(8)]);
var inst_34981__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34977) : f.call(null, inst_34977));
var inst_34982__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34981__$1,inst_34974);
var state_35016__$1 = (function (){var statearr_35046 = state_35016;
(statearr_35046[(11)] = inst_34981__$1);

(statearr_35046[(13)] = inst_34982__$1);

return statearr_35046;
})();
if(inst_34982__$1){
var statearr_35047_36324 = state_35016__$1;
(statearr_35047_36324[(1)] = (8));

} else {
var statearr_35049_36325 = state_35016__$1;
(statearr_35049_36325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35017 === (14))){
var inst_34977 = (state_35016[(9)]);
var inst_34981 = (state_35016[(11)]);
var inst_34994 = (state_35016[(2)]);
var inst_34995 = [];
var inst_34996 = inst_34995.push(inst_34977);
var inst_34973 = inst_34995;
var inst_34974 = inst_34981;
var state_35016__$1 = (function (){var statearr_35050 = state_35016;
(statearr_35050[(14)] = inst_34996);

(statearr_35050[(7)] = inst_34973);

(statearr_35050[(8)] = inst_34974);

(statearr_35050[(15)] = inst_34994);

return statearr_35050;
})();
var statearr_35051_36326 = state_35016__$1;
(statearr_35051_36326[(2)] = null);

(statearr_35051_36326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35017 === (16))){
var state_35016__$1 = state_35016;
var statearr_35053_36327 = state_35016__$1;
(statearr_35053_36327[(2)] = null);

(statearr_35053_36327[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35017 === (10))){
var inst_34987 = (state_35016[(2)]);
var state_35016__$1 = state_35016;
if(cljs.core.truth_(inst_34987)){
var statearr_35056_36328 = state_35016__$1;
(statearr_35056_36328[(1)] = (11));

} else {
var statearr_35058_36329 = state_35016__$1;
(statearr_35058_36329[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35017 === (18))){
var inst_35006 = (state_35016[(2)]);
var state_35016__$1 = state_35016;
var statearr_35060_36331 = state_35016__$1;
(statearr_35060_36331[(2)] = inst_35006);

(statearr_35060_36331[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35017 === (8))){
var inst_34982 = (state_35016[(13)]);
var state_35016__$1 = state_35016;
var statearr_35061_36332 = state_35016__$1;
(statearr_35061_36332[(2)] = inst_34982);

(statearr_35061_36332[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30618__auto__ = null;
var cljs$core$async$state_machine__30618__auto____0 = (function (){
var statearr_35067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35067[(0)] = cljs$core$async$state_machine__30618__auto__);

(statearr_35067[(1)] = (1));

return statearr_35067;
});
var cljs$core$async$state_machine__30618__auto____1 = (function (state_35016){
while(true){
var ret_value__30619__auto__ = (function (){try{while(true){
var result__30620__auto__ = switch__30617__auto__(state_35016);
if(cljs.core.keyword_identical_QMARK_(result__30620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30620__auto__;
}
break;
}
}catch (e35072){var ex__30621__auto__ = e35072;
var statearr_35073_36334 = state_35016;
(statearr_35073_36334[(2)] = ex__30621__auto__);


if(cljs.core.seq((state_35016[(4)]))){
var statearr_35074_36335 = state_35016;
(statearr_35074_36335[(1)] = cljs.core.first((state_35016[(4)])));

} else {
throw ex__30621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36336 = state_35016;
state_35016 = G__36336;
continue;
} else {
return ret_value__30619__auto__;
}
break;
}
});
cljs$core$async$state_machine__30618__auto__ = function(state_35016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30618__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30618__auto____1.call(this,state_35016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30618__auto____0;
cljs$core$async$state_machine__30618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30618__auto____1;
return cljs$core$async$state_machine__30618__auto__;
})()
})();
var state__31400__auto__ = (function (){var statearr_35076 = f__31399__auto__();
(statearr_35076[(6)] = c__31398__auto___36280);

return statearr_35076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31400__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
