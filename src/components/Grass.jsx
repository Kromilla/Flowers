export function GrowingGrass({ variant = 1 }) {
    return (
        <div className="growing-grass">
            <div className={`flower__grass flower__grass--${variant}`}>
                <div className="flower__grass--top"></div>
                <div className="flower__grass--bottom"></div>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className={`flower__grass__leaf flower__grass__leaf--${i}`}></div>
                ))}
                <div className="flower__grass__overlay"></div>
            </div>
        </div>
    );
}

export function LongGrass({ variant = 0, delay = '4s', leaves = 4 }) {
    return (
        <div className={`long-g long-g--${variant}`}>
            {Array.from({ length: leaves }, (_, i) => i).map((i) => {
                const d = (parseFloat(delay) + i * 0.2) + 's';
                return (
                    <div key={i} className="grow-ans" style={{ '--d': d }}>
                        <div className={`leaf leaf--${i}`}></div>
                    </div>
                )
            })}
        </div>
    );
}

export function LongGrassSpecific({ variant }) {
    const leavesConfig = {
        0: [
            { id: 0, delay: '3s' },
            { id: 1, delay: '2.2s' },
            { id: 2, delay: '3.4s' },
            { id: 3, delay: '3.6s' },
        ],
        1: [
            { id: 0, delay: '3.6s' },
            { id: 1, delay: '3.8s' },
            { id: 2, delay: '4s' },
            { id: 3, delay: '4.2s' },
        ],
        2: [
            { id: 0, delay: '4s' },
            { id: 1, delay: '4.2s' },
            { id: 2, delay: '4.4s' },
            { id: 3, delay: '4.6s' },
        ],
        3: [
            { id: 0, delay: '4s' },
            { id: 1, delay: '4.2s' },
            { id: 2, delay: '3s' },
            { id: 3, delay: '3.6s' },
        ],
        4: [
            { id: 0, delay: '4s' },
            { id: 1, delay: '4.2s' },
            { id: 2, delay: '3s' },
            { id: 3, delay: '3.6s' },
        ],
        5: [
            { id: 0, delay: '4s' },
            { id: 1, delay: '4.2s' },
            { id: 2, delay: '3s' },
            { id: 3, delay: '3.6s' },
        ],
        6: [
            { id: 0, delay: '4.2s' },
            { id: 1, delay: '4.4s' },
            { id: 2, delay: '4.6s' },
            { id: 3, delay: '4.8s' },
        ],
        7: [
            { id: 0, delay: '3s' },
            { id: 1, delay: '3.2s' },
            { id: 2, delay: '3.5s' },
            { id: 3, delay: '3.6s' },
        ]
    };

    const config = leavesConfig[variant] || [];

    return (
        <div className={`long-g long-g--${variant}`}>
            {config.map((leaf) => (
                <div key={leaf.id} className="grow-ans" style={{ '--d': leaf.delay }}>
                    <div className={`leaf leaf--${leaf.id}`}></div>
                </div>
            ))}
        </div>
    )
}
