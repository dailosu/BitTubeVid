(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{179:function(e,t,n){"use strict";n.r(t);var s=n(0);n(82),n(83),n(84),n(85);const i=s.getComponent("Component");s.registerComponent("EndCard",class extends i{constructor(e,t){super(e,t),this.dashOffsetTotal=586,this.dashOffsetStart=293,this.interval=50,this.upNextEvents=new s.EventTarget,this.ticks=0,this.totalTicks=this.options_.timeout/this.interval,e.on("ended",t=>{this.options_.condition()&&(e.addClass("vjs-upnext--showing"),this.showCard(t=>{e.removeClass("vjs-upnext--showing"),this.container.style.display="none",t||this.options_.next()}))}),e.on("playing",()=>{this.upNextEvents.trigger("playing")})}createEl(){const e=super.createEl("div",{className:"vjs-upnext-content",innerHTML:(t=this.options_,`\n    <div class="vjs-upnext-top">\n      <span class="vjs-upnext-headtext">${t.headText}</span>\n      <div class="vjs-upnext-title"></div>\n    </div>\n    <div class="vjs-upnext-autoplay-icon">\n      <svg height="100%" version="1.1" viewbox="0 0 98 98" width="100%">\n        <circle class="vjs-upnext-svg-autoplay-circle" cx="49" cy="49" fill="#000" fill-opacity="0.8" r="48"></circle>\n        <circle class="vjs-upnext-svg-autoplay-ring" cx="-49" cy="49" fill-opacity="0" r="46.5" stroke="#FFFFFF" stroke-width="4" transform="rotate(-90)"></circle>\n        <polygon class="vjs-upnext-svg-autoplay-triangle" fill="#fff" points="32,27 72,49 32,71"></polygon></svg>\n    </div>\n    <span class="vjs-upnext-bottom">\n      <span class="vjs-upnext-cancel">\n        <button class="vjs-upnext-cancel-button" tabindex="0" aria-label="Cancel autoplay">${t.cancelText}</button>\n      </span>\n      <span class="vjs-upnext-suspended">${t.suspendedText}</span>\n    </span>\n  `)});var t;return this.container=e,e.style.display="none",this.autoplayRing=e.getElementsByClassName("vjs-upnext-svg-autoplay-ring")[0],this.title=e.getElementsByClassName("vjs-upnext-title")[0],this.cancelButton=e.getElementsByClassName("vjs-upnext-cancel-button")[0],this.suspendedMessage=e.getElementsByClassName("vjs-upnext-suspended")[0],this.nextButton=e.getElementsByClassName("vjs-upnext-autoplay-icon")[0],this.cancelButton.onclick=()=>{this.upNextEvents.trigger("cancel")},this.nextButton.onclick=()=>{this.upNextEvents.trigger("next")},e}showCard(e){let t;this.autoplayRing.setAttribute("stroke-dasharray",""+this.dashOffsetStart),this.autoplayRing.setAttribute("stroke-dashoffset",""+-this.dashOffsetStart),this.title.innerHTML=this.options_.getTitle(),this.upNextEvents.one("cancel",()=>{clearTimeout(t),e(!0)}),this.upNextEvents.one("playing",()=>{clearTimeout(t),e(!0)}),this.upNextEvents.one("next",()=>{clearTimeout(t),e(!1)});const n=e=>{const t=Math.max(-this.dashOffsetTotal,-this.dashOffsetStart-e*this.dashOffsetTotal/2/100);this.autoplayRing.setAttribute("stroke-dashoffset",""+t)},s=()=>{n(100*this.ticks++/this.totalTicks)},i=()=>{this.options_.suspended()?(this.suspendedMessage.innerText=this.options_.suspendedText,n(0),this.ticks=0,t=setTimeout(i.bind(this),300)):this.ticks>=this.totalTicks?(clearTimeout(t),e(!1)):(this.suspendedMessage.innerText="",s(),t=setTimeout(i.bind(this),this.interval))};this.container.style.display="block",t=setTimeout(i.bind(this),this.interval)}});const o=s.getPlugin("plugin");s.registerPlugin("upnext",class extends o{constructor(e,t={}){const n={next:t.next,getTitle:t.getTitle,timeout:t.timeout||5e3,cancelText:t.cancelText||"Cancel",headText:t.headText||"Up Next",suspendedText:t.suspendedText||"Autoplay is suspended",condition:t.condition,suspended:t.suspended};super(e,n),this.player.ready(()=>{e.addClass("vjs-upnext")}),e.addChild("EndCard",n)}});const a=s.getComponent("Component");s.registerComponent("PauseBezel",class extends a{constructor(e,t){super(e,t),this.options_=t,e.on("pause",t=>{e.seeking()||e.ended()||(this.container.innerHTML='\n  <div class="vjs-bezels-pause">\n    <div class="vjs-bezel" role="status" aria-label="Pause">\n      <div class="vjs-bezel-icon">\n        <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">\n          <use class="vjs-svg-shadow" xlink:href="#vjs-id-1"></use>\n          <path class="vjs-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z" id="vjs-id-1"></path>\n        </svg>\n      </div>\n    </div>\n  </div>\n  ',this.showBezel())}),e.on("play",t=>{e.seeking()||(this.container.innerHTML='\n  <div class="vjs-bezels-play">\n    <div class="vjs-bezel" role="status" aria-label="Play">\n      <div class="vjs-bezel-icon">\n        <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">\n          <use class="vjs-svg-shadow" xlink:href="#vjs-id-2"></use>\n          <path class="vjs-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z" id="ytp-id-2"></path>\n        </svg>\n      </div>\n    </div>\n  </div>\n  ',this.showBezel())})}createEl(){const e=super.createEl("div",{className:"vjs-bezels-content"});return this.container=e,e.style.display="none",e}showBezel(){this.container.style.display="inherit",setTimeout(()=>{this.container.style.display="none"},500)}});const l=s.getPlugin("plugin");s.registerPlugin("bezels",class extends l{constructor(e,t={}){super(e,t),this.player.ready(()=>{e.addClass("vjs-bezels")}),e.addChild("PauseBezel",t)}});var r=n(2);const d=s,u=d.getComponent("MenuItem"),c=d.getComponent("Component");class h extends u{constructor(e,t,n,s){super(e,t),this.settingsButton=s,this.dialog=this.settingsButton.dialog,this.mainMenu=this.settingsButton.menu,this.panel=this.dialog.getChild("settingsPanel"),this.panelChild=this.panel.getChild("settingsPanelChild"),this.panelChildEl=this.panelChild.el_,this.size=null,this.menuToLoad="mainmenu";const i=Object(r.h)(n),o=d.getComponent(i);if(!o)throw new Error(`Component ${i} does not exist`);this.subMenu=new o(this.player(),t,s,this);const a=this.subMenu.buildCSSClass().split(" ")[0];this.settingsSubMenuEl_.className+=" "+a,this.eventHandlers(),e.ready(()=>{setTimeout(()=>{this.player_&&(this.build(),e.on("ratechange",this.submenuClickHandler),"CaptionsButton"===i&&e.on("captionsChanged",()=>{setTimeout(()=>{this.settingsSubMenuEl_.innerHTML="",this.settingsSubMenuEl_.appendChild(this.subMenu.menu.el_),this.update(),this.bindClickEvents()},0)}),this.reset())},0)})}eventHandlers(){this.submenuClickHandler=this.onSubmenuClick.bind(this),this.transitionEndHandler=this.onTransitionEnd.bind(this)}onSubmenuClick(e){let t=null;(t="tap"===e.type?e.target:e.currentTarget)&&t.classList.contains("vjs-back-button")?this.loadMainMenu():(setTimeout(()=>this.update(e),0),this.subMenu.menu.removeClass("vjs-hidden"))}createEl(){const e=d.dom.createEl("li",{className:"vjs-menu-item"});return this.settingsSubMenuTitleEl_=d.dom.createEl("div",{className:"vjs-settings-sub-menu-title"}),e.appendChild(this.settingsSubMenuTitleEl_),this.settingsSubMenuValueEl_=d.dom.createEl("div",{className:"vjs-settings-sub-menu-value"}),e.appendChild(this.settingsSubMenuValueEl_),this.settingsSubMenuEl_=d.dom.createEl("div",{className:"vjs-settings-sub-menu"}),e}handleClick(){this.menuToLoad="submenu",d.dom.removeClass(this.el_,"open"),super.handleClick(),this.mainMenu.el_.style.opacity="0",d.dom.hasClass(this.settingsSubMenuEl_,"vjs-hidden")?(d.dom.removeClass(this.settingsSubMenuEl_,"vjs-hidden"),setTimeout(()=>{this.settingsSubMenuEl_.style.opacity="1",this.settingsSubMenuEl_.style.marginRight="0px"},0),this.settingsButton.setDialogSize(this.size)):d.dom.addClass(this.settingsSubMenuEl_,"vjs-hidden")}createBackButton(){const e=this.subMenu.menu.addChild("MenuItem",{},0);e.name_="BackButton",e.addClass("vjs-back-button"),e.el_.innerHTML=this.player_.localize(this.subMenu.controlText_)}PrefixedEvent(e,t,n,s="addEvent"){const i=["webkit","moz","MS","o",""];for(let o=0;o<i.length;o++)i[o]||(t=t.toLowerCase()),"addEvent"===s?e.addEventListener(i[o]+t,n,!1):"removeEvent"===s&&e.removeEventListener(i[o]+t,n,!1)}onTransitionEnd(e){"margin-right"===e.propertyName&&"mainmenu"===this.menuToLoad&&(d.dom.addClass(this.settingsSubMenuEl_,"vjs-hidden"),this.settingsSubMenuEl_.style.opacity="0")}reset(){d.dom.addClass(this.settingsSubMenuEl_,"vjs-hidden"),this.settingsSubMenuEl_.style.opacity="0",this.setMargin()}loadMainMenu(){this.menuToLoad="mainmenu",this.mainMenu.show(),this.mainMenu.el_.style.opacity="0",this.settingsButton.setDialogSize([this.mainMenu.width,this.mainMenu.height]),setTimeout(()=>{this.setMargin(),this.mainMenu.el_.style.opacity="1"},0)}build(){this.subMenu.on("updateLabel",()=>{this.update()}),this.subMenu.on("menuChanged",()=>{this.bindClickEvents(),this.setSize(),this.update()}),this.settingsSubMenuTitleEl_.innerHTML=this.player_.localize(this.subMenu.controlText_),this.settingsSubMenuEl_.appendChild(this.subMenu.menu.el_),this.panelChildEl.appendChild(this.settingsSubMenuEl_),this.update(),this.createBackButton(),this.setSize(),this.bindClickEvents(),this.PrefixedEvent(this.settingsSubMenuEl_,"TransitionEnd",this.transitionEndHandler,"addEvent")}update(e){let t=null;const n=this.subMenu.name();if(e&&"tap"===e.type?t=e.target:e&&(t=e.currentTarget),"PlaybackRateMenuButton"===n)setTimeout(()=>this.settingsSubMenuValueEl_.innerHTML=this.subMenu.labelEl_.innerHTML,250);else for(const e of this.subMenu.menu.children_)if(e instanceof c&&e.hasClass("vjs-selected")){if("function"==typeof e.getLabel){this.settingsSubMenuValueEl_.innerHTML=e.getLabel();break}this.settingsSubMenuValueEl_.innerHTML=e.options_.label}t&&!t.classList.contains("vjs-back-button")&&this.settingsButton.hideDialog()}bindClickEvents(){for(const e of this.subMenu.menu.children())e instanceof c&&e.on(["tap","click"],this.submenuClickHandler)}setSize(){this.dialog.removeClass("vjs-hidden"),d.dom.removeClass(this.settingsSubMenuEl_,"vjs-hidden"),this.size=this.settingsButton.getComponentSize(this.settingsSubMenuEl_),this.setMargin(),this.dialog.addClass("vjs-hidden"),d.dom.addClass(this.settingsSubMenuEl_,"vjs-hidden")}setMargin(){if(!this.size)return;const[e]=this.size;this.settingsSubMenuEl_.style.marginRight=`-${e}px`}hideSubMenu(){this.el_&&d.dom.hasClass(this.el_,"open")&&(d.dom.addClass(this.settingsSubMenuEl_,"vjs-hidden"),d.dom.removeClass(this.el_,"open"))}}h.prototype.contentElType="button",d.registerComponent("SettingsMenuItem",h);const p=d.getComponent("Button"),m=d.getComponent("Menu"),g=d.getComponent("Component");class b extends p{constructor(e,t){super(e,t),this.playerComponent=s.Player,this.playerComponent=e,this.dialog=this.playerComponent.addChild("settingsDialog"),this.dialogEl=this.dialog.el_,this.menu=null,this.panel=this.dialog.addChild("settingsPanel"),this.panelChild=this.panel.addChild("settingsPanelChild"),this.addClass("vjs-settings"),this.el_.setAttribute("aria-label","Settings Button"),this.addSettingsItemHandler=this.onAddSettingsItem.bind(this),this.disposeSettingsItemHandler=this.onDisposeSettingsItem.bind(this),this.playerClickHandler=this.onPlayerClick.bind(this),this.userInactiveHandler=this.onUserInactive.bind(this),this.buildMenu(),this.bindEvents(),this.player().one("play",()=>this.hideDialog())}onPlayerClick(e){const t=e.target;t.classList.contains("vjs-settings")||t.parentElement.classList.contains("vjs-settings")||this.dialog.hasClass("vjs-hidden")||this.hideDialog()}onDisposeSettingsItem(e,t){if(void 0===t){const e=this.menu.children();for(;e.length>0;)e[0].dispose(),this.menu.removeChild(e[0]);this.addClass("vjs-hidden")}else{const e=this.menu.getChild(t);e&&(e.dispose(),this.menu.removeChild(e))}this.hideDialog(),0===this.options_.entries.length&&this.addClass("vjs-hidden")}onAddSettingsItem(e,t){const[n,s]=t;this.addMenuItem(n,s),this.removeClass("vjs-hidden")}onUserInactive(){this.dialog.hasClass("vjs-hidden")||this.hideDialog()}bindEvents(){this.playerComponent.on("click",this.playerClickHandler),this.playerComponent.on("addsettingsitem",this.addSettingsItemHandler),this.playerComponent.on("disposesettingsitem",this.disposeSettingsItemHandler),this.playerComponent.on("userinactive",this.userInactiveHandler)}buildCSSClass(){return`vjs-icon-settings ${super.buildCSSClass()}`}handleClick(){this.dialog.hasClass("vjs-hidden")?this.showDialog():this.hideDialog()}showDialog(){this.player_.peertube().onMenuOpen(),this.menu.el_.style.opacity="1",this.dialog.show(),this.setDialogSize(this.getComponentSize(this.menu))}hideDialog(){this.player_.peertube().onMenuClosed(),this.dialog.hide(),this.setDialogSize(this.getComponentSize(this.menu)),this.menu.el_.style.opacity="1",this.resetChildren()}getComponentSize(e){let t=null,n=null;return e instanceof g?(n=e.el_.offsetHeight,e.width=t=e.el_.offsetWidth,e.height=n):(t=e.offsetWidth,n=e.offsetHeight),[t,n]}setDialogSize([e,t]){if("number"!=typeof t)return;const n=this.playerComponent.el_.offsetHeight-this.options_.setup.maxHeightOffset;t>n?(e+=17,this.panel.el_.style.maxHeight=`${t=n}px`):""!==this.panel.el_.style.maxHeight&&(this.panel.el_.style.maxHeight=""),this.dialogEl.style.width=`${e}px`,this.dialogEl.style.height=`${t}px`}buildMenu(){this.menu=new m(this.player()),this.menu.addClass("vjs-main-menu");const e=this.options_.entries;if(0===e.length)return this.addClass("vjs-hidden"),void this.panelChild.addChild(this.menu);for(const t of e)this.addMenuItem(t,this.options_);this.panelChild.addChild(this.menu)}addMenuItem(e,t){t.name=Object(r.h)(e);const n=new h(this.player(),t,e,this);this.menu.addChild(n),n.on("click",s.bind(this,this.hideChildren)),n.on("click",(function(){d.dom.hasClass(this.el_,"open")?d.dom.removeClass(this.el_,"open"):d.dom.addClass(this.el_,"open")}))}resetChildren(){for(const e of this.menu.children())e.reset()}hideChildren(){for(const e of this.menu.children())e.hideSubMenu()}}b.prototype.controlText_="Settings",g.registerComponent("SettingsButton",b),g.registerComponent("SettingsDialog",class extends g{constructor(e,t){super(e,t),this.hide()}createEl(){const e=this.id_;return super.createEl("div",{className:"vjs-settings-dialog vjs-modal-overlay",innerHTML:"",tabIndex:-1},{role:"dialog","aria-labelledby":"TTsettingsDialogLabel-"+e,"aria-describedby":"TTsettingsDialogDescription-"+e})}}),g.registerComponent("SettingsPanel",class extends g{constructor(e,t){super(e,t)}createEl(){return super.createEl("div",{className:"vjs-settings-panel",innerHTML:"",tabIndex:-1})}}),g.registerComponent("SettingsPanelChild",class extends g{constructor(e,t){super(e,t)}createEl(){return super.createEl("div",{className:"vjs-settings-panel-child",innerHTML:"",tabIndex:-1})}});var v=n(4);const y=s.getPlugin("plugin");s.registerPlugin("peertube",class extends y{constructor(e,t){super(e,t),this.CONSTANTS={USER_WATCHING_VIDEO_INTERVAL:5e3},this.menuOpened=!1,this.mouseInControlBar=!1,this.videoViewUrl=t.videoViewUrl,this.videoDuration=t.videoDuration,this.videoCaptions=t.videoCaptions,this.savedInactivityTimeout=e.options_.inactivityTimeout,!0===t.autoplay&&this.player.addClass("vjs-has-autoplay"),this.player.on("autoplay-failure",()=>{this.player.removeClass("vjs-has-autoplay")}),this.player.ready(()=>{const e=this.player.options_;"webtorrent"===t.mode&&(this.player.webtorrent().on("resolutionChange",(e,t)=>this.handleResolutionChange(t)),this.player.webtorrent().on("autoResolutionChange",(e,t)=>this.trigger("autoResolutionChange",t))),"p2p-media-loader"===t.mode&&this.player.p2pMediaLoader().on("resolutionChange",(e,t)=>this.handleResolutionChange(t)),this.player.tech_.on("loadedqualitydata",()=>{setTimeout(()=>{this.lastResolutionChange&&this.handleResolutionChange(this.lastResolutionChange)},0)});const n=Object(v.f)();void 0!==n&&this.player.volume(n);const s=void 0!==e.muted?e.muted:Object(v.c)();if(void 0!==s&&this.player.muted(s),this.defaultSubtitle=t.subtitle||Object(v.b)(),this.player.on("volumechange",()=>{Object(v.k)(this.player.volume()),Object(v.i)(this.player.muted())}),t.stopTime){const e=Object(r.g)(t.stopTime),n=this;this.player.on("timeupdate",(function t(){n.player.currentTime()>e&&(n.player.pause(),n.player.trigger("stopped"),n.player.off("timeupdate",t))}))}this.player.textTracks().on("change",()=>{const e=this.player.textTracks().tracks_.find(e=>"captions"===e.kind&&"showing"===e.mode);e?Object(v.h)(e.language):Object(v.h)("off")}),this.player.on("sourcechange",()=>this.initCaptions()),this.player.duration(t.videoDuration),this.initializePlayer(),this.runViewAdd(),t.userWatching&&this.runUserWatchVideo(t.userWatching)})}dispose(){this.videoViewInterval&&clearInterval(this.videoViewInterval),this.userWatchingVideoInterval&&clearInterval(this.userWatchingVideoInterval)}onMenuOpen(){this.menuOpened=!1,this.alterInactivity()}onMenuClosed(){this.menuOpened=!0,this.alterInactivity()}initializePlayer(){Object(r.f)()&&this.player.addClass("vjs-is-mobile"),this.initSmoothProgressBar(),this.initCaptions(),this.listenControlBarMouse()}runViewAdd(){this.clearVideoViewInterval();let e=30;this.videoDuration<e&&(e=3*this.videoDuration/4);let t=0;this.videoViewInterval=setInterval(()=>{this.player&&!this.player.paused()&&(t+=1)>e&&(this.clearVideoViewInterval(),this.addViewToVideo().catch(e=>console.error(e)))},1e3)}runUserWatchVideo(e){let t=0;this.userWatchingVideoInterval=setInterval(()=>{const n=Math.floor(this.player.currentTime());n-t>=1&&(t=n,this.notifyUserIsWatching(n,e.url,e.authorizationHeader).catch(e=>console.error("Cannot notify user is watching.",e)))},this.CONSTANTS.USER_WATCHING_VIDEO_INTERVAL)}clearVideoViewInterval(){void 0!==this.videoViewInterval&&(clearInterval(this.videoViewInterval),this.videoViewInterval=void 0)}addViewToVideo(){return this.videoViewUrl?fetch(this.videoViewUrl,{method:"POST"}):Promise.resolve(void 0)}notifyUserIsWatching(e,t,n){const s=new URLSearchParams;s.append("currentTime",e.toString());const i=new Headers({Authorization:n});return fetch(t,{method:"PUT",body:s,headers:i})}handleResolutionChange(e){this.lastResolutionChange=e;const t=this.player.qualityLevels();for(let n=0;n<t.length;n++)if(t[n].height===e.resolutionId){e.id=t[n].id;break}this.trigger("resolutionChange",e)}listenControlBarMouse(){this.player.controlBar.on("mouseenter",()=>{this.mouseInControlBar=!0,this.alterInactivity()}),this.player.controlBar.on("mouseleave",()=>{this.mouseInControlBar=!1,this.alterInactivity()})}alterInactivity(){this.player.options_.inactivityTimeout=this.menuOpened||this.mouseInControlBar?this.savedInactivityTimeout:1}initCaptions(){for(const e of this.videoCaptions)this.player.addRemoteTextTrack({kind:"captions",label:e.label,language:e.language,id:e.language,src:e.src,default:this.defaultSubtitle===e.language},!1);this.player.trigger("captionsChanged")}initSmoothProgressBar(){const e=d.getComponent("SeekBar");e.prototype.getPercent=function(){const e=this.player_.currentTime()/this.player_.duration();return e>=1?1:e},e.prototype.handleMouseMove=function(e){let t=this.calculateDistance(e)*this.player_.duration();t===this.player_.duration()&&(t-=.1),this.player_.currentTime(t),this.update()}}});const C=d.getComponent("Button");class f extends C{constructor(e,t){super(e,t)}createEl(){const e=d.dom.createEl("button",{className:"vjs-next-video"}),t=d.dom.createEl("span",{className:"icon icon-next"});return e.appendChild(t),e.title=this.player_.localize("Next video"),e}handleClick(){this.options_.handler()}}f.prototype.controlText_="Next video",f.registerComponent("NextVideoButton",f);const T=d.getComponent("Button");T.registerComponent("PeerTubeLinkButton",class extends T{constructor(e,t){super(e,t)}createEl(){return this.buildElement()}updateHref(){this.el().setAttribute("href",Object(r.b)({startTime:this.player().currentTime()}))}handleClick(){this.player_.pause()}buildElement(){const e=d.dom.createEl("a",{href:Object(r.b)(),innerHTML:"BitTube",title:this.player_.localize("Go to the video page"),className:"vjs-peertube-link",target:"_blank"});return e.addEventListener("mouseenter",()=>this.updateHref()),e}});const E=d.getComponent("MenuItem");class x extends E{constructor(e,t){t.selectable=!0,super(e,t),this.autoResolutionPossible=!0,this.currentResolutionLabel="",this.label=t.label,this.labels=t.labels,this.id=t.id,this.callback=t.callback,e.peertube().on("resolutionChange",(e,t)=>this.updateSelection(t)),-1===this.id&&e.peertube().on("autoResolutionChange",(e,t)=>this.updateAutoResolution(t))}handleClick(e){!1===this.autoResolutionPossible&&-1===this.id||(super.handleClick(e),this.callback(this.id,"video"))}updateSelection(e){-1===this.id&&(this.currentResolutionLabel=this.labels[e.id]),this.selected(!0!==e.auto?this.id===e.id:-1===this.id)}updateAutoResolution(e){!1===e.possible?this.addClass("disabled"):this.removeClass("disabled"),this.autoResolutionPossible=e.possible}getLabel(){return-1===this.id?this.label+" <small>"+this.currentResolutionLabel+"</small>":this.label}}E.registerComponent("ResolutionMenuItem",x);const j=d.getComponent("Menu"),M=d.getComponent("MenuButton");class S extends M{constructor(e,t){super(e,t),this.player=e,e.tech_.on("loadedqualitydata",(e,t)=>this.buildQualities(t)),e.peertube().on("resolutionChange",()=>setTimeout(()=>this.trigger("updateLabel"),0))}createEl(){const e=super.createEl();return this.labelEl_=d.dom.createEl("div",{className:"vjs-resolution-value"}),e.appendChild(this.labelEl_),e}updateARIAAttributes(){this.el().setAttribute("aria-label","Quality")}createMenu(){return new j(this.player_)}buildCSSClass(){return super.buildCSSClass()+" vjs-resolution-button"}buildWrapperCSSClass(){return"vjs-resolution-control "+super.buildWrapperCSSClass()}addClickListener(e){e.on("click",()=>{const t=this.menu.children();for(const n of t)e!==n&&n.selected(!1)})}buildQualities(e){const t={};e.qualityData.video.sort((e,t)=>e.id>t.id?-1:e.id===t.id?0:1);for(const n of e.qualityData.video){if(-1===n.id)continue;const s="0p"===n.label?this.player.localize("Audio-only"):n.label;this.menu.addChild(new x(this.player_,{id:n.id,label:s,selected:n.selected,callback:e.qualitySwitchCallback})),t[n.id]=n.label}this.menu.addChild(new x(this.player_,{id:-1,label:this.player_.localize("Auto"),labels:t,callback:e.qualitySwitchCallback,selected:!0}));for(const e of this.menu.children())this.addClickListener(e);this.trigger("menuChanged")}}S.prototype.controlText_="Quality",M.registerComponent("ResolutionMenuButton",S);const _=d.getComponent("Button");_.registerComponent("P2PInfoButton",class extends _{createEl(){const e=d.dom.createEl("div",{className:"vjs-peertube"}),t=d.dom.createEl("div",{className:"vjs-peertube-hidden"});e.appendChild(t);const n=d.dom.createEl("span",{className:"icon icon-download"});t.appendChild(n);const s=d.dom.createEl("span",{className:"download-speed-text"}),i=d.dom.createEl("span",{className:"download-speed-number"}),o=d.dom.createEl("span");s.appendChild(i),s.appendChild(o),t.appendChild(s);const a=d.dom.createEl("span",{className:"icon icon-upload"});t.appendChild(a);const l=d.dom.createEl("span",{className:"upload-speed-text"}),u=d.dom.createEl("span",{className:"upload-speed-number"}),c=d.dom.createEl("span");l.appendChild(u),l.appendChild(c),t.appendChild(l);const h=d.dom.createEl("span",{className:"peers-text"}),p=d.dom.createEl("span",{className:"peers-number"});t.appendChild(p),t.appendChild(h);const m=d.dom.createEl("div",{className:"vjs-peertube-hidden"}),g=d.dom.createEl("span",{className:"http-fallback",textContent:"HTTP"});return m.appendChild(g),e.appendChild(m),this.player_.on("p2pInfo",(e,n)=>{if(!n)return m.className="vjs-peertube-displayed",void(t.className="vjs-peertube-hidden");const s=n.p2p,a=n.http,l=Object(r.c)(s.downloadSpeed+a.downloadSpeed),d=Object(r.c)(s.uploadSpeed+a.uploadSpeed),g=Object(r.c)(s.downloaded+a.downloaded),b=Object(r.c)(s.uploaded+a.uploaded),v=s.numPeers;t.title=this.player_.localize("Total downloaded: ")+g.join(" ")+"\n"+this.player_.localize("Total uploaded: "+b.join(" ")),i.textContent=l[0],o.textContent=" "+l[1],u.textContent=d[0],c.textContent=" "+d[1],p.textContent=v,h.textContent=" "+this.player_.localize(v>1?"peers":"peer"),m.className="vjs-peertube-hidden",t.className="vjs-peertube-displayed"}),e}});const w=d.getComponent("Component");w.registerComponent("PeerTubeLoadProgressBar",class extends w{constructor(e,t){super(e,t),this.partEls_=[],this.on(e,"progress",this.update)}createEl(){return super.createEl("div",{className:"vjs-load-progress",innerHTML:`<span class="vjs-control-text"><span>${this.localize("Loaded")}</span>: 0%</span>`})}dispose(){this.partEls_=null,super.dispose()}update(){const e=this.player().webtorrent().getTorrent();e&&(this.el_.style.width=100*e.progress+"%")}});const k=d.getComponent("Button");class B extends k{constructor(e,t){super(e,t);const n=Object(v.e)();!0===n&&(this.player_.addClass(B.THEATER_MODE_CLASS),this.handleTheaterChange()),this.player_.theaterEnabled=n}buildCSSClass(){return`vjs-theater-control ${super.buildCSSClass()}`}handleTheaterChange(){const e=this.isTheaterEnabled();this.controlText(e?"Normal mode":"Theater mode"),Object(v.j)(e),this.player_.trigger("theaterChange",e)}handleClick(){this.player_.toggleClass(B.THEATER_MODE_CLASS),this.handleTheaterChange()}isTheaterEnabled(){return this.player_.hasClass(B.THEATER_MODE_CLASS)}}B.THEATER_MODE_CLASS="vjs-theater-enabled",B.prototype.controlText_="Theater mode",B.registerComponent("TheaterButton",B);var I=n(30),O=n(9),P=function(e,t,n,s){return new(n||(n=Promise))((function(i,o){function a(e){try{r(s.next(e))}catch(e){o(e)}}function l(e){try{r(s.throw(e))}catch(e){o(e)}}function r(e){e.done?i(e.value):new n((function(t){t(e.value)})).then(a,l)}r((s=s.apply(e,t||[])).next())}))};function L(e){const t=fetch(e).then(e=>e.json()).catch(e=>(console.error("Cannot get sha256 segments",e),{})),n=/bytes=(\d+)-(\d+)/;return function(e){return P(this,void 0,void 0,(function*(){const s=Object(O.basename)(e.url),i=n.exec(e.range),o=i[1]+"-"+i[2],a=(yield t)[s][o];if(void 0===a)throw new Error(`Unknown segment name ${s}/${o} in segment validator`);const l=function(e){if(!e)return"";let t="";const n="0123456789abcdef";return new Uint8Array(e).forEach(e=>t+=n[e>>4]+n[15&e]),t}(yield(r=e.data,r?window.crypto.subtle.digest("SHA-256",r):void 0));var r;if(l!==a)throw new Error(`Hashes does not correspond for segment ${s}/${o}`+`(expected: ${a} instead of ${l})`)}))}}function N(e){return function(t){return e.buildUrl(t.url)}}class H{constructor(e=[]){this.baseUrls=e}removeBySegmentUrl(e){console.log("Removing redundancy of segment URL %s.",e);const t=Object(O.dirname)(e);this.baseUrls=this.baseUrls.filter(e=>e!==t&&e!==t+"/")}buildUrl(e){const t=this.baseUrls.length+1,n=this.getRandomInt(t);if(n===t-1)return e;const s=this.baseUrls[n],i=s.endsWith("/")?"":"/";return s+i+Object(O.basename)(e)}countBaseUrls(){return this.baseUrls.length}getRandomInt(e){return Math.floor(Math.random()*Math.floor(e))}}var z=n(31);n.d(t,"PeertubePlayerManager",(function(){return V})),n.d(t,"videojs",(function(){return s}));var R=function(e,t,n,s){return new(n||(n=Promise))((function(i,o){function a(e){try{r(s.next(e))}catch(e){o(e)}}function l(e){try{r(s.throw(e))}catch(e){o(e)}}function r(e){e.done?i(e.value):new n((function(t){t(e.value)})).then(a,l)}r((s=s.apply(e,t||[])).next())}))};d.getComponent("PlaybackRateMenuButton").prototype.controlText_="Speed",d.getComponent("CaptionsButton").prototype.controlText_="Subtitles/CC",d.getComponent("CaptionsButton").prototype.label_=" ";class V{static initialize(e,t,i){return R(this,void 0,void 0,(function*(){let o;this.onPlayerChange=i,this.playerElementClassName=t.common.playerElement.className,"webtorrent"===e&&(yield Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,180))),"p2p-media-loader"===e&&([o]=yield Promise.all([Promise.all([n.e(0),n.e(3),n.e(9)]).then(n.t.bind(null,40,7)),Promise.all([n.e(0),n.e(3),n.e(11),n.e(8)]).then(n.bind(null,178))]));const a=this.getVideojsOptions(e,t,o);yield z.a.loadLocaleInVideoJS(t.common.serverUrl,t.common.language,s);const l=this;return new Promise(n=>{s(t.common.playerElement,a,(function(){const s=this;let i=!1;return s.tech_.one("error",()=>{i||l.maybeFallbackToWebTorrent(e,s,t),i=!0}),s.one("error",()=>{i||l.maybeFallbackToWebTorrent(e,s,t),i=!0}),l.addContextMenu(e,s,t.common.embedUrl),s.bezels(),n(s)}))})}))}static maybeFallbackToWebTorrent(e,t,i){return R(this,void 0,void 0,(function*(){if("webtorrent"===e)return;console.log("Fallback to webtorrent.");const o=document.createElement("video");o.className=this.playerElementClassName;let a=i.common.playerElement.parentNode;a||(a=document.getElementById(i.common.playerElement.id).parentNode),a.parentNode.insertBefore(o,a),i.common.playerElement=o,i.common.onPlayerElementChange(o),t.dispose(),yield Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,180));const l=this.getVideojsOptions("webtorrent",i),r=this;s(o,l,(function(){r.addContextMenu("webtorrent",this,i.common.embedUrl),V.onPlayerChange(this)}))}))}static getVideojsOptions(e,t,n){const s=t.common;let i=s.autoplay,o={};const a={peertube:{mode:e,autoplay:i,videoViewUrl:s.videoViewUrl,videoDuration:s.videoDuration,userWatching:s.userWatching,subtitle:s.subtitle,videoCaptions:s.videoCaptions,stopTime:s.stopTime}};if(!0===s.enableHotkeys&&V.addHotkeysOptions(a),"p2p-media-loader"===e){const{streamrootHls:e}=V.addP2PMediaLoaderOptions(a,t,n);o=e.html5}"webtorrent"===e&&(V.addWebTorrentOptions(a,t),i=!1);const l={html5:o,textTrackSettings:!1,controls:void 0===s.controls||s.controls,loop:void 0!==s.loop&&s.loop,muted:void 0!==s.muted?s.muted:void 0,autoplay:!0===i?"any":i,poster:s.poster,inactivityTimeout:s.inactivityTimeout,playbackRates:[.5,.75,1,1.25,1.5,2],plugins:a,controlBar:{children:this.getControlBarChildren(e,{captions:s.captions,peertubeLink:s.peertubeLink,theaterButton:s.theaterButton,nextVideo:s.nextVideo})}};return s.language&&!Object(I.d)(s.language)&&Object.assign(l,{language:s.language}),l}static addP2PMediaLoaderOptions(e,t,n){const s=t.p2pMediaLoader,i=t.common,o=s.trackerAnnounce.filter(e=>e.startsWith("ws")),a=new H(t.p2pMediaLoader.redundancyBaseUrls),l={redundancyUrlManager:a,type:"application/x-mpegURL",startTime:i.startTime,src:s.playlistUrl};let d=!1;navigator&&navigator.connection&&"cellular"===navigator.connection.type&&(console.log("We are on a cellular connection: disabling seeding."),d=!0);const u={loader:{trackerAnnounce:o,segmentValidator:L(t.p2pMediaLoader.segmentsSha256Url),rtcConfig:Object(r.e)(),requiredSegmentsPriority:5,segmentUrlBuilder:N(a),useP2P:Object(v.d)(),consumeOnly:d},segments:{swarmId:s.playlistUrl}},c={p2pMediaLoader:l,streamrootHls:{levelLabelHandler:e=>{const t=s.videoFiles.find(t=>t.resolution.id===e.height);let n=t.resolution.label;return t.fps>=50&&(n+=t.fps),n},html5:{hlsjsConfig:{capLevelToPlayerSize:!0,autoStartLoad:!1,liveSyncDurationCount:7,loader:new n.Engine(u).createLoaderClass()}}}};return Object.assign(e,c),c}static addWebTorrentOptions(e,t){const n=t.common;Object.assign(e,{webtorrent:{autoplay:n.autoplay,videoDuration:n.videoDuration,playerElement:n.playerElement,videoFiles:t.webtorrent.videoFiles,startTime:n.startTime}})}static getControlBarChildren(e,t){const n=[],s="webtorrent"===e?"peerTubeLoadProgressBar":"loadProgressBar";n.push("playbackRateMenuButton"),!0===t.captions&&n.push("captionsButton"),n.push("resolutionMenuButton");const i={playToggle:{}};return t.nextVideo&&Object.assign(i,{nextVideoButton:{handler:t.nextVideo}}),Object.assign(i,{currentTimeDisplay:{},timeDivider:{},durationDisplay:{},liveDisplay:{},flexibleWidthSpacer:{},progressControl:{children:{seekBar:{children:{[s]:{},mouseTimeDisplay:{},playProgressBar:{}}}}},p2PInfoButton:{},muteToggle:{},volumeControl:{},settingsButton:{setup:{maxHeightOffset:40},entries:n}}),!0===t.peertubeLink&&Object.assign(i,{peerTubeLinkButton:{}}),!0===t.theaterButton&&Object.assign(i,{theaterButton:{}}),Object.assign(i,{fullscreenToggle:{}}),i}static addContextMenu(e,t,n){const s=[{label:t.localize("Copy the video URL"),listener:function(){Object(r.d)(Object(r.b)())}},{label:t.localize("Copy the video URL at the current time"),listener:function(){Object(r.d)(Object(r.b)({startTime:this.currentTime()}))}},{label:t.localize("Copy embed code"),listener:()=>{Object(r.d)(Object(r.a)(n))}}];"webtorrent"===e&&s.push({label:t.localize("Copy magnet URI"),listener:function(){Object(r.d)(this.webtorrent().getCurrentVideoFile().magnetUri)}}),t.contextmenuUI({content:s})}static addHotkeysOptions(e){Object.assign(e,{hotkeys:{enableVolumeScroll:!1,enableModifiersForNumbers:!1,fullscreenKey:function(e){return"f"===e.key||e.ctrlKey&&"Enter"===e.key},seekStep:function(e){return e.ctrlKey&&e.altKey?300:e.ctrlKey?60:e.altKey?10:5},customKeys:{increasePlaybackRateKey:{key:function(e){return">"===e.key},handler:function(e){e.playbackRate((e.playbackRate()+.1).toFixed(2))}},decreasePlaybackRateKey:{key:function(e){return"<"===e.key},handler:function(e){e.playbackRate((e.playbackRate()-.1).toFixed(2))}},frameByFrame:{key:function(e){return"."===e.key},handler:function(e){e.pause(),e.currentTime(e.currentTime()+1/30)}}}}})}}},2:function(e,t,n){"use strict";function s(e){return e.charAt(0).toUpperCase()+e.slice(1)}n.d(t,"e",(function(){return m})),n.d(t,"h",(function(){return s})),n.d(t,"g",(function(){return r})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"i",(function(){return h})),n.d(t,"j",(function(){return p})),n.d(t,"d",(function(){return c})),n.d(t,"f",(function(){return a})),n.d(t,"c",(function(){return o}));const i=[{max:1024,type:"B"},{max:1048576,type:"KB"},{max:1073741824,type:"MB"},{max:10995116e5,type:"GB"}];function o(e){const t=i.find(t=>e<t.max)||i[i.length-1];return[Math.floor(e/(t.max/1024)).toString(),t.type]}function a(){return/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)}function l(e={}){const{baseUrl:t}=e,n=t||window.location.origin+window.location.pathname.replace("/embed/","/watch/"),s=new URLSearchParams(window.location.search);if(s.delete("videoId"),e.startTime){const t=Math.floor(e.startTime);s.set("start",d(t))}if(e.stopTime){const t=Math.floor(e.stopTime);s.set("stop",d(t))}e.subtitle&&s.set("subtitle",e.subtitle),!0===e.loop&&s.set("loop","1"),!0===e.autoplay&&s.set("autoplay","1"),!0===e.muted&&s.set("muted","1"),!1===e.title&&s.set("title","0"),!1===e.warningTitle&&s.set("warningTitle","0"),!1===e.controls&&s.set("controls","0");let i=!1;return s.forEach(()=>i=!0),i?n+"?"+s.toString():n}function r(e){if(!e)return 0;if("number"==typeof e)return e;const t=e.match(/^((\d+)[h:])?((\d+)[m:])?((\d+)s?)?$/);return t?3600*parseInt(t[2]||"0",10)+60*parseInt(t[4]||"0",10)+parseInt(t[6]||"0",10):0}function d(e,t=!1,n){let s="";const i=n||"h",o=n||"m",a=t?"":"s",l=Math.floor(e/3600);l>=1?s=l+i:t&&(s="0"+i),e%=3600;const r=Math.floor(e/60);return r>=1&&r<10&&t?s+="0"+r+o:r>=1?s+=r+o:t&&(s+="00"+o),(e%=60)>=1&&e<10&&t?s+="0"+e+a:e>=1?s+=e+a:t&&(s+="00"),s}function u(e){return'<iframe width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="'+e+'" frameborder="0" allowfullscreen></iframe>'}function c(e){const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}function h(e){let t=e[0];for(let n=1;n<e.length;n++){const s=e[n];t.resolution.id<s.resolution.id&&(t=s)}return t}function p(e){let t=e[0];for(let n=1;n<e.length;n++){const s=e[n];t.resolution.id>s.resolution.id&&(t=s)}return t}function m(){return{iceServers:[{urls:"stun:stun.stunprotocol.org"},{urls:"stun:stun.framasoft.org"}]}}},4:function(e,t,n){"use strict";function s(){const e=g("volume");if(null!=e){const t=parseFloat(e);if(isNaN(t))return;return t}}function i(){const e=g("webtorrent_enabled");return null==e||"true"===e}function o(){const e=g("mute");if(null!=e)return"true"===e}function a(){const e=g("theater-enabled");return null!=e&&"true"===e}function l(e){return b("volume",e.toString())}function r(e){return b("mute",e.toString())}function d(e){return b("theater-enabled",e.toString())}function u(e){return b("average-bandwidth",e.toString())}function c(){const e=g("average-bandwidth");if(null!=e){const t=parseInt(e,10);if(isNaN(t))return;return t}}function h(e){return b("last-subtitle",e)}function p(){return g("last-subtitle")}n.d(t,"f",(function(){return s})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"k",(function(){return l})),n.d(t,"i",(function(){return r})),n.d(t,"j",(function(){return d})),n.d(t,"g",(function(){return u})),n.d(t,"a",(function(){return c})),n.d(t,"h",(function(){return h})),n.d(t,"b",(function(){return p}));const m="peertube-videojs-";function g(e){try{return localStorage.getItem(m+e)}catch(e){return}}function b(e,t){try{localStorage.setItem(m+e,t)}catch(e){}}},81:function(e,t){}}]);