import React, { useState } from "react";

export default function HookExample() {
  const [count, setCount] = useState(0);
  const [name,setName] = useState("");
  const [selected, setSelected] = useState(false);
  return (
    <>
      <h1>Count : {count}</h1>
      <br />
      <h2>Name: {name}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <br />
      <input type="text" placeholder="enter name" onChange={(e) => setName(e.target.value)}
      />
      <br />
      {"Selected value"} : {selected?"True" : "false"}
      <input
        type="checkbox"
        checked={selected}
        onChange={() => setSelected(!selected)}
      />
    </>
  );
}
