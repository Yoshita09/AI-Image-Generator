import React, { useRef, useState } from "react";
import "./ImageGenerator.css";
import default_image from "../Assets/default_image.svg";
import { InferenceClient } from "@huggingface/inference";

const ImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState("/");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const imageGenerator = async () => {
    const prompt = inputRef.current?.value?.trim();
    if (!prompt) return;

    setLoading(true);
    try {
      // Initialize Hugging Face client
      const client = new InferenceClient(process.env.REACT_APP_HF_TOKEN);

      // Generate image using text-to-image model
      const imageBlob = await client.textToImage({
        provider: "auto",
        model: "black-forest-labs/FLUX.1-Krea-dev",
        inputs: prompt,
        parameters: { num_inference_steps: 5 },
      });

      // Convert Blob to URL
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImageUrl(imageObjectURL);
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Failed to generate image. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-image-generator">
      <div className="header">
        AI Image <span>Generator</span>
      </div>

      <div className="img-loading">
        <div className="image">
          <img src={imageUrl === "/" ? default_image : imageUrl} alt="" />
        </div>

        <div className="loading">
          <div className={loading ? "loading-bar-full" : "loading-bar"}>
            <div className={loading ? "loading-text" : "display-none"}>
              Loading...
            </div>
          </div>
        </div>
      </div>

      <div className="search-box">
        <input
          type="text"
          ref={inputRef}
          className="search-input"
          placeholder="Describe what you want to see"
        />
        <div className="generate-btn" onClick={imageGenerator}>
          Generate
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
