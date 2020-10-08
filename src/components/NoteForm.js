import React, { useState,useContext } from "react";
import NotesContext from '../context/NotesContext';

const NoteForm = (props) => {
    const [body, setBody] = useState("");
    const [title, setTitle] = useState("");
    const {notesDispatch} = useContext(NotesContext);

    const addNote = (e, title, body) => {
        e.preventDefault();
        notesDispatch({ type: "ADD_NOTE", title, body });
    };

    return (
        <div>
            <form
                onSubmit={(e) => {
                    addNote(e, title, body);
                    setTitle("");
                    setBody("");
                }}>
                <input
                    placeholder='title'
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}></input>
                &nbsp;
                <input
                    value={body}
                    placeholder='body'
                    onChange={(e) => setBody(e.target.value)}></input>
                &nbsp;
                <button>Add Note</button>
            </form>
        </div>
    );
};

export default NoteForm;
