(this["webpackJsonptip-calculator-app"]=this["webpackJsonptip-calculator-app"]||[]).push([[0],{16:function(e,t,r){},18:function(e,t,r){"use strict";r.r(t);var n,c=r(1),l=r.n(c),a=r(9),s=r.n(a),i=r(3),o=r(10),u=r.p+"static/media/logo.3cc0528b.svg",d=(r(16),r(0)),j=function(e){var t=e.children,r=e.onSubmit,n=e.handleSubmit;e.register;return Object(d.jsx)("div",{className:"form",children:Object(d.jsx)("form",{onSubmit:n(r),children:t})})},b=r(7),p=function(e){var t=e.errors,r=e.validate,n=e.name;return(null===t||void 0===t?void 0:t[n])&&(null===t||void 0===t?void 0:t[n].type)===r?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("i",{className:"error-icon"}),Object(d.jsx)("span",{className:"error",children:null===t||void 0===t?void 0:t[n].message})]}):null},v=function(e){var t=e.name,r=e.errors,n=e.validated,c=void 0===n?"required":n;return(null===r||void 0===r?void 0:r[t])&&(null===r||void 0===r?void 0:r[t].type)===c?"error":""},m=function(e){var t=e.placeholder,r=e.register,n=e.name,c=e.required,l=e.errors,a=e.icon,s=e.handleChange,i=void 0===s?null:s;return Object(d.jsxs)("div",{className:"input-text",children:[Object(d.jsxs)("div",{className:"error-content",children:[c&&Object(d.jsx)(p,{errors:l,validate:"required",name:n}),Object(d.jsx)(p,{errors:l,validate:"pattern",name:n})]}),null!==a&&a,Object(d.jsx)("input",Object(b.a)({step:"any",onChange:i,placeholder:t,className:"input \n                ".concat(v({name:n,errors:l,validated:"required"})," \n                ").concat(v({name:n,errors:l,validated:"pattern"})),type:"number"},r(n,{required:{value:c,message:"Can't be zero"},pattern:{value:/^[+-]?([0-9]*[.])?[0-9]+$/i,message:"Looks like this is not an number"}})))]})},h=function(e){var t=e.className,r=e.value,n=e.handleClick;return Object(d.jsx)("div",{className:"button",children:Object(d.jsx)("input",{className:"btn ".concat(t),onClick:n,type:"submit",value:r})})},O=["title","titleId"];function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},x.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function g(e,t){var r=e.title,l=e.titleId,a=f(e,O);return c.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",width:11,height:17,ref:t,"aria-labelledby":l},a),r?c.createElement("title",{id:l},r):null,n||(n=c.createElement("path",{fill:"#9EBBBD",d:"M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"})))}var N,y=c.forwardRef(g),w=(r.p,["title","titleId"]);function k(){return k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},k.apply(this,arguments)}function C(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function S(e,t){var r=e.title,n=e.titleId,l=C(e,w);return c.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",width:13,height:16,ref:t,"aria-labelledby":n},l),r?c.createElement("title",{id:n},r):null,N||(N=c.createElement("path",{fill:"#9EBBBD",d:"M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"})))}var E=c.forwardRef(S),P=(r.p,function(e){var t=Object(o.a)(),r=t.register,n=t.handleSubmit,l=t.formState.errors,a=t.reset,s=Object(c.useState)(0),b=Object(i.a)(s,2),p=b[0],v=b[1],O=Object(c.useState)(0),x=Object(i.a)(O,2),f=x[0],g=x[1],N=Object(c.useState)(0),w=Object(i.a)(N,2),k=w[0],C=w[1],S=function(e,t){var r=e.bill,n=e.numberPeople,c=e.custom,l=r*(c>0?c/100:k)/n;v(l),g(r/n+l)};return Object(d.jsxs)("section",{className:"container",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:u})}),Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"col actions",children:Object(d.jsxs)(j,{register:r,handleSubmit:n,onSubmit:S,children:[Object(d.jsxs)("div",{className:"input-group",children:[Object(d.jsx)("label",{children:" Bill "}),Object(d.jsx)(m,{placeholder:"0",name:"bill",errors:l,required:!0,register:r,icon:Object(d.jsx)(y,{className:"icon"})})]}),Object(d.jsxs)("div",{className:"input-group",children:[Object(d.jsx)("label",{children:" Select Tip % "}),Object(d.jsxs)("div",{className:"button-group",children:[Object(d.jsx)(h,{handleClick:function(){C(.05)},value:"5%"}),Object(d.jsx)(h,{handleClick:function(){C(.1)},value:"10%"}),Object(d.jsx)(h,{handleClick:function(){C(.15)},value:"15%"}),Object(d.jsx)(h,{handleClick:function(){C(.25)},value:"25%"}),Object(d.jsx)(h,{handleClick:function(){C(.5)},value:"50%"}),Object(d.jsx)(m,{handleChange:S,placeholder:"Custom",name:"custom",errors:l,register:r})]})]}),Object(d.jsxs)("div",{className:"input-group",children:[Object(d.jsx)("label",{children:" Number of People "}),Object(d.jsx)(m,{placeholder:"0",name:"numberPeople",errors:l,required:!0,register:r,icon:Object(d.jsx)(E,{className:"icon"})})]})]})}),Object(d.jsxs)("div",{className:"col result",children:[Object(d.jsxs)("div",{className:"text",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col paragraph",children:[Object(d.jsx)("p",{children:"Tip Amount"}),Object(d.jsx)("p",{className:"person",children:"/ person"})]}),Object(d.jsxs)("div",{className:"col value",children:["$ ",p.toFixed(2)]})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col paragraph",children:[Object(d.jsx)("p",{children:"Total"}),Object(d.jsx)("p",{className:"person",children:"/ person"})]}),Object(d.jsxs)("div",{className:"col value",children:["$ ",f.toFixed(2)]})]})]}),Object(d.jsx)(h,{handleClick:function(e){v(0),g(0),a({bill:"",numberPeople:"",custom:""},{keepErrors:!0,keepDirty:!0,keepIsSubmitted:!1,keepTouched:!1,keepIsValid:!1,keepSubmitCount:!1})},className:"reset",value:"Reset"})]})]})]})}),I=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,19)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,a=t.getTTFB;r(e),n(e),c(e),l(e),a(e)}))};s.a.render(Object(d.jsx)(l.a.StrictMode,{children:Object(d.jsx)(P,{})}),document.getElementById("root")),I()}},[[18,1,2]]]);
//# sourceMappingURL=main.d4461e51.chunk.js.map