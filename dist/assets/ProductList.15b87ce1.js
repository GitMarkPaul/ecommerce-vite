import{_ as d}from"./StarRating.dbbbd5c9.js";import{g as _,h as g,r as m,o as r,c,i as h,b as e,a,w as l,d as u,t as o,F as f}from"./index.13dafbdc.js";const p={class:"card round hover-scale-1 h-100"},v=["src"],y=e("a",{href:"#",class:"button-light circle position-absolute top-0 right-0 my-2 mx-2"},[e("span",{class:"material-icons-outlined"},"favorite_border")],-1),w={class:"body"},x={class:"font-size-16 font-weight-600 text-color-danger mt-2 mb-2"},b={class:"star-rating"},k={class:"font-size-12 font-weight-500"},S={__name:"ProductList",setup(z){const i=_([]);return g(async()=>{try{const s=await fetch("https://fakestoreapi.com/products");i.value=await s.json()}catch{}}),(s,B)=>{const n=m("router-link");return r(!0),c(f,null,h(i.value,t=>(r(),c("div",{class:"col",key:t.id},[e("div",p,[a(n,{to:{name:"ProductSingle",params:{category:t.category,id:t.id}}},{default:l(()=>[e("img",{class:"card-product-img",loading:"lazy",src:t.image,alt:""},null,8,v)]),_:2},1032,["to"]),y,e("div",w,[a(n,{to:{name:"ProductSingle",params:{category:t.category,id:t.id}},class:"font-size-14 font-weight-500 text-truncate-2"},{default:l(()=>[u(o(t.title),1)]),_:2},1032,["to"]),e("div",x,"\u20B1"+o(t.price),1),e("div",b,[a(d,{ratings:t.rating.rate},null,8,["ratings"]),e("div",k,o(t.rating.count),1)])])])]))),128)}}};export{S as default};
