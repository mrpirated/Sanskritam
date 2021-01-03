import React from 'react';

import './WordCard.css';

//Main Button-Card component to store and display letters
const WordCard = (props) => {
    
        return (

            <div className="d-inline container" id="word-container">
                <button type="button" className="btn btn-light" onClick={()=>{ props.selection_event(props.index) } }> {props.letter} </button>  {/*onClick={cardClick()*/}
            </div>
            
        );

}


export default WordCard;