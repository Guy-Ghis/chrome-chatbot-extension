# chrome-chatbot-extension

This Chrome extension includes a powerful feature that allows the chatbot to read the content of the web page you're currently on. By integrating Chrome's content scripts and messaging APIs, the chatbot can analyze the text of the active tab and respond more contextually.

---
## ✨ Features

- 🔌 Client-side Chrome extension
- 💬 Real-time chat interface
- 🕵️‍♂️ Page Content Awareness
- 🧾 Context based and more relevant replies
- 🎨 TailwindCSS styled UI
- ⚙️ Configurable API Key and Endpoint
- 🌓 Light/Dark mode support
- ⚡ Fast and lightweight

---
## 📦 Tech Stack

- **JavaScript** – Client-side logic
- **HTML** – Structure of the popup
- **TailwindCSS** – Styling and theming
- **Yarn** – Package manager for build dependencies

---
## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Guy-Ghis/chrome-chatbot-extension.git
cd chrome-chatbot-extension
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Build TailwindCSS

```bash
npx @tailwindcss/cli -i ./style.css -o ./output.css --watch 
```

### 4. Load Extension in Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select the project directory

---
## ⚙️ Configuration

Set your API Key and Endpoint in the extension's Settings tab.
> Stored using chrome.storage.local for persistence.

The AI will respond using the OpenAI-compatible API you configured.

---
## 🛡️ License
MIT License. Feel free to use and modify.