import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  status: string;
};

const CaseStudyCard = ({ id, slug, title, description, tags, status }: CaseStudy) => {
  const navigate = useNavigate();
  const isClickable = status === "live";

  return (
    <button
      key={id}
      type="button"
      onClick={() => isClickable && navigate(`/case-studies/${slug}`)}
      className="w-full text-left rounded-2xl p-5 flex items-center justify-between gap-4 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      style={{
        background: status === "live" ? "hsl(210 28% 11%)" : "hsl(210 28% 8%)",
        border: `1px solid ${status === "live" ? "hsl(210 20% 20%)" : "hsl(210 20% 13%)"}`,
        opacity: status === "wip" ? 0.45 : 1,
        cursor: isClickable ? "pointer" : "default",
      }}
    >
      <div className="flex items-start gap-4">
        <span
          className="text-xs font-black tabular-nums mt-0.5 flex-shrink-0"
          style={{ color: status === "live" ? "hsl(174 80% 60%)" : "hsl(210 15% 35%)" }}
        >
          {id}
        </span>

        <div>
          <p className="text-sm font-bold mb-1" style={{ color: "hsl(210 40% 92%)" }}>
            {title}
          </p>

          <p className="text-xs mb-2.5" style={{ color: "hsl(210 15% 52%)" }}>
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                style={{
                  background: "hsl(174 80% 60% / 0.1)",
                  color: "hsl(174 80% 60%)",
                  border: "1px solid hsl(174 80% 60% / 0.2)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {status === "live" && (
        <ArrowRight size={16} className="flex-shrink-0" style={{ color: "hsl(174 80% 60%)" }} />
      )}
    </button>
  );
};

export default CaseStudyCard;