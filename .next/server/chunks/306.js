exports.id = 306;
exports.ids = [306];
exports.modules = {

/***/ 5828:
/***/ ((module) => {

// Exports
module.exports = {
	"skillBg": "Hero_skillBg__Rsd_V",
	"bgMain": "Hero_bgMain__rSUsm",
	"heroInfo": "Hero_heroInfo__RGZVP",
	"aboutContainer": "Hero_aboutContainer__ggEds",
	"spanStyle": "Hero_spanStyle__KYWHG",
	"infoDiv": "Hero_infoDiv__XDydS",
	"swiper": "Hero_swiper__K3_6v",
	"swiperSlide": "Hero_swiperSlide__jb9ZG",
	"swiperSlideVer": "Hero_swiperSlideVer__CnSd_",
	"containerSkills": "Hero_containerSkills__BOiqB",
	"skillsLable": "Hero_skillsLable__Gb54q",
	"caro": "Hero_caro__hkFqu",
	"skillsDiv": "Hero_skillsDiv__0v3kb",
	"avatarBG": "Hero_avatarBG__ReivE",
	"wrapSkillsCard": "Hero_wrapSkillsCard__3KgHZ",
	"wrapAvatarText": "Hero_wrapAvatarText__ivGg7",
	"iconPDiv": "Hero_iconPDiv__UcGfz",
	"iconDiv": "Hero_iconDiv__asec_",
	"contactDiv": "Hero_contactDiv__ciTni",
	"contactSpan": "Hero_contactSpan__5qD8G",
	"contactBtn": "Hero_contactBtn__L_PMr",
	"heroContainer": "Hero_heroContainer__UXuq8",
	"heroBg": "Hero_heroBg__KZj3s",
	"secContainer": "Hero_secContainer__07R36",
	"iconContainer": "Hero_iconContainer__sWqoA"
};


/***/ }),

/***/ 2306:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5828);
/* harmony import */ var _styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2210);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9176);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2996);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Next JS





// Swiper





// Icons

