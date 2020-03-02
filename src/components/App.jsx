import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
  const [notes, setNotes] = useState([
    { noteTitle: 'test1', noteContent: 'test1' }
  ]);

  return (
    <div>
      <Header />
      <CreateArea setNotes={setNotes} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.noteTitle}
          content={note.noteContent}
          notes={notes}
          setNotes={setNotes}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
