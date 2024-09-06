export function VersesShow({ verse }) {
  return (
    <div>
      <h1>Verse information</h1>
      <p>Book: {verse.book}</p>
      <p>Chapter: {verse.chapter}</p>
      <p>Verse: {verse.verse_number}</p>
      <p>Text: {verse.text}</p>
    </div>
  );
}