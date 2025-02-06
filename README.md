
Wordle Clone Game

A simple word guessing game built using React. The game allows the player to guess a 5-letter word within six attempts. The game provides feedback on each guess, showing correct, present, and absent letters.

Features

Game Play: The player has six attempts to guess a randomly chosen 5-letter word.

Feedback: After each guess, feedback is provided with color-coded feedback:

Correct: Green, for letters that are in the correct position.
Present: Yellow, for letters that are in the word but not in the correct position.
Absent: Gray, for letters that are not in the word at all.

Keyboard: On-screen keyboard to input guesses. The used letters will show up with different colors depending on their status.

Responsive Design: Works on both desktop and mobile devices.

Getting Started

Prerequisites
Before running the app, ensure you have the following installed on your system:

Node.js (v12 or higher)
npm (comes with Node.js)

Installation

Clone the repository:

### git clone https://github.com/Bhargavi2769/wordle-clone.git

Navigate to the project directory:
bash
Copy
Edit

cd wordle-clone

Install the dependencies:
bash
Copy
Edit
npm install

Running the Project
To run the game locally, use the following command:

bash
Copy
Edit
npm start

This will run the app in development mode and open it in your default browser at http://localhost:3000.

The page will reload when you make changes to the code, and you may also see any lint errors in the console.

Game Flow

Start a new game by clicking the New Game button.
Input your guess using the on-screen keyboard or keyboard keys (A-Z, Enter, Backspace).
The game will end when you guess the word correctly or use all 6 attempts.

Additional Features and Enhancements
Word List: The word list includes 16 five-letter words, selected randomly for each new game.
Keyboard Interaction: You can also interact with the game by using physical keyboard keys for input.
Game State: The app manages game state, showing messages when the game is won or lost.
Customization
You can modify the word list and other game logic as needed. The game can also be enhanced with additional features like:

Adding difficulty levels.
Increasing the word list size.
Available Scripts
In the project directory, you can run:

npm start
Runs the app in development mode. Open http://localhost:3000 to view it in your browser.

npm test
Launches the test runner in interactive watch mode.

npm run build
Builds the app for production to the build folder. The app is ready to be deployed.

npm run eject
If you want to customize the build setup, you can eject the app. This is a one-way operation, and once you eject, you can't go back.

Learn More
To learn more about React, check out the official React documentation.

