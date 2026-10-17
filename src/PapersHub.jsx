
import { useMemo, useState } from "react";
import "./PapersHub.css";

const papers = [
  {
    id: 1,
    title: "Anatomy",
    subject: "Anatomy",
    type: "previous",
    year: "2025",
    semester: "1st Year",
    pdf: null,
  },
  {
    id: 2,
    title: "Basic Optics",
    subject: "Basic Optics",
    type: "previous",
    year: "2025",
    semester: "1st Year",
    pdf: null,
  },
  {
    id: 3,
    title: "Instruments",
    subject: "Instruments",
    type: "previous",
    year: "2025",
    semester: "1st Year",
    pdf: null,
  },
  {
    id: 4,
    title: "Community Ophthalmology",
    subject: "Community Ophthalmology",
    type: "previous",
    year: "2025",
    semester: "1st Year",
    pdf: null,
  },
  {
    id: 5,
    title: "Anatomy CT Test",
    subject: "Anatomy",
    type: "ct",
    year: "CT Test 1",
    semester: "1st Year",
    pdf: null,
  },
  {
    id: 6,
    title: "Basic Optics CT Test",
    subject: "Basic Optics",
    type: "ct",
    year: "CT Test 1",
    semester: "1st Year",
    pdf: null,
  },
  {
    id: 7,
    title: "Instruments CT Test",
    subject: "Instruments",
    type: "ct",
    year: "CT Test 1",
    semester: "1st Year",
    pdf: null,
  },
  {
    id: 8,
    title: "Community Ophthalmology CT Test",
    subject: "Community Ophthalmology",
    type: "ct",
    year: "CT Test 1",
    semester: "1st Year",
    pdf: null,
  },
];

const subjectOptions = [
  "All Subjects",
  "Anatomy",
  "Basic Optics",
  "Instruments",
  "Community Ophthalmology",
];

function PapersHub() {
  const [activeTab, setActiveTab] = useState("previous");
  const [search, setSearch] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("All Subjects");

  const filteredPapers = useMemo(() => {
    return papers.filter((paper) => {
      const matchesTab = paper.type === activeTab;

      const matchesSubject =
        subjectFilter === "All Subjects" ||
        paper.subject === subjectFilter;

      const query = search.trim().toLowerCase();

      const matchesSearch =
        paper.title.toLowerCase().includes(query) ||
        paper.subject.toLowerCase().includes(query) ||
        paper.year.toLowerCase().includes(query);

      return matchesTab && matchesSubject && matchesSearch;
    });
  }, [activeTab, search, subjectFilter]);

  const changeTab = (tab) => {
    setActiveTab(tab);
    setSearch("");
    setSubjectFilter("All Subjects");
  };

  return (
    <main className="ph-page">
      {/* Hero */}
      <section className="ph-hero">
        <div className="ph-hero-orb ph-orb-one" />
        <div className="ph-hero-orb ph-orb-two" />

        <div className="ph-hero-content">
          <span className="ph-eyebrow">
            VISION SQUAD · EXAM PREPARATION
          </span>

          <h1>
            Practice Today.
            <br />
            <span>Perform Better.</span>
          </h1>

          <p>
            Previous year question papers and CT test papers
            for D. Ophthalmic 1st Year.
          </p>

          <button
            className="ph-hero-button"
            onClick={() =>
              document
                .getElementById("ph-paper-library")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Papers <span>↘</span>
          </button>
        </div>

        <div className="ph-hero-visual" aria-hidden="true">
          <div className="ph-orbit ph-orbit-a" />
          <div className="ph-orbit ph-orbit-b" />
          <div className="ph-paper-illustration">
            <div className="ph-paper-top">
              <span>VS</span>
              <span>EXAM</span>
            </div>
            <div className="ph-paper-line ph-line-wide" />
            <div className="ph-paper-line" />
            <div className="ph-paper-line ph-line-short" />
            <div className="ph-paper-question">
              <span>Q.</span>
              <div>
                <i />
                <i />
              </div>
            </div>
            <div className="ph-paper-line" />
            <div className="ph-paper-line ph-line-short" />
            <div className="ph-paper-stamp">PRACTICE</div>
          </div>
          <div className="ph-floating-icon ph-float-book">📚</div>
          <div className="ph-floating-icon ph-float-check">✓</div>
        </div>
      </section>

      {/* Paper library */}
      <section className="ph-library" id="ph-paper-library">
        <div className="ph-heading">
          <div>
            <span className="ph-section-label">YOUR PAPER LIBRARY</span>
            <h2>Find Your Paper</h2>
            <p>Select a category and start your exam preparation.</p>
          </div>

          <div className="ph-total">
            <strong>{filteredPapers.length}</strong>
            <span>Showing</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="ph-tabs">
          <button
            className={activeTab === "previous" ? "active" : ""}
            onClick={() => changeTab("previous")}
          >
            <span>📄</span>
            <span>
              <strong>Previous Papers</strong>
              <small>Previous year questions</small>
            </span>
            <span className="ph-tab-arrow">↗</span>
          </button>

          <button
            className={activeTab === "ct" ? "active" : ""}
            onClick={() => changeTab("ct")}
          >
            <span>📝</span>
            <span>
              <strong>CT Test Papers</strong>
              <small>Class test practice</small>
            </span>
            <span className="ph-tab-arrow">↗</span>
          </button>
        </div>

        {/* Search and filter */}
        <div className="ph-toolbar">
          <label className="ph-search">
            <span>⌕</span>
            <input
              type="search"
              placeholder="Search paper or subject..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
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

          <select
            value={subjectFilter}
            onChange={(event) => setSubjectFilter(event.target.value)}
            aria-label="Filter by subject"
          >
            {subjectOptions.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

        {/* Paper cards */}
        <div className="ph-paper-grid">
          {filteredPapers.map((paper, index) => (
            <article
              className="ph-paper-card"
              key={paper.id}
              style={{ "--ph-index": index }}
            >
              <div className="ph-card-top">
                <div className="ph-file-icon">
                  {paper.type === "previous" ? "📄" : "📝"}
                </div>

                <span
                  className={`ph-status ${
                    paper.pdf ? "ph-available" : "ph-pending"
                  }`}
                >
                  {paper.pdf ? "Available" : "Coming Soon"}
                </span>
              </div>

              <span className="ph-subject-name">{paper.subject}</span>
              <h3>{paper.title}</h3>

              <div className="ph-paper-meta">
                <span>◷ {paper.year}</span>
                <span>▤ {paper.semester}</span>
              </div>

              <div className="ph-card-footer">
                <span>
                  {paper.type === "previous"
                    ? "Previous Year Paper"
                    : "Class Test Paper"}
                </span>

                {paper.pdf ? (
                  <a
                    href={paper.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="ph-open-button"
                  >
                    Open PDF ↗
                  </a>
                ) : (
                  <span className="ph-soon-button">
                    Not uploaded
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {filteredPapers.length === 0 && (
          <div className="ph-empty">
            <span>🔎</span>
            <h3>No papers found</h3>
            <p>Try another subject or search term.</p>
            <button
              onClick={() => {
                setSearch("");
                setSubjectFilter("All Subjects");
              }}
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Bottom note */}
        <div className="ph-note">
          <span>💡</span>
          <div>
            <strong>Exam Preparation Tip</strong>
            <p>
              Solve papers without checking your notes first.
              Then review your mistakes and revise weak topics.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PapersHub;
