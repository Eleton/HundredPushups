(this["webpackJsonphundred-pushups-viz"]=this["webpackJsonphundred-pushups-viz"]||[]).push([[0],{13:function(e,t,a){e.exports=a(20)},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),i=(a(18),a(2)),d=a(4),s=a(9),m=a(8),u=["#fdf6e3","#eee8d5","#93a1a1","#839496"],l=["#002b36","#073642","#586e75","#657b83"],h="#b58900",y="#cb4b16",f="#dc322f",x="#d33682",g="#6c71c4",b="#268bd2",p="#2aa198",k="#859900",E=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({}),o=Object(i.a)(c,2),d=o[0],s=o[1];return Object(n.useEffect)((function(){var e={0:h,1:y,2:f,3:x,4:g,5:b,6:p,7:k};a?(e.background=u[0],e.text=l[1],e[8]=l[0]):(e.background=l[0],e.text=u[1],e[8]=u[0]),s(e)}),[a]),[d,a,r]},v=function(e){var t=e.theme,a=e.onClick;return r.a.createElement("button",{style:{color:t.background,backgroundColor:t.text,border:"2px solid ".concat(t[8]),borderRadius:50,outline:"none",fontSize:"1.5rem",padding:"0.25rem 1rem",margin:"1rem 0"},onClick:a},"MODE")},w=(a(19),[{index:1,days:[{easy:[2,3,2,2,3],medium:[6,6,4,4,5],hard:[10,12,7,7,9]},{easy:[3,4,2,3,4],medium:[6,8,6,6,7],hard:[10,12,8,8,12]},{easy:[4,5,4,4,5],medium:[8,10,7,7,10],hard:[11,15,9,9,13]}]},{index:2,days:[{easy:[4,5,4,4,6],medium:[9,11,8,8,11],hard:[14,14,10,10,15]},{easy:[5,6,4,4,7],medium:[10,12,9,9,13],hard:[14,16,12,12,17]},{easy:[5,7,5,5,8],medium:[12,13,10,10,15],hard:[16,17,14,14,20]}]},{index:3,days:[{easy:[10,12,7,7,9],medium:[12,17,13,13,17],hard:[14,18,14,14,18]},{easy:[10,12,8,8,12],medium:[14,19,14,14,19],hard:[20,25,15,15,25]},{easy:[11,13,9,9,13],medium:[16,21,15,15,21],hard:[22,30,20,20,28]}]},{index:4,days:[{easy:[12,14,11,10,16],medium:[18,22,16,16,25],hard:[21,25,21,21,32]},{easy:[14,16,12,12,18],medium:[20,25,20,20,28],hard:[25,29,25,25,36]},{easy:[16,18,13,13,20],medium:[23,28,23,23,33],hard:[29,33,29,29,40]}]},{index:5,days:[{easy:[17,19,15,15,20],medium:[28,35,25,22,35],hard:[36,40,30,24,40]},{easy:[10,10,13,13,10,10,9,25],medium:[18,18,20,20,14,14,16,40],hard:[19,19,22,22,18,18,22,45]},{easy:[13,13,15,15,12,12,10,30],medium:[18,18,20,20,17,17,20,45],hard:[20,20,24,24,20,20,22,50]}]},{index:6,days:[{easy:[25,30,20,15,40],medium:[40,50,25,25,50],hard:[45,55,35,30,55]},{easy:[14,14,15,15,14,14,10,10,44],medium:[20,20,23,23,20,20,18,18,53],hard:[22,22,30,30,24,24,18,18,58]},{easy:[13,13,17,17,16,16,14,14,50],medium:[22,22,30,30,25,25,18,18,55],hard:[26,26,33,33,26,26,22,22,60]}]}]),O=function(e,t,a){return r.a.createElement(r.a.Fragment,null,e.days.map((function(e,n){return r.a.createElement("g",{style:{transform:"translateX(".concat(8*n,"px)")},className:"week"},function(e,t,a){return r.a.createElement(r.a.Fragment,null,e.easy.reduce((function(e,t){return[].concat(Object(d.a)(e),[e[e.length-1]+t])}),[0]).reverse().map((function(e,n){return r.a.createElement("rect",{width:"2",y:t(e),x:"0",height:90-t(e),fill:a[n],strokeWidth:"0.5",stroke:a.text})})),e.medium.reduce((function(e,t){return[].concat(Object(d.a)(e),[e[e.length-1]+t])}),[0]).reverse().map((function(e,n){return r.a.createElement("rect",{width:"2",y:t(e),x:"2",height:90-t(e),fill:a[n],strokeWidth:"0.5",stroke:a.text})})),e.hard.reduce((function(e,t){return[].concat(Object(d.a)(e),[e[e.length-1]+t])}),[0]).reverse().map((function(e,n){return r.a.createElement("rect",{width:"2",y:t(e),x:"4",height:90-t(e),fill:a[n],strokeWidth:"0.5",stroke:a.text})})))}(e,t,a),r.a.createElement("text",{style:{fontSize:2},x:"3",y:t(-10),textAnchor:"middle",fill:a.text},"Day ",n+1))})),r.a.createElement("text",{style:{fontSize:4},x:"11",y:t(-24),textAnchor:"middle",fill:a.text},"Week ",e.index))};var j=function(){var e=E(),t=Object(i.a)(e,3),a=t[0],n=t[1],c=t[2],o=Object(s.a)().domain([0,260]).range([90,10]),d=Object(m.a)(),u=d.ref,l=d.width,h=l<840?l-40:800,y=~~(h/2);return r.a.createElement("div",{ref:u,className:"App",style:{color:a.text,backgroundColor:a.background,transition:"background-color 0.5s, color 0.25s"}},r.a.createElement("svg",{width:h,height:y,viewBox:"0 0 200 100",className:"graph"},[0,50,100,150,200,250].map((function(e){return r.a.createElement("g",{transform:"translate(0 ".concat(o(e),")")},r.a.createElement("text",{style:{fontSize:4,textAnchor:"end"},x:"9",y:"1",fill:a.text},e),r.a.createElement("line",{x1:"10",x2:"190",y1:0,y2:0,stroke:a.text,strokeWidth:"0.25",style:{opacity:.5}}))})),r.a.createElement("g",{style:{transform:"translateX(14px)"}},w.map((function(e){return r.a.createElement("g",{style:{transform:"translateX(".concat(30*(e.index-1),"px)")}},O(e,o,a))})))),r.a.createElement(v,{theme:a,onClick:function(){return c(!n)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.c06faf1f.chunk.js.map