(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{IOkP:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J");class i{}var o=e("pMnS"),a=e("iInd"),u=e("SVse"),r=e("IbkX"),c=e("x19x"),d=e("jxlV"),s=e("Vurf"),p=e("mOsc"),m=e("VNja"),g=e("GiVz"),v=e("LTwV"),h=e("wQE2"),f=(e("M0ag"),e("lJxs")),b=e("/uUt"),C=e("eIep"),y=e("JIr8"),O=(e("ey9i"),e("yccp"));class M{constructor(n,l,e,t,i,o,a){this.i18n=n,this.route=l,this.notifier=e,this.authService=t,this.videoChannelService=i,this.restExtractor=o,this.hotkeysService=a,this.isChannelManageable=!1}ngOnInit(){this.routeSub=this.route.params.pipe(Object(f.a)(n=>n.videoChannelName),Object(b.a)(),Object(C.a)(n=>this.videoChannelService.getVideoChannel(n)),Object(y.a)(n=>this.restExtractor.redirectTo404IfNotFound(n,[400,404]))).subscribe(n=>{this.videoChannel=n,this.authService.isLoggedIn()&&this.authService.userInformationLoaded.subscribe(()=>{const n=this.videoChannel.ownerAccount.userId;this.isChannelManageable=n&&n===this.authService.getUser().id})}),this.hotkeys=[new O.Hotkey("S",n=>(this.subscribeButton.subscribed?this.subscribeButton.unsubscribe():this.subscribeButton.subscribe(),!1),void 0,this.i18n("Subscribe to the account"))],this.isUserLoggedIn()&&this.hotkeysService.add(this.hotkeys)}ngOnDestroy(){this.routeSub&&this.routeSub.unsubscribe(),this.isUserLoggedIn()&&this.hotkeysService.remove(this.hotkeys)}isUserLoggedIn(){return this.authService.isLoggedIn()}get isManageable(){return!!this.isUserLoggedIn()&&this.videoChannel.ownerAccount.userId===this.authService.getUser().id}activateCopiedMessage(){this.notifier.success(this.i18n("Username copied"))}}var k=e("Huiz"),P=e("oVTH"),_=t["\u0275crt"]({encapsulation:0,styles:[[".sub-menu[_ngcontent-%COMP%]{height:-webkit-max-content;height:-moz-max-content;height:max-content;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:start;align-items:flex-start}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]{display:-webkit-box;display:flex;margin-top:20px;margin-bottom:20px}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover;border-radius:50%;width:80px;height:80px;min-width:80px;min-height:80px;margin-right:20px}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-names[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-names[_ngcontent-%COMP%]   .actor-display-name[_ngcontent-%COMP%]{font-size:23px;font-weight:700}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-names[_ngcontent-%COMP%]   .actor-name[_ngcontent-%COMP%]{margin-left:7px;position:relative;top:3px;font-size:14px;color:#777272}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-followers[_ngcontent-%COMP%]{font-size:15px}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-owner[_ngcontent-%COMP%]{display:inline-table;font-size:13px;margin-top:4px;color:var(--mainForegroundColor)}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-owner[_ngcontent-%COMP%]:active, .sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-owner[_ngcontent-%COMP%]:focus, .sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-owner[_ngcontent-%COMP%]:hover{text-decoration:none!important;outline:0!important}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-owner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{opacity:.8}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-owner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover;border-radius:50%;width:18px;height:18px;min-width:18px;min-height:18px;margin-left:7px;position:relative;top:-2px}.sub-menu[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{margin-top:0;margin-bottom:10px}.sub-menu[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0;text-transform:uppercase;font-weight:600}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%], .sub-menu[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]{width:100%}.sub-menu[_ngcontent-%COMP%]   .actor-name[_ngcontent-%COMP%]{-webkit-box-flex:1;flex-grow:1}.sub-menu[_ngcontent-%COMP%]   .actor-name[_ngcontent-%COMP%]   .copy-button[_ngcontent-%COMP%]{border:none;padding:5px;margin-top:-2px}.right-buttons[_ngcontent-%COMP%]{display:-webkit-box;display:flex;height:-webkit-max-content;height:-moz-max-content;height:max-content;margin-left:auto;margin-top:20px}.right-buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;border:1px solid;font-weight:600;font-size:15px;height:30px;border-radius:3px;text-align:center;padding:0 17px 0 13px;cursor:pointer;outline:0;line-height:1.8}.right-buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .right-buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .right-buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none!important;outline:0!important}.right-buttons[_ngcontent-%COMP%]   my-subscribe-button[_ngcontent-%COMP%]{height:-webkit-min-content;height:-moz-min-content;height:min-content}"]],data:{}});function x(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"a",[["class","btn btn-outline-tertiary mr-2"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var i=!0;return"click"===l&&(i=!1!==t["\u0275nov"](n,1).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&i),i}),null,null)),t["\u0275did"](1,671744,null,0,a.s,[a.p,a.a,u.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](2,2),(n()(),t["\u0275ted"](-1,null,["Manage"]))],(function(n,l){var e=n(l,2,0,"/my-account/video-channels/update",l.component.videoChannel.nameWithHost);n(l,1,0,e)}),(function(n,l){n(l,0,0,t["\u0275nov"](l,1).target,t["\u0275nov"](l,1).href)}))}function I(n){return t["\u0275vid"](0,[(n()(),t["\u0275ted"](-1,null,["1 subscriber"]))],null,null)}function w(n){return t["\u0275vid"](0,[(n()(),t["\u0275ted"](0,null,[""," subscribers"]))],null,(function(n,l){n(l,0,0,l.component.videoChannel.followersCount)}))}function S(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,53,"div",[["class","row"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,49,"div",[["class","sub-menu"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,29,"div",[["class","actor"]],null,null,null,null,null)),(n()(),t["\u0275eld"](3,0,null,null,0,"img",[["alt","Avatar"]],[[8,"src",4]],null,null,null,null)),(n()(),t["\u0275eld"](4,0,null,null,27,"div",[["class","actor-info"]],null,null,null,null,null)),(n()(),t["\u0275eld"](5,0,null,null,13,"div",[["class","actor-names"]],null,null,null,null,null)),(n()(),t["\u0275eld"](6,0,null,null,1,"div",[["class","actor-display-name"]],null,null,null,null,null)),(n()(),t["\u0275ted"](7,null,["",""])),(n()(),t["\u0275eld"](8,0,null,null,4,"div",[["class","actor-name"]],null,null,null,null,null)),(n()(),t["\u0275ted"](9,null,[""," "])),(n()(),t["\u0275eld"](10,0,null,null,2,"button",[["class","btn btn-outline-secondary btn-sm copy-button"],["ngxClipboard",""]],null,[[null,"click"]],(function(n,l,e){var i=!0,o=n.component;return"click"===l&&(i=!1!==t["\u0275nov"](n,11).onClick(e.target)&&i),"click"===l&&(i=!1!==o.activateCopiedMessage()&&i),i}),null,null)),t["\u0275did"](11,212992,null,0,r.a,[r.c],{targetElm:[0,"targetElm"],cbContent:[1,"cbContent"]},null),(n()(),t["\u0275eld"](12,0,null,null,0,"span",[["class","glyphicon glyphicon-copy"]],null,null,null,null,null)),(n()(),t["\u0275eld"](13,0,null,null,5,"div",[["class","right-buttons"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,x)),t["\u0275did"](15,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](16,0,null,null,2,"my-subscribe-button",[],null,null,null,c.b,c.a)),t["\u0275did"](17,638976,[[1,4],["subscribeButton",4]],0,d.a,[s.a,a.p,p.a,m.a,g.a,v.a],{videoChannels:[0,"videoChannels"]},null),t["\u0275pad"](18,1),(n()(),t["\u0275eld"](19,0,null,null,6,"div",[["class","actor-followers"]],null,null,null,null,null)),(n()(),t["\u0275eld"](20,0,null,null,5,null,null,null,null,null,null,null)),t["\u0275did"](21,16384,null,0,u.NgPlural,[u.NgLocalization],{ngPlural:[0,"ngPlural"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,I)),t["\u0275did"](23,16384,null,0,u.NgPluralCase,[[8,"=1"],t.TemplateRef,t.ViewContainerRef,u.NgPlural],null,null),(n()(),t["\u0275and"](16777216,null,null,1,null,w)),t["\u0275did"](25,16384,null,0,u.NgPluralCase,[[8,"other"],t.TemplateRef,t.ViewContainerRef,u.NgPlural],null,null),(n()(),t["\u0275eld"](26,0,null,null,5,"a",[["class","actor-owner"],["title","Aneu a la p\xe0gina del compte del propietari"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var i=!0;return"click"===l&&(i=!1!==t["\u0275nov"](n,27).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&i),i}),null,null)),t["\u0275did"](27,671744,null,0,a.s,[a.p,a.a,u.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](28,2),(n()(),t["\u0275eld"](29,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](30,null,["Creat per ",""])),(n()(),t["\u0275eld"](31,0,null,null,0,"img",[["alt","Owner account avatar"]],[[8,"src",4]],null,null,null,null)),(n()(),t["\u0275eld"](32,0,null,null,18,"div",[["class","links"]],null,null,null,null,null)),(n()(),t["\u0275eld"](33,0,null,null,5,"a",[["class","title-page"],["routerLink","videos"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var i=!0;return"click"===l&&(i=!1!==t["\u0275nov"](n,34).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&i),i}),null,null)),t["\u0275did"](34,671744,[[3,4]],0,a.s,[a.p,a.a,u.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275did"](35,1720320,null,2,a.r,[a.p,t.ElementRef,t.Renderer2,[2,a.q],[2,a.s]],{routerLinkActive:[0,"routerLinkActive"]},null),t["\u0275qud"](603979776,2,{links:1}),t["\u0275qud"](603979776,3,{linksWithHrefs:1}),(n()(),t["\u0275ted"](-1,null,["V\xeddeos"])),(n()(),t["\u0275eld"](39,0,null,null,5,"a",[["class","title-page"],["routerLink","video-playlists"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var i=!0;return"click"===l&&(i=!1!==t["\u0275nov"](n,40).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&i),i}),null,null)),t["\u0275did"](40,671744,[[5,4]],0,a.s,[a.p,a.a,u.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275did"](41,1720320,null,2,a.r,[a.p,t.ElementRef,t.Renderer2,[2,a.q],[2,a.s]],{routerLinkActive:[0,"routerLinkActive"]},null),t["\u0275qud"](603979776,4,{links:1}),t["\u0275qud"](603979776,5,{linksWithHrefs:1}),(n()(),t["\u0275ted"](-1,null,["Video playlists"])),(n()(),t["\u0275eld"](45,0,null,null,5,"a",[["class","title-page"],["routerLink","about"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var i=!0;return"click"===l&&(i=!1!==t["\u0275nov"](n,46).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&i),i}),null,null)),t["\u0275did"](46,671744,[[7,4]],0,a.s,[a.p,a.a,u.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275did"](47,1720320,null,2,a.r,[a.p,t.ElementRef,t.Renderer2,[2,a.q],[2,a.s]],{routerLinkActive:[0,"routerLinkActive"]},null),t["\u0275qud"](603979776,6,{links:1}),t["\u0275qud"](603979776,7,{linksWithHrefs:1}),(n()(),t["\u0275ted"](-1,null,["Quant a"])),(n()(),t["\u0275eld"](51,0,null,null,2,"div",[["class","margin-content"]],null,null,null,null,null)),(n()(),t["\u0275eld"](52,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t["\u0275did"](53,212992,null,0,a.u,[a.b,t.ViewContainerRef,t.ComponentFactoryResolver,[8,null],t.ChangeDetectorRef],null,null)],(function(n,l){var e=l.component;n(l,11,0,"",e.videoChannel.nameWithHost),n(l,15,0,e.isChannelManageable);var t=n(l,18,0,e.videoChannel);n(l,17,0,t),n(l,21,0,e.videoChannel.followersCount);var i=n(l,28,0,"/accounts",e.videoChannel.ownerBy);n(l,27,0,i),n(l,34,0,"videos"),n(l,35,0,"active"),n(l,40,0,"video-playlists"),n(l,41,0,"active"),n(l,46,0,"about"),n(l,47,0,"active"),n(l,53,0)}),(function(n,l){var e=l.component;n(l,3,0,e.videoChannel.avatarUrl),n(l,7,0,e.videoChannel.displayName),n(l,9,0,e.videoChannel.nameWithHost),n(l,26,0,t["\u0275nov"](l,27).target,t["\u0275nov"](l,27).href),n(l,30,0,e.videoChannel.ownerBy),n(l,31,0,e.videoChannel.ownerAvatarUrl),n(l,33,0,t["\u0275nov"](l,34).target,t["\u0275nov"](l,34).href),n(l,39,0,t["\u0275nov"](l,40).target,t["\u0275nov"](l,40).href),n(l,45,0,t["\u0275nov"](l,46).target,t["\u0275nov"](l,46).href)}))}function L(n){return t["\u0275vid"](0,[t["\u0275qud"](671088640,1,{subscribeButton:0}),(n()(),t["\u0275and"](16777216,null,null,1,null,S)),t["\u0275did"](2,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,2,0,l.component.videoChannel)}),null)}function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,L,_)),t["\u0275did"](1,245760,null,0,M,[g.a,a.a,p.a,s.a,h.a,k.a,P.HotkeysService],null,null)],(function(n,l){n(l,1,0)}),null)}var T=t["\u0275ccf"]("ng-component",M,R,{},{},[]),N=e("heyd"),V=e("WMch"),A=e("MGin"),D=e("G0yt"),F=e("kIzR"),B=e("fKnF"),j=e("ihI+"),E=e("8qHF"),H=e("s7LF"),K=e("ybWZ"),z=e("DKkR"),q=e("4SI2"),U=e("fR23"),W=e("pyEO"),G=e("biPt"),$=e("F3OD"),J=e("HB7e"),X=(e("Rtfg"),e("KwVR"),e("c7xs")),Z=e("SxV6"),Q=e("vkgz");class Y extends X.a{constructor(n,l,e,t,i,o,a,u,r,c){super(),this.i18n=n,this.router=l,this.serverService=e,this.route=t,this.authService=i,this.notifier=o,this.confirmService=a,this.screenService=u,this.videoChannelService=r,this.videoService=c,this.loadOnInit=!1,this.titlePage=this.i18n("Published videos")}ngOnInit(){super.ngOnInit(),this.videoChannelSub=this.videoChannelService.videoChannelLoaded.pipe(Object(Z.a)()).subscribe(n=>{this.videoChannel=n,this.reloadVideos(),this.generateSyndicationList()})}ngOnDestroy(){this.videoChannelSub&&this.videoChannelSub.unsubscribe(),super.ngOnDestroy()}getVideosObservable(n){const l=Object(J.e)(this.pagination,{currentPage:n});return this.videoService.getVideoChannelVideos(this.videoChannel,l,this.sort).pipe(Object(Q.a)(({total:n})=>{this.titlePage=this.i18n(`{total, plural, =1 {Published 1 video} other {Published ${n} videos}}`,{total:n})}))}generateSyndicationList(){this.syndicationItems=this.videoService.getVideoChannelFeedUrls(this.videoChannel.id)}}var nn=e("37nT"),ln=t["\u0275crt"]({encapsulation:0,styles:[N.a,[".title-page-single[_ngcontent-%COMP%]{margin-top:0}"]],data:{}});function en(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"my-feed",[],null,null,null,V.b,V.a)),t["\u0275did"](1,49152,null,0,A.a,[],{syndicationItems:[0,"syndicationItems"]},null)],(function(n,l){n(l,1,0,l.component.syndicationItems)}),null)}function tn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"div",[["class","title-page title-page-single"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,16777216,null,null,2,"div",[["container","body"],["placement","bottom"]],null,null,null,null,null)),t["\u0275did"](2,212992,null,0,D.ib,[t.ElementRef,t.Renderer2,t.Injector,t.ComponentFactoryResolver,t.ViewContainerRef,D.jb,t.NgZone,u.DOCUMENT,t.ChangeDetectorRef,t.ApplicationRef],{placement:[0,"placement"],container:[1,"container"],ngbTooltip:[2,"ngbTooltip"]},null),(n()(),t["\u0275ted"](3,null,[" "," "])),(n()(),t["\u0275and"](16777216,null,null,1,null,en)),t["\u0275did"](5,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,2,0,"bottom","body",e.titleTooltip),n(l,5,0,e.titlePage)}),(function(n,l){n(l,3,0,l.component.titlePage)}))}function on(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,9,"a",[["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var i=!0;return"click"===l&&(i=!1!==t["\u0275nov"](n,1).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&i),i}),null,null)),t["\u0275did"](1,671744,[[2,4]],0,a.s,[a.p,a.a,u.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275did"](2,1720320,null,2,a.r,[a.p,t.ElementRef,t.Renderer2,[2,a.q],[2,a.s]],{routerLinkActive:[0,"routerLinkActive"]},null),t["\u0275qud"](603979776,1,{links:1}),t["\u0275qud"](603979776,2,{linksWithHrefs:1}),(n()(),t["\u0275eld"](5,0,null,null,4,"button",[["class","btn"]],null,null,null,null,null)),(n()(),t["\u0275eld"](6,0,null,null,1,"my-global-icon",[],null,null,null,F.b,F.a)),t["\u0275did"](7,114688,null,0,B.a,[t.ElementRef,j.a],{iconName:[0,"iconName"]},null),(n()(),t["\u0275eld"](8,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](9,null,["",""]))],(function(n,l){n(l,1,0,l.context.$implicit.routerLink),n(l,2,0,"active"),n(l,7,0,l.context.$implicit.iconName)}),(function(n,l){n(l,0,0,t["\u0275nov"](l,1).target,t["\u0275nov"](l,1).href),n(l,9,0,l.context.$implicit.label)}))}function an(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","action-block"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,on)),t["\u0275did"](2,278528,null,0,u.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,2,0,l.component.actions)}),null)}function un(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"div",[["class","moderation-block"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,3,"my-peertube-checkbox",[["inputName","display-unlisted-private"],["labelText","Display unlisted and private videos"]],null,[[null,"change"]],(function(n,l,e){var t=!0;return"change"===l&&(t=!1!==n.component.toggleModerationDisplay()&&t),t}),E.b,E.a)),t["\u0275prd"](5120,null,H.NG_VALUE_ACCESSOR,(function(n){return[n]}),[K.a]),t["\u0275did"](3,1097728,null,1,K.a,[t.ChangeDetectorRef],{inputName:[0,"inputName"],labelText:[1,"labelText"]},null),t["\u0275qud"](603979776,3,{templates:1})],(function(n,l){n(l,3,0,"display-unlisted-private","Display unlisted and private videos")}),null)}function rn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","no-results"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Sense resultats."]))],null,null)}function cn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","date-title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,[" "," "]))],null,(function(n,l){n(l,1,0,l.component.getCurrentGroupedDateLabel(l.parent.context.$implicit))}))}function dn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,cn)),t["\u0275did"](2,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](3,0,null,null,1,"my-video-miniature",[],null,[[null,"videoBlacklisted"],[null,"videoRemoved"]],(function(n,l,e){var t=!0,i=n.component;return"videoBlacklisted"===l&&(t=!1!==i.removeVideoFromArray(n.context.$implicit)&&t),"videoRemoved"===l&&(t=!1!==i.removeVideoFromArray(n.context.$implicit)&&t),t}),z.b,z.a)),t["\u0275did"](4,114688,null,0,q.a,[U.a,W.a,g.a,s.a,G.a,t.ChangeDetectorRef,t.LOCALE_ID],{user:[0,"user"],video:[1,"video"],ownerDisplayType:[2,"ownerDisplayType"],displayOptions:[3,"displayOptions"],displayVideoActions:[4,"displayVideoActions"]},{videoBlacklisted:"videoBlacklisted",videoRemoved:"videoRemoved"})],(function(n,l){var e=l.component;n(l,2,0,e.getCurrentGroupedDateLabel(l.context.$implicit)),n(l,4,0,e.user,l.context.$implicit,e.ownerDisplayType,e.displayOptions,e.displayVideoActions)}),null)}function sn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,13,"div",[["class","margin-content"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,6,"div",[["class","videos-header"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,tn)),t["\u0275did"](3,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,an)),t["\u0275did"](5,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,un)),t["\u0275did"](7,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,rn)),t["\u0275did"](9,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](10,0,null,null,3,"div",[["class","videos"],["myInfiniteScroller",""]],null,[[null,"nearOfBottom"]],(function(n,l,e){var t=!0;return"nearOfBottom"===l&&(t=!1!==n.component.onNearOfBottom()&&t),t}),null,null)),t["\u0275did"](11,2310144,null,0,$.a,[t.ElementRef],{autoInit:[0,"autoInit"],dataObservable:[1,"dataObservable"]},{nearOfBottom:"nearOfBottom"}),(n()(),t["\u0275and"](16777216,null,null,1,null,dn)),t["\u0275did"](13,278528,null,0,u.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null)],(function(n,l){var e=l.component;n(l,3,0,e.titlePage),n(l,5,0,e.actions.length>0),n(l,7,0,e.displayModerationBlock),n(l,9,0,e.hasDoneFirstQuery&&0===e.videos.length),n(l,11,0,!0,e.onDataSubject.asObservable()),n(l,13,0,e.videos,e.videoById)}),null)}function pn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"my-video-channel-videos",[],null,null,null,sn,ln)),t["\u0275did"](1,245760,null,0,Y,[g.a,a.p,W.a,a.a,s.a,p.a,nn.a,U.a,h.a,v.a],null,null)],(function(n,l){n(l,1,0)}),null)}var mn=t["\u0275ccf"]("my-video-channel-videos",Y,pn,{},{},[]),gn=e("7BWw"),vn=e("gcFA"),hn=e("XNiG"),fn=e("6dmf");class bn{constructor(n,l,e,t){this.notifier=n,this.confirmService=l,this.videoPlaylistService=e,this.videoChannelService=t,this.videoPlaylists=[],this.pagination={currentPage:1,itemsPerPage:20,totalItems:null},this.onDataSubject=new hn.a}ngOnInit(){this.videoChannelSub=this.videoChannelService.videoChannelLoaded.subscribe(n=>{this.videoChannel=n,this.loadVideoPlaylists()})}ngOnDestroy(){this.videoChannelSub&&this.videoChannelSub.unsubscribe()}onNearOfBottom(){Object(fn.a)(this.pagination)&&(this.pagination.currentPage+=1,this.loadVideoPlaylists())}loadVideoPlaylists(){this.videoPlaylistService.listChannelPlaylists(this.videoChannel,this.pagination).subscribe(n=>{this.videoPlaylists=this.videoPlaylists.concat(n.data),this.pagination.totalItems=n.total,this.onDataSubject.next(n.data)})}}var Cn=t["\u0275crt"]({encapsulation:0,styles:[[".video-playlist[_ngcontent-%COMP%]{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-pack:center;justify-content:center}.video-playlist[_ngcontent-%COMP%]   .playlist-miniature-container[_ngcontent-%COMP%]{margin-right:15px;margin-bottom:30px}"]],data:{}});function yn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","no-results"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["This channel does not have playlists."]))],null,null)}function On(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","playlist-miniature-container"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"my-video-playlist-miniature",[],null,null,null,gn.b,gn.a)),t["\u0275did"](2,49152,null,0,vn.a,[],{playlist:[0,"playlist"],toManage:[1,"toManage"]},null)],(function(n,l){n(l,2,0,l.context.$implicit,!1)}),null)}function Mn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","title-page title-page-single"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,[" Created "," playlists\n"])),(n()(),t["\u0275and"](16777216,null,null,1,null,yn)),t["\u0275did"](3,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](4,0,null,null,3,"div",[["class","video-playlist"],["myInfiniteScroller",""]],null,[[null,"nearOfBottom"]],(function(n,l,e){var t=!0;return"nearOfBottom"===l&&(t=!1!==n.component.onNearOfBottom()&&t),t}),null,null)),t["\u0275did"](5,2310144,null,0,$.a,[t.ElementRef],{dataObservable:[0,"dataObservable"]},{nearOfBottom:"nearOfBottom"}),(n()(),t["\u0275and"](16777216,null,null,1,null,On)),t["\u0275did"](7,278528,null,0,u.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var e=l.component;n(l,3,0,0===e.pagination.totalItems),n(l,5,0,e.onDataSubject.asObservable()),n(l,7,0,e.videoPlaylists)}),(function(n,l){n(l,1,0,l.component.pagination.totalItems)}))}function kn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"my-video-channel-playlists",[],null,null,null,Mn,Cn)),t["\u0275did"](1,245760,null,0,bn,[p.a,nn.a,G.a,h.a],null,null)],(function(n,l){n(l,1,0)}),null)}var Pn=t["\u0275ccf"]("my-video-channel-playlists",bn,kn,{},{},[]),_n=e("mrSG");e("V8il");class xn{constructor(n,l,e){this.i18n=n,this.videoChannelService=l,this.markdownService=e,this.descriptionHTML="",this.supportHTML=""}ngOnInit(){this.videoChannelSub=this.videoChannelService.videoChannelLoaded.subscribe(n=>Object(_n.a)(this,void 0,void 0,(function*(){this.videoChannel=n,this.descriptionHTML=yield this.markdownService.textMarkdownToHTML(this.videoChannel.description),this.supportHTML=yield this.markdownService.enhancedMarkdownToHTML(this.videoChannel.support)})))}ngOnDestroy(){this.videoChannelSub&&this.videoChannelSub.unsubscribe()}getVideoChannelDescription(){return this.descriptionHTML?this.descriptionHTML:this.i18n("No description")}}var In=e("45hh"),wn=t["\u0275crt"]({encapsulation:0,styles:[[".block[_ngcontent-%COMP%]{margin-bottom:40px}.block[_ngcontent-%COMP%]   .small-title[_ngcontent-%COMP%]{text-transform:uppercase;color:var(--mainColor);font-weight:700;font-size:13px;margin-bottom:20px}"]],data:{}});function Sn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"div",[["class","block"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"div",[["class","small-title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Donar suport a aquest canal"])),(n()(),t["\u0275eld"](3,0,null,null,0,"div",[["class","content"]],[[8,"innerHTML",1]],null,null,null,null))],null,(function(n,l){n(l,3,0,l.component.supportHTML)}))}function Ln(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,14,"div",[["class","row"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,6,"div",[["class","description col-md-6 col-sm-12"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,3,"div",[["class","block"]],null,null,null,null,null)),(n()(),t["\u0275eld"](3,0,null,null,1,"div",[["class","small-title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Descripci\xf3"])),(n()(),t["\u0275eld"](5,0,null,null,0,"div",[["class","content"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,Sn)),t["\u0275did"](7,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](8,0,null,null,6,"div",[["class","stats col-md-6 col-sm-12"]],null,null,null,null,null)),(n()(),t["\u0275eld"](9,0,null,null,5,"div",[["class","block"]],null,null,null,null,null)),(n()(),t["\u0275eld"](10,0,null,null,1,"div",[["class","small-title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Estad\xedstiques"])),(n()(),t["\u0275eld"](12,0,null,null,2,"div",[["class","content"]],null,null,null,null,null)),(n()(),t["\u0275ted"](13,null,["Creat ",""])),t["\u0275ppd"](14,1)],(function(n,l){n(l,7,0,l.component.supportHTML)}),(function(n,l){var e=l.component;n(l,5,0,e.getVideoChannelDescription());var i=t["\u0275unv"](l,13,0,n(l,14,0,t["\u0275nov"](l.parent,0),e.videoChannel.createdAt));n(l,13,0,i)}))}function Rn(n){return t["\u0275vid"](0,[t["\u0275pid"](0,u.DatePipe,[t.LOCALE_ID]),(n()(),t["\u0275and"](16777216,null,null,1,null,Ln)),t["\u0275did"](2,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,2,0,l.component.videoChannel)}),null)}function Tn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"my-video-channel-about",[],null,null,null,Rn,wn)),t["\u0275did"](1,245760,null,0,xn,[g.a,h.a,In.a],null,null)],(function(n,l){n(l,1,0)}),null)}var Nn=t["\u0275ccf"]("my-video-channel-about",xn,Tn,{},{},[]),Vn=e("9AJC"),An=e("IheW"),Dn=e("9IV+"),Fn=e("nvTd"),Bn=e("upD4"),jn=e("6RP5"),En=e("HvDw"),Hn=e("vQJr"),Kn=e("l/z6"),zn=e("cKMx"),qn=e("mTdg"),Un=e("3szM"),Wn=e("mpCX"),Gn=e("hD3C"),$n=e("F4xN"),Jn=e("Qmuk"),Xn=e("yXFd"),Zn=e("wpFD"),Qn=e("/7bI"),Yn=e("JtBY"),nl=e("0C+C"),ll=e("D/X6"),el=e("cvwr"),tl=e("tSwB"),il=e("RtUV"),ol=e("W3Gj"),al=e("AD+P"),ul=e("hlYB"),rl=e("I88b"),cl=e("GvuC"),dl=e("V+Hg"),sl=e("WZ9d"),pl=e("M9Zh"),ml=e("1MVc"),gl=e("mpAo"),vl=e("c6Lk"),hl=e("j8ES"),fl=e("Phsq");const bl={meta:{title:"Video channel videos"},reuse:{enabled:!0,key:"video-channel-videos-list"}},Cl={meta:{title:"Video channel playlists"}},yl={meta:{title:"About video channel"}};class Ol{}var Ml=e("7LN8"),kl=e("Fa87"),Pl=e("oz/p"),_l=e("VQoA"),xl=e("IP0z"),Il=e("/HVE"),wl=e("hOhj"),Sl=e("g4HV"),Ll=e("No4M"),Rl=e("PCNd");e.d(l,"VideoChannelsModuleNgFactory",(function(){return Tl}));var Tl=t["\u0275cmf"](i,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,T,mn,Pn,Nn,Vn.g,Vn.h,Vn.e,Vn.f]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,u.NgLocalization,u.NgLocaleLocalization,[t.LOCALE_ID,[2,u["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,H["\u0275angular_packages_forms_forms_o"],H["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,H.FormBuilder,H.FormBuilder,[]),t["\u0275mpd"](4608,An.m,An.s,[u.DOCUMENT,t.PLATFORM_ID,An.q]),t["\u0275mpd"](4608,An.t,An.t,[An.m,An.r]),t["\u0275mpd"](5120,An.a,(function(n,l){return[n,new Dn.a(l)]}),[An.t,t.Injector]),t["\u0275mpd"](4608,An.p,An.p,[]),t["\u0275mpd"](6144,An.n,null,[An.p]),t["\u0275mpd"](4608,An.l,An.l,[An.n]),t["\u0275mpd"](6144,An.b,null,[An.l]),t["\u0275mpd"](4608,An.g,An.o,[An.b,t.Injector]),t["\u0275mpd"](4608,An.c,An.c,[An.g]),t["\u0275mpd"](4608,D.A,D.A,[t.ComponentFactoryResolver,t.Injector,D.yb,D.B]),t["\u0275mpd"](4608,g.a,g.a,[t.TRANSLATIONS_FORMAT,t.TRANSLATIONS,t.LOCALE_ID,[2,g.b]]),t["\u0275mpd"](4608,k.a,k.a,[a.p,g.a]),t["\u0275mpd"](4608,Fn.a,Fn.a,[]),t["\u0275mpd"](4608,Bn.a,Bn.a,[An.c,Fn.a,k.a]),t["\u0275mpd"](4608,jn.a,jn.a,[An.c,Fn.a,k.a]),t["\u0275mpd"](4608,En.a,En.a,[An.c,Fn.a,k.a]),t["\u0275mpd"](4608,Hn.a,Hn.a,[An.c,k.a,Fn.a,g.a]),t["\u0275mpd"](4608,v.a,v.a,[An.c,k.a,Fn.a,W.a,g.a]),t["\u0275mpd"](4608,Kn.a,Kn.a,[An.c,k.a]),t["\u0275mpd"](4608,h.a,h.a,[An.c,Fn.a,k.a]),t["\u0275mpd"](4608,G.a,G.a,[An.c,W.a,k.a,Fn.a,t.NgZone]),t["\u0275mpd"](4608,zn.a,zn.a,[An.c,W.a,k.a]),t["\u0275mpd"](4608,qn.a,qn.a,[An.c,Fn.a,k.a,W.a]),t["\u0275mpd"](4608,m.a,m.a,[An.c,k.a,Fn.a,t.NgZone]),t["\u0275mpd"](4608,Un.a,Un.a,[H.FormBuilder]),t["\u0275mpd"](4608,Wn.a,Wn.a,[g.a]),t["\u0275mpd"](4608,Gn.a,Gn.a,[g.a]),t["\u0275mpd"](4608,$n.a,$n.a,[g.a]),t["\u0275mpd"](4608,Jn.a,Jn.a,[g.a]),t["\u0275mpd"](4608,Xn.a,Xn.a,[g.a]),t["\u0275mpd"](4608,Zn.a,Zn.a,[g.a]),t["\u0275mpd"](4608,Qn.a,Qn.a,[g.a]),t["\u0275mpd"](4608,Yn.a,Yn.a,[g.a]),t["\u0275mpd"](4608,nl.a,nl.a,[g.a]),t["\u0275mpd"](4608,ll.a,ll.a,[g.a]),t["\u0275mpd"](4608,el.a,el.a,[g.a]),t["\u0275mpd"](4608,tl.a,tl.a,[An.c,k.a,v.a,W.a]),t["\u0275mpd"](4608,il.a,il.a,[g.a]),t["\u0275mpd"](4608,ol.a,ol.a,[g.a]),t["\u0275mpd"](4608,al.a,al.a,[g.a]),t["\u0275mpd"](4608,ul.a,ul.a,[An.c,k.a,Fn.a]),t["\u0275mpd"](4608,rl.a,rl.a,[An.c,k.a,Fn.a,v.a]),t["\u0275mpd"](4608,cl.a,cl.a,[]),t["\u0275mpd"](4608,dl.a,dl.a,[cl.a]),t["\u0275mpd"](4608,In.a,In.a,[dl.a]),t["\u0275mpd"](4608,sl.a,sl.a,[An.c,Fn.a,k.a,In.a,W.a]),t["\u0275mpd"](4608,pl.a,pl.a,[g.a]),t["\u0275mpd"](4608,U.a,U.a,[]),t["\u0275mpd"](4608,ml.a,ml.a,[s.a,An.c,k.a,Fn.a,gl.a]),t["\u0275mpd"](4608,vl.a,vl.a,[An.c,Fn.a,k.a]),t["\u0275mpd"](4608,hl.a,hl.a,[An.c,Fn.a,k.a]),t["\u0275mpd"](1073742336,a.t,a.t,[[2,a.z],[2,a.p]]),t["\u0275mpd"](1073742336,Ol,Ol,[]),t["\u0275mpd"](1073742336,u.CommonModule,u.CommonModule,[]),t["\u0275mpd"](1073742336,H["\u0275angular_packages_forms_forms_d"],H["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,H.FormsModule,H.FormsModule,[]),t["\u0275mpd"](1073742336,H.ReactiveFormsModule,H.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,An.e,An.e,[]),t["\u0275mpd"](1073742336,An.d,An.d,[]),t["\u0275mpd"](1073742336,D.x,D.x,[]),t["\u0275mpd"](1073742336,D.C,D.C,[]),t["\u0275mpd"](1073742336,D.N,D.N,[]),t["\u0275mpd"](1073742336,D.Z,D.Z,[]),t["\u0275mpd"](1073742336,D.kb,D.kb,[]),t["\u0275mpd"](1073742336,D.m,D.m,[]),t["\u0275mpd"](1073742336,r.b,r.b,[]),t["\u0275mpd"](1073742336,Ml.SharedModule,Ml.SharedModule,[]),t["\u0275mpd"](1073742336,kl.InputTextModule,kl.InputTextModule,[]),t["\u0275mpd"](1073742336,Pl.InputMaskModule,Pl.InputMaskModule,[]),t["\u0275mpd"](1073742336,_l.b,_l.b,[]),t["\u0275mpd"](1073742336,_l.h,_l.h,[]),t["\u0275mpd"](1073742336,_l.e,_l.e,[]),t["\u0275mpd"](1073742336,_l.c,_l.c,[]),t["\u0275mpd"](1073742336,_l.f,_l.f,[]),t["\u0275mpd"](1073742336,_l.d,_l.d,[]),t["\u0275mpd"](1073742336,_l.g,_l.g,[]),t["\u0275mpd"](1073742336,xl.a,xl.a,[]),t["\u0275mpd"](1073742336,Il.b,Il.b,[]),t["\u0275mpd"](1073742336,wl.ScrollingModule,wl.ScrollingModule,[]),t["\u0275mpd"](1073742336,Sl.TooltipModule,Sl.TooltipModule,[]),t["\u0275mpd"](1073742336,Ll.MultiSelectModule,Ll.MultiSelectModule,[]),t["\u0275mpd"](1073742336,Rl.a,Rl.a,[]),t["\u0275mpd"](1073742336,i,i,[]),t["\u0275mpd"](1024,a.n,(function(){return[[{path:":videoChannelName",component:M,canActivateChild:[fl.a],children:[{path:"",redirectTo:"videos",pathMatch:"full"},{path:"videos",component:Y,data:bl},{path:"video-playlists",component:bn,data:Cl},{path:"about",component:xn,data:yl}]}]]}),[]),t["\u0275mpd"](256,t.LOCALE_ID,"ca-ES",[]),t["\u0275mpd"](256,An.q,"XSRF-TOKEN",[]),t["\u0275mpd"](256,An.r,"X-XSRF-TOKEN",[]),t["\u0275mpd"](256,t.TRANSLATIONS_FORMAT,"xlf",[])])}))}}]);