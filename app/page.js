'use client';

import { useState, useRef } from 'react';

export default function Home() {
  const [imageSrc, setImageSrc] = useState(null);
  const [pixelationLevel, setPixelationLevel] = useState(10);
  const canvasRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
        pixelate(e.target.result, pixelationLevel);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePixelationChange = (level) => {
    setPixelationLevel(level);
    if (imageSrc) {
      pixelate(imageSrc, level);
    }
  };

  const pixelate = (src, level) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      const maxWidth = window.innerWidth;
      const scaleFactor = maxWidth / img.width;
      const w = (img.width / level) * scaleFactor;
      const h = (img.height / level) * scaleFactor;

      // Clear the previous image
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Resize canvas based on image dimensions
      canvas.width = maxWidth;
      canvas.height = img.height * scaleFactor;

      // Draw the image in a smaller size (pixelated effect)
      ctx.drawImage(img, 0, 0, w, h);

      // Scale it back up to blur it
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
    };
    img.src = src;
  };

  return (
    <main className="grid grid-cols-3 gap-5 min-h-screen items-center justify-between p-24">
      <input className="col-start-1 row-start-1" type="file" onChange={handleImageChange} accept="image/*" />
      <div className="col-start-2 row-start-1">
        <label htmlFor="pixelation">Pixelation Level:</label>
        <input
          type="range"
          id="pixelation"
          min="1"
          max="100"
          value={pixelationLevel}
          onChange={(e) => handlePixelationChange(parseInt(e.target.value, 10))}
        />
      </div>
      <canvas ref={canvasRef} className="col-start-1 col-span-full row-start-2 w-full"></canvas>
    </main>
  );
}
