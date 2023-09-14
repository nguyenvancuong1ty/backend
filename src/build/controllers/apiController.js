"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17, _ref18, _ref19, _ref20, _ref21, _ref22, _ref23, _ref24, _ref25, _ref26, _ref27, _ref28, _ref29, _ref30, _ref31, _ref32, _ref33, _ref34;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var connection = require('../config/connect');
var apiGetUsers = function apiGetUsers(_x, _x2) {
  return (_ref = _ref || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var sql, _yield$connection$que, _yield$connection$que2, result, fields;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          sql = 'select * from Users';
          _context.next = 3;
          return connection.query(sql);
        case 3:
          _yield$connection$que = _context.sent;
          _yield$connection$que2 = _slicedToArray(_yield$connection$que, 2);
          result = _yield$connection$que2[0];
          fields = _yield$connection$que2[1];
          return _context.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }))).apply(this, arguments);
};
var apiCreateUser = function apiCreateUser(_x3, _x4) {
  return (_ref2 = _ref2 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body, email, username, password, sql, _yield$connection$que3, _yield$connection$que4, result, fields;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, username = _req$body.username, password = _req$body.password;
          sql = "INSERT INTO Users(email, userName,authorization, password) values(?,?,?,?)";
          _context2.next = 4;
          return connection.query(sql, [email, username, 0, password]);
        case 4:
          _yield$connection$que3 = _context2.sent;
          _yield$connection$que4 = _slicedToArray(_yield$connection$que3, 2);
          result = _yield$connection$que4[0];
          fields = _yield$connection$que4[1];
          return _context2.abrupt("return", res.status(200).json({
            statusCode: 200
          }));
        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }))).apply(this, arguments);
};
var apiUpdateUser = function apiUpdateUser(_x5, _x6) {
  return (_ref3 = _ref3 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body2, id, email, username, password, sql, _yield$connection$que5, _yield$connection$que6, result, fields;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body2 = req.body, id = _req$body2.id, email = _req$body2.email, username = _req$body2.username, password = _req$body2.password;
          sql = 'update Users set email = ?, userName = ?, password = ? where id = ?';
          _context3.next = 4;
          return connection.query(sql, [email, username, city, id]);
        case 4:
          _yield$connection$que5 = _context3.sent;
          _yield$connection$que6 = _slicedToArray(_yield$connection$que5, 2);
          result = _yield$connection$que6[0];
          fields = _yield$connection$que6[1];
          return _context3.abrupt("return", res.status(200).json({
            statusCode: 200
          }));
        case 9:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }))).apply(this, arguments);
};
var apiDeleteUser = function apiDeleteUser(_x7, _x8) {
  return (_ref4 = _ref4 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var sql, userId, _yield$connection$que7, _yield$connection$que8, result, fields;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          sql = 'delete from Users where id = ?';
          userId = req.body.id;
          _context4.prev = 2;
          _context4.next = 5;
          return connection.query(sql, [userId]);
        case 5:
          _yield$connection$que7 = _context4.sent;
          _yield$connection$que8 = _slicedToArray(_yield$connection$que7, 2);
          result = _yield$connection$que8[0];
          fields = _yield$connection$que8[1];
          return _context4.abrupt("return", res.status(200).json({
            statusCode: 200,
            result: result
          }));
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](2);
          return _context4.abrupt("return", res.status(400).json({
            statusCode: 400,
            result: _context4.t0
          }));
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 12]]);
  }))).apply(this, arguments);
};

//Login
var apiLogin = function apiLogin(_x9, _x10) {
  return (_ref5 = _ref5 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$body3, username, password, sql, _yield$connection$que9, _yield$connection$que10, result, fields;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _req$body3 = req.body, username = _req$body3.username, password = _req$body3.password;
          sql = 'select * from Users where userName = ? and password = ?';
          _context5.next = 4;
          return connection.query(sql, [username, password]);
        case 4:
          _yield$connection$que9 = _context5.sent;
          _yield$connection$que10 = _slicedToArray(_yield$connection$que9, 2);
          result = _yield$connection$que10[0];
          fields = _yield$connection$que10[1];
          if (!result.length) {
            _context5.next = 12;
            break;
          }
          return _context5.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 12:
          res.send('Invalid Username or Password');
        case 13:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }))).apply(this, arguments);
};

