export function WordsShow({ verse, word }) {
  return (
    <div>
      {console.log(verse)}
      <h1>Word information</h1>
      <p>Book: {verse.book}</p>
      <p>Chapter: {verse.chapter}</p>
      <p>Verse: {verse.verse_number}</p>
      <p>Word: {word.position}</p>
      <p>Text: {word.text}</p>

      <h2>Matches</h2>
      <ul>
        {console.log(word)}
        {word.matches.map( (match) => (
          <li key={match.id}>
            <a href={`/words/${match.matched_word_id}.json`}>{match.matched_word.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}