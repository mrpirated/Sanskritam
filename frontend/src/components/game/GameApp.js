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
    
    constructor(props) {
        super(props)
        //console.log(props)
        if(props.loggedin===false){
            window.location = "/login"
        }
        this.getword();
        this.state = {
            user:props.user,
            //User-related
            score: props.user.points,
            daypoints:props.user.daypoints,

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
                //console.log(word)
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
                score: this.state.score + 8,
                daypoints: this.state.daypoints + 8
            });
            console.log(this.state);
            const user = {
                _id: this.state.user._id,
                points: this.state.score+8,
                daypoints: this.state.daypoints+8
            };
            console.log(user)
            axios.post("http://localhost:9000/updatescores",user)
            .then(res => console.log(res.json()))
            .catch(err=> console.log(err));
        }
        else {
            alert("Wrong answer");
            this.setState({
                score: this.state.score -2,
                daypoints: this.state.daypoints -2
            })
            const user = {
                _id: this.props.user._id,
                points: this.state.score-2,
                daypoints: this.state.daypoints-2
            }
            axios.post("http://localhost:9000/updatescores",user)
            .then(res => res.json())
            .catch(err=> console.log(err));
        }
    }
    

    //Goes to next word
    goNext = () => {
        this.setState({
            showSubmitModal: false
        })
        this.getword();
    }

    //Logs-Out
    logout = () => {
        window.location = "/login"
    }

    render() {

        return (
            <>
            <div id="logout-container">
                    <button type="button" className="btn btn-outline-danger" onClick={ () => this.logout() }>Log-Out</button>
            </div>

            <div id="game-container" >
                <SubmitModal view={this.state.showSubmitModal} info={this.state.word_info} close={this.goNext}/>
                <Utility word={this.state.word_info} />
                <ScoreCard currentScore={this.state.score} submit_event={this.onSubmit} />
                <WordList letterList={this.state.word_blank} selection_event={this.onWordSelect} />
                <ChoiceList letterList={this.state.choices} selection_event={this.onChoiceSelect} />
            </div>
            </>
        );

    }
}

export default GameApp;