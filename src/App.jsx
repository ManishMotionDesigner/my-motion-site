import { motion } from "motion/react";
import { useState, useRef } from "react";
import "./App.css";


function VideoCard({ src, poster }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="video-wrapper">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        controls
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {!isPlaying && (
        <button
          className="custom-play-button"
          onClick={handlePlay}
        >
          ▶
        </button>
      )}
    </div>
  );
}


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const videoRef = useRef(null); 

  const [isPlaying, setIsPlaying] = useState(false);
  
  const handlePlay = () => {
  if (isPlaying) {
    videoRef.current.pause();
    setIsPlaying(false);
  } else {
    videoRef.current.play();
    setIsPlaying(true);
  }
};

  return (
    <main className="site">

      {/* Navbar */}  
      <motion.nav
        className="navbar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <a href="/" className="logo">
          ManishMotionDesigner
        </a>

        <div className="nav-links">
  <a href="#work">Work</a>
  <a href="#services">Services</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
</div>

<motion.a
  href="#contact"
  className="nav-button"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.96 }}
  onClick={() => window.gtag?.('event', 'contact_click')}
>
  Let's Talk
</motion.a>

{/* Mobile Menu Button */}
<button
  className={`menu-button ${menuOpen ? "active" : ""}`}
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle menu"
>
  <span></span>
  <span></span>
</button>

{/* Mobile Menu */}
<motion.div
  className="mobile-menu"
  initial={false}
  animate={{
    opacity: menuOpen ? 1 : 0,
    y: menuOpen ? 0 : -10,
    pointerEvents: menuOpen ? "auto" : "none",
  }}
  transition={{ duration: 0.25 }}
>
  <a href="#work" onClick={() => setMenuOpen(false)}>
    Work
  </a>

  <a href="#services" onClick={() => setMenuOpen(false)}>
    Services
  </a>

  <a href="#about" onClick={() => setMenuOpen(false)}>
    About
  </a>

  <a href="#contact" onClick={() => setMenuOpen(false)}>
    Contact
  </a>
</motion.div>

</motion.nav>

      {/* Hero */}
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="eyebrow">
            MOTION GRAPHICS DESIGNER • DIGITAL EXPERIENCES
          </p>

          <h1>
            Motion that
            <br />
            <span>makes ideas move.</span>
          </h1>

          <p className="description">
            I’m a motion graphics designer creating engaging motion graphics,
            product animations and digital experiences for modern brands.
          </p>

          <div className="hero-buttons">
            <motion.a
              href="#work"
              className="cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              className="cta secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              Let's Talk
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Work */}
<section id="work" className="work-section">
  <div className="work-heading">
    <p className="section-label">SELECTED WORK</p>

    <h2>
      Motion that
      <br />
      <span>speaks.</span>
    </h2>
  </div>

  <div className="work-grid">

    {/* 01 */}
    <motion.div
      className="work-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <VideoCard
        src="/videos/Motion Graphic Portfolio.mp4"
        poster="/Images/Motion-Graphic Portfolio Thumbnail.jpg"
      />
      <h3>Motion Graphics Portfolio</h3>
      <p>Motion Graphics</p>
    </motion.div>

    {/* 02 */}
    <motion.div
      className="work-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <VideoCard
        src="/videos/Product Animation.mp4"
        poster="/Images/Product-Animation Thumbnail For My Website.jpg"
      />
      <h3>Product Animation</h3>
      <p>Product Animation</p>
    </motion.div>

    {/* 03 */}
    <motion.div
      className="work-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <VideoCard
        src="/videos/Cenamatic Animation.mp4"
        poster="/Images/Cinematic-Animation Thumbnail.jpg"
      />
      <h3>Cinematic Motion Design</h3>
      <p>Cinematic Motion</p>
    </motion.div>

    {/* 04 */}
    <motion.div
      className="work-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <VideoCard
        src="/videos/Documentary Style Animation.mp4"
        poster="/Images/Documentary-Animation Thumbnail.jpg"
      />
      <h3>Documentary Motion Design</h3>
      <p>Documentary Motion</p>
    </motion.div>

    {/* 05 */}
    <motion.div
      className="work-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <VideoCard
        src="/videos/Motion Graphic Showreel.mp4"
        poster="/Images/Showreel-Thumbnail.jpg"
      />
      <h3>Motion Graphic Showreel</h3>
      <p>Showreel</p>
    </motion.div>

  </div>
