# 🎨 AI Image Generator

An AI-powered image generation web app built with **React.js** that allows users to create stunning visuals from text prompts using the **Runware API**. This project demonstrates text-to-image generation with a simple yet modern UI.

---

## 🔗 Live Demo

🌐 **Try it here:** [https://ai-image-generator.vercel.app](https://ai-image-generator.vercel.app)

---

## 🚀 Features

- 🧠 Generate AI images instantly from any text prompt  
- ⚡ Smooth image rendering using Runware API  
- 🖼️ Displays default image before generation  
- 🔐 Secure API key via `.env` environment file  
- 💻 Built with **React.js** and clean component structure  

---

## 🛠️ Tech Stack

- **Frontend:** React.js  
- **Styling:** CSS  
- **AI Engine:** Runware Text-to-Image API  
- **Deployment:** Vercel  

---

## 🧩 Folder Structure

```
ai_image_generator/
├── public/
├── src/
│ ├── Assets/
│ │ └── default_image.svg
│ ├── Components/
│ │ └── ImageGenerator.jsx
│ ├── App.js
│ └── index.js
├── .env
├── .gitignore
├── package.json
└── README.md
```
---

## ⚙️ Setup and Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/ai_image_generator.git
cd ai_image_generator
```
2️⃣ Install Dependencies
```
npm install
```
3️⃣ Create a .env File

In the project root, create a file named .env and add your Runware API key:
```
REACT_APP_RUNWARE_API_KEY=your_runware_api_key_here
```
Make sure .env is listed in your .gitignore so it isn’t pushed to GitHub.

---

## 🧠 How It Works

- User enters a text prompt (e.g., "a futuristic city at sunset")
- React sends the prompt to the Runware API
- The API returns a generated image URL
-The image is displayed in the app instantly

---

## 🖼️ UI Preview

The app includes:

- A search bar for prompts
- A loading state during generation
- A default placeholder image before generation

---

## 🧑‍💻 Run the App
```
npm start
```
Then open:
```
http://localhost:3000
```

---


## 🔒 Environment Variables
| Variable                    | Description                                             |
| --------------------------- | ------------------------------------------------------- |
| `REACT_APP_RUNWARE_API_KEY` | Your personal Runware API key used for image generation |

---

## 👩‍💻 Made by

**Yoshita Singhal**

- GitHub: [@yoshita09](https://github.com/yoshita09)
- LinkedIn: [Yoshita Singhal](https://linkedin.com/in/yoshita09)

---


