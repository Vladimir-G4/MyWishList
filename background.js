chrome.tabs.onUpdated.addListener(function(id, info, tab){
    if (tab.url.toLowerCase().indexOf("etsy.com/listing") > -1){
        chrome.pageAction.show(tab.id);
    }
});
