import{r as P,o as r,a as I,w as N,c as a,b as p,d as S,e as t,t as m,F as i,_ as h,n as k,f as B,u as y,p as x,g as C,h as n,C as L,i as T}from"./index-UdVIvT3t.js";const q=t("div",null,"当前位置:",-1),A={key:0},V=["href"],z={__name:"CurrentLocation",props:{locationList:{type:Array,required:!0}},setup(e){return(o,s)=>{const c=P("el-row");return r(),I(c,null,{default:N(()=>[q,(r(!0),a(i,null,p(e.locationList,(d,u)=>(r(),a("div",null,[u!==0?(r(),a("span",A,">")):S("",!0),t("a",{href:d.url},m(d.name),9,V)]))),256))]),_:1})}}},E={__name:"WordTag",props:{word:{type:String,required:!0}},setup(e){return(o,s)=>(r(),a("div",null,m(e.word),1))}},f=h(E,[["__scopeId","data-v-9ad3c5de"]]),F=["href"],W={__name:"CategoryName",props:{categoryName:{type:String,required:!0},url:{type:String,required:!0}},setup(e){return(o,s)=>(r(),a("a",{href:e.url},m(e.categoryName),9,F))}},w=h(W,[["__scopeId","data-v-dfabf13d"]]),D={class:"box"},M=["href"],U={__name:"ColorBar",props:{colorItemList:{type:Array,required:!0}},setup(e){return(o,s)=>(r(),a("div",D,[(r(!0),a(i,null,p(e.colorItemList,c=>(r(),a("div",{style:k(c.style),class:"box-item"},[t("a",{href:c.url},m(c.desc),9,M)],4))),256))]))}},j=h(U,[["__scopeId","data-v-382aa405"]]),b=e=>(x("data-v-e99d19f8"),e=e(),C(),e),G={class:"page-navi"},H=b(()=>t("a",{href:"https://baidu.com"},"首页",-1)),J=b(()=>t("a",{href:"https://baidu.com"},"上一页",-1)),K=b(()=>t("a",{href:"https://baidu.com"},"下一页",-1)),O={__name:"PageToolBar",props:{pageCount:{type:Number,required:!0},currentPage:{type:Number,required:!0}},setup(e){const o=e,s=o.currentPage-6<1?1:o.currentPage-6,c=s+12>o.pageCount?o.pageCount:s+12,d=l=>{if(l===o.currentPage)return"current-page"},u=(l,v)=>new Array(v+1-l).fill(l).map((_,$)=>_+$);return console.log(u(s,c)),(l,v)=>(r(),a("div",G,[H,J,(r(!0),a(i,null,p(u(y(s),y(c)),_=>(r(),a("a",{href:"https://baidu.com",key:_,class:B(d(_))},m(_),3))),128)),K]))}},Q=h(O,[["__scopeId","data-v-e99d19f8"]]),g=e=>(x("data-v-ff642a7c"),e=e(),C(),e),R={class:"body"},X={class:"content"},Y={style:{display:"flex","flex-direction":"row"}},Z={style:{display:"flex","flex-direction":"row"}},ee={style:{display:"flex","flex-direction":"row"}},te={style:{display:"flex","flex-direction":"row","flex-wrap":"wrap","align-content":"flex-start"}},re=g(()=>t("br",null,null,-1)),ae=g(()=>t("br",null,null,-1)),oe=g(()=>t("br",null,null,-1)),se=g(()=>t("br",null,null,-1)),ce={__name:"PptTemplate",setup(e){const o=[{name:"优品PPT",url:"https://baidu.com"},{name:"PPT模板",url:"https://baidu.com"},{name:"社会生活",url:"https://baidu.com"}],s=[{desc:"颜色",style:"background: #cc0000;",url:"https://baidu.com"},{desc:"颜色",style:"background: #ea4c88;",url:"https://baidu.com"},{desc:"颜色",style:"background: #663399;",url:"https://baidu.com"},{desc:"颜色",style:"background: #0066cc;",url:"https://baidu.com"},{desc:"颜色",style:"background-image: linear-gradient(45deg, #ec5f67, #f99157, #fac863, #99c794, #5fb3b3, #6699cc, #c594c5);",url:"https://baidu.com"}],c=["党建工作","教育教学","网络科技","卡通风格","医学医疗","环境保护","经济金融","自然风景","建筑地产","读书笔记","旅游旅行","植物模板","动物模板","美食水果","艺术抽象","公司企业","体育运动","婚礼爱情","影视音乐","社会生活"];return Array.from({length:20},(d,u)=>u),(d,u)=>(r(),a(i,null,[t("div",R,[t("div",X,[n(z,{"location-list":o}),t("div",Y,[n(f,{word:"热门分类"}),n(w,{url:"https://baidu.com","category-name":"开题报告",class:"category-name"})]),t("div",Z,[n(f,{word:"颜色分类"}),n(j,{"color-item-list":s,class:"color-bar"})]),t("div",ee,[n(f,{word:"模板分类"}),(r(),a(i,null,p(c,l=>n(w,{url:"https://baidu.com","category-name":l,class:"category-name"},null,8,["category-name"])),64))]),t("div",te,[(r(),a(i,null,p(10,l=>n(L,{views:"1234","add-time":"2024-01-10",name:"小清新MBE风模板","image-src":y(T),url:"https://baidu.com"},null,8,["image-src"])),64))]),re,n(Q,{"page-count":50,"current-page":50})])]),ae,oe,se],64))}},le=h(ce,[["__scopeId","data-v-ff642a7c"]]);export{le as default};