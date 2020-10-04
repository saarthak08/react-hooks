import React, { useReducer, useEffect } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import NotesContext from "../context/Notes-Context";
import notesReducer from "../reducers/Note";

const NoteApp = () => {
    const [notes, notesDispatch] = useReducer(notesReducer, []);


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
      <NotesContext.Provider value={{ notes, notesDispatch }}>
      <h1>Notes</h1>
      <NoteForm/>
      <NoteList />
    </NotesContext.Provider>
    );
};

export default NoteApp;
