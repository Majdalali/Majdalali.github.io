exports.id = 89;
exports.ids = [89];
exports.modules = {

/***/ 7784:
/***/ ((module) => {

// Exports
module.exports = {
	"navBg": "Nav_navBg__cwGSp",
	"brandL": "Nav_brandL__ENpyd",
	"brandR": "Nav_brandR__rvSwu",
	"navDetails": "Nav_navDetails__0gXsL",
	"navMenu": "Nav_navMenu__BkZky",
	"hiddenNav": "Nav_hiddenNav__VutXz"
};


/***/ }),

/***/ 2656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ signOutUser)
/* harmony export */ });
/* harmony import */ var _clientApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4858);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_clientApp__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__]);
([_clientApp__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(_clientApp__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);
async function signOutUser() {
    try {
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth);
    } catch (e) {
        console.error(e);
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6089:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7784);
/* harmony import */ var _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8506);
/* harmony import */ var _firebase_auth_signout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2656);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__, _firebase_auth_signout__WEBPACK_IMPORTED_MODULE_6__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__]);
([_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__, _firebase_auth_signout__WEBPACK_IMPORTED_MODULE_6__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Nav = ()=>{
    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.useDisclosure)();
    const btnRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const { user  } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__/* .useAuthContext */ .Eu)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const handleSignOut = async ()=>{
        await (0,_firebase_auth_signout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
        router.reload();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_9___default().navBg), "  h-[10%] px-20 border-[10px] border-black"),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                className: " flex flex-row align-middle items-center justify-between h-full gap-28  text-xl ",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_9___default().brandL),
                        children: [
                            "Majd",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_9___default().brandR),
                                children: " Alali"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_9___default().hiddenNav), "pr-5 hidden "),
                        href: "#",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaBars, {
                                ref: btnRef,
                                onClick: onOpen
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Drawer, {
                                isOpen: isOpen,
                                placement: "top",
                                onClose: onClose,
                                finalFocusRef: btnRef,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.DrawerOverlay, {}),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.DrawerContent, {
                                        bg: "orange.100",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.DrawerCloseButton, {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.DrawerBody, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_9___default().navMenu), "no-underline text-center  flex flex-col gap-4 "),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "#",
                                                            children: "Resume"
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_9___default().navDetails), "no-underline flex flex-row gap-4 "),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                href: "/Resume",
                                children: "Resume"
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;