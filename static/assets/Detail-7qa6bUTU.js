import{_ as m,r as w,o as i,c,a as t,F as f,e as y,n as I,l as x,t as g,m as o,p as S,g as P,u as b,q as k,d as $}from"./index-3qN4x6t0.js";const C={class:"article"},q={id:"play"},L={class:"img_ul"},E=["src","onError"],B={class:"img_hd"},D=["onClick"],N=["src","onError"],T={__name:"PictureSwitcher",props:{urlList:{type:Array,required:!0}},setup(e){const _=e,s=w(0),n=a=>{a===0&&(s.value-=1,s.value=s.value<0?0:s.value),a===1&&(s.value+=1,s.value=s.value>_.urlList.length-1?_.urlList.length-1:s.value)},d=a=>{s.value=a},v=a=>"/assets/cover_img/"+a.split(",")[0].split("/").slice(-1)[0];return(a,u)=>(i(),c("div",C,[t("div",q,[t("ul",L,[(i(!0),c(f,null,y(e.urlList,(r,p)=>(i(),c("li",{style:I(s.value===p?"display:list-item":"display:none")},[t("img",{src:v(r),width:"668",alt:"",onError:h=>h.target.src=r.split(",")[0]},null,40,E)],4))),256))]),t("a",{href:"javascript:void(0)",onClick:u[0]||(u[0]=r=>n(0)),class:"prev_a change_a",title:"上一张"}),t("a",{href:"javascript:void(0)",onClick:u[1]||(u[1]=r=>n(1)),class:"next_a change_a",title:"下一张"})]),t("div",B,[t("ul",{class:"clearfix",style:I("margin-left: -"+126*(s.value-2)+"px")},[(i(!0),c(f,null,y(e.urlList,(r,p)=>(i(),c("li",{class:x(s.value===p?"on":""),onClick:h=>d(p)},[t("img",{src:v(r),alt:"",onError:h=>h.target.src=r.split(",")[0]},null,40,N)],10,D))),256))],4)])]))}},V=m(T,[["__scopeId","data-v-b1dd77b3"]]),l=e=>(S("data-v-f46a411a"),e=e(),P(),e),j={class:"infoss"},z={class:"clear"},F=l(()=>t("i",null,"分类：",-1)),A=l(()=>t("li",{class:"sh"},[t("i",null,"下载："),t("span",{id:"countnum"},"0"),o("次")],-1)),R=l(()=>t("li",null,[t("i",null,"比例："),o("宽屏16:9")],-1)),X={class:"sh"},G=l(()=>t("i",null,"页数：",-1)),H=l(()=>t("li",null,[t("i",null,"格式："),o("PPTX")],-1)),J=l(()=>t("li",{class:"sh"},[t("i",null,"大小："),o("未知")],-1)),K=l(()=>t("li",null,[t("i",null,"软件："),o("PowerPoint")],-1)),M=l(()=>t("li",{class:"sh"},[t("i",null,"效果："),o("动态")],-1)),O=l(()=>t("br",null,null,-1)),Q=l(()=>t("br",null,null,-1)),U={class:"button"},W=["href"],Y={__name:"PptInfo",props:{name:{type:String,required:!0},category:{type:String,required:!0},pageCount:{type:String,required:!0},download_url:{type:String,required:!0}},setup(e){return(_,s)=>(i(),c("div",j,[t("h1",null,g(e.name),1),t("ul",z,[t("li",null,[F,o(g(e.category),1)]),A,R,t("li",X,[G,o(g(e.pageCount),1)]),H,J,K,M]),O,Q,t("div",U,[t("a",{href:e.download_url,rel:"nofollow",class:"down-button",target:"_blank"},"点击下载",8,W)])]))}},Z=m(Y,[["__scopeId","data-v-f46a411a"]]),tt=e=>(S("data-v-71f49f01"),e=e(),P(),e),et=tt(()=>t("br",null,null,-1)),st={class:"ppt-class-and-info"},lt={__name:"Detail",setup(e){const s=b().query.id,n=w({});return k(s).then(d=>{n.value=d.data}),(d,v)=>(i(),c(f,null,[et,t("div",st,[$(V,{"url-list":n.value.cover_img_url.split(",")},null,8,["url-list"]),$(Z,{class:"ppt-info",download_url:n.value.download_url,"page-count":n.value.page_count,category:n.value.category,name:n.value.name},null,8,["download_url","page-count","category","name"])])],64))}},ot=m(lt,[["__scopeId","data-v-71f49f01"]]);export{ot as default};