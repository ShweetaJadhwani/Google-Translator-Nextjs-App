"use client";

import { useState } from "react";
import axios from "axios";

export default function TranslatePage() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("es"); // Default: Spanish

  // Function to call Google Translate API
  const translateText = async () => {
    if (!text.trim()) return;
    setLoading(true);

    try {
      const response = await axios.post("https://translate.googleapis.com/translate_a/single", null, {
        params: {
          client: "gtx",
          sl: "auto",
          tl: language,
          dt: "t",
          q: text,
        },
      });

      setTranslatedText(response.data[0][0][0]);
    } catch (error) {
      console.error("Translation Error:", error);
      setTranslatedText("Translation failed!");
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🌍 Google Translate Clone</h1>

      <div style={styles.card}>
        {/* Input TextArea */}
        <textarea
          style={styles.textarea}
          placeholder="Enter text to translate..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* Language Dropdown */}
        <select style={styles.select} value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="zh-CN">Chinese</option>
          <option value="hi">Hindi</option>
        </select>

        {/* Translate Button */}
        <button style={styles.button} onClick={translateText} disabled={loading}>
          {loading ? "Translating..." : "Translate"}
        </button>

        {/* Translated Output */}
        <textarea style={styles.output} value={translatedText} readOnly placeholder="Translation will appear here..." />
      </div>
    </div>
  );
}

// Inline CSS Styling (Facebook-Themed: Blue & White)
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    background: "#1877F2",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  heading: {
    color: "white",
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
    width: "100%",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "1px solid #ddd",
    resize: "none",
  },
  select: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "1px solid #ddd",
    background: "#f5f5f5",
    cursor: "pointer",
  },
  button: {
    padding: "12px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "white",
    background: "#1877F2",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "0.3s",
  },
  output: {
    width: "100%",
    height: "100px",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "1px solid #ddd",
    resize: "none",
    background: "#f9f9f9",
  },
};

