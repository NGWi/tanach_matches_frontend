import React, { useState, useHistory } from 'react';
import { Link  } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
  const [chapter, setChapter] = useState('');
  const [verse, setVerse] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`http://localhost:3000/verses/${chapter}/${verse}`)
      .then(response => {
        history.push(`/${chapter}/${verse}`);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>
        <Link to="/verses">View all verses</Link>
      </p>
      <form onSubmit={handleSubmit}>
        <label>Search by chapter and verse:</label>
        <input
          type="number"
          name="chapter"
          value={chapter}
          onChange={(event) => setChapter(event.target.value)}
          placeholder="Chapter"
        />
        <input
          type="number"
          name="verse"
          value={verse}
          onChange={(event) => setVerse(event.target.value)}
          placeholder="Verse"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default HomePage;