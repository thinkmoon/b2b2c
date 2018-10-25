webpackJsonp([6],{"9dAM":function(t,e){},lO7g:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("4YfN"),r=a.n(s),o=a("YtJ0"),i=a("9rMa"),n=a("gyMJ"),l={name:"Home",created:function(){this.isLogin(),this.formData=this.userInfo},computed:r()({},Object(i.e)(["userInfo"])),data:function(){return{editModal:!1,resetModal:!1,formData:{},pwData:{},activeTitle:"我的订单",bar:{myAddress:"我的收货地址",addAddress:"添加收货地址",myOrder:"我的订单",myShoppingCart:"我的购物车"}}},methods:r()({},Object(i.b)(["signOut","isLogin"]),{onSelect:function(t){this.activeTitle=this.bar[t],this.$router.push("/home/"+t)},edit:function(){this.editModal=!0},editAction:function(){var t=this;Object(n.g)(this.formData,this.userInfo.token).then(function(e){1===e.code?t.$Message.success("修改成功"):t.$Message.error("修改失败"),t.editModal=!1})},reset:function(){this.resetModal=!0},resetAction:function(){var t=this;this.pwData.newpassword!==this.pwData.repassword?(console.log(this.pwData.newpassword,this.pwData.repassword),this.$Message.error("两次密码输入不一致")):Object(n.y)({newpassword:this.pwData.newpassword,mobile:this.userInfo.mobile,captcha:"123456"},this.userInfo.token).then(function(e){1===e.code?(t.$Message.success("修改成功"),t.signOut()):t.$Message.error("修改失败"),t.resetModal=!1})}}),store:o.a},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("Layout",{staticClass:"layout"},[a("Sider",{ref:"side",staticClass:"side-bar",style:{height:"calc(100vh - 35px)",background:"#fff",overflow:"auto"},attrs:{"collapsed-width":78}},[a("Menu",{attrs:{"active-name":"1-2",theme:"light",width:"auto"},on:{"on-select":t.onSelect}},[a("div",{staticClass:"user-icon"},[a("div",{staticClass:"user-img"},[a("img",{attrs:{src:t.userInfo.avatar}})]),t._v(" "),a("p",[t._v(t._s(t.userInfo.username))]),t._v(" "),a("p"),t._v(" "),a("p",[a("Button",{attrs:{type:"primary",size:"small"},on:{click:t.edit}},[t._v("编辑资料")]),t._v(" "),a("Button",{attrs:{type:"error",size:"small"},on:{click:t.reset}},[t._v("重置密码")])],1)]),t._v(" "),a("Modal",{attrs:{width:"530"},model:{value:t.editModal,callback:function(e){t.editModal=e},expression:"editModal"}},[a("p",{attrs:{slot:"header"},slot:"header"},[a("Icon",{attrs:{type:"edit"}}),t._v(" "),a("span",[t._v("编辑资料")])],1),t._v(" "),a("div",[a("Form",{attrs:{model:t.formData,"label-position":"left","label-width":60}},[a("FormItem",{attrs:{label:"头像地址",prop:"address"}},[a("i-input",{attrs:{disabled:"",size:"large"},model:{value:t.formData.avatar,callback:function(e){t.$set(t.formData,"avatar",e)},expression:"formData.avatar"}})],1),t._v(" "),a("FormItem",{attrs:{label:"用户名",prop:"name"}},[a("i-input",{attrs:{disabled:"",size:"large"},model:{value:t.formData.username,callback:function(e){t.$set(t.formData,"username",e)},expression:"formData.username"}})],1),t._v(" "),a("FormItem",{attrs:{label:"昵称",prop:"address"}},[a("i-input",{attrs:{size:"large"},model:{value:t.formData.nickname,callback:function(e){t.$set(t.formData,"nickname",e)},expression:"formData.nickname"}})],1),t._v(" "),a("FormItem",{attrs:{label:"简介",prop:"address"}},[a("i-input",{attrs:{size:"large"},model:{value:t.formData.bio,callback:function(e){t.$set(t.formData,"bio",e)},expression:"formData.bio"}})],1)],1)],1),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"primary",size:"large",long:""},on:{click:t.editAction}},[t._v("修改")])],1)]),t._v(" "),a("Modal",{attrs:{width:"530"},model:{value:t.resetModal,callback:function(e){t.resetModal=e},expression:"resetModal"}},[a("p",{attrs:{slot:"header"},slot:"header"},[a("Icon",{attrs:{type:"edit"}}),t._v(" "),a("span",[t._v("重置密码")])],1),t._v(" "),a("div",[a("Form",{attrs:{model:t.pwData,"label-position":"left","label-width":60}},[a("FormItem",{attrs:{label:"新密码",prop:"address"}},[a("i-input",{attrs:{type:"password",size:"large"},model:{value:t.pwData.newpassword,callback:function(e){t.$set(t.pwData,"newpassword",e)},expression:"pwData.newpassword"}})],1),t._v(" "),a("FormItem",{attrs:{label:"确认密码",prop:"name"}},[a("i-input",{attrs:{type:"password",size:"large"},model:{value:t.pwData.repassword,callback:function(e){t.$set(t.pwData,"repassword",e)},expression:"pwData.repassword"}})],1)],1)],1),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"primary",size:"large",long:""},on:{click:t.resetAction}},[t._v("修改")])],1)]),t._v(" "),a("Submenu",{attrs:{name:"1"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"ios-navigate-outline"}}),t._v(" "),a("span",[t._v("收货地址")])],1),t._v(" "),a("MenuItem",{attrs:{name:"myAddress"}},[t._v("我的收货地址")]),t._v(" "),a("MenuItem",{attrs:{name:"addAddress"}},[t._v("添加收货地址")])],2),t._v(" "),a("Submenu",{attrs:{name:"2"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"md-clipboard"}}),t._v(" "),a("span",[t._v("购物订单")])],1),t._v(" "),a("MenuItem",{attrs:{name:"myOrder"}},[t._v("我的订单")])],2),t._v(" "),a("Submenu",{attrs:{name:"3"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"ios-cart"}}),t._v(" "),a("span",[t._v("购物车")])],1),t._v(" "),a("MenuItem",{attrs:{name:"myShoppingCart"}},[t._v("我的购物车")])],2)],1)],1),t._v(" "),a("Layout",{staticClass:"layout"},[a("Header",{style:{background:"#fff"}},[a("h2",[t._v(t._s(t.activeTitle))])]),t._v(" "),a("Content",{staticClass:"content"},[a("transition",{attrs:{mode:"out-in"}},[a("router-view")],1)],1),t._v(" "),a("Footer",{staticClass:"layout-footer-center"},[t._v("2018 © Thinkmoon")])],1)],1)],1)},staticRenderFns:[]};var c=a("C7Lr")(l,d,!1,function(t){a("9dAM")},"data-v-cf81748c",null);e.default=c.exports}});
//# sourceMappingURL=6.d66cabf1ef9f09e3bfb4.js.map