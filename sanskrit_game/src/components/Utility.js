import React, { useState } from 'react';

import './Utility.css';
import HintModal from './HintModal';
import SolnModal from './SolnModal';

//Main Button-Card component to store and display letters
const Utility = (props) => {

    const [hint_isOpen, hint_setIsOpen] = useState(false);
    const [soln_isOpen, soln_setIsOpen] = useState(false);
    
        return (

            <div className="utility-container">
                
                <div className="d-inline diff-container" >
                    <button type="button" className="btn btn-warning" onClick={() => { DiffClick() }} >Difficulty</button>
                </div>

                <div className="btn-container">
                    <div className="d-inline hint-container" >
                        <button type="button" className="btn btn-secondary" onClick={() => hint_setIsOpen(true) } >Get Hint</button>
                        <HintModal open={hint_isOpen} body={"Hint clicked!"} close ={() => {hint_setIsOpen(false)} }/>
                    </div>

                    <div className="d-inline soln-container">
                        <button type="button" className="btn btn-danger" onClick={() => soln_setIsOpen(true)}>Solution</button>
                        <SolnModal open={soln_isOpen} body={"Solution clicked!"} close ={() => {soln_setIsOpen(false)} }/>
                    </div>
                </div>    


            </div>
            
        );

}

function DiffClick() {
    alert("Difficulty clicked!");  //Modify Difficulty functionality here
}


export default Utility;