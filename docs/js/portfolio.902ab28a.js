(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["portfolio"],{"02f4":function(t,e,n){var o=n("4588"),a=n("be13");t.exports=function(t){return function(e,n){var i,r,s=String(a(e)),c=o(n),l=s.length;return c<0||c>=l?t?"":void 0:(i=s.charCodeAt(c),i<55296||i>56319||c+1===l||(r=s.charCodeAt(c+1))<56320||r>57343?t?s.charAt(c):i:t?s.slice(c,c+2):r-56320+(i-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var o=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?o(t,e).length:1)}},"0bfb":function(t,e,n){"use strict";var o=n("cb7c");t.exports=function(){var t=o(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},1926:function(t,e,n){},"1c61":function(t,e,n){"use strict";var o=n("8016"),a=n.n(o);a.a},"214f":function(t,e,n){"use strict";n("b0c5");var o=n("2aba"),a=n("32e9"),i=n("79e5"),r=n("be13"),s=n("2b4c"),c=n("520a"),l=s("species"),u=!i(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),m=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=s(t),d=!i(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),f=d?!i(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[p](""),!e}):void 0;if(!d||!f||"replace"===t&&!u||"split"===t&&!m){var h=/./[p],g=n(r,p,""[t],function(t,e,n,o,a){return e.exec===c?d&&!a?{done:!0,value:h.call(e,n,o)}:{done:!0,value:t.call(n,e,o)}:{done:!1}}),v=g[0],b=g[1];o(String.prototype,t,v),a(RegExp.prototype,p,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"21e3":function(t,e,n){},"28a5":function(t,e,n){"use strict";var o=n("aae3"),a=n("cb7c"),i=n("ebd6"),r=n("0390"),s=n("9def"),c=n("5f1b"),l=n("520a"),u=n("79e5"),m=Math.min,p=[].push,d="split",f="length",h="lastIndex",g=4294967295,v=!u(function(){RegExp(g,"y")});n("214f")("split",2,function(t,e,n,u){var b;return b="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[f]||2!="ab"[d](/(?:ab)*/)[f]||4!="."[d](/(.?)(.?)/)[f]||"."[d](/()()/)[f]>1||""[d](/.?/)[f]?function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!o(t))return n.call(a,t,e);var i,r,s,c=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,d=void 0===e?g:e>>>0,v=new RegExp(t.source,u+"g");while(i=l.call(v,a)){if(r=v[h],r>m&&(c.push(a.slice(m,i.index)),i[f]>1&&i.index<a[f]&&p.apply(c,i.slice(1)),s=i[0][f],m=r,c[f]>=d))break;v[h]===i.index&&v[h]++}return m===a[f]?!s&&v.test("")||c.push(""):c.push(a.slice(m)),c[f]>d?c.slice(0,d):c}:"0"[d](void 0,0)[f]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,o){var a=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,a,o):b.call(String(a),n,o)},function(t,e){var o=u(b,t,this,e,b!==n);if(o.done)return o.value;var l=a(t),p=String(this),d=i(l,RegExp),f=l.unicode,h=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(v?"y":"g"),_=new d(v?l:"^(?:"+l.source+")",h),j=void 0===e?g:e>>>0;if(0===j)return[];if(0===p.length)return null===c(_,p)?[p]:[];var y=0,w=0,x=[];while(w<p.length){_.lastIndex=v?w:0;var C,k=c(_,v?p:p.slice(w));if(null===k||(C=m(s(_.lastIndex+(v?0:w)),p.length))===y)w=r(p,w,f);else{if(x.push(p.slice(y,w)),x.length===j)return x;for(var A=1;A<=k.length-1;A++)if(x.push(k[A]),x.length===j)return x;w=y=C}}return x.push(p.slice(y)),x}]})},3686:function(t,e,n){},"3c0d":function(t,e,n){},"47cb":function(t,e,n){"use strict";var o=n("21e3"),a=n.n(o);a.a},"520a":function(t,e,n){"use strict";var o=n("0bfb"),a=RegExp.prototype.exec,i=String.prototype.replace,r=a,s="lastIndex",c=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t[s]||0!==e[s]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(r=function(t){var e,n,r,u,m=this;return l&&(n=new RegExp("^"+m.source+"$(?!\\s)",o.call(m))),c&&(e=m[s]),r=a.call(m,t),c&&r&&(m[s]=m.global?r.index+r[0].length:e),l&&r&&r.length>1&&i.call(r[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(r[u]=void 0)}),r}),t.exports=r},5974:function(t,e,n){"use strict";var o=n("3686"),a=n.n(o);a.a},"5f1b":function(t,e,n){"use strict";var o=n("23c6"),a=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==o(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"66f9":function(t,e,n){},6778:function(t,e,n){"use strict";var o=n("66f9"),a=n.n(o);a.a},"743e":function(t,e,n){"use strict";var o=n("1926"),a=n.n(o);a.a},8016:function(t,e,n){},8163:function(t,e,n){},8781:function(t,e,n){"use strict";var o=n("a79c"),a=n.n(o);a.a},a629:function(t,e,n){},a79c:function(t,e,n){},aae3:function(t,e,n){var o=n("d3f4"),a=n("2d95"),i=n("2b4c")("match");t.exports=function(t){var e;return o(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==a(t))}},af54:function(t,e,n){"use strict";var o=n("8163"),a=n.n(o);a.a},b0c5:function(t,e,n){"use strict";var o=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:o!==/./.exec},{exec:o})},c9e5:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("secondary-header-component",{class:{"slide-top":t.loading}},[t._v("Portfolio")]),n("secondary-sub-component",{class:{"slide-top":t.loading}},[t._v("These are my favorite projects I've worked on for the past few years.")]),n("projects-component")],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"secondary-header"},[t._t("default")],2)},r=[],s={},c=s,l=(n("af54"),n("2877")),u=Object(l["a"])(c,i,r,!1,null,null,null),m=u.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("sub",{staticClass:"secondary-sub"},[t._v(" \n    // "),t._t("default")],2)},d=[],f={},h=f,g=(n("1c61"),Object(l["a"])(h,p,d,!1,null,null,null)),v=g.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"portfolio"},[n("div",{staticClass:"row"},[n("project-component",{class:{"slide-left":t.loading},attrs:{project:t.projects.adventurecord}}),n("project-component",{class:{"slide-right":t.loading},attrs:{project:t.projects.w3il}})],1),n("div",{staticClass:"row"},[n("project-component",{class:{"slide-left":t.loading},attrs:{project:t.projects.portfolio}}),n("project-component",{class:{"slide-right":t.loading},attrs:{project:t.projects.arcore}})],1),n("div",{staticClass:"row"},[n("project-component",{class:{"slide-left":t.loading},attrs:{project:t.projects.music}}),n("project-component",{class:{"slide-right":t.loading},attrs:{project:t.projects.books}})],1),n("div",{staticClass:"row"},[n("project-component",{class:{"slide-left":t.loading},attrs:{project:t.projects.rating}}),n("project-component",{class:{"slide-right":t.loading},attrs:{project:t.projects.profile}})],1)])},_=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-1-of-2 project"},[n("div",{staticClass:"project__item"},[n("img",{staticClass:"project__img",attrs:{src:"img/"+t.project.img,alt:"Project Image"}}),n("div",{staticClass:"project__overlay"},[n("div",{staticClass:"project__buttons"},[n("button",{staticClass:"project__button",attrs:{href:"#"},on:{click:function(e){t.showProject=!0}}},[n("font-awesome-icon",{attrs:{icon:"eye"}}),t._v("\n                    View Project\n                ")],1)])])]),n("div",{staticClass:"project__background",class:{"project__background--show":t.showProject}},[n("div",{staticClass:"project__modal",class:{"project__modal--show":t.showProject}},[n("button",{staticClass:"project__close",on:{click:function(e){t.showProject=!1}}},[n("font-awesome-icon",{attrs:{icon:"times"}})],1),n("div",{staticClass:"project__left"},[n("img",{staticClass:"project__img--modal",attrs:{src:"img/"+t.project.img,alt:"Project Image"}})]),n("div",{staticClass:"project__right"},[n("div",{staticClass:"project__label"},[t._v("Project")]),n("h3",{staticClass:"project__name"},[t._v(t._s(t.project.name))]),n("ul",{staticClass:"project__technologies"},t._l(t.project.technologies,function(e,o){return n("li",{key:o,staticClass:"project__technology"},[t._v(t._s(e.name))])}),0),n("div",{staticClass:"project__label"},[t._v("About")]),n("p",{staticClass:"project__summary"},[t._v("\n                    "+t._s(t.project.summary)+"\n                ")]),n("a",{staticClass:"project__button project__button--modal",attrs:{href:t.project.demo,target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:"eye"}}),t._v(" Demo")],1),"private"==t.project.code?n("button",{staticClass:"project__button project__button--modal",attrs:{href:"#",disabled:""}},[n("font-awesome-icon",{attrs:{icon:"code"}}),t._v(" Private")],1):n("a",{staticClass:"project__button project__button--modal",attrs:{href:t.project.code,target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:"code"}}),t._v(" Code")],1)])])])])},y=[],w=n("e4c3"),x={props:["project"],components:{ButtonComponent:w["a"]},data:function(){return{showProject:!1}}},C=x,k=(n("47cb"),Object(l["a"])(C,j,y,!1,null,null,null)),A=k.exports,E={components:{ProjectComponent:A},data:function(){return{loading:!0,projects:{adventurecord:{name:"Waiter",summary:" This is one of my favorite projects, we were trying to help the owners of big restaurants and coffee shops with customers service. \n\n This app allow the waiter to take the customer order directly on a tablette or a phone and the app will send this order to the kitchen at the moment by sending a request to the printer which will print a ticket.",img:"blackwaiter.png",demo:"https://play.google.com/store/apps/details?id=procleanmobility.asmtunis.com.proresteauwaiter&hl=en",code:"private",technologies:[{name:"Android"},{name:"Java"},{name:"Xml"},{name:"Kotlin"},{name:"PHP"},{name:"Laravel"},{name:"SqlServer"},{name:"Gitlab"},{name:"CI/CD"},{name:"SonarQube"},{name:"UI/UX"}]},w3il:{name:"Dux Mobile",summary:"This was the biggest project i have worked on yet. The goal was to help commercials in their daily work, this project gave me the chance to try many new features and technologies. \n\n I bounced many hats during this project and worked a lot on things like MVVM design pattern, rxJava, live data, view models, WebSocket for realtime notifications and more.",img:"duxmobile.png",demo:"https://photos.app.goo.gl/GbqD2zX1PMq6hi4p8",code:"private",technologies:[{name:"Android"},{name:"Java"},{name:"Xml"},{name:"Kotlin"},{name:"PHP"},{name:"Laravel"},{name:"SqlServer"},{name:"Gitlab"},{name:"CI/CD"},{name:"SonarQube"},{name:"UI/UX"}]},portfolio:{name:"Android Flat Dialog",summary:"The idea behind this project was to contribute to the android cummunity and give something back. i decided to create a simple but beautiful dialog and i called it flat dialog. \n\n The full process of making this library was a total joy and a great experience for me.",img:"flatdialog.png",demo:"https://github.com/mejdi14/Flat-Dialog-Android",code:"https://github.com/mejdi14/Flat-Dialog-Android",technologies:[{name:"Android"},{name:"Java"},{name:"Xml"},{name:"Gitlab"},{name:"Jitpack"},{name:"UI/UX"}]},books:{name:"Books swipe exemple",summary:"my first open source project with kotlin, i learned with this project how to work with complex animations and how to use git flow and kraken to boost my work",img:"preview.gif",demo:"https://github.com/mejdi14/BooksSwipe",code:"https://github.com/mejdi14/BooksSwipe",technologies:[{name:"Android"},{name:"Kotlin"},{name:"Xml"},{name:"Github"},{name:"Jitpack"},{name:"UI/UX"},{name:"Constraint Layout"},{name:"Git Flow"},{name:"Git kraken"},{name:"Github Actions"}]},profile:{name:"Android Profile Design",summary:"the goal with this project was simple, i had to create a pretty profile page with constraint layout and use motion layout to make it more alive",img:"profile.jpg",demo:"https://github.com/mejdi14/ProfileDesign",code:"https://github.com/mejdi14/ProfileDesign",technologies:[{name:"Android"},{name:"Java"},{name:"Xml"},{name:"Github"},{name:"Jitpack"},{name:"UI/UX"},{name:"Constraint Layout"},{name:"Motion layout"},{name:"ShapeableImageView"},{name:"circle-ci"}]},rating:{name:"Rate My App",summary:"an open source project which helps you asking the user to rate your application",img:"feedback.gif",demo:"https://github.com/mejdi14/AndroidFeedBack",code:"https://github.com/mejdi14/AndroidFeedBack",technologies:[{name:"Android"},{name:"Java"},{name:"Xml"},{name:"Github"},{name:"Jitpack"},{name:"UI/UX"},{name:"Constraint Layout"},{name:"Github Actions"}]},music:{name:"Music Design App",summary:"this is a music application which shows my favorite music list !",img:"music.png",demo:"https://github.com/mejdi14/music-app-design",code:"https://github.com/mejdi14/music-app-design",technologies:[{name:"Android"},{name:"Java"},{name:"Xml"},{name:"Github"},{name:"Jitpack"},{name:"UI/UX"},{name:"Constraint Layout"},{name:"Motion layout"},{name:"shared items"},{name:"Github Actions"}]},arcore:{name:"Green Forest ARCore",summary:"now you can make your house look live an beautiful using android ARCore !",img:"forest.png",demo:"https://www.youtube.com/watch?v=zb6w-m6mEz8",code:"https://github.com/mejdi14/ARGreenForest",technologies:[{name:"Android"},{name:"Java"},{name:"Xml"},{name:"Github"},{name:"ARCore"},{name:"Github Actions"}]}}}},mounted:function(){var t=this;setTimeout(function(){t.loading=!1},400)}},P=E,S=(n("743e"),Object(l["a"])(P,b,_,!1,null,null,null)),I=S.exports,G={components:{SecondaryHeaderComponent:m,SecondarySubComponent:v,ProjectsComponent:I},data:function(){return{loading:!0}},mounted:function(){var t=this;setTimeout(function(){t.loading=!1},200)}},R=G,X=(n("5974"),Object(l["a"])(R,o,a,!1,null,null,null));e["default"]=X.exports},cd37:function(t,e,n){"use strict";var o=n("3c0d"),a=n.n(o);a.a},e4c3:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"button",attrs:{to:"/portfolio"}},[n("button",{staticClass:"button__top"},[t._t("default")],2),n("button",{staticClass:"button_bottom"},[t._t("default")],2)])},a=[],i={},r=i,s=(n("cd37"),n("2877")),c=Object(s["a"])(r,o,a,!1,null,null,null);e["a"]=c.exports},f26d:function(t,e,n){"use strict";var o=n("a629"),a=n.n(o);a.a},f820:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"about",class:{rotate:t.loading}},[n("primary-header-component",[n("span",[t._v("Yo, it's ")]),n("span",[t._v(" Mejdi Hafiane")])]),n("primary-sub-component",{attrs:{text:"I'm an android developer currently based in Sfax, Tunisia"}}),n("primary-sub-component",{attrs:{text:"Hit me up and let's create something special"}}),n("button-component",[t._v("View Projects")])],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"primary-header"},[t._t("default")],2)},r=[],s={},c=s,l=(n("8781"),n("2877")),u=Object(l["a"])(c,i,r,!1,null,null,null),m=u.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("sub",{staticClass:"primary-sub"},t._l(t.textArray,function(e,o){return n("div",{key:o,staticClass:"primary-sub__word",on:{mouseover:function(e){return t.wordActive(e.target)}}},[n("div",{staticClass:"primary-sub__top"},[t._v(t._s(e))]),n("div",{staticClass:"primary-sub__bottom"},[t._v(t._s(e))])])}),0)},d=[],f=(n("28a5"),{props:["text"],data:function(){return{textArray:[]}},created:function(){this.textArray=this.text.split(" ")},methods:{wordActive:function(t){(t.classList.contains("primary-sub__top")||t.classList.contains("primary-sub__bottom"))&&(t.parentNode.classList.add("primary-sub__word--active"),setTimeout(function(){t.parentNode.classList.remove("primary-sub__word--active")},2e3))}}}),h=f,g=(n("6778"),Object(l["a"])(h,p,d,!1,null,null,null)),v=g.exports,b=n("e4c3"),_={components:{PrimaryHeaderComponent:m,PrimarySubComponent:v,ButtonComponent:b["a"]},data:function(){return{loading:!0}},mounted:function(){var t=this;setTimeout(function(){t.loading=!1},200)}},j=_,y=(n("f26d"),Object(l["a"])(j,o,a,!1,null,null,null));e["default"]=y.exports}}]);
//# sourceMappingURL=portfolio.902ab28a.js.map