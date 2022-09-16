import{r as _,o as u,c as i,a as t,b as a,w as o,F as h,d as m,g,h as n,f as l,t as r,e as p}from"./index.247ae06d.js";const b={class:"pt-2 padding-bottom-3"},v={class:"container"},f={class:"bread"},y={class:"bread-menu"},k={class:"bread-item"},x=l("Home"),w={class:"bread-item"},N=l("Products"),S=t("li",{class:"bread-item"},[t("div",{class:"bread-link","aria-current":"page"},"Wishlists")],-1),V=t("h4",null,"My Wishlist",-1),W={class:"row g-3 pt-2"},z={class:"card round h-100"},B={class:"body"},M={class:"cart-items"},P=["src"],j={class:"cart-details"},C={class:"font-size-16 font-weight-600 text-color-danger mt-2"},F=p('<div class="d-flex align-items-center justify-content-between pt-3"><div class="d-flex gap-2"><button type="button" class="button-accent-dark circle"><span class="material-icons-outlined">add_shopping_cart</span></button><button type="button" class="button-accent-danger circle" data-bs-toggle="modal" data-bs-target="#deleteModal"><span class="material-icons-outlined">delete</span></button></div></div>',1),L={__name:"Wishlist",setup(D){const d=_([]);return u(async()=>{try{const c=await fetch("https://fakestoreapi.com/products");d.value=await c.json()}catch{}}),(c,E)=>{const e=g("router-link");return n(),i("section",b,[t("div",v,[t("div",f,[t("ol",y,[t("li",k,[a(e,{to:"/",class:"bread-link"},{default:o(()=>[x]),_:1})]),t("li",w,[a(e,{to:"/products",class:"bread-link"},{default:o(()=>[N]),_:1})]),S]),V]),t("div",W,[(n(!0),i(h,null,m(d.value.slice(0,10),s=>(n(),i("div",{class:"col-xl-6 col-lg-6",key:s.id},[t("div",z,[t("div",B,[t("div",M,[a(e,{to:{name:"ProductSingle",params:{category:s.category,id:s.id}}},{default:o(()=>[t("img",{class:"cart-img round background-accent-medium",loading:"lazy",src:s.image,alt:""},null,8,P)]),_:2},1032,["to"]),t("div",j,[a(e,{to:{name:"ProductSingle",params:{category:s.category,id:s.id}},class:"font-size-16 font-weight-500 text-truncate-2"},{default:o(()=>[l(r(s.title),1)]),_:2},1032,["to"]),t("div",C,"\u20B1"+r(s.price),1),F])])])])]))),128))])])])}}};export{L as default};