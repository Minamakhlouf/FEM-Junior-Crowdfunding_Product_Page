import "./Info.css"; 
import OptionContainer from "./OptionContainer";

function Info(props) {
    return (
        <div className="info__container">
            <div className="info__text">
                <h2 className="info__heading">About this project</h2>
                <p className="info__para">The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
                <p className="info__para">Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
            </div>
            <OptionContainer openModalHandler={props.openModalHandler}></OptionContainer>  
        </div>  
            
    )
}

export default Info; 