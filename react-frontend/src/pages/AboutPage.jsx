import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../style/AboutPage.css';
import Footer from '../components/Footer.jsx';

function AboutPage() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav>
                {/* 1. LOGO */}
                <Link to="/" className="logo">
                    KAKI GAMERZ<span className="red-dot"></span>
                </Link>

                <div className="nav-links desktop-menu">
                    {/* 2. NAVIGATION LINKS */}
                    <Link to="/">Home</Link>
                </div>

                <div className="sidebar" onClick={() => setIsOpen(!isOpen)}>
                    <i className={`fa ${isOpen ? "fa-times" : "fa-bars"}`}></i>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-nav-overlay-about ${isOpen ? 'active' : ''}`}>
                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </div>

            <main className="container">
                <div className="brand-header">
                    <h1 className="big-brand-title">
                        KAKI <span className="neon-text-title">GAMERZ</span>
                    </h1>
                    <hr className="separator2"/>
                    <div className="brand-tagline">YOUR REALITY, LEVELED UP.</div>

                    <section className="video-section">
                        <video autoPlay playsInline className="back-video">
                            <source src="/vid/intro.mp4" type="video/mp4"/>
                        </video>
                    </section>

                    <p className="about-text">
                        At <strong className="text-white">Kaki Gamerz</strong>, we define the intersection of gaming
                        culture and modern mobility.
                        We are your premier destination for the latest <span className="highlight">video games</span>,
                        high-performance <span className="highlight">smartphones</span>, versatile tablets, and
                        essential smart wearables.
                        We move beyond traditional gaming boundaries to provide a curated ecosystem of genuine tech,
                        ensuring every enthusiast is equipped with the best tools to <strong className="text-white">play,
                        connect, and thrive</strong>.
                    </p>
                </div>

                {/* --- TEAM GRID --- */}
                <div className="All-Grid">

                    {/* PROFILE 1: System Architect */}
                    <article className="managerProfile">
                        <img src="/img/Airil.jpeg" alt="Airil Aiman bin Azman"/>
                        <div className="info">
                            <h5>Airil Aiman bin Azman</h5>
                            <p style={{color: '#66fcf1', fontWeight: 'bold'}}>System Architect</p>
                            <p className="job-desc">
                                Constructed the world logic. Ensures the database is robust enough to handle the
                                ultimate boss fight.
                            </p>
                        </div>
                        <ul className="ManagerSocMed">
                            <li><a href="https://www.facebook.com/share/1FfxboWiwL/?mibextid=wwXIfr"><i
                                className="fa fa-facebook"></i></a></li>
                            <li><a href="https://www.instagram.com/youdeffdonnome?igsh=MTN2czllMm9nNGpjMA=="><i
                                className="fa fa-instagram"></i></a></li>
                            <li><a href=" https://www.linkedin.com/in/airil-aiman-a251053a5"><i
                                className="fa fa-linkedin-square"></i></a></li>
                        </ul>
                    </article>

                    {/* PROFILE 2: UI Designer */}
                    <article className="managerProfile">
                        <img src="/img/Aiman.jpeg" alt="Mohammad Aiman Akmal bin Azlan"/>
                        <div className="info">
                            <h5>Mohammad Aiman Akmal bin Azlan</h5>
                            <p style={{color: '#66fcf1', fontWeight: 'bold'}}>UI Designer</p>
                            <p className="job-desc">
                                Polished the pixels. Designed an interface that looks pleasing to the eye and fits the
                                game's lore.
                            </p>
                        </div>
                        <ul className="ManagerSocMed">
                            <li><a href="https://www.facebook.com/mohd.aiman.akmal.2025/"><i
                                className="fa fa-facebook"></i></a></li>
                            <li><a href="https://www.instagram.com/kmalzln_/"><i className="fa fa-instagram"></i></a>
                            </li>
                            <li><a href="linkedin.com/in/aimanakmalazlan/"><i className="fa fa-linkedin-square"></i></a>
                            </li>
                        </ul>
                    </article>

                    {/* PROFILE 3: UX Designer */}
                    <article className="managerProfile">
                        <img src="/img/Johan.png" alt="Muhammad Johan bin Talib"/>
                        <div className="info">
                            <h5>Muhammad Johan bin Talib</h5>
                            <p style={{color: '#66fcf1', fontWeight: 'bold'}}>UX Designer</p>
                            <p className="job-desc">
                                Balancer of gameplay. Removed friction points to ensure the user experience is
                                overpowered.
                            </p>
                        </div>
                        <ul className="ManagerSocMed">
                            <li><a href="https://www.facebook.com/share/1C4KuyRk9n/"><i className="fa fa-facebook"></i></a>
                            </li>
                            <li><a href="https://www.instagram.com/mjohan._?igsh=MWJjdnBpM2R5NWNobA=="><i
                                className="fa fa-instagram"></i></a></li>
                            <li><a
                                href="https://www.linkedin.com/in/muhammad-johan-bin-talib-moe-5426b03a3/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i
                                className="fa fa-linkedin-square"></i></a></li>
                        </ul>
                    </article>

                    {/* PROFILE 4: Front-End Developer */}
                    <article className="managerProfile">
                        <img src="/img/Haziq.png" alt="Muhammad Haziq Irsyad bin Mohd Rafeein"/>
                        <div className="info">
                            <h5>Muhammad Haziq Irsyad bin Mohd Rafeein</h5>
                            <p>Front-End Developer</p>
                            <p className="job-desc">
                                Master of execution. Squashed bugs and wrote the code that makes the buttons click and
                                the animations flow.
                            </p>
                        </div>
                        <ul className="ManagerSocMed">
                            <li><a href="https://www.instagram.com/be_ziq?igsh=MWJwcnZ5cjdnbm40bQ==" target="_blank"><i
                                className="fa fa-facebook"></i></a></li>
                            <li><a href="https://www.instagram.com/hzq.irsyad?igsh=MTR4dm9jdXgwMXgzbA=="
                                   target="_blank"><i className="fa fa-instagram"></i></a></li>
                            <li><a
                                href="https://my.linkedin.com/in/haziq-irsyad-r-535a4b314?trk=people-guest_people_search-card"
                                target="_blank"><i className="fa fa-linkedin-square"></i></a></li>
                        </ul>
                    </article>

                </div>

                <hr className="separator"/>

                {/* --- VIDEO SECTION 1: MISSION --- */}
                <section className="video-section">
                    <video autoPlay muted loop playsInline className="back-video">
                        <source src="/vid/GravitiGamerz.mp4" type="video/mp4"/>
                    </video>
                    <div className="video-overlay"></div>
                    <div className="MissionVision-container">
                        <h2 className="section-title">Our <span className="highlight">Mission</span></h2>
                        <p>To create the ultimate home ground for the Real Kaki Gamerz.</p>
                    </div>
                </section>

                <hr className="separator"/>

                {/* --- VIDEO SECTION 2: VISION --- */}
                <section className="video-section">
                    <video autoPlay muted loop playsInline className="back-video">
                        <source src="/vid/GravitiGamerz_2.mp4" type="video/mp4"/>
                    </video>
                    <div className="video-overlay"></div>
                    <div className="MissionVision-container">
                        <h2 className="section-title">Our <span className="highlight">Vision</span></h2>
                        <p>A borderless Gaming Empire where the Real Kaki Gamerz spirit thrives.</p>
                    </div>
                </section>
            </main>

            <Footer/>
        </>
    )
}

export default AboutPage;