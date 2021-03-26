var download_link = document.querySelector('div.wt-validation.wt-flex-basis-xs-auto.wt-flex-xs-1 button');
var plugin_name = download_link.href.split('.')[0];

var download_btn = document.createElement('p');
		download_button.innerHTML = '<a href="#">Add to wishlist</a>';
		download_button.className = "button special-plugin-button";
		download_button.dataset.name = plugin_name;
		download_link.parentElement.insertAdjacentElement('beforebegin',p);
	    p.querySelector('a').addEventListener('click',clickHandler,true);

      clickHandler = function(){
        console.log("I've been clicked.");
      }
