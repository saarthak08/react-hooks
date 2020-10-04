import React, { useReducer, useEffect } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import notesReducer from "../reducers/Note";

const NoteApp = (props) => {
  const [notes, notesDispatch] = useReducer(notesReducer, []);



  const removeNote = (e, index) => {
    e.preventDefault();
    notesDispatch({ type: "REMOVE_NOTE", index });
  };

  const addNote = (e, title, body) => {
    e.preventDefault();
    notesDispatch({ type: "ADD_NOTE", title, body });
  };

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    if (notes) {
      notesDispatch({ type: "POPULATE_NOTES", notes });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <h1>Notes</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} removeNote={removeNote} />
    </div>
  );
};

export default NoteApp;
