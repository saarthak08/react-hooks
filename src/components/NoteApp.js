import React from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import  { NotesContextProvider } from "../context/NotesContext";

const NoteApp = () => {
    return (
        <NotesContextProvider>
            <h1>Notes</h1>
            <NoteForm />
            <NoteList />
        </NotesContextProvider>
    );
};

export default NoteApp;
