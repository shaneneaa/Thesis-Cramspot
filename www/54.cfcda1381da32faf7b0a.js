(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{Tgyx:function(t,n,e){"use strict";e.r(n),e.d(n,"IonRippleEffect",function(){return a});var i=e("B5Ai"),a=function(){function t(){}return t.prototype.addRipple=function(t,n){return i.a(this,void 0,void 0,function(){return i.c(this,function(e){return this.config.getBoolean("animated",!0)?[2,this.prepareRipple(t,n)]:[2,function(){}]})})},t.prototype.prepareRipple=function(t,n){var e=this;return new Promise(function(i){e.queue.read(function(){var a=e.el.getBoundingClientRect(),c=a.width,f=a.height,s=Math.sqrt(c*c+f*f)+o,l=Math.max(f,c),u=t-a.left,m=n-a.top,p=Math.floor(l*r),d=s/p,b=u-.5*p,w=m-.5*p,g=.5*c-u,y=.5*f-m;e.queue.write(function(){var t=e.win.document.createElement("div");t.classList.add("ripple-effect");var n=t.style;n.top=w+"px",n.left=b+"px",n.width=n.height=p+"px",n.setProperty("--final-scale",""+d),n.setProperty("--translate-end",g+"px, "+y+"px"),(e.el.shadowRoot||e.el).appendChild(t),setTimeout(function(){i(function(){!function(t){t.classList.add("fade-out"),setTimeout(function(){t.remove()},200)}(t)})},325)})})})},t.prototype.hostData=function(){return{role:"presentation"}},Object.defineProperty(t,"is",{get:function(){return"ion-ripple-effect"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{addRipple:{method:!0},config:{context:"config"},el:{elementRef:!0},queue:{context:"queue"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0}.ripple-effect,:host{position:absolute;contain:strict}.ripple-effect{border-radius:50%;background-color:currentColor;color:inherit;opacity:0;-webkit-animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;will-change:transform,opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1));-webkit-animation:fadeOutAnimation .15s forwards;animation:fadeOutAnimation .15s forwards}@-webkit-keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}@keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}@-webkit-keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}@keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}@-webkit-keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}@keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}"},enumerable:!0,configurable:!0}),t}(),o=10,r=.5}}]);