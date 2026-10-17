
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import StudyHub from "./StudyHub";
import Instruments from "./Instruments";
import PapersHub from "./PapersHub";
import VisionWatch from "./VisionWatch";
import "./App.css";


const subjects = [
  {
    icon: "👁️",
    title: "Anatomy of Eye",
    desc: "Learn the structure and layers of the human eye.",
    tag: "Anatomy",
    color: "cyan",
  },
  {
    icon: "🔬",
    title: "Ophthalmic Instruments",
    desc: "Understand NCT, OCT, retinoscopy and more.",
    tag: "Practical",
    color: "purple",
  },
  {
    icon: "📚",
    title: "Study Notes",
    desc: "Simple, exam-oriented notes for D.Opt students.",
    tag: "Study",
    color: "blue",
  },
  {
    icon: "🧬",
    title: "Ocular Diseases",
    desc: "Explore common eye diseases and their signs.",
    tag: "Clinical",
    color: "pink",
  },
  {
    icon: "📝",
    title: "Exam Preparation",
    desc: "Revise important topics and exam questions.",
    tag: "Revision",
    color: "orange",
  },
  {
    icon: "💙",
    title: "Eye Care Awareness",
    desc: "Learn healthy habits and preventive eye care.",
    tag: "Awareness",
    color: "green",
  },
];

function EyeLogo() {
  return (
    <div className="eye-logo" aria-label="Vision Squad eye logo">
      <svg viewBox="0 0 100 70" aria-hidden="true">
        <path
          className="eye-outline"
          d="M5 35 Q50 -5 95 35 Q50 75 5 35Z"
        />
        <circle className="eye-iris" cx="50" cy="35" r="19" />
        <circle className="eye-pupil" cx="50" cy="35" r="9" />
        <circle className="eye-shine" cx="56" cy="28" r="4" />
      </svg>
    </div>
  );
}

// function Home() {
//   const [search, setSearch] = useState("");
//   const [activeFilter, setActiveFilter] = useState("All");

//   const filters = [
//     "All",
//     "Anatomy",
//     "Practical",
//     "Study",
//     "Clinical",
//     "Revision",
//     "Awareness",
//   ];

//   const filteredSubjects = subjects.filter((subject) => {
//     const matchesSearch = `${subject.title} ${subject.desc} ${subject.tag}`
//       .toLowerCase()
//       .includes(search.toLowerCase());

//     const matchesFilter =
//       activeFilter === "All" || subject.tag === activeFilter;

//     return matchesSearch && matchesFilter;
//   });

//   return (
//     <div className="site-shell">
//       <div className="ambient ambient-one" />
//       <div className="ambient ambient-two" />

//       <main>
//         {/* HERO SECTION */}
//         <section className="hero" id="home">
//           <div className="hero-copy">
//             <div className="status-pill">
//               <span className="status-dot" />
//               YOUR D.OPT LEARNING SPACE
//             </div>

//             <h1>
//               See the world
//               <br />
//               with <span className="gradient-text">new vision.</span>
//             </h1>

//             <p className="hero-description">
//               Your journey into ophthalmic science starts here. Learn smarter,
//               understand the human eye, and prepare for your next exam with
//               Vision Squad.
//             </p>

//             <div className="hero-actions">
//               <Link className="primary-button" to="/study">
//                 Explore Study Hub <span>→</span>
//               </Link>

//               <a className="secondary-button" href="#about">
//                 Discover our mission
//               </a>
//             </div>

//             <div className="hero-stats">
//               <div>
//                 <strong>01</strong>
//                 <span>Learn concepts</span>
//               </div>
//               <div>
//                 <strong>02</strong>
//                 <span>Build knowledge</span>
//               </div>
//               <div>
//                 <strong>03</strong>
//                 <span>Grow together</span>
//               </div>
//             </div>
//           </div>

//           {/* ANIMATED EYE */}
//           <div className="hero-art" aria-label="Animated eye illustration">
//             <div className="orbit orbit-outer" />
//             <div className="orbit orbit-inner" />
//             <div className="orbit orbit-dashed" />
//             <div className="eye-glow" />

//             <div className="hero-eye">
//               <svg
//                 viewBox="0 0 300 190"
//                 role="img"
//                 aria-label="Illustration of a human eye"
//               >
//                 <defs>
//                   <linearGradient
//                     id="sclera"
//                     x1="0"
//                     y1="0"
//                     x2="1"
//                     y2="1"
//                   >
//                     <stop offset="0%" stopColor="#ffffff" />
//                     <stop offset="100%" stopColor="#9cecff" />
//                   </linearGradient>

//                   <radialGradient id="iris">
//                     <stop offset="0%" stopColor="#081c35" />
//                     <stop offset="45%" stopColor="#13b8e9" />
//                     <stop offset="78%" stopColor="#4167ff" />
//                     <stop offset="100%" stopColor="#172c76" />
//                   </radialGradient>
//                 </defs>

