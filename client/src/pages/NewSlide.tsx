import { useState } from 'react';

export default function NewSlide() {
  const [content, setContent] = useState('');

  async function createSlide() {
    await fetch('/api/slides', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content })
    });
    setContent('');
    alert('Slide created');
  }

  return (
    <div>
      <h2>New Slide</h2>
      <textarea value={content} onChange={e => setContent(e.target.value)} />
      <button onClick={createSlide}>Create</button>
    </div>
  );
}
