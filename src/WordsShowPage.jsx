import { useLoaderData } from 'react-router-dom';
import { WordsShow } from './WordsShow.jsx';

export function WordsShowPage ({verse, word: word_from_verse}) {
  const word = useLoaderData() || word_from_verse;

  return (
    <div>
      <WordsShow word={word} verse={word.verse || verse} />
    </div>
  );
};