</section>

      {/* Services */}
      <section id="services" className="services-section">
  <div className="services-heading">
    <p className="section-label">SERVICES</p>

    <h2>
      What I
      <br />
      <span>create.</span>
    </h2>

    <p className="services-intro">
      I create motion graphics, logo animation, product animation
      and explainer videos that help modern brands communicate clearly.
    </p>
  </div>

  <div className="services-grid">

    <motion.div
      className="service-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <span>01</span>
      <h3>Motion Graphics</h3>
      <p>Dynamic visuals and animations that bring ideas to life.</p>
    </motion.div>

    <motion.div
      className="service-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <span>02</span>
      <h3>SaaS Animation</h3>
      <p>Clear and engaging animations for software and digital products.</p>
    </motion.div>

    <motion.div
      className="service-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <span>03</span>
      <h3>Product Animation</h3>
      <p>Product-focused visuals that explain features and experiences.</p>
    </motion.div>

    <motion.div
      className="service-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <span>04</span>
      <h3>Logo Animation</h3>
      <p>Memorable logo reveals and brand motion systems.</p>
    </motion.div>

    <motion.div
      className="service-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <span>05</span>
      <h3>Kinetic Typography</h3>
      <p>Typography-driven animation with rhythm, energy and impact.</p>
    </motion.div>

    <motion.div
      className="service-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <span>06</span>
      <h3>Explainer Videos</h3>
      <p>Animated storytelling that makes complex ideas easier to understand.</p>
    </motion.div>

    <motion.div
      className="service-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <span>07</span>
      <h3>Social Media Animation</h3>
      <p>Short-form motion content designed for social platforms.</p>
    </motion.div>

    <motion.div
      className="service-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <span>08</span>
      <h3>Video Editing</h3>
      <p>Clean editing combined with motion and visual storytelling.</p>
    </motion.div>

  </div>
</section>

      {/* About */}
      <section id="about" className="about-section">
  <div className="about-label">
    <p className="section-label">ABOUT</p>
  </div>

  <div className="about-content">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      I'm Manish,
      <br />
      a <span>Motion Graphics Designer.</span>
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.15 }}
    >
      I create engaging visual experiences through motion, animation
      and design. My work focuses on making ideas easier to understand,
      more memorable and more visually engaging.
    </motion.p>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.25 }}
    >
      I work across motion graphics, SaaS animation, product animation,
      logo animation, kinetic typography and digital content.
    </motion.p>
  </div>
</section>

      {/* Contact */}
      <section id="contact" className="contact-section">
  <div className="contact-top">
    <p className="section-label">LET'S WORK TOGETHER</p>

    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      Have an idea?
      <br />
      Let's make <span>it move.</span>
    </motion.h2>

    <motion.a
      href="mailto:manishmanral258@gmail.com"
      className="contact-email"
      whileHover={{ x: 8 }}
      transition={{ duration: 0.2 }}
    >
      manishmanral258@gmail.com →
    </motion.a>
  </div>

  <div className="contact-bottom">

    <div className="contact-info">
      <p>GET IN TOUCH</p>
      <a href="tel:8273230903">+91 82732 30903</a>
      <a href="mailto:manishmanral258@gmail.com">
        manishmanral258@gmail.com
      </a>
    </div>

    <div className="social-links">
      <p>FOLLOW / CONNECT</p>

      <a
        href="https://www.instagram.com/manishmotiondesigner"
        target="_blank"
        rel="noreferrer"
      >
        Instagram ↗
      </a>

      <a
        href="https://www.linkedin.com/in/manish-singh-manral-02aa2743b"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn ↗
      </a>

      <a
        href="https://www.youtube.com/@ManishMotionDesigner"
        target="_blank"
        rel="noreferrer"
      >
        YouTube ↗
      </a>
    </div>

  </div>

  <div className="footer">
    <span>© 2026 ManishMotionDesigner</span>
    <span>Motion Designer • Digital Experiences</span>
  </div>
</section>

    </main>
  );
}

export default App;