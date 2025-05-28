# chrome-chatbot-extension

A sleek, AI-powered chatbot built as a Chrome extension. Communicate with an OpenAI-compatible API directly from your browser via a popup interface. Built using **JavaScript**, **HTML**, **TailwindCSS**, and **Yarn**.

---
## ✨ Features

- 🔌 Client-side Chrome extension
- 💬 Real-time chat interface
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