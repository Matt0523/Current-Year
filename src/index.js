//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const fname = "Matthew";
const lname = "McCutcheon";
const today = new Date();
const year = today.getFullYear();

//It should display 2 paragraph HTML elements.
ReactDOM.render(
  <div>
    <p>Created by {fname + " " + lname}.</p>
    <p>
      Copyright &copy; {year} {fname + " " + lname} All Rights Reserved
    </p>
  </div>,

  document.getElementById("root")
);
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
