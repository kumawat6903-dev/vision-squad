import { useState, useEffect, useRef } from "react";
import "./StudyHub.css";

const subjects = [
  {
    id: "anatomy",
    name: "Anatomy",
    icon: "◉",
    description: "Study the structure of the eye and human body.",
    topics: [
      { name: "Introduction to Anatomy", pdf: null },
      { name: "Introduction to Anatomy", pdf: null },
    ],
  },
  {
    id: "optics",
    name: "Basic Optics",
    icon: "◇",
    description: "Learn about light, lenses and refraction.",
    topics: [
      { name: "ANISOMETROPIA", pdf: "/notes/ANISOMETROPIA.pdf" },
      { name: "Reflection", pdf: null },
    ],
  },
  {
    id: "instruments",
    name: "Instruments",
    icon: "⌕",
    description: "Learn ophthalmic instruments and their uses.",
    topics: [
      { name: "Retinoscope", pdf: null },
      { name: "Ophthalmoscope", pdf: null },
    ],
  },
  {
    id: "community",
    name: "Community Ophthalmology",
    icon: "✳",
    description: "Learn community eye care and awareness.",
    topics: [
      { name: "Introduction to Community Ophthalmology", pdf: null },
      { name: "Eye Health Education", pdf: null },
    ],
  },
];

