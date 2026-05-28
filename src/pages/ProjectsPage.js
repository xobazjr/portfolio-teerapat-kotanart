import { useParams } from "react-router-dom";
import { useRef } from "react";

import projects from "../data/projects";

import useTooltip from "../hooks/useTooltip";

import Navbar from "../components/navigation/Navbar";
import Footer from "../components/footer/Footer";
import Containers from "../components/projects/Containers"

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const imgRef = useRef(null);
  const { tooltip, pos, showTooltip, moveTooltip, hideTooltip } = useTooltip();
  if (!project) {
    return <h1>Project Not Found</h1>;
  }
  return (
    <>
      <Navbar/>
      <section className="Project_Page">
        <div className="Project_Page_Top">
          <h3 className="text-body-lg">{project.title}</h3>
          <p className="text-body-lg">{project.type}</p>
          <div className="Project_Page_Image">
            <img
              ref={imgRef}
              src={project.image}
              alt={project.title}
              crossOrigin="anonymous"
              loading="lazy"
              onMouseEnter={(e) => showTooltip(e, imgRef, project.title)}
              onMouseMove={moveTooltip}
              onMouseLeave={hideTooltip}
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
          </div>
        </div>
        <div className="Project_Page_Bottom">
          <p className="text-body">{project.detail}</p>
          {project.link_to ? (
            <a
              className="text-body-lg"
              href={project.link_to.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) => showTooltip(e, null, "Link")}
              onMouseMove={moveTooltip}
              onMouseLeave={hideTooltip}
            >
              {project.link_to.type}
            </a>
          ) : (
            <p className="text-body-lg">{project.type}</p>
          )}
        </div>
      </section>
      <Containers projects={projects} slug={project.slug}/>
      <Footer/>
    </>
  );
};

export default ProjectPage;
