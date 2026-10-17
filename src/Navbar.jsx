import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="vs-navbar">
      <div className="vs-nav-container">

        {/* LOGO */}
        <Link to="/" className="vs-brand" onClick={closeMenu}>
          <div className="vs-logo">
            <svg viewBox="0 0 100 70" aria-hidden="true">
              <path
                d="M5 35 Q50 -5 95 35 Q50 75 5 35Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinejoin="round"
              />
              <circle cx="50" cy="35" r="19" fill="#13c9f5" />
              <circle cx="50" cy="35" r="9" fill="#07152e" />
              <circle cx="57" cy="27" r="4" fill="white" />
            </svg>
          </div>

          <div className="vs-brand-text">
            <span className="vs-brand-name">
              VISION <span>SQUAD</span>
            </span>
            <small>D.OPT STUDY & EYE CARE</small>
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav className={`vs-nav-links ${menuOpen ? "vs-menu-open" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>
            <span className="vs-nav-icon">⌂</span> Home
          </NavLink>

          <NavLink to="/study" onClick={closeMenu}>
            <span className="vs-nav-icon">▤</span> Study Hub
          </NavLink>

          <NavLink to="/instruments" onClick={closeMenu}>
            <span className="vs-nav-icon">⌕</span> Instruments
          </NavLink>

          <NavLink to="/papers" onClick={closeMenu}>
            <span className="vs-nav-icon">📄</span> Previous & CT Papers
          </NavLink>


          <a href="/#about" onClick={closeMenu}>
            <span className="vs-nav-icon">✦</span> About
          </a>

          <Link
            to="/study"
            className="vs-mobile-cta"
            onClick={closeMenu}
          >
            Explore Notes <span>↗</span>
          </Link>
        </nav>

        {/* DESKTOP BUTTON */}
        <Link to="/study" className="vs-nav-cta">
          Explore Notes <span>↗</span>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className={`vs-menu-toggle ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

      </div>
    </header>
  );
}
