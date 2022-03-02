import React, { useState } from "react";

const App = () => {
  const [val, setValue] = useState();
  const [fname, setFname] = useState();

  const changefun = (event) => {
    setValue(event.target.value);
  };
  const fun1 = () => {
    setFname(val);
  };

  return (
    <>
      <div className="div1">
        <h1>Hello {fname}</h1>
        <input
          onChange={changefun}
          className="input1"
          type="text"
          placeholder="enter your name"
        />
        <button onClick={fun1}>Submit</button>
      </div>
    </>
  );
};

export default App;