// Framer
// Skills Card
const Skills = [
    {
        imageUrl: "fe.svg",
        imageAlt: "HTML & CSS Logo",
        skillName: "Front-End",
        skillLevel: "Expert",
        badgeColor: "yellow.300",
        bg: "transparent",
        badgeTextColor: "black"
    },
    {
        imageUrl: "nextjs.png",
        imageAlt: "Nextjs Logo",
        skillName: "NextJS",
        skillLevel: "Beginner",
        badgeColor: "cyan.100",
        bg: "transparent",
        badgeTextColor: "black"
    },
    {
        imageUrl: "angular.svg",
        imageAlt: "Angular Logo",
        skillName: "Angular",
        skillLevel: "Competent",
        badgeColor: "pink.700",
        bg: "transparent",
        badgeTextColor: "white"
    },
    {
        imageUrl: "nestjs.svg",
        imageAlt: "NestJS Logo",
        skillName: "NestJS",
        skillLevel: "Good",
        badgeColor: "orange.500",
        badgeTextColor: "white",
        bg: "transparent"
    },
    {
        imageUrl: "none",
        imageAlt: "Networking Engineer",
        skillName: "Network Engineer",
        skillLevel: "Beginner",
        badgeColor: "cyan.100",
        badgeTextColor: "black",
        bg: "purple.400"
    },
    {
        imageUrl: "none",
        imageAlt: "Back End",
        skillName: "Back-End",
        skillLevel: "Good",
        badgeColor: "orange.500",
        badgeTextColor: "white",
        bg: "red.700"
    }
];
const Hero = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().heroContainer), "flex-row overflow-hidden flex  h-[80%] "),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-1/2 border-b-[10px] border-l-[10px]  border border-black",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().heroBg), "h-[60%] w-full border-b-[10px]  border-black "),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                                slidesPerView: 1,
                                spaceBetween: 0,
                                loop: false,
                                autoplay: {
                                    delay: 7000,
                                    disableOnInteraction: false
                                },
                                pagination: {
                                    clickable: false
                                },
                                navigation: false,
                                modules: [
                                    swiper__WEBPACK_IMPORTED_MODULE_4__.Autoplay,
                                    swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation
                                ],
                                className: (_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().swiper),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().swiperSlide), "w-full"),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().heroInfo), "h-full w-full  justify-center text-center flex flex-col"),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Design."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Interact."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Have Fun."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Boring Is not cool. Be cool! \uD83D\uDE0E"
                                            })
                                        ]
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().bgMain), (_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().infoDiv), "h-[40%] flex flex-col text-center  w-full p-10 pt-6"),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aboutContainer), ""),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        children: "About Me"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "Hello, my name is Majd and I am a Front-end Developer with a passion for UI/UX design. I am currently studying for a Bachelor's degree in Network and Information Security at UTM. I began coding in high school with the assistance of my brother and online resources such as YouTube. To further my knowledge in networking, I am pursuing a Cisco - CCNA certification. If you are interested in hiring me, please feel free to reach out ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "mailto:majdalali@proton.me",
                                                children: "HERE"
                                            }),
                                            " ",
                                            "or check my ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                                href: "/Resume",
                                                children: "Resume"
                                            }),
                                            " for more info."
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().secContainer), " w-1/2 flex flex-row  border-l-[10px] border-b-[10px] border-black"),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().skillBg), "w-1/2 border-r-[10px] py-10 border-black"),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().skillsLable), " h-full  text-center text-[2rem] "),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Skills"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
                                            marginTop: 5,
                                            className: (_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().containerSkills),
                                            children: Skills.map(({ imageUrl , imageAlt , skillName , skillLevel , bg , badgeColor , badgeTextColor  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                                    borderRadius: "xl",
                                                    className: (_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().skillsDiv),
                                                    w: "90%",
                                                    boxShadow: "base",
                                                    p: 3,
                                                    color: "white",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().wrapSkillsCard),
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                                                className: (_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().wrapAvatarText),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                                                        className: (_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().avatarBG),
                                                                        bg: bg,
                                                                        name: skillName,
                                                                        src: imageUrl,
                                                                        alt: imageAlt
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                                        alignItems: "left",
                                                                        fontSize: "md",
                                                                        children: skillName
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Badge, {
                                                                h: "min-content",
                                                                variant: "solid",
                                                                bg: badgeColor,
                                                                color: badgeTextColor,
                                                                children: [
                                                                    skillLevel,
                                                                    " "
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }, "\uD83D\uDE0E"))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().skillsCarousle), "h-[90%]  ")
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: " w-1/2 flex  flex-col border-r-[10px]   border-black",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().caro), "h-1/2  flex justify-center items-center  overflow-hidden border-black border-b-[10px] pt-2   text-center "),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().spanStyle), "text-[2rem] select-none uppercase"),
                                        children: "carousel"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().iconContainer), "h-1/4 flex flex-col text-3xl bg-white  "),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().iconPDiv), " w-full flex flex-row    h-1/2"),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().iconDiv), "w-1/2 h-full flex justify-center items-center"),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        target: "_blank",
                                                        href: "https://dribbble.com/MajdSS",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaDribbble, {})
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().iconDiv), "w-1/2  flex justify-center items-center border-black border-l-[10px]"),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        target: "_blank",
                                                        href: "https://www.twitter.com/majdalali",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaTwitter, {})
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().iconPDiv), " w-full flex flex-row  h-1/2"),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().iconDiv), "w-1/2 flex justify-center items-center h-full"),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        target: "_blank",
                                                        href: "https://www.linkedin.com/in/atmajdalali/",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaLinkedinIn, {})
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().iconDiv), "w-1/2 flex justify-center items-center border-black border-l-[10px]"),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        target: "_blank",
                                                        href: "https://github.com/Majdalali",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaGithub, {})
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().bgMain), (_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().contactDiv), "h-1/4 justify-center flex flex-col items-center  "),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().contactSpan),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "select-none",
                                                children: "Ready To Contact?"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: (_styles_Hero_module_scss__WEBPACK_IMPORTED_MODULE_9___default().contactBtn),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "mailto:majdalali@proton.me",
                                                children: "HMU:)"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;