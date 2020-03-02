import React, { useState } from 'react';

function Note(props) {
  function removeNote(props) {
    props.setNotes(prevValues => {
      return prevValues.filter((note, index) => {
        return index !== props.id;
      });
    });
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          removeNote(props);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