export default function StudyHub() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [search, setSearch] = useState("");

  const bannerRef = useRef(null);
  const particlesRef = useRef(null);

  const subject = subjects.find(
    (item) => item.id === selectedSubject
  );

  const topics = subject
    ? subject.topics.filter((topic) =>
        topic.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  // JavaScript animation: particles + mouse-following glow
  useEffect(() => {
    const banner = bannerRef.current;
    const particleLayer = particlesRef.current;

    if (!banner || !particleLayer) return;

    particleLayer.innerHTML = "";

    for (let i = 0; i < 22; i++) {
      const particle = document.createElement("span");

      particle.className = "sh-js-particle";
      particle.style.setProperty("--x", `${Math.random() * 100}%`);
      particle.style.setProperty("--y", `${Math.random() * 100}%`);
      particle.style.setProperty("--delay", `${Math.random() * -8}s`);
      particle.style.setProperty(
        "--duration",
        `${4 + Math.random() * 5}s`
      );
      particle.style.setProperty(
        "--size",
        `${2 + Math.random() * 3}px`
      );

      particleLayer.appendChild(particle);
    }

    const handleMouseMove = (event) => {
      const rect = banner.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      banner.style.setProperty("--mouse-x", `${x * 18}px`);
      banner.style.setProperty("--mouse-y", `${y * 18}px`);
    };

    const handleMouseLeave = () => {
      banner.style.setProperty("--mouse-x", "0px");
      banner.style.setProperty("--mouse-y", "0px");
    };

    banner.addEventListener("mousemove", handleMouseMove);
    banner.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      banner.removeEventListener("mousemove", handleMouseMove);
      banner.removeEventListener("mouseleave", handleMouseLeave);
      particleLayer.innerHTML = "";
    };
  }, []);

  function goBack() {
    if (selectedTopic) {
      setSelectedTopic(null);
    } else if (selectedSubject) {
      setSelectedSubject(null);
      setSearch("");
    }
  }

  function openSubject(id) {
    setSelectedSubject(id);
    setSelectedTopic(null);
    setSearch("");
  }

  function openTopic(topic) {
    setSelectedTopic(topic);
  }

  return (
    <main className="study-hub">
      <section className="sh-banner" ref={bannerRef}>
        <div className="sh-banner-glow" />
        <div
          className="sh-js-particles"
          ref={particlesRef}
          aria-hidden="true"
        />

        <span className="sh-eyebrow">
          VISION SQUAD / D.OPT FIRST YEAR
        </span>

        <h1>
          Your Study Space<span>.</span>
        </h1>

        <p>
          Choose your subject, explore topics and access your PDF notes.
        </p>

        <div className="sh-banner-bottom">
          <span>04 SUBJECTS</span>
          <span>LEARN AT YOUR PACE</span>
        </div>
      </section>

      <section className="sh-library">
        <div className="sh-heading">
          <div>
            <span className="sh-section-label">
              {selectedTopic
                ? "STUDY MATERIAL"
                : selectedSubject
                  ? "SUBJECT CONTENT"
                  : "YOUR CURRICULUM"}
            </span>

            <h2>
              {selectedTopic
                ? selectedTopic.name
                : selectedSubject
                  ? subject?.name
                  : "Explore Subjects"}
              <span>.</span>
            </h2>

            <p>
              {selectedTopic
                ? "Open your topic PDF notes below."
                : selectedSubject
                  ? "Choose a topic to access its study material."
                  : "Select a subject to see its topics."}
            </p>
          </div>
        </div>

        {(selectedSubject || selectedTopic) && (
          <button
            className="sh-back-button"
            onClick={goBack}
            type="button"
          >
            ← Back
          </button>
        )}

        {!selectedSubject && (
          <div className="sh-subject-grid">
            {subjects.map((item, index) => (
              <button
                type="button"
                className={`sh-subject-card sh-color-${index + 1}`}
                key={item.id}
                onClick={() => openSubject(item.id)}
              >
                <div className="sh-card-top">
                  <span className="sh-subject-icon">
                    {item.icon}
                  </span>
                  <span className="sh-card-number">
                    0{index + 1}
                  </span>
                </div>

                <h3>{item.name}</h3>
                <p>{item.description}</p>

                <div className="sh-card-bottom">
                  <span>{item.topics.length} topics</span>
                  <span className="sh-arrow">↗</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {selectedSubject && !selectedTopic && (
          <>
            <label className="sh-search">
              <span>⌕</span>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search topics..."
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </label>

            <div className="sh-topic-list">
              {topics.map((topic, index) => (
                <button
                  type="button"
                  className="sh-topic-card"
                  key={`${topic.name}-${index}`}
                  onClick={() => openTopic(topic)}
                >
                  <span className="sh-topic-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="sh-topic-name">
                    {topic.name}
                    <small>
                      {topic.pdf
                        ? "PDF notes available"
                        : "Study notes"}
                    </small>
                  </span>

                  <span className="sh-topic-pdf">
                    {topic.pdf ? "PDF ↗" : "Open →"}
                  </span>
                </button>
              ))}

              {topics.length === 0 && (
                <p className="sh-empty">
                  No topics found. Try another search.
                </p>
              )}
            </div>
          </>
        )}

        {selectedTopic && (
          <div className="sh-pdf-panel">
            <div className="sh-pdf-icon">PDF</div>
            <h3>{selectedTopic.name}</h3>

            {selectedTopic.pdf ? (
              <>
                <p>Your study notes are ready.</p>

                <a
                  className="sh-pdf-button"
                  href={selectedTopic.pdf}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open PDF ↗
                </a>

                <a
                  className="sh-download-link"
                  href={selectedTopic.pdf}
                  download
                >
                  Download PDF
                </a>

                <iframe
                  className="sh-pdf-viewer"
                  src={selectedTopic.pdf}
                  title={`${selectedTopic.name} PDF notes`}
                />
              </>
            ) : (
              <div className="sh-pdf-empty">
                <span>📄</span>
                <h4>Notes coming soon</h4>
                <p>
                  Is topic ki PDF abhi add nahi hui hai.
                  PDF upload karne ke baad yahin se open hogi.
                </p>
              </div>
            )}
          </div>
        )}

        <div className="sh-study-tip">
          <span>✦</span>
          <p>
            <strong>Study tip:</strong> Ek topic complete karo,
            phir uske notes revise karo.
          </p>
        </div>
      </section>
    </main>
  );
}
