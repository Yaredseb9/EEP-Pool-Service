(self.webpackChunknote=self.webpackChunknote||[]).push([[699],{84699:function(e,t,o){"use strict";o.r(t),o.d(t,{HttpLoaderFactory:function(){return w},ReportModule:function(){return y}});var n=o(61116),r=o(49437),s=o(87368),i=o(8361),a=o(65916),l=o(28451),p=o(94217),u=o(46326),g=o(31041),c=o(49783),h=o(60649);function d(e,t){1&e&&(s.TgZ(0,"tr"),s.TgZ(1,"th"),s._uU(2,"Date"),s.qZA(),s.TgZ(3,"th"),s._uU(4,"Total Requests"),s.qZA(),s.TgZ(5,"th"),s._uU(6," Expected KM"),s.qZA(),s.TgZ(7,"th"),s._uU(8,"Actual KM"),s.qZA(),s.qZA())}function Z(e,t){if(1&e&&(s.TgZ(0,"tr"),s.TgZ(1,"td"),s._uU(2),s.ALo(3,"date"),s.qZA(),s.TgZ(4,"td"),s._uU(5),s.qZA(),s.TgZ(6,"td"),s._uU(7),s.qZA(),s.TgZ(8,"td"),s._uU(9),s.qZA(),s.qZA()),2&e){const e=t.$implicit;s.xp6(2),s.Oqu(s.xi3(3,4,e.assignDate,"MMM,dd/yyyy")),s.xp6(3),s.Oqu(e.totalAssignment),s.xp6(2),s.Oqu(e.totalExDistance),s.xp6(2),s.Oqu(e.totalTrDistance)}}const f=function(){return{width:"50vw"}},m=[{path:"",component:(()=>{class e{constructor(e){this.poolService=e,this.from=new Date,this.to=new Date,this.iserror=!1,this.responseTitle="",this.responseDialog=!1,this.responseMesssage="",this.responseStyle=""}ngOnInit(){this.getReport("2021-06-04","2021-06-08")}getReport(e,t){this.loading=!0,this.poolService.getTotalPoolAssignmentReport(e,t).then(e=>{this.report=e.totalAssignmenttList,this.loading=!1})}generateReport(){if(this.compareDate(new Date(this.from),new Date(this.to)))return this.DisplayError("Starting Time Should be grater than end time Time"),!1;let e=this.from.getFullYear()+"-"+(this.from.getMonth()+1)+"-"+this.from.getDate(),t=this.to.getFullYear()+"-"+(this.to.getMonth()+1)+"-"+this.to.getDate();this.getReport(e,t)}compareDate(e,t){return e>t}DisplayError(e){this.iserror=!0,this.responseStyle="error",this.responseDialog=!0,this.responseTitle="Error!!!",this.responseMesssage=e}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(i.q))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-report"]],decls:18,vars:28,consts:[[3,"visible","modal","visibleChange"],["type","button","pButton","","icon","pi pi-check",3,"label","click"],[3,"ngModel","showIcon","ngModelChange"],["label","Generate Report",3,"click"],["styleClass","p-datatable-gridlines",3,"value","autoLayout","loading","paginator","rows","responsive"],["pTemplate","header"],["pTemplate","body"]],template:function(e,t){1&e&&(s.TgZ(0,"p-dialog",0),s.NdJ("visibleChange",function(e){return t.responseDialog=e}),s.TgZ(1,"p-header"),s.TgZ(2,"p"),s._uU(3),s.qZA(),s.qZA(),s.TgZ(4,"p"),s._uU(5),s.qZA(),s.TgZ(6,"p-footer"),s.TgZ(7,"button",1),s.NdJ("click",function(){return t.responseDialog=!1}),s.ALo(8,"translate"),s.qZA(),s.qZA(),s.qZA(),s._uU(9," From "),s.TgZ(10,"p-calendar",2),s.NdJ("ngModelChange",function(e){return t.from=e})("ngModelChange",function(e){return t.from=e}),s.qZA(),s._uU(11," To "),s.TgZ(12,"p-calendar",2),s.NdJ("ngModelChange",function(e){return t.to=e})("ngModelChange",function(e){return t.to=e}),s.qZA(),s._uU(13," \xa0"),s.TgZ(14,"p-button",3),s.NdJ("click",function(){return t.generateReport()}),s.qZA(),s.TgZ(15,"p-table",4),s.YNc(16,d,9,0,"ng-template",5),s.YNc(17,Z,10,7,"ng-template",6),s.qZA()),2&e&&(s.Akn(s.DdM(27,f)),s.Q6J("visible",t.responseDialog)("modal",!0),s.xp6(2),s.Tol(t.responseStyle),s.xp6(1),s.hij(" ",t.responseTitle," "),s.xp6(1),s.Tol(t.responseStyle),s.xp6(1),s.hij(" ",t.responseMesssage," "),s.xp6(2),s.s9C("label",s.lcZ(8,25,"ok")),s.xp6(3),s.Q6J("ngModel",t.from)("ngModel",t.from)("showIcon",!0),s.xp6(2),s.Q6J("ngModel",t.to)("ngModel",t.to)("showIcon",!0),s.xp6(3),s.Q6J("value",t.report)("autoLayout",!0)("loading",t.loading)("paginator",!0)("rows",7)("responsive",!0))},directives:[a.V,l.h4,l.$_,p.Hq,u.f,g.JJ,g.On,p.zx,c.iA,l.jx],pipes:[h.X$,n.uU],styles:[""]}),e})()}];let T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[r.Bz.forChild(m)],r.Bz]}),e})();var A=o(35119),q=o(42693),M=o(49037);function w(e){return new M.w(e)}let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[n.ez,T,A.n,h.aw.forChild({loader:{provide:h.Zw,useFactory:w,deps:[q.eN]},isolate:!1})],h.aw]}),e})()}}]);