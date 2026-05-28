import Home from "../components/home/Home";
import Menu from "../components/menu/Menu";
import Projects from "../components/projects/Projects";
import Footer from "../components/footer/Footer";

import list_menu from "../data/menu";
import projects from "../data/projects";

const HomePage = () => {
    return (
        <>
            <Home />
            <Menu items={list_menu} />
            <Projects items={projects} />
            <Footer />
        </>
    );
};

export default HomePage;