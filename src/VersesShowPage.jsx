import React, { useState, useEffect } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import axios from 'axios';

const VerseShowPage = () => {
  const { chapter, verse } = useParams();
  const [verseData, setVerseData] = useState({});
  const id = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = (id )

  useEffect(() => {
    axios.get(`http://localhost:3000/verses/${chapter}/${verse}`)
      .then(response => {
        setVerseData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [chapter, verse]);

  return (
    <div>
      <h1>Verse {chapter}:{verse}</h1>
      <p>{verseData.text}</p>
      <ul>
        {verseData.words.map((word) => (
          <li key={word.id}>
            <Link to={`/words/${word.id}`}>{word.text}</Link>
            {' '}
            (<Link to={`/${word.chapter}/${word.verse}`}>Verse {word.chapter}:{word.verse}</Link>)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerseShowPage;