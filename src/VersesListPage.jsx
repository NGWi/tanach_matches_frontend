import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const VersesListPage = () => {
  const [verses, setVerses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/verses.json')
      .then(response => {
        setVerses(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Verses List</h1>
      <ul>
        {verses.map((verse) => (
          <li key={verse.chapter + verse.verse}>
            <Link to={`/${verse.chapter}/${verse.verse}`}>{verse.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VersesListPage;