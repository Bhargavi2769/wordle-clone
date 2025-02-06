import React, { Component } from 'react';
import './index.css';

class Grid extends Component {
  render() {
    const { guesses, currentGuess } = this.props;
    const totalRows = 6;
    return (
      <div className="grid">
        {Array(totalRows)
          .fill(null)
          .map((_, rowIndex) => {
            const isSubmitted = rowIndex < guesses.length;
            const word = isSubmitted ? guesses[rowIndex].word : (rowIndex === guesses.length ? currentGuess : '');
            const letters = word.padEnd(5, ' ').split('');
            return (
              <div key={rowIndex} className="grid-row">
                {letters.map((letter, index) => {
                  let className = 'grid-cell';
                  if (isSubmitted && letter.trim()) {
                    const status = guesses[rowIndex].feedback[index];
                    className += ` ${status}`;
                  }
                  return (
                    <div key={index} className={className}>
                      {letter.trim()}
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
    );
  }
}

export default Grid;