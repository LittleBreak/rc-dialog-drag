webpackJsonp([1],{

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(68);


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
throw new Error("Cannot find module \"rc-dialog/assets/index.less\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_DialogWrap__ = __webpack_require__(63);



/* eslint no-console:0 */



// use import Dialog from 'rc-dialog'


var MyControl = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(MyControl, _React$Component);

    function MyControl() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, MyControl);

        var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.apply(this, arguments));

        _this.state = {
            visible: false,
            width: 600,
            destroyOnClose: false,
            center: false,
            mousePosition: {}
        };
        _this.onClick = function (e) {
            _this.setState({
                mousePosition: {
                    x: e.pageX,
                    y: e.pageY
                },
                visible: true
            });
        };
        _this.onClose = function (e) {
            // console.log(e);
            _this.setState({
                visible: false
            });
        };
        _this.onDestroyOnCloseChange = function (e) {
            _this.setState({
                destroyOnClose: e.target.checked
            });
        };
        _this.changeWidth = function () {
            _this.setState({
                width: _this.state.width === 600 ? 800 : 600
            });
        };
        _this.center = function (e) {
            _this.setState({
                center: e.target.checked
            });
        };
        return _this;
    }

    MyControl.prototype.render = function render() {
        var style = {
            width: this.state.width
        };
        var wrapClassName = '';
        if (this.state.center) {
            wrapClassName = 'center';
        }
        var titleEle = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", { className: "drag-handle", style: { background: '#eee', cursor: 'move' } }, "please drag me");
        var dialog = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__src_DialogWrap__["a" /* default */], { visible: this.state.visible, wrapClassName: wrapClassName, animation: "zoom", maskAnimation: "fade", onClose: this.onClose, style: style, mousePosition: this.state.mousePosition, destroyOnClose: this.state.destroyOnClose, bounds: { top: -100, left: -500, right: 500, bottom: 500 }, draggable: true, title: titleEle, appendDOM: "drag-element" }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("input", null), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", null, "basic modal"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("button", { onClick: this.changeWidth }, "change width"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", { style: { height: 200 } }));
        return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", { style: { width: '90%', margin: '0 auto' }, id: "drag-element" }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("style", null, '\n            .center {\n              display: flex;\n              align-items: center;\n              justify-content: center;\n            }\n            '), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("p", null, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("button", { className: "btn btn-primary", onClick: this.onClick }, "show dialog"), '\xA0', __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("label", null, "destroy on close:", __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("input", { type: "checkbox", checked: this.state.destroyOnClose, onChange: this.onDestroyOnCloseChange })), '\xA0', __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("label", null, "center", __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("input", { type: "checkbox", checked: this.state.center, onChange: this.center }))), dialog);
    };

    return MyControl;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h2", null, "ant-design dialog"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(MyControl, null)), document.getElementById('__react-content'));

/***/ })

},[67]);
//# sourceMappingURL=ant-design.js.map