//Info

var apiGetInfo = function apiGetInfo(_x11, _x12) {
  return (_ref6 = _ref6 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var sql, _yield$connection$que11, _yield$connection$que12, result, fields;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          sql = 'select * from introduceshop';
          _context6.next = 3;
          return connection.query(sql);
        case 3:
          _yield$connection$que11 = _context6.sent;
          _yield$connection$que12 = _slicedToArray(_yield$connection$que11, 2);
          result = _yield$connection$que12[0];
          fields = _yield$connection$que12[1];
          return _context6.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 8:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }))).apply(this, arguments);
};

//Get Cakes
var apiGetCakes = function apiGetCakes(_x13, _x14) {
  return (_ref7 = _ref7 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var sql, _yield$connection$que13, _yield$connection$que14, result, fields;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          sql = 'select * from cakes';
          _context7.next = 3;
          return connection.query(sql);
        case 3:
          _yield$connection$que13 = _context7.sent;
          _yield$connection$que14 = _slicedToArray(_yield$connection$que13, 2);
          result = _yield$connection$que14[0];
          fields = _yield$connection$que14[1];
          return _context7.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 8:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }))).apply(this, arguments);
};

//Add Cake
var apiAddCake = function apiAddCake(_x15, _x16) {
  return (_ref8 = _ref8 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _req$body4, iconLink, nameCategory, sql, _yield$connection$que15, _yield$connection$que16, result, fields;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _req$body4 = req.body, iconLink = _req$body4.iconLink, nameCategory = _req$body4.nameCategory;
          sql = 'insert into cakes(nameCategory, iconLink) values(?,?)';
          _context8.next = 4;
          return connection.query(sql, [nameCategory, iconLink]);
        case 4:
          _context8.next = 6;
          return connection.query('select * from cakes');
        case 6:
          _yield$connection$que15 = _context8.sent;
          _yield$connection$que16 = _slicedToArray(_yield$connection$que15, 2);
          result = _yield$connection$que16[0];
          fields = _yield$connection$que16[1];
          return _context8.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 11:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }))).apply(this, arguments);
};

// Update cake
var apiUpdateCake = function apiUpdateCake(_x17, _x18) {
  return (_ref9 = _ref9 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var _req$body5, iconLink, nameCategory, categoryCake, sql, _yield$connection$que17, _yield$connection$que18, result, fields;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _req$body5 = req.body, iconLink = _req$body5.iconLink, nameCategory = _req$body5.nameCategory, categoryCake = _req$body5.categoryCake;
          sql = 'update cakes set nameCategory = ?, iconLink = ? where categoryCake = ?';
          _context9.next = 4;
          return connection.query(sql, [nameCategory, iconLink, categoryCake]);
        case 4:
          _context9.next = 6;
          return connection.query('select * from cakes');
        case 6:
          _yield$connection$que17 = _context9.sent;
          _yield$connection$que18 = _slicedToArray(_yield$connection$que17, 2);
          result = _yield$connection$que18[0];
          fields = _yield$connection$que18[1];
          return _context9.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 11:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }))).apply(this, arguments);
};
// Delete type of Cakes
var apiDeleteCakes = function apiDeleteCakes(_x19, _x20) {
  return (_ref10 = _ref10 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var id, sql, _yield$connection$que19, _yield$connection$que20, result, fields;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          id = req.body.id;
          _context10.prev = 1;
          sql = 'delete from cakes where categoryCake = ?';
          _context10.next = 5;
          return connection.query(sql, [id]);
        case 5:
          _yield$connection$que19 = _context10.sent;
          _yield$connection$que20 = _slicedToArray(_yield$connection$que19, 2);
          result = _yield$connection$que20[0];
          fields = _yield$connection$que20[1];
          return _context10.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 12:
          _context10.prev = 12;
          _context10.t0 = _context10["catch"](1);
          return _context10.abrupt("return", res.status(400).json({
            statusCode: 400,
            data: _context10.t0
          }));
        case 15:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[1, 12]]);
  }))).apply(this, arguments);
};
var apiGetNewProduct = function apiGetNewProduct(_x21, _x22) {
  return (_ref11 = _ref11 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var sql, _yield$connection$que21, _yield$connection$que22, result, fields;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          sql = 'select * from newproduct';
          _context11.next = 3;
          return connection.query(sql);
        case 3:
          _yield$connection$que21 = _context11.sent;
          _yield$connection$que22 = _slicedToArray(_yield$connection$que21, 2);
          result = _yield$connection$que22[0];
          fields = _yield$connection$que22[1];
          return _context11.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 8:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }))).apply(this, arguments);
};

