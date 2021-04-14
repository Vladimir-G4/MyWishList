chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request) {
        if (request.msg == "AddToWishlist completed task") {
            getResults(); 
        }
    }
});

function getResults(){
   console.log("Popup: Pushing item data to wishlist");
   chrome.storage.sync.get(["ITEM"], function(result) {
      console.log("Item data loaded succesfully");
      console.log(JSON.parse(result["ITEM"]));
      document.getElementById("Image").src = JSON.parse(result["ITEM"]).image;
      document.getElementById("Link").href = "https://www.etsy.com/listing/" + JSON.parse(result["ITEM"]).id;
      document.getElementById("Title").textContent = JSON.parse(result["ITEM"]).title;
      document.getElementById("Price").textContent = JSON.parse(result["ITEM"]).price;
   });
}
