var BTN_ADD_TO_CART = document.querySelector('div[class="wt-display-flex-xs wt-flex-direction-column-xs wt-flex-direction-row-md wt-flex-wrap wt-flex-direction-column-lg"]')
var BTN_ADD_TO_LIST = document.createElement('div');

BTN_ADD_TO_CART.style.marginBottom = "15px";

BTN_ADD_TO_LIST.innerHTML = '<button class="wt-btn wt-btn--filled wt-width-full" type="button"><div>                   Add to wishlist               </div></button>';
BTN_ADD_TO_CART.insertAdjacentElement('afterend', BTN_ADD_TO_LIST);

clickHandler = function(){
     var LISTING_IMAGE = document.querySelector('img[class="wt-max-width-full wt-horizontal-center wt-vertical-center carousel-image wt-rounded"]').src;
     var LISTING_ID = document.querySelector('input[name="listing_id"]').value;
     var LISTING_TITLE = document.getElementById('listing-title1').innerHTML.replace(/^\s+|\s+$/g,'');
     var LISTING_PRICE = document.querySelector('p[class="wt-text-title-03 wt-mr-xs-2"]').innerHTML.replace(/\s+/g, '');
     console.log(LISTING_IMAGE);
     console.log(LISTING_ID);
     console.log(LISTING_TITLE);
     console.log(LISTING_PRICE);
} 

BTN_ADD_TO_LIST.querySelector('button').addEventListener('click',clickHandler,true);

