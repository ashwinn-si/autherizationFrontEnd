import HomePage from "./LandingPage/HomePage";
import NavBar from "../Components/LandingPage/NavBar";
import ArchDiagramPage from "./LandingPage/ArchDiagramPage";
import DocumentationPage from "./LandingPage/DocumentationPage";

function LandingPage() {
    return(
        <>
            <NavBar />
            <section id="home">
                <HomePage />
            </section>
            <section id="arch-diagram">
                <ArchDiagramPage />
            </section>
            <section id="documentation">
                <DocumentationPage />
            </section>
        </>


    )
}
export default LandingPage;