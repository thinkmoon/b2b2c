webpackJsonp([1],{B7tt:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("4YfN"),a=e.n(i),o=e("/KFX"),n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shop-nav-box"},[e("div",{staticClass:"shop-nav-container"},[e("ul",t._l(t.shopNav,function(s,i){return e("li",{key:i},[e("router-link",{attrs:{to:"/merchant"}},[t._v(t._s(s))])],1)}))])])},staticRenderFns:[]};var r=e("C7Lr")({name:"GoodsDetailNav",data:function(){return{shopNav:[]}}},n,!1,function(t){e("Vpd5")},"data-v-25febd42",null).exports,c=e("b+fo"),l=e("bYoP"),d=e("YtJ0"),m=e("9rMa"),v=e("gyMJ"),_={name:"ShowGoods",data:function(){return{price:0,count:1,selectBoxIndex:0,imgIndex:0,goodsImg:["static/img/goodsDetail/intro/1.jpg","static/img/goodsDetail/intro/2.jpg","static/img/goodsDetail/intro/3.jpg","static/img/goodsDetail/intro/4.jpg"]}},computed:a()({},Object(m.e)(["goodsInfo","userInfo"]),{hirePurchase:function(){var t=this.price*this.count/3,s=this.price*this.count/6,e=this.price*this.count/12*1.0025,i=this.price*this.count/24*1.005;return[{tooltip:"无手续费",type:"不分期"},{tooltip:"无手续费",type:"￥"+t.toFixed(2)+" x 3期"},{tooltip:"无手续费",type:"￥"+s.toFixed(2)+" x 6期"},{tooltip:"含手续费：费率0.25%起，￥0.1起×12期",type:"￥"+e.toFixed(2)+" x 12期"},{tooltip:"含手续费：费率0.5%起，￥0.1起×12期",type:"￥"+i.toFixed(2)+" x 24期"}]}}),methods:{select:function(t,s){this.selectBoxIndex=3*t+s,this.price=this.goodsInfo.setMeal[t][s].price},showBigImg:function(t){this.imgIndex=t},addShoppingCartBtn:function(){var t={user_id:this.userInfo.id,admin_id:this.goodsInfo.admin_id,goods_id:this.goodsInfo.id,goods_num:this.count};Object(v.b)(t,this.userInfo.token),this.$router.push({path:"/home/myShoppingCart"})}},mounted:function(){console.log(this.goodsInfo)},store:d.a},p={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"item-detail-show"},[e("div",{staticClass:"item-detail-left"},[e("div",{staticClass:"item-detail-big-img"},[e("img",{attrs:{src:""!==t.goodsInfo.goods_image?t.goodsInfo.goods_image:"static/img/goodsList/item-show-6.jpg",alt:""}})]),t._v(" "),e("div",{staticClass:"item-detail-img-row"},t._l(0===t.goodsInfo.goods_images.length?t.goodsImg:t.goodsInfo.goods_images,function(s,i){return e("div",{key:i,staticClass:"item-detail-img-small",on:{mouseover:function(s){t.showBigImg(i)}}},[e("img",{attrs:{src:s,alt:""}})])}))]),t._v(" "),e("div",{staticClass:"item-detail-right"},[e("div",{staticClass:"item-detail-title"},[e("p",[e("span",{staticClass:"item-detail-express"},[t._v("校园配送")]),t._v(" "+t._s(t.goodsInfo.goods_name))])]),t._v(" "),e("div",{staticClass:"item-detail-tag"},[e("p",t._l(t.goodsInfo.category,function(s,i){return e("span",{key:i},[t._v("【"+t._s(s)+"】")])}))]),t._v(" "),e("div",{staticClass:"item-detail-price-row"},[e("div",{staticClass:"item-price-left"},[e("div",{staticClass:"item-price-row"},[e("p",[e("span",{staticClass:"item-price-title"},[t._v("促     销")]),t._v(" "),e("span",{staticClass:"item-price"},[t._v("￥"+t._s(t.goodsInfo.now_price))])])]),t._v(" "),e("div",{staticClass:"item-price-row"},[e("p",[e("span",{staticClass:"item-price-title"},[t._v("原 价")]),t._v(" "),e("span",{staticClass:"item-price-full-cut"},[t._v("￥"+t._s(t.goodsInfo.original_price))])])])]),t._v(" "),e("div",{staticClass:"item-price-right"},[e("div",{staticClass:"item-remarks-sum"},[e("p",[t._v("剩余库存")]),t._v(" "),e("p",[e("span",{staticClass:"item-remarks-num"},[t._v(t._s(t.goodsInfo.goods_stock))])])])])]),t._v(" "),e("div",{staticClass:"item-select"},[t._m(0),t._v(" "),e("div",{staticClass:"item-select-column"},[t._v("\n          "+t._s(t.goodsInfo.goods_intro)+"\n        ")])]),t._v(" "),e("div",{staticClass:"item-select"},[t._m(1),t._v(" "),e("div",{staticClass:"item-select-row"},t._l(t.hirePurchase,function(s,i){return e("div",{key:i,staticClass:"item-select-class"},[e("Tooltip",{attrs:{content:s.tooltip,placement:"top-start"}},[e("span",[t._v(t._s(s.type))])])],1)}))]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"add-buy-car-box"},[e("div",{staticClass:"add-buy-car"},[e("InputNumber",{attrs:{min:1,size:"large"},model:{value:t.count,callback:function(s){t.count=s},expression:"count"}}),t._v(" "),e("Button",{attrs:{type:"error",size:"large"},on:{click:function(s){t.addShoppingCartBtn()}}},[t._v("加入购物车")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"item-select-title"},[s("p",[this._v("商品描述")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"item-select-title"},[s("p",[this._v("白条分期(该商品不支持分期)")])])}]};var u=e("C7Lr")(_,p,!1,function(t){e("ce2G")},"data-v-706263a2",null).exports,g={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"item-protect-container"},[e("div",{staticClass:"item-protect-box"},[e("p",{staticClass:"item-protect-title-box"},[e("Avatar",{staticStyle:{"background-color":"#e4393c"},attrs:{icon:"ribbon-a"}}),t._v(" "),e("span",{staticClass:"item-protect-title"},[t._v("卖家服务")])],1),t._v(" "),e("p",{staticClass:"item-protect-detail"},[t._v("\n        高品质敢承诺：7天无理由退货，30天免费换新，质量问题商家承担来回运费换新；如需发票，请在确认收货无误后联系商家开出。（注*发票不随货品一同发出）\n      ")])]),t._v(" "),e("div",{staticClass:"item-protect-box"},[e("p",{staticClass:"item-protect-title-box"},[e("Avatar",{staticStyle:{"background-color":"#e4393c"},attrs:{icon:"cash"}}),t._v(" "),e("span",{staticClass:"item-protect-title"},[t._v("平台承诺")])],1),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"item-protect-box"},[e("p",{staticClass:"item-protect-title-box"},[e("Avatar",{staticStyle:{"background-color":"#e4393c"},attrs:{icon:"locked"}}),t._v(" "),e("span",{staticClass:"item-protect-title"},[t._v("正品行货")])],1),t._v(" "),e("p",{staticClass:"item-protect-detail"},[t._v("\n        BIT商城向您保证所售商品均为正品行货，BIT自营商品开具机打发票或电子发票。\n      ")])]),t._v(" "),e("div",{staticClass:"item-protect-box"},[e("p",{staticClass:"item-protect-title-box"},[e("Avatar",{staticStyle:{"background-color":"#e4393c"},attrs:{icon:"settings"}}),t._v(" "),e("span",{staticClass:"item-protect-title"},[t._v("全国联保")])],1),t._v(" "),t._m(2)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"remarks-title"},[s("span",[this._v("售后保障")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"item-protect-detail"},[this._v("\n        平台卖家销售并发货的商品，由平台卖家提供发票和相应的售后服务。请您放心购买！"),s("br"),this._v(" 注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！\n      ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"item-protect-detail"},[this._v("\n        凭质保证书及BIT商城发票，可享受全国联保服务（奢侈品、钟表除外；奢侈品、钟表由BIT联系保修，享受法定三包售后服务），与您亲临商场选购的商品享受相同的质量保证。BIT商城还为您提供具有竞争力的商品价格和运费政策，请您放心购买！"),s("br"),s("br"),this._v(" 注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！\n      ")])}]};var h=e("C7Lr")({name:"ShowProductWarranty"},g,!1,function(t){e("LpsB")},"data-v-30446804",null).exports,f={name:"ShowGoodsDetail",data:function(){return{guige:[{title:"配置",content:"32G"}],goodsImg:["static/img/goodsDetail/intro/1.jpg","static/img/goodsDetail/intro/2.jpg","static/img/goodsDetail/intro/3.jpg","static/img/goodsDetail/intro/4.jpg"],Evaluate:{current_page:1,data:[],last_page:1,per_page:10,total:1},hot:[],tagsColor:["blue","green","red","yellow"]}},created:function(){var t=this;Object(v.l)({flag:"hot"}).then(function(s){t.hot=s.data.data,console.log(t.hot)}),Object(v.m)({goods_id:this.$route.query.id}).then(function(s){t.Evaluate=s.data})},updated:function(){var t=this;this.$nextTick(function(){setTimeout(t.changeHeight,100),setTimeout(t.changeHeight,1e3),setTimeout(t.changeHeight,3e3),setTimeout(t.changeHeight,5e3),setTimeout(t.changeHeight,1e4),setTimeout(t.changeHeight,15e3),setTimeout(t.changeHeight,2e4),setTimeout(t.changeHeight,25e3),setTimeout(t.changeHeight,3e4),setTimeout(t.changeHeight,5e4)})},computed:a()({},Object(m.e)(["goodsInfo"])),methods:{changeHeight:function(){var t=window.getComputedStyle(this.$refs.itemIntroGoods).height;console.log(t),t=parseInt(t.substr(0,t.length-2))+89,this.$refs.itemIntroDetail.style.height=t+"px"}},components:{ShowProductWarranty:h},store:d.a},C={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"item-intro-show"},[e("div",{staticClass:"item-intro-recommend"},[t._m(0),t._v(" "),e("div",{staticClass:"item-intro-recommend-column"},t._l(t.hot,function(s,i){return e("div",{key:i,staticClass:"item-recommend-column"},[e("div",{staticClass:"item-recommend-img"},[e("img",{attrs:{src:s.goods_image,alt:""}})]),t._v(" "),e("div",{staticClass:"item-recommend-intro"},[e("span",[e("span",{staticClass:"item-recommend-top-num"},[t._v(t._s(i+1))]),t._v(" 仅剩"+t._s(s.goods_stock)+"件")]),t._v(" "),e("span",{staticClass:"item-recommend-price"},[t._v("￥"+t._s(s.now_price))])])])}))]),t._v(" "),e("div",{ref:"itemIntroDetail",staticClass:"item-intro-detail"},[e("div",{staticClass:"item-intro-nav item-tabs"},[e("Tabs",[e("TabPane",{attrs:{label:"商品介绍"}},[e("div",{staticClass:"remarks-title"},[e("span",[t._v("商品介绍")])]),t._v(" "),e("div",{ref:"itemIntroGoods",staticClass:"item-intro-img"},t._l(0===t.goodsInfo.goods_images.length?t.goodsImg:t.goodsInfo.goods_images,function(t,s){return e("img",{key:s,attrs:{src:t,alt:""}})}))]),t._v(" "),e("TabPane",{attrs:{label:"规格参数"}},[e("div",{staticClass:"remarks-title"},[e("span",[t._v("规格参数")])]),t._v(" "),e("span",{domProps:{innerHTML:t._s(t.goodsInfo.goods_content)}})]),t._v(" "),e("TabPane",{attrs:{label:"售后保障"}},[e("ShowProductWarranty")],1),t._v(" "),e("TabPane",{attrs:{label:"商品评价"}},[e("div",{staticClass:"remarks-container"},[e("div",{staticClass:"remarks-title"},[e("span",[t._v("商品评价")])]),t._v(" "),e("div",{staticClass:"remarks-analyse-box"},[e("div",{staticClass:"remarks-analyse-goods"},[e("i-circle",{attrs:{percent:89,"stroke-color":"#e4393c"}},[e("span",{staticClass:"remarks-analyse-num"},[t._v("89%")]),t._v(" "),e("p",{staticClass:"remarks-analyse-title"},[t._v("好评率")])])],1),t._v(" "),e("div",{staticClass:"remarks-analyse-tags"},t._l(t.Evaluate.data,function(s,i){return e("Tag",{key:i,attrs:{checkable:"",color:t.tagsColor[i%4]}},[t._v(t._s(s.content))])}))]),t._v(" "),e("div",{staticClass:"remarks-bar"},[e("span",[t._v("追评6")]),t._v(" "),e("span",[t._v("好评6")]),t._v(" "),e("span",[t._v("中评6")]),t._v(" "),e("span",[t._v("差评6")])]),t._v(" "),t._l(t.Evaluate.data,function(s,i){return e("div",{key:i,staticClass:"remarks-box"},[e("div",{staticClass:"remarks-user"},[e("Avatar",{attrs:{icon:"person"}}),t._v(" "),e("span",{staticClass:"remarks-user-name"},[t._v(t._s(s.username))])],1),t._v(" "),e("div",{staticClass:"remarks-content-box"},[e("p",[e("Rate",{staticClass:"remarks-star",attrs:{disabled:"",value:s.values,"allow-half":""}})],1),t._v(" "),e("p",{staticClass:"remarks-content"},[t._v(t._s(s.content))]),t._v(" "),e("p",{staticClass:"remarks-sub"},[e("span",{staticClass:"remarks-item"},[t._v(t._s(s.goods))]),t._v(" "),e("span",{staticClass:"remarks-time"},[t._v(t._s(s.time))])])])])}),t._v(" "),e("div",{staticClass:"remarks-page"},[e("Page",{attrs:{total:t.Evaluate.total,size:"small",current:t.Evaluate.current_page,"show-elevator":"","show-sizer":""}})],1)],2)])],1)],1)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"item-recommend-title"},[s("p",[this._v("店铺热销")])])}]};var b=e("C7Lr")(f,C,!1,function(t){e("Lbr+"),e("O62H")},"data-v-67bce10a",null).exports,I={name:"GoodsDetail",beforeRouteEnter:function(t,s,e){window.scrollTo(0,0),e()},created:function(){var t=this;this.id=this.$route.query.id,Object(v.n)({goods_id:this.id}).then(function(s){var e=s.data;console.log(e),t.SET_GOODS_INFO(e),t.SET_ADMINID(t.goodsInfo.admin_id)})},data:function(){return{id:0,tagsColor:["blue","green","red","yellow"]}},methods:a()({},Object(m.d)(["SET_GOODS_INFO","SET_ADMINID"])),computed:a()({},Object(m.e)(["goodsInfo","isLoading"])),components:{Search:o.a,ShopHeader:c.a,GoodsDetailNav:r,ShowGoods:u,ShowGoodsDetail:b,Footer:l.a},store:d.a},k={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("Search"),t._v(" "),e("ShopHeader"),t._v(" "),e("GoodsDetailNav"),t._v(" "),e("div",{staticClass:"shop-item-path"},[e("div",{staticClass:"shop-nav-container"},[e("Breadcrumb",[e("BreadcrumbItem",{attrs:{to:"/"}},[t._v("首页")]),t._v(" "),e("BreadcrumbItem",{attrs:{to:"/"}},[t._v("首页")])],1)],1)]),t._v(" "),e("ShowGoods"),t._v(" "),e("ShowGoodsDetail"),t._v(" "),e("Footer"),t._v(" "),t.isLoading?e("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)},staticRenderFns:[]};var y=e("C7Lr")(I,k,!1,function(t){e("Kq0B")},"data-v-80f8b494",null);s.default=y.exports},Kq0B:function(t,s){},"Lbr+":function(t,s){},LpsB:function(t,s){},O62H:function(t,s){},Vpd5:function(t,s){},"b+fo":function(t,s,e){"use strict";var i=e("4YfN"),a=e.n(i),o=e("YtJ0"),n=e("9rMa"),r=e("gyMJ"),c={name:"ShopHeader",computed:a()({},Object(n.e)(["userInfo","adminId"]),{backImage:function(){return'background-image: url("'+this.shopIntro.shop_info.shop_image+'")'}}),mounted:function(){var t=this;Object(r.r)({admin_id:this.adminId}).then(function(s){1!==s.code?t.$Message.error(s.msg):t.shopIntro=s.data})},data:function(){return{shopIntro:{shop_goods:[{admin_id:1,goods_image:"http://img.bennyweb.top/uploads/20181023/Fhci4P204XRb_fSof9AJK4W6PRmP.jpg",goods_name:"商品1",id:3}],shop_info:{nickname:"",avatar:"",admin_id:1,create_time:0,id:1,shop_content:"商铺描述",shop_image:"http://img.bennyweb.top/shop_image.jpg",shop_intro:"商铺简介",shop_mobile:1366666778,shop_no:"001",update_time:0}}}},store:o.a},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shop-box",style:t.backImage},[e("div",{staticClass:"shop-container"},[e("div",{staticClass:"shop-title"},[e("div",{staticClass:"shop-title-icon"},[e("Icon",{attrs:{type:"fireball"}}),t._v(" "),e("i",{staticClass:"fa fa-fire"})],1),t._v(" "),e("div",{staticClass:"shop-title-content"},[e("img",{attrs:{src:t.shopIntro.shop_info.avatar}}),t._v(" "),e("router-link",{attrs:{to:"/merchant"}},[e("font",{attrs:{size:"69px",color:"#2b85e4"}},[t._v(t._s(t.shopIntro.shop_info.nickname))])],1),t._v(" "),e("p",{staticStyle:{"margin-left":"130px"}},[e("router-link",{attrs:{to:"/merchant"}},[t._v(t._s(t.shopIntro.shop_info.shop_content))])],1)],1)]),t._v(" "),e("div",{staticClass:"shop-another-item"},t._l(t.shopIntro.shop_goods,function(s,i){return e("div",{key:i,staticClass:"shop-another-item-detail"},[e("div",{staticClass:"shop-another-item-img"},[e("img",{attrs:{src:s.goods_image,alt:""}})]),t._v(" "),e("div",{staticClass:"shop-anoter-item-intro"},[e("p",[t._v(t._s(i+1))]),t._v(" "),e("p",[t._v(t._s(s.goods_name))])])])}))])])},staticRenderFns:[]};var d=e("C7Lr")(c,l,!1,function(t){e("ySXs")},"data-v-403124a8",null);s.a=d.exports},ce2G:function(t,s){},ySXs:function(t,s){}});
//# sourceMappingURL=1.70ff6d8a034590881813.js.map