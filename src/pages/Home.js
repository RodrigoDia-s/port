import { Banner } from "../Components/Banner";
import { Skills } from "../Components/Skills";
import { Projects } from "../Components/Projects";
import { Contact } from "../Components/Contact";

export const Home = () => {
    return (
        <div> <Banner />
        <Skills />
        <Projects />
        <Contact />
        </div>
    )
}

export default Home;