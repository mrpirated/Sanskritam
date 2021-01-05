import React, { useState } from 'react';

import './Utility.css';
import HintModal from './HintModal';
import SolnModal from './SolnModal';
import { word_data } from '../data/word_data';

//Main Button-Card component to store and display letters
const Utility = (props) => {

    const [hint_isOpen, hint_setIsOpen] = useState(false);
    const [soln_isOpen, soln_setIsOpen] = useState(false);
    
        return (

            <div className="utility-container">

                <div className="btn-container">
                    <div className="d-inline hint-container" >
                        <button type="button" className="btn btn-secondary" onClick={() => hint_setIsOpen(true) } >Get Hint</button>
                        <HintModal open={hint_isOpen} body={props.word.hint} close ={() => {hint_setIsOpen(false)} }/>
                    </div>

                    <div className="d-inline soln-container">
                        <button type="button" className="btn btn-danger" onClick={() => soln_setIsOpen(true)}>Solution</button>
                        <SolnModal open={soln_isOpen} body={props.word} close ={() => {soln_setIsOpen(false)} }/> 
                    </div>
                </div>    


            </div>
            
        );

}

function DiffClick() {
    alert("Difficulty clicked!");  //Modify Difficulty functionality here
}


export default Utility;