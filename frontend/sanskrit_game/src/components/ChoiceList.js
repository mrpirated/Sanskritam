import React from 'react';

import './ChoiceList.css';
import ChoiceCard from './ChoiceCard';

const ChoiceList = (props) => {

    //Dynamic list of choices
    return (
        <div className="choice-container">
            {
                props.letterList.map((letters, i) => {
                    /*Allows for dynamic number of choices*/
                    return (
                        <ChoiceCard key = {i /*For React to identify each letter through key*/} 
                        letter={props.letterList[i] /*Letter to display*/}/>
                    );
                })    
            }
        </div>
    );
    
}

export default ChoiceList;