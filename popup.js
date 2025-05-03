document.getElementById("applySpeed").onclick = () => {
     const customSpeed = parseFloat(document.getElementById("customSpeed").value);
     const speed = customSpeed || parseFloat(document.getElementById("speedSelect").value);
     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
       chrome.tabs.sendMessage(tabs[0].id, { type: "setSpeed", value: speed });
     });
   };
   
   document.getElementById("bookmarkBtn").onclick = () => {
     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
       chrome.tabs.sendMessage(tabs[0].id, { type: "bookmark" });
     });
   };
   