import { useRef } from "react";
import useTooltip from "../../hooks/useTooltip";

const Home = () => {
    const imgRef = useRef(null);
    const {
        tooltip,
        pos,
        showTooltip,
        moveTooltip,
        hideTooltip
    } = useTooltip();

    return (
        <section className='home'>
            <div className='home_top'>
                <h1 className='text-h1'>XO</h1>
                <h1 className='text-h1'>Z</h1>
                <div>
                    <a
                        href='https://www.youtube.com/@XobazJr'
                        className='text-small'
                        target='_blank'
                        rel="noopener noreferrer"
                        onMouseEnter={(e) =>
                            showTooltip(
                                e,
                                imgRef,
                                "XobazJr"
                            )
                        }
                        onMouseMove={moveTooltip}
                        onMouseLeave={hideTooltip}
                    >
                        YouTube
                    </a>

                    <a
                        href='assets/documents/teerapat_kotanart_cv.pdf'
                        className='text-small home_cv'
                        download
                        rel="noopener noreferrer"
                        onMouseEnter={(e) =>
                            showTooltip(
                                e,
                                imgRef,
                                "Download CV"
                            )
                        }
                        onMouseMove={moveTooltip}
                        onMouseLeave={hideTooltip}
                    >
                        Request CV
                    </a>
                </div>
            </div>
            <div className='home_center'>
                <p className='text-small'>XobazJr</p>
                <h3 className='text-h3'>
                    Teerapat Kotanart
                </h3>
                <p className='text-small'>
                    Full-Stack Development
                </p>
            </div>
            <div className='home_bottom'>
                <h1 className='text-h1'>BA</h1>
                <h1 className='text-h1'>JR</h1>
            </div>
            {tooltip && (
                <div
                    className="projects__tooltip"
                    style={{
                        backgroundColor: tooltip.bg,
                        color: tooltip.color,
                        top: pos.y + 16,
                        left: pos.x + 16,
                    }}
                >
                    {tooltip.text}
                </div>
            )}
        </section>
    );
}

export default Home;