// Voucher Get
var apiGetVoucher = function apiGetVoucher(_x23, _x24) {
  return (_ref12 = _ref12 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var sql, _yield$connection$que23, _yield$connection$que24, result, fields;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          sql = 'select * from voucher';
          _context12.next = 3;
          return connection.query(sql);
        case 3:
          _yield$connection$que23 = _context12.sent;
          _yield$connection$que24 = _slicedToArray(_yield$connection$que23, 2);
          result = _yield$connection$que24[0];
          fields = _yield$connection$que24[1];
          return _context12.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 8:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }))).apply(this, arguments);
};

// Voucher Add
var apiAddVoucher = function apiAddVoucher(_x25, _x26) {
  return (_ref13 = _ref13 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var data, sql, _yield$connection$que25, _yield$connection$que26, result, fields;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          data = req.body;
          sql = 'insert into voucher(code,detail, requirement) values(?,?,?)';
          _context13.next = 4;
          return connection.query(sql, [data.code, data.detail, data.requirement]);
        case 4:
          _context13.next = 6;
          return connection.query('select * from voucher');
        case 6:
          _yield$connection$que25 = _context13.sent;
          _yield$connection$que26 = _slicedToArray(_yield$connection$que25, 2);
          result = _yield$connection$que26[0];
          fields = _yield$connection$que26[1];
          return _context13.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 11:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }))).apply(this, arguments);
};

// Voucher delete
var apiDeleteVoucher = function apiDeleteVoucher(_x27, _x28) {
  return (_ref14 = _ref14 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var id, sql, _yield$connection$que27, _yield$connection$que28, result, fields;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          id = req.body.id;
          sql = 'delete from voucher where id = ?';
          _context14.next = 4;
          return connection.query(sql, [id]);
        case 4:
          _yield$connection$que27 = _context14.sent;
          _yield$connection$que28 = _slicedToArray(_yield$connection$que27, 2);
          result = _yield$connection$que28[0];
          fields = _yield$connection$que28[1];
          return _context14.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 9:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }))).apply(this, arguments);
};

// Voucher update

var apiUpdateVoucher = function apiUpdateVoucher(_x29, _x30) {
  return (_ref15 = _ref15 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var data, sql, _yield$connection$que29, _yield$connection$que30, result, fields;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          data = req.body;
          sql = 'update voucher set code =?, date =?, detail =?, requirement = ? where id = ?';
          _context15.prev = 2;
          _context15.next = 5;
          return connection.query(sql, [data.code, data.date, data.detail, data.requirement, data.id]);
        case 5:
          _context15.next = 7;
          return connection.query('select * from voucher');
        case 7:
          _yield$connection$que29 = _context15.sent;
          _yield$connection$que30 = _slicedToArray(_yield$connection$que29, 2);
          result = _yield$connection$que30[0];
          fields = _yield$connection$que30[1];
          return _context15.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 14:
          _context15.prev = 14;
          _context15.t0 = _context15["catch"](2);
          return _context15.abrupt("return", res.status(400).json({
            statusCode: 200,
            data: 'error'
          }));
        case 17:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[2, 14]]);
  }))).apply(this, arguments);
};

