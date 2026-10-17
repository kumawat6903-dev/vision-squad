
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    const email = "your-email@gmail.com";
    const whatsapp = "91XXXXXXXXXX";

    return (
        <footer className="vs-footer">
            <div className="footer-glow glow-one"></div>
            <div className="footer-glow glow-two"></div>

            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-about">
                        <Link to="/" className="footer-logo">
                            <span className="footer-eye">👁️</span>
                            <span>VISION <b>SQUAD</b></span>
                        </Link>

                        <p className="footer-tagline">
                            Learn together. See better. Grow together.
                        </p>

                        <p className="footer-description">
                            Your learning space for D.Opt studies, ophthalmic
                            instruments and eye-care awareness.
                        </p>

                        <div className="footer-status">
                            <span className="status-dot"></span>
                            Learning • Growing • Exploring
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3>Quick Links</h3>
                        <Link to="/">Home</Link>
                        <Link to="/study">Study Hub</Link>
                        <Link to="/instruments">Instruments</Link>
                        <a href="/#about">About Us</a>
                    </div>

                    <div className="footer-column">
                        <h3>Study Subjects</h3>
                        <Link to="/study">Anatomy of Eye</Link>
                        <Link to="/study">Basic Optics</Link>
                        <Link to="/instruments">Ophthalmic Instruments</Link>
                        <Link to="/study">Community Ophthalmology</Link>
                    </div>

                    <div className="footer-column footer-contact">
                        <h3>Let's Connect</h3>


                        <a
                            className="contact-card email-card"
                            href="mailto:kumawat6903@gmail.com"
                        >
                            <span className="contact-icon">✉</span>
                            <span>
                                <small>Email Us</small>
                                <strong>kumawat6903@gmail.com ↗</strong>
                            </span>
                        </a>

                        <a
                            className="contact-card whatsapp-card"
                            href="https://wa.me/919784329477"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="contact-icon">☏</span>
                            <span>
                                <small>Chat with Us</small>
                                <strong>WhatsApp ↗</strong>
                            </span>
                        </a>

                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} <b>Vision Squad 👁️</b>
                        <span> • Made for learners</span>
                    </p>

                    <a href="#top" className="back-to-top">
                        Back to Top <span>↑</span>
                    </a>
                </div>

                <p className="footer-disclaimer">
                    Educational purposes only. Clinical decisions should follow
                    guidance from qualified eye-care professionals.
                </p>
            </div>
        </footer>
    );
}
