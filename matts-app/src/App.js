import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [dogPhoto, setDogPhoto] = useState('https://images.dog.ceo/breeds/bulldog-english/jager-2.jpg');

  const getDogPhotoFunction = () => {
    axios.get('https://dog.ceo/api/breeds/image/random').then((res) => {
      setDogPhoto(res.data.message);
    })
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={dogPhoto} className="dog-photo" alt="DOGPHOTOCOMING" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Brayden made me do it
          <div/>
        </p>
        <button onClick={() => {
          getDogPhotoFunction();
        }}>GET A MOTHA FUCKING DOG PHOTO</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