// Get cakes detail
var apiGetCakedatil = function apiGetCakedatil(_x31, _x32) {
  return (_ref16 = _ref16 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var sql, _yield$connection$que31, _yield$connection$que32, result, fields;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          sql = 'select * from cakedetail';
          _context16.next = 3;
          return connection.query(sql);
        case 3:
          _yield$connection$que31 = _context16.sent;
          _yield$connection$que32 = _slicedToArray(_yield$connection$que31, 2);
          result = _yield$connection$que32[0];
          fields = _yield$connection$que32[1];
          return _context16.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 8:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }))).apply(this, arguments);
};

// Delete cake detail

var apiDeleteCakeDetail = function apiDeleteCakeDetail(_x33, _x34) {
  return (_ref17 = _ref17 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var id, sql, _yield$connection$que33, _yield$connection$que34, result, fields;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          id = req.body.id;
          sql = 'delete from cakedetail where id = ?';
          _context17.next = 4;
          return connection.query(sql, [id]);
        case 4:
          _yield$connection$que33 = _context17.sent;
          _yield$connection$que34 = _slicedToArray(_yield$connection$que33, 2);
          result = _yield$connection$que34[0];
          fields = _yield$connection$que34[1];
          return _context17.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 9:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }))).apply(this, arguments);
};

// Add cake detail
var apiAddCakeDetail = function apiAddCakeDetail(_x35, _x36) {
  return (_ref18 = _ref18 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var data, sql, _yield$connection$que35, _yield$connection$que36, result, fields;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          data = req.body;
          sql = 'insert into cakedetail(categoryCake, nameCake, price,detail, sold, inventory, images, sale) values(?,?,?,?,?,?,?,?)';
          _context18.prev = 2;
          _context18.next = 5;
          return connection.query(sql, [data.categoryCake, data.nameCake, data.price, data.detail, data.sold, data.inventory, data.images, data.sale]);
        case 5:
          _context18.next = 7;
          return connection.query('select * from cakedetail');
        case 7:
          _yield$connection$que35 = _context18.sent;
          _yield$connection$que36 = _slicedToArray(_yield$connection$que35, 2);
          result = _yield$connection$que36[0];
          fields = _yield$connection$que36[1];
          return _context18.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 14:
          _context18.prev = 14;
          _context18.t0 = _context18["catch"](2);
          return _context18.abrupt("return", res.status(400).json({
            statusCode: 400,
            data: false
          }));
        case 17:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[2, 14]]);
  }))).apply(this, arguments);
};

// Update cake details

var apiUpdateCakeDetail = function apiUpdateCakeDetail(_x37, _x38) {
  return (_ref19 = _ref19 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var data, sql, _yield$connection$que37, _yield$connection$que38, result, fields;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          data = req.body;
          sql = 'update cakedetail set categoryCake =?, nameCake =?, price =?,detail = ?, sold =?, inventory =?, images =?, sale =? where id = ?';
          _context19.next = 4;
          return connection.query(sql, [data.categoryCake, data.nameCake, data.price, data.detail, data.sold, data.inventory, data.images, data.sale, data.id]);
        case 4:
          _context19.next = 6;
          return connection.query('select * from cakedetail');
        case 6:
          _yield$connection$que37 = _context19.sent;
          _yield$connection$que38 = _slicedToArray(_yield$connection$que37, 2);
          result = _yield$connection$que38[0];
          fields = _yield$connection$que38[1];
          return _context19.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 11:
        case "end":
          return _context19.stop();
      }
    }, _callee19);
  }))).apply(this, arguments);
};

