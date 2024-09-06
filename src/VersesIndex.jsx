export function VersesIndex({ verses, onShow }) {
  return (
    <div>
      <h1>All verses</h1>
      {verses.map((verse) => (
        <div key={verse.id}>
          <h2>{verse.chapter}:{verse.verse_number}</h2>
          <p>{verse.text}</p>
          <button onClick={() => onShow(verse)}>Zoom In</button>
        </div>
      ))}
    </div>
  );
}