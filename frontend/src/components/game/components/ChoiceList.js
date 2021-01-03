import React , {Component} from 'react';

import './ChoiceList.css';
import ChoiceCard from './ChoiceCard';

class ChoiceList extends Component {

    render() {
        //Dynamic list of choices
        return (
            <div className="choice-container">
                <div className="positioning-container">
                {
                    this.props.letterList.map((letters, i) => {
                        /*Allows for dynamic number of choices*/
                        return (
                            <ChoiceCard key={i /*For React to identify each letter through key*/}
                                letter={this.props.letterList[i] /*Letter to display*/} 
                                selection_event={this.props.selection_event}
                            />
                        );
                    })
                }
                </div>
            </div>
        );
    }
    
}

export default ChoiceList;