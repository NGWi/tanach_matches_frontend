export function VersesShow({ verse, /* onWordShow */ }) {
  return (
    <div>
      <h1>Verse information</h1>
      <p>Book: {verse.book}</p>
      <p>Chapter: {verse.chapter}</p>
      <p>Verse: {verse.verse_number}</p>
      <p>Text: 
        {verse.words.map( (word) => (
          <span key={word.id} style={{display: 'inline-block', float: 'right', textAlign: 'center', marginRight: '0.5em'}}>
            <a href={`/words/${word.id}`}>{word.text} </a>
            {/* <br /> */}
            {/* <button onClick={() => onWordShow(word)}>Match</button> */}
          </span>
        ))}
      </p>
    </div>
  );
}