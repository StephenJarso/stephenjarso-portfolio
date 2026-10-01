import { ArrowDown, ArrowRight, Check } from "lucide-react";

export function ProjectVisual({ flow, label, imageSrc, imageAlt, variant = "horizontal" }: { flow: string[]; label?: string; imageSrc?: string; imageAlt?: string; variant?: "horizontal" | "vertical" }) {
  return (
    <div className={`project-visual ${variant === "vertical" ? "is-vertical" : ""}`} aria-label={`${label ?? "System"} architecture flow`}>
      {imageSrc && <div className="project-artwork"><img src={imageSrc} alt={imageAlt ?? ""} loading="lazy" width={1408} height={912} /></div>}
      <div className="flow-track">
        {flow.map((item, index) => (
          <div className="flow-fragment" key={item}>
            <div className="flow-node"><span className="node-index">0{index + 1}</span><span>{item}</span>{index === flow.length - 1 && <Check size={14} />}</div>
            {index < flow.length - 1 && (variant === "vertical" ? <ArrowDown className="flow-arrow" size={16} /> : <ArrowRight className="flow-arrow" size={16} />)}
          </div>
        ))}
      </div>
    </div>
  );
}
