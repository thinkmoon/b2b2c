webpackJsonp([7],{FV2Y:function(e,t){},rpfh:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("YtJ0"),n=r("gyMJ"),s={name:"MyExpress",data:function(){return{orderNo:0,expressData:{order_log:[]}}},mounted:function(){this.orderNo=this.$route.query.orderNo,this.orderNo&&this.searchAction()},computed:{},methods:{searchAction:function(){var e=this;Object(n.o)({order_no:this.orderNo}).then(function(t){1!==t.code?e.$Message.error(t.msg):e.expressData=t.data})}},store:o.a},a={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",[r("Input",{attrs:{search:"",autofocus:"","enter-button":"",placeholder:"输入你要搜索的单号"},on:{"on-enter":e.searchAction,"on-search":e.searchAction},model:{value:e.orderNo,callback:function(t){e.orderNo=t},expression:"orderNo"}})],1),e._v(" "),r("p",{staticStyle:{"margin-top":"30px"}},[r("Timeline",[r("TimelineItem",{attrs:{color:"green"}},[r("Icon",{attrs:{slot:"dot",type:"ios-trophy"},slot:"dot"}),e._v(" "),r("span",[e._v("查看快递信息")])],1),e._v(" "),e._l(e.expressData.order_log,function(t,o){return r("TimelineItem",{key:o,staticStyle:{"font-size":"24px"}},[r("Icon",{attrs:{slot:"dot",type:"ios-trophy"},slot:"dot"}),e._v(" "),r("Time",{attrs:{time:t.create_time}}),r("br"),e._v("\n        派送员: "+e._s(t.sender_name)),r("br"),e._v("\n        联系电话: "+e._s(t.sender_mobile)),r("br"),e._v("\n        位置: "+e._s(t.address)),r("br"),e._v("\n        快递单号: "+e._s(t.express_no)),r("br")],1)})],2)],1)])},staticRenderFns:[]};var i=r("C7Lr")(s,a,!1,function(e){r("FV2Y")},"data-v-a477f24c",null);t.default=i.exports}});
//# sourceMappingURL=7.ff373f8b640480098ff7.js.map