webpackJsonp([10],{DjoQ:function(e,s){},KTvf:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=t("4YfN"),a=t.n(o),r=t("3cXf"),n=t.n(r),i=t("/KFX"),c=t("Mtv5"),d=t("bYoP"),l=t("YtJ0"),v=t("9rMa"),h=t("gyMJ"),_={name:"Order",beforeRouteEnter:function(e,s,t){window.scrollTo(0,0),t()},created:function(){this.loadCheckShoppingCart()},mounted:function(){var e=this;this.$route.query.orderId||setTimeout(function(){Object(h.v)({user_id:e.userInfo.user_id,goods:n()(e.ShoppingCartCheck.goodsList)},e.userInfo.token).then(function(s){1===s.code&&(e.addressData=s.data.user_consignee,e.orderInfo=s.data.order_info)})},500)},data:function(){return{addressData:[],orderInfo:[],columns:[{title:"图片",key:"img",width:86,render:function(e,s){return e("div",[e("img",{attrs:{src:s.row.goods_image,class:"img",style:"display: inline-block;width: 70%;height: 70%;"}})])},align:"center"},{title:"标题",key:"goods_name",align:"center"},{title:"数量",key:"goods_num",width:68,align:"center"},{title:"价格",width:108,key:"goods_price",align:"center"}],checkAddress:{id:"",name:"未选择",address:"请选择地址"},remarks:""}},computed:a()({},Object(v.e)(["userInfo","ShoppingCartCheck"]),{totalPrice:function(){var e=0;return this.orderInfo.forEach(function(s){e+=s.goods_price*s.goods_num}),e}}),methods:a()({},Object(v.b)(["loadAddress","loadCheckShoppingCart"]),{select:function(e,s){console.log(e),this.goodsCheckList=e},changeAddress:function(e){var s=this;this.addressData.forEach(function(t){t.id===e&&(s.checkAddress.id=t.id,s.checkAddress.name=t.receiver,s.checkAddress.address=t.receiver+" "+t.province+" "+t.city+" "+t.address+" "+t.mobile+" "+t.zip)})},payAction:function(){var e=this;Object(h.q)({user_id:this.userInfo.user_id,order_no:this.orderInfo[0].order_no,consignee_id:this.checkAddress.id,remark:this.remarks,shipping_method:0,payment_method:0},this.userInfo.token).then(function(s){1===s.code&&e.$Message.success("支付成功")})}}),components:{Search:i.a,GoodsListNav:c.a,Footer:d.a},store:l.a},u={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("Search"),e._v(" "),t("GoodsListNav"),e._v(" "),t("div",{staticClass:"goods-list-container"},[t("Alert",{staticClass:"tips-box",attrs:{"show-icon":""}},[e._v("\n      小提示\n      "),t("Icon",{attrs:{slot:"icon",type:"ios-lightbulb-outline"},slot:"icon"}),e._v(" "),t("template",{slot:"desc"},[e._v("请点击商品前的选择框，选择购物车中的商品，点击付款即可。")])],2),e._v(" "),t("Table",{ref:"selection",attrs:{border:"",columns:e.columns,data:e.orderInfo,size:"large","no-data-text":"您的购物车没有商品，请先添加商品到购物车再点击购买"},on:{"on-selection-change":e.select}}),e._v(" "),t("div",{staticClass:"address-container"},[t("h3",[e._v("收货人信息")]),e._v(" "),t("div",{staticClass:"address-box"},[t("div",{staticClass:"address-check"},[t("div",{staticClass:"address-check-name"},[t("span",[t("Icon",{attrs:{type:"ios-checkmark-outline"}}),e._v(" "+e._s(e.checkAddress.name))],1)]),e._v(" "),t("div",{staticClass:"address-detail"},[t("p",[e._v(e._s(e.checkAddress.address))])])]),e._v(" "),t("Collapse",[t("Panel",[e._v("\n              选择地址\n              "),t("p",{attrs:{slot:"content"},slot:"content"},[t("RadioGroup",{attrs:{vertical:"",size:"large"},on:{"on-change":e.changeAddress}},e._l(e.addressData,function(s,o){return t("Radio",{key:o,attrs:{label:s.id}},[t("span",[e._v(e._s(s.receiver)+" "+e._s(s.province)+" "+e._s(s.city)+" "+e._s(s.address)+" "+e._s(s.mobile)+" "+e._s(s.postalcode))])])}))],1)])],1)],1)]),e._v(" "),t("div",{staticClass:"remarks-container"},[t("h3",[e._v("备注")]),e._v(" "),t("i-input",{staticClass:"remarks-input",attrs:{size:"large",placeholder:"在这里填写备注信息"},model:{value:e.remarks,callback:function(s){e.remarks=s},expression:"remarks"}})],1),e._v(" "),e._m(0),e._v(" "),t("div",{staticClass:"pay-container"},[t("div",{staticClass:"pay-box"},[t("p",[t("span",[e._v("提交订单应付总额：")]),e._v(" "),t("span",{staticClass:"money"},[t("Icon",{attrs:{type:"social-yen"}}),e._v(" "+e._s(e.totalPrice.toFixed(2)))],1)]),e._v(" "),t("div",{staticClass:"pay-btn"},[t("Button",{attrs:{type:"error",size:"large"},on:{click:e.payAction}},[e._v("支付订单")])],1)])])],1),e._v(" "),t("Footer")],1)},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"invoices-container"},[s("h3",[this._v("发票信息")]),this._v(" "),s("p",[this._v("该商品不支持开发票")])])}]};var p=t("C7Lr")(_,u,!1,function(e){t("DjoQ")},"data-v-6a434f14",null);s.default=p.exports}});
//# sourceMappingURL=10.cd12dc4b4da8a7617dbb.js.map