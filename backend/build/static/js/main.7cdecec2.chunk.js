(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{115:function(e,t){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),o=a(60),s=a(142),u=a(9),i=Object(u.a)(),m=a(2),f=a.n(m),d=a(3),p=a(1),E=a(10),h=a.n(E);function b(){return(b=Object(d.a)(f.a.mark((function e(){var t,a,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/config");case 2:t=e.sent,a=t.data,n=a.logo,r=a.weather,localStorage.setItem("logo",n),localStorage.setItem("appid",r.appid),localStorage.setItem("clientid",r.clientid),localStorage.setItem("clientsecret",r.clientsecret);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){b.apply(this,arguments)})();var v={backend:{url:""},logo:"".concat(localStorage.getItem("logo")),weather:{appID:"".concat(localStorage.getItem("appid")),clientID:"".concat(localStorage.getItem("clientid")),clientSecret:"".concat(localStorage.getItem("clientsecret"))}},g=h.a.create({baseURL:v.backend.url});a(84);var y=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(p.a)(l,2),s=o[0],u=o[1];function m(){return(m=Object(d.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===a||""===s){e.next=6;break}return e.next=3,g.post("/user/auth",{username:a,password:s});case 3:t=e.sent,(n=t.data).token?(sessionStorage.setItem("token",n.token),i.push("/admin")):console.log(n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return sessionStorage.setItem("username",a),sessionStorage.setItem("password",s),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"containerLogin"},r.a.createElement("div",{id:"box-login"},r.a.createElement("header",null,r.a.createElement("h2",{className:"primary-text-color"},"Login")),r.a.createElement("main",null,r.a.createElement("input",{type:"text",placeholder:"Usuario",onChange:function(e){return c(e.target.value)},autoFocus:!0,required:!0}),r.a.createElement("input",{type:"password",placeholder:"Senha",onChange:function(e){return u(e.target.value)},required:!0})),r.a.createElement("div",{id:"area-buttons"},r.a.createElement("button",{className:"buttons",onClick:function(){return m.apply(this,arguments)}},"Acessar")))))},S=a(11),O=a.n(S);var N=function(e){var t=e.floor;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement("li",{key:e.RoomID,className:"containerRoom"},r.a.createElement("label",{className:"numberCostumer"},e.NumberRoom),r.a.createElement("img",{className:"imageCostumer",src:"".concat(v.backend.url,"/").concat(e.NameImage),alt:"".concat(e.NumberRoom)}))})))};var j=function(){var e=new Date,t=e.getDate(),a=e.getMonth(),n=e.getHours(),r=e.getMinutes(),c=e.getSeconds(),l=e.getFullYear();return{getday:t,month:["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setebro","Outubro","Novembro","Dezembro"][a],getfullyear:l,gethours:n,getminutes:r,getseconds:c}};a(118);function x(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(p.a)(l,2),s=o[0],u=o[1],i=Object(n.useState)(""),m=Object(p.a)(i,2),f=m[0],d=m[1],E=Object(n.useState)(""),h=Object(p.a)(E,2),b=h[0],v=h[1],g=Object(n.useState)(""),y=Object(p.a)(g,2),S=y[0],O=y[1],N=Object(n.useState)(0),x=Object(p.a)(N,2),k=x[0],w=x[1];return Object(n.useEffect)((function(){c(j().getday),u(j().getfullyear),d(j().gethours),v(j().getminutes),O(j().month)}),[k]),Object(n.useEffect)((function(){var e=setInterval((function(){w((function(e){return e+1}))}),5e4);return function(){return clearInterval(e)}}),[]),r.a.createElement("div",{className:"containerHours"},r.a.createElement("h3",null,"Santa Catarina"),r.a.createElement("p",null,a," de ",S," de ",s),r.a.createElement("p",null,f,":",b))}a(119);var k=function(){var e=Object(n.useState)({}),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(0),o=Object(p.a)(l,2),s=o[0],u=o[1];return Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://economia.awesomeapi.com.br/all/USD");case 2:t=e.sent,a=t.data.USD,c(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[s]),Object(n.useEffect)((function(){var e=setInterval((function(){u((function(e){return e+1}))}),5e4);return function(){return clearInterval(e)}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"containerPrice"},r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",{className:"ask"},"Dolar: "),a.ask))))};a(120);var w=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(0),o=Object(p.a)(l,2),s=o[0],u=o[1];return Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(f.a.mark((function e(){var t,a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/forencast");case 2:t=e.sent,a=t.data,n=[],a.forEach((function(e){switch(e.day){case"Mon":n.push({code:e.code,day:"Segunda"});break;case"Tue":n.push({code:e.code,day:"Ter\xe7a"});break;case"Wed":n.push({code:e.code,day:"Quarta"});break;case"Thu":n.push({code:e.code,day:"Quinta"});break;case"Fri":n.push({code:e.code,day:"Sexta"});break;case"Sat":n.push({code:e.code,day:"S\xe1bado"});break;case"Sun":n.push({code:e.code,day:"Domingo"})}})),c(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[s]),Object(n.useEffect)((function(){var e=setInterval((function(){u((function(e){return e+1}))}),5e4);return function(){return clearInterval(e)}}),[]),r.a.createElement("div",{className:"containerWeather"},r.a.createElement(x,null),r.a.createElement("ul",{className:"containerlist"},a.map((function(e){return r.a.createElement("li",{key:100*Math.random(),className:"item-list"},r.a.createElement("p",null,e.day),r.a.createElement("img",{src:"/".concat(e.code,".gif"),alt:e.text}))}))),r.a.createElement(k,null))};a(121);function C(){return Object(n.useEffect)((function(){var e=setInterval((function(){document.getElementById("containerCostumer").style.display="flex",setTimeout((function(){document.getElementById("containerCostumer").style.display="none"}),2e4)}),6e4);return function(){return clearInterval(e)}}),[]),r.a.createElement("div",{id:"containerCostumer",className:"contianerCostumer"},r.a.createElement("img",{className:"logoConstumer",src:"".concat(v.logo),alt:"Logo Costumer"}),r.a.createElement(w,null))}a(122);var I=O()("".concat(v.backend.url));var A=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(p.a)(l,2),s=o[0],u=o[1];return Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/floors");case 2:t=e.sent,a=t.data,c(a.results),u(a.query);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){I.on("update",(function(e){"update-window"===e.action&&window.location.reload()}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement("div",{id:"container"},s.map((function(e){return r.a.createElement("ul",{key:e.NumberFloor,className:"floors"},r.a.createElement("h2",{className:"title darkblue"},e.NumberFloor,"\xba ANDAR"),r.a.createElement(N,{floor:a.filter((function(t){return t.NumberFloor===e.NumberFloor}))}))}))))},D=a(16),F=a(61),U={current:0,create:{value:0,show:"flex"},deleter:{value:6,show:"flex"},update:{value:1,shhow:"flex"}};var B=function(e){return{type:"SET_NAVIGATION",navigation:e}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;return"SET_NAVIGATION"===t.type?Object(F.a)({},t.navigation):e};a(127);var T=function(e,t,a){document.documentElement.style.setProperty("--actionalert-background-color",a),document.getElementById("MsgActionAlert").innerText=e,document.getElementById("ActionAlert").style.display=t,setTimeout((function(){document.getElementById("ActionAlert").style.display="none"}),2500)};a(128);var R=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(p.a)(l,2),s=o[0],u=o[1],i=Object(n.useState)(""),m=Object(p.a)(i,2),E=m[0],h=m[1],b=Object(n.useState)(""),v=Object(p.a)(b,2),y=v[0],S=v[1];function O(){return(O=Object(d.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===a||""===s||""===y||"void"===y){e.next=6;break}return e.next=3,g.post("/user",{username:a,password:s,usertype:y},{headers:{authorization:"Bearer ".concat(sessionStorage.getItem("token"))}});case 3:t=e.sent,"Success in create user"===t.data.status?T("Sucesso em Criar Usu\xe1rio","flex","green"):T("Falha em Criar Usu\xe1rio","flex","red");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{className:"contianerCreateUser"},r.a.createElement("h2",{className:"primary-text-color"},"Criar Usuario"),r.a.createElement("input",{className:"inputs",placeholder:"Nome de usu\xe1rio",type:"text",onChange:function(e){return c(e.target.value)},required:!0}),r.a.createElement("input",{className:"inputs",placeholder:"Senha",type:"password",onChange:function(e){return u(e.target.value)},required:!0}),r.a.createElement("input",{className:"inputs",placeholder:"Confirme sua senha",type:"password",onChange:function(e){return h(e.target.value)},required:!0}),s===E&&""!==s&&""!==E||""!==y?r.a.createElement("p",{id:"verify"},"Senha correta"):r.a.createElement("p",{id:"incorret"},"Senha Incorreta"),r.a.createElement("select",{className:"options-admin inputs",required:!0,onChange:function(e){return S(e.target.value)}},r.a.createElement("option",{value:"void"},"Selecione o tipo da conta"),r.a.createElement("option",{value:"admin"},"Admin"),r.a.createElement("option",{value:"comum"},"Comum")),r.a.createElement("div",null,r.a.createElement("button",{className:"buttons",id:"submit",onClick:function(){return O.apply(this,arguments)}},"Enviar")))};a(129);var P=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(p.a)(l,2),s=o[0],u=o[1];function i(){return(i=Object(d.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===a||""===s){e.next=6;break}return e.next=3,g.put("/user",{username:sessionStorage.getItem("username"),oldPassword:sessionStorage.getItem("password"),password:a},{headers:{authorization:"Bearer ".concat(sessionStorage.getItem("token"))}});case 3:t=e.sent,1===t.data?T("Sucesso em Atualizar Usu\xe1rio","flex","green"):T("Falha em Atualizar Usu\xe1rio","flex","red");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{className:"contianerAlterPassword"},r.a.createElement("h2",{className:"primary-text-color"},"Alterar Senha"),r.a.createElement("input",{className:"inputs",placeholder:"Nova senha",type:"password",onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{className:"inputs",placeholder:"Confirme Nova senha",type:"password",onChange:function(e){return u(e.target.value)}}),a===s&&""!==a&&""!==s?r.a.createElement("p",{id:"verify"},"Senha correta"):r.a.createElement("p",{id:"incorret"},"Senha Incorreta"),r.a.createElement("div",null,r.a.createElement("button",{className:"buttons",onClick:function(){return i.apply(this,arguments)}},"Enviar")))};a(130);var L=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/users",{headers:{authorization:"Bearer ".concat(sessionStorage.getItem("token"))}});case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"contianerListUsers"},r.a.createElement("ul",{id:"list"},r.a.createElement("h2",{className:"primary-text-color"},"Lista de Usuarios"),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"USU\xc1RIO"),r.a.createElement("th",null,"SENHA"),r.a.createElement("th",null,"TIPO")),a.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.UserName),r.a.createElement("td",null,e.UserPassword),r.a.createElement("td",null,e.UserType))})))))},M=(a(131),O()("".concat(v.backend.url)));var q=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(p.a)(l,2),s=o[0],u=o[1],i=Object(n.useState)(""),m=Object(p.a)(i,2),E=m[0],h=m[1];function b(){return(b=Object(d.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===a||""===s||""===E){e.next=10;break}return(t=new FormData).append("file",E,E.name),t.append("room",a),t.append("numberfloor",s),e.next=7,g.post("/room",t,{headers:{authorization:"Bearer ".concat(sessionStorage.getItem("token"))}});case 7:n=e.sent,"Success in create room"===n.data.status?(M.emit("send-image",{data:"send-image"}),T("Sucesso em Criar Sala","flex","green")):T("Falha em Criar Sala","flex","red");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{id:"contianerAddRoom"},r.a.createElement("h2",{className:"primary-text-color"},"Adicionar Sala"),r.a.createElement("input",{className:"inputs",type:"text",placeholder:"N\xfambero da sala",onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{className:"inputs",type:"text",placeholder:"N\xfamero do andar",onChange:function(e){return u(e.target.value)}}),r.a.createElement("input",{type:"file",name:"file",onChange:function(e){return h(e.target.files[0])}}),r.a.createElement("p",{id:"incorret"}),r.a.createElement("div",null,r.a.createElement("button",{className:"buttons",onClick:function(){return b.apply(this,arguments)}},"Enviar")))},J=(a(132),O()("".concat(v.backend.url)));var H=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(p.a)(l,2),s=o[0],u=o[1];function i(){return(i=Object(d.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===a||""===s){e.next=9;break}return(t=new FormData).append("file",s,s.name),t.append("room",a),e.next=6,g.put("/room",t,{headers:{authorization:"Bearer ".concat(sessionStorage.getItem("token"))}});case 6:n=e.sent,1===n.data?(J.emit("send-image",{data:"send-image"}),T("Sucesso em Atualizar Sala","flex","green")):T("Falha em Atualizar Sala","flex","red");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{className:"contianerUpdateRoom"},r.a.createElement("h2",{className:"primary-text-color"},"Atualizar Sala"),r.a.createElement("input",{className:"inputs",type:"text",placeholder:"N\xfamero da sala",onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{type:"file",name:"file",onChange:function(e){return u(e.target.files[0])}}),r.a.createElement("p",{id:"incorret"}),r.a.createElement("div",null,r.a.createElement("button",{className:"buttons",onClick:function(){return i.apply(this,arguments)}},"Enviar")))};var G=function(){sessionStorage.clear(),window.location.assign("/")},Q=(a(133),O()("".concat(v.backend.url)));var V=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1];function l(){return(l=Object(d.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===a){e.next=6;break}return e.next=3,g.delete("/room",{data:{room:a},headers:{authorization:"Bearer ".concat(sessionStorage.getItem("token"))}});case 3:t=e.sent,1===t.data?(Q.emit("send-image",{data:"send-image"}),T("Sucesso em Deletar Sala","flex","green")):T("Falha em Deletar Sala","flex","red");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{className:"contianerDeleteRoom"},r.a.createElement("h2",{className:"primary-text-color"},"Deletar Sala"),r.a.createElement("input",{className:"inputs",type:"text",placeholder:"N\xfamero da sala",onChange:function(e){return c(e.target.value)}}),r.a.createElement("p",{id:"incorret"}),r.a.createElement("div",null,r.a.createElement("button",{className:"buttons",onClick:function(){return l.apply(this,arguments)}},"Enviar")))};a(134);var W=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1];function l(){return(l=Object(d.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===a){e.next=6;break}return e.next=3,g.delete("/user",{data:{username:a},headers:{authorization:"Bearer ".concat(sessionStorage.getItem("token"))}});case 3:t=e.sent,1===t.data?T("Sucesso em Deletar Usu\xe1rio","flex","green"):T("Falha em Deletar Usu\xe1rio","flex","red");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{className:"contianerDeleteUser"},r.a.createElement("h2",{className:"primary-text-color"},"Deletar Usuario"),r.a.createElement("input",{className:"inputs",type:"text",placeholder:"Nome do usu\xe1rio",onChange:function(e){return c(e.target.value)}}),r.a.createElement("p",{id:"incorret"}),r.a.createElement("div",null,r.a.createElement("button",{className:"buttons",onClick:function(){return l.apply(this,arguments)}},"Enviar")))};a(135);var _=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1];function l(){return(l=Object(d.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===a){e.next=6;break}return e.next=3,g.post("/floor",{numberfloor:a},{headers:{authorization:"Bearer ".concat(sessionStorage.getItem("token"))}});case 3:t=e.sent,"Success in create floor"===(null===(n=t.data)||void 0===n?void 0:n.status)?T("Sucesso em Criar Andar","flex","green"):T("Falha em Criar Andar","flex","red");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{className:"contianerCreateFloor"},r.a.createElement("h2",{className:"primary-text-color"},"Criar andar"),r.a.createElement("input",{className:"inputs",type:"text",placeholder:"N\xfamero do andar",onChange:function(e){return c(e.target.value)}}),r.a.createElement("p",{id:"incorret"}),r.a.createElement("div",null,r.a.createElement("button",{className:"buttons",onClick:function(){return l.apply(this,arguments)}},"Enviar")))};a(136);var Y=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1];function l(){return(l=Object(d.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===a){e.next=6;break}return e.next=3,g.delete("/floor",{data:{numberfloor:a},headers:{authorization:"Bearer ".concat(sessionStorage.getItem("token"))}});case 3:t=e.sent,1===t.data?T("Sucesso em Deletar Andar","flex","green"):T("Falha em Deletar Andar","flex","red");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{className:"contianerDeleteFloor"},r.a.createElement("h2",{className:"primary-text-color"},"Deletar andar"),r.a.createElement("input",{className:"inputs",type:"text",placeholder:"N\xfamero do andar",onChange:function(e){return c(e.target.value)}}),r.a.createElement("p",{id:"incorret"}),r.a.createElement("div",null,r.a.createElement("button",{className:"buttons",onClick:function(){return l.apply(this,arguments)}},"Enviar")))};a(137);var K=function(){return r.a.createElement("div",{id:"ActionAlert",className:"containerActionAlert"},r.a.createElement("p",{id:"MsgActionAlert"}))};var X=function(){var e=[r.a.createElement(R,null),r.a.createElement(P,null),r.a.createElement(L,null),r.a.createElement(q,null),r.a.createElement(H,null),r.a.createElement(V,null),r.a.createElement(W,null),r.a.createElement(_,null),r.a.createElement(Y,null)],t=Object(D.b)(),a=Object(D.c)((function(e){return e.Administration})),c=a.current,l=a.create,o=a.deleter,s=a.update,u=Object(n.useState)(c),i=Object(p.a)(u,2),m=i[0],f=i[1];function d(e){switch(e){case"user":t(B({current:0,create:{value:0,show:"flex"},deleter:{value:6,show:"flex"},update:{value:1,show:"flex"}}));break;case"hall":t(B({current:3,create:{value:3,show:"flex"},deleter:{value:5,show:"flex"},update:{value:4,show:"flex"}}));break;case"floor":t(B({current:7,create:{value:7,show:"flex"},deleter:{value:8,show:"flex"},update:{value:4,show:"none"}}));break;case"users":t(B({current:2,create:{value:0,show:"none"},deleter:{value:0,show:"none"},update:{value:0,show:"none"}}))}}function E(e){document.getElementById("container-sidebar").style.left=0==e?"-300px":"0px"}return Object(n.useEffect)((function(){f(c)}),[c]),r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null),r.a.createElement("div",{className:"container-administration"},r.a.createElement("div",{id:"container-sidebar",className:"container-sidebar"},r.a.createElement("header",null,r.a.createElement("h2",null,"PAINEL DE SALAS"),r.a.createElement("i",{className:"fas fa-times",onClick:function(){return E(0)}})),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",{onClick:function(){return d("user")}},r.a.createElement("i",{className:"fas fa-user"}),r.a.createElement("ul",null,r.a.createElement("span",null,"Usuario"))),r.a.createElement("li",{onClick:function(){return d("hall")}},r.a.createElement("i",{className:"fas fa-door-closed"}),r.a.createElement("ul",null,r.a.createElement("span",null,"Sala"))),r.a.createElement("li",{onClick:function(){return d("floor")}},r.a.createElement("i",{className:"fas fa-building"}),r.a.createElement("ul",null,r.a.createElement("span",null,"Andares"))),r.a.createElement("a",{href:"/view"},r.a.createElement("li",null,r.a.createElement("i",{className:"fas fa-solar-panel"}),r.a.createElement("ul",null,r.a.createElement("span",null,"Painel")))),r.a.createElement("li",{onClick:function(){return d("users")}},r.a.createElement("i",{className:"fas fa-users"}),r.a.createElement("ul",null,r.a.createElement("span",null,"Usuarios"))),r.a.createElement("li",null,r.a.createElement("i",{className:"fas fa-palette"}),r.a.createElement("input",{style:{height:"40px",width:"100px",margin:"auto"},type:"color",onChange:function(e){return function(e){localStorage.setItem("theme",e)}(e.target.value)}}))),r.a.createElement("ul",null,r.a.createElement("li",{onClick:function(){return G()}},r.a.createElement("i",{className:"fas fa-sign-out-alt"}),r.a.createElement("span",null,"Sair"))))),r.a.createElement("main",{className:"container-main"},r.a.createElement("nav",{className:"container-navbar"},r.a.createElement("ul",null,r.a.createElement("li",{style:{display:l.show},onClick:function(){return f(l.value)}},r.a.createElement("i",{className:"fas fa-plus"})),r.a.createElement("li",{style:{display:o.show},onClick:function(){return f(o.value)}},r.a.createElement("i",{className:"fas fa-trash"})),r.a.createElement("li",{style:{display:s.show},onClick:function(){return f(s.value)}},r.a.createElement("i",{className:"fas fa-pen"}))),r.a.createElement("ul",{className:"button-show-sidebar"},r.a.createElement("i",{className:"fas fa-bars",onClick:function(){return E(1)}}))),r.a.createElement("div",{className:"main"},e[m]))))};var Z=function(){return sessionStorage.getItem("token")},$=function(e){var t=e.component,a=Object(o.a)(e,["component"]);return r.a.createElement(s.b,Object.assign({},a,{render:function(e){return Z()?r.a.createElement(t,e):r.a.createElement(s.a,{to:{pathname:"/",state:{from:e.location}}})}}))},ee=function(){return r.a.createElement(s.c,{history:i},r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:y}),r.a.createElement(s.b,{exact:!0,path:"/view",component:A}),r.a.createElement($,{exact:!0,path:"/admin",component:X})))},te=a(15),ae=Object(te.b)({Administration:z}),ne=Object(te.c)(ae),re=(a(139),function(){return Object(n.useEffect)((function(){var e=localStorage.getItem("theme");e&&document.documentElement.style.setProperty("--primary-background-color",e)})),r.a.createElement(D.a,{store:ne},r.a.createElement(ee,null))});l.a.render(r.a.createElement(re,null),document.getElementById("root"))},62:function(e,t,a){e.exports=a(140)},84:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.7cdecec2.chunk.js.map