import React, { Component } from 'react';

import ChoiceList from './components/ChoiceList';
import WordList from './components/WordList';
import ScoreCard from './components/ScoreCard';
import { choices_data } from './data/choices_data';
import { word_data } from './data/word_data';

class GameApp extends Component {
    render() {

        return(
            <div>
                <ScoreCard currentScore={800} />
                <WordList letterList={word_data[0]} />       {/* Pass the selected word's array of letters here */}
                <ChoiceList letterList={choices_data} />     {/* Pass the custom generated array of choice-letters here */}
            </div>
        );

    }
}

export default GameApp;