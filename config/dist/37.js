webpackJsonp([37],{62:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,l=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(t,n,l):o(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(2),l=n(26),r=function(){function CodeHighlighter(e){this.el=e}return CodeHighlighter.prototype.ngOnInit=function(){Prism.highlightElement(this.el.nativeElement)},CodeHighlighter}();r=i([a.Directive({selector:"[pCode]"}),o("design:paramtypes",[a.ElementRef])],r),t.CodeHighlighter=r;var s=function(){function CodeHighlighterModule(){}return CodeHighlighterModule}();s=i([a.NgModule({imports:[l.CommonModule],exports:[r],declarations:[r]}),o("design:paramtypes",[])],s),t.CodeHighlighterModule=s},71:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,l=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(t,n,l):o(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(2),l=n(26),r=function(){function TabViewNav(){this.orientation="top",this.onTabClick=new a.EventEmitter,this.onTabCloseClick=new a.EventEmitter}return TabViewNav.prototype.getDefaultHeaderClass=function(e){var t="ui-state-default ui-corner-"+this.orientation;return e.headerStyleClass&&(t=t+" "+e.headerStyleClass),t},TabViewNav.prototype.clickTab=function(e,t){this.onTabClick.emit({originalEvent:e,tab:t})},TabViewNav.prototype.clickClose=function(e,t){this.onTabCloseClick.emit({originalEvent:e,tab:t})},TabViewNav}();i([a.Input(),o("design:type",Array)],r.prototype,"tabs",void 0),i([a.Input(),o("design:type",String)],r.prototype,"orientation",void 0),i([a.Output(),o("design:type",a.EventEmitter)],r.prototype,"onTabClick",void 0),i([a.Output(),o("design:type",a.EventEmitter)],r.prototype,"onTabCloseClick",void 0),r=i([a.Component({selector:"[p-tabViewNav]",host:{"[class.ui-tabview-nav]":"true","[class.ui-helper-reset]":"true","[class.ui-helper-clearfix]":"true","[class.ui-widget-header]":"true","[class.ui-corner-all]":"true"},template:'\n        <template ngFor let-tab [ngForOf]="tabs">\n            <li [class]="getDefaultHeaderClass(tab)" [ngStyle]="tab.headerStyle" role="tab"\n                [ngClass]="{\'ui-tabview-selected ui-state-active\': tab.selected, \'ui-state-disabled\': tab.disabled}"\n                (click)="clickTab($event,tab)" *ngIf="!tab.closed"\n                [attr.aria-expanded]="tab.selected" [attr.aria-selected]="tab.selected">\n                <a href="#">\n                    <span class="ui-tabview-left-icon fa" [ngClass]="tab.leftIcon" *ngIf="tab.leftIcon"></span>\n                    <span class="ui-tabview-title">{{tab.header}}</span>\n                    <span class="ui-tabview-right-icon fa" [ngClass]="tab.rightIcon" *ngIf="tab.rightIcon"></span>\n                </a>\n                <span *ngIf="tab.closable" class="ui-tabview-close fa fa-close" (click)="clickClose($event,tab)"></span>\n            </li>\n        </template>\n    '}),o("design:paramtypes",[])],r),t.TabViewNav=r;var s=function(){function TabPanel(){}return TabPanel}();i([a.Input(),o("design:type",String)],s.prototype,"header",void 0),i([a.Input(),o("design:type",Boolean)],s.prototype,"selected",void 0),i([a.Input(),o("design:type",Boolean)],s.prototype,"disabled",void 0),i([a.Input(),o("design:type",Boolean)],s.prototype,"closable",void 0),i([a.Input(),o("design:type",Object)],s.prototype,"headerStyle",void 0),i([a.Input(),o("design:type",String)],s.prototype,"headerStyleClass",void 0),i([a.Input(),o("design:type",String)],s.prototype,"leftIcon",void 0),i([a.Input(),o("design:type",String)],s.prototype,"rightIcon",void 0),s=i([a.Component({selector:"p-tabPanel",template:'\n        <div class="ui-tabview-panel ui-widget-content" [style.display]="selected ? \'block\' : \'none\'" \n            *ngIf="!closed" role="tabpanel" [attr.aria-hidden]="!selected">\n            <ng-content></ng-content>\n        </div>\n    '}),o("design:paramtypes",[])],s),t.TabPanel=s;var c=function(){function TabView(e){this.el=e,this.orientation="top",this.onChange=new a.EventEmitter,this.onClose=new a.EventEmitter}return TabView.prototype.ngAfterContentInit=function(){var e=this;this.initTabs(),this.tabPanels.changes.subscribe(function(t){e.initTabs()})},TabView.prototype.initTabs=function(){this.tabs=this.tabPanels.toArray();var e=this.findSelectedTab();!e&&this.tabs.length&&(this.tabs[0].selected=!0)},TabView.prototype.open=function(e,t){if(t.disabled)return void e.preventDefault();if(!t.selected){var n=this.findSelectedTab();n&&(n.selected=!1),t.selected=!0,this.onChange.emit({originalEvent:e,index:this.findTabIndex(t)})}e.preventDefault()},TabView.prototype.close=function(e,t){var n=this;this.controlClose?this.onClose.emit({originalEvent:e,index:this.findTabIndex(t),close:function(){n.closeTab(t)}}):(this.closeTab(t),this.onClose.emit({originalEvent:e,index:this.findTabIndex(t)})),e.stopPropagation()},TabView.prototype.closeTab=function(e){if(e.selected){e.selected=!1;for(var t=0;t<this.tabs.length;t++){var n=this.tabs[t];if(!n.closed&&!e.disabled){n.selected=!0;break}}}e.closed=!0},TabView.prototype.findSelectedTab=function(){for(var e=0;e<this.tabs.length;e++)if(this.tabs[e].selected)return this.tabs[e];return null},TabView.prototype.findTabIndex=function(e){for(var t=-1,n=0;n<this.tabs.length;n++)if(this.tabs[n]==e){t=n;break}return t},TabView.prototype.getBlockableElement=function(){return this.el.nativeElement.children[0]},TabView}();i([a.Input(),o("design:type",String)],c.prototype,"orientation",void 0),i([a.Input(),o("design:type",Object)],c.prototype,"style",void 0),i([a.Input(),o("design:type",String)],c.prototype,"styleClass",void 0),i([a.Input(),o("design:type",Boolean)],c.prototype,"controlClose",void 0),i([a.ContentChildren(s),o("design:type",a.QueryList)],c.prototype,"tabPanels",void 0),i([a.Output(),o("design:type",a.EventEmitter)],c.prototype,"onChange",void 0),i([a.Output(),o("design:type",a.EventEmitter)],c.prototype,"onClose",void 0),c=i([a.Component({selector:"p-tabView",template:'\n        <div [ngClass]="\'ui-tabview ui-widget ui-widget-content ui-corner-all ui-tabview-\' + orientation" [ngStyle]="style" [class]="styleClass">\n            <ul p-tabViewNav role="tablist" *ngIf="orientation!=\'bottom\'" [tabs]="tabs" [orientation]="orientation" \n                (onTabClick)="open($event.originalEvent, $event.tab)" (onTabCloseClick)="close($event.originalEvent, $event.tab)"></ul>\n            <div class="ui-tabview-panels">\n                <ng-content></ng-content>\n            </div>\n            <ul p-tabViewNav role="tablist" *ngIf="orientation==\'bottom\'" [tabs]="tabs" [orientation]="orientation"\n                (onTabClick)="open($event.originalEvent, $event.tab)" (onTabCloseClick)="close($event.originalEvent, $event.tab)"></ul>\n        </div>\n    '}),o("design:paramtypes",[a.ElementRef])],c),t.TabView=c;var u=function(){function TabViewModule(){}return TabViewModule}();u=i([a.NgModule({imports:[l.CommonModule],exports:[c,s,r],declarations:[c,s,r]}),o("design:paramtypes",[])],u),t.TabViewModule=u},73:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,l=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(t,n,l):o(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(2),l=function(){function DomHandler(){}return DomHandler.prototype.addClass=function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},DomHandler.prototype.addMultipleClasses=function(e,t){if(e.classList)for(var n=t.split(" "),i=0;i<n.length;i++)e.classList.add(n[i]);else for(var n=t.split(" "),i=0;i<n.length;i++)e.className+=" "+n[i]},DomHandler.prototype.removeClass=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},DomHandler.prototype.hasClass=function(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)},DomHandler.prototype.siblings=function(e){return Array.prototype.filter.call(e.parentNode.children,function(t){return t!==e})},DomHandler.prototype.find=function(e,t){return e.querySelectorAll(t)},DomHandler.prototype.findSingle=function(e,t){return e.querySelector(t)},DomHandler.prototype.index=function(e){for(var t=e.parentNode.childNodes,n=0,i=0;i<t.length;i++){if(t[i]==e)return n;1==t[i].nodeType&&n++}return-1},DomHandler.prototype.relativePosition=function(e,t){var n,i,o=e.offsetParent?{width:e.outerWidth,height:e.outerHeight}:this.getHiddenElementDimensions(e),a=t.offsetHeight,l=t.offsetWidth,r=t.getBoundingClientRect(),s=this.getViewport();n=r.top+a+o.height>s.height?-1*o.height:a,i=r.left+o.width>s.width?l-o.width:0,e.style.top=n+"px",e.style.left=i+"px"},DomHandler.prototype.absolutePosition=function(e,t){var n,i,o=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=o.height,l=o.width,r=t.offsetHeight,s=t.offsetWidth,c=t.getBoundingClientRect(),u=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),d=this.getViewport();n=c.top+r+a>d.height?c.top+u-a:r+c.top+u,i=c.left+s+l>d.width?c.left+p+s-l:c.left+p,e.style.top=n+"px",e.style.left=i+"px"},DomHandler.prototype.getHiddenElementOuterHeight=function(e){e.style.visibility="hidden",e.style.display="block";var t=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",t},DomHandler.prototype.getHiddenElementOuterWidth=function(e){e.style.visibility="hidden",e.style.display="block";var t=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",t},DomHandler.prototype.getHiddenElementDimensions=function(e){var t={};return e.style.visibility="hidden",e.style.display="block",t.width=e.offsetWidth,t.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",t},DomHandler.prototype.scrollInView=function(e,t){var n=getComputedStyle(e).getPropertyValue("borderTopWidth"),i=n?parseFloat(n):0,o=getComputedStyle(e).getPropertyValue("paddingTop"),a=o?parseFloat(o):0,l=e.getBoundingClientRect(),r=t.getBoundingClientRect(),s=r.top+document.body.scrollTop-(l.top+document.body.scrollTop)-i-a,c=e.scrollTop,u=e.clientHeight,p=this.getOuterHeight(t);s<0?e.scrollTop=c+s:s+p>u&&(e.scrollTop=c+s-u+p)},DomHandler.prototype.fadeIn=function(e,t){e.style.opacity=0;var n=+new Date,i=0,o=function(){i=+e.style.opacity+((new Date).getTime()-n)/t,e.style.opacity=i,n=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,16))};o()},DomHandler.prototype.fadeOut=function(e,t){var n=1,i=50,o=t,a=i/o,l=setInterval(function(){n-=a,n<=0&&(n=0,clearInterval(l)),e.style.opacity=n},i)},DomHandler.prototype.getWindowScrollTop=function(){var e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)},DomHandler.prototype.getWindowScrollLeft=function(){var e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)},DomHandler.prototype.matches=function(e,t){var n=Element.prototype,i=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(e){return[].indexOf.call(document.querySelectorAll(e),this)!==-1};return i.call(e,t)},DomHandler.prototype.getOuterWidth=function(e,t){var n=e.offsetWidth;if(t){var i=getComputedStyle(e);n+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return n},DomHandler.prototype.getHorizontalPadding=function(e){var t=getComputedStyle(e);return parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)},DomHandler.prototype.getHorizontalMargin=function(e){var t=getComputedStyle(e);return parseFloat(t.marginLeft)+parseFloat(t.marginRight)},DomHandler.prototype.innerWidth=function(e){var t=e.offsetWidth,n=getComputedStyle(e);return t+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)},DomHandler.prototype.width=function(e){var t=e.offsetWidth,n=getComputedStyle(e);return t-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)},DomHandler.prototype.getOuterHeight=function(e,t){var n=e.offsetHeight;if(t){var i=getComputedStyle(e);n+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return n},DomHandler.prototype.getHeight=function(e){var t=e.offsetHeight,n=getComputedStyle(e);return t-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth)},DomHandler.prototype.getWidth=function(e){var t=e.offsetWidth,n=getComputedStyle(e);return t-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth)},DomHandler.prototype.getViewport=function(){var e=window,t=document,n=t.documentElement,i=t.getElementsByTagName("body")[0],o=e.innerWidth||n.clientWidth||i.clientWidth,a=e.innerHeight||n.clientHeight||i.clientHeight;return{width:o,height:a}},DomHandler.prototype.getOffset=function(e){for(var t=e.offsetLeft,n=e.offsetTop;e=e.offsetParent;)t+=e.offsetLeft,n+=e.offsetTop;return{left:t,top:n}},DomHandler.prototype.equals=function(e,t){if(null==e&&null==t)return!0;if(null==e||null==t)return!1;if(e==t)return delete e._$visited,!0;if("object"==typeof e&&"object"==typeof t){e._$visited=!0;for(var n in e)if("_$visited"!==n){if(e.hasOwnProperty(n)!==t.hasOwnProperty(n))return!1;switch(typeof e[n]){case"object":if(e[n]&&e[n]._$visited||!this.equals(e[n],t[n]))return!1;break;case"function":if("undefined"==typeof t[n]||"compare"!=n&&e[n].toString()!=t[n].toString())return!1;break;default:if(e[n]!=t[n])return!1}}for(var n in t)if("undefined"==typeof e[n])return!1;return delete e._$visited,!0}return!1},DomHandler.prototype.getUserAgent=function(){return navigator.userAgent},DomHandler.prototype.isIE=function(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return!0;var n=e.indexOf("Trident/");if(n>0){e.indexOf("rv:");return!0}var i=e.indexOf("Edge/");return i>0},DomHandler.prototype.appendChild=function(e,t){if(this.isElement(t))t.appendChild(e);else{if(!t.el||!t.el.nativeElement)throw"Cannot append "+t+" to "+e;t.el.nativeElement.appendChild(e)}},DomHandler.prototype.removeChild=function(e,t){if(this.isElement(t))t.removeChild(e);else{if(!t.el||!t.el.nativeElement)throw"Cannot remove "+e+" from "+t;t.el.nativeElement.removeChild(e)}},DomHandler.prototype.isElement=function(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName},DomHandler}();l.zindex=1e3,l=i([a.Injectable(),o("design:paramtypes",[])],l),t.DomHandler=l},242:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,l=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(t,n,l):o(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(2),l=n(26),r=n(243),s=n(244),c=n(245),u=n(71),p=n(62),d=function(){function MegaMenuDemoModule(){}return MegaMenuDemoModule}();d=i([a.NgModule({imports:[l.CommonModule,s.MegaMenuDemoRoutingModule,c.MegaMenuModule,u.TabViewModule,p.CodeHighlighterModule],declarations:[r.MegaMenuDemo]}),o("design:paramtypes",[])],d),t.MegaMenuDemoModule=d},243:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,l=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(t,n,l):o(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(2),l=function(){function MegaMenuDemo(){}return MegaMenuDemo.prototype.ngOnInit=function(){this.items=[{label:"TV",icon:"fa-check",items:[[{label:"TV 1",items:[{label:"TV 1.1"},{label:"TV 1.2"}]},{label:"TV 2",items:[{label:"TV 2.1"},{label:"TV 2.2"}]}],[{label:"TV 3",items:[{label:"TV 3.1"},{label:"TV 3.2"}]},{label:"TV 4",items:[{label:"TV 4.1"},{label:"TV 4.2"}]}]]},{label:"Sports",icon:"fa-soccer-ball-o",items:[[{label:"Sports 1",items:[{label:"Sports 1.1"},{label:"Sports 1.2"}]},{label:"Sports 2",items:[{label:"Sports 2.1"},{label:"Sports 2.2"}]}],[{label:"Sports 3",items:[{label:"Sports 3.1"},{label:"Sports 3.2"}]},{label:"Sports 4",items:[{label:"Sports 4.1"},{label:"Sports 4.2"}]}],[{label:"Sports 5",items:[{label:"Sports 5.1"},{label:"Sports 5.2"}]},{label:"Sports 6",items:[{label:"Sports 6.1"},{label:"Sports 6.2"}]}]]},{label:"Entertainment",icon:"fa-child",items:[[{label:"Entertainment 1",items:[{label:"Entertainment 1.1"},{label:"Entertainment 1.2"}]},{label:"Entertainment 2",items:[{label:"Entertainment 2.1"},{label:"Entertainment 2.2"}]}],[{label:"Entertainment 3",items:[{label:"Entertainment 3.1"},{label:"Entertainment 3.2"}]},{label:"Entertainment 4",items:[{label:"Entertainment 4.1"},{label:"Entertainment 4.2"}]}]]},{label:"Technology",icon:"fa-gears",items:[[{label:"Technology 1",items:[{label:"Technology 1.1"},{label:"Technology 1.2"}]},{label:"Technology 2",items:[{label:"Technology 2.1"},{label:"Technology 2.2"}]},{label:"Technology 3",items:[{label:"Technology 3.1"},{label:"Technology 3.2"}]}],[{label:"Technology 4",items:[{label:"Technology 4.1"},{label:"Technology 4.2"}]}]]}]},MegaMenuDemo}();l=i([a.Component({templateUrl:"showcase/demo/megamenu/megamenudemo.html"}),o("design:paramtypes",[])],l),t.MegaMenuDemo=l},244:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,l=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(t,n,l):o(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(2),l=n(28),r=n(243),s=function(){function MegaMenuDemoRoutingModule(){}return MegaMenuDemoRoutingModule}();s=i([a.NgModule({imports:[l.RouterModule.forChild([{path:"",component:r.MegaMenuDemo}])],exports:[l.RouterModule]}),o("design:paramtypes",[])],s),t.MegaMenuDemoRoutingModule=s},245:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,l=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(t,n,l):o(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(2),l=n(26),r=n(73),s=n(28),c=function(){function MegaMenu(e,t,n,i){this.el=e,this.domHandler=t,this.renderer=n,this.router=i,this.orientation="horizontal"}return MegaMenu.prototype.onItemMouseEnter=function(e,t,n){if(!n.disabled){this.activeItem=t;var i=t.children[0].nextElementSibling;i&&(i.style.zIndex=++r.DomHandler.zindex,"horizontal"===this.orientation?(i.style.top=this.domHandler.getOuterHeight(t.children[0])+"px",i.style.left="0px"):"vertical"===this.orientation&&(i.style.top="0px",i.style.left=this.domHandler.getOuterWidth(t.children[0])+"px"))}},MegaMenu.prototype.onItemMouseLeave=function(e,t){this.activeItem=null},MegaMenu.prototype.itemClick=function(e,t){return t.disabled?void e.preventDefault():(t.url&&!t.routerLink||e.preventDefault(),t.command&&(t.eventEmitter||(t.eventEmitter=new a.EventEmitter,t.eventEmitter.subscribe(t.command)),t.eventEmitter.emit({originalEvent:e,item:t})),t.routerLink&&this.router.navigate(t.routerLink),void(this.activeItem=null))},MegaMenu.prototype.unsubscribe=function(e){if(e.eventEmitter&&e.eventEmitter.unsubscribe(),e.items)for(var t=0,n=e.items;t<n.length;t++){var i=n[t];this.unsubscribe(i)}},MegaMenu.prototype.ngOnDestroy=function(){if(this.model)for(var e=0,t=this.model;e<t.length;e++){var n=t[e];this.unsubscribe(n)}},MegaMenu.prototype.getColumnClass=function(e){var t,n=e.items?e.items.length:0;switch(n){case 2:t="ui-g-6";break;case 3:t="ui-g-4";break;case 4:t="ui-g-3";break;case 6:t="ui-g-2";break;default:t="ui-g-12"}return t},MegaMenu}();i([a.Input(),o("design:type",Array)],c.prototype,"model",void 0),i([a.Input(),o("design:type",Object)],c.prototype,"style",void 0),i([a.Input(),o("design:type",String)],c.prototype,"styleClass",void 0),i([a.Input(),o("design:type",String)],c.prototype,"orientation",void 0),c=i([a.Component({selector:"p-megaMenu",template:'\n        <div [class]="styleClass" [ngStyle]="style"\n            [ngClass]="{\'ui-menu ui-menubar ui-megamenu ui-widget ui-widget-content ui-corner-all ui-helper-clearfix\':true,\'ui-megamenu-vertical\': orientation == \'vertical\'}">\n            <ul class="ui-menu-list ui-helper-reset ui-menubar-root-list">\n                <template ngFor let-category [ngForOf]="model">\n                    <li #item [ngClass]="{\'ui-menuitem ui-widget ui-corner-all\':true,\'ui-menu-parent\':category.items,\'ui-menuitem-active\':item==activeItem}"\n                        (mouseenter)="onItemMouseEnter($event, item, category)" (mouseleave)="onItemMouseLeave($event, item)">\n                        <a class="ui-menuitem-link ui-corner-all ui-submenu-link" [ngClass]="{\'ui-state-disabled\':category.disabled}">\n                            <span class="ui-submenu-icon fa fa-fw" [ngClass]="{\'fa-caret-down\':orientation==\'horizontal\',\'fa-caret-right\':orientation==\'vertical\'}"></span>\n                            <span class="ui-menuitem-icon fa fa-fw" [ngClass]="category.icon"></span>\n                            {{category.label}}\n                        </a>\n                        <div class="ui-megamenu-panel ui-widget-content ui-menu-list ui-corner-all ui-helper-clearfix ui-menu-child ui-shadow">\n                            <div class="ui-g">\n                                <template ngFor let-column [ngForOf]="category.items">\n                                    <div [class]="getColumnClass(category)">\n                                        <template ngFor let-submenu [ngForOf]="column">\n                                            <ul class="ui-menu-list ui-helper-reset">\n                                                <li class="ui-widget-header ui-corner-all"><h3>{{submenu.label}}</h3></li>\n                                                <li *ngFor="let item of submenu.items" class="ui-menuitem ui-widget ui-corner-all">\n                                                    <a [href]="item.url||\'#\'" class="ui-menuitem-link ui-corner-all" \n                                                        [ngClass]="{\'ui-state-disabled\':item.disabled}" (click)="itemClick($event, item)">\n                                                        <span class="ui-menuitem-icon fa fa-fw" *ngIf="item.icon" [ngClass]="item.icon"></span>\n                                                        <span class="ui-menuitem-text">{{item.label}}</span>\n                                                    </a>\n                                                </li>\n                                            </ul>\n                                        </template>\n                                    </div>\n                                </template>\n                            </div>\n                        </div>\n                    </li>\n                </template>\n            </ul>\n        </div>\n    ',providers:[r.DomHandler]}),o("design:paramtypes",[a.ElementRef,r.DomHandler,a.Renderer,s.Router])],c),t.MegaMenu=c;var u=function(){function MegaMenuModule(){}return MegaMenuModule}();u=i([a.NgModule({imports:[l.CommonModule],exports:[c],declarations:[c]}),o("design:paramtypes",[])],u),t.MegaMenuModule=u}});