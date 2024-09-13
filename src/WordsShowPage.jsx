import { useLoaderData } from 'react-router-dom';
import { WordsShow } from './WordsShow.jsx';

export function WordsShowPage ({verse, word: word_from_verse}) {
  // const { chapter, word } = useParams();
  // const [wordData, setWordData] = useState({});
  const word = word_from_verse || useLoaderData();

  return (
    <div>
      <WordsShow word={word} verse={word.verse || verse} />
    </div>
  );
};