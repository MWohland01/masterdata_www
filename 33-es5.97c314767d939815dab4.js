function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{K9Nc:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_app",(function(){return d})),n.d(e,"ion_buttons",(function(){return p})),n.d(e,"ion_content",(function(){return b})),n.d(e,"ion_footer",(function(){return m})),n.d(e,"ion_header",(function(){return x})),n.d(e,"ion_router_outlet",(function(){return A})),n.d(e,"ion_title",(function(){return j})),n.d(e,"ion_toolbar",(function(){return O}));var o=n("c1op"),i=n("AfW+"),r=n("aiEM"),a=(n("kBU6"),n("Dl6n")),s=n("m9yc"),l=n("K6rM"),c=n("qaSm"),d=function(){function t(e){_classCallCheck(this,t),Object(o.l)(this,e)}return _createClass(t,[{key:"componentDidLoad",value:function(){g((function(){var t=Object(i.f)(window,"hybrid");i.b.getBoolean("_testing")||n.e(9).then(n.bind(null,"tCf4")).then((function(t){return t.startTapClick(i.b)})),i.b.getBoolean("statusTap",t)&&n.e(7).then(n.bind(null,"m/DA")).then((function(t){return t.startStatusTap()})),i.b.getBoolean("inputShims",u())&&n.e(6).then(n.bind(null,"aoIK")).then((function(t){return t.startInputShims(i.b)})),i.b.getBoolean("hardwareBackButton",t)&&n.e(4).then(n.bind(null,"XRsP")).then((function(t){return t.startHardwareBackButton()})),n.e(3).then(n.bind(null,"3YLQ")).then((function(t){return t.startFocusVisible()}))}))}},{key:"render",value:function(){var t,e=Object(o.d)(this);return Object(o.i)(o.a,{class:(t={},_defineProperty(t,e,!0),_defineProperty(t,"ion-page",!0),_defineProperty(t,"force-statusbar-padding",i.b.getBoolean("_forceStatusbarPadding")),t)})}},{key:"el",get:function(){return Object(o.f)(this)}}],[{key:"style",get:function(){return"html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"}}]),t}(),u=function(){return Object(i.f)(window,"ios")&&Object(i.f)(window,"mobile")},g=function(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)},p=function(){function t(e){_classCallCheck(this,t),Object(o.l)(this,e),this.collapse=!1}return _createClass(t,[{key:"render",value:function(){var t,e=Object(o.d)(this);return Object(o.i)(o.a,{class:(t={},_defineProperty(t,e,!0),_defineProperty(t,"buttons-collapse",this.collapse),t)})}}],[{key:"style",get:function(){return".sc-ion-buttons-md-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s  ion-button {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;--padding-top:0;--padding-bottom:0;--padding-start:8px;--padding-end:8px;--box-shadow:none;margin-left:2px;margin-right:2px;height:32px;font-size:14px;font-weight:500}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-button {margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-md-s  ion-button:not(.button-round) {--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button {--color:initial;--color-focused:var(--ion-color-contrast);--color-hover:var(--ion-color-contrast);--background-hover:rgba(var(--ion-color-contrast-rgb),0.08);--background-focused:rgba(var(--ion-color-contrast-rgb),0.24)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button-solid , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button-solid {--background:var(--ion-color-contrast);--background-activated:var(--ion-color-contrast);--background-focused:var(--ion-color-shade);--background-hover:var(--ion-color-tint);--color:var(--ion-color-base);--color-focused:var(--ion-color-base);--color-hover:var(--ion-color-base)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button-outline , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button-outline {--border-color:var(--ion-color-contrast)}.sc-ion-buttons-md-s  .button-has-icon-only.button-clear {--padding-top:12px;--padding-end:12px;--padding-bottom:12px;--padding-start:12px;--border-radius:50%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:48px;height:48px}.sc-ion-buttons-md-s  .button {--background-hover:rgba(66,66,66,0.08)}.sc-ion-buttons-md-s  .button-solid {--color:var(--ion-toolbar-background,var(--ion-background-color,#fff));--color-activated:var(--ion-toolbar-background,var(--ion-background-color,#fff));--background:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-activated:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-focused:var(--ion-toolbar-color-activated,#4a4a4a);--background-hover:rgba(66,66,66,0.92)}.sc-ion-buttons-md-s  .button-outline {--background:transparent;--background-activated:transparent;--border-color:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-focused:rgba(66,66,66,0.1)}.sc-ion-buttons-md-s  .button-clear , .sc-ion-buttons-md-s  .button-outline {--color:initial;--color-activated:currentColor;--color-focused:var(--ion-toolbar-color,var(--ion-text-color,#424242))}.sc-ion-buttons-md-s  .button-clear {--background:transparent;--background-focused:rgba(66,66,66,0.1)}.sc-ion-buttons-md-s  ion-icon[slot=start] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:.3em;font-size:1.4em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-icon[slot=start] {margin-right:unset;-webkit-margin-end:.3em;margin-inline-end:.3em}}.sc-ion-buttons-md-s  ion-icon[slot=end] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:.4em;font-size:1.4em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-icon[slot=end] {margin-left:unset;-webkit-margin-start:.4em;margin-inline-start:.4em}}.sc-ion-buttons-md-s  ion-icon[slot=icon-only] {padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.8em}"}}]),t}(),b=function(){function t(e){_classCallCheck(this,t),Object(o.l)(this,e),this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.mode=Object(o.d)(this),this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,data:void 0,isScrolling:!0},this.fullscreen=!1,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1,this.ionScrollStart=Object(o.e)(this,"ionScrollStart",7),this.ionScroll=Object(o.e)(this,"ionScroll",7),this.ionScrollEnd=Object(o.e)(this,"ionScrollEnd",7)}return _createClass(t,[{key:"disconnectedCallback",value:function(){this.onScrollEnd()}},{key:"componentDidLoad",value:function(){this.resize()}},{key:"onClick",value:function(t){this.isScrolling&&(t.preventDefault(),t.stopPropagation())}},{key:"shouldForceOverscroll",value:function(){var t=this.forceOverscroll,e=this.mode;return void 0===t?"ios"===e&&Object(i.f)("ios"):t}},{key:"resize",value:function(){this.fullscreen?Object(o.g)(this.readDimensions.bind(this)):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,this.el.forceUpdate())}},{key:"readDimensions",value:function(){var t=h(this.el),e=Math.max(this.el.offsetTop,0),n=Math.max(t.offsetHeight-e-this.el.offsetHeight,0);(e!==this.cTop||n!==this.cBottom)&&(this.cTop=e,this.cBottom=n,this.el.forceUpdate())}},{key:"onScroll",value:function(t){var e=this,n=Date.now(),i=!this.isScrolling;this.lastScroll=n,i&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,Object(o.g)((function(n){e.queued=!1,e.detail.event=t,f(e.detail,e.scrollEl,n,i),e.ionScroll.emit(e.detail)})))}},{key:"getScrollElement",value:function(){return Promise.resolve(this.scrollEl)}},{key:"scrollToTop",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.scrollToPoint(void 0,0,t)}},{key:"scrollToBottom",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.scrollToPoint(void 0,this.scrollEl.scrollHeight-this.scrollEl.clientHeight,t)}},{key:"scrollByPoint",value:function(t,e,n){return this.scrollToPoint(t+this.scrollEl.scrollLeft,e+this.scrollEl.scrollTop,n)}},{key:"scrollToPoint",value:function(t,e){var n,o,i,r,a,s,l,c,d,u,g=arguments;return regeneratorRuntime.async((function(p){for(;;)switch(p.prev=p.next){case 0:if(n=g.length>2&&void 0!==g[2]?g[2]:0,o=this.scrollEl,!(n<32)){p.next=4;break}return p.abrupt("return",(null!=e&&(o.scrollTop=e),void(null!=t&&(o.scrollLeft=t))));case 4:return r=0,a=new Promise((function(t){return i=t})),s=o.scrollTop,l=o.scrollLeft,c=null!=e?e-s:0,d=null!=t?t-l:0,u=function t(e){var a=Math.min(1,(e-r)/n)-1,u=Math.pow(a,3)+1;0!==c&&(o.scrollTop=Math.floor(u*c+s)),0!==d&&(o.scrollLeft=Math.floor(u*d+l)),u<1?requestAnimationFrame(t):i()},p.abrupt("return",(requestAnimationFrame((function(t){r=t,u(t)})),a));case 7:case"end":return p.stop()}}),null,this)}},{key:"onScrollStart",value:function(){var t=this;this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval((function(){t.lastScroll<Date.now()-120&&t.onScrollEnd()}),100)}},{key:"onScrollEnd",value:function(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling&&(this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1}))}},{key:"render",value:function(){var t,e=this,n=this.scrollX,r=this.scrollY,s=Object(o.d)(this),l=this.shouldForceOverscroll(),c="ios"===s&&i.b.getBoolean("experimentalTransitionShadow",!0);return this.resize(),Object(o.i)(o.a,{class:Object.assign(Object.assign({},Object(a.a)(this.color)),(t={},_defineProperty(t,s,!0),_defineProperty(t,"content-sizing",Object(a.c)("ion-popover",this.el)),_defineProperty(t,"overscroll",l),t)),style:{"--offset-top":"".concat(this.cTop,"px"),"--offset-bottom":"".concat(this.cBottom,"px")}},Object(o.i)("main",{class:{"inner-scroll":!0,"scroll-x":n,"scroll-y":r,overscroll:(n||r)&&l},ref:function(t){return e.scrollEl=t},onScroll:function(t){return e.onScroll(t)}},Object(o.i)("slot",null)),c?Object(o.i)("div",{class:"transition-effect"},Object(o.i)("div",{class:"transition-cover"}),Object(o.i)("div",{class:"transition-shadow"})):null,Object(o.i)("slot",{name:"fixed"}))}},{key:"el",get:function(){return Object(o.f)(this)}}],[{key:"style",get:function(){return':host{--background:var(--ion-background-color,#fff);--color:var(--ion-text-color,#000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;font-family:var(--ion-font-family,inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50,#f2f2f2)}.inner-scroll{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;background:var(--background);color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-x,.scroll-y{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow)}.scroll-x{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow)}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}.overscroll:after,.overscroll:before{position:absolute;width:1px;height:1px;content:""}.overscroll:before{bottom:-1px}.overscroll:after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}.transition-effect{left:-100%;opacity:0;pointer-events:none}.transition-cover,.transition-effect{position:absolute;width:100%;height:100%}.transition-cover{right:0;background:#000;opacity:.1}.transition-shadow{display:block;position:absolute;right:0;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}'}}]),t}(),h=function(t){return t.closest("ion-tabs")||t.closest("ion-app,ion-page,.ion-page,page-inner")||function(t){return t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null}(t)},f=function(t,e,n,o){var i=t.currentX,r=t.currentY,a=e.scrollLeft,s=e.scrollTop,l=n-t.timeStamp;if(o&&(t.startTimeStamp=n,t.startX=a,t.startY=s,t.velocityX=t.velocityY=0),t.timeStamp=n,t.currentX=t.scrollLeft=a,t.currentY=t.scrollTop=s,t.deltaX=a-t.startX,t.deltaY=s-t.startY,l>0&&l<100){var c=(s-r)/l;t.velocityX=(a-i)/l*.7+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}},m=function(){function t(e){_classCallCheck(this,t),Object(o.l)(this,e),this.translucent=!1}return _createClass(t,[{key:"render",value:function(){var t,e=Object(o.d)(this),n=this.translucent;return Object(o.i)(o.a,{role:"contentinfo",class:(t={},_defineProperty(t,e,!0),_defineProperty(t,"footer-".concat(e),!0),_defineProperty(t,"footer-translucent",n),_defineProperty(t,"footer-translucent-".concat(e),n),t)})}}],[{key:"style",get:function(){return'ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-child{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-md:before{left:0;top:-2px;bottom:auto;background-position:left 0 top 0;position:absolute;width:100%;height:2px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==");background-repeat:repeat-x;content:""}:host-context([dir=rtl]) .footer-md:before,[dir=rtl] .footer-md:before{left:unset;right:unset;right:0;background-position:right 0 top 0}.footer-md[no-border]:before{display:none}'}}]),t}(),v=function(t){var e=document.querySelector("".concat(t,".ion-cloned-element"));if(null!==e)return e;var n=document.createElement(t);return n.classList.add("ion-cloned-element"),n.style.setProperty("display","none"),document.body.appendChild(n),n},k=function(t){if(t){var e=t.querySelectorAll("ion-toolbar");return{el:t,toolbars:Array.from(e).map((function(t){var e=t.querySelector("ion-title");return{el:t,background:t.shadowRoot.querySelector(".toolbar-background"),ionTitleEl:e,innerTitleEl:e?e.shadowRoot.querySelector(".toolbar-title"):null,ionButtonsEl:Array.from(t.querySelectorAll("ion-buttons"))||[]}}))||[[]]}}},y=function(t,e){void 0===e?t.background.style.removeProperty("--opacity"):t.background.style.setProperty("--opacity",e.toString())},w=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Object(o.m)((function(){e?t.el.classList.remove("header-collapse-condense-inactive"):t.el.classList.add("header-collapse-condense-inactive")}))},x=function(){function t(e){_classCallCheck(this,t),Object(o.l)(this,e),this.collapsibleHeaderInitialized=!1,this.translucent=!1}return _createClass(t,[{key:"componentDidLoad",value:function(){return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.checkCollapsibleHeader());case 2:case"end":return t.stop()}}),null,this)}},{key:"componentDidUpdate",value:function(){return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.checkCollapsibleHeader());case 2:case"end":return t.stop()}}),null,this)}},{key:"componentDidUnload",value:function(){this.destroyCollapsibleHeader()}},{key:"checkCollapsibleHeader",value:function(){var t,e,n,i;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(t="condense"===this.collapse,(e=!(!t||"ios"!==Object(o.d)(this))&&t)||!this.collapsibleHeaderInitialized){r.next=5;break}this.destroyCollapsibleHeader(),r.next=9;break;case 5:if(!e||this.collapsibleHeaderInitialized){r.next=9;break}return n=this.el.closest("ion-app,ion-page,.ion-page,page-inner"),i=n?n.querySelector("ion-content"):null,r.next=9,regeneratorRuntime.awrap(this.setupCollapsibleHeader(i,n));case 9:case"end":return r.stop()}}),null,this)}},{key:"destroyCollapsibleHeader",value:function(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0),this.scrollEl&&this.contentScrollCallback&&(this.scrollEl.removeEventListener("scroll",this.contentScrollCallback),this.contentScrollCallback=void 0)}},{key:"setupCollapsibleHeader",value:function(t,e){var n=this;return regeneratorRuntime.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(!t||!e){i.next=9;break}return i.next=3,regeneratorRuntime.awrap(t.getScrollElement());case 3:this.scrollEl=i.sent,Object(o.g)((function(){var t=e.querySelectorAll("ion-header"),i=Array.from(t).find((function(t){return"condense"!==t.collapse}));if(i&&n.scrollEl){var a=k(i),s=k(n.el);a&&s&&(w(a,!1),Object(o.g)((function(){n.intersectionObserver=new IntersectionObserver((function(t){!function(t,e,n){Object(o.m)((function(){!function(t,e){if(t[0].isIntersecting){var n=100*(1-t[0].intersectionRatio)/75;y(e.toolbars[0],1===n?void 0:n)}}(t,e);var o=t[0],i=o.intersectionRect,r=i.width*i.height,a=0===r&&0==o.rootBounds.width*o.rootBounds.height,s=Math.abs(i.left-o.boundingClientRect.left),l=Math.abs(i.right-o.boundingClientRect.right);a||r>0&&(s>=5||l>=5)||(o.isIntersecting?(w(e,!1),w(n)):(0===i.x&&0===i.y||0!==i.width&&0!==i.height)&&(w(e),w(n,!1),y(e.toolbars[0],1)))}))}(t,a,s)}),{threshold:[.25,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-".concat(a.el.clientHeight,"px 0px 0px 0px")}),n.intersectionObserver.observe(s.toolbars[0].el)})),n.contentScrollCallback=function(){!function(t,e){Object(o.g)((function(){var n=t.scrollTop,i=Object(r.c)(1,1+-n/500,1.1);Object(o.m)((function(){!function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t.forEach((function(t){var o=t.ionTitleEl,i=t.innerTitleEl;o&&"large"===o.size&&(i.style.transformOrigin="left center",i.style.transition=n?"all 0.2s ease-in-out":"",i.style.transform="scale3d(".concat(e,", ").concat(e,", 1)"))}))}(e.toolbars,i)}))}))}(n.scrollEl,s)},n.scrollEl.addEventListener("scroll",n.contentScrollCallback))}})),Object(o.m)((function(){v("ion-title"),v("ion-back-button")})),this.collapsibleHeaderInitialized=!0,i.next=10;break;case 9:console.error("ion-header requires a content to collapse, make sure there is an ion-content.");case 10:case"end":return i.stop()}}),null,this)}},{key:"render",value:function(){var t,e=Object(o.d)(this),n=this.collapse||"none";return Object(o.i)(o.a,{role:"banner",class:(t={},_defineProperty(t,e,!0),_defineProperty(t,"header-".concat(e),!0),_defineProperty(t,"header-translucent",this.translucent),_defineProperty(t,"header-collapse-".concat(n),!0),_defineProperty(t,"header-translucent-".concat(e),this.translucent),t)})}},{key:"el",get:function(){return Object(o.f)(this)}}],[{key:"style",get:function(){return'ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-md:after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:""}:host-context([dir=rtl]) .header-md:after,[dir=rtl] .header-md:after{left:unset;right:unset;right:0;background-position:right 0 top -2px}.header-collapse-condense,.header-md[no-border]:after{display:none}'}}]),t}(),A=function(){function t(e){_classCallCheck(this,t),Object(o.l)(this,e),this.animationEnabled=!0,this.mode=Object(o.d)(this),this.animated=!0,this.ionNavWillLoad=Object(o.e)(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(o.e)(this,"ionNavWillChange",3),this.ionNavDidChange=Object(o.e)(this,"ionNavDidChange",3)}return _createClass(t,[{key:"swipeHandlerChanged",value:function(){this.gesture&&this.gesture.setDisabled(void 0===this.swipeHandler)}},{key:"connectedCallback",value:function(){var t=this;return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(n.e(2).then(n.bind(null,"0yHn")));case 2:e.t0=this.el,e.t1=function(){return!!t.swipeHandler&&t.swipeHandler.canStart()&&t.animationEnabled},e.t2=function(){return t.swipeHandler&&t.swipeHandler.onStart()},e.t3=function(e){return t.ani&&t.ani.progressStep(e)},e.t4=function(e,n,o){if(t.ani){t.animationEnabled=!1,t.ani.onFinish((function(){t.animationEnabled=!0,t.swipeHandler&&t.swipeHandler.onEnd(e)}),{oneTimeCallback:!0});var i=e?-.001:.001;e?i+=Object(c.b)(new c.a(0,0),new c.a(.32,.72),new c.a(0,1),new c.a(1,1),n):(t.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"),i+=Object(c.b)(new c.a(0,0),new c.a(1,0),new c.a(.68,.28),new c.a(1,1),n)),t.ani.progressEnd(e?1:0,i,o)}},this.gesture=e.sent.createSwipeBackGesture(e.t0,e.t1,e.t2,e.t3,e.t4),this.swipeHandlerChanged();case 9:case"end":return e.stop()}}),null,this)}},{key:"componentWillLoad",value:function(){this.ionNavWillLoad.emit()}},{key:"disconnectedCallback",value:function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"commit",value:function(t,e,n){var o,i;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(this.lock());case 2:return o=r.sent,i=!1,r.prev=4,r.next=7,regeneratorRuntime.awrap(this.transition(t,e,n));case 7:i=r.sent,r.next=13;break;case 10:r.prev=10,r.t0=r.catch(4),console.error(r.t0);case 13:return r.abrupt("return",(o(),i));case 14:case"end":return r.stop()}}),null,this,[[4,10]])}},{key:"setRouteId",value:function(t,e,n){return regeneratorRuntime.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,regeneratorRuntime.awrap(this.setRoot(t,e,{duration:"root"===n?0:void 0,direction:"back"===n?"back":"forward"}));case 2:return o.t0=o.sent,o.t1=this.activeEl,o.abrupt("return",{changed:o.t0,element:o.t1});case 5:case"end":return o.stop()}}),null,this)}},{key:"getRouteId",value:function(){var t;return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.activeEl,e.abrupt("return",t?{id:t.tagName,element:t}:void 0);case 2:case"end":return e.stop()}}),null,this)}},{key:"setRoot",value:function(t,e,n){var o,i;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(this.activeComponent!==t){r.next=2;break}return r.abrupt("return",!1);case 2:return o=this.activeEl,r.next=5,regeneratorRuntime.awrap(Object(s.a)(this.delegate,this.el,t,["ion-page","ion-page-invisible"],e));case 5:return i=r.sent,this.activeComponent=t,this.activeEl=i,r.next=10,regeneratorRuntime.awrap(this.commit(i,o,n));case 10:return r.next=12,regeneratorRuntime.awrap(Object(s.b)(this.delegate,o));case 12:return r.abrupt("return",!0);case 13:case"end":return r.stop()}}),null,this)}},{key:"transition",value:function(t,e){var n,o,r,a,s,c=this,d=arguments;return regeneratorRuntime.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(n=d.length>2&&void 0!==d[2]?d[2]:{},e!==t){u.next=3;break}return u.abrupt("return",!1);case 3:return this.ionNavWillChange.emit(),o=this.el,r=this.mode,a=this.animated&&i.b.getBoolean("animated",!0),s=this.animation||n.animationBuilder||i.b.get("navAnimation"),u.next=7,regeneratorRuntime.awrap(Object(l.e)(Object.assign({mode:r,animated:a,animationBuilder:s,enteringEl:t,leavingEl:e,baseEl:o,progressCallback:n.progressAnimation?function(t){return c.ani=t}:void 0},n)));case 7:return this.ionNavDidChange.emit(),u.abrupt("return",!0);case 9:case"end":return u.stop()}}),null,this)}},{key:"lock",value:function(){var t,e;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=this.waitPromise,this.waitPromise=new Promise((function(t){return e=t})),n.t0=void 0!==t,!n.t0){n.next=6;break}return n.next=6,regeneratorRuntime.awrap(t);case 6:return n.abrupt("return",e);case 7:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){return Object(o.i)("slot",null)}},{key:"el",get:function(){return Object(o.f)(this)}}],[{key:"watchers",get:function(){return{swipeHandler:["swipeHandlerChanged"]}}},{key:"style",get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"}}]),t}(),j=function(){function t(e){_classCallCheck(this,t),Object(o.l)(this,e),this.ionStyle=Object(o.e)(this,"ionStyle",7)}return _createClass(t,[{key:"sizeChanged",value:function(){this.emitStyle()}},{key:"connectedCallback",value:function(){this.emitStyle()}},{key:"emitStyle",value:function(){var t=this.getSize();this.ionStyle.emit(_defineProperty({},"title-".concat(t),!0))}},{key:"getSize",value:function(){return void 0!==this.size?this.size:"default"}},{key:"getMode",value:function(){var t=Object(o.d)(this),e=this.el.closest("ion-toolbar");return e&&e.mode||t}},{key:"render",value:function(){var t,e=this.getMode(),n=this.getSize();return Object(o.i)(o.a,{class:Object.assign((t={},_defineProperty(t,e,!0),_defineProperty(t,"title-".concat(e),!0),_defineProperty(t,"title-".concat(n),!0),t),Object(a.a)(this.color))},Object(o.i)("div",{class:"toolbar-title"},Object(o.i)("slot",null)))}},{key:"el",get:function(){return Object(o.f)(this)}}],[{key:"watchers",get:function(){return{size:["sizeChanged"]}}},{key:"style",get:function(){return":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.title-ios.title-default),:host(.title-ios.title-large){left:0;top:0;padding-left:90px;padding-right:90px;padding-top:0;padding-bottom:0;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]).title-ios.title-default,:host-context([dir=rtl]).title-ios.title-large,:host-context([dir=rtl]):host(.title-ios.title-default),:host-context([dir=rtl]):host(.title-ios.title-large){left:unset;right:unset;right:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-default),:host(.title-ios.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-md){padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:.0125em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-md){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host(.title-ios.title-small){padding-left:9px;padding-right:9px;padding-top:6px;padding-bottom:16px;width:100%;height:100%;font-size:13px;text-align:center}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-small){padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}:host(.title-md.title-small){width:100%;height:100%;font-size:15px;font-weight:400}:host(.title-ios.title-large){padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;bottom:0;-ms-flex-align:end;align-items:flex-end;min-width:100%;padding-bottom:6px;font-size:34px;font-weight:700;text-align:start}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}"}}]),t}(),O=function(){function t(e){_classCallCheck(this,t),Object(o.l)(this,e),this.childrenStyles=new Map}return _createClass(t,[{key:"componentWillLoad",value:function(){var t=Array.from(this.el.querySelectorAll("ion-buttons")),e=t.find((function(t){return"start"===t.slot}));e&&e.classList.add("buttons-first-slot");var n=t.reverse(),o=n.find((function(t){return"end"===t.slot}))||n.find((function(t){return"primary"===t.slot}))||n.find((function(t){return"secondary"===t.slot}));o&&o.classList.add("buttons-last-slot")}},{key:"childrenStyle",value:function(t){t.stopPropagation();var e=t.target.tagName,n=t.detail,o={},i=this.childrenStyles.get(e)||{},r=!1;Object.keys(n).forEach((function(t){var e="toolbar-".concat(t),a=n[t];a!==i[e]&&(r=!0),a&&(o[e]=!0)})),r&&(this.childrenStyles.set(e,o),this.el.forceUpdate())}},{key:"render",value:function(){var t=Object(o.d)(this),e={};return this.childrenStyles.forEach((function(t){Object.assign(e,t)})),Object(o.i)(o.a,{class:Object.assign(Object.assign(_defineProperty({"in-toolbar":Object(a.c)("ion-toolbar",this.el)},t,!0),e),Object(a.a)(this.color))},Object(o.i)("div",{class:"toolbar-background"}),Object(o.i)("div",{class:"toolbar-container"},Object(o.i)("slot",{name:"start"}),Object(o.i)("slot",{name:"secondary"}),Object(o.i)("div",{class:"toolbar-content"},Object(o.i)("slot",null)),Object(o.i)("slot",{name:"primary"}),Object(o.i)("slot",{name:"end"})))}},{key:"el",get:function(){return Object(o.f)(this)}}],[{key:"style",get:function(){return":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{top:0;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-background,::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background,var(--ion-background-color,#fff));--color:var(--ion-toolbar-color,var(--ion-text-color,#424242));--border-color:var(--ion-toolbar-border-color,var(--ion-border-color,var(--ion-color-step-150,#c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(ion-segment){min-height:var(--min-height)}::slotted(.buttons-first-slot){margin-left:4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-first-slot){margin-left:unset;-webkit-margin-start:4px;margin-inline-start:4px}}::slotted(.buttons-last-slot){margin-right:4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-last-slot){margin-right:unset;-webkit-margin-end:4px;margin-inline-end:4px}}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}"}}]),t}()}}]);