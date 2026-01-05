import React, { useState } from "react";
import { sendToGemini } from "../services/geminiService";

const ChatView: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    const res = await sendToGemini(prompt);
    setResponse(res.text);
  };

  return (
    <div>
      <h2>AI City Guide</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask about Aba, logistics, artisans..."
      />
      <button onClick={handleSend}>Send</button>
      <p>{response}</p>
    </div>
  );
};

export default ChatView;
