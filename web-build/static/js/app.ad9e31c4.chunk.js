(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{100:function(e,t,n){e.exports=n.p+"static/media/layoutTop.323f05d4.png"},101:function(e,t,n){e.exports=n.p+"static/media/layoutBot.9dbeff66.png"},102:function(e,t,n){e.exports=n.p+"static/media/layout.d533b682.png"},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return be}));var r=n(0),o=n(241),a=n(242),i=n(5),s=n.n(i),c=n(11),l=n.n(c),d=n(153),u=n.n(d).a.create({baseURL:"https://api.github.com"});function p(e){var t;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l.a.awrap(u.get("/users/"+e));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:return n.prev=7,n.t0=n.catch(0),console.log(n.t0),n.abrupt("return",{});case 11:case"end":return n.stop()}}),null,null,[[0,7]],Promise)}var b,x,g,f=n(17),j=n(2),h=n(31),m=n(35),O=n(43),y=n(36),v=n(34),w=n(26),C=n.n(w),z=n(27),S=z.b.img(b||(b=C()(["\n  z-index: -1;\n  position: fixed;\n"]))),k=z.b.img(x||(x=C()(["\n  z-index: 4;\n  position: fixed;\n"]))),T=z.b.img(g||(g=C()(["\n  z-index: 4;\n  position: fixed;\n  top: 600px;\n"]))),B=n(3),A=B.a.create({container:{flex:1,backgroundColor:"#fafafa",alignItems:"center",marginBottom:20,maxHeight:567,maxWidth:286,marginLeft:"35%"},layout:{zIndex:4,position:"absolute"},botao:{backgroundColor:"#8A07DA",marginTop:20,padding:10,alignItems:"center",justifyContent:"center",borderRadius:8,width:"90%"},textoBotao:{fontWeight:"bold",fontSize:16,color:"#fff",backgroundColor:"#8A07DA"},entrada:{borderWidth:2,borderColor:"#ddd",paddingHorizontal:20,fontSize:16,color:"#444",marginTop:40,borderRadius:8,height:44,width:"90%"},imagemArea:{alignItems:"center",justifyContent:"center",width:150,height:150,borderRadius:75,marginTop:-75,backgroundColor:"#FFF"},imagem:{width:120,height:120,borderRadius:60},fundo:{backgroundColor:"#C4C4C4",width:"100%",height:156},textoNome:{fontSize:21,fontWeight:"600",color:"#45565F",padding:15},textoEmail:{fontSize:17,color:"#717E84",marginTop:5},seguidoresArea:{width:"100%",alignItems:"center",justifyContent:"center",flexDirection:"row"},seguidores:{margin:20,alignItems:"center"},seguidoresNumero:{color:"#8A07DA",fontSize:15},seguidoresTexto:{color:"#95A8B2",fontSize:13,marginTop:5},repositorios:{color:"#8A07DA",fontSize:15,fontWeight:"400"}}),I=n(100),R=n.n(I),P=n(101),D=n.n(P),W=n(102),F=n.n(W),N=n(4);function E(e){var t=e.navigation,n=Object(r.useState)(""),o=s()(n,2),a=o[0],i=o[1],c=Object(r.useState)({}),d=s()(c,2),u=d[0],b=d[1];return Object(N.jsx)(v.a,{children:Object(N.jsxs)(j.a,{style:A.container,children:[Object(N.jsx)(k,{src:R.a}),Object(N.jsx)(T,{src:D.a}),Object(N.jsx)(S,{src:F.a}),Object(N.jsxs)(j.a,{style:{marginTop:40,alignItems:"center"},children:[(null==u?void 0:u.login)&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(j.a,{style:A.fundo}),Object(N.jsx)(j.a,{style:A.imagemArea,children:Object(N.jsx)(h.a,{source:{uri:u.avatar_url},style:A.imagem})}),Object(N.jsx)(f.a,{style:A.textoNome,children:u.name}),Object(N.jsx)(f.a,{style:A.textoEmail,children:u.email}),Object(N.jsxs)(j.a,{style:A.seguidoresArea,children:[Object(N.jsxs)(j.a,{style:A.seguidores,children:[Object(N.jsx)(f.a,{style:A.seguidoresNumero,children:u.followers}),Object(N.jsx)(f.a,{style:A.seguidoresTexto,children:"Seguidores"})]}),Object(N.jsxs)(j.a,{style:A.seguidores,children:[Object(N.jsx)(f.a,{style:A.seguidoresNumero,children:u.following}),Object(N.jsx)(f.a,{style:A.seguidoresTexto,children:"Seguindo"})]})]}),Object(N.jsx)(m.a,{onPress:function(){return t.navigate("Repositorios",{id:u.login})},children:Object(N.jsx)(f.a,{style:A.repositorios,children:"Ver os reposit\xf3rios"})})]}),Object(N.jsx)(O.a,{placeholder:"Busque por um usu\xe1rio",autoCapitalize:"",style:A.entrada,value:a,onChangeText:i}),Object(N.jsx)(m.a,{style:A.botao,onPress:function(){var e;return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(p(a));case 2:(e=t.sent)?b(e):(y.a.alert("Usuario n\xe3o econtrado"),b({}));case 4:case"end":return t.stop()}}),null,null,null,Promise)},children:Object(N.jsx)(f.a,{style:A.textoBotao,children:"Buscar"})})]})]})})}var H=n(61),L=B.a.create({container:{flex:1,backgroundColor:"#fafafa",alignItems:"center",marginBottom:20,maxHeight:567,maxWidth:270,marginLeft:"38%"},repositoriosTexto:{fontSize:21,fontWeight:"600",color:"#45565F",marginTop:20},titulo:{fontSize:20,fontWeight:"bold",marginBottom:20,color:"#fff",textAlign:"center"},repositorio:{width:"100%",height:80,backgroundColor:"#FFF",borderBottomWidth:1,borderBottomColor:"#ddd",paddingHorizontal:20,paddingVertical:10},repositorioNome:{fontSize:16,color:"#444",fontWeight:"bold"},repositorioData:{fontSize:14,color:"#999"},botao:{backgroundColor:"#8A07DA",marginTop:20,marginBottom:30,padding:10,alignItems:"center",justifyContent:"center",borderRadius:8,width:"90%"},textoBotao:{fontSize:16,color:"#FFF"}});function V(e){var t;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l.a.awrap(u.get("/users/"+e+"/repos"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:return n.prev=7,n.t0=n.catch(0),console.log(n.t0),n.abrupt("return",[]);case 11:case"end":return n.stop()}}),null,null,[[0,7]],Promise)}function J(e,t,n,r){return l.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,l.a.awrap(u.put("/users/"+r+"/repos",{name:t,data:n,postId:e,id:r}));case 3:return o.abrupt("return","sucesso");case 6:return o.prev=6,o.t0=o.catch(0),console.log(o.t0),o.abrupt("return","erro");case 10:case"end":return o.stop()}}),null,null,[[0,6]],Promise)}function U(e,t,n){return l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l.a.awrap(u.post("/repos/",{name:t,data:n,postId:e}));case 3:return r.abrupt("return","sucesso");case 6:return r.prev=6,r.t0=r.catch(0),console.log(r.t0),r.abrupt("return","erro");case 10:case"end":return r.stop()}}),null,null,[[0,6]],Promise)}function _(e){return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.awrap(u.delete("/repos/"+e));case 3:return t.abrupt("return","sucesso");case 6:return t.prev=6,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return","erro");case 10:case"end":return t.stop()}}),null,null,[[0,6]],Promise)}var q,Y,G,K,M,Q,X,Z,$=n(33),ee=(z.b.div(q||(q=C()(["\n  max-height: 567px;\n  max-width: 286px;\n  display: flex;\n  flex-direction: column;\n  border: 2px solid black;\n  border-bottom: none;\n  margin-top: 50px;\n  align-items: center;\n"]))),z.b.img(Y||(Y=C()(["\n  z-index: -1;\n  position: fixed;\n  right: 35%;\n"])))),te=z.b.img(G||(G=C()(["\n  z-index: 4;\n  position: fixed;\n  right: 35%;\n"]))),ne=z.b.img(K||(K=C()(["\n  z-index: 4;\n  position: fixed;\n  top: 600px;\n  right: 35%;\n"]))),re=(z.b.div(M||(M=C()(["\n  width: 300px;\n  background-color: white;\n  z-index: 4;\n  height: 1000px;\n  position: fixed;\n  top: 663px;\n"]))),z.b.button(Q||(Q=C()(["\n  border: none;\n  background-color: white;\n  :active {\n    transform: translateY(4px);\n  }\n"]))));z.b.div(X||(X=C()(["\n  margin-top: 60px;\n"]))),z.b.img(Z||(Z=C()(["\n  width: 24px;\n  height: 24px;\n"])));function oe(e){var t=e.route,n=e.navigation,o=Object(r.useState)([]),a=s()(o,2),i=a[0],c=a[1],d=Object($.k)();return Object(r.useEffect)((function(){var e;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(V(t.params.id));case 2:e=n.sent,c(e);case 4:case"end":return n.stop()}}),null,null,null,Promise)}),[d]),Object(N.jsxs)(j.a,{style:L.container,children:[Object(N.jsx)(te,{src:R.a}),Object(N.jsx)(ne,{src:D.a}),Object(N.jsx)(ee,{src:F.a}),Object(N.jsxs)(j.a,{style:{marginTop:60,alignItems:"center"},children:[Object(N.jsx)(re,{onClick:function(){return n.navigate("Principal")},children:"Voltar"}),Object(N.jsxs)(f.a,{style:L.repositoriosTexto,children:[i.length," reposit\xf3rios criados"]}),Object(N.jsx)(H.a,{data:i,style:{width:"100%"},keyExtractor:function(e){return e.id},renderItem:function(e){var t=e.item;return Object(N.jsxs)(j.a,{style:L.repositorio,children:[Object(N.jsx)(f.a,{style:L.repositorioNome,children:t.name}),Object(N.jsxs)(f.a,{style:L.repositorioData,children:["Atualizado em ",t.updated_at]})]})}})]})]})}n(128);var ae=B.a.create({container:{flex:1,backgroundColor:"#fafafa",alignItems:"center",justifyContent:"center"},botao:{backgroundColor:"#8A07DA",marginTop:20,padding:10,alignItems:"center",justifyContent:"center",borderRadius:8,width:"90%"},textoBotao:{fontWeight:"bold",fontSize:16,color:"#fff"},entrada:{borderWidth:2,borderColor:"#ddd",paddingHorizontal:20,fontSize:16,color:"#444",marginTop:20,borderRadius:8,height:44,width:"90%"}});function ie(e){var t=e.route,n=e.navigation,o=Object(r.useState)(""),a=s()(o,2),i=a[0],c=a[1],d=Object(r.useState)(""),u=s()(d,2),p=u[0],b=u[1];return Object(N.jsxs)(j.a,{style:ae.container,children:[Object(N.jsx)(O.a,{placeholder:"Nome do reposit\xf3rio",autoCapitalize:"none",style:ae.entrada,value:i,onChangeText:c}),Object(N.jsx)(O.a,{placeholder:"Data de Cria\xe7\xe3o",autoCapitalize:"none",style:ae.entrada,value:p,onChangeText:b}),Object(N.jsx)(m.a,{style:ae.botao,onPress:function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.awrap(U(t.params.id,i,p));case 2:"sucesso"===e.sent?(y.a.alert("Repositorio Criado!"),n.goBack()):y.a.alert("Erro ao criar repositorio");case 4:case"end":return e.stop()}}),null,null,null,Promise)},children:Object(N.jsx)(f.a,{style:ae.textoBotao,children:"Criar"})})]})}var se=B.a.create({container:{flex:1,backgroundColor:"#fafafa",alignItems:"center",justifyContent:"center"},botao:{backgroundColor:"#8A07DA",marginTop:50,padding:10,alignItems:"center",justifyContent:"center",borderRadius:8,width:"90%"},textoBotao:{fontWeight:"bold",fontSize:16,color:"#fff"},entrada:{borderWidth:2,borderColor:"#ddd",paddingHorizontal:20,fontSize:16,color:"#444",marginTop:20,borderRadius:8,height:44,width:"90%"}});function ce(e){var t=e.route,n=e.navigation,o=Object(r.useState)(t.params.item.name),a=s()(o,2),i=a[0],c=a[1],d=Object(r.useState)(t.params.item.data),u=s()(d,2),p=u[0],b=u[1];return Object(N.jsxs)(j.a,{style:se.container,children:[Object(N.jsx)(O.a,{placeholder:"Nome do reposit\xf3rio",autoCapitalize:"none",style:se.entrada,value:i,onChangeText:c}),Object(N.jsx)(O.a,{placeholder:"Data de Cria\xe7\xe3o",autoCapitalize:"none",style:se.entrada,value:p,onChangeText:b}),Object(N.jsx)(m.a,{onPress:function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.awrap(J(t.params.item.postId,i,p,t.params.item.id));case 2:"sucesso"===e.sent?(y.a.alert("Repositorio atualizado!"),n.goBack()):y.a.alert("Erro ao atualizar repositorio");case 4:case"end":return e.stop()}}),null,null,null,Promise)},style:se.botao,children:Object(N.jsx)(f.a,{style:se.textoBotao,children:"Salvar"})}),Object(N.jsx)(m.a,{onPress:function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.awrap(_(t.params.item.id));case 2:"sucesso"===e.sent?(y.a.alert("Repositorio Deletado!"),n.goBack()):y.a.alert("Erro ao deletar repositorio");case 4:case"end":return e.stop()}}),null,null,null,Promise)},style:[se.botao,{backgroundColor:"#DD2B2B",marginTop:10}],children:Object(N.jsx)(f.a,{style:se.textoBotao,children:"Deletar"})})]})}var le,de=Object(a.a)();function ue(){return Object(N.jsx)(o.a,{children:Object(N.jsxs)(de.Navigator,{children:[Object(N.jsx)(de.Screen,{name:"Principal",options:{title:"Perfil"},component:E,options:{headerShown:!1}}),Object(N.jsx)(de.Screen,{name:"Repositorios",options:{headerShown:!1},component:oe}),Object(N.jsx)(de.Screen,{name:"CriarRepositorio",options:{title:"Criar Reposit\xf3rio"},component:ie}),Object(N.jsx)(de.Screen,{name:"InfoRepositorio",options:{title:"Reposit\xf3rio Info"},component:ce})]})})}var pe=Object(z.a)(le||(le=C()(["\ndiv{\n  background-color:#ffff\n}"])));function be(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(ue,{}),Object(N.jsx)(pe,{})]})}},170:function(e,t,n){e.exports=n(234)}},[[170,1,2]]]);
//# sourceMappingURL=app.ad9e31c4.chunk.js.map