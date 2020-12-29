import React from 'react';

import './WordList.css';
import WordCard from './WordCard';

const WordList = (props) => {
    
    //Dynamic list of choices
    return (
        <div className="word-container">
            {
                props.letterList.letters.map((letters, i) => {
                    /*Allows for dynamic number of choices*/
                    return (
                        <WordCard key = {i /*For React to identify each letter through key*/} 
                        letter={props.letterList.letters[i] /*Letter to display*/}/>
                    );
                })    
            }
        </div>
    );
    
}

export default WordList;