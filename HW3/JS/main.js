/*
File: main.js
GUI Assignment: Multiplication table
Anderson Torres UMass Lowell Computer Science Student, Anderson_torres.student.uml.edu
Copyright (c) 2022 by ATO. All rights reserved. May you as long as you credit the author.
Here is a little multiplication table.
*/
  
  const form = document.querySelector("#form");
  
  form.addEventListener("submit", function (event) {
	
    event.preventDefault();
    // stop form submission
	if(textError("1")&&textError("2")&&textError("3")&&textError("4")){
    tableGen();}
    
    
});
// multiplycation function 
  function mult (a, b) 
  { return a * b}
  

function tableGen() {
    
    // creates a <table> element and a <tbody> element
    
    var minC=parseInt(form.elements[0].value);
    var minR=parseInt(form.elements[1].value);
    let maxC=parseInt(form.elements[2].value);
    let maxR=parseInt(form.elements[3].value);
    var offset =minC;
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);
    
    
     // creating all columns
     for (let i = 0; i < maxR; i++) {
       // creates a table row
       const row = document.createElement("tr");
       
       for (let j = 0; j < maxC; j++) {
         // Create a <td> element and a text node, make the text
         // node the contents of the <td>, and put the <td> at
         // the end of the table row 
        const cell = document.createElement("td");
        var cellText = document.createTextNode(mult(minR,minC));
        if(i==0 && j>0)
        {
            cellText=document.createTextNode(minC);

        }
        else if(i>0 && j==0)
        {
            cellText=document.createTextNode(minR);
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
     document.getElementById('tables').appendChild(table);
     
   
     
   }
   //function that generate the error code depending on the input
   // will give the user the first problem with the input number
   function textError(input) {
    
    const message = document.getElementById("error");
    var cond =true;
    message.innerHTML = " ";
    let x = document.getElementById(input).value;
     try { 
        
      if(x == "") throw "EMPTY, Please type something on";
      if(isNaN(x)) throw "not a number -499 to 499 please";
      x = Number(x);
      
      if(x > 500 && x <500) throw "too high try again";
        
    }
    catch(error) {
        cond =false;
      message.innerHTML = "It is " + error+" input # "+ input;
    }
    return cond;
  }
