(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{151:function(n,e,t){"use strict";t.r(e);var a,i,o,r,c,l,p,m,d,u,s,h,g,f=t(0),b=t.n(f),E=t(17),x=t.n(E),w=(t(78),t(11)),v=t(18),y=t(13),j=t(26),k=t(27),O=t(152),z=t(6),S=t(7),C=S.a.header(a||(a=Object(z.a)(["\n  background-color: ",";\n  height: ",";\n  width: 100%;\n  position: relative;\n  text-align: center;\n  border-bottom: ",";\n  .menu-transition-enter {\n    opacity: 0;\n  }\n  .menu-transition-enter-active {\n    opacity: 0.8;\n    transition: opacity 1000ms;\n  }\n  .menu-transition-exit {\n    opacity: 0.8;\n  }\n  .menu-transition-exit-active {\n    opacity: 0;\n    transition: opacity 1000ms;\n  }\n"])),(function(n){return n.isHomePage?"transparent":"white"}),(function(n){return n.isHomePage?"60px":"120px"}),(function(n){return n.isHomePage?"none":"1px solid #FFDAB9"})),F=S.a.button(i||(i=Object(z.a)(["\n  display: ",";\n  color: ",";\n  position: absolute;\n  background-color: transparent;\n  border: none;\n  right: 20px;\n  top: 20px;\n  &:focus {\n    outline: none;\n    background: transparent;\n  }\n"])),(function(n){return n.viewerIsOpen?"none":"block"}),(function(n){return n.open?"transparent":"black"})),P=S.a.button(o||(o=Object(z.a)(["\n  display: ",";\n  z-index: 11;\n  color: ",";\n  position: absolute;\n  background-color: transparent;\n  border: none;\n  right: 20px;\n  top: 20px;\n  &:focus {\n    outline: none;\n    background: transparent;\n  }\n"])),(function(n){return n.viewerIsOpen?"none":"block"}),(function(n){return n.open?"black":"transparent"})),D=S.a.div(r||(r=Object(z.a)(["\n  z-index: 10;\n  visibility: ",";\n  opacity: 0.7;\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  display: flex;\n  flex-direction: column;\n  width: 250px;\n  height: ","px;\n  background: ",";\n  padding: 20px;\n  justify-content: center;\n"])),(function(n){return n.open?"visible":"hidden"}),(function(n){return n.height}),(function(n){return n.isHomePage?"white":"#FFDAB9"})),H=S.a.div(c||(c=Object(z.a)(["\n  display: inline-block;\n  color: #5e5b56;\n  margin: 20px 20px;\n  font-weight: ",";\n  border-bottom: ",";\n  &:hover {\n    border-bottom: 2px solid #5e5b56;\n    font-weight: bold;\n    cursor: pointer;\n  }\n"])),(function(n){return n.active&&"bold"}),(function(n){return n.active&&"2px solid #5e5b56"})),I=S.a.div(l||(l=Object(z.a)(["\n  font-size: 3rem;\n  padding-top: 2rem;\n  font-weight: 200;\n  @media(min-width: 768px) {\n    font-size: 5rem;\n    padding-top: 0;\n  }\n"]))),A=function(n){var e=n.height,t=n.viewerIsOpen,a=Object(f.useState)(!1),i=Object(w.a)(a,2),o=i[0],r=i[1],c=Object(f.useState)(window.location.pathname),l=Object(w.a)(c,2),p=l[0],m=(l[1],"/"===window.location.pathname),d=function(){r(!o)};return b.a.createElement(C,{id:"header-container",isHomePage:m},!m&&b.a.createElement(I,null,"m + e"),b.a.createElement(O.a,{in:o,timeout:400,classNames:"menu-transition",unmountOnExit:!0,appear:!0,onEnter:function(){return r(!0)},onExited:function(){return r(!1)}},b.a.createElement(D,{id:"menu",open:o,height:e,isHomePage:m},b.a.createElement(v.b,{to:"/rsvp",onClick:function(){return d()}},b.a.createElement(H,{active:"/rsvp"===p},"rsvp")),b.a.createElement(v.b,{to:"/info",onClick:function(){return d()}},b.a.createElement(H,{active:"/info"===p},"info")),b.a.createElement(v.b,{to:"/photos",onClick:function(){return d()}},b.a.createElement(H,{active:"/photos"===p},"photos")))),b.a.createElement(F,{onClick:function(){return d()},open:o,viewerIsOpen:t},b.a.createElement(j.a,{icon:k.a,size:"2x"})),b.a.createElement(P,{onClick:function(){return d()},open:o,viewerIsOpen:t},b.a.createElement(j.a,{icon:k.b,size:"2x"})))},B=t.p+"static/media/elissa+matthew-engagement-36_websize.441bff5f.jpg",T=t.p+"static/media/elissa+matthew-engagement-131_websize.eb3d925e.jpg",_=t.p+"static/media/elissa+matthew-engagement-51_websize.d92402cc.jpg",L=t.p+"static/media/elissa+matthew-engagement-51_websize_cropped.07545549.jpg",N=S.a.div(p||(p=Object(z.a)(["\n  background: white;\n  height: 100vh;\n  padding: 0 30px;\n  #ipad-image {\n    max-width: 100%;\n    margin-top: 2rem;\n    @media(min-width: 1024px) {\n      display: none;\n    }\n  }\n"]))),R=S.a.div(m||(m=Object(z.a)(["\n  display: flex;\n  text-align: left;\n  padding-top: 30px;\n  > div > h2 {\n    margin: 0;\n    font-size: 3rem;\n    font-weight: 100;\n  }\n  > div > p {\n    font-weight: 200;\n    margin: 0.5rem 0;\n    > span {\n      font-weight: 400;\n    }\n  }\n  @media(min-width: 1024px) {\n    text-align: ",";\n  }\n"])),(function(n){return n.textAlign})),M=S.a.div(d||(d=Object(z.a)(["\n  width: 80%;\n  padding: 0 20px;\n  @media(min-width: 1024px) {\n    width: 50%;\n  }\n"]))),V=S.a.ul(u||(u=Object(z.a)(["\n  margin-top: 0.5rem;\n  padding-left: 20px;\n"]))),J=S.a.li(s||(s=Object(z.a)(["\n  font-size: 0.9rem;\n  font-weight: 200;\n  >a{\n    text-decoration: none;\n    font-weight: 400;\n    color: #5e5b56;\n    &:hover {\n      color: #FFDAB9;\n    }\n  }\n"]))),K=S.a.div(h||(h=Object(z.a)(["\n  width: 50%;\n  display: none;\n  > img {\n    height: 300px;\n  }\n  @media(min-width: 1024px) {\n    display: block;\n  }\n"]))),W=function(){var n=window.innerHeight;return b.a.createElement(b.a.Fragment,null,b.a.createElement(A,{height:n}),b.a.createElement(N,{id:"info-container"},b.a.createElement(R,{textAlign:"left"},b.a.createElement(M,null,b.a.createElement("h2",null,"the wedding"),b.a.createElement("p",null,b.a.createElement("span",null,"date: "),"October 1, 2021"),b.a.createElement("p",null,b.a.createElement("span",null,"location: "),"Stanley Park Pavilion, 610 Pipeline Rd"),b.a.createElement("p",null,b.a.createElement("span",null,"start time: "),"4pm"),b.a.createElement("p",null,b.a.createElement("span",null,"directions: ")),b.a.createElement(V,null,b.a.createElement(J,null,"From Georgia Street, enter Stanley Park and continue straight through the round-about. Take your first right after the Stanley Park Pavilion sign with the large red rose, which will swing left and bring you to the Pavilion."),b.a.createElement(J,null,"From English Bay, enter Stanley Park via Beach Avenue. Turn right onto North Lagoon Drive (at Second Beach). Once past the lagoon, take a left at the stop sign and continue left through the round-about and take your first right after the \u201cStanley Park Pavilion\u201d sign with the large red rose, which will swing left and bring you to the Pavilion."))),b.a.createElement(K,{id:"image-1"},b.a.createElement("img",{src:B,alt:"elissa + matthew wedding"}))),b.a.createElement(R,{textAlign:"right"},b.a.createElement(K,{id:"image-2"},b.a.createElement("img",{src:T,alt:"elissa + matthew wedding"})),b.a.createElement(M,null,b.a.createElement("h2",null,"where to stay"),b.a.createElement("p",null,"info to come"))),b.a.createElement(R,{textAlign:"left"},b.a.createElement(M,null,b.a.createElement("h2",null,"what to eat"),b.a.createElement("p",null,b.a.createElement("span",null,"ramen")),b.a.createElement(V,null,b.a.createElement(J,null,b.a.createElement("a",{href:"https://marutama.ca/",rel:"noopener noreferrer",target:"_blank"},"Marutama")," - Matthew's #1 choice."),b.a.createElement(J,null,b.a.createElement("a",{href:"https://ramendanbo.com/",rel:"noopener noreferrer",target:"_blank"},"Danbo")," - super popular ramen joint. Expect to wait in line!")),b.a.createElement("p",null,b.a.createElement("span",null,"sushi")),b.a.createElement(V,null,b.a.createElement(J,null,b.a.createElement("a",{href:"https://www.kishimotorestaurant.com/",rel:"noopener noreferrer",target:"_blank"},"Kishimoto")," - pro tip: make a reservation well in advance or prepare to wait in line!"),b.a.createElement(J,null,b.a.createElement("a",{href:"https://minamirestaurant.com/",rel:"noopener noreferrer",target:"_blank"},"Minami")," - Miku's sister restaurant with a more relaxed vibe. If you can, grab a table on their beautiful outdoor patio.")),b.a.createElement("p",null,b.a.createElement("span",null,"fushion")),b.a.createElement(V,null,b.a.createElement(J,null,b.a.createElement("a",{href:"http://www.kissatanto.com/",rel:"noopener noreferrer",target:"_blank"},"Kissa Tanto")," - one of Elissa's favourite spots serving Japanese/Italian fusion"),b.a.createElement(J,null,b.a.createElement("a",{href:"https://www.ancoradining.com/",rel:"noopener noreferrer",target:"_blank"},"Ancora")," - one of our go-to fine dining spots serving Japanese/Peruvian cuisine."))),b.a.createElement(K,{id:"image-3"},b.a.createElement("img",{src:_,alt:"elissa + matthew wedding"}))),b.a.createElement("img",{src:L,alt:"elissa + matthew wedding",id:"ipad-image"})))},Y=t(23),G=t(68),q=t(36),Q=S.a.div(g||(g=Object(z.a)(["\n  background: white;\n  height: 100vh;\n  z-index: 20;\n"]))),U=[{src:t.p+"static/media/photo-1.8eed14d2.jpg",width:4,height:6},{src:t.p+"static/media/photo-2.b0519a9a.jpg",width:8.81,height:5.88},{src:t.p+"static/media/photo-3.a9d9e1b9.jpg",width:8.81,height:5.88},{src:t.p+"static/media/photo-4.9898c531.jpg",width:4,height:6},{src:t.p+"static/media/photo-5.4f2d3f16.jpg",width:4,height:6},{src:t.p+"static/media/photo-6.5cc3ed94.jpg",width:8.81,height:5.88},{src:t.p+"static/media/photo-7.7adad007.jpg",width:4,height:6},{src:t.p+"static/media/photo-8.61ca2990.jpg",width:8.81,height:5.88},{src:t.p+"static/media/photo-9.0360e3bd.jpg",width:4,height:6},{src:t.p+"static/media/photo-10.52d6299c.jpg",width:4,height:6},{src:t.p+"static/media/photo-11.e1c6ee8a.jpg",width:8.81,height:5.88},{src:t.p+"static/media/photo-12.c588b882.jpg",width:4,height:6}],Z=function(){var n=window.innerHeight,e=Object(f.useState)(0),t=Object(w.a)(e,2),a=t[0],i=t[1],o=Object(f.useState)(!1),r=Object(w.a)(o,2),c=r[0],l=r[1],p=Object(f.useCallback)((function(n,e){e.photo;var t=e.index;i(t),l(!0)}),[]);return b.a.createElement(Q,{id:"photo-container"},b.a.createElement(A,{height:n,viewerIsOpen:c}),b.a.createElement(G.a,{photos:U,direction:"column",onClick:p}),b.a.createElement(q.b,null,c?b.a.createElement(q.a,{onClose:function(){i(0),l(!1)}},b.a.createElement(q.c,{currentIndex:a,views:U.map((function(n){return Object(Y.a)(Object(Y.a)({},n),{},{srcset:n.srcSet,caption:n.title})}))})):null))},X=t(50);t(149),t(150);X.a.initializeApp({apiKey:"AIzaSyBLIfDzYvdKzoQZh1oaGqVBhHEkDEx0N8M",authDomain:"wedding-website-2-d6b26.firebaseapp.com",databaseURL:"https://wedding-website-2-d6b26.firebaseio.com",projectId:"wedding-website-2-d6b26",storageBucket:"wedding-website-2-d6b26.appspot.com",messagingSenderId:"1082860186504",appId:"1:1082860186504:web:d21d927374c8f0d952a83d"});var $,nn,en,tn,an,on,rn,cn,ln,pn,mn,dn,un,sn,hn,gn,fn,bn,En,xn,wn,vn,yn,jn,kn,On,zn,Sn,Cn,Fn,Pn=X.a,Dn=S.a.div($||($=Object(z.a)(["\n  display: ",";\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.8);\n  >div>h2 {\n    letter-spacing: 2px;\n    font-weight: 300;\n    margin-bottom: 3rem;\n  }\n"])),(function(n){return"none"===n.display?"none":"flex"})),Hn=S.a.div(nn||(nn=Object(z.a)(["\n  height: 175px;\n  width: 100%;\n  background-color: #EFEEEC;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  > h2 {\n    padding-top: 20px;\n    font-size: 2rem;\n    margin-bottom: 0 !important;\n  }\n  > p {\n    font-weight: 200;\n  }\n  @media(min-width: 768px) {\n    height: 200px;\n  }\n  @media(min-width: 1024px) {\n    height: 300px;\n  }\n"]))),In=S.a.div(en||(en=Object(z.a)(["\n  display: ",";\n  padding: 10px;\n  align-items: center;\n  background-color: white;\n  margin: 0 auto;\n  padding: 30px 0px;\n  width: 80%;\n  margin: 0;\n  @media(min-width: 768px) {\n    position: absolute;\n    padding: 60px 80px;\n    width: 60%;\n    top: 150px;\n  }\n  @media(min-width: 1024px) {\n    top: 175px;\n  }\n"])),(function(n){return"none"===n.display?"none":"block"})),An=S.a.form(tn||(tn=Object(z.a)(["\n  >div>input {\n    background-color: transparent;\n    font: inherit;\n    border-style: none;\n    border-bottom: 1px solid #EFEEEC;\n    &:focus {\n      outline: none;\n    }\n    font-size: 1.5rem;\n    font-weight: 200;\n    @media(min-width: 768px) {\n      font-size: 2.5rem\n    }\n  }\n  >button {\n    position: relative;\n    height: 40px;\n    width: auto;\n    font-size: 0.7rem;\n    background-color: #444444;\n    color: #fff; \n    text-transform: uppercase;\n    margin: 25px auto;\n    letter-spacing: 2px;\n    padding: 10px;\n    border: 1px solid #444444;\n    transition: all 0.4s ease; \n    &:hover {\n      cursor: pointer;\n      color: #444444;\n      background-color: #fff;\n    }\n  }\n"]))),Bn=function(n){var e=n.handleNameChange,t=n.name,a=n.onSubmit;return b.a.createElement(An,null,b.a.createElement("div",null,b.a.createElement("input",{placeholder:"enter guest name",name:t,onChange:e,type:"text"})),b.a.createElement("button",{onClick:function(n){a(n,t)}},"find your invite"))},Tn=function(n){var e=n.handleNameChange,t=n.onCheckSubmit,a=n.name,i=n.authFormDisplay;return b.a.createElement(Dn,{id:"auth-form-container",display:i},b.a.createElement(Hn,null,b.a.createElement("h2",null,"RSVP"),b.a.createElement("p",null,"kindly reply by august 1, 2021.")),b.a.createElement(In,{id:"auth-form-inner-container",display:i},b.a.createElement(Bn,{handleNameChange:e,onSubmit:t,name:a})))},_n=S.a.div(an||(an=Object(z.a)(["\n  display: ",";\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.8);\n  >div>h2 {\n    letter-spacing: 2px;\n    font-weight: 300;\n    margin-bottom: 3rem;\n  }\n"])),(function(n){return"none"===n.display?"none":"flex"})),Ln=S.a.div(on||(on=Object(z.a)(["\n  display: ",";\n  height: 175px;\n  width: 100%;\n  background-color: #EFEEEC;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  > h2 {\n    padding-top: 20px;\n    font-size: 2rem;\n    margin-bottom: 0 !important;\n  }\n  > p {\n    font-weight: 200;\n  }\n  @media(min-width: 768px) {\n    height: 200px;\n  }\n  @media(min-width: 1024px) {\n    height: 300px;\n  }\n"])),(function(n){return"none"===n.display?"none":"flex"})),Nn=S.a.div(rn||(rn=Object(z.a)(["\n  display: ",";\n  padding: 10px;\n  align-items: center;\n  background-color: white;\n  margin: 0 auto;\n  padding: 30px 0px;\n  width: 80%;\n  margin: 0;\n  @media(min-width: 768px) {\n    position: absolute;\n    padding: 60px 80px;\n    width: 60%;\n    top: 150px;\n  }\n  @media(min-width: 1024px) {\n    top: 175px;\n  }\n"])),(function(n){return"flex"===n.display?"block":"none"})),Rn=S.a.form(cn||(cn=Object(z.a)(["\n  >div>input {\n    background-color: transparent;\n    font: inherit;\n    border-style: none;\n    border-bottom: 1px solid #EFEEEC;\n    &:focus {\n      outline: none;\n    }\n    font-size: 1.5rem;\n    font-weight: 200;\n    @media(min-width: 768px) {\n      font-size: 2.5rem\n    }\n  }\n  >button {\n    position: relative;\n    height: 40px;\n    width: auto;\n    font-size: 0.7rem;\n    background-color: #444444;\n    color: #fff; \n    text-transform: uppercase;\n    margin-bottom: 25px;\n    letter-spacing: 2px;\n    padding: 10px;\n    border: 1px solid #444444;\n    transition: all 0.4s ease; \n    &:hover {\n      cursor: pointer;\n      color: #444444;\n      background-color: #fff;\n    }\n  }\n  #attending {\n    margin-top: 4rem;\n    font-size: 1rem;\n    font-weight: 300;\n  }\n"]))),Mn=S.a.div(ln||(ln=Object(z.a)(["\n  margin: 20px 0;\n  font-size: 1.5rem;\n  font-weight: 200;\n  > select {\n    display: block;\n    margin-top: 1rem;\n    font-family: inherit;\n    font-size: 1.5rem;\n    font-weight: 200;\n    width: 100%;\n    border: none;\n    border-bottom: 1px solid #EFEEEC;\n    &:focus {\n      outline: none;\n    }\n  }\n"]))),Vn=function(n){var e=n.formOneDisplay,t=n.name,a=Object(y.f)(),i=Object(f.useState)(!0),o=Object(w.a)(i,2),r=o[0],c=o[1],l=Object(f.useState)(""),p=Object(w.a)(l,2),m=p[0],d=p[1],u=Object(f.useState)([]),s=Object(w.a)(u,2),h=s[0],g=s[1],E=h.map((function(n){return n.name}));return Object(f.useEffect)((function(){Pn.firestore().collection("guests").onSnapshot((function(n){var e=n.docs.map((function(n){return Object(Y.a)({id:n.id},n.data())}));g(e)}))}),[]),b.a.createElement(_n,{id:"form-1-container",display:e},b.a.createElement(Ln,{display:e},b.a.createElement("h2",null,"RSVP"),b.a.createElement("p",null,"kindly reply by august 1, 2021.")),b.a.createElement(Nn,{id:"inner-container",display:e},b.a.createElement(Rn,{onSubmit:function(n){n.preventDefault(),E.includes(t)?a.push("/error"):Pn.firestore().collection("guests").add({attending:r,name:t,plusOne:m}).then((function(){a.push("/thank-you")}))}},b.a.createElement(Mn,null,b.a.createElement("input",{type:"text",value:t})),b.a.createElement(Mn,null,b.a.createElement("input",{type:"text",value:m,onChange:function(n){return d(n.currentTarget.value)},placeholder:"plus one's name"})),b.a.createElement(Mn,{id:"attending"},b.a.createElement("label",null,"Will you be attending?"),b.a.createElement("select",{value:r,onChange:function(n){return c(n.currentTarget.value)}},b.a.createElement("option",{value:!0},"Yes"),b.a.createElement("option",{value:!1},"No"))),b.a.createElement("button",null,"RSVP!"))))},Jn=S.a.div(pn||(pn=Object(z.a)(["\n  display: ",";\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.8);\n  >div>h2 {\n    letter-spacing: 2px;\n    font-weight: 300;\n    margin-bottom: 3rem;\n  }\n"])),(function(n){return"none"===n.display?"none":"flex"})),Kn=S.a.div(mn||(mn=Object(z.a)(["\n  display: ",";\n  height: 175px;\n  width: 100%;\n  background-color: #EFEEEC;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  > h2 {\n    padding-top: 20px;\n    font-size: 2rem;\n    margin-bottom: 0 !important;\n  }\n  > p {\n    font-weight: 200;\n  }\n  @media(min-width: 768px) {\n    height: 200px;\n  }\n  @media(min-width: 1024px) {\n    height: 300px;\n  }\n"])),(function(n){return"none"===n.display?"none":"flex"})),Wn=S.a.div(dn||(dn=Object(z.a)(["\n  display: ",";\n  padding: 10px;\n  align-items: center;\n  background-color: white;\n  margin: 0 auto;\n  padding: 30px 0px;\n  width: 80%;\n  margin: 0;\n  @media(min-width: 768px) {\n    position: absolute;\n    padding: 60px 80px;\n    width: 60%;\n    top: 150px;\n  }\n  @media(min-width: 1024px) {\n    top: 175px;\n  }\n"])),(function(n){return"flex"===n.display?"block":"none"})),Yn=S.a.form(un||(un=Object(z.a)(["\n  >div>input {\n    background-color: transparent;\n    font: inherit;\n    border-style: none;\n    border-bottom: 1px solid #EFEEEC;\n    &:focus {\n      outline: none;\n    }\n    font-size: 1.5rem;\n    font-weight: 200;\n    @media(min-width: 768px) {\n      font-size: 2.5rem\n    }\n  }\n  >button {\n    position: relative;\n    height: 40px;\n    width: auto;\n    font-size: 0.7rem;\n    background-color: #444444;\n    color: #fff; \n    text-transform: uppercase;\n    margin-bottom: 25px;\n    letter-spacing: 2px;\n    padding: 10px;\n    border: 1px solid #444444;\n    transition: all 0.4s ease; \n    &:hover {\n      cursor: pointer;\n      color: #444444;\n      background-color: #fff;\n    }\n  }\n  #attending {\n    margin-top: 4rem;\n    font-size: 1rem;\n    font-weight: 300;\n  }\n"]))),Gn=S.a.div(sn||(sn=Object(z.a)(["\n  margin: 20px 0;\n  font-size: 1.5rem;\n  font-weight: 200;\n  > select {\n    display: block;\n    margin-top: 1rem;\n    font-family: inherit;\n    font-size: 1.5rem;\n    font-weight: 200;\n    width: 100%;\n    border: none;\n    border-bottom: 1px solid #EFEEEC;\n    &:focus {\n      outline: none;\n    }\n  }\n"]))),qn=function(n){var e=n.formTwoDisplay,t=n.name,a=Object(y.f)(),i=Object(f.useState)(!0),o=Object(w.a)(i,2),r=o[0],c=o[1],l=Object(f.useState)([]),p=Object(w.a)(l,2),m=p[0],d=p[1],u=m.map((function(n){return n.name}));return Object(f.useEffect)((function(){Pn.firestore().collection("guests").onSnapshot((function(n){var e=n.docs.map((function(n){return Object(Y.a)({id:n.id},n.data())}));d(e)}))}),[]),b.a.createElement(Jn,{id:"form-2-container",display:e},b.a.createElement(Kn,{display:e},b.a.createElement("h2",null,"RSVP"),b.a.createElement("p",null,"kindly reply by august 1, 2021.")),b.a.createElement(Wn,{id:"form-2inner-container",display:e},b.a.createElement(Yn,{onSubmit:function(n){n.preventDefault(),u.includes(t)?a.push("/error"):Pn.firestore().collection("guests").add({attending:r,name:t}).then((function(){a.push("/thank-you")}))}},b.a.createElement(Gn,null,b.a.createElement("input",{type:"text",value:t})),b.a.createElement(Gn,{id:"form-2-attending"},b.a.createElement("label",null,"Will you be attending?"),b.a.createElement("select",{value:r,onChange:function(n){return c(n.currentTarget.value)}},b.a.createElement("option",{value:!0},"Yes"),b.a.createElement("option",{value:!1},"No"))),b.a.createElement("button",null,"RSVP!"))))},Qn=S.a.div(hn||(hn=Object(z.a)(["\n  background: white;\n  height: 100vh;\n  padding: 0;\n  position: relative;\n"]))),Un=function(){var n=Object(y.f)(),e=Object(f.useState)([]),t=Object(w.a)(e,2),a=t[0],i=t[1],o=Object(f.useState)([]),r=Object(w.a)(o,2),c=r[0],l=r[1],p=Object(f.useState)(""),m=Object(w.a)(p,2),d=m[0],u=m[1],s=Object(f.useState)(""),h=Object(w.a)(s,2),g=h[0],E=h[1],x=Object(f.useState)("none"),v=Object(w.a)(x,2),j=v[0],k=v[1],O=Object(f.useState)("none"),z=Object(w.a)(O,2),S=z[0],C=z[1],F=window.innerHeight;Object(f.useEffect)((function(){Pn.firestore().collection("plusOne").onSnapshot((function(n){var e=n.docs.map((function(n){return Object(Y.a)({id:n.id},n.data())}));i(e)}))}),[]),Object(f.useEffect)((function(){Pn.firestore().collection("noPlusOne").onSnapshot((function(n){var e=n.docs.map((function(n){return Object(Y.a)({id:n.id},n.data())}));l(e)}))}),[]);var P=a.map((function(n){return n.name})),D=c.map((function(n){return n.name}));return b.a.createElement(b.a.Fragment,null,b.a.createElement(A,{height:F}),b.a.createElement(Qn,{id:"rsvp-container"},b.a.createElement(Tn,{id:"check-form",onCheckSubmit:function(e,t){e.preventDefault();var a=P.filter((function(n){return n.toLowerCase()===t.toLowerCase()})),i=D.filter((function(n){return n.toLowerCase()===t.toLowerCase()}));a.length>0?(E("none"),k("flex")):i.length>0?(E("none"),C("flex")):n.push("/invite-not-found")},name:d,handleNameChange:function(n){u(n.target.value)},authFormDisplay:g}),b.a.createElement(Vn,{id:"form-1",name:d,formOneDisplay:j}),b.a.createElement(qn,{id:"form-2",name:d,formTwoDisplay:S})))},Zn=S.a.header(gn||(gn=Object(z.a)(["\n  background-color: transparent;\n  height: ",";\n  width: 100%;\n  position: relative;\n  text-align: center;\n  border-bottom: ",";\n  .menu-transition-enter {\n    opacity: 0;\n  }\n  .menu-transition-enter-active {\n    opacity: 0.8;\n    transition: opacity 1000ms;\n  }\n  .menu-transition-exit {\n    opacity: 0.8;\n  }\n  .menu-transition-exit-active {\n    opacity: 0;\n    transition: opacity 1000ms;\n  }\n"])),(function(n){return n.isHomePage?"60px":"120px"}),(function(n){return n.isHomePage?"none":"1px solid #FFDAB9"})),Xn=S.a.button(fn||(fn=Object(z.a)(["\n  color: ",";\n  position: absolute;\n  background-color: transparent;\n  border: none;\n  right: 20px;\n  top: 20px;\n  &:focus {\n    outline: none;\n    background: transparent;\n  }\n"])),(function(n){return n.open?"transparent":"black"})),$n=S.a.button(bn||(bn=Object(z.a)(["\n  z-index: 11;\n  color: ",";\n  position: absolute;\n  background-color: transparent;\n  border: none;\n  right: 20px;\n  top: 20px;\n  &:focus {\n    outline: none;\n    background: transparent;\n  }\n"])),(function(n){return n.open?"black":"transparent"})),ne=S.a.div(En||(En=Object(z.a)(["\n  z-index: 10;\n  visibility: ",";\n  opacity: 0.7;\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  display: flex;\n  flex-direction: column;\n  width: 250px;\n  height: ","px;\n  background: ",";\n  padding: 20px;\n  justify-content: center;\n"])),(function(n){return n.open?"visible":"hidden"}),(function(n){return n.height}),(function(n){return n.isHomePage?"white":"#FFDAB9"})),ee=S.a.div(xn||(xn=Object(z.a)(["\n  display: inline-block;\n  color: #5e5b56;\n  margin: 20px 20px;\n  &:hover {\n    border-bottom: 2px solid #FFDAB9;\n    font-weight: bold;\n    cursor: pointer;\n  }\n"]))),te=S.a.div(wn||(wn=Object(z.a)(["\n  font-size: 3rem;\n  padding-top: 2rem;\n  font-weight: 200;\n  @media(min-width: 768px) {\n    font-size: 5rem;\n    padding-top: 0;\n  }\n"]))),ae=function(n){var e=n.height,t=Object(f.useState)(!1),a=Object(w.a)(t,2),i=a[0],o=a[1],r="/"===window.location.pathname,c=function(){o(!i)};return b.a.createElement(Zn,{id:"header-container",isHomePage:r},!r&&b.a.createElement(te,null,"m + e"),b.a.createElement(O.a,{in:i,timeout:400,classNames:"menu-transition",unmountOnExit:!0,appear:!0,onEnter:function(){return o(!0)},onExited:function(){return o(!1)}},b.a.createElement(ne,{id:"menu",open:i,height:e,isHomePage:r},b.a.createElement(v.b,{to:"/rsvp",onClick:function(){return c()}},b.a.createElement(ee,null,"rsvp")),b.a.createElement(v.b,{to:"/info",onClick:function(){return c()}},b.a.createElement(ee,null,"info")),b.a.createElement(v.b,{to:"/photos",onClick:function(){return c()}},b.a.createElement(ee,null,"photos")))),b.a.createElement(Xn,{onClick:function(){return c()},open:i},b.a.createElement(j.a,{icon:k.a,size:"2x"})),b.a.createElement($n,{onClick:function(){return c()},open:i},b.a.createElement(j.a,{icon:k.b,size:"2x"})))},ie=S.a.div(vn||(vn=Object(z.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  margin: 15% auto 0 auto;\n"]))),oe=S.a.div(yn||(yn=Object(z.a)(["\n  font-size: 1rem;\n  color: white;\n  opacity: 0.7;\n  letter-spacing: 8px;\n  @media(min-width: 768px) {\n    font-size: 2rem;\n  }\n"]))),re=S.a.div(jn||(jn=Object(z.a)(["\n  font-size: 2rem;\n  color: white;\n  opacity: 0.7;\n  letter-spacing: 12px;\n  @media(min-width: 768px) {\n    font-size: 6rem\n  }\n"]))),ce=function(){var n=window.innerHeight;return b.a.createElement(b.a.Fragment,null,b.a.createElement(ae,{height:n}),b.a.createElement(ie,{id:"home-container"},b.a.createElement(re,null,"10.01.2021"),b.a.createElement(oe,null,"MATTHEW & ELISSA")))},le=S.a.div(kn||(kn=Object(z.a)(["\n  background: white;\n  height: 100vh;\n  padding: 0;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  >div>h2 {\n    letter-spacing: 2px;\n    font-weight: 300;\n    margin-bottom: 3rem;\n  }\n  > div > img {\n    max-width: 100%;\n  }\n  >div>a>button {\n    position: relative;\n    height: 40px;\n    width: auto;\n    font-size: 0.7rem;\n    background-color: #444444;\n    color: #fff; \n    text-transform: uppercase;\n    letter-spacing: 2px;\n    padding: 10px;\n    border: 1px solid #444444;\n    transition: all 0.4s ease; \n    &:hover {\n      cursor: pointer;\n      color: #444444;\n      background-color: #fff;\n    }\n  }\n"]))),pe=S.a.div(On||(On=Object(z.a)(["\n  height: 200px;\n  width: 100%;\n  background-color: #EFEEEC;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  > h2 {\n    padding: 0;\n    margin: 0;\n    font-size: 2rem;\n    margin-bottom: 0 !important;\n  }\n  > p {\n    font-weight: 200;\n  }\n"]))),me=t.p+"static/media/full-width-image.21478621.png",de=function(){var n=window.innerHeight;return b.a.createElement(b.a.Fragment,null,b.a.createElement(A,{height:n}),b.a.createElement(le,{id:"thank-you-container"},b.a.createElement(pe,null,b.a.createElement("h2",null,"Thank you!"),b.a.createElement("p",null,"your response has been submitted.")),b.a.createElement("div",{id:"full-width-image"},b.a.createElement("img",{src:me,alt:"elissa + matthew wedding"}))))},ue=function(){var n=window.innerHeight;return b.a.createElement(b.a.Fragment,null,b.a.createElement(A,{height:n}),b.a.createElement(le,{id:"invite-not-found-container"},b.a.createElement(pe,null,b.a.createElement("h2",null,"Sorry!"),b.a.createElement("p",null,"We couldn't find your invite"),b.a.createElement(v.b,{to:"/rsvp"},b.a.createElement("button",null,"Back to RSVP")))))},se=S.a.div(zn||(zn=Object(z.a)(["\n  background: white;\n  height: 100vh;\n  padding: 0;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  >div>h2 {\n    letter-spacing: 2px;\n    font-weight: 300;\n  }\n  > div > img {\n    max-width: 100%;\n  }\n  >div>a>button {\n    position: relative;\n    height: 40px;\n    width: auto;\n    font-size: 0.7rem;\n    background-color: #444444;\n    color: #fff; \n    text-transform: uppercase;\n    letter-spacing: 2px;\n    padding: 10px;\n    border: 1px solid #444444;\n    transition: all 0.4s ease; \n    &:hover {\n      cursor: pointer;\n      color: #444444;\n      background-color: #fff;\n    }\n  }\n"]))),he=S.a.div(Sn||(Sn=Object(z.a)(["\n  height: 250px;\n  text-align: center;\n  width: 100%;\n  background-color: #EFEEEC;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  > h2 {\n    padding: 0;\n    margin: 20px;\n    font-size: 2rem;\n  }\n  > p {\n    font-weight: 200;\n    margin: 0px 20px;\n  }\n"]))),ge=function(){var n=window.innerHeight;return b.a.createElement(b.a.Fragment,null,b.a.createElement(A,{height:n}),b.a.createElement(se,{id:"thank-you-container"},b.a.createElement(he,null,b.a.createElement("h2",null,"You've already submitted your RSVP!"),b.a.createElement("p",null,"please contact Matt or Elissa if you'd like to modify your response."))))},fe=t.p+"static/media/elissa+matthew-engagement-5.deebc2b4.jpg",be=S.a.div(Cn||(Cn=Object(z.a)(["\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  width: 100vw;\n  box-sizing: border-box;\n  background-color: white;\n"]))),Ee=S.a.div(Fn||(Fn=Object(z.a)(["\n  min-height: 100%;\n  ","\n"])),(function(n){return n&&n.homePage?"\n        background: url(".concat(fe,") no-repeat center center fixed;\n        -webkit-background-size: cover;\n        -moz-background-size: cover;\n        -o-background-size: cover;\n        background-size: cover;\n        background-attachment: fixed;\n      "):""}));var xe=function(){var n=Object(f.useState)(window.location.pathname),e=Object(w.a)(n,2),t=e[0],a=e[1],i="/"===t;return Object(f.useEffect)((function(){a(window.location.pathname)}),[t]),b.a.createElement(v.a,null,b.a.createElement(be,{id:"body-container"},b.a.createElement(Ee,{id:"main-container",homePage:i},b.a.createElement(y.c,null,b.a.createElement(y.a,{path:"/info",component:W,key:window.location.pathname}),b.a.createElement(y.a,{path:"/rsvp",component:Un}),b.a.createElement(y.a,{path:"/photos",component:Z}),b.a.createElement(y.a,{path:"/invite-not-found",component:ue}),b.a.createElement(y.a,{path:"/thank-you",component:de}),b.a.createElement(y.a,{path:"/error",component:ge}),b.a.createElement(y.a,{path:"/",exact:!0,component:ce,key:window.location.pathname})))))},we=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,153)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,o=e.getLCP,r=e.getTTFB;t(n),a(n),i(n),o(n),r(n)}))};x.a.render(b.a.createElement(b.a.StrictMode,null,b.a.createElement(xe,null)),document.getElementById("root")),we()},78:function(n,e,t){}},[[151,1,2]]]);
//# sourceMappingURL=main.02588373.chunk.js.map