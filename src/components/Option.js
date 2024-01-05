import "./Option.css"; 

function Option(props) {
    return (
        <div className="option__container">
            <div className="option__headings">
                <h3>{props.data.heading}</h3>
                <p>{props.data.pledge}</p>
            </div>
            <p className="option__paragraph">{props.data.paragraph}</p>
            <div className="option__info">
                <div className="option__left">{props.data.placesLeft} <span>left</span></div>
                <button onClick={props.openModalHandler} className="option__btn" disabled={props.data.disabled}>{props.buttonText}</button>
            </div>
        </div>
    )
}

export default Option; 