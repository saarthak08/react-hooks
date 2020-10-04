import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

const App = (props) => {
  const [count, setCount] = useState(props.count);
  const [text,setText] = useState(props.text);

  return (
    <div>
      <p>The current {text || 'count'} : {count}</p>
      <button onClick={()=>setCount(count + 1)}>+1</button>&nbsp;
      <button onClick={()=>setCount(count - 1)}>-1</button>&nbsp;
      <button onClick={()=>setCount(0)}>Reset</button>&nbsp;
      <input type='text' onChange={(e)=>setText(e.target.value)}></input>
    </div>
  );
};

App.defaultProps = {
  count:0,
  text:''
};


ReactDOM.render(
  <React.StrictMode>
    <App count={2}/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
