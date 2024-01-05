import React, {useState} from "react"; 
import xButton from "../images/icon-close-modal.svg"; 
import checkLogo from "../images/icon-check.svg"; 
import { pledgeInformation } from "./data";
import ProjectPledge from "./ProjectPledge";
import "./BackProject.css"; 

const BackProject = (props) => {
    const [selected, setSelected] = useState(""); 
    const [pledgePaid, setPledgePaid] = useState(false);  

    const selectHandler = (title) => {
        setSelected(title); 
    }

    const pledgePaidHandler = () => {
        setPledgePaid(true); 
    }

    return (
        <section className="back-project__modal"> 
            <div className="back-project__backdrop" onClick={props.closeModalHandler}></div>
            {!pledgePaid ? 
            <div className='back-project__pledges'>
                <div className="back-project__heading">
                    <h2>Back this project</h2>
                    <img onClick={props.closeModalHandler} src={xButton} alt="close modal button"/>
                </div>
                <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                <ProjectPledge info={pledgeInformation[0]} isSelected={selected} selectHandler={selectHandler} pledgePaidHandler={pledgePaidHandler}/>
                <ProjectPledge info={pledgeInformation[1]} isSelected={selected} selectHandler={selectHandler} pledgePaidHandler={pledgePaidHandler}/>
                <ProjectPledge info={pledgeInformation[2]} isSelected={selected} selectHandler={selectHandler} pledgePaidHandler={pledgePaidHandler}/>
                <ProjectPledge info={pledgeInformation[3]} isSelected={selected} selectHandler={selectHandler} pledgePaidHandler={pledgePaidHandler}/>
            </div>
            :
            <div className="back-project__confirmation">
                <img src={checkLogo} alt="Checkmark Logo"/>
                <h2>Thanks for your support!</h2>
                <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
                <button onClick={props.closeModalHandler}>Got it!</button>
            </div>
            }
        </section>

    )
}

export default BackProject; 