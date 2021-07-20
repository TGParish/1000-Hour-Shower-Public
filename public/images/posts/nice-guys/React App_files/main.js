webpackHotUpdate("main",{

/***/ "./src/user/pages/Auth.js":
/*!********************************!*\
  !*** ./src/user/pages/Auth.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_components_UIElements_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/UIElements/Card */ "./src/shared/components/UIElements/Card.js");
/* harmony import */ var _shared_components_FormElements_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/FormElements/Input */ "./src/shared/components/FormElements/Input.js");
/* harmony import */ var _shared_components_FormElements_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/FormElements/Button */ "./src/shared/components/FormElements/Button.js");
/* harmony import */ var _shared_util_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/util/validators */ "./src/shared/util/validators.js");
/* harmony import */ var _shared_hooks_form_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/hooks/form-hook */ "./src/shared/hooks/form-hook.js");
/* harmony import */ var _Auth_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Auth.css */ "./src/user/pages/Auth.css");
/* harmony import */ var _Auth_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Auth_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/admin/Desktop/react-frontend-01-starting-setup/src/user/pages/Auth.js";








const Auth = () => {
  const [formState, inputHandler] = Object(_shared_hooks_form_hook__WEBPACK_IMPORTED_MODULE_5__["useForm"])({
    email: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    }
  }, false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_UIElements_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "authenticaton",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, "Login Required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_FormElements_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    element: "input",
    id: "email",
    type: "email",
    label: "E-Mail",
    validators: [Object(_shared_util_validators__WEBPACK_IMPORTED_MODULE_4__["VALIDATOR_EMAIL"])()],
    errorText: "Please enter a valid email address.",
    onInput: inputHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_FormElements_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    element: "input",
    id: "password",
    type: "password",
    label: "Password",
    validators: [Object(_shared_util_validators__WEBPACK_IMPORTED_MODULE_4__["VALIDATOR_MINLENGTH"])(5)],
    errorText: "Please enter a valid password, at least 5 characters long.",
    onInput: inputHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_FormElements_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "submit",
    disabled: !formState.isValid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "LOGIN")));
};

/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ })

})
//# sourceMappingURL=main.b77c1037dbed3c07d8df.hot-update.js.map