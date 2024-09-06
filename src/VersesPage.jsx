import axios from "axios";
import { useState, useEffect } from "react";
import { VersesIndex } from "./VersesIndex";
import { VersesShow } from "./VersesShow";
import { Modal } from "./Modal";

export function VersesPage() {
  const [verses, setVerses] = useState([]);
  const [ isVersesShowing, setIsVersesShowing ] = useState(false);
  const [ currentVerse, setCurrentVerse ] = useState({});

  const handleIndex = () => {
    axios.get('http://localhost:3000/verses.json')
      .then(response => {
        setVerses(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleShow = (verse) => {
    setIsVersesShowing(true);
    setCurrentVerse(verse);
  };

  const handleClose = () => {
    setIsVersesShowing(false);
  };

  useEffect(() => {
    handleIndex();
  }, []);

  return (
    <main>
      <VersesIndex verses={verses} onShow={handleShow}/>
      <Modal show={isVersesShowing} onClose={handleClose}>
        <VersesShow verse={currentVerse} />
      </Modal>
    </main>
  )
}