var BTN_ADD_TO_CART = document.querySelector('div[class="wt-display-flex-xs wt-flex-direction-column-xs wt-flex-direction-row-md wt-flex-wrap wt-flex-direction-column-lg"]')
var BTN_ADD_TO_LIST = document.createElement('div');

BTN_ADD_TO_CART.style.marginBottom = "12px";

BTN_ADD_TO_LIST.innerHTML = '<button class="wt-btn wt-btn--filled wt-width-full" type="button" id="wishlist"><div>                   Add to wishlist               </div></button>';
BTN_ADD_TO_CART.insertAdjacentElement('afterend', BTN_ADD_TO_LIST);

const item = {
  image: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png",
  id: "000000000",
  title: "item_title",
  price: "$0.0",
  printItem: function() {
    console.log(`Item Name: ${this.title}\nItem ID: ${this.id}\nItem Price: ${this.price}\nItem Image Link: ${this.image}`);
  }
};

clickHandler = function(){
     var LISTING_IMAGE = document.querySelector('img[class="wt-max-width-full wt-horizontal-center wt-vertical-center carousel-image wt-rounded"]').src;
     var LISTING_ID = document.querySelector('input[name="listing_id"]').value;
     var LISTING_TITLE = document.querySelector('h1[class="wt-text-body-03 wt-line-height-tight wt-break-word wt-mb-xs-1"]').innerHTML.replace(/^\s+|\s+$/g,'');
     var LISTING_PRICE = document.querySelector('p[class="wt-text-title-03 wt-mr-xs-2"]').innerHTML.replace(/\s+/g, '');
     const NEW_ITEM = Object.create(item);
     NEW_ITEM.image = LISTING_IMAGE;
     NEW_ITEM.id = LISTING_ID;
     NEW_ITEM.title = LISTING_TITLE;
     NEW_ITEM.price = LISTING_PRICE;
     chrome.storage.sync.set({"ITEM": JSON.stringify(NEW_ITEM)}, function() {
        console.log('Item information recorded into local storage.');
     });
     ping();
     
} 

BTN_ADD_TO_LIST.querySelector('button').addEventListener('click',clickHandler,true);

function ping() {
chrome.runtime.sendMessage({ msg: "AddToWishlist completed task"}, (response) => {
    if(chrome.runtime.lastError) {
      setTimeout(ping, 1000);
    } else {
      console.log("Message sent from AddToWishlist");
    }
});}

