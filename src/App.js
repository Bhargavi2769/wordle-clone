import React, { Component } from 'react';
import { getRandomWord, WORD_LIST } from './data/words';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';
import './App.css';

class App extends Component {
  state = {
    targetWord: getRandomWord(),
    guesses: [],
    currentGuess: '',
    gameStatus: 'playing',
    message: '',
    attempts: 6,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.handleKeyPress('ENTER');
    } else if (e.key === 'Backspace') {
      this.handleKeyPress('⌫');
    } else {
      const key = e.key.toUpperCase();
      if (key.length === 1 && key >= 'A' && key <= 'Z') {
        this.handleKeyPress(key);
      }
    }
  };

  checkGuess = (guess, target) => {
    const result = Array(5).fill('absent');
    const targetLetters = target.split('');
    const guessLetters = guess.split('');

    guessLetters.forEach((letter, i) => {
      if (letter === targetLetters[i]) {
        result[i] = 'correct';
        targetLetters[i] = null;
      }
    });

    guessLetters.forEach((letter, i) => {
      if (result[i] !== 'correct' && targetLetters.includes(letter)) {
        result[i] = 'present';
        targetLetters[targetLetters.indexOf(letter)] = null;
      }
    });

    return result;
  };

  handleKeyPress = (key) => {
    const { gameStatus, currentGuess, guesses, targetWord, attempts } = this.state;
    if (gameStatus !== 'playing') return;

    if (key === 'ENTER') {
      if (currentGuess.length !== 5) {
        this.setState({ message: 'Word must be 5 letters' });
        return;
      }
      if (!WORD_LIST.includes(currentGuess)) {
        this.setState({ message: 'Not in word list. Please modify your guess.' });
        return;
      }
      const feedback = this.checkGuess(currentGuess, targetWord);
      const newGuesses = [...guesses, { word: currentGuess, feedback }];
      let newStatus = gameStatus;
      let newMessage = '';
      let newAttempts = attempts - 1;

      if (currentGuess === targetWord) {
        newStatus = 'won';
        newMessage = 'Congratulations! You Won';
      } else if (newAttempts === 0) {
        newStatus = 'lost';
        newMessage = `Game Over! The word was ${targetWord}`;
      }

      this.setState({
        guesses: newGuesses,
        currentGuess: '',
        gameStatus: newStatus,
        message: newMessage,
        attempts: newAttempts,
      });
    } else if (key === '⌫') {
      this.setState((prevState) => ({
        currentGuess: prevState.currentGuess.slice(0, -1),
        message: '',
      }));
    } else if (currentGuess.length < 5 && key.length === 1) {
      this.setState((prevState) => ({
        currentGuess: prevState.currentGuess + key,
        message: '',
      }));
    }
  };

  startNewGame = () => {
    this.setState({
      targetWord: getRandomWord(),
      guesses: [],
      currentGuess: '',
      gameStatus: 'playing',
      message: '',
      attempts: 6,
    });
  };

  getUsedLetters() {
    const { guesses, targetWord } = this.state;
    return guesses.reduce((acc, guessObj) => {
      const { word, feedback } = guessObj;
      word.split('').forEach((letter, index) => {
        if (feedback[index] === 'correct') {
          acc[letter] = 'correct';
        } else if (feedback[index] === 'present' && acc[letter] !== 'correct') {
          acc[letter] = 'present';
        } else if (!targetWord.includes(letter)) {
          acc[letter] = 'absent';
        }
      });
      return acc;
    }, {});
  }

  render() {
    const { guesses, currentGuess, gameStatus, message, attempts } = this.state;
    return (
      <div className="game-container">
        <div className="game-wrapper">
          <div className="game-content">
            <div className="game-header">
              <h1 className='heading'>Wordle Clone</h1>
              <button onClick={this.startNewGame} className="new-game-btn">
                New Game
              </button>
            </div>
            <div className='attempts'>Attempts Left: {attempts}</div>
            {message && <div className={`game-message ${gameStatus}`}>{message}</div>}
            <Grid guesses={guesses} currentGuess={currentGuess} />
            <Keyboard usedLetters={this.getUsedLetters()} onKeyPress={this.handleKeyPress} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
