import { useState} from 'react';
import { useLoaderData} from 'react-router-dom';
import { VersesShow } from './VersesShow';
import { Modal } from './Modal';
import { WordsShow } from './WordsShow';

export function VersesShowPage() {
  const verse = useLoaderData();
  const [isWordsShowing, setIsWordsShowing] = useState(false);
  const [currentWord, setCurrentWord] = useState({});

  const handleWordShow = (word) => {
    setIsWordsShowing(true);
    setCurrentWord(word);
  };

  const handleWordClose = () => {
    setIsWordsShowing(false);
  };

  return (
    <div>
      <VersesShow verse={verse} onWordShow={handleWordShow} />
      <Modal show={isWordsShowing} onClose={handleWordClose}>
        <WordsShow verse={verse} word={currentWord} />
      </Modal>
    </div>
  );
};