//
var apiGetCakedatilA = function apiGetCakedatilA(_x39, _x40) {
  return (_ref20 = _ref20 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var sql, sale, _yield$connection$que39, _yield$connection$que40, result, fields;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          sql = 'select * from cakedetail where sale >= ?';
          sale = req.params.sale;
          _context20.next = 4;
          return connection.query(sql, [sale]);
        case 4:
          _yield$connection$que39 = _context20.sent;
          _yield$connection$que40 = _slicedToArray(_yield$connection$que39, 2);
          result = _yield$connection$que40[0];
          fields = _yield$connection$que40[1];
          return _context20.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 9:
        case "end":
          return _context20.stop();
      }
    }, _callee20);
  }))).apply(this, arguments);
};

//
// News Read
var apiGetNews = function apiGetNews(_x41, _x42) {
  return (_ref21 = _ref21 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    var sql, _yield$connection$que41, _yield$connection$que42, result, fields;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          sql = 'select * from news';
          _context21.next = 3;
          return connection.query(sql);
        case 3:
          _yield$connection$que41 = _context21.sent;
          _yield$connection$que42 = _slicedToArray(_yield$connection$que41, 2);
          result = _yield$connection$que42[0];
          fields = _yield$connection$que42[1];
          return _context21.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 8:
        case "end":
          return _context21.stop();
      }
    }, _callee21);
  }))).apply(this, arguments);
};

// News Add
var apiAddNews = function apiAddNews(_x43, _x44) {
  return (_ref22 = _ref22 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    var data, sql, _yield$connection$que43, _yield$connection$que44, result, fields;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          data = req.body;
          sql = 'insert into news(title, images, detail) values(?,?,?)';
          _context22.next = 4;
          return connection.query(sql, [data.title, data.images, data.detail]);
        case 4:
          _context22.next = 6;
          return connection.query('select * from news');
        case 6:
          _yield$connection$que43 = _context22.sent;
          _yield$connection$que44 = _slicedToArray(_yield$connection$que43, 2);
          result = _yield$connection$que44[0];
          fields = _yield$connection$que44[1];
          return _context22.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 11:
        case "end":
          return _context22.stop();
      }
    }, _callee22);
  }))).apply(this, arguments);
};

// News delete
var apiDeleteNews = function apiDeleteNews(_x45, _x46) {
  return (_ref23 = _ref23 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(req, res) {
    var id, sql, _yield$connection$que45, _yield$connection$que46, result, fields;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          id = req.body.id;
          sql = 'delete from news where id = ?';
          _context23.next = 4;
          return connection.query(sql, [id]);
        case 4:
          _yield$connection$que45 = _context23.sent;
          _yield$connection$que46 = _slicedToArray(_yield$connection$que45, 2);
          result = _yield$connection$que46[0];
          fields = _yield$connection$que46[1];
          return _context23.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 9:
        case "end":
          return _context23.stop();
      }
    }, _callee23);
  }))).apply(this, arguments);
};

// News update

var apiUpdateNews = function apiUpdateNews(_x47, _x48) {
  return (_ref24 = _ref24 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
    var data, sql, _yield$connection$que47, _yield$connection$que48, result, fields;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          data = req.body;
          sql = 'update news set title =?, images =?, detail =? where id = ?';
          _context24.next = 4;
          return connection.query(sql, [data.title, data.images, data.detail, data.id]);
        case 4:
          _context24.next = 6;
          return connection.query('select * from news');
        case 6:
          _yield$connection$que47 = _context24.sent;
          _yield$connection$que48 = _slicedToArray(_yield$connection$que47, 2);
          result = _yield$connection$que48[0];
          fields = _yield$connection$que48[1];
          return _context24.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 11:
        case "end":
          return _context24.stop();
      }
    }, _callee24);
  }))).apply(this, arguments);
};

