# Advanced YouTube Speed Tweaker

A lightweight Chrome extension to enhance your YouTube experience with custom playback speed and automatic ad skipping.

---

## 🚀 Features

- 🎬 **Custom Video Speed**  
  Adjust YouTube video playback speed from 0.25x to 4.0x — either from presets or enter a custom value.

- ⏩ **Auto Skip Ads**  
  Automatically skips skippable YouTube ads as soon as the "Skip" button becomes available.

---

## 🧪 How to Use

1. Open `chrome://extensions/`
2. Enable **Developer Mode** (top right)
3. Click **Load unpacked** and select the `yt-extension` folder
4. Open YouTube and click the extension icon
5. Use the popup to:
   - Select or enter a **custom speed**
   - Toggle **auto ad-skip**

---

## 📁 Folder Structure

```

yt-extension/
├── icons/
│   └── icon.png
├── background.js
├── content.js
├── popup.html
├── popup.css
├── popup.js
└── manifest.json

```

---

## ⚠️ Known Limitations

- Does **not support mobile devices**
- Only skips **skippable ads**, not embedded sponsorships or unskippable ones
- Bookmark feature is not yet implemented

---

## 🔒 Permissions

- `activeTab`: Access the current YouTube tab
- `scripting`: Inject JavaScript into YouTube
- `storage`: Save playback speed preferences
- `*://www.youtube.com/*`: Match all YouTube pages

---

## 🧠 Author

**Nibir Mahmud** — Game developer, freelancer, and student  
Feel free to customize, improve, or distribute this extension!
