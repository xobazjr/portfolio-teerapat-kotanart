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
          
      {/* <section className="container_main">
        {project_container.map((element, index) => (
          <div key={index}>
            <img src={element.image} alt={element.title} />
            <div className="container_between">
              <div className="container_left">
                <p>{element.title}</p>
                <p>{element.with}</p>
              </div>
              <div className="container_right">
                <Link to={`/projects/${element.slug}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
                  <path d="M0 0h32v32H0z" fill="none" />
                  <path fill="currentColor" d="m18.72 6.78l-1.44 1.44L24.063 15H4v2h20.063l-6.782 6.78l1.44 1.44l8.5-8.5l.686-.72l-.687-.72z" />
                </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section> */}
      <Footer/>
    </>
  );
};

export default ProjectPage;
