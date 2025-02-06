import React, { Component } from 'react';
import './index.css';

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫']
];

class Keyboard extends Component {
  render() {
    const { usedLetters, onKeyPress } = this.props;
    return (
      <div className="keyboard">
        {KEYBOARD_ROWS.map((row, i) => (
          <div key={i} className="keyboard-row">
            {row.map((key) => (
              <button
                key={key}
                onClick={() => onKeyPress(key)}
                className={`keyboard-key ${usedLetters[key] || ''}`}
              >
                {key}
              </button>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Keyboard;
