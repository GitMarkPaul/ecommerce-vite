import{e as v,f as g,c as n,a as s,b as i,w as a,F as _,g as u,h as l,r as m,o as c,d as o,t as h}from"./index.5943e0b5.js";const p={class:"pt-2 padding-bottom-3"},f={class:"container"},b={class:"bread"},y={class:"bread-menu"},k={class:"bread-item"},w=o("Home"),z={class:"bread-item"},x=o("Cart"),P={class:"bread-item"},S=o("Shipping"),C=s("li",{class:"bread-item"},[s("div",{class:"bread-link","aria-current":"page"},"Payment")],-1),B=s("h4",null,"Summary Order",-1),D={class:"row g-4 pt-2"},V={class:"col-xl-7 col-lg-7"},M=l('<div class="card mb-3"><div class="body"><div class="font-size-18 font-weight-600">Billing address</div><div class="d-grid gap-2 mt-3"><div class="d-flex align-items-center gap-3"><div class="initial-circle-sm background-accent-success p-2"><span class="material-icons-outlined">person</span></div><div class="font-size-14 font-weight-500">Juan Dela Cruz</div></div><div class="d-flex align-items-center gap-3"><div class="initial-circle-sm background-accent-success p-2"><span class="material-icons-outlined">location_on</span></div><div class="font-size-14 font-weight-500">Blk 20 Lot 22-24 St. Kolbe Brgy. Saguin San Fernando City, Pampanga</div></div><div class="d-flex align-items-center gap-3"><div class="initial-circle-sm background-accent-success p-2"><span class="material-icons-outlined">phone</span></div><div class="font-size-14 font-weight-500">09876543211</div></div></div></div></div>',1),N={class:"card"},F={class:"body"},j={class:"row g-3"},A={class:"checkout-items"},H=["src"],L={class:"checkout-details"},O=s("div",{class:"font-size-13 mt-2"},"Black Accent / 23",-1),T={class:"d-flex align-items-center justify-content-between mt-2"},E={class:"font-size-14 font-weight-500"},J=s("div",{class:"badge background-accent-primary round font-size-12"},"Qty: 3",-1),K={class:"col-xl-5 col-lg-5"},Q=l('<div class="card mb-3"><div class="body"><div class="font-size-18 font-weight-600 mb-2">Payment Method</div><p>Complete your purchase item by selecting your payment type order.</p><div class="d-grid gap-2"><div class="border background-color-light py-2 px-2 rounded-4 hover-scale-1 d-flex align-items-center gap-3 position-relative"><div class="initial-circle-md round"><span class="material-icons-outlined">local_shipping</span></div><div><div class="font-size-16 font-weight-500">Cash on Delivery (default)</div><div class="font-size-13">Default shipping method</div></div><div class="initial-circle-xs background-color-success position-absolute top-0 right-0 mt-2 mx-2"><span class="material-icons-outlined">check</span></div></div><div class="border background-color-light py-2 px-2 rounded-4 hover-scale-1 d-flex align-items-center gap-3" data-bs-toggle="modal" data-bs-target="#debitCreditModal"><div class="initial-circle-md round"><span class="material-icons-outlined">credit_card</span></div><div><div class="font-size-16 font-weight-500">Debit/Credit Card</div><div class="font-size-13">Pay with your most trusted debit/credit card.</div></div></div><div class="border background-color-light py-2 px-2 rounded-4 hover-scale-1 d-flex align-items-center gap-3"><div class="initial-circle-md round"><i class="bx bxl-paypal"></i></div><div><div class="font-size-16 font-weight-500">Paypal</div><div class="font-size-13">Pay with the world&#39;s most popular payment method.</div></div></div><div class="border background-color-light py-2 px-2 rounded-4 hover-scale-1 d-flex align-items-center gap-3" data-bs-toggle="modal" data-bs-target="#audaPayModal"><div class="initial-circle-md round"><span class="material-icons-outlined">token</span></div><div><div class="font-size-16 font-weight-500">Auda Pay</div><div class="font-size-13">Pay using your auda wallet tokens</div></div></div></div></div></div>',1),R={class:"card background-accent-medium"},Y={class:"body"},q=l('<div class="font-size-18 font-weight-600">Your order</div><table class="table table-borderless mt-3 mb-3"><thead><tr><th class="font-size-14 font-weight-500">Subtotal</th><th class="font-size-14 font-weight-500 float-end">\u20B13,499</th></tr><tr><th class="font-size-14 font-weight-500">Shipping fee</th><th class="font-size-14 font-weight-500 float-end">\u20B155</th></tr><tr><th class="font-size-14 font-weight-500">Voucher discount</th><th class="font-size-14 font-weight-500 float-end">0.00</th></tr><tr><th class="font-size-14 font-weight-500">Total</th><th class="font-size-20 font-weight-500 float-end">\u20B11,409</th></tr></thead></table><div class="font-size-16">*Please check your order carefully before placing an order.</div>',3),G={class:"d-grid gap-2 mt-3"},I=o("Place order "),U=s("strong",null,"\u20B11,409",-1),W=o("Return to shipping"),ss={__name:"Payment",setup(X){const r=v([]);return g(async()=>{try{const d=await fetch("https://fakestoreapi.com/products");r.value=await d.json()}catch{}}),(d,Z)=>{const e=m("router-link");return c(),n("section",p,[s("div",f,[s("div",b,[s("ol",y,[s("li",k,[i(e,{to:{name:"Home"},class:"bread-link"},{default:a(()=>[w]),_:1})]),s("li",z,[i(e,{to:{name:"Cart"},class:"bread-link"},{default:a(()=>[x]),_:1})]),s("li",P,[i(e,{to:{name:"Shipping"},class:"bread-link"},{default:a(()=>[S]),_:1})]),C]),B]),s("div",D,[s("div",V,[M,s("div",N,[s("div",F,[s("div",j,[(c(!0),n(_,null,u(r.value.slice(0,3),t=>(c(),n("div",{class:"col-xl-12",key:t.id},[s("div",A,[i(e,{to:{name:"ProductSingle",params:{category:t.category,id:t.id}}},{default:a(()=>[s("img",{class:"checkout-img round background-accent-medium",loading:"lazy",src:t.image,alt:""},null,8,H)]),_:2},1032,["to"]),s("div",L,[i(e,{to:{name:"ProductSingle",params:{category:t.category,id:t.id}},class:"font-size-16 font-weight-500 text-truncate-2"},{default:a(()=>[o(h(t.title),1)]),_:2},1032,["to"]),O,s("div",T,[s("div",E,"\u20B1"+h(t.price),1),J])])])]))),128))])])])]),s("div",K,[Q,s("div",R,[s("div",Y,[q,s("div",G,[i(e,{to:{name:"OrderDetails"},class:"button-dark md round block"},{default:a(()=>[I,U]),_:1}),i(e,{to:{name:"Shipping"},class:"button-outline-dark md round block"},{default:a(()=>[W]),_:1})])])])])])])])}}};export{ss as default};