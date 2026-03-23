import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-opacity hover:opacity-75 mb-8"
      style={{
        background: "hsl(210 28% 11%)",
        border: "1px solid hsl(210 20% 22%)",
        color: "hsl(210 20% 65%)",
      }}
    >
      <ArrowLeft size={13} />
      All case studies
    </button>
  );
};

export default BackButton;
