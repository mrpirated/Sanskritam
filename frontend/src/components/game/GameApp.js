import React, { Component } from 'react';

import ChoiceList from './components/ChoiceList';
import WordList from './components/WordList';
import ScoreCard from './components/ScoreCard';
import Utility from './components/Utility';
import SubmitModal from './components/SubmitModal';
import { choices_data } from './data/choices_data';
import { word_data } from './data/word_data';
import "./styles/GameApp.css"
import axios from 'axios';
class GameApp extends Component {
    
    constructor() {
        super()


        this.getword();
        this.state = {
            //User-related
            score: 0,

            //Game-related
            word_blank: [' ', ' ', ' '],     //letters to display
            choices: choices_data,            //choices for display
            word_info: word_data[0],      //word gotten from random generator

            //UI related
            selection: false,
            active_index: -1,
            showSubmitModal: false
        }
    }
    getword = () => {
        var word;
        axios.get("http://localhost:9000/game/getword")
            .then(res => {
                word = res.data
                console.log(word)
                var blank = new Array(word.split.length);
                var split =[...word.split];
                for (let i = 0; i < blank.length; i++) {
                    blank[i] = " ";
                }

                this.setState({
                    choices: split.sort(() => Math.random() - 0.5),
                    word_info: word,
                    word_blank: blank,
                })
            }
            );
    }

    geteasyword = () => {
        var word;
        axios.get("http://localhost:9000/game/getword/easy")
            .then(res => {
                word = res.data
                console.log(word)
                var blank = new Array(word.split.length);
                var split =[...word.split];
                for (let i = 0; i < blank.length; i++) {
                    blank[i] = " ";
                }

                this.setState({
                    choices: split.sort(() => Math.random() - 0.5),
                    word_info: word,
                    word_blank: blank,
                })
            }
            );
    }
    getmediumword = () => {
        var word;
        axios.get("http://localhost:9000/game/getword/medium")
            .then(res => {
                word = res.data
                console.log(word)
                var blank = new Array(word.split.length);
                var split = [...word.split];
                for (let i = 0; i < blank.length; i++) {
                    blank[i] = " ";
                }

                this.setState({
                    choices: split.sort(() => Math.random() - 0.5),
                    word_info: word,
                    word_blank: blank,
                })
            }
            );
    }
    gethardword = () => {
        var word;
        axios.get("http://localhost:9000/game/getword/hard")
            .then(res => {
                word = res.data
                console.log(word)
                var blank = new Array(word.split.length);
                var split = [...word.split];
                for (let i = 0; i < blank.length; i++) {
                    blank[i] = " ";
                }

                this.setState({
                    choices: split.sort(() => Math.random() - 0.5),
                    word_info: word,
                    word_blank: blank,
                })
            }
            );
    }
    
    // shuffle=(array)=> {
    //     array.sort(() => Math.random() - 0.5);
    //     return array;
    //   }



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
        if(JSON.stringify(this.state.word_blank)===JSON.stringify(this.state.word_info.split)) {
            this.setState({
                showSubmitModal: true,
                score: this.state.score + 8
                
            })
        }
        else {
            alert("Wrong answer");
            this.setState({
                score: this.state.score -2
                
            })
        }
    }

    //Goes to next word
    goNext = () => {
        this.setState({
            showSubmitModal: false
            
        })
        this.getword();
    }

    render() {

        return (
            <div id="game-container" >
                <SubmitModal view={this.state.showSubmitModal} info={this.state.word_info} close={this.goNext}/>
                <Utility word={this.state.word_info} />
                <ScoreCard currentScore={this.state.score} submit_event={this.onSubmit} />
                <WordList letterList={this.state.word_blank} selection_event={this.onWordSelect} />
                <ChoiceList letterList={this.state.choices} selection_event={this.onChoiceSelect} />
            </div>
        );

    }
}

export default GameApp;