import Navbar from "../components/navigation/Navbar";
import Footer from "../components/footer/Footer";
import projects from "../data/projects";
import { Link } from "react-router-dom";

import { useRef } from "react";
import useTooltip from "../hooks/useTooltip";

const ProjectFullPage = () => {
    const imgRef = useRef(null);
    const {
        tooltip,
        pos,
        showTooltip,
        moveTooltip,
        hideTooltip
    } = useTooltip();
    return (
        <>
            <Navbar color="#ffffff" text_body="#000000" text_cv="#ffffff" bg_cv="#000000"/>
            <section className="project_full_page">
                <div className="project_full_page_title">
                    <p className="text-body-lg">PROJECTS</p>
                    <div>
                        <h1>THIS IS MY PROJECTS</h1>
                        <p className="text-small">
                            I build modern websites and applications using HTML, CSS, 
                            JavaScript, React, PHP, IoT, and Flutter. My projects focus on responsive design, 
                            performance, clean user experience, and scalable development across both web 
                            and mobile platforms.
                        </p>
                    </div>
                </div>
                <div className="project_full_page_main_card">
                    {projects.map((element) => (
                        <Link
                            to={`/projects/${element.slug}`}
                            onMouseEnter={(e) => showTooltip(e, imgRef, element.type)}
                            onMouseMove={moveTooltip}
                            onMouseLeave={hideTooltip}
                        >
                            <div className="card_projects_full_page">
                            <div className="card_projects_full_page__img_wrap">
                                <img src={element.image} alt={element.title} />
                                <svg
                                    className="card_projects_full_page__arrow"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                >
                                    <path d="M10.8101 1.96222L0.726954 12.0453L1.66171 12.9801L11.7448 2.89698L11.9344 9.4447L13.208 9.07311L13.0134 2.35278C12.9877 1.46249 12.2434 0.718185 11.3531 0.692412L4.80762 0.502924L4.43487 1.77539L10.8101 1.96222Z" fill="white" stroke="white" strokeWidth="0.542084"/>
                                </svg>
                            </div>
                                <div className="title_projects_full_page text-body-lg">
                                    <p>{element.title}</p>
                                    <p>{element.with}</p>
                                </div>
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
                        </Link>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ProjectFullPage;