import React, { useRef, useState } from "react";
import "./ImageGenerator.css";
import default_image from "../Assets/default_image.svg";

const ImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState("/");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const generateImage = async () => {
    const prompt = inputRef.current?.value?.trim();
    if (!prompt) return alert("Please enter a prompt!");

    setLoading(true);
    const randomSeed = Math.floor(Math.random() * 10000);
    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(
      prompt
    )}?width=1024&height=1024&model=flux&seed=${randomSeed}`;
    setImageUrl(url);
  };

  return (
    <div className="ai-image-generator">
      <div className="header">
        AI Image <span>Generator</span>
      </div>

      <div className="img-loading" style={{ position: "relative" }}>
        <div className="image">
          <img
            src={imageUrl === "/" ? default_image : imageUrl}
            alt="Generated"
            className="generated-img"
            onLoad={() => setLoading(false)}
            onError={() => {
              setLoading(false);
              alert("Failed to load image. Try again!");
            }}
          />
        </div>

        {loading && (
          <div className="loading">
            <div className="loading-text">Generating...</div>
            <div className="loading-bar-full"></div>
          </div>
        )}
      </div>

      <div className="search-box">
        <input
          type="text"
          ref={inputRef}
          className="search-input"
          placeholder="Describe what you want to see"
        />
        <div className="generate-btn" onClick={generateImage}>
          Generate
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
