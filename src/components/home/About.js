import { useParallax } from "../../core/useParallax";
import AboutList from "./AboutList";

const About = ({items, education}) => {
    const { containerRef, bgRef } = useParallax(0.15, 0.08); 

    return (
        <section className="about parallax-container" ref={containerRef}>
        <div ref={bgRef} className="parallax-bg" style={{ backgroundImage: " linear-gradient(rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.90)), url('/assets/img/wallpapers/IMG_4103.jpg')" }}></div>
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

            <AboutList items={education} topic="Education" />
            <AboutList items={items} topic="Internship" />
        </section>
    )
}

export default About;