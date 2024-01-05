import Heading from "./Heading"
import Progress from "./Progress"
import Info from "./Info"
import "./Project.css"; 

function Project(props) {
    return (
        <section className="project__section">
            <Heading openModalHandler={props.openModalHandler}></Heading>
            <Progress></Progress>
            <Info openModalHandler={props.openModalHandler}></Info>
        </section>
    )
}

export default Project; 