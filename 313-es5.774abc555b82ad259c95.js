!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var t,o,s=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(s.push(t.value),!r||s.length!==r);i=!0);}catch(l){a=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return s}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function t(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}(self.webpackChunknote=self.webpackChunknote||[]).push([[313],{17313:function(r,o,s){"use strict";s.r(o),s.d(o,{OwnerModule:function(){return S}});var i=s(61116),a=s(49437),l=s(31041),u=s(87368),p=s(8361),d=s(65916),c=s(28451),g=s(94217),f=s(49783),h=s(14313),m=s(23625),Z=s(5590),w=s(13682),b=s(60649);function y(e,r){1&e&&(u.TgZ(0,"tr",24),u.TgZ(1,"th"),u._uU(2),u.ALo(3,"translate"),u.qZA(),u.TgZ(4,"th"),u._uU(5),u.ALo(6,"translate"),u.qZA(),u.TgZ(7,"th"),u._uU(8),u.ALo(9,"translate"),u.qZA(),u.TgZ(10,"th"),u._uU(11),u.ALo(12,"translate"),u.qZA(),u.TgZ(13,"th"),u._uU(14),u.ALo(15,"translate"),u.qZA(),u.TgZ(16,"th"),u._uU(17),u.ALo(18,"translate"),u.qZA(),u.qZA()),2&e&&(u.xp6(2),u.Oqu(u.lcZ(3,6,"name")),u.xp6(3),u.Oqu(u.lcZ(6,8,"type")),u.xp6(3),u.Oqu(u.lcZ(9,10,"phone")),u.xp6(3),u.Oqu(u.lcZ(12,12,"address")),u.xp6(3),u.Oqu(u.lcZ(15,14,"numBus")),u.xp6(3),u.Oqu(u.lcZ(18,16,"update")))}function v(e,r){if(1&e){var n=u.EpF();u.TgZ(0,"tr",25),u.TgZ(1,"td"),u._uU(2),u.qZA(),u.TgZ(3,"td"),u._uU(4),u.qZA(),u.TgZ(5,"td"),u._uU(6),u.qZA(),u.TgZ(7,"td"),u._uU(8),u.qZA(),u.TgZ(9,"td"),u._uU(10),u.qZA(),u.TgZ(11,"td"),u.TgZ(12,"button",26),u.NdJ("click",function(){var e=u.CHM(n).$implicit;return u.oxw().update(e)}),u.ALo(13,"translate"),u.qZA(),u.qZA(),u.qZA()}if(2&e){var t=r.$implicit;u.xp6(2),u.Oqu(t.owner.name),u.xp6(2),u.Oqu(t.owner.type),u.xp6(2),u.Oqu(t.owner.phone),u.xp6(2),u.Oqu(t.owner.address),u.xp6(2),u.Oqu(t.noBus),u.xp6(2),u.s9C("label",u.lcZ(13,6,"update"))}}function q(e,r){1&e&&u._UZ(0,"p-message",27)}function A(e,r){1&e&&u._UZ(0,"p-message",31)}function T(e,r){1&e&&u._UZ(0,"p-message",32)}function O(e,r){if(1&e&&(u.TgZ(0,"div",28),u.YNc(1,A,1,0,"p-message",29),u.YNc(2,T,1,0,"p-message",30),u.qZA()),2&e){var n=u.oxw();u.xp6(1),u.Q6J("ngIf",n.userform.controls.phoneNumber.errors.required),u.xp6(1),u.Q6J("ngIf",n.userform.controls.phoneNumber.errors.pattern)}}var x,N,k=function(){return{width:"50vw"}},C=function(){return{width:"30vw"}},M=[{path:"",component:(x=function(){function r(e,t){n(this,r),this.poolService=e,this.fb=t,this.registerOwner=!1,this.updateOwner=!1,this.newOwner={name:"",type:"",phone:"",address:""},this.iserror=!1,this.responseTitle="",this.responseDialog=!1,this.responseMesssage="",this.responseStyle="",this.states=[{name:"Government",value:"Government"},{name:"Private",value:"private"}],this.mobNumberPattern="^((\\+251-?)|0)?[0-9]{10}$"}var o,s,i;return o=r,(s=[{key:"ngOnInit",value:function(){this.loading=!1,this.display=!1,this.getOwner(),this.userform=this.fb.group({name:new l.NI("",l.kI.required),address:new l.NI("",l.kI.required),type:new l.NI("",l.kI.required),phoneNumber:new l.NI("",[l.kI.required,l.kI.pattern(this.mobNumberPattern)])})}},{key:"getOwner",value:function(){var e=this;this.loading=!0,this.poolService.getOwnerWithbus().then(function(r){e.owner=r.ownerReport,e.loading=!1})}},{key:"register",value:function(){this.userform.reset(),this.display=!0,this.registerOwner=!0,this.updateOwner=!1,this.dialogTitle="registerOwnerForm"}},{key:"update",value:function(e){this.registerOwner=!1,this.updateOwner=!0,this.dialogTitle="updateOwnerForm",this.display=!0,this.organiizationId=e.owner.ownerId,this.newOwner.address=e.owner.address,this.newOwner.name=e.owner.name,this.newOwner.phone=e.owner.phone,this.newOwner.type=e.owner.type,this.selectedType=this.states.filter(function(r){return r.name==e.owner.type})[0]}},{key:"onClickRegisterOwner",value:function(){var r=this;this.registerOwner?this.poolService.RegisterOwner(this.owners).subscribe(function(e){r.iserror=!1,r.responseStyle="success",r.responseDialog=!0,r.responseTitle="SUCCESS!!!",r.responseMesssage="owner information Registered successfully ",r.display=!1},function(n){r.iserror=!0,r.responseTitle="Error!!!",r.responseDialog=!0,r.responseMesssage="",r.display=!1,r.responseStyle="error";for(var t=0,o=Object.entries(n);t<o.length;t++){var s=e(o[t],2),i=(s[0],s[1]);r.responseMesssage=r.responseMesssage+i}}):this.updateOwner&&this.poolService.updateOwner(this.owners,this.organiizationId).subscribe(function(e){r.iserror=!1,r.responseStyle="success",r.responseDialog=!0,r.responseTitle="SUCCESS!!!",r.responseMesssage="owner information Updated successfully ",r.display=!1},function(n){r.iserror=!0,r.responseTitle="Error!!!",r.responseDialog=!0,r.responseMesssage="",r.display=!1,r.responseStyle="error";for(var t=0,o=Object.entries(n);t<o.length;t++){var s=e(o[t],2),i=(s[0],s[1]);r.responseMesssage=r.responseMesssage+i}})}},{key:"owners",get:function(){return this.newOwner.name=this.userform.controls.name.value,this.newOwner.phone=this.userform.controls.phoneNumber.value,this.newOwner.type=this.selectedType.name,this.newOwner.address=this.userform.controls.address.value,this.newOwner}},{key:"Okonclick",value:function(){this.responseDialog=!1,location.reload()}}])&&t(o.prototype,s),i&&t(o,i),r}(),x.\u0275fac=function(e){return new(e||x)(u.Y36(p.q),u.Y36(l.qu))},x.\u0275cmp=u.Xpm({type:x,selectors:[["app-owner"]],decls:48,vars:60,consts:[[3,"visible","modal","visibleChange"],["type","button","pButton","","icon","pi pi-check",3,"label","click"],[2,"text-align","right"],["pButton","","type","button",1,"p-button-success",3,"label","click"],["styleClass","p-datatable-gridlines",3,"value","paginator","rows","autoLayout","loading"],["pTemplate","header"],["pTemplate","body"],[3,"header","visible","transitionOptions","modal","visibleChange"],[3,"formGroup","ngSubmit"],[1,"p-fluid","p-formgrid","p-grid"],[1,"p-field","p-col-12","p-md-12"],["for","firstname"],["id","firstname","type","text","formControlName","name","pInputText","","required","",3,"ngModel","ngModelChange"],["severity","error","text","Name is required",4,"ngIf"],["inputId","type","formControlName","type","placeholder","Select","optionLabel","name","required","",3,"options","ngModel","ngModelChange"],["for","lastname"],["id","phone","type","text","formControlName","phoneNumber","pInputText","","required","",3,"ngModel","ngModelChange"],["class","p-col-12",4,"ngIf"],[1,"p-field","p-col-12"],["for","address"],["type","text","rows","4","formControlName","address","pInputTextarea","","required","",3,"ngModel","ngModelChange"],[1,"p-field","p-col-6"],["pButton","","type","button",1,"ui-button-raised",3,"label","disabled","click"],["pButton","","type","reset",1,"ui-button-raised",3,"label"],[1,"header-row"],[1,"body-row"],["pButton","","type","button",3,"label","click"],["severity","error","text","Name is required"],[1,"p-col-12"],["severity","error","text","phoneNumber number is required",4,"ngIf"],["severity","error","text","invalid phone number format please fill correct phone number format",4,"ngIf"],["severity","error","text","phoneNumber number is required"],["severity","error","text","invalid phone number format please fill correct phone number format"]],template:function(e,r){1&e&&(u.TgZ(0,"p-dialog",0),u.NdJ("visibleChange",function(e){return r.responseDialog=e}),u.TgZ(1,"p-header"),u.TgZ(2,"p"),u._uU(3),u.qZA(),u.qZA(),u.TgZ(4,"p"),u._uU(5),u.qZA(),u.TgZ(6,"p-footer"),u.TgZ(7,"button",1),u.NdJ("click",function(){return r.Okonclick()}),u.ALo(8,"translate"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(9,"div",2),u.TgZ(10,"button",3),u.NdJ("click",function(){return r.register()}),u.ALo(11,"translate"),u.qZA(),u.qZA(),u.TgZ(12,"p-table",4),u.YNc(13,y,19,18,"ng-template",5),u.YNc(14,v,14,8,"ng-template",6),u.qZA(),u.TgZ(15,"p-dialog",7),u.NdJ("visibleChange",function(e){return r.display=e}),u.ALo(16,"translate"),u.TgZ(17,"form",8),u.NdJ("ngSubmit",function(){return r.onClickRegisterOwner()}),u.TgZ(18,"div",9),u.TgZ(19,"div",10),u.TgZ(20,"label",11),u._uU(21),u.ALo(22,"translate"),u.qZA(),u.TgZ(23,"input",12),u.NdJ("ngModelChange",function(e){return r.newOwner.name=e}),u.qZA(),u.YNc(24,q,1,0,"p-message",13),u.qZA(),u.TgZ(25,"div",10),u.TgZ(26,"label"),u._uU(27),u.ALo(28,"translate"),u.qZA(),u.TgZ(29,"p-dropdown",14),u.NdJ("ngModelChange",function(e){return r.selectedType=e}),u.qZA(),u.qZA(),u.TgZ(30,"div",10),u.TgZ(31,"label",15),u._uU(32),u.ALo(33,"translate"),u.qZA(),u.TgZ(34,"input",16),u.NdJ("ngModelChange",function(e){return r.newOwner.phone=e}),u.qZA(),u.qZA(),u.YNc(35,O,3,2,"div",17),u.TgZ(36,"div",18),u.TgZ(37,"label",19),u._uU(38),u.ALo(39,"translate"),u.qZA(),u.TgZ(40,"textarea",20),u.NdJ("ngModelChange",function(e){return r.newOwner.address=e}),u.qZA(),u.qZA(),u.qZA(),u.TgZ(41,"div",9),u.TgZ(42,"div",21),u.TgZ(43,"button",22),u.NdJ("click",function(){return r.onClickRegisterOwner()}),u.ALo(44,"translate"),u.qZA(),u.qZA(),u.TgZ(45,"div",21),u._UZ(46,"button",23),u.ALo(47,"translate"),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&e&&(u.Akn(u.DdM(58,k)),u.Q6J("visible",r.responseDialog)("modal",!0),u.xp6(2),u.Tol(r.responseStyle),u.xp6(1),u.hij(" ",r.responseTitle," "),u.xp6(1),u.Tol(r.responseStyle),u.xp6(1),u.hij(" ",r.responseMesssage," "),u.xp6(2),u.s9C("label",u.lcZ(8,40,"ok")),u.xp6(3),u.s9C("label",u.lcZ(11,42,"register")),u.xp6(2),u.Q6J("value",r.owner)("paginator",!0)("rows",10)("autoLayout",!0)("loading",r.loading),u.xp6(3),u.Akn(u.DdM(59,C)),u.s9C("header",u.lcZ(16,44,r.dialogTitle)),u.Q6J("visible",r.display)("transitionOptions","0ms")("modal",!0),u.xp6(2),u.Q6J("formGroup",r.userform),u.xp6(4),u.Oqu(u.lcZ(22,46,"name")),u.xp6(2),u.Q6J("ngModel",r.newOwner.name),u.xp6(1),u.Q6J("ngIf",!r.userform.controls.name.valid&&r.userform.controls.name.dirty),u.xp6(3),u.Oqu(u.lcZ(28,48,"type")),u.xp6(2),u.Q6J("options",r.states)("ngModel",r.selectedType),u.xp6(3),u.Oqu(u.lcZ(33,50,"phone")),u.xp6(2),u.Q6J("ngModel",r.newOwner.phone),u.xp6(1),u.Q6J("ngIf",r.userform.controls.phoneNumber.errors&&r.userform.controls.phoneNumber.dirty&&r.userform.controls.phoneNumber.touched),u.xp6(3),u.Oqu(u.lcZ(39,52,"address")),u.xp6(2),u.Q6J("ngModel",r.newOwner.address),u.xp6(3),u.s9C("label",u.lcZ(44,54,"register")),u.Q6J("disabled",!r.userform.valid),u.xp6(3),u.s9C("label",u.lcZ(47,56,"reset")))},directives:[d.V,c.h4,c.$_,g.Hq,f.iA,c.jx,l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u,h.o,l.Q7,i.O5,m.Lt,Z.g,w.q],pipes:[b.X$],styles:[""]}),x)}],J=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[a.Bz.forChild(M)],a.Bz]}),e}(),I=s(35119),S=((N=function e(){n(this,e)}).\u0275fac=function(e){return new(e||N)},N.\u0275mod=u.oAB({type:N}),N.\u0275inj=u.cJS({imports:[[i.ez,J,I.n]]}),N)}}])}();