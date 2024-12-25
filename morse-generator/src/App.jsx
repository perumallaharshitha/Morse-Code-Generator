import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

const morseCode = {
  A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.', H: '....',
  I: '..', J: '.---', K: '-.-', L: '.-..', M: '--', N: '-.', O: '---', P: '.--.',
  Q: '--.-', R: '.-.', S: '...', T: '-', U: '..-', V: '...-', W: '.--', X: '-..-',
  Y: '-.--', Z: '--..', 1: '.----', 2: '..---', 3: '...--', 4: '....-', 5: '.....',
  6: '-....', 7: '--...', 8: '---..', 9: '----.', 0: '-----', ' ': '/'
};

const App = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState('toMorse');

  const translate = () => {
    if (mode === 'toMorse') {
      setOutput(input.toUpperCase().split('').map(char => morseCode[char] || char).join(' '));
    } else {
      const morseToEnglish = Object.entries(morseCode).reduce((acc, [key, value]) => {
        acc[value] = key;
        return acc;
      }, {});
      setOutput(input.split(' ').map(code => morseToEnglish[code] || code).join(''));
    }
  };

  return (
    <div className="app p-5 bg-light">
        <h1 className="mb-4">Morse Code Translator</h1>
        <div className="d-flex justify-content-center mb-4">
          <button
            className={`btn me-3 ${mode === 'toMorse' ? 'btn-primary' : 'btn-light'} mr-2`}
            onClick={() => setMode('toMorse')}
          >
            English to Morse
          </button>
          <button
            className={`btn ms-3 ${mode === 'toEnglish' ? 'btn-primary' : 'btn-light'}`}
            onClick={() => setMode('toEnglish')}
          >
            Morse to English
          </button>
        </div>
        <textarea
          className="end form-control mb-3"
          placeholder={mode === 'toMorse' ? 'Enter English text' : 'Enter Morse code'}
          rows="3"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-success mb-3" onClick={translate}>
          Translate
        </button>
        <h3 class="mb-3" >Output</h3>
        <div className="end border p-3 bg-white">{output}</div>

    </div>
  );
};

export default App;
