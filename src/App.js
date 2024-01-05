import React, {useState} from "react"; 
import './App.css';
import Navigation from "./components/Navigation"; 
import Project from "./components/Project"; 
import BackProject from "./components/BackProject"; 

function App() {
  const [showModal, setShowModal] = useState(false); 
  
  const closeModalHandler = () => {
    setShowModal(false); 
  }

  const openModalHandler = () => {
    setShowModal(true); 
    window.scrollTo({top: 0, left: 0, behavior: "smooth"}); 
  }

  return (
    <div className="app">
      <Navigation></Navigation>
      <Project openModalHandler={openModalHandler}></Project>
      {showModal ? <BackProject closeModalHandler={closeModalHandler}></BackProject> : null }
    </div>
  );
}

export default App;
