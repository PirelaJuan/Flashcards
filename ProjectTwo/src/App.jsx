import './App.css';
import { useState } from 'react';

const App = () => {
  const flashCard = [
    {
      question: 'What does CPU stand for in computer hardware?',
      answer: 'Central Processing Unit.'
    },
    {
      question: 'What is an API?',
      answer: 'Application Programming Interface.'
    },
    {
      question: 'What does HTML stand for in web development?',
      answer: 'HyperText Markup Language'
    },
    {
      question: 'In Java, which keyword is used to inherit a class?',
      answer: 'extends'
    },
    {
      question: 'Which data structure follows the LIFO (Last In, First Out) principle?',
      answer: 'Stack'
    },
    {
      question: 'What does the "if" statement do in programming?',
      answer: 'It evaluates a condition and executes code if the condition is true'
    },
    {
      question: 'What is Git used for in software development?',
      answer: 'Version control and source code management'
    },
    {
      question: 'What does the term "open-source" refer to in software development?',
      answer: 'Software with source code that anyone can inspect, modify, and enhance.'
    },
    {
      question: 'What does CRUD stand for in database operations?',
      answer: 'Create, Read, Update, Delete'
    },
    {
      question: 'What is the purpose of an SSL certificate on a website?',
      answer: 'To encrypt data between a web server and a browser for secure communication.'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); 
  const [showAnswer, setShowAnswer] = useState(false);
  const [userGuess, setUserGuess] = useState(''); 
  const [feedback, setFeedback] = useState(''); 

  
  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashCard.length);
    setShowAnswer(false);
    setFeedback('');
    setUserGuess('');
  };

  
  const previousCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashCard.length) % flashCard.length);
    setShowAnswer(false);
    setFeedback('');
    setUserGuess('');
  };

  
  const handleGuessSubmit = () => {
    if (userGuess.trim().toLowerCase() === flashCard[currentIndex].answer.toLowerCase()) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect, try again!');
    }
  };

  // Handle Random card selection
  const handleRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * flashCard.length);
    setCurrentIndex(randomIndex);
    setShowAnswer(false);
    setFeedback('');
    setUserGuess('');
  };

  return (
    <div className="App">
      <div className="header">
        <h2>The ultimate Computer Scientist and Engineer QUIZ</h2>
        <h4>How much do you know about technology? Challenge yourself here!!</h4>
        <h5>Cards number: {flashCard.length}</h5>
      </div>
      <br />
      <div className={`card ${showAnswer ? 'flipped' : ''}`} onClick={() => setShowAnswer(!showAnswer)}>
        {!showAnswer ? (
          <div className="card-front">
            <h3>{flashCard[currentIndex].question}</h3>
          </div>
        ) : (
          <div className="card-back">
            <h3>{flashCard[currentIndex].answer}</h3>
          </div>
        )}
      </div>
      <div className='user-input'>
        Guess the answer {' '}
        <input
          type="text"
          placeholder='Enter a Guess'
          value={userGuess} 
          onChange={(e) => setUserGuess(e.target.value)} 
        />
        <button onClick={handleGuessSubmit}>Submit</button>
      </div>
      {feedback && <p className="feedback">{feedback}</p>}
      <div>
        <button onClick={previousCard}>Previous</button>
        <button onClick={nextCard}>Next</button>
        <button onClick={handleRandomCard}>Random Card</button>
      </div>
    </div>
  );
};

export default App;
