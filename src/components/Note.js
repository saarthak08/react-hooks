import React, { useContext } from "react";
import NotesContext from "../context/NotesContext";
import useMousePosition from '../hooks/useMousePosition';


const Note = (props) => {
    const { notesDispatch } = useContext(NotesContext);
    const position = useMousePosition();

    const removeNote = (e, index) => {
        e.preventDefault();
        notesDispatch({ type: "REMOVE_NOTE", index });
    };

    return (
        <>
            <h3>{props.note.title}</h3>
            {props.note.body && <p>{props.note.body}</p>}
            <p>
                {position.x}, {position.y}
            </p>
            <button onClick={(e) => removeNote(e, props.index)}>Remove</button>
        </>
    );
};

export default Note;
