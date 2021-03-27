var BTN_ADD_TO_CART = document.querySelector('div[class="wt-display-flex-xs wt-flex-direction-column-xs wt-flex-direction-row-md wt-flex-wrap wt-flex-direction-column-lg"]')
var BTN_ADD_TO_LIST = document.createElement('div');

BTN_ADD_TO_CART.style.marginBottom = "20px";

BTN_ADD_TO_LIST.innerHTML = '<button class="wt-btn wt-btn--filled wt-width-full" type="button"><div>                   Add to wishlist               </div></button>';
BTN_ADD_TO_CART.insertAdjacentElement('afterend', BTN_ADD_TO_LIST);

clickHandler = function(){
     console.log("I've been clicked.");
} 

BTN_ADD_TO_LIST.querySelector('button').addEventListener('click',clickHandler,true);
