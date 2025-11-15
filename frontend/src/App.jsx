import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get('/api/jokes')
      .then((response) => {
        const jokesArray = Array.isArray(response.data) ? response.data : response.data.jokes;
        setJokes(jokesArray || []);
      })
      .catch((error) => {
        console.error('Error fetching jokes:', error);
      });
  }, []);

  return (
    <div className="app-container">
      <header className="header">
        <h1>Waris Backend</h1>
        <p className="jokes-count">Total Jokes: {jokes.length}</p>
      </header>

      <div className="jokes-grid">
        {jokes.map((joke, index) => (
          <div className="joke-card" key={joke.id ?? index}>
            <h3>{joke.joke}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
