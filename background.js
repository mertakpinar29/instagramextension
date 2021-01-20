chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId , current_tab_info =>{
        if(/^https:\/\/www\.instagram/.test(current_tab_info.url)){
            //Whenever the user is on instagram.com
            chrome.tabs.insertCSS(null, {file:'./mystyles.css'});
            chrome.tabs.insertCSS(null, {file:'./skeleton.css'});
            chrome.tabs.executeScript(null,{file: './foreground.js'});
        }
    });
});

