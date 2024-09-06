export function WordsShow({ word }) {
  return (
    <div>
      <h1>Word information</h1>
      <p>Book: {word.verse.book}</p>
      <p>Chapter: {word.verse.chapter}</p>
      <p>Verse: {word.verse.verse_number}</p>
      <p>Word: {word.position}</p>
      <p>Text: {word.text}</p>

      <h2>Matches</h2>
      <ul>
        {word.matches.map( (match) => (
          <li key={match.id}>
            <a href={`/words/${match.matched_word.id}.json`}>{match.matched_word.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}