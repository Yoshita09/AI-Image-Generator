# 🎨 AI Image Generator

An AI-powered image generation web app built with **React.js** that allows users to create stunning images from text prompts using the **Runware API**.  
This project demonstrates text-to-image generation with a clean, responsive UI.

---

## 🚀 Features

- 🧠 Generate AI images instantly from any text prompt  
- ⚡ Fast and seamless image rendering using Runware API  
- 🖼️ Default image display before generation  
- 📁 Environment variable support for API key security  
- 💻 Built using **React.js** and modern JavaScript (ES6)

---

## 🛠️ Tech Stack

- **Frontend:** React.js  
- **Styling:** CSS  
- **AI Model:** Runware Text-to-Image API  

---

## 🧩 Folder Structure

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