//                 <path
//                   d="M12 95 Q150 -10 288 95 Q150 200 12 95Z"
//                   fill="url(#sclera)"
//                 />

//                 <path
//                   d="M12 95 Q150 -10 288 95"
//                   fill="none"
//                   stroke="#39d7ff"
//                   strokeWidth="3"
//                 />

//                 <path
//                   d="M12 95 Q150 200 288 95"
//                   fill="none"
//                   stroke="#39d7ff"
//                   strokeWidth="3"
//                 />

//                 <circle cx="150" cy="95" r="53" fill="url(#iris)" />

//                 {Array.from({ length: 18 }, (_, i) => (
//                   <line
//                     key={i}
//                     x1="150"
//                     y1="48"
//                     x2="150"
//                     y2="61"
//                     stroke="#8deaff"
//                     strokeWidth="2"
//                     opacity=".65"
//                     transform={`rotate(${i * 20} 150 95)`}
//                   />
//                 ))}

//                 <circle cx="150" cy="95" r="26" fill="#061327" />
//                 <circle
//                   cx="165"
//                   cy="79"
//                   r="10"
//                   fill="#ffffff"
//                   opacity=".95"
//                 />
//                 <circle
//                   cx="135"
//                   cy="108"
//                   r="4"
//                   fill="#ffffff"
//                   opacity=".7"
//                 />
//               </svg>
//             </div>

//             <div className="floating-chip chip-top">
//               <span>✦</span> Learn. Practice. Grow.
//             </div>

//             <div className="floating-chip chip-bottom">
//               <span className="mini-pulse" />
//               Eye-care knowledge, simplified
//             </div>

//             <div className="art-caption">
//               VISION <span>•</span> KNOWLEDGE <span>•</span> FUTURE
//             </div>
//           </div>
//         </section>

//         {/* STUDY HUB PREVIEW */}
//         <section className="subjects-section" id="subjects">
//           <div className="section-heading">
//             <div>
//               <span className="eyebrow">YOUR LEARNING JOURNEY</span>

//               <h2>
//                 Explore the <span className="gradient-text">Study Hub.</span>
//               </h2>

//               <p>
//                 Everything you need to grow your ophthalmic knowledge, in one
//                 place.
//               </p>
//             </div>

//             <span className="section-index">01 / LEARN</span>
//           </div>

//           <div className="search-row">
//             <label className="search-box">
//               <span>⌕</span>

//               <input
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search topics, instruments, notes..."
//               />

//               <kbd>SEARCH</kbd>
//             </label>
//           </div>

//           <div className="filter-list">
//             {filters.map((filter) => (
//               <button
//                 key={filter}
//                 className={`filter-chip ${activeFilter === filter ? "active" : ""
//                   }`}
//                 onClick={() => setActiveFilter(filter)}
//               >
//                 {filter}
//               </button>
//             ))}
//           </div>

//           <div className="subject-grid">
//             {filteredSubjects.map((subject, index) => (
//               <article
//                 className={`subject-card ${subject.color}`}
//                 key={subject.title}
//                 style={{ animationDelay: `${index * 70}ms` }}
//               >
//                 <div className="card-top">
//                   <div className="subject-icon">{subject.icon}</div>
//                   <span className="card-arrow">↗</span>
//                 </div>

//                 <span className="card-tag">{subject.tag}</span>
//                 <h3>{subject.title}</h3>
//                 <p>{subject.desc}</p>

//                 <Link to="/study" className="card-link">
//                   Explore topic <span>→</span>
//                 </Link>
//               </article>
//             ))}
//           </div>

//           {filteredSubjects.length === 0 && (
//             <p className="empty-state">
//               No topics found. Try another search.
//             </p>
//           )}

//           <div style={{ textAlign: "center", marginTop: "32px" }}>
//             <Link className="primary-button" to="/study">
//               Open Complete Study Hub →
//             </Link>
//           </div>
//         </section>

//         {/* ABOUT SECTION */}
//         <section className="mission-section" id="about">
//           <div className="mission-icon">
//             <EyeLogo />
//           </div>

//           <div>
//             <span className="eyebrow">MORE THAN JUST NOTES</span>

//             <h2>
//               Knowledge today.
//               <br />
//               <span className="gradient-text">
//                 Better vision tomorrow.
//               </span>
//             </h2>

//             <p>
//               Vision Squad is a learning space for D.Opt students to understand
//               eye care, strengthen practical knowledge, and move forward
//               together.
//             </p>
//           </div>

//           <a className="primary-button mission-button" href="#home">
//             Back to top ↑
//           </a>
//         </section>
//       </main>

//     </div>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <VisionWatch />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study" element={<StudyHub />} />
        <Route path="/instruments" element={<Instruments />} />
        <Route path="/papers" element={<PapersHub />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;


