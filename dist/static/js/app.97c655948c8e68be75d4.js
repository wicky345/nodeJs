webpackJsonp([1],{"5WxE":function(t,n){},K6VE:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("MVMM"),a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("br"),t._v(" "),e("el-row",[e("el-col",{staticClass:"font32 center",attrs:{span:24}},[t._v("言情小说论坛快捷操作\n      "),e("div",{staticClass:"font28"},[t._v("（author：luozheao）")])])],1),t._v(" "),e("br"),t._v(" "),e("el-row",[e("el-col",{attrs:{span:24}},[e("el-button",{attrs:{type:"success"},on:{click:t.sign}},[t._v("签到")]),t._v(" "),e("el-button",{attrs:{type:"warning"},on:{click:t.getTodayLoveBook}},[t._v("获取当日小说")])],1)],1),t._v(" "),e("br"),t._v(" "),e("el-row",[e("el-col",{attrs:{span:24}},[e("div",{staticClass:"toLeft font32"},[t._v("签到信息：")]),t._v(" "),t._l(t.signMsg,function(n){return e("div",{staticClass:"font18"},[t._v(t._s(n))])})],2),t._v(" "),e("br"),t._v(" "),e("el-col",{attrs:{span:24}},[e("div",{staticClass:"toLeft font32"},[t._v("今日书籍信息：")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showMsg,expression:"showMsg"}],staticClass:"center font28"},[t._v(t._s(this.msg))]),t._v(" "),t._l(t.loveBooks,function(n){return e("div",{staticClass:"font18 red"},[e("a",{attrs:{href:"/api/download?name="+n.realDownLink}},[t._v(t._s(n.name)+" "+t._s(n.realDownLink?"":"(您的书币不足)")+" ")])])})],2)],1)],1)},staticRenderFns:[]};var s=e("Z0/y")({components:{},data:function(){return{signMsg:[],loveBooks:[],showMsg:!1,msg:"正在获取书籍，请不要离开页面..."}},name:"luozheao",methods:{sign:function(){var t=this;this.signMsg=["正在加载..."],this.$api.get("/api/sign","",function(n){200==n.status&&(t.signMsg=n.data)})},getTodayLoveBook:function(){var t=this;this.loveBooks=[],this.showMsg=!0,this.msg="正在获取书籍，请不要离开页面...",this.$api.get("/api/getTodayLoveBook","",function(n){200==n.status&&(t.loveBooks=n.data,0==t.loveBooks.length?t.msg="今日没有可下载书籍":t.showMsg=!1)})}},created:function(){},mounted:function(){},beforeRouteEnter:function(t,n,e){}},a,!1,function(t){e("netA")},null,null).exports,i=e("zO6J"),r={props:[],components:{},data:function(){return{}},computed:{},watch:{},methods:{},mounted:function(){},beforeRouteEnter:function(t,n,e){e(function(t){console.log(t,"haha")})}},c={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n         再见,世界!\n")])},staticRenderFns:[]};var u=e("Z0/y")(r,c,!1,function(t){e("5WxE")},null,null).exports,l={props:[],components:{},data:function(){return{name:"",data:[]}},computed:{route:function(){return this.$route.params}},watch:{route:{handler:function(t,n){console.log(t,n)},deep:!0}},methods:{submit:function(){var t=this;this.$api.post("/api/selectMsg",{name:this.name},function(n){200==n.status&&(t.data=n.data)})},add:function(){this.$api.post("/api/addMsg",{name:this.name},function(t){t.status})},del:function(){this.$api.post("/api/delMsg",{name:this.name},function(t){200==t.status&&console.log(t.data)})}},mounted:function(){},beforeRouteEnter:function(t,n,e){e(function(t){console.log(t,"foo")})}},p={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{width:"700px",margin:"0 auto"}},[e("br"),t._v(" "),e("el-row",[e("el-col",{staticClass:"red",attrs:{span:4}},[t._v("   姓名: ")]),t._v(" "),e("el-col",{attrs:{span:10}},[e("el-input",{model:{value:t.name,callback:function(n){t.name=n},expression:"name"}})],1),t._v(" "),e("el-col",{attrs:{span:3}},[e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.submit}},[t._v("查找")])],1),t._v(" "),e("el-col",{attrs:{span:3}},[e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.add}},[t._v("新增")])],1),t._v(" "),e("el-col",{attrs:{span:3}},[e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.del}},[t._v("删除")])],1)],1),t._v(" "),t._l(t.data,function(n,o){return e("el-row",{key:o},[e("el-col",{attrs:{span:4}},[t._v("姓名:"+t._s(n.name))]),t._v(" "),e("el-col",{attrs:{span:2}},[t._v("id:"+t._s(n.id))])],1)})],2)},staticRenderFns:[]};var f=e("Z0/y")(l,p,!1,function(t){e("hpsA")},null,null).exports;o.default.use(i.a);var d=new i.a({routes:[{path:"/haha",name:"haha",component:u},{path:"/foo/:id",name:"foo",component:f}]}),v=e("9rMa"),h=e("wtEF"),m=e.n(h),_=e("aozt"),g=e.n(_).a.create({withCredentials:!0,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"},transformRequest:[function(t){var n="";for(var e in t)!0===t.hasOwnProperty(e)&&(n+=encodeURIComponent(e)+"="+encodeURIComponent(t[e])+"&");return n}]});function w(t,n,e,o){g({method:t,url:n,data:"POST"===t||"PUT"===t?e:null,params:"GET"===t||"DELETE"===t?e:null}).then(function(t){o(t)}).catch(function(t){o(t)})}var y={get:function(t,n,e){return w("GET",t,n,e)},post:function(t,n,e){return w("POST",t,n,e)},put:function(t,n,e){return w("PUT",t,n,e)},delete:function(t,n,e){return w("DELETE",t,n,e)}},E=e("5VXh"),b=e.n(E);e("K6VE");o.default.prototype.$api=y,o.default.use(b.a),o.default.use(v.a);var k=new v.a.Store(m.a);o.default.config.productionTip=!1,console.log(o.default.version),new o.default({router:d,store:k,template:"<App/>",components:{App:s}}).$mount("#app")},hpsA:function(t,n){},netA:function(t,n){},wtEF:function(t,n){var e={strict:!0,state:{arr:"luozheao"},mutations:{changeArr:function(t,n){setTimeout(function(e){t.arr=n},1e3)}},actions:{changeArr:function(t,n){var e=t.commit;setTimeout(function(t){e("changeArr2",n)},1e3)}}};t.exports=e}},["NHnr"]);
//# sourceMappingURL=app.97c655948c8e68be75d4.js.map