//Recipe Read
var apiGetRecipe = function apiGetRecipe(_x49, _x50) {
  return (_ref25 = _ref25 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(req, res) {
    var sql, _yield$connection$que49, _yield$connection$que50, result, fields;
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          sql = 'select * from cakerecipe';
          _context25.next = 3;
          return connection.query(sql);
        case 3:
          _yield$connection$que49 = _context25.sent;
          _yield$connection$que50 = _slicedToArray(_yield$connection$que49, 2);
          result = _yield$connection$que50[0];
          fields = _yield$connection$que50[1];
          return _context25.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 8:
        case "end":
          return _context25.stop();
      }
    }, _callee25);
  }))).apply(this, arguments);
};

// Recipe Add
var apiAddRecipe = function apiAddRecipe(_x51, _x52) {
  return (_ref26 = _ref26 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(req, res) {
    var data, sql, _yield$connection$que51, _yield$connection$que52, result, fields;
    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          data = req.body;
          sql = 'insert into cakerecipe(title, images, detail) values(?,?,?)';
          _context26.next = 4;
          return connection.query(sql, [data.title, data.images, data.detail]);
        case 4:
          _context26.next = 6;
          return connection.query('select * from cakerecipe');
        case 6:
          _yield$connection$que51 = _context26.sent;
          _yield$connection$que52 = _slicedToArray(_yield$connection$que51, 2);
          result = _yield$connection$que52[0];
          fields = _yield$connection$que52[1];
          return _context26.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 11:
        case "end":
          return _context26.stop();
      }
    }, _callee26);
  }))).apply(this, arguments);
};

// Recipe Delete

var apiDeleteRecipe = function apiDeleteRecipe(_x53, _x54) {
  return (_ref27 = _ref27 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(req, res) {
    var id, sql, _yield$connection$que53, _yield$connection$que54, result, fields;
    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          id = req.body.id;
          sql = 'delete from cakerecipe where id = ?';
          _context27.next = 4;
          return connection.query(sql, [id]);
        case 4:
          _yield$connection$que53 = _context27.sent;
          _yield$connection$que54 = _slicedToArray(_yield$connection$que53, 2);
          result = _yield$connection$que54[0];
          fields = _yield$connection$que54[1];
          return _context27.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 9:
        case "end":
          return _context27.stop();
      }
    }, _callee27);
  }))).apply(this, arguments);
};

// Recipe Update

var apiUpdateRecipe = function apiUpdateRecipe(_x55, _x56) {
  return (_ref28 = _ref28 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(req, res) {
    var data, sql, _yield$connection$que55, _yield$connection$que56, result, fields;
    return _regeneratorRuntime().wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          data = req.body;
          sql = 'update cakerecipe set title =?, images =?, detail =? where id = ?';
          _context28.next = 4;
          return connection.query(sql, [data.title, data.images, data.detail, data.id]);
        case 4:
          _context28.next = 6;
          return connection.query('select * from cakerecipe');
        case 6:
          _yield$connection$que55 = _context28.sent;
          _yield$connection$que56 = _slicedToArray(_yield$connection$que55, 2);
          result = _yield$connection$que56[0];
          fields = _yield$connection$que56[1];
          return _context28.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 11:
        case "end":
          return _context28.stop();
      }
    }, _callee28);
  }))).apply(this, arguments);
};

// Get Cart

