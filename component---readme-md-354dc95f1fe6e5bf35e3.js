(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7OsV":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return p}));a("5hJT"),a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("PJhk");var n=a("/FXl"),r=a("TjRS");a("aD51");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"README.md"}});var c={_frontmatter:l},i=r.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(i,b({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("a",b({parentName:"p"},{href:"https://travis-ci.com/studiojms/react-enhanced-numeric-input"}),Object(n.b)("img",{alt:"Build Status",src:"https://travis-ci.com/studiojms/react-enhanced-numeric-input.svg?branch=master"}))),Object(n.b)("h1",{id:"react-enhanced-numeric-input"},"react-enhanced-numeric-input"),Object(n.b)("p",null,"An enhanced Numeric Input made with React"),Object(n.b)("p",null,"Docs: ",Object(n.b)("a",b({parentName:"p"},{href:"https://studiojms.github.io/react-enhanced-numeric-input/"}),"https://studiojms.github.io/react-enhanced-numeric-input/")),Object(n.b)("h2",{id:"install"},"Install"),Object(n.b)("p",null,"To install the component, just type:"),Object(n.b)("pre",null,Object(n.b)("code",b({parentName:"pre"},{className:"language-sh"}),"npm install react-enhanced-numeric-input\n")),Object(n.b)("p",null,"or"),Object(n.b)("pre",null,Object(n.b)("code",b({parentName:"pre"},{className:"language-sh"}),"yarn add react-enhanced-numeric-input\n")),Object(n.b)("h2",{id:"using"},"Using"),Object(n.b)("p",null,"To use it, you will need to import the component and use it like:"),Object(n.b)("pre",null,Object(n.b)("code",b({parentName:"pre"},{className:"language-js"}),'import NumericInput from "react-enhanced-numeric-input";\n')),Object(n.b)("pre",null,Object(n.b)("code",b({parentName:"pre"},{className:"language-js"}),"<NumericInput />\n")),Object(n.b)("h3",{id:"example"},"Example"),Object(n.b)("pre",null,Object(n.b)("code",b({parentName:"pre"},{className:"language-js"}),"<NumericInput decimalPrecision={2} value={50} />\n")),Object(n.b)("h1",{id:"styles"},"Styles"),Object(n.b)("p",null,"The new version includes some default styles to format the money and percent input.\nTo use it, it is necessary to import the styles in the project distribution pack."),Object(n.b)("h2",{id:"example-1"},"Example"),Object(n.b)("pre",null,Object(n.b)("code",b({parentName:"pre"},{className:"language-js"}),'import "react-enhanced-numeric-input/dist/react-enhanced-numeric-input.css";\n')),Object(n.b)("h1",{id:"properties"},"Properties"),Object(n.b)("p",null,"It is possible to set some properties globally."),Object(n.b)("h2",{id:"setting-default-properties"},"Setting default properties"),Object(n.b)("p",null,"Some properties need to be set systemwide. To do so, it is necessary to import the function that defines it and set a new value."),Object(n.b)("h3",{id:"default-values"},"Default values"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:"left"}),"Property"),Object(n.b)("th",b({parentName:"tr"},{align:"left"}),"Default Value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"moneyMask"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"\\$")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"percent"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"%")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"decimalSeparator"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),",")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"thousandSeparator"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}))))),Object(n.b)("h3",{id:"example-2"},"Example"),Object(n.b)("pre",null,Object(n.b)("code",b({parentName:"pre"},{className:"language-js"}),'import {\n  setDefaultMoneyMask,\n  setDefaultPercent,\n  setDefaultDecimalSeparator,\n  setDefaultThousandSeparator,\n} from "react-enhanced-numeric-input";\n\nsetDefaultMoneyMask("US$");\nsetDefaultPercent("percent");\nsetDefaultDecimalSeparator(".");\nsetDefaultThousandSeparator(",");\n')),Object(n.b)("h2",{id:"properties-list"},"Properties list"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:"left"}),"Property"),Object(n.b)("th",b({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",b({parentName:"tr"},{align:"left"}),"Default Value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"className"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"decimalPrecision"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"0")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"disabled"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"boolean"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"false")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"maxLength"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"number"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"20")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"id"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"name"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"placeholder"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"onChange"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"function"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"onBlur"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"function"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"onClick"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"function"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"onFocus"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"function"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"onKeyPress"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"function"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"style"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"value"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"string or number"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"percent"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"boolean"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"false")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"money"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"boolean"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"false")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"stringValueOnBlur"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"boolean"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"false")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"decimalSeparator"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),",")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"thousandSeparator"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"moneyMask"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"\\$")))))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"README.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---readme-md-354dc95f1fe6e5bf35e3.js.map