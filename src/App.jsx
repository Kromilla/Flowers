import React, { useEffect, useRef, useState } from 'react';
import Surprise from './components/Surprise';
import './index.css';

const Butterfly = ({ size = 60, scale = 1 }) => (
  <img 
    src="/monarch_real.png" 
    alt="Butterfly" 
    className="butterfly-img"
    style={{ 
      width: size * scale, 
      height: 'auto'
    }} 
  />
);

const ArchedText = () => (
  <div className="arch-wrapper" style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <svg viewBox="0 0 500 150" className="arch-text-svg">
      <defs>
        <path id="curve" d="M 50,130 Q 250,30 450,130" />
      </defs>
      <text fill="#295010" fontSize="48" fontWeight="bold" fontFamily="Playfair Display, serif">
        <textPath href="#curve" startOffset="50%" textAnchor="middle">
          Feliz día de las
        </textPath>
      </text>
    </svg>
    <img src="/monarch_real.png" className="arch-butterfly left" alt="Butterfly" />
    <img src="/monarch_real.png" className="arch-butterfly right" alt="Butterfly" />
  </div>
);


const Butterflies = () => {
  const [butterflies, setButterflies] = useState([]);

  useEffect(() => {
    // Increased to 20 butterflies for a lush, full-screen effect
    const newButterflies = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: (Math.random() * 100) + 'vw', 
      top: (Math.random() * 100) + 'vh',
      delay: -(Math.random() * 30) + 's', // Negative delay to start mid-animation
      duration: (Math.random() * 25 + 20) + 's',
      scale: (Math.random() * 0.3 + 0.25) // Variable sizing
    }));
    setButterflies(newButterflies);
  }, []);

  return (
    <div className="butterflies-container" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 100 }}>
      {butterflies.map(b => (
        <div 
          key={b.id} 
          className="butterfly-wrapper"
          style={{ 
            position: 'absolute',
            left: b.left, 
            top: b.top,
            animationDelay: b.delay, 
            animationDuration: b.duration,
          }} 
        >
          <Butterfly size={60} scale={b.scale} />
        </div>
      ))}
    </div>
  );
}

function App() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = { threshold: 0.3 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, observerOptions);

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el);
  };

  return (
    <div className="layout-container">
      <div className="watercolor-overlay"></div>
      <Butterflies />
      
      {/* SECTION 1: SHREK LOGO & 3D ELEMENTS */}
      <section className="logo-section">
        
        <div className="logo-3d-stack real-assets" ref={addToRefs}>
          {/* Logo pieces stacked from top to bottom exactly like Canva */}
          <div className="title-stack">
            <ArchedText />
            <img src="/flores.png" alt="FLORES" className="shrek-logo-img flores-img" />
            <img src="/amarillas.png" alt="AMARILLAS" className="shrek-logo-img amarillas-img" />
          </div>

          <div className="locket-wrapper">
             <img src="/shrek_ears.png" alt="Heart Locket Component" className="locket-img" />
             <div className="locket-initials">
               <span className="initial-f">F</span>
               <span className="initial-b">B</span>
             </div>
          </div>
          
          <h1 className="hero-names gold-text" style={{ marginTop: '3rem', zIndex: 10 }}>Francisco & Betsy</h1>
        </div>

      </section>

      {/* SECTION 2: VIDEO */}
      <section className="video-section">
        <div className="video-container animate-in" ref={addToRefs}>
          <video 
            src="/shrek_video.mp4" 
            controls 
            className="shrek-video"
            poster="/sky_background.png"
          >
            Tu navegador no soporta el formato de video.
          </video>
          <img src="/sunflower_asset.png" alt="Girasoles" className="video-sunflowers" />
        </div>
        
        <p className="video-instructions animate-in" ref={addToRefs}>
          (Dale play y activa el audio)
        </p>
        
        <div className="play-icon-container animate-in" ref={addToRefs}>
          <svg className="play-hand-icon" viewBox="0 0 24 24" fill="none" stroke="#295010" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="9 8 15 12 9 16 9 8" fill="rgba(41, 80, 16, 0.2)" />
            <path d="M12 15v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 4 0v1" />
            <path d="M12 15h2a2 2 0 0 1 2 2v3" />
            <path d="M18 9a5 5 0 0 1 0 6" />
            <path d="M21 6a9 9 0 0 1 0 12" />
            <path d="M6 9a5 5 0 0 0 0 6" />
            <path d="M3 6a9 9 0 0 0 0 12" />
          </svg>
        </div>
      </section>

      {/* SECTION 3: MESSAGE */}
      <section className="message-section">
        <div className="message-card animate-in" ref={addToRefs}>
          <h2 className="message-title gold-text">Para mi persona favorita</h2>
          <p className="message-text">
            "Así como Shrek y Fiona, nuestro amor es único, 
            divertido y para siempre. Feliz día de las Flores Amarillas."
          </p>
        </div>
      </section>

      {/* SECTION 4: SURPRISE */}
      <section 
        className="spotify-section"
        style={{ backgroundImage: `url('/sunflower_field_background.png')` }}
      >
        <div className="hero-overlay" style={{ background: 'rgba(0,0,0,0.5)' }}></div>
        <div className="final-content-wrapper animate-in" ref={addToRefs} style={{ zIndex: 10, textAlign: 'center' }}>
            <img src="/sunflower_asset.png" className="bouquet-img" alt="Ramo de Flores" />
            <Surprise />
        </div>
      </section>
    </div>
  );
}

export default App;