var apiGetCart = function apiGetCart(_x57, _x58) {
  return (_ref29 = _ref29 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(req, res) {
    var id, sql, _yield$connection$que57, _yield$connection$que58, result, fields;
    return _regeneratorRuntime().wrap(function _callee29$(_context29) {
      while (1) switch (_context29.prev = _context29.next) {
        case 0:
          id = req.params.userId;
          sql = 'SELECT *, SUM(cart.quantity) as total_quantity FROM cart JOIN cakedetail  ON cart.cakeId = cakedetail.id JOIN users ON cart.userId = users.id WHERE cart.userId = ? GROUP BY userId, cakeId';
          _context29.next = 4;
          return connection.query(sql, [id]);
        case 4:
          _yield$connection$que57 = _context29.sent;
          _yield$connection$que58 = _slicedToArray(_yield$connection$que57, 2);
          result = _yield$connection$que58[0];
          fields = _yield$connection$que58[1];
          return _context29.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 9:
        case "end":
          return _context29.stop();
      }
    }, _callee29);
  }))).apply(this, arguments);
};
var apiGetCartById = function apiGetCartById(_x59, _x60) {
  return (_ref30 = _ref30 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30(req, res) {
    var id, sql, _yield$connection$que59, _yield$connection$que60, result, fields;
    return _regeneratorRuntime().wrap(function _callee30$(_context30) {
      while (1) switch (_context30.prev = _context30.next) {
        case 0:
          id = req.params.userId;
          sql = 'select * from cart where userId = ?';
          _context30.next = 4;
          return connection.query(sql, [id]);
        case 4:
          _yield$connection$que59 = _context30.sent;
          _yield$connection$que60 = _slicedToArray(_yield$connection$que59, 2);
          result = _yield$connection$que60[0];
          fields = _yield$connection$que60[1];
          return _context30.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 9:
        case "end":
          return _context30.stop();
      }
    }, _callee30);
  }))).apply(this, arguments);
};
var apiPutCart = function apiPutCart(_x61, _x62) {
  return (_ref31 = _ref31 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31(req, res) {
    var _req$body6, quantity, userId, cakeId, sql, _yield$connection$que61, _yield$connection$que62, result, fields;
    return _regeneratorRuntime().wrap(function _callee31$(_context31) {
      while (1) switch (_context31.prev = _context31.next) {
        case 0:
          _req$body6 = req.body, quantity = _req$body6.quantity, userId = _req$body6.userId, cakeId = _req$body6.cakeId;
          sql = 'UPDATE cart SET quantity = ? WHERE id = (SELECT id FROM cart WHERE userId = ? AND cakeId = ? LIMIT 1)';
          _context31.next = 4;
          return connection.query(sql, [quantity, userId, cakeId]);
        case 4:
          _yield$connection$que61 = _context31.sent;
          _yield$connection$que62 = _slicedToArray(_yield$connection$que61, 2);
          result = _yield$connection$que62[0];
          fields = _yield$connection$que62[1];
          return _context31.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 9:
        case "end":
          return _context31.stop();
      }
    }, _callee31);
  }))).apply(this, arguments);
};
var apiDeleteCart = function apiDeleteCart(_x63, _x64) {
  return (_ref32 = _ref32 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32(req, res) {
    var _req$body7, userId, cakeId, sql, _yield$connection$que63, _yield$connection$que64, result, fields;
    return _regeneratorRuntime().wrap(function _callee32$(_context32) {
      while (1) switch (_context32.prev = _context32.next) {
        case 0:
          _req$body7 = req.body, userId = _req$body7.userId, cakeId = _req$body7.cakeId;
          sql = 'delete from cart where userId = ? and cakeId = ?';
          _context32.next = 4;
          return connection.query(sql, [userId, cakeId]);
        case 4:
          _yield$connection$que63 = _context32.sent;
          _yield$connection$que64 = _slicedToArray(_yield$connection$que63, 2);
          result = _yield$connection$que64[0];
          fields = _yield$connection$que64[1];
          return _context32.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 9:
        case "end":
          return _context32.stop();
      }
    }, _callee32);
  }))).apply(this, arguments);
};
var apiAddCart = function apiAddCart(_x65, _x66) {
  return (_ref33 = _ref33 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33(req, res) {
    var _req$body8, userId, cakeId, sql, _yield$connection$que65, _yield$connection$que66, result, fields;
    return _regeneratorRuntime().wrap(function _callee33$(_context33) {
      while (1) switch (_context33.prev = _context33.next) {
        case 0:
          _req$body8 = req.body, userId = _req$body8.userId, cakeId = _req$body8.cakeId;
          sql = 'insert into cart(userId, cakeId, quantity) values(?,?,1)';
          _context33.next = 4;
          return connection.query(sql, [userId, cakeId]);
        case 4:
          _yield$connection$que65 = _context33.sent;
          _yield$connection$que66 = _slicedToArray(_yield$connection$que65, 2);
          result = _yield$connection$que66[0];
          fields = _yield$connection$que66[1];
          return _context33.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 9:
        case "end":
          return _context33.stop();
      }
    }, _callee33);
  }))).apply(this, arguments);
};
// End Cart

