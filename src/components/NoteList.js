import React from "react";
import Note from "./Note";

const NoteList = (props) => {
  return (
    <div>
      {props.notes &&
        props.notes.map((note, index) => {
          return (
            <Note
              key={index}
              index={index}
              note={note}
              removeNote={props.removeNote}
              />
          );
        })}
    </div>
  );
};

export default NoteList;
