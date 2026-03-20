export default function Intro() {
    return (
        <section className="intro-section">
            <h1 className="shrek-title">Feliz día de las<br/>FLORES AMARILLAS</h1>
            <p className="names-subtitle">Angelica & Fabian</p>
            <p className="date-text">28.09.25</p>
            <button className="scroll-btn" onClick={() => document.getElementById('surprise').scrollIntoView({ behavior: 'smooth' })}>
                VER SORPRESA
            </button>
        </section>
    );
}
