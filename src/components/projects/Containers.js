import { Link } from "react-router-dom";

const Containers = ({ projects, slug }) => {
    const project_container = projects.filter((item) => item.slug !== slug);
    return (
        <section className="container_main">
        {project_container.map((element) => (
          <div key={element.id}>
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
      </section>
    )
}

export default Containers;