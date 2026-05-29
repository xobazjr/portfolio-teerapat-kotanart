import { useParallax } from "../../core/useParallax";

const About = ({items}) => {
    const aboutRef = useParallax(0.1);
    return (
        <section className="about parallax-section" ref={aboutRef}>
            <div className="about_top">
                <div className="about_topic">
                    <h2 className="text-h3">About Me /</h2>
                    <p className="text-body">
                        I&apos;m a Full Stack Developer <br/>
                        focused on building modern and high-quality websites.
                    </p>
                </div>
                <div className="about_left_right">
                    <img src="/assets/img/wallpapers/goIT.webp" alt="" />
                    <p className="text-body-lg">
                        “We don&apos;t just build websites.<br/> 
                        We build digital experiences.”
                    </p>
                </div>
            </div>
            {/* <div className="about_center">
                <div className="about_topic">
                    <h2 className="text-h3">Education /</h2>
                    <p className="text-body-lg"> 
                        2023 - Present
                    </p>
                </div>
                <img 
                    src="/assets/img/logo/Logo_KMUTNB_ENG.png" 
                    alt="" 
                    onMouseEnter={(e) => showTooltip(e, imgRef, "King Mongkut's University of Technology North Bangkok")}
                    onMouseMove={moveTooltip}
                    onMouseLeave={hideTooltip}
                />
                <div className="about_right_center">
                    <p className="text-body">King Mongkut's University of Technology North Bangkok</p>
                    <p className="text-body">Computer Science</p>
                </div>
            </div> */}
            <div>
                <div className="about_topic">
                    <h2 className="text-h3">Internship /</h2>
                </div>
                <div className="about_card">
                    {items.map((element) => (
                        <div key={element.id}>
                            <img
                                src={element.img} 
                                alt=""
                            />
                            <h3>{element.title}</h3>
                            <p>{element.detail}</p>
                            <div className="about_card_btn">
                                <a 
                                    href="https://allmassgroup.com/" 
                                    target="_blank" 
                                    rel="noopener 
                                    noreferrer"
                                >
                                    Website
                                </a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="0.5em" height="1em" viewBox="0 0 12 24">
                                    <path d="M0 0h12v24H0z" fill="none" />
                                    <defs>
                                        <path id="SVG1pzpbdYY" fill="currentColor" d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z" />
                                    </defs>
                                    <use fill-rule="evenodd" href="#SVG1pzpbdYY" transform="rotate(-180 5.02 9.505)" />
                                </svg>
                            </div>
                        </div>
                    ))}
                    </div>
            </div>
        </section>
    )
}

export default About;