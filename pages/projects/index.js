import ProjectFullPage from "../../components/pages/ProjectFullPage";
import projects from "../../data/projects";

export default function ProjectsIndex() {
  return <ProjectFullPage items={projects} />;
}
