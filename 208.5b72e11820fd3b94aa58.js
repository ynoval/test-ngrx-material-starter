(self.webpackChunkangular_ngrx_material_starter=self.webpackChunkangular_ngrx_material_starter||[]).push([[208],{6208:(t,n,e)=>{"use strict";e.r(n),e.d(n,{FeatureListModule:()=>A});var a=e(1116),o=e(422),i=e(2852),r=e(529),s=e(8709);const c=[{name:"Angular",version:s.N.versions.angular,description:"anms.features.angular",github:"https://github.com/angular/angular",documentation:"https://angular.io/docs/ts/latest/"},{name:"Angular Material",version:s.N.versions.material,description:"anms.features.angular-material",github:"https://github.com/angular/material2/",documentation:"https://material.angular.io/"},{name:"Angular Cli",version:s.N.versions.angularCli,description:"anms.features.angular-cli",github:"https://github.com/angular/angular-cli",documentation:"https://cli.angular.io/"},{name:"NgRx",version:s.N.versions.ngrx,description:"anms.features.ngrx",github:"https://github.com/ngrx/platform",documentation:"http://ngrx.github.io/",medium:"https://medium.com/@tomastrajan/object-assign-vs-object-spread-in-angular-ngrx-reducers-3d62ecb4a4b0"},{name:"RxJS",version:s.N.versions.rxjs,description:"anms.features.rxjs",github:"https://github.com/ReactiveX/RxJS",documentation:"http://reactivex.io/rxjs/",medium:"https://medium.com/@tomastrajan/practical-rxjs-in-the-wild-requests-with-concatmap-vs-mergemap-vs-forkjoin-11e5b2efe293"},{name:"Bootstrap",version:s.N.versions.bootstrap,description:"anms.features.bootstrap",github:"https://github.com/twbs/bootstrap",documentation:"https://getbootstrap.com/docs/4.4/getting-started/introduction/",medium:"https://medium.com/@tomastrajan/how-to-build-responsive-layouts-with-bootstrap-4-and-angular-6-cfbb108d797b"},{name:"Typescript",version:s.N.versions.typescript,description:"anms.features.typescript",github:"https://github.com/Microsoft/TypeScript",documentation:"https://www.typescriptlang.org/docs/home.html"},{name:"I18n",version:s.N.versions.ngxtranslate,description:"anms.features.ngxtranslate",github:"https://github.com/ngx-translate/core",documentation:"http://www.ngx-translate.com/"},{name:"Font Awesome 5",version:s.N.versions.fontAwesome,description:"anms.features.fontawesome",github:"https://github.com/FortAwesome/Font-Awesome",documentation:"https://fontawesome.com/icons"},{name:"Cypress",version:s.N.versions.cypress,description:"anms.features.cypress",github:"https://github.com/cypress-io/cypress",documentation:"https://www.cypress.io/"},{name:"anms.features.themes.title",description:"anms.features.themes.description",documentation:"https://material.angular.io/guide/theming",medium:"https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1"},{name:"anms.features.lazyloading.title",description:"anms.features.lazyloading.description",documentation:"https://angular.io/guide/router#lazy-loading-route-configuration"},{name:"Eslint",version:s.N.versions.eslint,description:"anms.features.eslint",github:"https://github.com/eslint/eslint",documentation:"https://eslint.org/docs/user-guide/getting-started"}];var m=e(5366),u=e(6930),g=e(2797),l=e(4369),p=e(1608),d=e(649);function h(t,n){if(1&t&&(m.TgZ(0,"code"),m._uU(1),m.qZA()),2&t){const t=m.oxw().$implicit;m.xp6(1),m.Oqu(t.version)}}const f=function(){return["fab","github"]};function b(t,n){if(1&t&&(m.TgZ(0,"a",13),m._UZ(1,"fa-icon",14),m.qZA()),2&t){const t=m.oxw().$implicit;m.Q6J("href",t.github,m.LSH),m.xp6(1),m.Q6J("icon",m.DdM(2,f))}}const x=function(){return["fab","medium-m"]};function v(t,n){if(1&t&&(m.TgZ(0,"a",10),m._UZ(1,"fa-icon",14),m._uU(2),m.ALo(3,"translate"),m.qZA()),2&t){const t=m.oxw().$implicit;m.Q6J("href",t.medium,m.LSH),m.xp6(1),m.Q6J("icon",m.DdM(5,x)),m.xp6(1),m.hij("",m.lcZ(3,3,"anms.features.guide")," ")}}function _(t,n){if(1&t&&(m.TgZ(0,"div",6),m.TgZ(1,"mat-card"),m.TgZ(2,"mat-card-title"),m.YNc(3,h,2,1,"code",7),m._uU(4),m.ALo(5,"translate"),m.qZA(),m.TgZ(6,"mat-card-subtitle",8),m._uU(7),m.ALo(8,"translate"),m.qZA(),m.TgZ(9,"mat-card-actions"),m.YNc(10,b,2,3,"a",9),m.TgZ(11,"a",10),m._UZ(12,"fa-icon",11),m._uU(13),m.ALo(14,"translate"),m.qZA(),m.YNc(15,v,4,6,"a",12),m.qZA(),m.qZA(),m.qZA()),2&t){const t=n.$implicit,e=m.oxw();m.Q6J("ngClass",e.routeAnimationsElements),m.xp6(3),m.Q6J("ngIf",t.version),m.xp6(1),m.hij("",m.lcZ(5,8,t.name)," "),m.xp6(3),m.hij(" ",m.lcZ(8,10,t.description)," "),m.xp6(3),m.Q6J("ngIf",t.github),m.xp6(1),m.Q6J("href",t.documentation,m.LSH),m.xp6(2),m.hij("",m.lcZ(14,12,"anms.features.documentation")," "),m.xp6(2),m.Q6J("ngIf",t.medium)}}const Z=[{path:"",component:(()=>{class t{constructor(){this.routeAnimationsElements=r.rd,this.features=c}ngOnInit(){}openLink(t){window.open(t,"_blank")}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m.Xpm({type:t,selectors:[["anms-feature-list"]],decls:8,vars:4,consts:[[1,"container"],[1,"row"],[1,"col-md-12"],["rtl","",1,"main-heading"],[1,"row","align-items-end"],["class","col-md-6 col-lg-4",3,"ngClass",4,"ngFor","ngForOf"],[1,"col-md-6","col-lg-4",3,"ngClass"],[4,"ngIf"],["rtl",""],["mat-icon-button","","rel","noopener noreferrer","target","_blank",3,"href",4,"ngIf"],["mat-button","","rel","noopener noreferrer","target","_blank",3,"href"],["icon","book"],["mat-button","","rel","noopener noreferrer","target","_blank",3,"href",4,"ngIf"],["mat-icon-button","","rel","noopener noreferrer","target","_blank",3,"href"],[3,"icon"]],template:function(t,n){1&t&&(m.TgZ(0,"div",0),m.TgZ(1,"div",1),m.TgZ(2,"div",2),m.TgZ(3,"h1",3),m._uU(4),m.ALo(5,"translate"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(6,"div",4),m.YNc(7,_,16,14,"div",5),m.qZA(),m.qZA()),2&t&&(m.xp6(4),m.Oqu(m.lcZ(5,2,"anms.features.title")),m.xp6(3),m.Q6J("ngForOf",n.features))},directives:[u.N,a.sg,a.mk,g.a8,g.n5,a.O5,g.$j,g.hq,l.zs,p.BN],pipes:[d.X$],styles:[".container[_ngcontent-%COMP%]{margin-top:20px}.main-heading[_ngcontent-%COMP%]{text-transform:uppercase}.main-heading[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%]{margin:0 0 20px}mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{position:relative}mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{position:absolute;top:11px;right:0;float:right;font-size:10px}mat-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{min-height:60px}@media (max-width:576px){mat-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{min-height:auto}}mat-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{position:relative;bottom:2px;font-size:16px;margin:6px}mat-card[_ngcontent-%COMP%]   a[mat-icon-button][_ngcontent-%COMP%]{position:relative;left:5px}"],changeDetection:0}),t})(),data:{title:"anms.menu.features"}}];let w=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[[i.Bz.forChild(Z)],i.Bz]}),t})(),A=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[[a.ez,o.m,w]]}),t})()}}]);