function setPlaybackRate(rate) {
     const video = document.querySelector('video');
     if (video) video.playbackRate = rate;
   }
   
   function skipAd() {
     const skipBtn = document.querySelector('.ytp-ad-skip-button');
     if (skipBtn) skipBtn.click();
   }
   
   function muteAd() {
     const adIndicator = document.querySelector('.ad-showing');
     const video = document.querySelector('video');
     if (adIndicator && video) video.muted = true;
     else if (video) video.muted = false;
   }
   
   function bookmarkCurrentTime() {
     const video = document.querySelector('video');
     if (video) {
       const time = video.currentTime;
       chrome.storage.local.get({ bookmarks: [] }, (result) => {
         const bookmarks = result.bookmarks;
         bookmarks.push(time);
         chrome.storage.local.set({ bookmarks });
       });
     }
   }
   
   setInterval(() => {
     skipAd();
     muteAd();
   }, 1000);
   
   chrome.runtime.onMessage.addListener((msg) => {
     if (msg.type === "setSpeed") setPlaybackRate(msg.value);
     if (msg.type === "bookmark") bookmarkCurrentTime();
   });
   