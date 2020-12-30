import React from 'react';

import './Utility.css';

//Main Button-Card component to store and display letters
const Utility = (props) => {
    
        return (

            <div className="utility-container">
                
                <div className="d-inline diff-container" >
                    <button type="button" class="btn btn-warning" onClick={() => { DiffClick() }} >Difficulty</button>
                </div>

                <div className="btn-container">
                    <div className="d-inline hint-container" >
                        <button type="button" class="btn btn-secondary" onClick={() => { HintClick() }} >Get Hint</button>
                    </div>

                    <div className="d-inline soln-container">
                        <button type="button" class="btn btn-danger" onClick={() => { SolutionClick() }}>Solution</button>
                    </div>
                </div>    


            </div>
            
        );

}

function HintClick() {
    alert("Hint clicked!");  //Modify Hint functionality here
}

function SolutionClick() {
    alert("Solution clicked!");  //Modify Solution functionality here
}

function DiffClick() {
    alert("Difficulty clicked!");  //Modify Difficulty functionality here
}


export default Utility;