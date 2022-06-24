/*
File: main.js
GUI Assignment: Multiplication table
Anderson Torres UMass Lowell Computer Science Student, Anderson_torres.student.uml.edu
Copyright (c) 2022 by ATO. All rights reserved. May you as long as you credit the author.
Here is a little multiplication table V2.
*/

const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {

  event.preventDefault();
  // stop form submission


  //clear table so the new one can be on top 

  $('#table tr').remove();
  tableGen();


});
// multiplycation function 
function mult(a, b) { return (a - 1) * (b - 1) }


function tableGen() {

  // creates a <table> element and a <tbody> element

  var minC = parseInt(form.elements[0].value);
  var minR = parseInt(form.elements[1].value);
  let maxC = parseInt(form.elements[2].value);
  let maxR = parseInt(form.elements[3].value);
  var offset = minC;
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  // creating all columns
  for (let i = 0; i < maxR + 1; i++) {
    // creates a table row
    const row = document.createElement("tr");

    for (let j = 0; j < maxC + 1; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row 
      const cell = document.createElement("td");
      var cellText = document.createTextNode(mult(minR, minC));
      if (i == 0 && j == 0) {
        cellText = document.createTextNode("");
      }
      if (i == 0 && j > 0) {
        cellText = document.createTextNode(minC - 1);
      }
      else if (i > 0 && j == 0) {
        cellText = document.createTextNode(minR - 1);
        row.appendChild(cell);
      }
      cell.appendChild(cellText);
      row.appendChild(cell);
      minC++;
    }
    minC = offset;
    minR++;
    // add the row to the end of the table body
    tbody.appendChild(row);
  }
  // put the <tbody> in the <table>
  table.appendChild(tbody);
  // appends <table> into <body>
  document.getElementById('table').appendChild(table);
}
//validaring form
//validaring form
$("#form").validate({
  rules: {
    row: {
      required: true,
      number: true,
      max: 60,
      min: -60,
      integer: true
    },
    row2: {
      required: true,
      number: true,
      max: 60,
      min: 1,
      integer: true
    }

    , column: {
      required: true,
      number: true,
      max: 60,
      min: -60,
      integer: true
    }

    , column2: {
      required: true,
      number: true,
      max: 60,
      min: 1,
      integer: true
    }
  },
  messages: {
    row: {
      required: "Please Enter a Value Cannot be empty",
      number: "Enter a whole Number Please ",
      max: "Too High of a Number try something like 60 or Lower",
      min: "Too Low of a Number try something like -60 or Higher"
    },
    row2: {
      required: "Please Enter a Value Cannot be empty",
      number: "Enter a whole Number Please",
      max: "Too High of a Number try something like 60 or Lower",
      min: "Too Low, Number of Rows need to be at least 1"
    }

    , column: {
      required: "Please Enter a Value Cannot be empty",
      number: "Enter a whole Number Please",
      max: "Too High of a Number try something like 60 or Lower",
      min: "Too Low of a Number try something like -60 or Higher"
    }

    , column2: {
      required: "Please Enter a Value Cannot be empty",
      number: "Enter a whole Number Please",
      max: "Too High of a Number try something like 60 or Lower",
      min: "Too Low, Number of columns need to be at least 1"
    }

  },
  errorElement: "span"
});


