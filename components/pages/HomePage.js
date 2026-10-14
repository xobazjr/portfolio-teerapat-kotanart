import Home from "../home/Home";
import Menu from "../menu/Menu";
import Projects from "../projects/Projects";
import Footer from "../footer/Footer";
import About from "../home/About";

import list_menu from "../../data/menu";
import projects from "../../data/projects";
import company from "../../data/company";
import education from "../../data/education";

const HomePage = () => {
    return (
        <>
            <Home />
            <Menu items={list_menu} />
            <Projects items={projects}/>
            <About items={company} education={education}/>
            <Footer />
        </>
    );
};

export default HomePage;
