import React, { useState } from "react";

export default function TextForm(props) {
  const handleUPClick = () => {
    console.log("clicked to Up= " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerClick = () => {
    console.log("clicked to low= " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleclearClick = () => {
    console.log("clicked to Upclear= " + text);
    let newText = "";
    setText(newText);
  };
  const handlefcapClick = () => {
    console.log("clicked to Upclear= " + text);
    let newText = text.split(" ");
    for (var i = 0; i < newText.length; i++) {
      newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
    }
    const str2 = newText.join(" ");
    setText(str2);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container1">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUPClick}>
          convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>
          convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handlefcapClick}>
          first letter to up
        </button>
      </div>
      <din className="container2 my-8">
        <h2>Text summary</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} letters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read this para</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </din>
    </>
  );
}
