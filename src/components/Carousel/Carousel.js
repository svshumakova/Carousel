import React, { Component } from 'react';

import loadData from '../../HOC/loadData';
import { fetchWords } from '../../api/api';
import Card from './Card';
import './carousel.css';
class Carousel extends Component {
  componentDidMount() {
    this.props.setWords();
  }

  render() {
    return (
        <div className="carousel">
          <button className="arrow"> &lt; </button>
          <div className="itemsList">
            {this.props.words ? this.props.words.map((wordObj) => {
              return <Card word={wordObj.word} />;
            }) : null}
          </div>
          <button className="arrow"> &gt; </button>
        </div>
    );
  }
}

const wrapper = loadData(fetchWords, 'setWords', 'words');
export default wrapper(Carousel);
//const translationData = loadData(getTranslation, 'setTranslation', 'translation');
//export default translationData(Carousel);