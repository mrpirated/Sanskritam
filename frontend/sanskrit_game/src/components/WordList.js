import React, {Component} from 'react';

import './WordList.css';
import WordCard from './WordCard';

class WordList extends Component  {
    
    render() {
        //Dynamic list of words on display
        return (
            <div className="word-container">
                {
                    this.props.letterList.map((letters, i) => {
                        /*Allows for dynamic number of choices*/
                        return (
                            <WordCard key={i /*For React to identify each letter through key*/}
                                letter={this.props.letterList[i] /*Letter to display*/} 
                                index={i} 
                                selection_event={this.props.selection_event}
                            />
                        );
                    })
                }
            </div>
        );
    }
    
}



export default WordList;