(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{l9z1:function(t,e,n){"use strict";n.r(e);var c=n("3Pt+"),o=n("tyNb"),s=n("ofXK"),i=n("PCNd"),r=n("Hr3q");class a{constructor(){this.events=[],this.loaded=!1,this.subscription=null}}var b=n("fXoL");let g=(()=>{class t{constructor(t){this._eventApi=t}hasEvent(){return void 0!==this.event}setEvent(t){this.event=t}getEvent(){return this.event}getUpcomingEvents(){return void 0===this.upcomingEvents&&(this.upcomingEvents=new a),this.upcomingEvents.subscription=this._eventApi.getFutureEvents().subscribe(t=>{this.upcomingEvents.loaded=!0,this.upcomingEvents.events=t}),this.upcomingEvents}getPastEvents(){return void 0===this.pastEvents&&(this.pastEvents=new a),this.pastEvents.subscription=this._eventApi.getPastEvents().subscribe(t=>{this.pastEvents.loaded=!0,this.pastEvents.events=t}),this.pastEvents}pastEventsLoaded(){return void 0!==this.pastEvents}}return t.\u0275fac=function(e){return new(e||t)(b.Tb(r.a))},t.\u0275prov=b.Ib({token:t,factory:t.\u0275fac}),t})();var d=n("f3yp");function m(t,e){1&t&&(b.Pb(0,"td",8),b.Nb(1,"csc-spinner"),b.Ob())}function p(t,e){if(1&t){const t=b.Qb();b.Pb(0,"tr"),b.Pb(1,"td"),b.Pb(2,"a",9),b.Xb("click",(function(n){b.lc(t);const c=e.$implicit;return b.Zb().selectEvent(c)})),b.tc(3),b.Ob(),b.Ob(),b.Pb(4,"td",10),b.tc(5),b.Ob(),b.Ob()}if(2&t){const t=e.$implicit;b.Ab(2),b.gc("routerLink",t.$key),b.Ab(1),b.uc(t.title),b.Ab(2),b.uc(t.datetime.date)}}function v(t,e){1&t&&(b.Pb(0,"tr"),b.Pb(1,"td",8),b.tc(2,"There are currently no additional events planned yet for the remainder of the month."),b.Ob(),b.Ob())}function l(t,e){if(1&t){const t=b.Qb();b.Pb(0,"div",11),b.Pb(1,"a",12),b.Xb("click",(function(e){return b.lc(t),b.Zb().loadPastEvents()})),b.tc(2,"Show past events"),b.Ob(),b.Ob()}}function f(t,e){1&t&&(b.Pb(0,"td",8),b.Nb(1,"csc-spinner"),b.Ob())}function u(t,e){if(1&t){const t=b.Qb();b.Pb(0,"tr"),b.Pb(1,"td"),b.Pb(2,"a",9),b.Xb("click",(function(n){b.lc(t);const c=e.$implicit;return b.Zb(2).selectEvent(c)})),b.tc(3),b.Ob(),b.Ob(),b.Pb(4,"td",10),b.tc(5),b.Ob(),b.Ob()}if(2&t){const t=e.$implicit;b.Ab(2),b.gc("routerLink",t.$key),b.Ab(1),b.uc(t.title),b.Ab(2),b.uc(t.datetime.date)}}function h(t,e){1&t&&(b.Pb(0,"tr"),b.Pb(1,"td",8),b.tc(2,"There are no past events to display."),b.Ob(),b.Ob())}function O(t,e){if(1&t&&(b.Pb(0,"table"),b.Pb(1,"tbody"),b.Pb(2,"tr"),b.sc(3,f,2,0,"td",3),b.Ob(),b.sc(4,u,6,3,"tr",4),b.sc(5,h,3,0,"tr",5),b.Ob(),b.Ob()),2&t){const t=b.Zb();b.Ab(3),b.gc("ngIf",!t.pastEvents.loaded),b.Ab(1),b.gc("ngForOf",t.pastEvents.events),b.Ab(1),b.gc("ngIf",0===t.pastEvents.events.length&&t.pastEvents.loaded)}}let P=(()=>{class t{constructor(t,e){this._eventDataService=t,this.router=e,this.upcomingEvents=new a}ngOnInit(){this.upcomingEvents=this._eventDataService.getUpcomingEvents(),this.pastEventsLoaded()&&(this.pastEvents=this._eventDataService.getPastEvents())}loadPastEvents(){this.pastEvents=this._eventDataService.getPastEvents()}pastEventsLoaded(){return this._eventDataService.pastEventsLoaded()}selectEvent(t){this._eventDataService.setEvent(t)}ngOnDestroy(){this.upcomingEvents.subscription.unsubscribe(),void 0!==this.pastEvents&&this.pastEvents.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(b.Mb(g),b.Mb(o.b))},t.\u0275cmp=b.Gb({type:t,selectors:[["csc-events-home"]],decls:17,vars:5,consts:[[1,"container"],[1,"csc-events-upcoming"],[1,"csc-header"],["colspan","2",4,"ngIf"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"csc-events-past"],["class","csc-events-past-load",4,"ngIf"],["colspan","2"],[3,"routerLink","click"],[1,"csc-event-date"],[1,"csc-events-past-load"],[3,"click"]],template:function(t,e){1&t&&(b.Pb(0,"div",0),b.Pb(1,"p"),b.tc(2," We host several social and educational events throughout the year. Select the interested event to learn more and sign up! "),b.Ob(),b.Pb(3,"div",1),b.Pb(4,"h3",2),b.tc(5,"Upcoming Events"),b.Ob(),b.Pb(6,"table"),b.Pb(7,"tbody"),b.Pb(8,"tr"),b.sc(9,m,2,0,"td",3),b.Ob(),b.sc(10,p,6,3,"tr",4),b.sc(11,v,3,0,"tr",5),b.Ob(),b.Ob(),b.Ob(),b.Pb(12,"div",6),b.Pb(13,"h3",2),b.tc(14,"Past Events"),b.Ob(),b.sc(15,l,3,0,"div",7),b.sc(16,O,6,3,"table",5),b.Ob(),b.Ob()),2&t&&(b.Ab(9),b.gc("ngIf",!e.upcomingEvents.loaded),b.Ab(1),b.gc("ngForOf",e.upcomingEvents.events),b.Ab(1),b.gc("ngIf",0===e.upcomingEvents.events.length&&e.upcomingEvents.loaded),b.Ab(4),b.gc("ngIf",!e.pastEventsLoaded()),b.Ab(1),b.gc("ngIf",e.pastEventsLoaded()))},directives:[s.m,s.l,d.a,o.d],styles:[".csc-event-type[_ngcontent-%COMP%]{text-align:center}.csc-event-type[_ngcontent-%COMP%]   .csc-header[_ngcontent-%COMP%]{margin:0}.csc-event-date[_ngcontent-%COMP%]{text-align:right;min-width:110px}.csc-events-past-load[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#aa3b3b;border-bottom:1px solid #aa3b3b;padding-bottom:5px}a[_ngcontent-%COMP%]{color:#aa3b3b}"]}),t})();var E=n("IzEk"),_=n("R2lv"),I=n("nM4m"),C=n("+wgX"),M=n("sELr"),A=n("M0Hd"),w=n("Js2B"),x=n("DJW9");let y=(()=>{class t{transform(t,...e){return t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=b.Lb({name:"anyCast",type:t,pure:!0}),t})();const F=["formElement"];function k(t,e){1&t&&(b.Pb(0,"span",9),b.tc(1," Required field "),b.Ob())}function N(t,e){if(1&t&&(b.Pb(0,"div"),b.Nb(1,"input",8),b.sc(2,k,2,0,"span",5),b.Ob()),2&t){const t=b.Zb().$implicit,e=b.Zb(3);b.Ab(1),b.gc("formControlName",t.name),b.Ab(1),b.gc("ngIf",!e.form.controls[t.name].valid&&(e.form.controls[t.name].touched||e.submitTried))}}function S(t,e){if(1&t&&(b.Pb(0,"div"),b.Pb(1,"csc-checkbox"),b.Nb(2,"input",10),b.Ob(),b.Ob()),2&t){const t=b.Zb().$implicit;b.Ab(2),b.gc("formControlName",t.name)}}function U(t,e){if(1&t&&(b.Pb(0,"option",13),b.tc(1),b.Ob()),2&t){const t=e.$implicit;b.gc("value",t.name),b.Ab(1),b.vc(" ",t.name," ")}}function Z(t,e){1&t&&(b.Pb(0,"span",9),b.tc(1," Required field "),b.Ob())}function L(t,e){if(1&t&&(b.Pb(0,"div"),b.Pb(1,"select",11),b.sc(2,U,2,2,"option",12),b.Ob(),b.sc(3,Z,2,0,"span",5),b.Ob()),2&t){const t=b.Zb().$implicit,e=b.Zb(3);b.Ab(1),b.gc("formControlName",t.name),b.Ab(1),b.gc("ngForOf",t.options),b.Ab(1),b.gc("ngIf",!e.form.controls[t.name].valid&&(e.form.controls[t.name].touched||e.submitTried))}}function D(t,e){if(1&t&&(b.Pb(0,"div"),b.Pb(1,"csc-input-container",7),b.sc(2,N,3,2,"div",0),b.sc(3,S,3,1,"div",0),b.sc(4,L,4,3,"div",0),b.Ob(),b.Ob()),2&t){const t=e.$implicit,n=b.Zb(3);b.Ab(1),b.gc("label",t.description+(t.required?" (*)":"")),b.Ab(1),b.gc("ngIf",n.isTextInput(t)),b.Ab(1),b.gc("ngIf",n.isCheckboxInput(t)),b.Ab(1),b.gc("ngIf",n.isRadioInput(t))}}function T(t,e){1&t&&(b.Pb(0,"p",9),b.tc(1,"Please fill all required fields, indicated with *"),b.Ob())}function $(t,e){if(1&t){const t=b.Qb();b.Pb(0,"div"),b.Pb(1,"form",1,2),b.Pb(3,"div",3),b.sc(4,D,5,4,"div",4),b.ac(5,"anyCast"),b.sc(6,T,2,0,"p",5),b.Pb(7,"button",6),b.Xb("click",(function(e){return b.lc(t),b.Zb(2).submitForm()})),b.tc(8,"Submit"),b.Ob(),b.Ob(),b.Ob(),b.Ob()}if(2&t){const t=b.Zb(2);b.Ab(1),b.gc("formGroup",t.form),b.Ab(3),b.gc("ngForOf",b.bc(5,3,t.formInfo.fields)),b.Ab(2),b.gc("ngIf",t.submitTried&&"INVALID"===t.form.status)}}function q(t,e){1&t&&(b.Pb(0,"div"),b.tc(1," Your response has been recorded! "),b.Ob())}function X(t,e){1&t&&b.Nb(0,"csc-spinner")}function Y(t,e){if(1&t&&(b.Pb(0,"div"),b.sc(1,$,9,5,"div",0),b.sc(2,q,2,0,"div",0),b.sc(3,X,1,0,"csc-spinner",0),b.Ob()),2&t){const t=b.Zb();b.Ab(1),b.gc("ngIf",!!t.formInfo&&!t.submitted),b.Ab(1),b.gc("ngIf",t.submitted),b.Ab(1),b.gc("ngIf",!t.formInfo||t.submitting&&!t.submitted)}}let j=(()=>{class t{constructor(t,e){this._formBuilder=t,this._formApiService=e,this.submitted=!1,this.submitting=!1,this.submitTried=!1}ngOnChanges(t){}initForm(){const t={};this.formInfo.fields.forEach(e=>{let n="";e.type===I.a.checkbox&&(n=!1);const o=[];e.required&&o.push(c.r.required),t[e.name]=[n,o]}),this.form=this._formBuilder.group(t)}ngOnInit(){this._formApiService.getFormOnce(this.formId).subscribe(t=>{this.formInfo=t,t&&this.initForm()})}ngAfterViewInit(){}isTextInput(t){return t.type===I.a.text}isRadioInput(t){return t.type===I.a.radio}isCheckboxInput(t){return t.type===I.a.checkbox}submitForm(){this.submitting=!0,this.submitTried=!0,"VALID"===this.form.status?this._formApiService.addEntry(this.formId,this.form.value).then(()=>{this.submitted=!0}).catch():this.submitting=!1}}return t.\u0275fac=function(e){return new(e||t)(b.Mb(c.c),b.Mb(C.a))},t.\u0275cmp=b.Gb({type:t,selectors:[["csc-firebase-form"]],viewQuery:function(t,e){var n;1&t&&b.xc(F,!0),2&t&&b.jc(n=b.Yb())&&(e.formElement=n.first)},inputs:{formId:"formId"},features:[b.yb()],decls:1,vars:1,consts:[[4,"ngIf"],["target","no-target",1,"row","csc-contact-form",3,"formGroup"],["formElement",""],[1,"row"],[4,"ngFor","ngForOf"],["class","error-msg",4,"ngIf"],["csc-button","",3,"click"],["labelLocation","top",1,"col-12",3,"label"],["type","text","placeholder","Your Answer",1,"csc-input",3,"formControlName"],[1,"error-msg"],["type","checkbox",3,"formControlName"],[3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,e){1&t&&b.sc(0,Y,4,3,"div",0),2&t&&b.gc("ngIf",e.formId)},directives:[s.m,c.t,c.k,c.f,s.l,M.a,A.a,w.a,c.b,c.j,c.e,x.a,c.a,c.q,c.n,c.s,d.a],pipes:[y],styles:[""]}),t})();var z=n("jhN1");let G=(()=>{class t{constructor(t){this.sanitizer=t}ngOnInit(){const t=this.googleFormUrl.split("/");t.length>=7&&t.splice(7,t.length-7),t.push("viewform?embedded=true"),this.googleFormUrl=t.join("/")}formUrl(){return this.sanitizer.bypassSecurityTrustResourceUrl(this.googleFormUrl)}}return t.\u0275fac=function(e){return new(e||t)(b.Mb(z.b))},t.\u0275cmp=b.Gb({type:t,selectors:[["csc-google-form"]],inputs:{googleFormUrl:"googleFormUrl"},decls:3,vars:1,consts:[[1,"row"],["frameborder","0","marginheight","0","height","500","marginwidth","0",1,"col-12",3,"src"]],template:function(t,e){1&t&&(b.Pb(0,"div",0),b.Pb(1,"iframe",1),b.tc(2,"Loading\u2026 "),b.Ob(),b.Ob()),2&t&&(b.Ab(1),b.gc("src",e.formUrl(),b.nc))},styles:[""]}),t})();function R(t,e){1&t&&(b.Pb(0,"div",5),b.Nb(1,"csc-spinner"),b.Ob())}function J(t,e){if(1&t&&(b.Pb(0,"div",5),b.Pb(1,"h2"),b.tc(2),b.Ob(),b.Pb(3,"p"),b.tc(4),b.Ob(),b.Ob()),2&t){const t=b.Zb();b.Ab(2),b.uc(t.error),b.Ab(2),b.vc("Event ID: ",t.id,"")}}function Q(t,e){if(1&t&&b.Nb(0,"csc-firebase-form",11),2&t){const t=b.Zb(2);b.gc("formId",t.event.formId)}}function B(t,e){if(1&t&&b.Nb(0,"csc-google-form",12),2&t){const t=b.Zb(2);b.gc("googleFormUrl",t.event.googleFormUrl)}}function K(t,e){if(1&t&&(b.Pb(0,"div",6),b.Pb(1,"div",5),b.Pb(2,"div",7),b.Pb(3,"h3",8),b.tc(4,"Sign Up"),b.Ob(),b.sc(5,Q,1,1,"csc-firebase-form",9),b.sc(6,B,1,1,"csc-google-form",10),b.Ob(),b.Ob(),b.Ob()),2&t){const t=b.Zb();b.Ab(5),b.gc("ngIf",t.event.formId),b.Ab(1),b.gc("ngIf",t.event.googleFormUrl)}}let V=(()=>{class t{constructor(t,e,n){this._eventDataService=t,this._eventApiService=e,this._route=n,this.loaded=!1}ngOnInit(){this._route.params.pipe(Object(E.a)(1)).subscribe(t=>{this.id=t.id,this.loadEvent()})}loadEvent(){this._eventDataService.hasEvent()?(this.loaded=!0,this.event=this._eventDataService.getEvent()):this._eventApiService.getEventByKeyOnce(this.id).subscribe(t=>{this.loaded=!0,t?this.event=t:this.error="Event doesn't exist."})}}return t.\u0275fac=function(e){return new(e||t)(b.Mb(g),b.Mb(r.a),b.Mb(o.a))},t.\u0275cmp=b.Gb({type:t,selectors:[["csc-event"]],features:[b.zb([s.f])],decls:6,vars:4,consts:[[1,"container","csc-event"],[1,"row"],["class","col-12",4,"ngIf"],[3,"event"],["class","row csc-google-form-container",4,"ngIf"],[1,"col-12"],[1,"row","csc-google-form-container"],[1,"csc-google-form"],[1,"csc-header"],[3,"formId",4,"ngIf"],[3,"googleFormUrl",4,"ngIf"],[3,"formId"],[3,"googleFormUrl"]],template:function(t,e){1&t&&(b.Pb(0,"div",0),b.Pb(1,"div",1),b.sc(2,R,2,0,"div",2),b.sc(3,J,5,2,"div",2),b.Nb(4,"csc-event-view",3),b.Ob(),b.sc(5,K,7,2,"div",4),b.Ob()),2&t&&(b.Ab(2),b.gc("ngIf",!e.loaded),b.Ab(1),b.gc("ngIf",void 0!==e.error),b.Ab(1),b.gc("event",e.event),b.Ab(1),b.gc("ngIf",e.event&&(e.event.googleFormUrl||e.event.formId)))},directives:[s.m,_.a,d.a,j,G],styles:[".csc-event[_ngcontent-%COMP%]{margin-top:30px}.csc-event-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}.csc-event-header[_ngcontent-%COMP%]   .csc-header[_ngcontent-%COMP%]{margin-bottom:10px}@media (max-width:600px){.csc-event-header[_ngcontent-%COMP%]   .csc-header[_ngcontent-%COMP%]{margin-bottom:15px}}.csc-event-presenter[_ngcontent-%COMP%]{color:#9e9e9e}.csc-event-signup[_ngcontent-%COMP%]{width:100%;margin-top:25px}.csc-event-header[_ngcontent-%COMP%]{border:1px solid #9e9e9e}.csc-google-form-container[_ngcontent-%COMP%]{border:1px solid #9e9e9e;border-top:none}.csc-google-form-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}.csc-google-form-container[_ngcontent-%COMP%]   .csc-header[_ngcontent-%COMP%]{margin-bottom:10px}@media (max-width:600px){.csc-google-form-container[_ngcontent-%COMP%]   .csc-header[_ngcontent-%COMP%]{margin-bottom:15px}}.csc-event-image[_ngcontent-%COMP%]{background-position:50%!important;background-size:cover!important}.csc-event-image[_ngcontent-%COMP%], .csc-event-title[_ngcontent-%COMP%]{border-bottom:1px solid #9e9e9e;height:300px}.csc-event-title[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}@media (min-width:993px){.csc-event-title[_ngcontent-%COMP%]{padding-left:25px;padding-right:25px}}@media (max-width:600px){.csc-event-title[_ngcontent-%COMP%]{height:auto!important}}.wrapper[_ngcontent-%COMP%]{position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.wrapper[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{margin-top:0}@media (max-width:600px){.wrapper[_ngcontent-%COMP%]{top:0;-webkit-transform:translateY(0);transform:translateY(0)}}.csc-event-resource[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#aa3b3b}@media (min-width:993px){.csc-event-description[_ngcontent-%COMP%], .csc-event-location[_ngcontent-%COMP%], .csc-event-resource[_ngcontent-%COMP%], .csc-google-form[_ngcontent-%COMP%]{padding:25px}}@media (min-width:601px) and (max-width:992px){.csc-event-description[_ngcontent-%COMP%], .csc-event-location[_ngcontent-%COMP%], .csc-event-resource[_ngcontent-%COMP%], .csc-google-form[_ngcontent-%COMP%]{padding:25px}}"]}),t})();var H=n("F64f");const W=o.e.forChild([{path:"",component:H.a,children:[{path:"",component:P},{path:":id",component:V},{path:"**",redirectTo:""}]}]);n.d(e,"EventsModule",(function(){return tt}));let tt=(()=>{class t{}return t.\u0275mod=b.Kb({type:t}),t.\u0275inj=b.Jb({factory:function(e){return new(e||t)},providers:[g],imports:[[s.c,i.a,W,o.e,c.p]]}),t})()}}]);