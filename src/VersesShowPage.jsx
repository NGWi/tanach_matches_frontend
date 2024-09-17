import React, { useState, useEffect } from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
import { VersesShow } from './VersesShow';
import { Modal } from './Modal';
import { WordsShow } from './WordsShow';
// import { WordsShowPage } from './WordsShowPage';

export function VersesShowPage() {
  // const { chapter, verse } = useParams();
  // const [verseData, setVerseData] = useState({});
  const verse = useLoaderData();
  // const navigate = useNavigate();
  const [isWordsShowing, setIsWordsShowing] = useState(false);
  // const [currentVerse, setCurrentVerse] = useState({});
  const [currentWord, setCurrentWord] = useState({});

  const handleWordShow = (word) => {
    setIsWordsShowing(true);
    setCurrentWord(word);
  };

  const handleWordClose = () => {
    setIsWordsShowing(false);
  };

  // useEffect(() => {
  //   axios.get(`http://localhost:3000/verses/${chapter}/${verse}`)
  //     .then(response => {
  //       setVerseData(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, [chapter, verse]);

  return (
    <div>
      {/* <h1>Verse {chapter}:{verse}</h1>
      <p>{verseData.text}</p>
      <ul>
        {verseData.words.map((word) => (
          <li key={word.id}>
            <Link to={`/words/${word.id}`}>{word.text}</Link>
            {' '}
            (<Link to={`/${word.chapter}/${word.verse}`}>Verse {word.chapter}:{word.verse}</Link>)
          </li>
        ))}
      </ul> */}
      <VersesShow verse={verse} onWordShow={handleWordShow} />
      <Modal show={isWordsShowing} onClose={handleWordClose}>
        <WordsShow verse={verse} word={currentWord} />
      </Modal>
    </div>
  );
};
