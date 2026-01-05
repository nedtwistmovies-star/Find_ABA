import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import ChatView from "./views/ChatView";
import Profile from "./views/Profile";
import SandalsSuite from "./views/SandalsSuite";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatView />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sandals-suite" element={<SandalsSuite />} />
      </Routes>
    </Router>
  );
};

export default App;
