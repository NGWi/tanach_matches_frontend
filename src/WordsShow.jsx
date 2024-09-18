export function WordsShow({ verse, word }) {
  return (
    <div>
      <h1>Word information</h1>
      <p>Book: {verse.book}</p>
      <p>Chapter: {verse.chapter}</p>
      <p>Verse: {verse.verse_number}</p>
      <p>Word: {word.position}</p>
      <p>Text: {word.text}</p>

      <h2>Matches</h2>
      <ul style={{ display: "grid", gridTemplateColumns: "1fr" }}>
        {word.matches.map((match) => (
          <li key={match.id} style={{ display: "flex", justifyContent: "flex-end" }}>
            <span>
              <a href={`/words/${match.matched_word.id}`}>{match.matched_word.text}</a>
              {match.matched_word.verse.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
