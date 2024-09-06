export function VersesIndex({ verses }) {
  return (
    <div>
      <h1>All verses</h1>
      {verses.map((verse) => (
        <div key={verse.id}>
          <h2>{verse.chapter}:{verse.verse_number}</h2>
          <p>{verse.text}</p>
        </div>
      ))}
    </div>
  );
}