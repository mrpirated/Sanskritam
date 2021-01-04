import React from 'react';

import './ChoiceCard.css';

//Main Button-Card component to store and display letters
const ChoiceCard = (props) => {
    
        return (

            <div className="d-inline container">
                <button type="button" className="btn btn-primary" onClick={()=>{ props.selection_event(props.letter) } }> {props.letter} </button>  {/*onClick={cardClick()*/}
            </div>
            
        );

}


export default ChoiceCard;