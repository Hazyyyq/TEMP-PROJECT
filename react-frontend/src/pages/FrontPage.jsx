import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import '../style/FrontPage.css';
import Footer from "../components/Footer.jsx";

function FrontPage() {
    const [isOpen, setIsOpen] = useState(false);

    // Scroll Reveal Logic
    useEffect(() => {
        const reveal = () => {
            let reveals = document.querySelectorAll('.info-card');
            for (let i = 0; i < reveals.length; i++) {
                let windowheight = window.innerHeight;
                let revealtop = reveals[i].getBoundingClientRect().top;
                let revealpoint = 150;

                if (revealtop < windowheight - revealpoint) {
                    reveals[i].classList.add('active');
                }
            }
        };

        window.addEventListener('scroll', reveal);
        reveal(); // Trigger once on load

        return () => window.removeEventListener('scroll', reveal);
    }, []);

    return (
        <>
            <nav>
                {/* 1. SCROLL TO TOP */}
                <Link to="/" className="logo">
                    KAKI GAMERZ<span className="red-dot"></span>
                </Link>

                <div className="nav-links desktop-menu">
                    {/* 2. NAVIGATION LINKS POINTING TO IDs (#) */}
                    <a href="/#phone">KakiPhone</a>
                    <a href="/#watch">KakiWatch</a>
                    <a href="/#tablet">KakiPad</a>
                    <a href="/#games">Games</a>
                    <a href="/#about">About Us</a>
                </div>

                <div className="sidebar" onClick={() => setIsOpen(!isOpen)}>
                    <i className={`fa ${isOpen ? "fa-times" : "fa-bars"}`}></i>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-nav-overlay ${isOpen ? 'active' : ''}`}>
                <a href="/#phone" onClick={() => setIsOpen(false)}>KakiPhone</a>
                <a href="/#watch" onClick={() => setIsOpen(false)}>KakiWatch</a>
                <a href="/#tablet" onClick={() => setIsOpen(false)}>KakiPad</a>
                <a href="/#games" onClick={() => setIsOpen(false)}>Games</a>
                <a href="/#about" onClick={() => setIsOpen(false)}>About Us</a>
            </div>

            {/* --- TOP SECTION (ID: home) --- */}
            <section id="home" className="hero-section dark-theme short-hero">
                <img
                    src="https://i.pinimg.com/originals/cd/f4/95/cdf4951a69fe542e2b7d6a07aa234a1b.gif"
                    className="hero-bg-img"
                    alt="Home Background"
                />
                <h1 className="hero-store-title">
                    KAKI <span className="neon-text-title-front">GAMERZ</span>
                </h1>
            </section>

            {/* --- PHONE INTRO (ID: phone) --- */}
            <section id="phone" className="hero-section dark-theme">
                <img
                    src="https://cdn.mos.cms.futurecdn.net/hUQHCvvKAHtNGxtLiB8rjP.gif"
                    className="hero-bg-img"
                    alt="Phone Intro"
                />
            </section>

            {/* PHONE CARD SECTION */}
            <section className="hero-section dark-theme">
                <img
                    src="https://miro.medium.com/v2/1*aTmCQXNJDgO7oQ371gRVvg.gif"
                    className="hero-bg-img"
                    alt="Phone Detail"
                />
                <div className="info-card reveal">
                    <span className="card-label">Unfair Advantage. 144Hz. Zero Lag</span>
                    <h2 className="card-title">KakiPhone<span className="red-dot"></span></h2>
                    <Link to="/" className="btn-shop">View</Link>
                </div>
            </section>

            {/* --- WATCH INTRO (ID: watch) --- */}
            <section id="watch" className="hero-section dark-theme">
                <img
                    src="https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/3486306/APPLEWATCH_INTRO.0.gif"
                    className="hero-bg-img"
                    alt="Watch Intro"
                />
            </section>

            {/* WATCH CARD SECTION */}
            <section className="hero-section dark-theme">
                <img
                    src="https://i.pinimg.com/originals/66/97/1d/66971d5b5aeaf2a98116ccb97e0ca10d.gif"
                    className="hero-bg-img"
                    alt="Watch Detail"
                />
                <div className="info-card reveal">
                    <span className="card-label">Your HUD in real life.</span>
                    <h2 className="card-title">KakiWatch Ultra<span className="red-dot"></span></h2>
                    <Link to="/" className="btn-shop">View</Link>
                </div>
            </section>

            {/* --- TABLET INTRO (ID: tablet) --- */}
            <section id="tablet" className="hero-section dark-theme">
                <img
                    src="https://www.young-minds.sg/sites/default/files/inline-images/iPadAirgif.gif"
                    className="hero-bg-img"
                    alt="Tablet Intro"
                />
            </section>

            {/* TABLET CARD SECTION */}
            <section className="hero-section dark-theme">
                <img
                    src="https://www.lowyat.net/wp-content/uploads/2024/05/Apple-iPad-Pro-M4-launch-8.jpg"
                    className="hero-bg-img"
                    alt="Tablet Detail"
                />
                <div className="info-card reveal">
                    <span className="card-label">Bigger Screen. Better Headshots.</span>
                    <h2 className="card-title">KakiPad Air<span className="red-dot"></span></h2>
                    <Link to="/" className="btn-shop">View</Link>
                </div>
            </section>

            {/* --- GAMES SECTION (ID: games) --- */}
            <section id="games" className="hero-section dark-theme">
                <img
                    src="https://i.pinimg.com/originals/f0/06/1d/f0061dcf4eb30dded5caeb4bb1730363.gif"
                    className="hero-bg-img"
                    alt="Games Background"
                />
                <div className="info-card reveal">
                    <span className="card-label">Got the Gear? Now Get the Game.</span>
                    <h2 className="card-title">Our Latest Games <span className="red-dot"></span></h2>
                    <Link to="/" className="btn-shop">View</Link>
                </div>
            </section>

            {/* --- ABOUT SECTION (ID: about) --- */}
            <section id="about" className="hero-section dark-theme short-hero">
                <img
                    src="https://i.pinimg.com/originals/cd/f4/95/cdf4951a69fe542e2b7d6a07aa234a1b.gif"
                    className="hero-bg-img"
                    alt="About Team Background"
                />
                <div className="info-card reveal">
                    <span className="card-label">Meet the Kaki Gamerz Team.</span>
                    <h2 className="card-title">Kaki Gamerz Corp.<span className="red-dot"></span></h2>
                    <Link to="/about" className="btn-shop">Meet the Squad</Link>
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default FrontPage;