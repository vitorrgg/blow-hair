(window.webpackJsonp=window.webpackJsonp||[]).push([[35,9,10],{180:function(s,i,e){"use strict";e.d(i,"a",(function(){return t})),e.d(i,"b",(function(){return a}));var t=function(){var s=this,i=s.$createElement,e=s._self._c||i;return e("div",{staticClass:"prices i",class:{"prices--literal":s.isLiteral,"prices--big":s.isBig}},[s.comparePrice?e("span",{staticClass:"prices__compare"},[s.isLiteral?[e("small",[s._v(" "+s._s(s.i19from)+" ")]),e("s",[s._v(s._s(s.formatMoney(s.comparePrice)))]),e("small",[s._v(" "+s._s(s.i19to)+" ")])]:e("s",[s._v(s._s(s.formatMoney(s.comparePrice)))])],2):s._e(),e("strong",{staticClass:"prices__value"},[s.hasVariedPrices?e("small",[s._v(" "+s._s(s.i19asOf)+" ")]):s._e(),s._v(" "+s._s(s.formatMoney(s.price))+" ")]),e("transition-group",{attrs:{"enter-active-class":"animated slideInDown"}},[s.earnPointsFactor>0&&!(s.pointsMinPrice>s.price)?e("div",{key:"points",staticClass:"prices__points"},[e("i",{staticClass:"fas fa-check-circle"}),s._v(" "+s._s(s.i19youEarn)+" "),e("span",[s._v(" até "+s._s((s.earnPointsFactor*s.price).toFixed(1))+" ")]),e("em",[s._v(s._s(s.pointsProgramName))])]):s._e(),s.installmentsNumber>1&&s.installmentValue?e("div",{key:"installments",staticClass:"prices__installments"},[s.isLiteral?e("small",[s._v(" "+s._s(s.i19upTo)+" ")]):s._e(),s._v(" "+s._s(s.installmentsNumber)+"x "),s.isLiteral?e("small",[s._v(" "+s._s(s.i19of)+" ")]):s._e(),e("span",[s._v(" "+s._s(s.formatMoney(s.installmentValue))+" ")]),!s.monthlyInterest&&s.isLiteral?e("small",[s._v(" "+s._s(s.i19interestFree)+" ")]):s._e()]):s._e(),"number"==typeof s.priceWithDiscount&&s.priceWithDiscount<s.price?e("div",{key:"discount",staticClass:"prices__discount"},["string"==typeof s.discountLabel&&s.discountLabel?[e("span",[s._v(" "+s._s(s.formatMoney(s.priceWithDiscount))+" ")]),e("small",{staticClass:"prices__discount-label"},[s._v(" "+s._s(s.discountLabel)+" ")])]:[e("small",[s._v(" "+s._s(s.i19asOf)+" ")]),e("span",[s._v(" "+s._s(s.formatMoney(s.priceWithDiscount))+" ")])]],2):s._e()])],1)},a=[]}},0,[0,1,4,22,3,26]]);