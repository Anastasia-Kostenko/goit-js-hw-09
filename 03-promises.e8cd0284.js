!function(){function e(e,t){return new Promise((function(n,o){setTimeout((function(){Math.random()>.3?n("✅ Fulfilled promise ".concat(e," in ").concat(t,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(t,"ms"))}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();var n=t.currentTarget.elements,o=n.delay,c=(n.stop,n.amout);setTimeout((function(){for(var t=1;t<=+c.value;t++)e(position,o)}),+o.value)}))}();
//# sourceMappingURL=03-promises.e8cd0284.js.map
