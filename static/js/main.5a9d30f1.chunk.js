(this["webpackJsonpnft-booth"]=this["webpackJsonpnft-booth"]||[]).push([[0],{150:function(e,t,n){},336:function(e,t){},338:function(e,t){},350:function(e,t){},352:function(e,t){},379:function(e,t){},380:function(e,t){},386:function(e,t){},388:function(e,t){},406:function(e,t){},422:function(e){e.exports=JSON.parse('[{"network":"TestNet","ipfsGateway":"https://ipfs.io/ipfs/","algod":"https://testnet.algoexplorerapi.io","blockExplorer":"https://testnet.algoexplorer.io"},{"network":"MainNet","ipfsGateway":"https://ipfs.io/ipfs/","algod":"https://algoexplorerapi.io","blockExplorer":"https://algoexplorer.io"}]')},47:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return j})),n.d(t,"e",(function(){return b})),n.d(t,"c",(function(){return v}));var a=n(7),r=n(8),i=n(2),c=n(0),s=n.n(c),o=n(80),u=n(53),l=(n(106),n(57)),d=n(48),f="#arc3",p="metadata.json",h="application/json";function j(e){return"ipfs://"+e}function b(e,t){t.endsWith(f)&&(t=t.slice(0,t.length-f.length));var n=t.split("://");if(n.length<2)return t;switch(n[0]){case"ipfs":return l.a[e].ipfsGateway+n[1];case"https":return t}return t}var m=function(){function e(t){Object(a.a)(this,e),this.id=void 0,this.name=void 0,this.unitName=void 0,this.url=void 0,this.metadataHash=void 0,this.total=void 0,this.decimals=void 0,this.creator=void 0,this.manager=void 0,this.reserve=void 0,this.clawback=void 0,this.freeze=void 0,this.defaultFrozen=void 0,this.id=t.id||0,this.name=t.name||"",this.unitName=t.unitName||"",this.url=t.url||"",this.metadataHash=t.metadataHash||"",this.total=t.total||0,this.decimals=t.decimals||0,this.creator=t.creator||"",this.manager=t.manager||"",this.reserve=t.reserve||"",this.clawback=t.clawback||"",this.freeze=t.freeze||"",this.defaultFrozen=t.defaultFrozen||!1}return Object(r.a)(e,[{key:"valid",value:function(){return this.id>0&&this.total>0&&""!==this.url}}],[{key:"fromParams",value:function(t){var n=t.params;return new e({id:t.index,name:n.name||"",unitName:n["unit-name"]||"",url:n.url||"",metadataHash:n["metadata-hash"]||"",total:n.total||0,decimals:n.decimals||0,creator:n.creator||"",manager:n.manager||"",reserve:n.reserve||"",clawback:n.clawback||"",freeze:n.freeze||"",defaultFrozen:n["default-frozen"]||!1})}}]),e}(),v=function(){function e(t,n,r){Object(a.a)(this,e),this.token=new m({}),this.metadata=new d.a,this.urlMimeType=void 0,this.metadata=t,this.token=n,this.urlMimeType=r}return Object(r.a)(e,[{key:"valid",value:function(){return this.token.valid()&&this.metadata.valid()}},{key:"name",value:function(){return this.metadata.valid()?this.metadata.name:this.token.valid()?this.token.name:""}},{key:"id",value:function(){return this.token.valid()?this.token.id:0}},{key:"imgURL",value:function(e){if(!this.valid())return"https://dummyimage.com/640x360/fff/aaa";var t=b(e,this.metadata.image);return t!==this.metadata.image?t:this.token.url.endsWith(p)?b(e,this.token.url.substring(0,this.token.url.length-p.length))+this.metadata.image:t}}],[{key:"create",value:function(){var t=Object(i.a)(s.a.mark((function t(n,a,r,i){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)(n,a,j(i),r);case 2:return c=t.sent,t.next=5,e.fromAssetId(a,c);case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e,n,a,r){return t.apply(this,arguments)}}()},{key:"fromAssetId",value:function(){var t=Object(i.a)(s.a.mark((function t(n,a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.t1=n,t.next=4,Object(o.c)(n,a);case 4:return t.t2=t.sent,t.abrupt("return",t.t0.fromToken.call(t.t0,t.t1,t.t2));case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"fromToken",value:function(){var t=Object(i.a)(s.a.mark((function t(n,a){var r,i,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=m.fromParams(a),i=b(n,r.url),t.prev=2,t.next=5,Object(u.c)(i);case 5:c=t.sent,t.t0=c,t.next=t.t0===h?9:16;break;case 9:return t.t1=e,t.next=12,Object(u.b)(i);case 12:return t.t2=t.sent,t.t3=r,t.t4=c,t.abrupt("return",new t.t1(t.t2,t.t3,t.t4));case 16:return t.abrupt("return",new e(d.a.fromToken(r),r,c));case 19:return t.prev=19,t.t5=t.catch(2),t.abrupt("return",new e(new d.a,r));case 22:case"end":return t.stop()}}),t,null,[[2,19]])})));return function(e,n){return t.apply(this,arguments)}}()}]),e}()}).call(this,n(25).Buffer)},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(18),r=n(7),i=n(8),c=n(47),s=n(106);function o(e,t){if("_raw"!==e&&""!==t)return t}var u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(r.a)(this,e),this._raw=void 0,this.name="",this.description="",this.image="",this.decimals=0,this.unitName="",this.image_integrity="",this.image_mimetype="",this.background_color="",this.external_url="",this.external_url_integrity="",this.external_url_mimetype="",this.animation_url="",this.animation_url_integrity="",this.animation_url_mimetype="",this.extra_metadata="",this.localization=void 0,this.properties=void 0,Object.assign(this,t)}return Object(i.a)(e,[{key:"toHash",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.hasOwnProperty("extra_metadata"),void 0===this._raw&&(this._raw=this.toString(!1));var t=s.sha256.create();return e?t.update(this.toString(!1)):t.update(this._raw),new Uint8Array(t.digest())}},{key:"valid",value:function(){return""!==this.image}},{key:"toFile",value:function(){var e=new Blob([this.toString()],{type:c.a});return new File([e],c.b)}},{key:"toString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return void 0===this._raw&&(this._raw=JSON.stringify(Object(a.a)({},this),o)),JSON.stringify(JSON.parse(this._raw),o,e?2:0)}}],[{key:"fromToken",value:function(t){return new e({name:t.name,image:t.url,decimals:t.decimals})}}]),e}()},517:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(36),c=n.n(i),s=(n(150),n(11)),o=n(22),u=n(521),l=n(62),d=n(68),f=n(47),p=n(53),h=n(6);function j(e){var t=r.a.useState([]),n=Object(s.a)(t,2),a=n[0],i=n[1],c=r.a.useState(!1),u=Object(s.a)(c,2),l=u[0],d=u[1];r.a.useEffect((function(){l||(Object(p.d)(e.activeConfig,144e5).then((function(t){var n,a=[],r=Object(o.a)(t);try{for(r.s();!(n=r.n()).done;){var c=n.value;a.push(Object(p.b)(Object(p.a)(e.activeConfig,c.cid)))}}catch(s){r.e(s)}finally{r.f()}Promise.all(a).then((function(e){var n=[];for(var a in e)""!==e[a].name&&n.push({cid:t[a].cid,md:e[a]});i(n)}))})),d(!0))}),[e.activeConfig,l]);var f=a.map((function(e){return Object(h.jsx)(b,{cidmd:e},e.cid)}));return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"content content-collection",children:f})})}function b(e){return Object(h.jsx)(u.b,{className:"content-collection-item",elevation:l.a.TWO,children:Object(h.jsx)(d.b,{to:"/mint/"+e.cidmd.cid,children:Object(h.jsx)("img",{src:Object(f.e)(0,e.cidmd.md.image),alt:"nft"})})})}var m=n(90),v=n(72),O=n(2),x=n(18),g=n(0),w=n.n(g),k=n(48);function y(e){var t=r.a.useState(new k.a),n=Object(s.a)(t,2),a=n[0],i=n[1],c=r.a.useState(!1),o=Object(s.a)(c,2),d=o[0],f=o[1],j=r.a.useState(),b=Object(s.a)(j,2),m=b[0],v=b[1],g=r.a.useState(),y=Object(s.a)(g,2),N=y[0],C=y[1];function T(){return(T=Object(O.a)(w.a.mark((function t(){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(!0),n=new k.a({name:"ETH Denver AlgoRanch NFT",unitName:"eth-denv",description:"NFT Minted ETH Denver 2022",decimals:0}),i(n),t.prev=3,t.next=6,Object(p.e)(e.activeConfig,N,n);case 6:f(!1),window.location.reload(),t.next=15;break;case 10:return t.prev=10,t.t0=t.catch(3),alert("Failed to upload image to ipfs :("),f(!1),t.abrupt("return");case 15:case"end":return t.stop()}}),t,null,[[3,10]])})))).apply(this,arguments)}return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(u.b,{elevation:l.a.TWO,className:"mint-card",children:[Object(h.jsx)(S,Object(x.a)({imgSrc:m,setFile:function(e){C(e);var t=new FileReader;t.onload=function(e){v(e.target.result)},t.readAsDataURL(e),i((function(t){return new k.a(Object(x.a)(Object(x.a)({},t),{},{image:e.name,image_mimetype:e.type,properties:Object(x.a)(Object(x.a)({},t.properties),{},{size:e.size})}))}))}},a)),Object(h.jsx)(u.a,{intent:"success",style:{float:"right",margin:"15px"},loading:d,onClick:function(){return T.apply(this,arguments)},children:"Upload"})]})})}function S(e){return void 0===e.imgSrc||""===e.imgSrc?Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"content content-piece",children:Object(h.jsx)(u.d,{large:!0,disabled:!1,text:"Choose file...",onInputChange:function(t){t.stopPropagation(),t.preventDefault(),e.setFile(t.target.files.item(0))}})})}):Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"content content-piece",children:Object(h.jsx)("img",{id:"gateway-link",alt:"NFT",src:e.imgSrc})})})}var N=n(149),C=n(29),T=n(80),W=n(262),_=n.n(W),A=n(33),I=n.n(A),F=n(20);function D(e){var t=Object(C.f)().cid,n=r.a.useState(new k.a({})),a=Object(s.a)(n,2),i=a[0],c=a[1],o=r.a.useState(void 0),l=Object(s.a)(o,2),d=l[0],j=l[1],b=r.a.useState(void 0),m=Object(s.a)(b,2),v=m[0],x=m[1],g=r.a.useState(!1),y=Object(s.a)(g,2),S=y[0],N=y[1],W=r.a.useState(!1),_=Object(s.a)(W,2),A=_[0],D=_[1],z=r.a.useState(!1),H=Object(s.a)(z,2),G=H[0],L=H[1],M=r.a.useState(0),B=Object(s.a)(M,2),J=B[0],U=B[1];function Y(){return(Y=Object(O.a)(w.a.mark((function n(){var a;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return D(!0),n.next=3,f.c.create(e.sw.wallet,e.activeConfig,i,t);case 3:a=n.sent,x(a),U(a.id());case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function q(){return(q=Object(O.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(T.d)(e.sw.wallet,e.activeConfig,n,J);case 2:U(0),D(!1);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function K(){return(K=Object(O.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:D(!0),t=I.a.generateAccount(),j(t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(){return(V=Object(O.a)(w.a.mark((function n(){var a;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.c.create(e.sw.wallet,e.activeConfig,i,t);case 2:a=n.sent,x(a),L(!0);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Q(){return(Q=Object(O.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return N(!0),t.next=3,Object(T.b)(e.sw.wallet,e.activeConfig,d,v.id());case 3:j(void 0),N(!1),D(!1),window.location.href="/NFTBooth";case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return r.a.useEffect((function(){void 0===i._raw&&Object(p.b)(Object(p.a)(e.activeConfig,t)).then((function(e){c(e)}))}),[e.activeConfig,t,i]),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(P,{loading:A,cid:t,md:i,mintOnly:function(){return Y.apply(this,arguments)},mintAndCreate:function(){return K.apply(this,arguments)}}),Object(h.jsx)(R,{importingAccount:d,cancelCreate:function(){D(!1),j(void 0)},continueCreate:function(){return V.apply(this,arguments)}}),Object(h.jsx)(E,{optIn:J,handleScanned:function(e){return q.apply(this,arguments)}}),Object(h.jsx)(u.c,{isOpen:G,children:Object(h.jsx)("div",{className:F.DIALOG_BODY,children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(u.a,{loading:S,intent:"success",onClick:function(){return Q.apply(this,arguments)},children:"Fund it!"})})})})]})}function P(e){return Object(h.jsxs)(u.b,{elevation:l.a.THREE,children:[Object(h.jsx)("img",{src:Object(f.e)(0,e.md.image),style:{maxWidth:"500px"},alt:"nft"}),Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(u.a,{loading:e.loading,icon:"clean",intent:"success",onClick:e.mintAndCreate,children:"Mint"})})]})}function R(e){var t=r.a.useState(!1),n=Object(s.a)(t,2),a=n[0],i=n[1],c=r.a.useState(""),o=Object(s.a)(c,2),l=o[0],d=o[1],f=e.importingAccount;return r.a.useEffect((function(){void 0!==f&&(d(JSON.stringify({version:"1.0",mnemonic:Object(A.secretKeyToMnemonic)(f.sk)})),i(!0))}),[f]),Object(h.jsxs)(u.c,{isOpen:a,className:"content",children:[Object(h.jsx)("div",{className:F.DIALOG_BODY,children:Object(h.jsx)(_.a,{value:l})}),Object(h.jsx)("div",{className:F.DIALOG_FOOTER,children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(u.a,{style:{margin:"0px 10px"},intent:"danger",onClick:function(){i(!1),e.cancelCreate()},children:"Cancel"}),Object(h.jsx)(u.a,{style:{margin:"0px 10px"},intent:"success",onClick:function(){i(!1),e.continueCreate()},children:"Ready!"})]})})]})}function E(e){var t=r.a.useRef(null),n=r.a.useState(void 0),a=Object(s.a)(n,2),i=a[0],c=a[1],o=r.a.useState(!1),l=Object(s.a)(o,2),d=l[0],f=l[1],p=void 0!==e.optIn&&e.optIn>0;r.a.useEffect((function(){f(p),null===i||void 0===i||i.stop(),null===i||void 0===i||i.start()}),[i,p]);var j="";return Object(h.jsx)(u.c,{isOpen:d,onOpened:function(){null!==t.current&&void 0===i&&c(new N.a(t.current,(function(n){j!==n&&(null===i||void 0===i||i.stop(),t.current=null,c(void 0),f(!1),j=n,e.handleScanned(n))})))},children:Object(h.jsxs)("div",{className:F.DIALOG_BODY,children:[Object(h.jsxs)("h3",{children:["Please Opt into Asset ID ",e.optIn]}),Object(h.jsx)("div",{className:"scanner-container",children:Object(h.jsx)("video",{style:{width:"100%"},ref:t})})]})})}N.a.WORKER_PATH="/qr-scanner-worker.min.js";var z=n(4);function H(e){var t=a.useState(!1),n=Object(s.a)(t,2),r=n[0],i=n[1],c=e.sessionWallet,o=e.updateWallet;function l(e){return d.apply(this,arguments)}function d(){return(d=Object(O.a)(w.a.mark((function t(n){var a,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((a=n.currentTarget.id)in v.allowedWallets){t.next=4;break}return void 0!==e.sessionWallet.wallet&&e.sessionWallet.disconnect(),t.abrupt("return",i(!1));case 4:return r=new v.SessionWallet(e.sessionWallet.network,e.sessionWallet.permissionCallback,a),t.next=7,r.connect();case 7:if(t.sent){t.next=9;break}r.disconnect();case 9:e.updateWallet(r),i(!1);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}a.useEffect((function(){var e;if(!c.connected())return c.connect().then((function(t){t&&(e=setInterval((function(){c.connected()&&(clearInterval(e),o(c))}),500))})),function(){clearInterval(e)}}),[c,o]);for(var f=[],p=0,j=Object.entries(v.allowedWallets);p<j.length;p++){var b=Object(s.a)(j[p],2),m=b[0],x=b[1];f.push(Object(h.jsx)("li",{children:Object(h.jsx)(u.a,{id:m,large:!0,fill:!0,minimal:!0,outlined:!0,onClick:l,children:Object(h.jsxs)("div",{className:"wallet-option",children:[Object(h.jsx)("img",{alt:"wallet-branding",className:"wallet-branding",src:x.img(e.darkMode)}),Object(h.jsx)("h5",{children:x.displayName()})]})})},m))}if(!e.connected)return Object(h.jsxs)("div",{children:[Object(h.jsx)(u.a,{minimal:!0,rightIcon:"selection",intent:"warning",outlined:!0,onClick:function(){i(!0)},children:"Connect Wallet"}),Object(h.jsx)(u.c,{isOpen:r,title:"Select Wallet",onClose:l,children:Object(h.jsx)("div",{className:z.a.DIALOG_BODY,children:Object(h.jsx)("ul",{className:"wallet-option-list",children:f})})})]});var g=e.accts.map((function(e,t){return Object(h.jsxs)("option",{value:t,children:[" ",e.substr(0,8),"...  "]},t)}));return Object(h.jsxs)("div",{children:[Object(h.jsx)(u.e,{onChange:function(t){e.sessionWallet.setAccountIndex(parseInt(t.target.value)),e.updateWallet(e.sessionWallet)},minimal:!0,iconProps:{icon:"symbol-circle",intent:"success"},defaultValue:e.sessionWallet.accountIndex(),children:g}),Object(h.jsx)(u.a,{icon:"log-out",minimal:!0,onClick:function(){e.sessionWallet.disconnect(),e.updateWallet(new v.SessionWallet(e.sessionWallet.network,e.sessionWallet.permissionCallback))}})]})}var G=n(57);var L=function(e){var t=Object(G.b)(),n=new v.SessionWallet(G.a[t].network),a=r.a.useState(n),i=Object(s.a)(a,2),c=i[0],o=i[1],l=r.a.useState(n.accountList()),f=Object(s.a)(l,2),p=f[0],b=f[1],O=r.a.useState(n.connected()),x=Object(s.a)(O,2),g=x[0],w=x[1];return Object(h.jsx)(d.a,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)(u.f,{children:[Object(h.jsxs)(u.f.Group,{align:m.a.LEFT,children:[Object(h.jsx)(u.f.Heading,{children:"Algorand NFT Minter"}),Object(h.jsx)(u.f.Divider,{}),Object(h.jsx)(d.b,{to:"/",children:Object(h.jsx)(u.a,{minimal:!0,icon:"search",children:"Choose"})}),Object(h.jsx)(d.b,{to:"/upload",children:Object(h.jsx)(u.a,{minimal:!0,icon:"upload",children:"Upload"})})]}),Object(h.jsx)(u.f.Group,{align:m.a.RIGHT,children:Object(h.jsx)(H,{darkMode:!1,sessionWallet:c,accts:p,connected:g,updateWallet:function(e){o(e),b(e.accountList()),w(e.connected())}})})]}),Object(h.jsxs)(C.c,{children:[Object(h.jsx)(C.a,{exact:!0,path:"/",children:Object(h.jsx)(j,{activeConfig:t,sw:c})}),Object(h.jsx)(C.a,{path:"/mint/:cid",children:Object(h.jsx)(D,{activeConfig:t,sw:c})}),Object(h.jsx)(C.a,{exact:!0,path:"/upload",children:Object(h.jsx)(y,{activeConfig:t})})]})]})})},M=n(38),B=Object(M.a)();c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(L,{history:B})}),document.getElementById("root"))},53:function(e,t,n){"use strict";n.d(t,"e",(function(){return h})),n.d(t,"d",(function(){return b})),n.d(t,"a",(function(){return v})),n.d(t,"c",(function(){return O})),n.d(t,"b",(function(){return g}));var a=n(18),r=n(2),i=n(10),c=n(0),s=n.n(c),o=n(47),u=n(48),l=n(57),d=n(250),f=void 0;function p(e){return void 0===f&&(f=new d.a({token:" ",endpoint:"https://worker.barnji.workers.dev"})),f}function h(e,t,n){return j.apply(this,arguments)}function j(){return(j=Object(r.a)(s.a.mark((function e(t,n,a){var r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=p(),e.next=3,r.put([n],{wrapWithDirectory:!1});case 3:return i=e.sent,a.image=Object(o.d)(i),e.next=7,r.put([a.toFile()],{wrapWithDirectory:!1});case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e,t){return m.apply(this,arguments)}function m(){return(m=Object(r.a)(s.a.mark((function e(t,n){var a,r,c,o,u,l,d,f;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=p(),r=[],c=!1,o=!1,e.prev=4,l=Object(i.a)(a.list({maxResults:10}));case 6:return e.next=8,l.next();case 8:if(!(c=!(d=e.sent).done)){e.next=14;break}f=d.value,r.push(f);case 11:c=!1,e.next=6;break;case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(4),o=!0,u=e.t0;case 20:if(e.prev=20,e.prev=21,!c||null==l.return){e.next=25;break}return e.next=25,l.return();case 25:if(e.prev=25,!o){e.next=28;break}throw u;case 28:return e.finish(25);case 29:return e.finish(20);case 30:return e.abrupt("return",r);case 31:case"end":return e.stop()}}),e,null,[[4,16,20,30],[21,,25,29]])})))).apply(this,arguments)}function v(e,t){return l.a[e].ipfsGateway+t}function O(e){return x.apply(this,arguments)}function x(){return(x=Object(r.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Request(t,{method:"HEAD"}),e.next=3,fetch(n);case 3:return a=e.sent,e.abrupt("return",a.headers.get("Content-Type"));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return w.apply(this,arguments)}function w(){return(w=Object(r.a)(s.a.mark((function e(t){var n,r,i,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=new Request(t),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.blob();case 7:return i=e.sent,e.next=10,i.text();case 10:return c=e.sent,o=JSON.parse(c),e.abrupt("return",new u.a(Object(a.a)({_raw:c},o)));case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:return e.abrupt("return",new u.a({}));case 19:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var a=n(422);var r="active-conf";function i(){var e=sessionStorage.getItem(r);return void 0===e||null===e?0:parseInt(e)}},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return h})),n.d(t,"d",(function(){return b})),n.d(t,"c",(function(){return x}));var a=n(18),r=n(11),i=n(2),c=n(0),s=n.n(c),o=n(33),u=n.n(o),l=(n(47),n(57));function d(e){return new u.a.Algodv2("",l.a[e].algod,"")}function f(e,t,n,a){return p.apply(this,arguments)}function p(){return(p=Object(i.a)(s.a.mark((function e(t,n,a,i){var c,u,l,d,f,p,h;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.getDefaultAccount(),e.next=3,v(n,1e3);case 3:return u=e.sent,l=Object(o.makeAssetCreateTxnWithSuggestedParamsFromObject)({from:c,assetName:i.name,unitName:i.unitName,assetURL:a,assetMetadataHash:i.toHash(),manager:c,total:1,decimals:0,defaultFrozen:!1,suggestedParams:u}),e.next=7,t.signTxn([l]);case 7:return d=e.sent,f=Object(r.a)(d,1),p=f[0],e.next=12,w(n,[p]);case 12:return h=e.sent,e.abrupt("return",h["asset-index"]);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t,n,a){return j.apply(this,arguments)}function j(){return(j=Object(i.a)(s.a.mark((function e(t,n,a,i){var c,l,d,f,p,h,j,b,m,O,x;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.getDefaultAccount(),e.next=3,v(n,100);case 3:return l=e.sent,d=Object(o.makePaymentTxnWithSuggestedParamsFromObject)({from:c,to:a.addr,amount:3e5,suggestedParams:l}),f=Object(o.makeAssetTransferTxnWithSuggestedParamsFromObject)({from:a.addr,to:a.addr,assetIndex:i,amount:0,suggestedParams:l}),p=Object(o.makeAssetTransferTxnWithSuggestedParamsFromObject)({from:c,to:a.addr,assetIndex:i,amount:1,suggestedParams:l}),h=[d,f,p],u.a.assignGroupID(h),e.next=11,t.signTxn(h);case 11:return j=e.sent,b=Object(r.a)(j,3),m=b[0],b[1],O=b[2],x=u.a.signTransaction(f,a.sk),e.next=19,w(n,[m,x,O]);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e,t,n,a){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(s.a.mark((function e(t,n,a,i){var c,u,l,d,f,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.getDefaultAccount(),e.next=3,v(n,100);case 3:return u=e.sent,l=Object(o.makeAssetTransferTxnWithSuggestedParamsFromObject)({from:c,to:a,assetIndex:i,amount:1,suggestedParams:u}),e.next=7,t.signTxn([l]);case 7:return d=e.sent,f=Object(r.a)(d,1),p=f[0],e.next=12,w(n,[p]);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t){return O.apply(this,arguments)}function O(){return(O=Object(i.a)(s.a.mark((function e(t,n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t).getTransactionParams().do();case 2:return r=e.sent,e.abrupt("return",Object(a.a)(Object(a.a)({},r),{},{lastRound:r.firstRound+n}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t){return g.apply(this,arguments)}function g(){return(g=Object(i.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t).getAssetByID(n).do();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){return k.apply(this,arguments)}function k(){return(k=Object(i.a)(s.a.mark((function e(t,n){var a,r,i,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=d(t),e.prev=1,e.next=4,a.sendRawTransaction(n.map((function(e){return e.blob}))).do();case 4:return r=e.sent,i=r.txId,e.next=8,Object(o.waitForConfirmation)(a,i,3);case 8:return c=e.sent,e.abrupt("return",c);case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0);case 15:return e.abrupt("return",void 0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}}},[[517,1,2]]]);
//# sourceMappingURL=main.5a9d30f1.chunk.js.map