(this["webpackJsonphundred-pushups-viz"]=this["webpackJsonphundred-pushups-viz"]||[]).push([[0],{14:function(e,t,a){e.exports=a(21)},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),c=a.n(i),o=(a(19),a(1)),d=a(4),s=a(10),u=a(9),m=a(8),l=["#fdf6e3","#eee8d5","#93a1a1","#839496"],h=["#002b36","#073642","#586e75","#657b83"],y="#b58900",f="#cb4b16",p="#dc322f",x="#d33682",b="#6c71c4",g="#268bd2",E="#2aa198",k="#859900",v=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)({}),c=Object(o.a)(i,2),d=c[0],s=c[1];return Object(n.useEffect)((function(){var e={0:y,1:f,2:p,3:x,4:b,5:g,6:E,7:k};a?(e.background=l[0],e.text=h[1],e[8]=h[0]):(e.background=h[0],e.text=l[1],e[8]=l[0]),s(e)}),[a]),[d,a,r]},j=function(e){var t=e.theme,a=e.onClick;return r.a.createElement("button",{style:{color:t.background,backgroundColor:t.text,border:"2px solid ".concat(t[8]),borderRadius:50,outline:"none",fontSize:"1.5rem",padding:"0.25rem 1rem",margin:"1rem 0",cursor:"pointer"},onClick:a},"MODE")},w=function(e){var t=e.theme,a=e.on,n=e.onClick;return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid ".concat(t.text),width:20,height:20,borderRadius:"100%",cursor:"pointer"},onClick:n},r.a.createElement("div",{style:{width:a?16:0,height:a?16:0,borderRadius:"100%",backgroundColor:t.text,transition:"height 0.5s, width 0.5s"}}))},O=(a(20),[{index:1,days:[{easy:[2,3,2,2,3],medium:[6,6,4,4,5],hard:[10,12,7,7,9]},{easy:[3,4,2,3,4],medium:[6,8,6,6,7],hard:[10,12,8,8,12]},{easy:[4,5,4,4,5],medium:[8,10,7,7,10],hard:[11,15,9,9,13]}]},{index:2,days:[{easy:[4,5,4,4,6],medium:[9,11,8,8,11],hard:[14,14,10,10,15]},{easy:[5,6,4,4,7],medium:[10,12,9,9,13],hard:[14,16,12,12,17]},{easy:[5,7,5,5,8],medium:[12,13,10,10,15],hard:[16,17,14,14,20]}]},{index:3,days:[{easy:[10,12,7,7,9],medium:[12,17,13,13,17],hard:[14,18,14,14,18]},{easy:[10,12,8,8,12],medium:[14,19,14,14,19],hard:[20,25,15,15,25]},{easy:[11,13,9,9,13],medium:[16,21,15,15,21],hard:[22,30,20,20,28]}]},{index:4,days:[{easy:[12,14,11,10,16],medium:[18,22,16,16,25],hard:[21,25,21,21,32]},{easy:[14,16,12,12,18],medium:[20,25,20,20,28],hard:[25,29,25,25,36]},{easy:[16,18,13,13,20],medium:[23,28,23,23,33],hard:[29,33,29,29,40]}]},{index:5,days:[{easy:[17,19,15,15,20],medium:[28,35,25,22,35],hard:[36,40,30,24,40]},{easy:[10,10,13,13,10,10,9,25],medium:[18,18,20,20,14,14,16,40],hard:[19,19,22,22,18,18,22,45]},{easy:[13,13,15,15,12,12,10,30],medium:[18,18,20,20,17,17,20,45],hard:[20,20,24,24,20,20,22,50]}]},{index:6,days:[{easy:[25,30,20,15,40],medium:[40,50,25,25,50],hard:[45,55,35,30,55]},{easy:[14,14,15,15,14,14,10,10,44],medium:[20,20,23,23,20,20,18,18,53],hard:[22,22,30,30,24,24,18,18,58]},{easy:[13,13,17,17,16,16,14,14,50],medium:[22,22,30,30,25,25,18,18,55],hard:[26,26,33,33,26,26,22,22,60]}]}]),C=function(e,t,a,n){return r.a.createElement(r.a.Fragment,null,e.days.map((function(e,i){return r.a.createElement("g",{key:JSON.stringify(e),style:{transform:"translateX(".concat(8*i,"px)")},className:"week"},function(e,t,a,n){var i=Object.values(n).reduce((function(e,t){return e+t}),0),c=6/i;if(0===i)return r.a.createElement(r.a.Fragment,null);var o=[];return n.easy&&o.push(e.easy),n.medium&&o.push(e.medium),n.hard&&o.push(e.hard),r.a.createElement(r.a.Fragment,null,o.map((function(e,n){return e.reduce((function(e,t){return[].concat(Object(s.a)(e),[e[e.length-1]+t])}),[0]).reverse().map((function(e,i){return r.a.createElement("rect",{key:e,width:c,y:t(e),x:c*n,height:90-t(e),fill:a[i],strokeWidth:"0.5",stroke:a.text})}))})))}(e,t,a,n),r.a.createElement("text",{style:{fontSize:2},x:"3",y:t(-10),textAnchor:"middle",fill:a.text},"Day ",i+1))})),r.a.createElement("text",{style:{fontSize:4},x:"11",y:t(-24),textAnchor:"middle",fill:a.text},"Week ",e.index))},S=function(e,t){switch(console.log({state:e,action:t}),t.type){case"easy":return Object(d.a)({},e,{easy:!e.easy});case"medium":return Object(d.a)({},e,{medium:!e.medium});case"hard":return Object(d.a)({},e,{hard:!e.hard});default:return e}};var z=function(){var e=Object(n.useReducer)(S,{easy:!0,medium:!0,hard:!0}),t=Object(o.a)(e,2),a=t[0],i=t[1],c=v(),d=Object(o.a)(c,3),s=d[0],l=d[1],h=d[2],y=Object(u.a)().domain([0,260]).range([90,10]),f=Object(m.a)(),p=f.ref,x=f.width,b=x<840?x-40:800,g=~~(b/2);return r.a.createElement("div",{ref:p,className:"App",style:{color:s.text,backgroundColor:s.background,transition:"background-color 0.5s, color 0.25s"}},r.a.createElement("h2",{style:{textAlign:"center"}},"Visualization of the"," ",r.a.createElement("a",{style:{color:s[8],transition:"color: 0.5s"},href:"https://hundredpushups.com/"},"One Hundred Pushups"),"-program"),r.a.createElement("svg",{width:b,height:g,viewBox:"0 0 200 100",className:"graph"},[0,50,100,150,200,250].map((function(e){return r.a.createElement("g",{key:e,transform:"translate(0 ".concat(y(e),")")},r.a.createElement("text",{style:{fontSize:4,textAnchor:"end"},x:"9",y:"1",fill:s.text},e),r.a.createElement("line",{x1:"10",x2:"190",y1:0,y2:0,stroke:s.text,strokeWidth:"0.25",style:{opacity:.5}}))})),r.a.createElement("g",{style:{transform:"translateX(14px)"}},O.map((function(e){return r.a.createElement("g",{key:e.index,style:{transform:"translateX(".concat(30*(e.index-1),"px)")}},C(e,y,s,a))})))),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",columnGap:6,rowGap:2}},r.a.createElement("span",{style:{justifySelf:"end"}},"Easy"),r.a.createElement(w,{theme:s,on:a.easy,onClick:function(){return i({type:"easy"})}}),r.a.createElement("span",{style:{justifySelf:"end"}},"Medium"),r.a.createElement(w,{theme:s,on:a.medium,onClick:function(){return i({type:"medium"})}}),r.a.createElement("span",{style:{justifySelf:"end"}},"Hard"),r.a.createElement(w,{theme:s,on:a.hard,onClick:function(){return i({type:"hard"})}}))),r.a.createElement(j,{theme:s,onClick:function(){return h(!l)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.532268cd.chunk.js.map