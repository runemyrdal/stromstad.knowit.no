(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{138:function(e,t,n){"use strict";n.r(t);var r=n(6),i=n.n(r),a=n(52),o=n.n(a),c=n(143),l=n(7),s=n(0),d=n.n(s),u=n(148),p=n(149),b=n(158),g=(n(73),n(51),n(4)),m=n.n(g),h=n(144),j=n(146),f=n(152),O={grey:Object(l.c)("text-align:center;color:black;background-color:",h.a.greyLight,";border:1px solid ",h.a.greyLight,";"),white:Object(l.c)("border:1px solid ",h.a.greyLight,";background-color:white;color:black;@media (",j.a.medium,"){border-left:none;border-right:none;}")},v=Object(c.a)("div",{target:"e1sb8vfm0"})("margin-top:1rem;display:flex;flex-flow:row;&:last-child{margin-bottom:",f.a.large,";}@media (",j.a.medium,"){flex-flow:column;}"),y=Object(c.a)("span",{target:"e1sb8vfm1"})("align-self:center;width:10%;@media (",j.a.medium,"){align-self:center;width:100%;text-align:center;margin-bottom:1rem;}"),k=Object(c.a)("div",{target:"e1sb8vfm2"})("padding:1rem 0;width:90%;@media (",j.a.medium,"){padding:1rem 0;font-weight:bold;width:100%;}",function(e){return e.background?O[e.background]:""},";"),w=function(e){var t=e.collection;return Object(l.d)(v,null,Object(l.d)(y,null,t.time),Object(l.d)(k,{background:"grey"},Object(l.d)("span",null,t.title)))};w.propTypes={collection:m.a.object};var x=w,S=n(49),z=n.n(S),D=(n(50),function(e){var t=Object.assign({},e);return Object(l.d)("svg",z()({},t,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 125"}),Object(l.d)("polygon",{points:"80.9,32.3 77.2,28.5 50,55.7 22.8,28.5 19.1,32.3 46.3,59.5 19.1,86.6 22.8,90.4 50,63.2 77.2,90.4 80.9,86.6 53.7,59.5 "}))}),C=Object(l.c)("margin:1rem auto;color:black;&:focus,&:hover{color:",h.a.knowit.green,";}"),T=Object(c.a)("span",{target:"e9878xm0"})({name:"1vfp8d",styles:"margin-top:0.2rem;margin-left:0.2rem;display:block;"}),I=function(e){return e.length>100?e.substring(0,100)+"... <b>Les mer</b>":e},q=function(e){var t=e.showDescription,n=e.toggleShowDescription,r=e.description;return r.length<101?Object(l.d)(T,null,r):t?Object(l.d)(T,null,Object(l.d)("div",{dangerouslySetInnerHTML:{__html:r}}),Object(l.d)(b.a,{appearance:"stripped",onClick:n,css:C},Object(l.d)(D,null))):Object(l.d)(T,{onClick:n},Object(l.d)("div",{dangerouslySetInnerHTML:{__html:I(r)}}))};q.propTypes={showDescription:m.a.bool.isRequired,toggleShowDescription:m.a.func.isRequired,description:m.a.string.isRequired},q.defaultProps={description:""};var R=q,L=(n(155),n(142)),_=n.n(L),H=n(159),M=Object(c.a)("img",{target:"e5nxz3p0"})("height:100px;border-bottom:3px solid ",h.a.primary,";"),B={name:"13gzsmf",styles:"width:60px;height:60px;"},P={name:"17lcynd",styles:"font-size:0.8rem;display:block;font-weight:bold;color:black;&:hover,&:focus{color:black;}"},F=Object(c.a)("span",{target:"e5nxz3p1"})({name:"1baulvz",styles:"display:inline-block;"}),J=function(e){var t=e.speaker,n=e.numberOfSpeakers,r=e.talkId;return Object(l.d)("div",null,Object(l.d)(F,null,t.pic?Object(l.d)(M,{src:Object(L.withPrefix)("/static/pics/"+t.pic)}):Object(l.d)(H.a,{css:B})),Object(l.d)(_.a,{css:P,to:"/speakers#"+r},n>1?t.name+" med flere":t.name))};J.propTypes={speaker:m.a.object.isRequired,numberOfSpeakers:m.a.number.isRequired,talkId:m.a.string.isRequired};var A=J,E=Object(c.a)("div",{target:"e1psjpcb0"})("padding:1rem 1rem;text-align:center;font-weight:bold;width:100%;background-color:",h.a.greyLight,";margin:1rem -1rem;"),G=Object(c.a)("div",{target:"e1psjpcb1"})({name:"t9vckh",styles:"margin-top:3rem;display:flex;"}),K=Object(c.a)("strong",{target:"e1psjpcb2"})({name:"4513st",styles:"margin-left:0.2rem;"}),N=Object(c.a)("div",{target:"e1psjpcb3"})({name:"1c4p325",styles:"display:inline-block;margin-left:2rem;width:85%;"}),Q=Object(c.a)("strong",{target:"e1psjpcb4"})({name:"1pzgj2l",styles:"display:inline-block;text-align:center;width:15%;"}),U=function(e){function t(){var t;return(t=e.call(this)||this).state={showDescription:!1},t.toggleShowDescription=t.toggleShowDescription.bind(o()(o()(t))),t}i()(t,e);var n=t.prototype;return n.toggleShowDescription=function(){this.setState(function(e){return{showDescription:!e.showDescription}})},n.render=function(){var e=this.props.talkId;if("pause"===e)return Object(l.d)(E,null,Object(l.d)("span",null,"Pause"));var t=u.a.talks[e];return Object(l.d)(G,null,Object(l.d)(Q,null,t.speakers&&0!==t.speakers.length?Object(l.d)(A,{speaker:t.speakers[0],numberOfSpeakers:t.speakers.length,talkId:e}):null),Object(l.d)(N,null,Object(l.d)(K,null,t.title),Object(l.d)(R,{description:t.description,showDescription:this.state.showDescription,toggleShowDescription:this.toggleShowDescription})))},t}(d.a.Component);U.propTypes={talkId:m.a.string.isRequired};var V=U,W=Object(c.a)("div",{target:"e1mofeog0"})("flex:1 ",function(e){return e.double?"50%":"28%"},";padding:1rem;background-color:white;border:1px solid ",h.a.greyLight,";@media (",j.a.medium,"){flex:1 100%;border-left:none;border-right:none;}"),X=Object(c.a)("span",{target:"e1mofeog1"})("color:",h.a.knowit.green,";font-size:0.9rem;"),Y=Object(c.a)("span",{target:"e1mofeog2"})("font-size:1.2rem;float:right;color:",h.a.knowit.green,";"),Z=function(e){var t=e.collectionTitle,n=e.entry;e.columnSize;return Object(l.d)(W,{double:2===n.columnSize},Object(l.d)(X,null,t),Object(l.d)(Y,null,n.room),n.slots.map(function(e,t){return Object(l.d)(V,{key:e+"_"+t,talkId:e})}))};Z.propTypes={collectionTitle:m.a.string,entry:m.a.object};var $=Z,ee=Object(c.a)("div",{target:"e16k5mvk0"})("display:flex;flex-flow:row;flex-wrap:wrap;justify-content:space-between;width:90%;@media (",j.a.medium,"){width:100%;}"),te=function(e){var t=e.entries;e.collectionTitle;return Object(l.d)(ee,null,t.map(function(e,t){return Object(l.d)($,{key:e.room,entry:e})}))};te.propTypes={entries:m.a.array,collectionTitle:m.a.string};var ne=te,re=function(e){var t=e.collection;return Object(l.d)(v,null,Object(l.d)(y,null,t.time),Object(l.d)(ne,{entries:t.entries,collectionTitle:t.title}))};re.propTypes={collection:m.a.object};var ie=re,ae=function(e){var t=e.village;return t?Object(l.d)("li",null,Object(l.d)(_.a,{to:t.path},t.name)):null};ae.propTypes={village:m.a.shape({path:m.a.string.isRequired,name:m.a.string.isRequired})};var oe=ae,ce=function(e){var t=e.villages;return t&&0!==t.length?Object(l.d)("ul",null,t.map(function(e){return Object(l.d)(oe,{key:e.path,village:e})})):null};ce.propTypes={villages:m.a.arrayOf(m.a.shape({path:m.a.string.isRequired,name:m.a.string.isRequired}))};var le=ce,se=Object(c.a)("span",{target:"eo6h9pr0"})({name:"1cuk4ah",styles:"padding:2rem;display:inline-block;"}),de=function(e){var t=e.collection;return Object(l.d)(v,null,Object(l.d)(y,null,t.time),Object(l.d)(k,{background:"white"},Object(l.d)(se,null,t.title),Object(l.d)(le,{villages:t.villages})))};de.propTypes={collection:m.a.object};var ue=de,pe=function(e){var t=e.collection;return t?t.isBreak?Object(l.d)(x,{collection:t}):t.entries?Object(l.d)(ie,{collection:t}):Object(l.d)(ue,{collection:t}):null};pe.propTypes={collection:m.a.object};var be=pe,ge=n(151),me=n(150),he={name:"1rnkgfk",styles:"margin:2rem auto;"},je=Object(l.c)("margin:0 auto;z-index:1;@media (",j.a.medium,"){display:none;}"),fe=Object(c.a)("select",{target:"e12dz6ze0"})("border-radius:0;height:4rem;width:100%;background-color:white;margin:0 auto;display:none;@media (",j.a.medium,"){display:block;}"),Oe=Object(c.a)("h1",{target:"e12dz6ze1"})({name:"13o6z6d",styles:"margin:0 auto;"}),ve=Object(l.c)("padding:0.8rem 3rem;background-color:",h.a.primary,";text-decoration:none;color:white;font-size:1.2rem;border:2px solid white;&:hover,&:focus{color:",h.a.primary,";background-color:white;}"),ye=function(e){function t(){var t;return(t=e.call(this)||this).onDayClick=t.onDayClick.bind(o()(o()(t))),t.onSelectChange=t.onSelectChange.bind(o()(o()(t))),t.state={activeIndex:0},t}i()(t,e);var n=t.prototype;return n.onDayClick=function(e,t){e.preventDefault(),this.setState({activeIndex:t})},n.onSelectChange=function(e){this.setState({activeIndex:e.target.value})},n.render=function(){var e=this,t=u.a&&u.a.schedules[this.state.activeIndex]?u.a.schedules[this.state.activeIndex]:void 0;return t&&t.day?Object(l.d)(ge.c,{backgroundColor:h.a.greyLightest},Object(l.d)(ge.b,null,Object(l.d)(Oe,null,"Skjema"),Object(l.d)(p.a,{css:he},Object(l.d)(me.a,{to:"/",css:ve},"Forside"),Object(l.d)(me.a,{to:"/speakers/",css:ve},"Talere"))),Object(l.d)(p.a,{css:je},u.a.schedules.map(function(t,n){return Object(l.d)(b.a,{key:t.day,appearance:e.state.activeIndex===n?"active":"",onClick:function(t){return e.onDayClick(t,n)}},t.day)})),Object(l.d)(fe,{onChange:this.onSelectChange},u.a.schedules.map(function(t,n){return Object(l.d)("option",{key:t.day,value:n,onClick:function(t){return e.onDayClick(t,n)}},t.day)})),Object(l.d)(ge.a,{backgroundColor:h.a.greyLightest},t.collections.map(function(e,t){return Object(l.d)(be,{key:e.title+"_"+t,collection:e})}))):Object(l.d)("span",null,"Her skjedde noe feil gitt...")},t}(d.a.Component);t.default=ye},155:function(e,t,n){var r=n(25).f,i=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in i||n(17)&&r(i,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},159:function(e,t,n){"use strict";var r=n(49),i=n.n(r),a=(n(50),n(7));n(0);t.a=function(e){var t=Object.assign({},e);return Object(a.d)("svg",i()({},t,{fill:"#000000",height:"48",viewBox:"0 0 24 24",width:"48",xmlns:"http://www.w3.org/2000/svg"}),Object(a.d)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}),Object(a.d)("path",{d:"M0 0h24v24H0z",fill:"none"}))}}}]);
//# sourceMappingURL=component---src-pages-schedule-js-72c4be365b2e12d7051d.js.map