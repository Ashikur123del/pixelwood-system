"use client";
import React, { useState } from "react";

const SliderImgPage = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const BACKEND_BASE_URL = "http://localhost:5000";

  // File preview controller
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setMessage({ type: "", text: "" });
    }
  };

  // Upload request tracking submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage({ type: "error", text: "Prothome ekta image select korun!" });
      return;
    }

    setLoading(true);
    setMessage({ type: "", text: "" });

    const formData = new FormData();
    formData.append("image", file); // Key must match backend upload.single('image')

    try {
      const response = await fetch(`${BACKEND_BASE_URL}/api/slider-images`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setMessage({ type: "success", text: "Image successfully upload hoyeche!" });
        setFile(null);
        setPreview(null);
      } else {
        setMessage({ type: "error", text: data.error || "Upload failed." });
      }
    } catch (error) {
      console.error("Upload process crash:", error);
      setMessage({ type: "error", text: "Backend server validation complete hoyni!" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-xl shadow-lg text-slate-100">
      <h2 className="text-xl font-semibold mb-4 text-center tracking-wide text-indigo-400">
        Upload New Slider Image
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-700 hover:border-indigo-500 rounded-lg p-4 transition duration-200 cursor-pointer relative bg-slate-950/50">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          />
          
          {preview ? (
            <div className="w-full h-40 relative rounded-md overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={preview}
                alt="Upload Preview"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="text-center space-y-2 py-4">
              <svg
                className="mx-auto h-12 w-12 text-slate-500"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20a4 4 0 004 4h16m12-34.9V14m0 0v14m0-14H26m12 14V12a4 4 0 00-4-4H26"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-sm text-slate-400">Click to Select Image Here</p>
              <p className="text-xs text-slate-500">PNG, JPG up to 5MB</p>
            </div>
          )}
        </div>

        {message.text && (
          <div
            className={`text-center p-2 rounded text-sm font-medium ${
              message.type === "success"
                ? "bg-emerald-950/80 text-emerald-400 border border-emerald-900"
                : "bg-rose-950/80 text-rose-400 border border-rose-900"
            }`}
          >
            {message.text}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2.5 rounded-md text-white font-medium shadow-md transition duration-200 ${
            loading
              ? "bg-slate-700 cursor-not-allowed"
              : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500"
          }`}
        >
          {loading ? "Uploading..." : "Add to Logo Slider"}
        </button>
      </form>
    </div>
  );
};

export default SliderImgPage;