import React from "react";

export default function About(props) {
  return (
    <div
      className="container"
      style={{
        backgroundColor: props.mode === "dark" ? "black" : "white",
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <h2>{props.heading}</h2>
      <div className="accordion my-4" id="accordionExample">
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "dark" ? "black" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
              style={{
                backgroundColor: props.mode === "dark" ? "black" : "white",
                color: props.mode === "dark" ? "white" : "black",
                border: "solid white",
              }}
            >
            1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
          XYZ
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "dark" ? "black" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h2 className="accordion-header accordion" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                backgroundColor: props.mode === "dark" ? "black" : "white",
                color: props.mode === "dark" ? "white" : "black",
                border: "solid white",
              }}
            >
              2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            XYZ.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "dark" ? "black" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{
                backgroundColor: props.mode === "dark" ? "black" : "white",
                color: props.mode === "dark" ? "white" : "black",
                border: " solid white",
              }}
            >
             3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
           XYZ.
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
