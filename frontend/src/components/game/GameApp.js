import React, { Component } from 'react';

import ChoiceList from './components/ChoiceList';
import WordList from './components/WordList';
import ScoreCard from './components/ScoreCard';
import Utility from './components/Utility';
import { choices_data } from './data/choices_data';
import { word_data } from './data/word_data';

class GameApp extends Component {

    constructor() {
        super()

        this.state = {
            //User-related
            score: 8000,
            difficulty: 'easy',

            //Game-related
            word_blank: [' ', ' ', ' '],         //letters to display
            choices: choices_data,               //choices for display
            word_info: word_data[0],             //word gotten from random generator

            //UI related
            selection: false,
            active_index: -1,
            showModal: false
        }
    }

    onWordSelect = (modification_index) => {
        //Changes and records the index of blank
        this.setState({ 
            active_index: modification_index, 
            selection: true
        });
    }

    onChoiceSelect = (choice_letter) => {
        //Choice gets registered into blank
        if (this.state.selection) {
            const changed_wordList = this.state.word_blank;
            changed_wordList[this.state.active_index] = choice_letter;

            this.setState({
                active_index: -1,
                word_blank: changed_wordList,
                selection: false
            });
        }
        //If no blank is selected
        else {
            alert("Select a blank first!");
        }
    }

    onSubmit = (event) => {
        //Word compared to original answer
        if(JSON.stringify(this.state.word_blank)===JSON.stringify(this.state.word_info.letters)) {
            alert("Correct answer");
        }
        else {
            alert("Wrong answer");
        }
    }

    render() {

        return(
            <div >
                <Utility />
                <ScoreCard currentScore={this.state.score} submit_event={this.onSubmit} />
                {/* <WordList letterList={this.state.word_blank} selection_event={this.onWordSelect} />       */}
                {/* <ChoiceList letterList={this.state.choices} selection_event={this.onChoiceSelect} />      */}
            </div>
        );

    }
}

export default GameApp;