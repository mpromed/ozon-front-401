import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import{r as d,f as b,o,c as i,a as $,F as p,i as m,j as _,b as z,k as S}from"./index-9866a5d8.js";const I={class:"answesOnImage-wrapper"},k=["src"],A=["onClick"],D=["onClick"],L={__name:"ContentAnswersOnImage",props:["componentData","testStyle"],emits:["switchAnswer"],setup(u,{emit:w}){const r=u,h=e=>{w("switchAnswer",e)},n=(e,s)=>e/105*s,t=d({width:0,height:0}),v=d(null),l=d(null),x=(e,s)=>({position:"absolute",top:`${e.y}%`,left:`${e.x}%`,transform:"translate(-50%, -50%)",width:`${n(e.size,t.value.width)}px`,height:`${n(e.size,t.value.width)}px`,background:s?"green":e.color,hover:{width:`${n(e.size,t.value.width)*1.05}px`,height:`${n(e.size,t.value.width)*1.05}px`}}),y=e=>({position:"absolute",top:`${e.y}%`,left:`${e.x}%`,transform:"translate(-50%, -50%)",width:`${n(e.hitboxSize,t.value.width)}px`,height:`${n(e.hitboxSize,t.value.width)}px`,backgroundColor:`${e.color}55`,borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",boxSizing:"border-box",cursor:"pointer"}),g=()=>{S(()=>{if(l.value&&l.value.complete){const{width:e,height:s}=l.value.getBoundingClientRect();t.value.width=e,t.value.height=s}else console.log("Изображение еще не загружено или элемент не найден")})};return b(()=>{g()}),(e,s)=>(o(),i("div",I,[u.componentData.isAnswersOnImage?(o(),i("div",{key:0,class:"image-container",ref_key:"imageContainer",ref:v},[$("img",{src:r.componentData.imagesData.imagesList[0].imageURL,class:"content-image",ref_key:"imageElement",ref:l,onLoad:g},null,40,k),(o(!0),i(p,null,m(r.componentData.answersList,(c,a)=>(o(),i("div",{class:"marker",key:a,style:_(x(c.style,c.isChecked)),onClick:f=>h(a)},null,12,A))),128)),(o(!0),i(p,null,m(r.componentData.answersList,(c,a)=>(o(),i("div",{class:"hitbox",key:a,style:_(y(c.style)),onClick:f=>h(a)},null,12,D))),128))],512)):z("",!0)]))}},E=C(L,[["__scopeId","data-v-1656d532"]]);export{E as default};
