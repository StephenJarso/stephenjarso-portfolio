import { useState } from "react";
import { ArrowUpRight, Check, Code2, Container, Layers3, LockKeyhole, Server, ShieldCheck, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { journey } from "@/data/portfolio";

const icons = [Smartphone, Layers3, Server, Code2, Container, ShieldCheck];
const levelNames = ["First interface", "Connected systems", "Service core", "Go workshop", "Delivery network", "Security perimeter"];

export function JourneyMap() {
  const [active, setActive] = useState(journey.length - 1);
  const [title, description] = journey[active];
  const Icon = icons[active];

  return (
    <div className="colony-map">
      <div className="colony-map-head">
        <div><p className="command-label"><span /> Expedition log</p><h3>Six levels. One expanding system.</h3></div>
        <p className="command-readout">PROGRESS {String(active + 1).padStart(2, "0")}/{String(journey.length).padStart(2, "0")}<br />STATUS: BUILDING</p>
      </div>
      <div className="level-track" role="tablist" aria-label="Stephen's engineering journey">
        {journey.map(([itemTitle], index) => {
          const LevelIcon = icons[index];
          const selected = active === index;
          return (
            <Button key={itemTitle} type="button" variant="ghost" role="tab" aria-selected={selected} className={`level-node ${selected ? "is-active" : ""}`} onClick={() => setActive(index)}>
              <span className="level-number">LVL {String(index + 1).padStart(2, "0")}</span>
              <LevelIcon aria-hidden />
              <span>{itemTitle}</span>
              {index <= active && <Check className="level-check" aria-hidden />}
            </Button>
          );
        })}
      </div>
      <div className="level-detail" role="tabpanel">
        <div className="level-emblem"><Icon aria-hidden /><span>ACTIVE DISTRICT</span></div>
        <div><p className="eyebrow">{levelNames[active]}</p><h3>{title}</h3><p>{description}</p></div>
        <a href="#selected-work" className="text-link">Explore the builds <ArrowUpRight size={16} /></a>
      </div>
    </div>
  );
}