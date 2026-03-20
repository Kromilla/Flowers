import React from 'react';

const Surprise = () => {
    return (
        <div className="glass-card">
            <h2 className="spotify-title">Nuestra Canción</h2>
            <div className="spotify-embed">
                <iframe 
                    style={{ borderRadius: '20px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)' }} 
                    src="https://open.spotify.com/embed/track/5Iu561rzONjxcGQYZRwwYw?utm_source=generator" 
                    width="100%" 
                    height="152" 
                    frameBorder="0" 
                    allowFullScreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy">
                </iframe>
            </div>
            <p className="message-text" style={{ color: 'white', marginTop: '1.5rem', fontSize: '1rem', opacity: 0.8 }}>
                "No importa lo que pase, siempre serás mi final feliz."
            </p>
        </div>
    );
};

export default Surprise;
