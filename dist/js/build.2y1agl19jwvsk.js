(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var options={props:["content","size","color"],name:"c-button",methods:{clicked:function(t){console.log("clicked"),this.emit("click")}},render:function(t){var n=this,o=n.get("color"),e=n.get("size"),c=n.get("content");console.log("Rendering button");var i="";return o&&(i+=o+" "),e&&(i+=e+" "),t("button",{attrs:{class:i}},{dynamic:1,eventListeners:{click:[function(t){n.get("clicked")(t)}]}},[t("#text",{dynamic:1},c)])}};module.exports=function(t){return console.log(options),t.extend("c-button",options)};

},{}],2:[function(require,module,exports){
var options={props:["options"],name:"prompt",render:function(o){var t=this,n=t.get("options");console.log("Options",n);var r=[];return"string"==typeof n?console.log("I got a string :("):r=n.map(function(t){return o("c-button",{attrs:{content:t.label}},{dynamic:1},[])}),console.log("Rendering prompt"),o("div",{attrs:{class:"prompts"}},{dynamic:1},r)}};module.exports=function(o){o.extend("prompt",options)};

},{}],3:[function(require,module,exports){
var options={props:["options"],name:"tprompt",template:'<div class="t-prompts"><c-button m-for="option in options" content="{{option.label}}" color="red"></c-button></div>'};module.exports=function(o){o.extend("tprompt",options)};

},{}],4:[function(require,module,exports){
!function(t,n){"object"==typeof module&&module.exports?module.exports=n():t.Monx=n()}(this,function(){function t(t){this.state={},o(this,"_state",t.state,{}),o(this,"actions",t.actions,{}),this.instances=[],this.map={},e(this)}var n=null,i=null,s={},e=function(t){var n=null,s=t.instances,e=t.map,o=t.state,r=t._state;for(var a in r)!function(t){Object.defineProperty(o,t,{get:function(){return null!==i&&(void 0===e[i]&&(e[i]={}),e[i][t]=!0),r[t]},set:function(i){r[t]=i;for(var o=0;o<s.length;o++)!0===e[(n=s[o]).name][t]&&n.build()}})}(a)},o=function(t,n,i,s){t[n]=void 0===i?s:i};return t.prototype.dispatch=function(t,n){this.actions[t](this.state,n)},t.prototype.install=function(t){var i=this;t.destroy=function(){var t=i.instances;t.splice(t.indexOf(this),1),n.apply(this,arguments)},this.instances.push(t)},t.init=function(t){var e=t.prototype.render;n=t.prototype.destroy,t.prototype.render=function(){var t=null,n=null,o=null;return void 0!==(o=this.options.store)?(this.data.store=o,o.install(this),!0!==s[t=this.name]?(s[t]=!0,i=t,n=e.apply(this,arguments),i=null):n=e.apply(this,arguments)):n=e.apply(this,arguments),this.render=e,n}},t});

},{}],5:[function(require,module,exports){
!function(e,t){"undefined"==typeof module?e.Moon=t():module.exports=t()}(this,function(){"use strict";function e(){this.cache={},this.target=void 0,this.map={}}function t(t){void 0===t&&(t={}),this.options=t,f(this,"name",t.name,"Root"),this.root=void 0;var n=t.data;this.data=void 0===n?{}:"function"==typeof n?n():n,f(this,"compiledRender",t.render,l),f(this,"hooks",t.hooks,{});var r=t.methods;void 0!==r&&o(this,r),this.events={},this.dom={},this.observer=new e,this.queued=!0;var i=t.computed;void 0!==i&&a(this,i),this.init()}var n={},r={},i={},o=function(e,t){var n=e.data;for(var r in t)!function(t,r){!0===n.hasOwnProperty(t)&&d('Method "'+t+'" has the same key as a data property and will overwrite it'),n[t]=function(){return r.apply(e,arguments)}}(r,t[r])},a=function(e,t){for(var n in t)!function(n){var r=e.observer,i=t[n],o=i.get,a=i.set;Object.defineProperty(e.data,n,{get:function(){var t;return void 0===r.cache[n]?(r.target=n,t=o.call(e),r.target=void 0,r.cache[n]=t):t=r.cache[n],t},set:void 0===a?l:function(t){a.call(e,t)}})}(n)};e.prototype.notify=function(e){var t=this,n=this.map[e];if(void 0!==n)for(var r=0;r<n.length;r++)t.notify(n[r]);var i=this.cache;void 0!==i[e]&&(i[e]=void 0)};var s=function(e){!1===t.config.silent&&console.log(e)},d=function(e){!1===t.config.silent&&console.error("[Moon] ERROR: "+e)},v=function(e){!1===e.queued&&(e.queued=!0,setTimeout(function(){e.build(),e.queued=!1,u(e,"updated")},0))},u=function(e,t){var n=e.hooks[t];void 0!==n&&n.call(e)},f=function(e,t,n,r){e[t]=void 0===n?r:n},l=function(){},c=function(e,t,n){var r=function(e){for(var t=r.handlers,n=0;n<t.length;n++)t[n](e)};r.handlers=n[t],n[t]=r,e.addEventListener(t,r)},p=function(e,t){for(var n in t)c(e,n,t)},h=function(e){var t,n=e.type,r=e.meta;if("#text"===n)t=document.createTextNode(e.value);else{var i=e.children;t=1===r.SVG?document.createElementNS("http://www.w3.org/2000/svg",n):document.createElement(n);for(var o=0;o<i.length;o++)m(i[o],t);var a=r.eventListeners;void 0!==a&&p(t,a),k(t,{},e,e.props)}return e.meta.node=t,t},m=function(e,t){var n=e.meta.component;if(void 0===n){var r=h(e);t.appendChild(r)}else{var i=document.createElement(e.type);t.appendChild(i),C(i,e,n)}},y=function(e,t){var n=e.__moon__;void 0!==n&&n.destroy(),t.removeChild(e)},g=function(e,t,n){var r=e.__moon__;void 0!==r&&r.destroy();var i=t.meta.component;if(void 0===i){var o=h(t);n.replaceChild(o,e)}else C(e,t,i)},b=function(e,t,n,r){return{type:e,props:t,meta:n,children:r}},x=function(e,t){return{type:"#text",value:e,meta:t}},_=function(e,t,n,r){var o;if("#text"===e)return x(n,t);if(void 0!==(o=i[e])){if(!0===o.options.functional)return w(t,r,o);n.component=o}return b(e,t,n,r)};_.emptyVNode=_("#text",{},""),_.renderClass=function(e){if("string"==typeof e)return e;var t="";if(Array.isArray(e))for(var n=0;n<e.length;n++)t+=" "+_.renderClass(e[n]);else if("object"==typeof e)for(var r in e)e[r]&&(t+=" "+r);return t=t.substring(1)},_.renderLoop=function(e,t){var n;if(Array.isArray(e)){var r=e.length;n=new Array(r);for(var i=0;i<r;i++)n[i]=t(e[i],i)}else if("object"==typeof e){n=[];for(var o in e)n.push(t(e[o],o))}else if("number"==typeof e){n=new Array(e);for(var a=0;a<e;a++)n[a]=t(a+1,a)}return n};var w=function(e,t,n){var r=n.options,i=e.attrs,o={},a=r.data;void 0!==a&&(o=a());var s=r.props;if(void 0===s)o=i;else for(var d=0;d<s.length;d++){var v=s[d];o[v]=i[v]}return r.render(_,{data:o,insert:t})},C=function(e,t,n){var r=n.options.props,i=t.props.attrs,o={};if(void 0!==r)for(var a=0;a<r.length;a++){var s=r[a];o[s]=i[s]}var d=new n.CTor({props:o,insert:t.children}),v=t.meta.eventListeners;if(void 0!==v){var u,f=d.events;for(var l in v)void 0===(u=f[l])?f[l]=v[l]:f[l]=v[l].concat(u)}d.mount(e),t.meta.node=d.root},k=function(e,t,r,i){var o=i.attrs;for(var a in o){var s=o[a],v=t[a];!1===s||void 0!==v&&s===v||("xlink:href"===a?e.setAttributeNS("http://www.w3.org/1999/xlink","href",s):e.setAttribute(a,!0===s?"":s))}for(var u in t){var f=o[u];void 0!==f&&!1!==f||e.removeAttribute(u)}var l=i.directives;if(void 0!==l)for(var c in l){var p=n[c];void 0!==p?p(e,l[c],r):d('Could not find directive "'+c+'"')}var h=i.dom;if(void 0!==h)for(var m in h){var y=h[m];e[m]!==y&&(e[m]=y)}},G=function(e,t){if(void 0===e.__moon__)C(e,t,t.meta.component);else{var n=e.__moon__,r=!1,i=n.options.props,o=n.data,a=t.props.attrs;if(void 0!==i)for(var s=0;s<i.length;s++){var d=i[s];o[d]!==a[d]&&(o[d]=a[d],r=!0)}0!==t.children.length&&(n.insert=t.children,r=!0),!0===r&&(n.build(),u(n,"updated"))}},L=function(e,t,n){var r,i=e.nodeName.toLowerCase(),o=t.meta;if(i!==t.type)g(e,t,n);else if("#text"===t.type)e.textContent!==t.value&&(e.textContent=t.value),o.node=e;else if(void 0!==(r=o.component))C(e,t,r);else{o.node=e;for(var a=t.props,s=e.attributes,d={},v=0;v<s.length;v++)d[s[v].name]=s[v].value;k(e,d,t,a);var u=o.eventListeners;void 0!==u&&p(e,u);var f=a.dom;if(void 0===f||void 0===f.innerHTML&&void 0===f.textContent)for(var l=t.children,c=l.length,h=0,b=e.firstChild,x=0===c?void 0:l[0],_=null;void 0!==x||null!==b;)null===b?(_=null,m(l[h],e)):(_=b.nextSibling,h>=c?y(b,e):L(b,l[h],e)),x=++h<c?l[h]:void 0,b=_}},O=function(e,t,n,r,i){var o=e.meta,a=t.meta;if(e.type!==t.type)i.children[n]=t,g(o.node,t,r);else if(void 0!==a.dynamic)if("#text"===t.type){var s=t.value;e.value!==s&&(e.value=s,o.node.textContent=s)}else if(void 0!==a.component)G(o.node,t);else{var d=o.node,v=e.props,u=t.props;k(d,v.attrs,t,u),v.attrs=u.attrs;var f=a.eventListeners;if(void 0!==f){var l=o.eventListeners;for(var c in f)l[c].handlers=f[c]}var p=u.dom;if(void 0===p||void 0===p.innerHTML&&void 0===p.textContent){var h=t.children,b=e.children,x=h.length,_=b.length;if(0===x){for(var w;null!==(w=d.firstChild);)y(w,d);e.children=[]}else if(0===_){for(var C=0;C<x;C++)m(h[C],d);e.children=h}else for(var L,N,A=x>_?x:_,S=0;S<A;S++)S>=x?y(b.pop().meta.node,d):S>=_?(N=h[S],m(N,d),b.push(N)):(L=b[S],N=h[S],L!==N&&O(L,N,S,d,e))}}},N=/\{\{\s*/,A=/\s*\}\}/,S=/[\s\n]/g,T=/<\/?(?:[A-Za-z]+\w*)|<!--/,q=/"[^"]*"|'[^']*'|\d+[a-zA-Z$_]\w*|\.[a-zA-Z$_]\w*|[a-zA-Z$_]\w*:|([a-zA-Z$_]\w*)/g,R=/(?:(?:&(?:lt|gt|quot|amp);)|"|\\|\n)/g,E={"&lt;":"<","&gt;":">","&quot;":'\\"',"&amp;":"&","\\":"\\\\",'"':'\\"',"\n":"\\n"},V=["true","false","undefined","null","NaN","typeof","in","event"],j=["a","abbr","address","article","aside","audio","b","bdi","bdo","blockquote","button","canvas","caption","cite","code","col","colgroup","content","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","element","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","i","iframe","ins","kbd","label","legend","li","main","map","mark","menu","menuitem","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","rtc","ruby","s","samp","section","select","shadow","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video"],M=["area","base","br","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],P=["animate","circle","clippath","cursor","defs","desc","ellipse","filter","font-face","foreignObject","g","glyph","image","line","marker","mask","missing-glyph","path","pattern","polygon","polyline","rect","svg","switch","symbol","text","textpath","tspan","use","view"],z=function(e,t,n){for(var r,i=!1;null!==(r=q.exec(e));){var o=r[1];void 0!==o&&-1===n.indexOf(o)&&(-1===t.indexOf(o)&&n.push(o),i=!0)}return i},Z=function(e,t,n){for(var r=e.length,i=0,o="";i<r;){var a=e.substring(i),s=a.match(N);if(null===s){o+=a;break}var v=s.index;o+=a.substring(0,v),i+=v,i+=s[0].length;var u=e.substring(i),f=u.match(A);if(null===f)d('Expected closing delimiter after "'+u+'"');else{var l=f.index,c=u.substring(0,l);z(c,t,n),o+='" + ('+c+') + "',i+=c.length+f[0].length}}return o},$=function(e){for(var t=e.length,n=[],r=0;r<t;){var i=e[r];if("<"===i)if(r++,"!--"===e.substring(r,r+3)){r+=3;var o=e.indexOf("--\x3e",r);r=-1===o?t:o+3}else{var a={type:"tag",value:""},s="",d={},v=!1,u=!1;for(i=e[r],"/"===i&&(i=e[++r],v=!0);">"!==i&&"/"!==i&&" "!==i;)s+=i,i=e[++r];for(;">"!==i&&("/"!==i||">"!==e[r+1]);)if(!0===S.test(i))i=e[++r];else{for(var f="",l="";"="!==i&&">"!==i&&("/"!==i||">"!==e[r+1]);)f+=i,i=e[++r];if("="===i){i=e[++r];var c=" ";for('"'!==i&&"'"!==i&&" "!==i||(c=i,i=e[++r]);">"!==i&&("/"!==i||">"!==e[r+1]);){if(i===c){i=e[++r];break}l+=i,i=e[++r]}}var p={name:f,value:l,arg:void 0,data:{}},h=f.split(":");2===h.length&&(p.name=h[0],p.arg=h[1]),d[f]=p}"/"===i?(r+=2,u=!0):r++,a.value=s,a.attributes=d,a.closeStart=v,a.closeEnd=u,n.push(a)}else{var m=e.substring(r),y=m.search(T),g=void 0;-1===y?(g=m,r=t):(g=m.substring(0,y),r+=y),0!==g.replace(S,"").length&&n.push({type:"text",value:g.replace(R,function(e){return E[e]})})}}return n},D=function(e){for(var t={type:"ROOT",props:{},children:[]},n=[t],r=0,i=0;i<e.length;i++){var o=e[i];if("text"===o.type)n[r].children.push(o.value);else if("tag"===o.type)if(!0===o.closeStart)o.value!==n[r].type&&d('The element "'+n[r].type+'" was left unclosed'),n.pop(),r--;else{var a=o.value.toLowerCase(),s={type:a,props:o.attributes,children:[]};n[r].children.push(s),!1!==o.closeEnd&&-1!==M.indexOf(a)||(-1!==P.indexOf(a)?s.SVG=!0:-1===j.indexOf(a)&&(s.custom=!0),n.push(s),r++)}}return t.children[0]},H=function(e,t){return e.substring(0,e.length-2)+t},I=function(e,t,n,i){var o=e.props;e.props={attrs:o};var a,s,d,v=!1,u=!1,f=!1,l=[],c="{attrs: {";for(a in o){var p=o[a],h=p.name;void 0!==(s=r[h])&&void 0!==(d=s.beforeGenerate)&&d(p,e,t,i)}var m,y;for(a in o){var g=o[a],b=g.name;if(void 0!==(s=r[b])){if(m=s.afterGenerate,void 0!==m&&(n[b]={prop:g,afterGenerate:m}),void 0!==(y=s.duringPropGenerate)){var x=y(g,e,t,i);0!==x.length&&(u=!0,c+=x)}}else if("m"===b[0]&&"-"===b[1])f=!0,v=!0,l.push(g);else{var _=g.value,w=Z(_,i.exclude,i.dependencies);_!==w&&(v=!0),u=!0,c+='"'+a+'": "'+w+'", '}}if(!1===i.static&&!0===v&&(e.meta.dynamic=1),!0===u?c=H(c,"}"):c+="}",!0===f){c+=", directives: {";for(var C=0;C<l.length;C++){var k=l[C],G=k.value;z(G,i.exclude,i.dependencies),c+='"'+k.name+'": '+(0===G.length?'""':G)+", "}c=H(c,"}")}var L=e.props.dom;if(void 0!==L){c+=", dom: {";for(var O in L)c+='"'+O+'": '+L[O]+", ";c=H(c,"}")}return c+="}, "},K=function(e){var t='"eventListeners": {';for(var n in e){var r=e[n];t+='"'+n+'": [';for(var i=0;i<r.length;i++)t+=r[i]+", ";t=H(t,"], ")}return t=H(t,"}, ")},F=function(e){var t="{",n=!1;for(var r in e)t+="eventListeners"===r?K(e[r]):'"'+r+'": '+e[r]+", ",n=!0;return!0===n?t=H(t,"}, "):t+="}, ",t},B=function(e,t,n,r){if("string"==typeof e){var i=Z(e,r.exclude,r.dependencies),o={};return!1===r.static&&(e!==i?(o.dynamic=1,t.meta.dynamic=1):!0===r.dynamic&&(o.dynamic=1)),'m("#text", '+F(o)+'"'+i+'")'}if("m-insert"===e.type)return!1===r.static&&(t.meta.dynamic=1),t.deep=!0,"instance.insert";var a='m("'+e.type+'", ';r.index=n;var s={};e.meta=s,!1!==r.static||!0!==e.custom&&!0!==r.dynamic||(s.dynamic=1),!0===e.SVG&&(s.SVG=1);var d={},v=I(e,t,d,r),u=e.children,f="[";if(0===u.length)f+="]";else{for(var l=0;l<u.length;l++)f+=B(u[l],e,l,r)+", ";f=H(f,"]")}!0===e.deep&&(f="[].concat.apply([], "+f+")"),1===s.dynamic&&void 0!==t&&(t.meta.dynamic=1),a+=v,a+=F(s),a+=f,a+=")";for(var c in d){var p=d[c];a=p.afterGenerate(p.prop,a,e,t,r)}return a},J=function(e){for(var t={index:0,dynamic:!1,static:!1,exclude:V,dependencies:[]},n=B(e,void 0,0,t),r=t.dependencies,i="",o=0;o<r.length;o++){var a=r[o];i+="var "+a+' = instance.get("'+a+'");'}var s="var instance = this;"+i+"return "+n+";";try{return new Function("m",s)}catch(e){return d("Could not create render function"),l}},Q=function(e){var t=$(e),n=D(t);return J(n)};t.prototype.get=function(e){var t=this.observer,n=t.map,r=t.target;return void 0!==r&&(void 0===n[e]?n[e]=[r]:-1===n[e].indexOf(r)&&n[e].push(r)),!1===this.data.hasOwnProperty(e)&&d('The item "'+e+'" was referenced but not defined'),this.data[e]},t.prototype.set=function(e,t){var n=this.observer;if("object"==typeof e){var r=this.data;for(var i in e)r[i]=e[i],n.notify(i)}else this.data[e]=t,n.notify(e);v(this)},t.prototype.destroy=function(){this.off(),delete this.root.__moon__,this.root=void 0,this.queued=!0,u(this,"destroyed")},t.prototype.on=function(e,t){var n=this.events,r=n[e];void 0===r?n[e]=[t]:r.push(t)},t.prototype.off=function(e,t){if(void 0===e)this.events={};else if(void 0===t)this.events[e]=[];else{var n=this.events[e],r=n.indexOf(t);n.splice(r,1)}},t.prototype.emit=function(e,t){var n=this.events,r={};void 0!==t&&(r=t),r.type=e;var i,o=n[e],a=n["*"];if(void 0!==o)for(i=0;i<o.length;i++)o[i](r);if(void 0!==a)for(i=0;i<a.length;i++)a[i](r)},t.prototype.mount=function(e){var n=this.root="string"==typeof e?document.querySelector(e):e;null===n&&d("Element "+this.options.root+" not found"),n.__moon__=this,f(this,"template",this.options.template,n.outerHTML),this.compiledRender===l&&(this.compiledRender=t.compile(this.template)),this.queued=!1,this.build(),u(this,"mounted")},t.prototype.render=function(){return this.compiledRender(_)},t.prototype.build=function(){var e=this.root,t=this.render(),n=this.dom;if(void 0===n.meta){if(e.nodeName.toLowerCase()===t.type)L(e,t,e.parentNode);else{var r=h(t);e.parentNode.replaceChild(r,e),r.__moon__=this,this.root=r}this.dom=t}else if(t.type===n.type)O(n,t,0,e.parentNode,{});else{var i=h(t);e.parentNode.replaceChild(i,e),i.__moon__=this,this.root=i}},t.prototype.init=function(){s("======= Moon ======="),u(this,"init");var e=this.options.root;void 0!==e&&this.mount(e)},t.config={silent:"undefined"==typeof console},t.version="0.11.0",t.util={noop:l,log:s,error:d,m:_},t.use=function(e,n){e.init(t,n)},t.compile=function(e){return Q(e)},t.nextTick=function(e){setTimeout(e,0)},t.directive=function(e,t){n["m-"+e]=t},t.extend=function(e,n){function r(e){if(t.apply(this,[n]),void 0===e)this.insert=[];else{var r=e.root,i=e.props;if(this.insert=e.insert,void 0!==i){var o=this.data;for(var a in i)o[a]=i[a]}void 0!==r&&this.mount(r)}}return void 0!==n.name?e=n.name:n.name=e,void 0!==n.data&&"function"!=typeof n.data&&d("In components, data must be a function returning an object"),r.prototype=Object.create(this.prototype),r.prototype.constructor=r,r.prototype.init=function(){var e=this.options,n=e.template;this.template=n,this.compiledRender===l&&(this.compiledRender=t.compile(n)),u(this,"init")},i[e]={CTor:r,options:n},r};var U=/\.|\[/,W={stop:"event.stopPropagation();",prevent:"event.preventDefault();",ctrl:"if(event.ctrlKey === false) {return null;};",shift:"if(event.shiftKey === false) {return null;};",alt:"if(event.altKey === false) {return null;};",enter:"if(event.keyCode !== 13) {return null;};"},X=function(e,t,n){var r=n.meta,i=r.eventListeners;void 0===i&&(i=r.eventListeners={});var o=i[e];void 0===o?i[e]=[t]:o.push(t)},Y=function(e,t,n){var r=n.props.dom;void 0===r&&(n.props.dom=r={}),r[e]=t};return r["m-if"]={beforeGenerate:function(e,t,n,r){for(var i=n.children,o=r.index,a=o+1;a<i.length;a++){var s=i[a];if("string"!=typeof s){var d=e.data;void 0!==s.props["m-else"]&&(d.elseNode=[a,s],i.splice(a,1),!1===r.dynamic&&(r.dynamic=!0,d.ifSetDynamic=!0));break}}t.meta.dynamic=1},afterGenerate:function(e,t,n,r,i){var o=e.value,a=e.data,s="m.emptyVNode",d=a.elseNode;return z(o,i.exclude,i.dependencies),void 0!==d&&(s=B(d[1],r,d[0],i),!0===a.ifSetDynamic&&(i.dynamic=!1)),o+" ? "+t+" : "+s}},r["m-for"]={beforeGenerate:function(e,t,n,r){n.deep=!0;var i=e.value.split(" in "),o=i[0],a=i[1],s=r.exclude;e.data.forInfo=[a,o,s],r.exclude=s.concat(o.split(",")),z(a,s,r.dependencies),t.meta.dynamic=1},afterGenerate:function(e,t,n,r,i){var o=e.data.forInfo;return i.exclude=o[2],"m.renderLoop("+o[0]+", function("+o[1]+") {return "+t+";})"}},r["m-on"]={beforeGenerate:function(e,t,n,r){var i=e.arg.split("."),o=i.shift(),a=e.value;-1===a.indexOf("(")&&(a+="(event)"),z(a,r.exclude,r.dependencies);for(var s="",v=0;v<i.length;v++){var u=i[v],f=W[u];void 0!==f?s+=f:d('Event modifier "'+u+'" not found')}t.meta.dynamic=1,X(o,"function(event) {"+s+a+";}",t)}},r["m-bind"]={beforeGenerate:function(e,t,n,r){var i=e.value;z(i,r.exclude,r.dependencies);var o,a,s=i.search(U);-1!==s&&(o=i.substring(0,s),a=i.substring(s),i='instance.get("'+o+'")'+a);var d=i,v=i,u="";u=-1===s?'function(event) {instance.set("'+d+'", event.target.value);}':'function(event) {var boundValue = instance.get("'+o+'");boundValue'+a+' = event.target.value;instance.set("'+o+'", boundValue);}',t.meta.dynamic=1,X("input",u,t),Y("value",v,t)}},r["m-literal"]={duringPropGenerate:function(e,t,n,r){var i=e.arg.split("."),o=i.shift(),a=e.value;return z(a,r.exclude,r.dependencies)&&(t.meta.dynamic=1),"dom"===i[0]?(Y(o,a,t),""):"class"===o?'"class": m.renderClass('+a+"), ":'"'+o+'": '+a+", "}},r["m-static"]={beforeGenerate:function(e,t,n,r){!1===r.static&&(e.data.staticSet=!0,r.static=!0)},afterGenerate:function(e,t,n,r,i){return!0===e.data.staticSet&&(i.static=!1),t}},r["m-mask"]={},n["m-show"]=function(e,t,n){e.style.display=t?"":"none"},t});

},{}],6:[function(require,module,exports){
var Moon=require("./moon"),Monx=require("./monx");Moon.use(Monx);var store=new Monx({state:{pendingAgree:!0,agreeText:"Yes",prompts:[{label:"Adam Jensen",scene:"adam"},{label:"JC Denton",scene:"jc"}],pendingPrompts:!0},actions:{agree:function(e){e.pendingAgree=!1,e.agreeText="should be hidden"},addPrompts:function(e,o){e.prompts=o,e.pendingPrompts=!0,console.log("Added prompts",o)},clearPrompts:function(e){e.prompts=[],e.pendingPrompts=!1}}});require("./components/button")(Moon),require("./components/prompt")(Moon),require("./components/tprompt")(Moon);var app=new Moon({root:"#app",store:store,methods:{agree:function(e){console.log("adding prompts"),store.dispatch("addPrompts",[{label:"Adam Jensen",scene:"adam"},{label:"JC Denton",scene:"jc"},{label:"Bob Page",scene:"Bob"},{label:"Janus",scene:"janus"}]),console.log("root agree called with",e),store.dispatch("agree")}}});

},{"./components/button":1,"./components/prompt":2,"./components/tprompt":3,"./monx":4,"./moon":5}]},{},[6]);