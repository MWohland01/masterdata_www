function _defineProperties(n,l){for(var u=0;u<l.length;u++){var e=l[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,l,u){return l&&_defineProperties(n.prototype,l),u&&_defineProperties(n,u),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"8k80":function(n,l,u){"use strict";u.r(l);var e=u("8Y7J"),t=function n(){_classCallCheck(this,n)},r=u("pMnS"),a=u("oBZk"),o=u("ZZ/e"),i=u("SVse"),c=u("mrSG"),s=u("X+KH"),b=function(){function n(l,u,e){_classCallCheck(this,n),this.alertCtrl=l,this.router=u,this.userData=e}return _createClass(n,[{key:"ngAfterViewInit",value:function(){this.getUsername()}},{key:"updatePicture",value:function(){console.log("Clicked to update picture")}},{key:"changeUsername",value:function(){return c.b(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l,u=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertCtrl.create({header:"Change Username",buttons:["Cancel",{text:"Ok",handler:function(n){u.userData.setUsername(n.username),u.getUsername()}}],inputs:[{type:"text",name:"username",value:this.username,placeholder:"username"}]});case 2:return l=n.sent,n.next=5,l.present();case 5:case"end":return n.stop()}}),n,this)})))}},{key:"getUsername",value:function(){var n=this;this.userData.getUsername().then((function(l){n.username=l}))}},{key:"changePassword",value:function(){console.log("Clicked to change password")}},{key:"logout",value:function(){this.userData.logout(),this.router.navigateByUrl("/login")}},{key:"support",value:function(){this.router.navigateByUrl("/support")}}]),n}(),p=u("iInd"),m=e.zb({encapsulation:0,styles:[["img[_ngcontent-%COMP%]{max-width:140px;border-radius:50%}"]],data:{}});function f(n){return e.Sb(0,[(n()(),e.Bb(0,0,null,null,20,"div",[["class","ion-padding-top ion-text-center"]],null,null,null,null,null)),(n()(),e.Bb(1,0,null,null,0,"img",[["alt","avatar"],["src","https://www.gravatar.com/avatar?d=mm&s=140"]],null,null,null,null,null)),(n()(),e.Bb(2,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),e.Rb(3,null,["",""])),(n()(),e.Bb(4,0,null,null,16,"ion-list",[["inset",""]],null,null,null,a.X,a.r)),e.Ab(5,49152,null,0,o.P,[e.j,e.p,e.F],{inset:[0,"inset"]},null),(n()(),e.Bb(6,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.updatePicture()&&e),e}),a.U,a.m)),e.Ab(7,49152,null,0,o.I,[e.j,e.p,e.F],null,null),(n()(),e.Rb(-1,0,["Update Picture"])),(n()(),e.Bb(9,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.changeUsername()&&e),e}),a.U,a.m)),e.Ab(10,49152,null,0,o.I,[e.j,e.p,e.F],null,null),(n()(),e.Rb(-1,0,["Change Username"])),(n()(),e.Bb(12,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.changePassword()&&e),e}),a.U,a.m)),e.Ab(13,49152,null,0,o.I,[e.j,e.p,e.F],null,null),(n()(),e.Rb(-1,0,["Change Password"])),(n()(),e.Bb(15,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.support()&&e),e}),a.U,a.m)),e.Ab(16,49152,null,0,o.I,[e.j,e.p,e.F],null,null),(n()(),e.Rb(-1,0,["Support"])),(n()(),e.Bb(18,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.logout()&&e),e}),a.U,a.m)),e.Ab(19,49152,null,0,o.I,[e.j,e.p,e.F],null,null),(n()(),e.Rb(-1,0,["Logout"]))],(function(n,l){n(l,5,0,"")}),(function(n,l){n(l,3,0,l.component.username)}))}function h(n){return e.Sb(0,[(n()(),e.Bb(0,0,null,null,10,"ion-header",[],null,null,null,a.O,a.j)),e.Ab(1,49152,null,0,o.C,[e.j,e.p,e.F],null,null),(n()(),e.Bb(2,0,null,0,8,"ion-toolbar",[],null,null,null,a.jb,a.E)),e.Ab(3,49152,null,0,o.Db,[e.j,e.p,e.F],null,null),(n()(),e.Bb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,a.I,a.d)),e.Ab(5,49152,null,0,o.m,[e.j,e.p,e.F],null,null),(n()(),e.Bb(6,0,null,0,1,"ion-menu-button",[],null,null,null,a.Y,a.u)),e.Ab(7,49152,null,0,o.S,[e.j,e.p,e.F],null,null),(n()(),e.Bb(8,0,null,0,2,"ion-title",[],null,null,null,a.hb,a.C)),e.Ab(9,49152,null,0,o.Bb,[e.j,e.p,e.F],null,null),(n()(),e.Rb(-1,0,["Account"])),(n()(),e.Bb(11,0,null,null,3,"ion-content",[],null,null,null,a.M,a.h)),e.Ab(12,49152,null,0,o.v,[e.j,e.p,e.F],null,null),(n()(),e.qb(16777216,null,0,1,null,f)),e.Ab(14,16384,null,0,i.i,[e.W,e.S],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,14,0,l.component.username)}),null)}var g=e.xb("page-account",b,(function(n){return e.Sb(0,[(n()(),e.Bb(0,0,null,null,1,"page-account",[],null,null,null,h,m)),e.Ab(1,4243456,null,0,b,[o.b,p.m,s.a],null,null)],null,null)}),{},{},[]),d=function n(){_classCallCheck(this,n)};u.d(l,"AccountModuleNgFactory",(function(){return k}));var k=e.yb(t,[],(function(n){return e.Kb([e.Lb(512,e.m,e.jb,[[8,[r.a,g]],[3,e.m],e.D]),e.Lb(4608,i.k,i.j,[e.z,[2,i.r]]),e.Lb(4608,o.c,o.c,[e.F,e.g]),e.Lb(4608,o.Ib,o.Ib,[o.c,e.m,e.w]),e.Lb(4608,o.Kb,o.Kb,[o.c,e.m,e.w]),e.Lb(1073742336,i.b,i.b,[]),e.Lb(1073742336,o.Fb,o.Fb,[]),e.Lb(1073742336,p.q,p.q,[[2,p.v],[2,p.m]]),e.Lb(1073742336,d,d,[]),e.Lb(1073742336,t,t,[]),e.Lb(1024,p.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);