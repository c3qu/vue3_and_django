import{_ as g,r as I,o,c as i,a as t,F as v,e as m,n as f,j as P,t as h,k as n,p as $,g as w,u as S,l as x,d as y}from"./index-AMKXZ7YW.js";const b={class:"article"},k={id:"play"},C={class:"img_ul"},q=["src"],L={class:"img_hd"},B=["onClick"],j=["src"],D={__name:"PictureSwitcher",props:{urlList:{type:Array,required:!0}},setup(e){const u=e,l=I(0),a=c=>{c===0&&(l.value-=1,l.value=l.value<0?0:l.value),c===1&&(l.value+=1,l.value=l.value>u.urlList.length-1?u.urlList.length-1:l.value)},_=c=>{l.value=c};return(c,d)=>(o(),i("div",b,[t("div",k,[t("ul",C,[(o(!0),i(v,null,m(e.urlList,(r,p)=>(o(),i("li",{style:f(l.value===p?"display:list-item":"display:none")},[t("img",{src:r,width:"668",alt:""},null,8,q)],4))),256))]),t("a",{href:"javascript:void(0)",onClick:d[0]||(d[0]=r=>a(0)),class:"prev_a change_a",title:"上一张"}),t("a",{href:"javascript:void(0)",onClick:d[1]||(d[1]=r=>a(1)),class:"next_a change_a",title:"下一张"})]),t("div",L,[t("ul",{class:"clearfix",style:f("margin-left: -"+126*(l.value-2)+"px")},[(o(!0),i(v,null,m(e.urlList,(r,p)=>(o(),i("li",{class:P(l.value===p?"on":""),onClick:lt=>_(p)},[t("img",{src:r,alt:""},null,8,j)],10,B))),256))],4)])]))}},N=g(D,[["__scopeId","data-v-19ab3b7c"]]),s=e=>($("data-v-f46a411a"),e=e(),w(),e),T={class:"infoss"},V={class:"clear"},z=s(()=>t("i",null,"分类：",-1)),F=s(()=>t("li",{class:"sh"},[t("i",null,"下载："),t("span",{id:"countnum"},"0"),n("次")],-1)),A=s(()=>t("li",null,[t("i",null,"比例："),n("宽屏16:9")],-1)),E={class:"sh"},R=s(()=>t("i",null,"页数：",-1)),X=s(()=>t("li",null,[t("i",null,"格式："),n("PPTX")],-1)),G=s(()=>t("li",{class:"sh"},[t("i",null,"大小："),n("未知")],-1)),H=s(()=>t("li",null,[t("i",null,"软件："),n("PowerPoint")],-1)),J=s(()=>t("li",{class:"sh"},[t("i",null,"效果："),n("动态")],-1)),K=s(()=>t("br",null,null,-1)),M=s(()=>t("br",null,null,-1)),O={class:"button"},Q=["href"],U={__name:"PptInfo",props:{name:{type:String,required:!0},category:{type:String,required:!0},pageCount:{type:String,required:!0},download_url:{type:String,required:!0}},setup(e){return(u,l)=>(o(),i("div",T,[t("h1",null,h(e.name),1),t("ul",V,[t("li",null,[z,n(h(e.category),1)]),F,A,t("li",E,[R,n(h(e.pageCount),1)]),X,G,H,J]),K,M,t("div",O,[t("a",{href:e.download_url,rel:"nofollow",class:"down-button",target:"_blank"},"点击下载",8,Q)])]))}},W=g(U,[["__scopeId","data-v-f46a411a"]]),Y=e=>($("data-v-d2c120f7"),e=e(),w(),e),Z=Y(()=>t("br",null,null,-1)),tt={class:"ppt-class-and-info"},et={__name:"Detail",setup(e){const l=S().query.id,a=I({});return x(l).then(_=>{a.value=_.data}),(_,c)=>(o(),i(v,null,[Z,t("div",tt,[y(N,{"url-list":[a.value.cover_img_url]},null,8,["url-list"]),y(W,{class:"ppt-info",download_url:a.value.download_url,"page-count":a.value.page_count,category:a.value.category,name:a.value.template_name},null,8,["download_url","page-count","category","name"])])],64))}},at=g(et,[["__scopeId","data-v-d2c120f7"]]);export{at as default};