// Serch
var apiSearch = function apiSearch(_x67, _x68) {
  return (_ref34 = _ref34 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34(req, res) {
    var name, sql, _yield$connection$que67, _yield$connection$que68, result, fields;
    return _regeneratorRuntime().wrap(function _callee34$(_context34) {
      while (1) switch (_context34.prev = _context34.next) {
        case 0:
          name = req.body.name;
          sql = "select * from cakedetail where nameCake LIKE '%".concat(name, "%'");
          _context34.prev = 2;
          if (!(name.trim().length > 0)) {
            _context34.next = 13;
            break;
          }
          _context34.next = 6;
          return connection.query(sql, [name]);
        case 6:
          _yield$connection$que67 = _context34.sent;
          _yield$connection$que68 = _slicedToArray(_yield$connection$que67, 2);
          result = _yield$connection$que68[0];
          fields = _yield$connection$que68[1];
          return _context34.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: result
          }));
        case 13:
          return _context34.abrupt("return", res.status(200).json({
            statusCode: 200,
            data: null
          }));
        case 14:
          _context34.next = 19;
          break;
        case 16:
          _context34.prev = 16;
          _context34.t0 = _context34["catch"](2);
          return _context34.abrupt("return", res.status(400).json({
            statusCode: 400,
            data: _context34.t0
          }));
        case 19:
        case "end":
          return _context34.stop();
      }
    }, _callee34, null, [[2, 16]]);
  }))).apply(this, arguments);
};
module.exports = {
  apiGetUsers: apiGetUsers,
  apiCreateUser: apiCreateUser,
  apiDeleteUser: apiDeleteUser,
  apiUpdateUser: apiUpdateUser,
  apiLogin: apiLogin,
  apiGetInfo: apiGetInfo,
  apiGetCakes: apiGetCakes,
  apiAddCake: apiAddCake,
  apiUpdateCake: apiUpdateCake,
  apiDeleteCakes: apiDeleteCakes,
  apiGetNewProduct: apiGetNewProduct,
  apiGetVoucher: apiGetVoucher,
  apiAddVoucher: apiAddVoucher,
  apiUpdateVoucher: apiUpdateVoucher,
  apiDeleteVoucher: apiDeleteVoucher,
  apiGetCakedatil: apiGetCakedatil,
  apiAddCakeDetail: apiAddCakeDetail,
  apiUpdateCakeDetail: apiUpdateCakeDetail,
  apiGetCakedatilA: apiGetCakedatilA,
  apiGetNews: apiGetNews,
  apiAddNews: apiAddNews,
  apiUpdateNews: apiUpdateNews,
  apiDeleteNews: apiDeleteNews,
  apiGetRecipe: apiGetRecipe,
  apiAddRecipe: apiAddRecipe,
  apiUpdateRecipe: apiUpdateRecipe,
  apiDeleteRecipe: apiDeleteRecipe,
  apiGetCart: apiGetCart,
  apiGetCartById: apiGetCartById,
  apiPutCart: apiPutCart,
  apiDeleteCart: apiDeleteCart,
  apiAddCart: apiAddCart,
  apiDeleteCakeDetail: apiDeleteCakeDetail,
  apiSearch: apiSearch
};