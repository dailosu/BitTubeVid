(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/1FC":function(n,e,t){"use strict";var l=Array.isArray;e.a=l},"3UD+":function(n,e){n.exports=function(n){if(!n.webpackPolyfill){var e=Object.create(n);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},"5iG2":function(n,e,t){"use strict";e.a=function(n,e,t){var l=-1,i=n.length;e<0&&(e=-e>i?0:i+e),(t=t>i?i:t)<0&&(t+=i),i=e>t?0:t-e>>>0,e>>>=0;for(var r=Array(i);++l<i;)r[l]=n[l+e];return r}},EUcb:function(n,e,t){"use strict";e.a=function(n){return null!=n&&"object"==typeof n}},G8aS:function(n,e,t){"use strict";var l=t("8M4i"),i=t("EUcb");e.a=function(n){return"symbol"==typeof n||Object(i.a)(n)&&"[object Symbol]"==Object(l.a)(n)}},LFf6:function(n,e,t){"use strict";var l=t("ylTp"),i=t("twO/"),r=t("/1FC"),u=t("G8aS"),o=l.a?l.a.prototype:void 0,a=o?o.toString:void 0;e.a=function n(e){if("string"==typeof e)return e;if(Object(r.a)(e))return Object(i.a)(e,n)+"";if(Object(u.a)(e))return a?a.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}},SiRs:function(n,e,t){"use strict";var l=t("IzLi"),i=t("G8aS"),r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt;e.a=function(n){if("number"==typeof n)return n;if(Object(i.a)(n))return NaN;if(Object(l.a)(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=Object(l.a)(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(r,"");var t=o.test(n);return t||a.test(n)?c(n.slice(2),t?2:8):u.test(n)?NaN:+n}},ed90:function(n,e,t){"use strict";var l=t("mrSG"),i=t("Kj3r"),r=t("/uUt"),u=t("XNiG"),o=t("LFf6"),a=t("5iG2"),c=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),d=function(n){return c.test(n)},s=t("IzLi"),f=t("8M4i"),p=t("EUcb"),g=t("ovuK"),h=t("xutz"),v=h.a&&h.a.isRegExp,b=v?Object(g.a)(v):function(n){return Object(p.a)(n)&&"[object RegExp]"==Object(f.a)(n)},m="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",x="\\ud83c[\\udffb-\\udfff]",C="[^\\ud800-\\udfff]",y="(?:\\ud83c[\\udde6-\\uddff]){2}",O="[\\ud800-\\udbff][\\udc00-\\udfff]",w="(?:"+m+"|"+x+")?",M="[\\ufe0e\\ufe0f]?"+w+"(?:\\u200d(?:"+[C,y,O].join("|")+")[\\ufe0e\\ufe0f]?"+w+")*",j="(?:"+[C+m+"?",m,y,O,"[\\ud800-\\udfff]"].join("|")+")",P=RegExp(x+"(?="+x+")|"+j+M,"g"),R="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",S="[^\\ud800-\\udfff]",T="(?:\\ud83c[\\udde6-\\uddff]){2}",k="[\\ud800-\\udbff][\\udc00-\\udfff]",I="(?:"+R+"|\\ud83c[\\udffb-\\udfff])?",N="[\\ufe0e\\ufe0f]?"+I+"(?:\\u200d(?:"+[S,T,k].join("|")+")[\\ufe0e\\ufe0f]?"+I+")*",_="(?:"+[S+R+"?",R,T,k,"[\\ud800-\\udfff]"].join("|")+")",E=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+_+N,"g"),V=t("SiRs"),L=t("efZk"),A=/\w*$/,D=function(n,e){var t=30,l="...";if(Object(s.a)(e)){var i="separator"in e?e.separator:i;t="length"in e?function(n){var e=function(n){return n?(n=Object(V.a)(n))===1/0||n===-1/0?17976931348623157e292*(n<0?-1:1):n==n?n:0:0===n?n:0}(n),t=e%1;return e==e?t?e-t:e:0}(e.length):t,l="omission"in e?Object(o.a)(e.omission):l}var r=(n=Object(L.a)(n)).length;if(d(n)){var u=function(n){return d(n)?function(n){return n.match(E)||[]}(n):function(n){return n.split("")}(n)}(n);r=u.length}if(t>=r)return n;var c=t-function(n){return d(n)?function(n){for(var e=P.lastIndex=0;P.test(n);)++e;return e}(n):null==(e=n)?void 0:e.length;var e}(l);if(c<1)return l;var f=u?function(n,e,t){var l=n.length;return(t=void 0===t?l:t)>=l?n:Object(a.a)(n,0,t)}(u,0,c).join(""):n.slice(0,c);if(void 0===i)return f+l;if(u&&(c+=f.length-c),b(i)){if(n.slice(c).search(i)){var p,g=f;for(i.global||(i=RegExp(i.source,Object(L.a)(A.exec(i))+"g")),i.lastIndex=0;p=i.exec(g);)var h=p.index;f=f.slice(0,void 0===h?c:h)}}else if(n.indexOf(Object(o.a)(i),c)!=c){var v=f.lastIndexOf(i);v>-1&&(f=f.slice(0,v))}return f+l};t("fR23"),t("V8il"),t.d(e,"a",(function(){return H}));class H{constructor(n,e){this.screenService=n,this.markdownService=e,this.content="",this.classes=[],this.textareaWidth="100%",this.textareaHeight="150px",this.previewColumn=!1,this.markdownType="text",this.markdownVideo=!1,this.name="description",this.textareaMarginRight="0",this.flexDirection="column",this.truncatedPreviewHTML="",this.previewHTML="",this.contentChanged=new u.a,this.propagateChange=n=>{}}ngOnInit(){this.contentChanged.pipe(Object(i.a)(150),Object(r.a)()).subscribe(()=>this.updatePreviews()),this.contentChanged.next(this.content),this.previewColumn&&(this.flexDirection="row",this.textareaMarginRight="15px")}writeValue(n){this.content=n,this.contentChanged.next(this.content)}registerOnChange(n){this.propagateChange=n}registerOnTouched(){}onModelChange(){this.propagateChange(this.content),this.contentChanged.next(this.content)}arePreviewsDisplayed(){return!1===this.screenService.isInSmallView()}updatePreviews(){return Object(l.a)(this,void 0,void 0,(function*(){null!=this.content&&(this.truncatedPreviewHTML=yield this.markdownRender(D(this.content,{length:this.truncate})),this.previewHTML=yield this.markdownRender(this.content))}))}markdownRender(n){return Object(l.a)(this,void 0,void 0,(function*(){const e="text"===this.markdownType?yield this.markdownService.textMarkdownToHTML(n):yield this.markdownService.enhancedMarkdownToHTML(n);return this.markdownVideo?this.markdownService.processVideoTimestamps(e):e}))}}},efZk:function(n,e,t){"use strict";var l=t("LFf6");e.a=function(n){return null==n?"":Object(l.a)(n)}},ovuK:function(n,e,t){"use strict";e.a=function(n){return function(e){return n(e)}}},"twO/":function(n,e,t){"use strict";e.a=function(n,e){for(var t=-1,l=null==n?0:n.length,i=Array(l);++t<l;)i[t]=e(n[t],t,n);return i}},uAlo:function(n,e,t){"use strict";var l=t("8Y7J"),i=t("G0yt"),r=t("9AJC"),u=t("SVse"),o=t("s7LF");t("ed90"),t("fR23"),t("45hh"),t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return p}));var a=l["\u0275crt"]({encapsulation:0,styles:[[".root[_ngcontent-%COMP%]{display:-webkit-box;display:flex}.root[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{display:inline-block;width:100%;background:var(--inputColor);border:1px solid #c6c6c6;border-radius:3px;height:150px;padding:5px 15px;font-size:15px;margin-bottom:15px}.root[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-input-placeholder{color:var(--inputPlaceholderColor)}.root[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder{color:var(--inputPlaceholderColor)}.root[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-ms-input-placeholder{color:var(--inputPlaceholderColor)}.root[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder{color:var(--inputPlaceholderColor)}@media screen and (max-width:100%){.root[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%}}.root[_ngcontent-%COMP%]   .previews[_ngcontent-%COMP%]{max-height:150px;overflow-y:auto;-webkit-box-flex:1;flex-grow:1}.root[_ngcontent-%COMP%]     .nav-link{display:-webkit-box!important;display:flex!important;-webkit-box-align:center;align-items:center;height:30px!important;padding:0 15px!important}.root[_ngcontent-%COMP%]     .tab-content{min-height:75px;padding:15px;font-size:15px;word-wrap:break-word}"]],data:{}});function c(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(n,e){n(e,0,0,e.component.truncatedPreviewHTML)}))}function d(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,5,"ngb-tab",[["title","Apercebut acorchit"]],null,null,null,null,null)),l["\u0275did"](1,2113536,[[1,4]],2,i.U,[],{title:[0,"title"]},null),l["\u0275qud"](603979776,2,{titleTpls:1}),l["\u0275qud"](603979776,3,{contentTpls:1}),(n()(),l["\u0275and"](0,null,null,1,null,c)),l["\u0275did"](5,16384,[[3,4]],0,i.V,[l.TemplateRef],null,null)],(function(n,e){n(e,1,0,"Apercebut acorchit")}),null)}function s(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(n,e){n(e,0,0,e.component.previewHTML)}))}function f(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,10,"ngb-tabset",[["class","previews"],["type","pills"]],null,null,null,r.d,r.b)),l["\u0275did"](1,2146304,null,1,i.X,[i.Y],{type:[0,"type"]},null),l["\u0275qud"](603979776,1,{tabs:1}),(n()(),l["\u0275and"](16777216,null,null,1,null,d)),l["\u0275did"](4,16384,null,0,u.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275eld"](5,0,null,null,5,"ngb-tab",[["title","Apercebut compl\xe8t"]],null,null,null,null,null)),l["\u0275did"](6,2113536,[[1,4]],2,i.U,[],{title:[0,"title"]},null),l["\u0275qud"](603979776,4,{titleTpls:1}),l["\u0275qud"](603979776,5,{contentTpls:1}),(n()(),l["\u0275and"](0,null,null,1,null,s)),l["\u0275did"](10,16384,[[5,4]],0,i.V,[l.TemplateRef],null,null)],(function(n,e){var t=e.component;n(e,1,0,"pills"),n(e,4,0,void 0!==t.truncate),n(e,6,0,"Apercebut compl\xe8t")}),null)}function p(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,17,"div",[["class","root"]],null,null,null,null,null)),l["\u0275prd"](512,null,u["\u0275NgStyleImpl"],u["\u0275NgStyleR2Impl"],[l.ElementRef,l.KeyValueDiffers,l.Renderer2]),l["\u0275did"](2,278528,null,0,u.NgStyle,[u["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),l["\u0275pod"](3,{"flex-direction":0}),(n()(),l["\u0275eld"](4,0,null,null,11,"textarea",[],[[8,"id",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,e,t){var i=!0,r=n.component;return"input"===e&&(i=!1!==l["\u0275nov"](n,10)._handleInput(t.target.value)&&i),"blur"===e&&(i=!1!==l["\u0275nov"](n,10).onTouched()&&i),"compositionstart"===e&&(i=!1!==l["\u0275nov"](n,10)._compositionStart()&&i),"compositionend"===e&&(i=!1!==l["\u0275nov"](n,10)._compositionEnd(t.target.value)&&i),"ngModelChange"===e&&(i=!1!==(r.content=t)&&i),"ngModelChange"===e&&(i=!1!==r.onModelChange()&&i),i}),null,null)),l["\u0275prd"](512,null,u["\u0275NgClassImpl"],u["\u0275NgClassR2Impl"],[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2]),l["\u0275did"](6,278528,null,0,u.NgClass,[u["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),l["\u0275prd"](512,null,u["\u0275NgStyleImpl"],u["\u0275NgStyleR2Impl"],[l.ElementRef,l.KeyValueDiffers,l.Renderer2]),l["\u0275did"](8,278528,null,0,u.NgStyle,[u["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),l["\u0275pod"](9,{width:0,height:1,"margin-right":2}),l["\u0275did"](10,16384,null,0,o.DefaultValueAccessor,[l.Renderer2,l.ElementRef,[2,o.COMPOSITION_BUFFER_MODE]],null,null),l["\u0275prd"](1024,null,o.NG_VALUE_ACCESSOR,(function(n){return[n]}),[o.DefaultValueAccessor]),l["\u0275did"](12,671744,null,0,o.NgModel,[[8,null],[8,null],[8,null],[6,o.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),l["\u0275prd"](2048,null,o.NgControl,null,[o.NgModel]),l["\u0275did"](14,16384,null,0,o.NgControlStatus,[[4,o.NgControl]],null,null),(n()(),l["\u0275ted"](-1,null,["  "])),(n()(),l["\u0275and"](16777216,null,null,1,null,f)),l["\u0275did"](17,16384,null,0,u.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,e){var t=e.component,l=n(e,3,0,t.flexDirection);n(e,2,0,l),n(e,6,0,t.classes);var i=n(e,9,0,t.textareaWidth,t.textareaHeight,t.textareaMarginRight);n(e,8,0,i),n(e,12,0,t.name,t.content),n(e,17,0,t.arePreviewsDisplayed())}),(function(n,e){n(e,4,0,e.component.name,l["\u0275nov"](e,14).ngClassUntouched,l["\u0275nov"](e,14).ngClassTouched,l["\u0275nov"](e,14).ngClassPristine,l["\u0275nov"](e,14).ngClassDirty,l["\u0275nov"](e,14).ngClassValid,l["\u0275nov"](e,14).ngClassInvalid,l["\u0275nov"](e,14).ngClassPending)}))}},xutz:function(n,e,t){"use strict";(function(n){var l=t("XqMk"),i="object"==typeof exports&&exports&&!exports.nodeType&&exports,r=i&&"object"==typeof n&&n&&!n.nodeType&&n,u=r&&r.exports===i&&l.a.process,o=function(){try{return r&&r.require&&r.require("util").types||u&&u.binding&&u.binding("util")}catch(n){}}();e.a=o}).call(this,t("3UD+")(n))}}]);