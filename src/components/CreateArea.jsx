import React, { useState } from 'react';

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    noteTitle: '',
    noteContent: ''
  });

  function handleNote(e) {
    const { name, value } = e.target;

    setNewNote(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function addNotes(notes) {
    props.setNotes(prevValues => {
      return [
        ...prevValues,
        { noteTitle: newNote.noteTitle, noteContent: newNote.noteContent }
      ];
    });
  }

  return (
    <div className="inputArea">
      <input
        name="noteTitle"
        placeholder="Title"
        value={newNote.noteTitle}
        onChange={handleNote}
      />
      <textarea
        name="noteContent"
        placeholder="Take a note..."
        rows="3"
        value={newNote.noteContent}
        onChange={handleNote}
      />
      <button
        onClick={() => {
          addNotes(props.setNotes, newNote.noteTitle, newNote.noteContent);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default CreateArea;
