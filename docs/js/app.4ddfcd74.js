(function(e){function t(t){for(var o,a,u=t[0],c=t[1],m=t[2],s=0,d=[];s<u.length;s++)a=u[s],i[a]&&d.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,m||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,u=1;u<n.length;u++){var c=n[u];0!==i[c]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},i={app:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var m=0;m<u.length;m++)t(u[m]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("64a9"),i=n.n(o);i.a},"0b79":function(e,t,n){},1790:function(e,t,n){},"1b77":function(e,t,n){"use strict";var o=n("6f8a"),i=n.n(o);i.a},"1b8c":function(e,t,n){},"1d28":function(e,t,n){},"259b":function(e,t,n){},2641:function(e,t,n){"use strict";var o=n("4259"),i=n.n(o);i.a},"2fc4":function(e,t,n){},4259:function(e,t,n){},4302:function(e,t,n){},"44cd":function(e,t,n){"use strict";var o=n("1b8c"),i=n.n(o);i.a},"470e":function(e,t,n){},4799:function(e,t,n){},"4dc4":function(e,t,n){"use strict";var o=n("259b"),i=n.n(o);i.a},5133:function(e,t,n){"use strict";var o=n("a3cf"),i=n.n(o);i.a},"567b":function(e,t,n){"use strict";var o=n("a78d"),i=n.n(o);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),i=n("2ee4"),r=n.n(i),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("formWizScratch")],1)},u=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"formWizScratch"}},[n("form-wizard",{attrs:{color:"#ff671f",title:"Household Income and Debt Calculator",subtitle:"Calculate your total household income and estimated debt-to-income ratio in \n        preparation for applying for an affordable home."}},[n("tab-content",{attrs:{title:"Household",icon:"ti ti-user"}},[n("householdInfo",{attrs:{coapplicant:e.coapplicant,hhSize:e.hhSize},on:{coapplicantSpecified:e.setCoapplicant,hhSizeInput:e.setHHSize}})],1),n("tab-content",{attrs:{title:"Income",icon:"ti ti-money"}},[n("incomeContainer",{attrs:{coapplicant:e.coapplicant,totalIncome:e.totalIncome},on:{totalIncomeCalc:e.sendIncomeTotal}})],1),n("tab-content",{attrs:{title:"Debt",icon:"ti ti-receipt"}},[n("debtForm",{attrs:{debtSubtotal:e.debtSubtotal},on:{debtCalc:e.sendDebtSubtotal}})],1),n("tab-content",{attrs:{title:"Results",icon:"ti ti-bar-chart"}},[n("results",{attrs:{hhSize:e.hhSize,totalIncome:e.totalIncome,debtSubtotal:e.debtSubtotal}})],1)],1)],1)},m=[],l=(n("c5f6"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Household")]),n("p",[e._v("Will you be applying for an affordable home mortgage with a spouse/partner?")]),n("div",[n("button",{staticClass:"button green",on:{click:function(t){e.setCoapplicant(!0)}}},[e._v("Yes")]),n("button",{on:{click:function(t){e.setCoapplicant(!1)}}},[e._v("No")])]),n("br"),n("p",[e._v("What is your household size?")]),n("label",{attrs:{for:"hhSize"}},[e._v("Household Size")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.hhSize,expression:"hhSize",modifiers:{number:!0}}],attrs:{type:"number",name:"householdSize",placeholder:"Min: 1, Max: 10",min:"1",max:"10",id:"out-of-range-input",value:"hhSize"},domProps:{value:e.hhSize},on:{input:[function(t){t.target.composing||(e.hhSize=e._n(t.target.value))},function(t){e.setHHSize(e.hhSize)}],blur:function(t){e.$forceUpdate()}}}),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.validInput(e.hhSize),expression:"!validInput(hhSize)"}],staticClass:"help-text"})])}),s=[],d=n("53ca"),h={name:"householdInfo",props:{coapplicant:Boolean},data:function(){return{hhSize:1,selected:1}},methods:{setCoapplicant:function(e){this.$emit("coapplicantSpecified",e),e&&(this.hhSize=2)},setHHSize:function(e){this.$emit("hhSizeInput",e)},validInput:function(e){return Object(d["a"])(e)==Number&&e>0&&e<=10}}},p=h,f=(n("86b6"),n("2877")),v=Object(f["a"])(p,l,s,!1,null,null,null);v.options.__file="householdInfo.vue";var b=v.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("income",{attrs:{incomeSubtotal:e.incomeSubtotal},on:{incomeSubCalc:e.makeIncomeSubCalc}}),e.coapplicant?n("button",{on:{click:function(t){e.showCoapplicantForm(!0),e.showIncomeAddButton(!0)}}},[e._v(" Ready to add your spouse/partner/coapplicant's income?")]):e._e(),n("incomeCoApplicant",{directives:[{name:"show",rawName:"v-show",value:e.showCoapplicant,expression:"showCoapplicant"}],attrs:{incomeSubtotalCoApplicant:e.incomeSubtotalCoApplicant},on:{incomeCoSubCalc:e.coIncomeSubCalc}}),!e.coapplicant||e.adFormButton?n("button",{on:{click:function(t){e.showIncomeAdditionalForm(!0)}}},[e._v("Click to add additional sources of income")]):e._e(),e.showIncomeAdditional?n("incomeAdditional",{attrs:{otherIncomeSubtotal:e.otherIncomeSubtotal},on:{incomeAddSubCalc:e.otherIncomeSubCalc}}):e._e(),n("h3",[e._v("Your approximate monthly income is $"+e._s(e.totalIncome)+".")]),n("p",[e._v("Does this look correct?")]),n("button",{on:{click:function(t){e.sendIncomeTotal(e.totalIncome)}}},[e._v("Yes")])],1)},_=[],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Income")]),n("p",[e._v("What is your "),n("strong",[e._v("hourly income")]),e._v(" from your primary job?\n    "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.incomePrimary,expression:"incomePrimary",modifiers:{number:!0}}],style:[e.currencyInput],attrs:{type:"number",name:"incomePrimary",placeholder:"$0.00/hr",min:"0.00",max:"200.00",step:"0.01",value:"incomePrimary"},domProps:{value:e.incomePrimary},on:{input:[function(t){t.target.composing||(e.incomePrimary=e._n(t.target.value))},function(t){e.sendIncomeSubtotal(e.incomeSubtotal)}],blur:function(t){e.$forceUpdate()}}})]),n("p",[e._v("On average, how many "),n("strong",[e._v("hours per week")]),e._v(" do you work?\n      "),n("label",{attrs:{for:"hoursPerWeek"}},[e._v("Hours per week ")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.hoursPerWeek,expression:"hoursPerWeek",modifiers:{number:!0}}],attrs:{type:"number",name:"hoursPerWeek",placeholder:"40",min:"0",max:"168",id:"hoursPerWeek",value:"hoursPerWeek"},domProps:{value:e.hoursPerWeek},on:{input:[function(t){t.target.composing||(e.hoursPerWeek=e._n(t.target.value))},function(t){e.sendIncomeSubtotal(e.incomeSubtotal)}],blur:function(t){e.$forceUpdate()}}})]),n("p",[e._v("Do you have another job?")]),n("div",e._b({attrs:{id:"anotherJob",select:""}},"div",e.anotherJob,!1),[n("button",{staticClass:"button green",on:{click:function(t){e.anotherJob=!0}}},[e._v("Yes")]),n("button",{on:{click:function(t){e.anotherJob=!1}}},[e._v("No")])]),e.anotherJob?n("div",[n("p",[e._v(" What is your hourly income from this job?\n        "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.incomeSecondary,expression:"incomeSecondary",modifiers:{number:!0}}],attrs:{type:"number",name:"incomeSecondary",placeholder:"$0.00/hr",min:"0.00",max:"200.00",step:"0.01",id:"incomeSecondary",value:"incomeSecondary"},domProps:{value:e.incomeSecondary},on:{input:[function(t){t.target.composing||(e.incomeSecondary=e._n(t.target.value))},function(t){e.sendIncomeSubtotal(e.incomeSubtotal)}],blur:function(t){e.$forceUpdate()}}})]),n("p",[e._v("On average, how many hours per week do you work?")]),n("label",{attrs:{for:"hoursSecondary"}},[e._v("Hours per week ")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.hoursSecondary,expression:"hoursSecondary",modifiers:{number:!0}}],attrs:{type:"number",name:"hoursSecondary",placeholder:"20",min:"0",max:"168",id:"hoursSecondary",value:"hoursSecondary"},domProps:{value:e.hoursSecondary},on:{input:[function(t){t.target.composing||(e.hoursSecondary=e._n(t.target.value))},function(t){e.sendIncomeSubtotal(e.incomeSubtotal)}],blur:function(t){e.$forceUpdate()}}})]):e._e()])},g=[],I={name:"income",data:function(){return{incomePrimary:0,hoursPerWeek:40,incomeSecondary:0,hoursSecondary:20,anotherJob:!1}},computed:{monthlyIncome:function(){return this.incomePrimary*this.hoursPerWeek*4},monthlyIncomeSecondary:function(){return this.incomeSecondary*this.hoursSecondary*4},incomeSubtotal:function(){return this.monthlyIncome+this.monthlyIncomeSecondary}},methods:{sendIncomeSubtotal:function(e){this.$emit("incomeSubCalc",e)}}},w=I,C=(n("5133"),Object(f["a"])(w,y,g,!1,null,null,null));C.options.__file="income.vue";var P=C.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Co-Applicant Income")]),n("p",[e._v("What is the hourly income from their primary job in $/hour?\n    "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.incomePrimary,expression:"incomePrimary",modifiers:{number:!0}}],attrs:{type:"number",name:"incomePrimary",placeholder:"$0.00/hr",min:"0.00",max:"200.00",step:"0.01",id:"incomePrimary",value:"incomePrimary"},domProps:{value:e.incomePrimary},on:{input:[function(t){t.target.composing||(e.incomePrimary=e._n(t.target.value))},function(t){e.sendCoIncomeSubtotal(e.incomeSubtotalCoApplicant)}],blur:function(t){e.$forceUpdate()}}})]),n("p",[e._v("On average, how many hours per week do you work?")]),n("label",{attrs:{for:"hoursPerWeek"}},[e._v("Hours per week ")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.hoursPerWeek,expression:"hoursPerWeek",modifiers:{number:!0}}],attrs:{type:"number",name:"hoursPerWeek",placeholder:"40",min:"0",max:"168",id:"hoursPerWeek",value:"hoursPerWeek"},domProps:{value:e.hoursPerWeek},on:{input:[function(t){t.target.composing||(e.hoursPerWeek=e._n(t.target.value))},function(t){e.sendCoIncomeSubtotal(e.incomeSubtotalCoApplicant)}],blur:function(t){e.$forceUpdate()}}}),n("p",[e._v("Do they have another job?")]),n("div",e._b({attrs:{id:"anotherJob",select:""}},"div",e.anotherJob,!1),[n("button",{on:{click:function(t){e.anotherJob=!0}}},[e._v("Yes")]),n("button",{on:{click:function(t){e.anotherJob=!1}}},[e._v("No")])]),e.anotherJob?n("div",[n("p",[e._v(" What is their hourly income from this job?\n        "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.incomeSecondary,expression:"incomeSecondary",modifiers:{number:!0}}],attrs:{type:"number",name:"incomeSecondary",placeholder:"$0.00/hr",min:"0.00",max:"200.00",step:"0.01",id:"incomeSecondary",value:"incomeSecondary"},domProps:{value:e.incomeSecondary},on:{input:[function(t){t.target.composing||(e.incomeSecondary=e._n(t.target.value))},function(t){e.sendCoIncomeSubtotal(e.incomeSubtotalCoApplicant)}],blur:function(t){e.$forceUpdate()}}})]),n("p",[e._v("On average, how many hours per week do they work?")]),n("label",{attrs:{for:"hoursSecondary"}},[e._v("Hours per week ")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.hoursSecondary,expression:"hoursSecondary",modifiers:{number:!0}}],attrs:{type:"number",name:"hoursSecondary",placeholder:"20",min:"0",max:"168",id:"hoursSecondary",value:"hoursSecondary"},domProps:{value:e.hoursSecondary},on:{input:[function(t){t.target.composing||(e.hoursSecondary=e._n(t.target.value))},function(t){e.sendCoIncomeSubtotal(e.incomeSubtotalCoApplicant)}],blur:function(t){e.$forceUpdate()}}})]):e._e()])},z=[],$={name:"incomeCoApplicant",data:function(){return{incomePrimary:0,hoursPerWeek:40,incomeSecondary:0,hoursSecondary:20,anotherJob:!1}},computed:{monthlyIncome:function(){return this.incomePrimary*this.hoursPerWeek*4},monthlyIncomeSecondary:function(){return this.incomeSecondary*this.hoursSecondary*4},incomeSubtotalCoApplicant:function(){return this.monthlyIncome+this.monthlyIncomeSecondary}},methods:{sendCoIncomeSubtotal:function(e){this.$emit("incomeCoSubCalc",e)}}},x=$,k=(n("567b"),Object(f["a"])(x,A,z,!1,null,null,null));k.options.__file="incomeCoApplicant.vue";var N=k.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Additional Income")]),n("p",[e._v("SNAP/WIC Food Assistance \n    "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.SNAPWic,expression:"SNAPWic",modifiers:{number:!0}}],attrs:{type:"number",name:"SNAPWic",placeholder:"$0.00/month",min:"0.00",id:"SNAPWic",value:"SNAPWic"},domProps:{value:e.SNAPWic},on:{input:[function(t){t.target.composing||(e.SNAPWic=e._n(t.target.value))},function(t){e.sendIncomeAdditionalSubtotal(e.otherIncomeSubtotal)}],blur:function(t){e.$forceUpdate()}}}),e._v(" per month\n    ")]),n("p",[e._v("Temporary Assistance for Needy Families (TANF) \n    "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.TANF,expression:"TANF",modifiers:{number:!0}}],attrs:{type:"number",name:"TANF",placeholder:"$0.00/month",min:"0.00",id:"TANF",value:"TANF"},domProps:{value:e.TANF},on:{input:[function(t){t.target.composing||(e.TANF=e._n(t.target.value))},function(t){e.sendIncomeAdditionalSubtotal(e.otherIncomeSubtotal)}],blur:function(t){e.$forceUpdate()}}}),e._v(" per month\n    ")]),n("p",[e._v("Supplemental Security Income (SSI) \n    "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.SSI,expression:"SSI",modifiers:{number:!0}}],attrs:{type:"number",name:"SSI",placeholder:"$0.00/month",min:"0.00",id:"SSI",value:"SSI"},domProps:{value:e.SSI},on:{input:[function(t){t.target.composing||(e.SSI=e._n(t.target.value))},function(t){e.sendIncomeAdditionalSubtotal(e.otherIncomeSubtotal)}],blur:function(t){e.$forceUpdate()}}}),e._v(" per month\n    ")]),n("p",[e._v("Social Security Disability Insurance (SSDI)\n    "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.SSDI,expression:"SSDI",modifiers:{number:!0}}],attrs:{type:"number",name:"SSDI",placeholder:"$0.00/month",min:"0.00",id:"SSDI",value:"SSDI"},domProps:{value:e.SSDI},on:{input:[function(t){t.target.composing||(e.SSDI=e._n(t.target.value))},function(t){e.sendIncomeAdditionalSubtotal(e.otherIncomeSubtotal)}],blur:function(t){e.$forceUpdate()}}}),e._v(" per month\n    ")]),n("p",[e._v("Alimony\n      "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.alimony,expression:"alimony",modifiers:{number:!0}}],attrs:{type:"number",name:"alimony",placeholder:"$0.00/month",min:"0.00",id:"alimony",value:"alimony"},domProps:{value:e.alimony},on:{input:[function(t){t.target.composing||(e.alimony=e._n(t.target.value))},function(t){e.sendIncomeAdditionalSubtotal(e.otherIncomeSubtotal)}],blur:function(t){e.$forceUpdate()}}}),e._v(" per month\n    ")]),n("p",[e._v("Child Support\n      "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.childSupport,expression:"childSupport",modifiers:{number:!0}}],attrs:{type:"number",name:"childSupport",placeholder:"$0.00/month",min:"0.00",id:"childSupport",value:"childSupport"},domProps:{value:e.childSupport},on:{input:[function(t){t.target.composing||(e.childSupport=e._n(t.target.value))},function(t){e.sendIncomeAdditionalSubtotal(e.otherIncomeSubtotal)}],blur:function(t){e.$forceUpdate()}}}),e._v(" per month\n    ")]),n("p",[e._v("Pension or Retirement\n      "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.pensionRetirement,expression:"pensionRetirement",modifiers:{number:!0}}],attrs:{type:"number",name:"pensionRetirement",placeholder:"$0.00/month",min:"0.00",id:"pensionRetirement",value:"pensionRetirement"},domProps:{value:e.pensionRetirement},on:{input:[function(t){t.target.composing||(e.pensionRetirement=e._n(t.target.value))},function(t){e.sendIncomeAdditionalSubtotal(e.otherIncomeSubtotal)}],blur:function(t){e.$forceUpdate()}}}),e._v(" per month\n    ")])])},H=[],D={name:"incomeAdditional",props:{coapplicant:Boolean,incomeSubtotal:Number,incomeSubtotalCoApplicant:Number},data:function(){return{SNAPWic:0,TANF:0,SSI:0,SSDI:0,alimony:0,childSupport:0,pensionRetirement:0}},computed:{otherIncomeSubtotal:function(){return this.SNAPWic+this.TANF+this.SSI+this.SSDI+this.alimony+this.childSupport+this.pensionRetirement}},methods:{sendIncomeAdditionalSubtotal:function(e){this.$emit("incomeAddSubCalc",e)}}},O=D,F=(n("4dc4"),Object(f["a"])(O,W,H,!1,null,"343f50d3",null));F.options.__file="incomeAdditional.vue";var E=F.exports,T={name:"incomeContainer",props:{coapplicant:Boolean},data:function(){return{showCoapplicant:!1,showIncomeAdditional:!1,adFormButton:!1,incomeSubtotal:0,incomeSubtotalCoApplicant:0,otherIncomeSubtotal:0}},components:{income:P,incomeCoApplicant:N,incomeAdditional:E},computed:{totalIncome:function(){return this.otherIncomeSubtotal+this.incomeSubtotal+this.incomeSubtotalCoApplicant}},methods:{showCoapplicantForm:function(e){this.showCoapplicant=e},showIncomeAddButton:function(e){this.adFormButton=e},showIncomeAdditionalForm:function(e){this.showIncomeAdditional=e},makeIncomeSubCalc:function(e){this.incomeSubtotal=e},coIncomeSubCalc:function(e){this.incomeSubtotalCoApplicant=e},otherIncomeSubCalc:function(e){this.otherIncomeSubtotal=e},sendIncomeTotal:function(e){this.$emit("totalIncomeCalc",e)}}},j=T,M=(n("64f8"),Object(f["a"])(j,S,_,!1,null,"2e48cef2",null));M.options.__file="incomeContainer.vue";var U=M.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Debt")]),e._m(0),e._l(e.debts,function(t){return n("div",{key:t.name,staticClass:"debtlist"},[n("p",[e._v(e._s(t.name)+" \n        "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.minPayment,expression:"debt.minPayment",modifiers:{number:!0}}],attrs:{type:"number",id:"debtInputs",name:"debtInputs",placeholder:"$0.00/month",min:"0",value:"minPayment"},domProps:{value:t.minPayment},on:{input:[function(n){n.target.composing||e.$set(t,"minPayment",e._n(n.target.value))},function(t){e.sendDebtSubtotal(e.debtSubtotal)}],blur:function(t){e.$forceUpdate()}}})])])}),e._m(1),n("div",[n("button",{staticClass:"button green",on:{click:function(t){e.haveDeferred=!0}}},[e._v("Yes")]),n("button",{on:{click:function(t){e.haveDeferred=!1}}},[e._v("No")])]),e.haveDeferred?n("div",[e._m(2),e._l(e.debts,function(t){return n("div",{key:t.name,staticClass:"debtlist"},[n("p",[e._v(e._s(t.name)+" \n        "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.deferredAmt,expression:"debt.deferredAmt",modifiers:{number:!0}}],attrs:{type:"number",id:"debtInputs",name:"debtInputs",placeholder:"$0.00/month",min:"0",value:"deferredAmt"},domProps:{value:t.deferredAmt},on:{input:[function(n){n.target.composing||e.$set(t,"deferredAmt",e._n(n.target.value))},function(t){e.sendDebtSubtotal(e.debtSubtotal)}],blur:function(t){e.$forceUpdate()}}})])])})],2):e._e()],2)},B=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Please enter your total "),n("strong",[e._v("minimum")]),e._v(" monthly payment obligations on the following kinds of debts:")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Do you currently have deferred loans?")]),e._v(" \n        Loans you don't have to make payments on at this time.        \n    ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Please enter the "),n("strong",[e._v("total loan amount")]),e._v(" for each type of deferred loan")])}],J={name:"debtForm",data:function(){return{debts:[{name:"Credit card(s)",minPayment:0,deferredAmt:0},{name:"Car loan(s)",minPayment:0,deferredAmt:0},{name:"Student loan(s)",minPayment:0,deferredAmt:0},{name:"Medical payment(s)",minPayment:0,deferredAmt:0},{name:"Other payments",minPayment:0,deferredAmt:0}],haveDeferred:!1}},computed:{debtSubtotal1:function(){var e=this.debts.reduce(function(e,t){return e+t.minPayment},0);return console.log(e),e},deferredSubtotal:function(){var e=.01*this.debts.reduce(function(e,t){return e+t.deferredAmt},0);return console.log(e),e},debtSubtotal:function(){return this.debtSubtotal1+this.deferredSubtotal}},methods:{sendDebtSubtotal:function(e){this.$emit("debtCalc",e)}}},Y=J,q=(n("79a6"),Object(f["a"])(Y,R,B,!1,null,"8e9cf5a8",null));q.options.__file="debt.vue";var L=q.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Income Level")]),n("div",{staticClass:"resultsOutput"},[n("h3",[e._v("Household Summary")]),n("ul",[n("li",[e._v("Household Size: "+e._s(e.hhSize))]),n("li",[e._v("Monthly household income estimate: "+e._s(e._f("currency")(e.totalIncome)))]),n("li",[e._v("Annual household income estimate: "+e._s(e._f("currency")(e.annualIncome))+" ")]),n("br"),n("li",[e._v("Monthly debt obligations estimate: "+e._s(e._f("currency")(e.debtSubtotal)))]),n("li",[n("strong",[e._v("Debt-to-Income Ratio (DTI) ")]),e._v("estimate: "+e._s(e._f("round")(e.dtiEstimate))+"%")])]),n("h3",[e._v("Area Median Income")]),n("p",[e._v("Your income and household size is "+e._s(e._f("round")(e.individualAMI))+"% of the\n                area median income. The metro Denver area median income for a household of "+e._s(e.hhSize)+" is\n                "+e._s(e._f("currency")(e.medianIncomebyHouseholdSize[e.hhSize-1].ami100))+" per year.")]),n("hr"),n("h3",[e._v("Estimated Program Qualifications")]),e._m(0),n("h4",[e._v("Income")]),e.lowIncome(e.annualIncome,e.hhSize,e.medianIncomebyHouseholdSize)?n("div",[n("lowIncomeContent"),n("span",[e._v("No homes are available at this income level, but\n                an affordable mortgage payment calculated at 30% of your monthly income\n                would be about "+e._s(e._f("currency")(e.mortgageEstimate))+".")])],1):e._e(),e.highIncome(e.annualIncome,e.hhSize,e.medianIncomebyHouseholdSize)?n("div",[n("highIncomeContent")],1):e._e(),e.midlowIncome(e.annualIncome,e.hhSize,e.medianIncomebyHouseholdSize)?n("div",[n("midlowIncomeContent"),n("span",[e._v("Your affordable mortgage costs, calculated at 30% of your monthly income\n                is estimated at "+e._s(e._f("currency")(e.mortgageEstimate))+".")]),n("br")],1):e._e(),n("h4",[e._v("Debt-to-Income Ratio")]),e.dtiNoMortgage>=e.dtiThresholdNoMortgage?n("div",[n("dtiHighContent")],1):n("div",[e._v(" Your current estimated debt-to-income ratio is "+e._s(e._f("round")(e.dtiNoMortgage))+"%. This level of debt obligation\n                is in the acceptable range to qualify for an affordable home mortgage.\n            ")])])])},G=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("i",[e._v("Both income and debt-to-income (DTI) ratio must be acceptable to qualify for an affordable mortgage.")])])}],K=(n("a481"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),V=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("With the data provided, your income is too low and "),n("u",[e._v("does not qualify")]),e._v(" for an affordable home mortgage. \n        "),n("a",{attrs:{href:"https://www.habitatmetrodenver.org/our-programs/homeownership/helpful-resources/"}},[n("strong",[e._v("Click here ")])]),e._v("for more information regarding low-income housing assistance and other services.\n    ")]),n("p",[e._v("For more information and resources on career planning, visit the Colorado \n        Department of Labor and Employment "),n("a",{attrs:{href:"https://www.colorado.gov/pacific/cdle/wfc"}},[e._v("website")]),e._v(".\n    ")])])}],X={name:"lowIncomeContent"},Z=X,ee=(n("1b77"),Object(f["a"])(Z,K,V,!1,null,null,null));ee.options.__file="resultsLowIncome.vue";var te=ee.exports,ne=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},oe=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("p",[e._v("With the data provided, your income is too high and "),n("u",[e._v("does not qualify")]),e._v(" for an affordable home mortgage. \n        "),n("a",{attrs:{href:"https://www.habitatmetrodenver.org/our-programs/homeownership/helpful-resources/"}},[e._v("\n        Click here ")]),e._v("for more information regarding home buying programs and services. \n    ")]),n("h4",[e._v("Resources for buying a home in metro Denver")]),n("ul",[n("li",[n("a",{attrs:{href:"http://www.mpoweredcolorado.org/"}},[e._v("Mpowered Financial Counseling")])]),n("li",[n("a",{attrs:{href:"https://www.chfainfo.com/"}},[e._v("Colorado Housing and Finance Authority - CHFA")])])])])])}],ie={name:"highIncomeContent"},re=ie,ae=(n("ce6a"),Object(f["a"])(re,ne,oe,!1,null,null,null));ae.options.__file="resultsHighIncome.vue";var ue=ae.exports,ce=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},me=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("With the data provided, your income could qualify for an affordable home mortgage. \n        "),n("a",{attrs:{href:"https://www.habitatmetrodenver.org/program-qualifications/"}},[e._v("\n        Learn more about Habitat Denver's Homeownership program on their website. ")])])])}],le={name:"midlowIncomeContent"},se=le,de=(n("955c"),Object(f["a"])(se,ce,me,!1,null,null,null));de.options.__file="resultsMidLowIncome.vue";var he=de.exports,pe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},fe=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("With the data provided, your "),n("u",[e._v("debt-to-income ratio (DTI) is too high")]),e._v(" and does not qualify for\n     an affordable home mortgage.")]),n("h4",[e._v("Financial and Credit Counseling Services include:")]),n("ul",[n("li",[e._v("CRHDC 303-428-1448\n\n            ")]),n("li",[e._v("Denver Housing Authority 720-956-3801")]),n("li",[e._v("Mi Casa Resource Center 303-539-5606")]),n("li",[e._v("Money Management/CCCS 1-866-889-9347")]),n("li",[e._v("Mpowered 303-233-2773")]),n("li",[e._v("Operation HOPE 720-855-8741")])])])}],ve={name:"dtiHighContent"},be=ve,Se=(n("eed4"),Object(f["a"])(be,pe,fe,!1,null,null,null));Se.options.__file="resultsDTIHigh.vue";var _e=Se.exports,ye={name:"results",props:{hhSize:Number,totalIncome:Number,debtSubtotal:Number},data:function(){return{medianIncomebyHouseholdSize:[{housesize:1,ami100:62938},{housesize:2,ami100:71938},{housesize:3,ami100:80938},{housesize:4,ami100:89875},{housesize:5,ami100:97125},{housesize:6,ami100:104313},{housesize:7,ami100:111500},{housesize:8,ami100:118688},{housesize:9,ami100:125875},{housesize:10,ami100:133063}],dtiThreshold:43,dtiThresholdNoMortgage:13}},components:{formWizScratch:ze,lowIncomeContent:te,highIncomeContent:ue,midlowIncomeContent:he,dtiHighContent:_e},filters:{round:function(e){return e.toFixed(2)},currency:function(e){return"$"+e.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}},computed:{mortgageEstimate:function(){return.3*this.totalIncome},dtiNoMortgage:function(){return 100*this.debtSubtotal/this.totalIncome},debtsInclMortgage:function(){return 100*(this.debtSubtotal+this.mortgageEstimate)},dtiEstimate:function(){return this.debtsInclMortgage/this.totalIncome},annualIncome:function(){return 12*this.totalIncome},individualAMI:function(){return 100*this.annualIncome/this.medianIncomebyHouseholdSize[this.hhSize-1].ami100}},methods:{lowIncome:function(e,t,n){var o=.5*this.medianIncomebyHouseholdSize[this.hhSize-1].ami100;if(e<o)return!0},highIncome:function(e,t,n){var o=.8*this.medianIncomebyHouseholdSize[this.hhSize-1].ami100;if(e>o)return!0},midlowIncome:function(e,t,n){var o=.8*this.medianIncomebyHouseholdSize[this.hhSize-1].ami100,i=.5*this.medianIncomebyHouseholdSize[this.hhSize-1].ami100;if(e>i&&e<o)return!0}}},ge=ye,Ie=(n("2641"),Object(f["a"])(ge,Q,G,!1,null,"f530a620",null));Ie.options.__file="resultsContainer.vue";var we=Ie.exports,Ce={name:"formWizScratch",data:function(){return{coapplicant:!1,hhSize:1,totalIncome:0,debtSubtotal:0}},props:{title:{type:String,default:"Household Income and Debt Calculator"},subtitle:{type:String,default:"Calculate your total household income and debt-to-income ratio"},nextButtonText:{type:String,default:"Next"},backButtonText:{type:String,default:"Back"},finishButtonText:{type:String,default:"Finish"},stepSize:{type:String,default:"md",validator:function(e){var t=["xs","sm","md","lg"];return-1!==t.indexOf(e)}},validateOnBack:Boolean,color:{type:String,default:"#ff671f"},errorColor:{type:String,default:"#8b0000"},shape:{type:String,default:"circle"},transition:{type:String,default:""},startIndex:{type:Number,default:0}},components:{householdInfo:b,incomeContainer:U,debtForm:L,results:we},methods:{setCoapplicant:function(e){this.coapplicant=e},setHHSize:function(e){this.hhSize=e},sendIncomeTotal:function(e){this.totalIncome=e},sendDebtSubtotal:function(e){this.debtSubtotal=e}}},Pe=Ce,Ae=(n("44cd"),Object(f["a"])(Pe,c,m,!1,null,null,null));Ae.options.__file="formWizScratch.vue";var ze=Ae.exports,$e={name:"app",components:{formWizScratch:ze}},xe=$e,ke=(n("034f"),Object(f["a"])(xe,a,u,!1,null,null,null));ke.options.__file="App.vue";var Ne=ke.exports;n("da93"),n("2fc4");o["a"].filter("round",function(e){return e.toFixed(2)}),o["a"].filter("currency",function(e){return"$"+e.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}),o["a"].use(r.a),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(Ne)}}).$mount("#app")},"64a9":function(e,t,n){},"64f8":function(e,t,n){"use strict";var o=n("1d28"),i=n.n(o);i.a},"6f8a":function(e,t,n){},"79a6":function(e,t,n){"use strict";var o=n("470e"),i=n.n(o);i.a},"86b6":function(e,t,n){"use strict";var o=n("0b79"),i=n.n(o);i.a},"955c":function(e,t,n){"use strict";var o=n("4799"),i=n.n(o);i.a},a3cf:function(e,t,n){},a78d:function(e,t,n){},ce6a:function(e,t,n){"use strict";var o=n("1790"),i=n.n(o);i.a},eed4:function(e,t,n){"use strict";var o=n("4302"),i=n.n(o);i.a}});
//# sourceMappingURL=app.4ddfcd74.js.map