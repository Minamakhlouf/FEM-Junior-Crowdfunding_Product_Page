import "./Progress.css"; 

function Progress() {
    return (
        <div className="progress__container">
            <div className="progress__information">
                <div className="progress__info">
                    <div className="progress__value">$89,914</div>
                    <div className="progress__property">of $100,000 backed</div>
                </div>
                <div className="progress__hor-line"></div>
                <div className="progress__info progress__info--padding progress__info--middle">
                    <div className="progress__value">5,007</div>
                    <div className="progress__property">total backers</div>
                </div>
                <div className="progress__hor-line"></div>
                <div className="progress__info progress__info--padding">
                    <div className="progress__value">56</div>
                    <div className="progress__property">days left</div>
                </div>
            </div>
            <progress value="89914" max="100000"></progress>
        </div>
    )
}

export default Progress; 