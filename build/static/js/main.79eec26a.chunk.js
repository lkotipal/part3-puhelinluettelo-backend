(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),c=t.n(u),o=(t(20),t(14)),l=t(2),i=function(e){var n=e.text,t=e.onClick;return r.a.createElement("button",{onClick:t},n)},m=function(e){var n=e.person,t=e.onDelete;return r.a.createElement("tr",null,r.a.createElement("td",null,n.name),r.a.createElement("td",null,n.number),r.a.createElement("td",null,r.a.createElement(i,{text:"delete",onClick:t})))},f=function(e){var n=e.persons,t=e.onDelete;return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Number"),r.a.createElement("th",null))),r.a.createElement("tbody",null,n.map((function(e){return r.a.createElement(m,{key:e.id,person:e,onDelete:function(){return t(e.id)}})}))))},s=function(e){var n=e.value,t=e.onChange;return r.a.createElement("p",null,"Filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},d=function(e){var n=e.onSubmit,t=e.name,a=e.onNameChange,u=e.number,c=e.onNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:a}),"number: ",r.a.createElement("input",{value:u,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},h=t(3),b=t.n(h),E="/api/persons",p=function(){return b.a.get(E).then((function(e){return e.data}))},v=function(e){return b.a.post(E,e).then((function(e){return e.data}))},g=function(e){return b.a.delete("".concat(E,"/").concat(e)).then((function(e){return e.data}))},O=function(e,n){return b.a.put("".concat(E,"/").concat(e),n).then((function(e){return e.data}))},j=function(e){var n=e.message,t=e.error;return null===n?null:r.a.createElement("div",{className:t?"error":"success"},n)},C=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),i=Object(l.a)(c,2),m=i[0],h=i[1],b=Object(a.useState)(""),E=Object(l.a)(b,2),C=E[0],w=E[1],S=Object(a.useState)(""),N=Object(l.a)(S,2),k=N[0],D=N[1],x=Object(a.useState)(null),y=Object(l.a)(x,2),J=y[0],A=y[1],B=Object(a.useState)(!1),F=Object(l.a)(B,2),I=F[0],P=F[1];Object(a.useEffect)((function(){p().then((function(e){u(e)}))}),[]);var R=function(e,n){A(e),P(n),setTimeout((function(){A(null)}),5e3)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(s,{value:m,onChange:function(e){h(e.target.value)}}),r.a.createElement("h3",null,"Add new contact"),r.a.createElement(d,{onSubmit:function(e){if(e.preventDefault(),t.some((function(e){return e.name===C}))){if(window.confirm("Overwrite ".concat(C,"?"))){var n=t.find((function(e){return e.name===C})),a=n.id,r=Object(o.a)({},n,{number:k});O(a,r).then((function(e){u(t.map((function(n){return n.id===a?e:n}))),R("".concat(n.name," updated!"),!1)})).catch((function(e){u(t.filter((function(e){return e.id!==a}))),console.log(e.response.data),R(e.response.data.error,!0)}))}}else{var c={name:C,number:k};v(c).then((function(e){u(t.concat(e)),w(""),D(""),R("".concat(c.name," added!"),!1)})).catch((function(e){console.log(e.response.data),R(e.response.data.error,!0)}))}},name:C,onNameChange:function(e){w(e.target.value)},number:k,onNumberChange:function(e){D(e.target.value)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(f,{persons:t.filter((function(e){return e.name.match(new RegExp(m,"i"))})),onDelete:function(e){var n=t.filter((function(n){return n.id===e}));1===n.length&&window.confirm("Delete ".concat(n[0].name,"?"))&&g(e).then((function(a){u(t.filter((function(n){return n.id!==e}))),R("".concat(n[0].name," removed!"),!1)})).catch((function(n){u(t.filter((function(n){return n.id!==e}))),console.log(n.response.data),R(n.response.data.error,!0)}))}}),r.a.createElement(j,{message:J,error:I}))};c.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.79eec26a.chunk.js.map