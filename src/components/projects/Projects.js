import { useRef } from "react";
import useTooltip from "../../hooks/useTooltip";
import { Link } from "react-router-dom";

const ProjectCard = ({ element }) => {
    const imgRef = useRef(null);
    const {
        tooltip,
        pos,
        showTooltip,
        moveTooltip,
        hideTooltip
    } = useTooltip();

    return (
        <div className="projects__card">
            <Link
                to={`/projects/${element.slug}`}
                className="projects__img-wrapper"
                onMouseEnter={(e) =>
                    showTooltip(
                        e,
                        imgRef,
                        element.type
                    )
                }
                onMouseMove={moveTooltip}
                onMouseLeave={hideTooltip}
            >
                <img
                    ref={imgRef}
                    src={element.image}
                    alt={element.alt}
                    crossOrigin="anonymous"
                    loading="lazy"
                />
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
            <div className="projects__title">
                <h3 className="text-h3">
                    {element.title}
                </h3>
                <p className="text-body-lg chivo">
                    ×
                </p>
                <h3 className="projects__type text-h3">
                    {element.with}
                </h3>
            </div>
        </div>
    );
};

const Projects = ({ items }) => {
    return (
        <section className="projects">
            <div className="projects__header">
                <p className="text-small">
                    This is my
                </p>
                <h2 className="text-h2 inter_tight">
                    PROJECTS
                </h2>
                <p className="text-small">
                    Computer Science
                </p>
            </div>

            <div className="projects__grid">
                {items.map((element, index) => (
                    <ProjectCard
                        key={element.id}
                        element={element}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;