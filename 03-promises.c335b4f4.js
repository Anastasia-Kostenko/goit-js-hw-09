function e(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n(`✅ Fulfilled promise ${e} in ${t}ms`):o(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const{delay:n,stop:o,amout:r}=t.currentTarget.elements;setTimeout((()=>{for(let t=1;t<=+r.value;t++)e(position,n)}),+n.value)}));
//# sourceMappingURL=03-promises.c335b4f4.js.map
