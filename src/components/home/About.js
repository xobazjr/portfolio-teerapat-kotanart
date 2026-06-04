import { useParallax } from "../../core/useParallax";
import AboutList from "./AboutList";

const About = ({items, education}) => {
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
                />
                <div className="about_right_center">
                    <p className="text-body">King Mongkut's University of Technology North Bangkok</p>
                    <p className="text-body">Computer Science</p>
                </div>
            </div> */}
            <AboutList items={items} topic="Internship" />
            <AboutList items={education} topic="Education" />
        </section>
    )
}

export default About;