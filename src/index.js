import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

const NotesApp = (props) => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [addBodyToggle, setAddBodyToggle] = useState(false);

  const addNote = (e) => {
    e.preventDefault();
    setNotes([...notes, { title }]);
    setTitle("");
  };

  const removeNote = (e, index) => {
    e.preventDefault();
    setNotes(
      notes.filter((tempNote, i) => {
        return i !== index;
      })
    );
  };

  const addBodyOnClick = (e) => {
    e.preventDefault();
    setAddBodyToggle(!addBodyToggle);
  };

  const onSubmitBodyForm = (e, index) => {
    e.preventDefault();
    setNotes(
      notes.filter((note, i) => {
        if (index === i) {
          note.body = body;
        }
        return note;
      })
    );
    setAddBodyToggle(!addBodyToggle);
  };
  return (
    <div>
      <h1>Notes</h1>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
        &nbsp;
        <button>Add Note</button>
      </form>
      {notes.map((note, index) => {
        return (
          <div key={index}>
            <h3 style={{ display: "inline-block" }}>{note.title}</h3>
            &nbsp;&nbsp;
            <button
              style={{ display: "inline-block" }}
              onClick={(e) => removeNote(e, index)}
            >
              Remove
            </button>
            &nbsp;&nbsp;
            <button
              style={{ display: "inline-block" }}
              onClick={(e) => addBodyOnClick(e)}
            >
              {addBodyToggle ? "x" : "+"}
            </button>
            {note.body && <p>{note.body}</p>}
            {addBodyToggle && (
              <form onSubmit={(e) => onSubmitBodyForm(e, index)}>
                <input onChange={(e) => setBody(e.target.value)}></input>&nbsp;
                <button>Set Body</button>
              </form>
            )}
          </div>
        );
      })}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <NotesApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
