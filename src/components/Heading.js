import React, {useState} from "react"; 
import logoMastercraft from "../images/logo-mastercraft.svg"; 
import bookmarkBtn from "../images/icon-bookmark.svg";
import "./Heading.css"; 

function Heading(props) {
    let btnProps = {
        btnContent: "Bookmark", 
        btnBackground: "", 
        bookmarkColor: "#2f2f2f"
    }
    
    const [button, setButton] = useState(btnProps); 

    function clickHandler() {
        if (button.btnBackground === "") {
            setButton({
                ...button, 
                btnContent: "Bookmarked", 
                btnBackground: "bookmarked__true", 
                bookmarkColor: "hsl(176, 72%, 28%)"
            }); 
        } else {
            setButton({
                ...button, 
                btnContent: "Bookmark", 
                btnBackground: "", 
                bookmarkColor:"#2f2f2f"
            }); 
        }
    }

    return (
        <div className="project__heading">
            <img className="heading__logo" src={logoMastercraft} alt="Mastercraft Logo"/>
            <div className="project__text">
                <h1 className="project__header">Mastercraft Bamboo Monitor Riser</h1>
                <p>A beautiful and handcrafted monitor stand to reduce neck and eye strain</p>
            </div>
            <div className="project__btn-container">
                <button className="project__btn project__btn--green" onClick={props.openModalHandler}>Back this Project</button>
                <div className={ `project__btn project__btn--flex ${button.btnBackground}` } onClick={clickHandler}>
                    <svg width="56" height="56" xmlns={bookmarkBtn}><g fill="none" fillRule="evenodd"><circle fill={button.bookmarkColor} cx="28" cy="28" r="28"/><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
                    <span>{button.btnContent}</span>
                </div>
            </div>
        </div>
    )
}

export default Heading; 