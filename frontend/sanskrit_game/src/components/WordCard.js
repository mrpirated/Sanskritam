import React from 'react';

import './WordCard.css';

//Main Button-Card component to store and display letters
const WordCard = (props) => {
    
        return (

            <div className="d-inline container">
                <button type="button" className="btn btn-light" onClick={()=>{ wordClick(props.letter) } }> {props.letter} </button>  {/*onClick={cardClick()*/}
            </div>
            
        );

}

function wordClick(text) {
    alert(text +" clicked!");  //Modify card functionality here
}


export default WordCard;