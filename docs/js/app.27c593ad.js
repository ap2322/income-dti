(function(e){function t(t){for(var o,r,c=t[0],u=t[1],m=t[2],s=0,d=[];s<c.length;s++)r=c[s],i[r]&&d.push(i[r][0]),i[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,m||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var u=n[c];0!==i[u]&&(o=!1)}o&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},i={app:0},a=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var m=0;m<c.length;m++)t(c[m]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("64a9"),i=n.n(o);i.a},"0b79":function(e,t,n){},"1b8c":function(e,t,n){},"259b":function(e,t,n){},"2fc4":function(e,t,n){},"44cd":function(e,t,n){"use strict";var o=n("1b8c"),i=n.n(o);i.a},"4dc4":function(e,t,n){"use strict";var o=n("259b"),i=n.n(o);i.a},5133:function(e,t,n){"use strict";var o=n("a3cf"),i=n.n(o);i.a},"567b":function(e,t,n){"use strict";var o=n("a78d"),i=n.n(o);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),i=n("2ee4"),a=n.n(i),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("formWizScratch")],1)},c=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"formWizScratch"}},[n("p",[e._v("Value passing check: coapplicant "+e._s(e.coapplicant)+"; \n    household size "+e._s(e.hhSize)+"; totalIncome "+e._s(e.totalIncome)+"; total debts "+e._s(e.debtSubtotal))]),n("form-wizard",{attrs:{color:"#ff671f",title:"Household Income and Debt Calculator",subtitle:"Calculate your total household income and estimated debt-to-income ratio in \n        preparation for applying for an affordable home."}},[n("tab-content",{attrs:{title:"Household",icon:"ti ti-user"}},[n("householdInfo",{attrs:{coapplicant:e.coapplicant,hhSize:e.hhSize},on:{coapplicantSpecified:e.setCoapplicant,hhSizeInput:e.setHHSize}})],1),n("tab-content",{attrs:{title:"Income",icon:"ti ti-money"}},[n("incomeContainer",{attrs:{coapplicant:e.coapplicant,totalIncome:e.totalIncome},on:{totalIncomeCalc:e.sendIncomeTotal}})],1),n("tab-content",{attrs:{title:"Debt",icon:"ti ti-receipt"}},[n("debtForm",{attrs:{debtSubtotal:e.debtSubtotal},on:{debtCalc:e.sendDebtSubtotal}})],1),n("tab-content",{attrs:{title:"Results",icon:"ti ti-bar-chart"}},[n("results",{attrs:{hhSize:e.hhSize,totalIncome:e.totalIncome,debtSubtotal:e.debtSubtotal}})],1)],1)],1)},m=[],l=(n("c5f6"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Household")]),n("p",[e._v("Will you be applying for an affordable home mortgage with a spouse/partner?")]),n("div",[n("button",{staticClass:"button green",on:{click:function(t){e.setCoapplicant(!0)}}},[e._v("Yes")]),n("button",{on:{click:function(t){e.setCoapplicant(!1)}}},[e._v("No")])]),n("br"),n("p",[e._v("What is your household size?")]),n("label",{attrs:{for:"hhSize"}},[e._v("Household Size")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.hhSize,expression:"hhSize",modifiers:{number:!0}}],attrs:{type:"number",name:"householdSize",placeholder:"Min: 1, Max: 10",min:"1",max:"10",id:"out-of-range-input",value:"hhSize"},domProps:{value:e.hhSize},on:{input:[function(t){t.target.composing||(e.hhSize=e._n(t.target.value))},function(t){e.setHHSize(e.hhSize)}],blur:function(t){e.$forceUpdate()}}}),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.validInput(e.hhSize),expression:"!validInput(hhSize)"}],staticClass:"help-text"})])}),s=[],d=n("53ca"),p={name:"householdInfo",props:{coapplicant:Boolean},data:function(){return{hhSize:1,selected:1}},methods:{setCoapplicant:function(e){this.$emit("coapplicantSpecified",e),e&&(this.hhSize=2)},setHHSize:function(e){this.$emit("hhSizeInput",e)},validInput:function(e){return Object(d["a"])(e)==Number&&e>0&&e<=10}}},h=p,b=(n("86b6"),n("2877")),f=Object(b["a"])(h,l,s,!1,null,null,null);f.options.__file="householdInfo.vue";var v=f.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("income",{attrs:{incomeSubtotal:e.incomeSubtotal},on:{incomeSubCalc:e.makeIncomeSubCalc}}),e.coapplicant?n("button",{on:{click:function(t){e.showCoapplicantForm(!0),e.showIncomeAddButton(!0)}}},[e._v(" Ready to add your spouse/partner/coapplicant's income?")]):e._e(),n("incomeCoApplicant",{directives:[{name:"show",rawName:"v-show",value:e.showCoapplicant,expression:"showCoapplicant"}],attrs:{incomeSubtotalCoApplicant:e.incomeSubtotalCoApplicant},on:{incomeCoSubCalc:e.coIncomeSubCalc}}),!e.coapplicant||e.adFormButton?n("button",{on:{click:function(t){e.showIncomeAdditionalForm(!0)}}},[e._v("Click to add additional sources of income")]):e._e(),e.showIncomeAdditional?n("incomeAdditional",{attrs:{otherIncomeSubtotal:e.otherIncomeSubtotal},on:{incomeAddSubCalc:e.otherIncomeSubCalc}}):e._e(),n("p",[e._v("Your approximate monthly income is $"+e._s(e.totalIncome)+". Does this look correct?")]),n("button",{on:{click:function(t){e.sendIncomeTotal(e.totalIncome)}}},[e._v("Yes")])],1)},y=[],_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Income")]),n("p",[e._v("What is your hourly income from your primary job?\n    "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.incomePrimary,expression:"incomePrimary",modifiers:{number:!0}}],attrs:{type:"number",name:"incomePrimary",placeholder:"$0.00/hr",min:"0.00",max:"200.00",step:"0.01",value:"incomePrimary"},domProps:{value:e.incomePrimary},on:{input:[function(t){t.target.composing||(e.incomePrimary=e._n(t.target.value))},function(t){e.sendIncomeSubtotal(e.incomeSubtotal)}],blur:function(t){e.$forceUpdate()}}})]),n("p",[e._v("On average, how many hours per week do you work?\n      "),n("label",{attrs:{for:"hoursPerWeek"}},[e._v("Hours per week ")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.hoursPerWeek,expression:"hoursPerWeek",modifiers:{number:!0}}],attrs:{type:"number",name:"hoursPerWeek",placeholder:"40",min:"0",max:"168",id:"hoursPerWeek",value:"hoursPerWeek"},domProps:{value:e.hoursPerWeek},on:{input:[function(t){t.target.composing||(e.hoursPerWeek=e._n(t.target.value))},function(t){e.sendIncomeSubtotal(e.incomeSubtotal)}],blur:function(t){e.$forceUpdate()}}})]),n("p",[e._v("Do you have another job?")]),n("div",e._b({attrs:{id:"anotherJob",select:""}},"div",e.anotherJob,!1),[n("button",{staticClass:"button green",on:{click:function(t){e.anotherJob=!0}}},[e._v("Yes")]),n("button",{on:{click:function(t){e.anotherJob=!1}}},[e._v("No")])]),e.anotherJob?n("div",[n("p",[e._v(" What is your hourly income from this job?\n        "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.incomeSecondary,expression:"incomeSecondary",modifiers:{number:!0}}],attrs:{type:"number",name:"incomeSecondary",placeholder:"$0.00/hr",min:"0.00",max:"200.00",step:"0.01",id:"incomeSecondary",value:"incomeSecondary"},domProps:{value:e.incomeSecondary},on:{input:[function(t){t.target.composing||(e.incomeSecondary=e._n(t.target.value))},function(t){e.sendIncomeSubtotal(e.incomeSubtotal)}],blur:function(t){e.$forceUpdate()}}})]),n("p",[e._v("On average, how many hours per week do you work?")]),n("label",{attrs:{for:"hoursSecondary"}},[e._v("Hours per week ")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.hoursSecondary,expression:"hoursSecondary",modifiers:{number:!0}}],attrs:{type:"number",name:"hoursSecondary",placeholder:"20",min:"0",max:"168",id:"hoursSecondary",value:"hoursSecondary"},domProps:{value:e.hoursSecondary},on:{input:[function(t){t.target.composing||(e.hoursSecondary=e._n(t.target.value))},function(t){e.sendIncomeSubtotal(e.incomeSubtotal)}],blur:function(t){e.$forceUpdate()}}})]):e._e()])},I=[],g={name:"income",data:function(){return{incomePrimary:0,hoursPerWeek:40,incomeSecondary:0,hoursSecondary:20,anotherJob:!1}},computed:{monthlyIncome:function(){return this.incomePrimary*this.hoursPerWeek*4},monthlyIncomeSecondary:function(){return this.incomeSecondary*this.hoursSecondary*4},incomeSubtotal:function(){return this.monthlyIncome+this.monthlyIncomeSecondary}},methods:{sendIncomeSubtotal:function(e){this.$emit("incomeSubCalc",e)}}},P=g,C=(n("5133"),Object(b["a"])(P,_,I,!1,null,null,null));C.options.__file="income.vue";var w=C.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Co-Applicant Income")]),n("p",[e._v("What is the hourly income from their primary job in $/hour?\n    "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.incomePrimary,expression:"incomePrimary",modifiers:{number:!0}}],attrs:{type:"number",name:"incomePrimary",placeholder:"$0.00/hr",min:"0.00",max:"200.00",step:"0.01",id:"incomePrimary",value:"incomePrimary"},domProps:{value:e.incomePrimary},on:{input:[function(t){t.target.composing||(e.incomePrimary=e._n(t.target.value))},function(t){e.sendCoIncomeSubtotal(e.incomeSubtotalCoApplicant)}],blur:function(t){e.$forceUpdate()}}})]),n("p",[e._v("On average, how many hours per week do you work?")]),n("label",{attrs:{for:"hoursPerWeek"}},[e._v("Hours per week ")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.hoursPerWeek,expression:"hoursPerWeek",modifiers:{number:!0}}],attrs:{type:"number",name:"hoursPerWeek",placeholder:"40",min:"0",max:"168",id:"hoursPerWeek",value:"hoursPerWeek"},domProps:{value:e.hoursPerWeek},on:{input:[function(t){t.target.composing||(e.hoursPerWeek=e._n(t.target.value))},function(t){e.sendCoIncomeSubtotal(e.incomeSubtotalCoApplicant)}],blur:function(t){e.$forceUpdate()}}}),n("p",[e._v("Do they have another job?")]),n("div",e._b({attrs:{id:"anotherJob",select:""}},"div",e.anotherJob,!1),[n("button",{on:{click:function(t){e.anotherJob=!0}}},[e._v("Yes")]),n("button",{on:{click:function(t){e.anotherJob=!1}}},[e._v("No")])]),e.anotherJob?n("div",[n("p",[e._v(" What is their hourly income from this job?\n        "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.incomeSecondary,expression:"incomeSecondary",modifiers:{number:!0}}],attrs:{type:"number",name:"incomeSecondary",placeholder:"$0.00/hr",min:"0.00",max:"200.00",step:"0.01",id:"incomeSecondary",value:"incomeSecondary"},domProps:{value:e.incomeSecondary},on:{input:[function(t){t.target.composing||(e.incomeSecondary=e._n(t.target.value))},function(t){e.sendCoIncomeSubtotal(e.incomeSubtotalCoApplicant)}],blur:function(t){e.$forceUpdate()}}})]),n("p",[e._v("On average, how many hours per week do they work?")]),n("label",{attrs:{for:"hoursSecondary"}},[e._v("Hours per week ")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.hoursSecondary,expression:"hoursSecondary",modifiers:{number:!0}}],attrs:{type:"number",name:"hoursSecondary",placeholder:"20",min:"0",max:"168",id:"hoursSecondary",value:"hoursSecondary"},domProps:{value:e.hoursSecondary},on:{input:[function(t){t.target.composing||(e.hoursSecondary=e._n(t.target.value))},function(t){e.sendCoIncomeSubtotal(e.incomeSubtotalCoApplicant)}],blur:function(t){e.$forceUpdate()}}})]):e._e()])},k=[],x={name:"incomeCoApplicant",data:function(){return{incomePrimary:0,hoursPerWeek:40,incomeSecondary:0,hoursSecondary:20,anotherJob:!1}},computed:{monthlyIncome:function(){return this.incomePrimary*this.hoursPerWeek*4},monthlyIncomeSecondary:function(){return this.incomeSecondary*this.hoursSecondary*4},incomeSubtotalCoApplicant:function(){return this.monthlyIncome+this.monthlyIncomeSecondary}},methods:{sendCoIncomeSubtotal:function(e){this.$emit("incomeCoSubCalc",e)}}},z=x,N=(n("567b"),Object(b["a"])(z,A,k,!1,null,null,null));N.options.__file="incomeCoApplicant.vue";var $=N.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Additional Income")]),n("p",[e._v("SNAP/WIC Food Assistance \n    "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.SNAPWic,expression:"SNAPWic",modifiers:{number:!0}}],attrs:{type:"number",name:"SNAPWic",placeholder:"$0.00/month",min:"0.00",id:"SNAPWic",value:"SNAPWic"},domProps:{value:e.SNAPWic},on:{input:[function(t){t.target.composing||(e.SNAPWic=e._n(t.target.value))},function(t){e.sendIncomeAdditionalSubtotal(e.otherIncomeSubtotal)}],blur:function(t){e.$forceUpdate()}}}),e._v(" per month\n    ")]),n("p",[e._v("Temporary Assistance for Needy Families (TANF) \n    "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.TANF,expression:"TANF",modifiers:{number:!0}}],attrs:{type:"number",name:"TANF",placeholder:"$0.00/month",min:"0.00",id:"TANF",value:"TANF"},domProps:{value:e.TANF},on:{input:[function(t){t.target.composing||(e.TANF=e._n(t.target.value))},function(t){e.sendIncomeAdditionalSubtotal(e.otherIncomeSubtotal)}],blur:function(t){e.$forceUpdate()}}}),e._v(" per month\n    ")]),n("p",[e._v("Supplemental Security Income (SSI) \n    "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.SSI,expression:"SSI",modifiers:{number:!0}}],attrs:{type:"number",name:"SSI",placeholder:"$0.00/month",min:"0.00",id:"SSI",value:"SSI"},domProps:{value:e.SSI},on:{input:[function(t){t.target.composing||(e.SSI=e._n(t.target.value))},function(t){e.sendIncomeAdditionalSubtotal(e.otherIncomeSubtotal)}],blur:function(t){e.$forceUpdate()}}}),e._v(" per month\n    ")]),n("p",[e._v("Social Security Disability Insurance (SSDI)\n    "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.SSDI,expression:"SSDI",modifiers:{number:!0}}],attrs:{type:"number",name:"SSDI",placeholder:"$0.00/month",min:"0.00",id:"SSDI",value:"SSDI"},domProps:{value:e.SSDI},on:{input:[function(t){t.target.composing||(e.SSDI=e._n(t.target.value))},function(t){e.sendIncomeAdditionalSubtotal(e.otherIncomeSubtotal)}],blur:function(t){e.$forceUpdate()}}}),e._v(" per month\n    ")]),n("p",[e._v("Alimony\n      "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.alimony,expression:"alimony",modifiers:{number:!0}}],attrs:{type:"number",name:"alimony",placeholder:"$0.00/month",min:"0.00",id:"alimony",value:"alimony"},domProps:{value:e.alimony},on:{input:[function(t){t.target.composing||(e.alimony=e._n(t.target.value))},function(t){e.sendIncomeAdditionalSubtotal(e.otherIncomeSubtotal)}],blur:function(t){e.$forceUpdate()}}}),e._v(" per month\n    ")]),n("p",[e._v("Child Support\n      "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.childSupport,expression:"childSupport",modifiers:{number:!0}}],attrs:{type:"number",name:"childSupport",placeholder:"$0.00/month",min:"0.00",id:"childSupport",value:"childSupport"},domProps:{value:e.childSupport},on:{input:[function(t){t.target.composing||(e.childSupport=e._n(t.target.value))},function(t){e.sendIncomeAdditionalSubtotal(e.otherIncomeSubtotal)}],blur:function(t){e.$forceUpdate()}}}),e._v(" per month\n    ")]),n("p",[e._v("Pension or Retirement\n      "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.pensionRetirement,expression:"pensionRetirement",modifiers:{number:!0}}],attrs:{type:"number",name:"pensionRetirement",placeholder:"$0.00/month",min:"0.00",id:"pensionRetirement",value:"pensionRetirement"},domProps:{value:e.pensionRetirement},on:{input:[function(t){t.target.composing||(e.pensionRetirement=e._n(t.target.value))},function(t){e.sendIncomeAdditionalSubtotal(e.otherIncomeSubtotal)}],blur:function(t){e.$forceUpdate()}}}),e._v(" per month\n    ")])])},O=[],j={name:"incomeAdditional",props:{coapplicant:Boolean,incomeSubtotal:Number,incomeSubtotalCoApplicant:Number},data:function(){return{SNAPWic:0,TANF:0,SSI:0,SSDI:0,alimony:0,childSupport:0,pensionRetirement:0}},computed:{otherIncomeSubtotal:function(){return this.SNAPWic+this.TANF+this.SSI+this.SSDI+this.alimony+this.childSupport+this.pensionRetirement}},methods:{sendIncomeAdditionalSubtotal:function(e){this.$emit("incomeAddSubCalc",e)}}},D=j,F=(n("4dc4"),Object(b["a"])(D,W,O,!1,null,"343f50d3",null));F.options.__file="incomeAdditional.vue";var T=F.exports,H={name:"incomeContainer",props:{coapplicant:Boolean},data:function(){return{showCoapplicant:!1,showIncomeAdditional:!1,adFormButton:!1,incomeSubtotal:0,incomeSubtotalCoApplicant:0,otherIncomeSubtotal:0}},components:{income:w,incomeCoApplicant:$,incomeAdditional:T},computed:{totalIncome:function(){return this.otherIncomeSubtotal+this.incomeSubtotal+this.incomeSubtotalCoApplicant}},methods:{showCoapplicantForm:function(e){this.showCoapplicant=e},showIncomeAddButton:function(e){this.adFormButton=e},showIncomeAdditionalForm:function(e){this.showIncomeAdditional=e},makeIncomeSubCalc:function(e){this.incomeSubtotal=e},coIncomeSubCalc:function(e){this.incomeSubtotalCoApplicant=e},otherIncomeSubCalc:function(e){this.otherIncomeSubtotal=e},sendIncomeTotal:function(e){this.$emit("totalIncomeCalc",e)}}},U=H,E=(n("9ba9"),Object(b["a"])(U,S,y,!1,null,"08a24486",null));E.options.__file="incomeContainer.vue";var B=E.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Debt")]),e._m(0),e._l(e.debts,function(t){return n("div",{key:t.name,staticClass:"debtlist"},[n("p",[e._v(e._s(t.name)+" \n        "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.minPayment,expression:"debt.minPayment",modifiers:{number:!0}}],attrs:{type:"number",id:"debtInputs",name:"debtInputs",placeholder:"$0.00/month",min:"0",value:"minPayment"},domProps:{value:t.minPayment},on:{input:[function(n){n.target.composing||e.$set(t,"minPayment",e._n(n.target.value))},function(t){e.sendDebtSubtotal(e.debtSubtotal)}],blur:function(t){e.$forceUpdate()}}})])])})],2)},R=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Please enter your total "),n("strong",[e._v("minimum")]),e._v(" monthly payment obligations on the following kinds of debts:")])}],M={name:"debtForm",data:function(){return{debts:[{name:"Credit card(s)",minPayment:0},{name:"Car loan(s)",minPayment:0},{name:"Student loan(s)",minPayment:0},{name:"Medical payment(s)",minPayment:0},{name:"Other payments",minPayment:0}]}},computed:{debtSubtotal:function(){var e=this.debts.reduce(function(e,t){return e+t.minPayment},0);return console.log(e),e}},methods:{sendDebtSubtotal:function(e){this.$emit("debtCalc",e)}}},Y=M,L=(n("ba31"),Object(b["a"])(Y,J,R,!1,null,"adc6f34a",null));L.options.__file="debt.vue";var V=L.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Income Level")]),n("p",[e._v("hhSize "+e._s(e.hhSize)+", totalIncome "+e._s(e.totalIncome)+", debts "+e._s(e.debtSubtotal)+"\n\n    ")]),n("h2",[e._v("Debt-to-Income Ratio (DTI)")]),n("p",[e._v("With a monthly income of "+e._s(e.totalIncome)+" and monthly debt obligations of "+e._s(e.debtSubtotal)+", your debt-to-income ratio \n        estimate is "),n("strong",[e._v(e._s(e.dtiEstimate))]),e._v(" \n        your mortgage estimate is "+e._s(e.mortgageEstimate)+";\n        your debts including a mortage are "+e._s(e.debtsInclMortgage)+";\n        and your household size is "+e._s(e.hhSize))])])},G=[],K={name:"results",props:{hhSize:Number,totalIncome:Number,debtSubtotal:Number},data:function(){return{medianIncomebyHouseholdSize:[{housesize:1,ami100:62938},{housesize:2,ami100:71938},{housesize:3,ami100:80938},{housesize:4,ami100:89875},{housesize:5,ami100:97125},{housesize:6,ami100:104313},{housesize:7,ami100:111500},{housesize:8,ami100:118688},{housesize:9,ami100:125875},{housesize:10,ami100:133063}]}},components:{formWizScratch:oe},computed:{mortgageEstimate:function(){return.3*this.totalIncome},debtsInclMortgage:function(){return this.debtSubtotal+this.mortgageEstimate},dtiEstimate:function(){return this.debtsInclMortgage/this.totalIncome}},methods:{}},Q=K,X=(n("a635"),Object(b["a"])(Q,q,G,!1,null,null,null));X.options.__file="resultsContainer.vue";var Z=X.exports,ee={name:"formWizScratch",data:function(){return{coapplicant:!1,hhSize:1,totalIncome:0,debtSubtotal:0}},props:{title:{type:String,default:"Household Income and Debt Calculator"},subtitle:{type:String,default:"Calculate your total household income and debt-to-income ratio"},nextButtonText:{type:String,default:"Next"},backButtonText:{type:String,default:"Back"},finishButtonText:{type:String,default:"Finish"},stepSize:{type:String,default:"md",validator:function(e){var t=["xs","sm","md","lg"];return-1!==t.indexOf(e)}},validateOnBack:Boolean,color:{type:String,default:"#ff671f"},errorColor:{type:String,default:"#8b0000"},shape:{type:String,default:"circle"},transition:{type:String,default:""},startIndex:{type:Number,default:0}},components:{householdInfo:v,incomeContainer:B,debtForm:V,results:Z},methods:{setCoapplicant:function(e){this.coapplicant=e},setHHSize:function(e){this.hhSize=e},sendIncomeTotal:function(e){this.totalIncome=e},sendDebtSubtotal:function(e){this.debtSubtotal=e}}},te=ee,ne=(n("44cd"),Object(b["a"])(te,u,m,!1,null,null,null));ne.options.__file="formWizScratch.vue";var oe=ne.exports,ie={name:"app",components:{formWizScratch:oe}},ae=ie,re=(n("034f"),Object(b["a"])(ae,r,c,!1,null,null,null));re.options.__file="App.vue";var ce=re.exports;n("da93"),n("2fc4");o["a"].use(a.a),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(ce)}}).$mount("#app")},"64a9":function(e,t,n){},"86b6":function(e,t,n){"use strict";var o=n("0b79"),i=n.n(o);i.a},"902d":function(e,t,n){},"9ba9":function(e,t,n){"use strict";var o=n("902d"),i=n.n(o);i.a},a3cf:function(e,t,n){},a635:function(e,t,n){"use strict";var o=n("cf90"),i=n.n(o);i.a},a78d:function(e,t,n){},ba31:function(e,t,n){"use strict";var o=n("ca84"),i=n.n(o);i.a},ca84:function(e,t,n){},cf90:function(e,t,n){}});
//# sourceMappingURL=app.27c593ad.js.map