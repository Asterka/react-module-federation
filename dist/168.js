"use strict";(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[168],{222:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(212),l=n(407),a=n.n(l),c=n(764),i=n(40),m=n(62),o=n(581),s=n(579),u=n.n(s),E=n(5),d=n(720),h=n(557);class f extends a().Component{render(){return a().createElement(a().Fragment,null,a().createElement(d.Z,null,a().createElement(d.Z.Header,null,a().createElement(h.Z,{variant:"pills",defaultActiveKey:"#first"},a().createElement(h.Z.Item,null,a().createElement(h.Z.Link,{href:"#first"},"Active")),a().createElement(h.Z.Item,null,a().createElement(h.Z.Link,{href:"#link"},"Link")),a().createElement(h.Z.Item,null,a().createElement(h.Z.Link,{href:"#disabled",disabled:!0},"Disabled")))),a().createElement(d.Z.Body,null,a().createElement(d.Z.Title,null,"Special title treatment"),a().createElement(d.Z.Text,null,"With supporting text below as a natural lead-in to additional content."),a().createElement(E.Z,{variant:"primary"},"Go somewhere"))))}}var p=f;function k(){const{gl:e,scene:t,camera:n,size:o}=(0,c.Ky)(),s=(0,l.useMemo)((()=>new r.Scene),[]),u=(0,l.useRef)(),E=(0,l.useRef)(),[d,h]=(0,l.useState)(null),f=new r.Matrix4;return(0,c.xQ)((()=>{f.copy(n.matrix).invert(),E.current.quaternion.setFromRotationMatrix(f),e.autoClear=!0,e.render(t,n),e.autoClear=!1,e.clearDepth(),e.render(s,u.current)}),1),(0,c.jz)(a().createElement(a().Fragment,null,a().createElement(i.i,{ref:u,makeDefault:!1,position:[0,0,100]}),a().createElement("mesh",{ref:E,raycast:(0,m.A)(u),position:[o.width/2-80,o.height/2-80,0],onPointerOut:e=>h(null),onPointerMove:e=>h(Math.floor(e.faceIndex/2))},[...Array(6)].map(((e,t)=>a().createElement("meshLambertMaterial",{attachArray:"material",key:t,color:d===t?"hotpink":"white"}))),a().createElement("boxGeometry",{args:[60,60,60]})),a().createElement("ambientLight",{intensity:.5}),a().createElement("pointLight",{position:[10,10,10],intensity:.5})),s)}function y(){return a().createElement("div",{className:"w-sreen h-screen"},a().createElement(p,null),a().createElement(c.Xz,null,a().createElement("mesh",null,a().createElement("torusGeometry",{args:[1,.5,32,100]}),a().createElement("meshNormalMaterial",null)),a().createElement(o.z,null),a().createElement(k,null)))}class Z extends HTMLElement{connectedCallback(){u().render(a().createElement(y,null),this)}}customElements.define("mfe4-element",Z)}}]);