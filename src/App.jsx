import Flower from './components/Flower';
import { GrowingGrass, LongGrassSpecific } from './components/Grass';

function App() {
    const onLoad = () => {
        document.body.classList.remove("container");
    };

    import.meta.hot?.accept();

    setTimeout(() => {
        document.body.classList.remove("container");
    }, 100);

    return (
        <>
            <div className="night"></div>
            <div className="flowers">
                <Flower variant={1} />
                <Flower variant={2} />
                <Flower variant={3} />

                {/* Growth Long */}
                <div className="grow-ans" style={{ '--d': '1.2s' }}>
                    <div className="flower__g-long">
                        <div className="flower__g-long__top"></div>
                        <div className="flower__g-long__bottom"></div>
                    </div>
                </div>

                <GrowingGrass variant={1} />
                <GrowingGrass variant={2} />

                {/* Right Growth */}
                <div className="grow-ans" style={{ '--d': '2.4s' }}>
                    <div className="flower__g-right flower__g-right--1">
                        <div className="leaf"></div>
                    </div>
                </div>
                <div className="grow-ans" style={{ '--d': '2.8s' }}>
                    <div className="flower__g-right flower__g-right--2">
                        <div className="leaf"></div>
                    </div>
                </div>


                {/* Front Growth */}
                <div className="grow-ans" style={{ '--d': '2.8s' }}>
                    <div className="flower__g-front">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                            <div key={i} className={`flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--${i}`}>
                                <div className="flower__g-front__leaf"></div>
                            </div>
                        ))}
                        <div className="flower__g-front__line"></div>
                    </div>
                </div>


                {/* Front Right Leaves */}
                <div className="grow-ans" style={{ '--d': '3.2s' }}>
                    <div className="flower__g-fr">
                        <div className="leaf"></div>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                            <div key={i} className={`flower__g-fr__leaf flower__g-fr__leaf--${i}`}></div>
                        ))}
                    </div>
                </div>


                {/* Long Grass Series */}
                {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
                    <LongGrassSpecific key={i} variant={i} />
                ))}

            </div>
        </>
    );
}

export default App;
