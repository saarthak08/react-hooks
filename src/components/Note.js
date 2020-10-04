import React from "react";

export default (props) => {

 
  return (
    <div>
      <h3 style={{ display: "inline-block" }}>{props.note.title}</h3>
      &nbsp;&nbsp;
      <button
        style={{ display: "inline-block" }}
        onClick={(e) => props.removeNote(e, props.index)}
      >
        Remove
      </button>
      &nbsp;&nbsp;
      {props.note.body && <p>{props.note.body}</p>}
    </div>
  );
};
