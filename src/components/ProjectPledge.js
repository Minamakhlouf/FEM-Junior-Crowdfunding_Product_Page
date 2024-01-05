import "./ProjectPledge.css"; 
import React, { useRef, useState } from "react"; 

const ProjectPledge = (props) => {
    const [inputError, setInputError] = useState(); 
    let pledgeInput = useRef(); 
    let radioClicked = props.info.title === props.isSelected; 
    
    const radioButtonClickHandler = () => {
        props.selectHandler(props.info.title); 
    }

    const pledgeSubmitHandler = (e) => {
        e.preventDefault(); 
        let input = pledgeInput.current.value;
        let regex = /[e|+|/]/gi
        let isDecimal = input.split("."); 
        if (Number(input) < props.info.minPledge) {
            setInputError(`Input must be greater than $${props.info.minPledge}. Please re-enter input correctly`)
        } else if (regex.test(input)) {
            setInputError(`Input can only contain digits 0-9. No special characters allowed. Please re-enter input correctly`); 
        } else if (Number(input) > 10000) {
            setInputError(`Pledge cannot exceed $10,000. Please re-enter input correctly.`); 
        } else if (isDecimal.length > 1 && isDecimal[1].length > 2) {
            setInputError("Input must be in valid currency format. Cannot exceed 2 decimal places.")
        } else {
            setInputError(""); 
            props.pledgePaidHandler(); 
        }
    }

    return (
        <div className={`project-pledge ${radioClicked ? "selected" : ""}`}>
            <div className="project-pledge__grid">
                <input onChange={radioButtonClickHandler} className="project-pledge__input" type="radio" name="pledge"/> 
                <div className="project-pledge__text-flex">
                    <h3 className="project-pledge__heading">{props.info.title}</h3>
                    {props.info.pledgeAmount? <p className="project-pledge__subheading">{props.info.pledgeAmount}</p> : null}
                </div>
                <p className="project-pledge__desc">{props.info.pledgeDescription}</p>
                {props.info.pledgesRemaining? <p className="project-pledge__pledges"><span className="project-pledge__bold">{props.info.pledgesRemaining}</span> left</p>: null}
            </div>
            {radioClicked ? <div className="project-pledge__dollar-container">
                <p className="project-pledge__number-title">{inputError ? inputError : "Enter Your Pledge:"}</p>
                <form className="project-pledge__form" onSubmit={pledgeSubmitHandler} noValidate>
                    <input ref={pledgeInput} className="project-pledge__number-input" type="number" placeholder="$" />
                    <button className="project-pledge__submit">Continue</button>
                </form>

            </div> : null }
            {props.info.isDisabled ? <div className="project-pledge__backdrop"></div> : null }
        </div>
    )
}; 

export default ProjectPledge; 