import axios from "axios";
import { useState, useEffect } from "react";
// import { WordsIndex } from "./WordsIndex";
import { WordsShow } from "./WordsShow";
import { Modal } from "./Modal";

export function WordsPage() {
  const [words, setWords] = useState([]);
  const [ isWordsShowing, setIsWordsShowing ] = useState(false);
  const [ currentVerse, setCurrentVerse ] = useState({});

  const handleIndex = () => {
    axios.get(`http://localhost:3000/verses/${words.verse.id}.json`)
      .then(response => {
        setWords(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleShow = (verse) => {
    setIsWordsShowing(true);
    setCurrentVerse(verse);
  };

  const handleClose = () => {
    setIsWordsShowing(false);
  };

  useEffect(() => {
    handleIndex();
  }, []);

  return (
    <main>
      {/* <WordsIndex words={words} onShow={handleShow}/> */}
      <Modal show={isWordsShowing} onClose={handleClose}>
        <WordsShow verse={currentVerse} />
      </Modal>
    </main>
  )
}