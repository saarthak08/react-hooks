import React, { useContext } from "react";
import Note from "./Note";
import NotesContext from '../context/NotesContext';

const NoteList = () => {

    const {notes} = useContext(NotesContext);

    return (
        <div>
            {notes &&
                notes.map((note, index) => {
                    return (
                        <Note
                            key={index}
                            index={index}
                            note={note}
                        />
                    );
                })}
        </div>
    );
};

export default NoteList;
