import { Sparkles } from "lucide-react";
import { Logo } from "./Logo";

/** Schéma décoratif : les outils d'entrée passent par l'IA et alimentent les outils de sortie. */
const inputs = [
  { name: "Gmail", logo: "gmail", y: 40 },
  { name: "Outlook", logo: "outlook", y: 120 },
  { name: "Google Drive", logo: "google-drive", y: 200 },
];
const outputs = [
  { name: "Sage", logo: "sage", y: 40 },
  { name: "HubSpot", logo: "hubspot", y: 120 },
  { name: "Google Sheets", logo: "google-sheets", y: 200 },
];

const W = 600;
const H = 240;
const inPath = (y: number) => `M 70 ${y} C 180 ${y}, 180 120, 262 120`;
const outPath = (y: number) => `M 338 120 C 420 120, 420 ${y}, 530 ${y}`;

function Tile({ name, logo, x, y }: { name: string; logo: string; x: number; y: number }) {
  return (
    <div
      className="absolute grid size-[clamp(36px,8vw,52px)] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[14px] bg-white shadow-[0_10px_30px_-10px_rgb(0_0_0/0.5)] ring-1 ring-white/40"
      style={{ left: `${(x / W) * 100}%`, top: `${(y / H) * 100}%` }}
    >
      <Logo name={name} logo={logo} size={26} className="size-[55%]!" />
    </div>
  );
}

export function HeroFlow() {
  const paths = [...inputs.map((t) => inPath(t.y)), ...outputs.map((t) => outPath(t.y))];
  return (
    <div aria-hidden="true" className="relative aspect-[600/240] w-full max-w-[560px] select-none">
      <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 size-full overflow-visible" fill="none">
        <defs>
          <linearGradient id="hf-wire" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={W} y2="0">
            <stop offset="0" stopColor="#fff" stopOpacity="0.15" />
            <stop offset="0.5" stopColor="#F2858A" stopOpacity="0.8" />
            <stop offset="1" stopColor="#fff" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        {paths.map((d, i) => (
          <g key={d}>
            <path d={d} stroke="url(#hf-wire)" strokeWidth="1.5" />
            <path d={d} stroke="#fff" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="2 10" className="hf-dash" />
            <circle r="3.5" fill="#fff" className="hf-pulse">
              <animateMotion dur="2.6s" repeatCount="indefinite" begin={`-${(i % 3) * 0.55 + (i > 2 ? 1.3 : 0)}s`} path={d} />
            </circle>
          </g>
        ))}
      </svg>

      {inputs.map((t) => (
        <Tile key={t.name} {...t} x={40} />
      ))}
      {outputs.map((t) => (
        <Tile key={t.name} {...t} x={560} />
      ))}

      <div
        className="absolute grid size-[clamp(52px,12vw,76px)] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent text-white shadow-[0_0_0_8px_rgb(217_54_62/0.18),0_0_60px_10px_rgb(217_54_62/0.45)]"
        style={{ left: "50%", top: "50%" }}
      >
        <span className="hf-ring absolute inset-0 rounded-full border border-accent" />
        <Sparkles className="size-[42%]" strokeWidth={1.75} />
      </div>
    </div>
  );
}
