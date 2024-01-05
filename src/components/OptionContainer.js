import Option from "./Option"; 
import "./OptionContainer.css"; 

function OptionContainer(props) {
    const options = [
        {
            heading: "Bamboo Stand", 
            paragraph: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.", 
            pledge: "Pledge $25 or more",
            placesLeft: 101, 
            disabled: false
        }, 
        {
            heading: "Black Edition Stand", 
            paragraph: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.", 
            pledge: "Pledge $75 or more",
            placesLeft: 64, 
            disabled: false
        }, 
        {
            heading: "Mahogany Special Edition", 
            paragraph: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list.  Shipping is included.", 
            pledge: "Pledge $200 or more",
            placesLeft: 0, 
            disabled: true
        }
    ]

    return (
        <div className="options__container">
            <Option openModalHandler={props.openModalHandler} data={options[0]} buttonText="Select Reward"></Option>
            <Option openModalHandler={props.openModalHandler} data={options[1]} buttonText="Select Reward"></Option>
            <Option openModalHandler={props.openModalHandler} data={options[2]} buttonText="Out of Stock"></Option>
        </div>
    )
}

export default OptionContainer; 