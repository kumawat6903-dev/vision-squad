
import { useState } from "react";
import "./Instruments.css";

const instruments = [
    {
        name: "Auto-Refractometer (AR)",
        principle:
            "Works on the principle of infrared light reflection and image analysis to estimate refractive error.",
        image:
            "/public/images/Auto kerato-refractometer.jpg",
    },
    {
        name: "Non-Contact Tonometer (NCT)",
        principle:
            "Measures intraocular pressure (IOP) by using a puff of air on the cornea.",
        image:
            "/public/images/nct-non-contact-tonometry.webp",
    },
    {
        name: "Optical Coherence Tomography (OCT)",
        principle:
            "OCT works on the principle of low-coherence interferometry to produce cross-sectional images of the retina.",
        image:
            "/public/images/Oct.jpg",
    },
  
  
];

export default function Instruments() {
    const [search, setSearch] = useState("");

    const filtered = instruments.filter((item) =>
        `${item.name} ${item.principle}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <main className="instrument-page">
            <header className="instrument-header">
                <span className="instrument-eyebrow">
                    VISION SQUAD / PRACTICAL LIBRARY
                </span>
                <h1>
                    Ophthalmic <span>Instruments.</span>
                </h1>
                <p>
                    Explore ophthalmic instruments, their images and working principles.
                </p>
            </header>

            <section className="instrument-library">
                <div className="instrument-library-heading">
                    <div>
                        <span className="instrument-eyebrow">LEARN &amp; EXPLORE</span>
                        <h2>Instrument Library</h2>
                    </div>
                    <span className="instrument-count">
                        {filtered.length} instruments
                    </span>
                </div>

                <input
                    className="instrument-search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search NCT, OCT, Retinoscope..."
                    aria-label="Search instruments"
                />

                <div className="instrument-grid">
                    {filtered.map((item, index) => (
                        <article className="instrument-card" key={item.name}>
                            <div className="instrument-image">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.style.display = "none";
                                    }}
                                />
                            </div>

                            <div className="instrument-card-body">
                                <span className="instrument-number">
                                    INSTRUMENT {String(index + 1).padStart(2, "0")}
                                </span>
                                <h3>{item.name}</h3>
                                <p>
                                    <strong>Principle:</strong> {item.principle}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <p className="instrument-empty">
                        No instruments found. Try another search.
                    </p>
                )}
            </section>
        </main>
    );
}
