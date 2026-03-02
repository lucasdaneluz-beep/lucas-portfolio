import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 hover:text-cyan-300 mb-8"
    >
      ← Back to Portfolio
    </button>
  );
};

export default BackButton;