(function(t){function e(e){for(var r,i,a=e[0],c=e[1],u=e[2],p=0,d=[];p<a.length;p++)i=a[p],o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-jsnake/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"162e":function(t,e,n){},"46a1":function(t,e,n){},5467:function(t,e,n){"use strict";var r=n("162e"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],i=(n("6762"),n("2fdb"),n("ac6a"),n("456d"),n("28a5"),n("2f62")),a=n("8c4f"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Vue.JSnake")]),n("p",[t._v("A game of Snake made with Vue.JS.")]),n("button",{staticClass:"nes-btn",on:{click:function(e){return t.startGame()}}},[t._v("Start")]),t._m(0)])},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"link-badges"},[n("a",{staticClass:"nes-icon github is-large",attrs:{href:"https://github.com/AymericPost/vue-jsnake",target:"blank"}})])}],l=(n("8e6e"),n("bd86")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Installed CLI Plugins")]),t._m(1),n("h3",[t._v("Essential Links")]),t._m(2),n("h3",[t._v("Ecosystem")]),t._m(3)])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),t._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],h={name:"HelloWorld",props:{msg:String}},f=h,g=(n("b0df"),n("2877")),m=Object(g["a"])(f,p,d,!1,null,"0495e2ba",null),v=m.exports;function b(t,e){var n=Object.keys(t);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(t)),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(n,!0).forEach(function(e){Object(l["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var k={name:"GameMenu",components:{HelloWorld:v},methods:y({},Object(i["b"])(["startGame"]))},O=k,j=(n("d48e"),Object(g["a"])(O,c,u,!1,null,"28e20e1f",null)),x=j.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("grid",{key:t.gameTick,attrs:{xMax:t.xMax,yMax:t.yMax}})],1)},w=[],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{style:t.gridSetup},t._l(parseInt(t.xMax)*parseInt(t.yMax),function(e){return n("cell",{key:e,attrs:{coords:t.coordsCalculator(e)}})}),1)])},M=[],E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{key:t.cellKey,style:t.displayStyle,domProps:{innerHTML:t._s(t.displayHTML)}})])},I=[];function S(t,e){var n=Object.keys(t);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(t)),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(n,!0).forEach(function(e){Object(l["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var T={name:"cell",props:["coords"],computed:D({},Object(i["c"])({grid:function(t){return t.grid},snake:function(t){return t.snake},gameTick:function(t){return t.gameTick}}),{cellKey:function(){return this.gameTick+" "+this.coords},cellInfo:function(){return this.grid[this.coords]},getSnake:function(){return this.snake},displayStyle:function(){if(this.cellInfo){var t={height:"100%",width:"100%","font-size":"8px","text-align":"center","background-color":"white"};return this.cellInfo.occupied?t["background-color"]="green":this.cellInfo.food&&(t["background-color"]="yellow"),t}return{}},displayHTML:function(){if(this.cellInfo){if(this.cellInfo.occupied){var t=this.snake.coords.indexOf(this.coords);return 0==t?"<span class='nes-text'>T</span>":t==this.snake.coords.length-1?"<span class='nes-text'>H</span>":"<span class='nes-text'>S</span>"}return this.cellInfo.food?"<span class='nes-text'>"+this.cellInfo.food+"</span>":this.coords}return""}})},C=T,G=(n("5467"),Object(g["a"])(C,E,I,!1,null,"078ffbc3",null)),L=G.exports;function $(t,e){var n=Object.keys(t);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(t)),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n}function F(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?$(n,!0).forEach(function(e){Object(l["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var U={name:"grid",components:{cell:L},props:["xMax","yMax"],data:function(){return{}},methods:{coordsCalculator:function(t){var e=t%parseInt(this.xMax),n=parseInt(this.yMax)-Math.floor(t/parseInt(this.yMax));return(0==e?parseInt(this.xMax):e)+"-"+(0==e?n+1:n)}},computed:F({},Object(i["c"])(["inGame"]),{gridSetup:function(){for(var t="",e="",n=0;n<parseInt(this.xMax);n++)t+="36px ";for(var r=0;r<parseInt(this.yMax);r++)e+="36px ";return{display:"grid",padding:"1%","justify-content":"center","grid-template-columns":t,"grid-template-rows:":e,"background-color":"gray","grid-gap":"2px"}}}),beforeMount:function(){this.inGame||B.push("/")}},R=U,H=(n("9b80"),Object(g["a"])(R,P,M,!1,null,"492184c6",null)),A=H.exports;function J(t,e){var n=Object.keys(t);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(t)),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n}function K(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?J(n,!0).forEach(function(e){Object(l["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):J(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var Y={name:"game",components:{grid:A},computed:K({},Object(i["c"])(["xMax","yMax","gameTick"]))},z=Y,W=Object(g["a"])(z,_,w,!1,null,"4172fa83",null),V=W.exports;r["a"].use(a["a"]);var B=new a["a"]({routes:[{path:"/",name:"GameMenu",component:x},{path:"/game",name:"Game",component:V}]});r["a"].use(i["a"]);var N=new i["a"].Store({state:{inGame:!1,paused:!1,lost:!1,keyMapping:{38:"directionUp",90:"directionUp",39:"directionRight",68:"directionRight",40:"directionDown",83:"directionDown",37:"directionLeft",81:"directionLeft",32:"togglePause",27:"togglePause",80:"togglePause",19:"togglePause"},xMax:16,yMax:16,gameTick:0,msPerGameTick:1e3,grid:{},snake:{coords:[],direction:"",ateFood:!1}},getters:{getGridCell:function(t,e){return t.grid[e]}},mutations:{directionUp:function(){var t=this.state.snake.coords[this.state.snake.coords.length-1].split("-").map(function(t){return parseInt(t)}),e=[t[0],t[1]+1].join("-");this.state.grid[e]&&this.state.grid[e].occupied||(this.state.snake.direction=e)},directionRight:function(){var t=this.state.snake.coords[this.state.snake.coords.length-1].split("-").map(function(t){return parseInt(t)}),e=[t[0]+1,t[1]].join("-");this.state.grid[e]&&this.state.grid[e].occupied||(this.state.snake.direction=e)},directionDown:function(){var t=this.state.snake.coords[this.state.snake.coords.length-1].split("-").map(function(t){return parseInt(t)}),e=[t[0],t[1]-1].join("-");this.state.grid[e]&&this.state.grid[e].occupied||(this.state.snake.direction=e)},directionLeft:function(){var t=this.state.snake.coords[this.state.snake.coords.length-1].split("-").map(function(t){return parseInt(t)}),e=[t[0]-1,t[1]].join("-");this.state.grid[e]&&this.state.grid[e].occupied||(this.state.snake.direction=e)},togglePause:function(){console.log(this.state.paused?"RESUME":"PAUSE"),this.state.paused=!this.state.paused},setKeyboardAZERTY:function(){this.state.keyMapping={38:"directionUp",90:"directionUp",39:"directionRight",68:"directionRight",40:"directionDown",83:"directionDown",37:"directionLeft",81:"directionLeft",32:"togglePause",27:"togglePause",80:"togglePause",19:"togglePause"}},setKeyboardQWERTY:function(){this.state.keyMapping={38:"directionUp",87:"directionUp",39:"directionRight",68:"directionRight",40:"directionDown",83:"directionDown",37:"directionLeft",65:"directionLeft",32:"togglePause",27:"togglePause",80:"togglePause",19:"togglePause"}},gameInit:function(){this.state.inGame=!0,this.state.lost=!1,this.state.gameTick=0;for(var t=1;t<this.state.xMax*this.state.yMax+1;t++){var e=t%this.state.xMax,n=this.state.yMax-Math.floor(t/this.state.yMax);this.state.grid[(0==e?this.state.xMax:e)+"-"+(0==e?n+1:n)]={occupied:!1,food:null}}var r=[Math.floor(this.state.xMax/2),Math.floor(this.state.yMax/2)];this.state.snake.coords=[r[0]-1+"-"+r[1],r[0]+"-"+r[1],r[0]+1+"-"+r[1]],this.state.snake.direction=r[0]+2+"-"+r[1]},nextGameTick:function(){this.state.gameTick++,this.state.snake.ateFood=!1;try{if(this.state.grid[this.state.snake.direction].occupied)console.error('snakePointerException: "why do you hit yourself?"'),console.log("You lost!"),this.state.lost=!0;else{var t=this.state.snake.coords[this.state.snake.coords.length-1].split("-").map(function(t){return parseInt(t)}),e=this.state.snake.direction.split("-").map(function(t){return parseInt(t)}),n=[e[0]-t[0],e[1]-t[1]];this.state.grid[e.join("-")]&&this.state.grid[e.join("-")].food&&(this.state.snake.ateFood=!0,this.state.grid[e.join("-")].food=null),this.state.snake.coords.push(this.state.snake.direction),this.state.snake.direction=[e[0]+n[0],e[1]+n[1]].join("-"),this.state.snake.ateFood||this.state.snake.coords.shift()}}catch(r){console.error('snakeOutOfBoundException: "you cannot eat the cosmic event horizon"'),console.log("You lost!"),this.state.lost=!0}},occupiedCheck:function(){var t=this,e=Object.keys(this.state.grid);e.forEach(function(e){t.state.grid[e].occupied=!1}),this.state.snake.coords.forEach(function(e){try{t.state.grid[e].occupied=!0}catch(n){console.log(n),t.state.lost=!0}})},generateFood:function(){var t=this.state.snake.coords[0];while(this.state.grid[t].occupied)t=Math.floor(Math.random()*this.state.xMax)+1+"-"+(Math.floor(Math.random()*this.state.yMax)+1);this.state.grid[t].food="F"}},actions:{handleUserInput:function(t,e){var n=Object.keys(this.state.keyMapping);try{this.state.paused?(this.commit("togglePause"),![32,27,80,19].includes(e.keyCode)&&n.includes(String(e.keyCode))&&this.commit(this.state.keyMapping[e.keyCode])):n.includes(String(e.keyCode))&&this.commit(this.state.keyMapping[e.keyCode])}catch(r){console.log(r.message)}},startGame:function(){var t=this;if(!this.state.inGame){this.commit("gameInit"),this.commit("occupiedCheck"),this.commit("generateFood");var e=setInterval(function(){t.state.lost?(t.state.inGame=!1,t.state.paused=!1,clearInterval(e)):!t.state.inGame||t.state.paused||t.state.lost||(t.commit("nextGameTick"),t.commit("occupiedCheck"),t.state.snake.ateFood&&t.commit("generateFood"))},this.state.msPerGameTick);B.push("/game")}}}}),Q={mounted:function(){window.addEventListener("keydown",function(t){N.dispatch("handleUserInput",t)})}},Z=Q,q=(n("5c0b"),Object(g["a"])(Z,o,s,!1,null,null,null)),X=q.exports;r["a"].config.productionTip=!1,new r["a"]({router:B,store:N,render:function(t){return t(X)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(t,e,n){},"9b80":function(t,e,n){"use strict";var r=n("46a1"),o=n.n(r);o.a},a183:function(t,e,n){},acc2:function(t,e,n){},b0df:function(t,e,n){"use strict";var r=n("a183"),o=n.n(r);o.a},d48e:function(t,e,n){"use strict";var r=n("acc2"),o=n.n(r);o.a}});
//# sourceMappingURL=app.31031887.js.map