import ProjectPage from "../../components/pages/ProjectsPage";
import projects from "../../data/projects";

export default function ProjectDetail({ slug }) {
  return <ProjectPage slug={slug} />;
}

export function getStaticPaths() {
  return {
    paths: projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}
