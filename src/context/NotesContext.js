import React, { useReducer, useEffect } from "react";
import notesReducer from "../reducers/NotesReducer";

const NotesContext = React.createContext();

export const NotesContextProvider = (props) => {
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
            {props.children}
        </NotesContext.Provider>
    );
};

export default NotesContext;
