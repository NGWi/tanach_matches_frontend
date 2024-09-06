import { useLoaderData } from 'react-router-dom';
import { WordsShow } from './WordsShow.jsx';

const WordShowPage = () => {
  // const { chapter, word } = useParams();
  // const [wordData, setWordData] = useState({});
  const word = useLoaderData();

  return (
    <div>
      <WordsShow word={word} />
    </div>
  );
};

export default WordShowPage;