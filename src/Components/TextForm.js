import React, { useState } from "react";

export default function TextForm(props) {
  const [Text, setText] = useState("");
  function handleUpperClick() {
    // console.log("Uppercase was clicked")
    let newText = Text.toUpperCase();
    setText(newText);
    if (Text === "") {
      props.showAlert("Enter some text below", "warning");
    } else {
      props.showAlert("Converted to uppercase", "success");
    }
  }
  function handleLowerClick() {
    // console.log("Lowercase was clicked")
    let newText = Text.toLowerCase();
    setText(newText);
    if (Text === "") {
      props.showAlert("Enter some text below", "warning");
    } else {
      props.showAlert("Converted to lowercase", "success");
    }
  }
  function handleClearClick() {
    let newText = "";
    setText(newText);
    if (Text === "") {
      props.showAlert("Enter some text below", "warning");
    } else {
      props.showAlert("Text Cleared", "success");
    }
  }
  function handleExtraSpaces() {
    let newText = Text.split(/[ ]+/);
    

    setText(newText.join(" "));
    if (Text === "") {
      props.showAlert("Enter some text below", "warning");
    } else {
      props.showAlert("Extra spaces removed", "success");
    }
  }
  
    
  
  function handleonChange(event) {
    // console.log("OnChange")
    setText(event.target.value);
    // This setText was done so that we can enter something in the text area. Otherwise because of the value we had given in the button tag. It was impossible to change that value. So for that we used OnChange method and because of that method we were able to set our text to target.value
  }
 

  return (
    <>
      <div
        className="bigContainer"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2 className="head">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="20"
            value={Text}
            onChange={handleonChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
              
            }}
          ></textarea>
        </div>

        <button className="btn btn-primary" onClick={handleUpperClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove extra space
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3 className="my-2 mx-2">Your Text Summary :</h3>
        <p
          style={{
            fontStyle: "italic",
            fontFamily: "-moz-initial",
            color: props.mode === "dark" ? "cyan" : "brown",
          }}
          className="mx-2"
        > 
          {Text.length > 0
            ? Text.trim().split(" ").length
            : "0"} words and {Text.length} characters
        </p>
        <p
          style={{ color: props.mode === "dark" ? "cyan" : "brown" }}
          className="mx-2"
        >
          Can be read in: {0.008 * (Text.length > 0
            ? Text.split(" ").length
            : "0")} minutes
        </p>
        <h2 className="mx-2">Preview</h2>
        <p
          style={{
            fontFamily: "serif",
            color: props.mode === "dark" ? "cyan" : "brown",
          }}
          className="mx-2"
        >
          {Text.length > 0
            ? Text
            : "Enter something in the text box to preview it here."}
        </p>
      </div>
    </>
  );
}
