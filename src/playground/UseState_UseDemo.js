import React, { useState,useEffect } from "react";

const UseStateDemo = (props) => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState(props.text);

  useEffect(()=>{
    console.log('useEffect ran for count')
    document.title=count
  },[count]);

  useEffect(()=>{
    console.log("This will run only once!");
  },[]);

  useEffect(()=>{
    console.log('useEffect ran for text');
  },[text]);

  return (
    <div>
      <p>
        The current {text || "count"} : {count}
      </p>
      <button onClick={() => setCount(count + 1)}>+1</button>&nbsp;
      <button onClick={() => setCount(count - 1)}>-1</button>&nbsp;
      <button onClick={() => setCount(0)}>Reset</button>&nbsp;
      <input type="text" onChange={(e) => setText(e.target.value)}></input>
    </div>
  );
};

UseStateDemo.defaultProps = {
  count: 0,
  text: "",
};

export default UseStateDemo;
