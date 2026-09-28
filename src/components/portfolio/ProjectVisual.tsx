import { ArrowDown, ArrowRight, Check, CircleDot, Radio } from "lucide-react";

export function ProjectVisual({ flow, label, variant = "horizontal" }: { flow: string[]; label?: string; variant?: "horizontal" | "vertical" }) {
  return (
    <div className={`project-visual ${variant === "vertical" ? "is-vertical" : ""}`} aria-label={`${label ?? "System"} architecture flow`}>
      <div className="visual-top"><span><CircleDot size={12} /> system.flow</span><span className="status"><Radio size={12} /> active</span></div>
      <div className="flow-track">
        {flow.map((item, index) => (
          <div className="flow-fragment" key={item}>
            <div className="flow-node"><span className="node-index">0{index + 1}</span><span>{item}</span>{index === flow.length - 1 && <Check size={14} />}</div>
            {index < flow.length - 1 && (variant === "vertical" ? <ArrowDown className="flow-arrow" size={16} /> : <ArrowRight className="flow-arrow" size={16} />)}
          </div>
        ))}
      </div>
      <div className="visual-log"><span>$</span> pipeline completed without errors<span className="cursor" /></div>
    </div>
  );
}
