export function WordsShow({ verse, word }) {
  return (
    <div>
      <h1>Word information</h1>
      <p>Text: {word.text}</p>
      <p>Book: {verse.book}</p>
      <p>Chapter: {verse.chapter}</p>
      <p>Verse: {verse.verse_number}</p>
      <p>Word: {word.position}</p>

      <p>
      Verse text: {word.verse.text}
      </p>

      <h2>Matches</h2>
      <ul style={{ display: "grid", gridTemplateColumns: "1fr" }}>
        {word.matches.filter((match) => match.matched_word.id !== word.id).map((match) => (
          <li key={match.id} style={{ display: "flex", justifyContent: "flex-end" }}>
            <span>
              {match.matched_word.verse.text}
              ({match.matched_word.verse.book} {match.matched_word.verse.chapter}:{match.matched_word.verse.verse_number})
              <a href={`/words/${match.matched_word.id}`}> &nbsp;{match.matched_word.text.trim()}</a>
            </span>
          </li>
        ))}
      </ul>

      <h2>Roots</h2>
      <ul style={{ display: "grid", gridTemplateColumns: "1fr" }}>
        {word.roots.filter((root) => root.id !== word.id).map((root) => (
          <li key={root.id} style={{ display: "flex", justifyContent: "flex-end" }}>
            <span>
              {root.verse.text}
              ({root.verse.book} {root.verse.chapter}:{root.verse.verse_number})
              <a href={`/words/${root.id}`}> &nbsp;{root.text.trim()}</a>
            </span>
          </li>
        ))}
      </ul>
      </div>
  );
}
