export default function Flower({ variant = 1 }) {
    const lineLeaves = variant === 1 ? 6 : 4;

    return (
        <div className={`flower flower--${variant}`}>
            <div className={`flower__leafs flower__leafs--${variant}`}>
                {/* Main Flower petals */}
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`flower__leaf flower__leaf--${i}`}></div>
                ))}
                <div className="flower__white-circle"></div>

                {/* Lights */}
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className={`flower__light flower__light--${i}`}></div>
                ))}
            </div>

            <div className="flower__line">
                {Array.from({ length: lineLeaves }, (_, i) => i + 1).map((i) => (
                    <div key={i} className={`flower__line__leaf flower__line__leaf--${i}`}></div>
                ))}
            </div>
        </div>
    );
}
