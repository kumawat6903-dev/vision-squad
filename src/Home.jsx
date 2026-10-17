
import "./Home.css";

const tips = [
  {
    icon: "⏱️",
    title: "20-20-20 Rule",
    desc: "Every 20 minutes, look at something 20 feet away for 20 seconds.",
  },
  {
    icon: "👁️",
    title: "Blink Regularly",
    desc: "Blink normally during screen use to help keep your eyes comfortable.",
  },
  {
    icon: "🩺",
    title: "Regular Eye Checkups",
    desc: "Get your eyes checked regularly by a qualified eye-care professional.",
  },
];

export default function Home() {
  return (
    <main className="vs-home">
      <section className="vision-hero">
        <div className="vision-copy">
          <span className="vision-badge">
            <i /> VISION SQUAD
          </span>

          <h1>
            Discover the
            <br />
            Science of <span>Vision.</span>
          </h1>

          <p>
            Explore the human eye, learn ophthalmic concepts
            and discover the technology behind better vision.
          </p>

          <a href="#eye-care" className="vision-button">
            Explore Eye Care <span>↗</span>
          </a>

          <div className="vision-caption">
            <span>01</span> LEARN <b>—</b> EXPLORE <b>—</b> DISCOVER
          </div>
        </div>

        <div className="vision-stage">
          <div className="stage-grid" />

          <div className="energy-ring ring-a" />
          <div className="energy-ring ring-b" />
          <div className="energy-ring ring-c" />

          <div className="orbit-dot dot-a" />
          <div className="orbit-dot dot-b" />
          <div className="orbit-dot dot-c" />

          <div className="eye-model">
            <svg
              className="eye-svg"
              viewBox="0 0 320 210"
              role="img"
              aria-label="Animated futuristic illustration of a human eye"
            >
              <defs>
                <linearGradient id="sclera" x1="0" y1="0" x2="0.8" y2="1">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="65%" stopColor="#d9faff" />
                  <stop offset="100%" stopColor="#75c9df" />
                </linearGradient>

                <radialGradient id="irisColor">
                  <stop offset="0%" stopColor="#06172c" />
                  <stop offset="28%" stopColor="#087da6" />
                  <stop offset="58%" stopColor="#34e9e2" />
                  <stop offset="78%" stopColor="#08719e" />
                  <stop offset="100%" stopColor="#09264d" />
                </radialGradient>

                <filter id="eyeGlow">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <clipPath id="eyeClip">
                  <path d="M22 105 Q160 -8 298 105 Q160 218 22 105Z" />
                </clipPath>
              </defs>

              <path
                d="M22 105 Q160 -8 298 105 Q160 218 22 105Z"
                fill="url(#sclera)"
                stroke="#7dfaff"
                strokeWidth="2"
                filter="url(#eyeGlow)"
              />

              <g clipPath="url(#eyeClip)">
                <circle cx="160" cy="105" r="61" fill="url(#irisColor)" />

                {Array.from({ length: 32 }, (_, i) => (
                  <line
                    key={i}
                    x1="160"
                    y1="52"
                    x2="160"
                    y2="69"
                    stroke="#a0ffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    transform={`rotate(${i * 11.25} 160 105)`}
                    opacity=".8"
                  />
                ))}

                <circle
                  cx="160"
                  cy="105"
                  r="39"
                  fill="none"
                  stroke="#7ffbff"
                  strokeWidth="1.5"
                  opacity=".7"
                />

                <circle
                  cx="160"
                  cy="105"
                  r="27"
                  fill="#020b19"
                  stroke="#5dfbff"
                  strokeWidth="2"
                />

                <ellipse
                  cx="147"
                  cy="91"
                  rx="10"
                  ry="7"
                  fill="white"
                  opacity=".95"
                />

                <circle cx="175" cy="117" r="4" fill="#a5ffff" />
              </g>

              <path
                d="M22 105 Q160 -8 298 105"
                fill="none"
                stroke="#a4ffff"
                strokeWidth="3"
              />
            </svg>

            <div className="eye-scan-line" />
          </div>

          <div className="vision-chip chip-top">
            <span className="chip-icon">✦</span>
            <span>
              <small>OPTICAL SYSTEM</small>
              <strong>Vision Explorer</strong>
            </span>
          </div>

          <div className="vision-chip chip-bottom">
            <span className="pulse-dot" />
            <span>
              <small>DISCOVER</small>
              <strong>The Human Eye</strong>
            </span>
          </div>
        </div>
      </section>

      <section className="eye-care" id="eye-care">
        <div className="care-heading">
          <span>HEALTHY EYES, BETTER VISION</span>
          <h2>
            Eye-Care <b>Essentials</b>
          </h2>
          <p>Three simple habits for everyday eye care.</p>
        </div>

        <div className="tips-grid">
          {tips.map((tip, index) => (
            <article className="tip-card" key={tip.title}>
              <div className="tip-top">
                <span className="tip-icon">{tip.icon}</span>
                <span className="tip-number">0{index + 1}</span>
              </div>
              <h3>{tip.title}</h3>
              <p>{tip.desc}</p>
              <div className="tip-line" />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
