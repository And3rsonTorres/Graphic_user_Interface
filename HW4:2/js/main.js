/*
File: main.js
GUI Assignment: Multiplication table
Anderson Torres UMass Lowell Computer Science Student, Anderson_torres.student.uml.edu
Copyright (c) 2022 by ATO. All rights reserved. May you as long as you credit the author.
Here is a little multiplication tableV3.
*/

const form = document.querySelector("#form");
nTab = 1;
form.addEventListener("submit", function (event) {
  // stop form submission
  event.preventDefault();
  //clear table so the new one can be on top
  if ($("#form").valid()) {
    var table = tableGen();
    newTab(table, generateTabLabel());
    
  }
  deleteSelectedTabs();

});
// multiplycation function 
function mult(a, b) {
  return (a - 1) * (b - 1)
}


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
  return table;
}

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
      min: 0,
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
      min: 0,
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
      min: "Too Low, Number of Rows need to be at least 0"
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
      min: "Too Low, Number of columns need to be at least 0"
    }

  },
  errorElement: "span"


});
//sliders that go 1 by 1 with max and min matching form. 1st bind to the data
$("#row1").slider({
  value: 0,
  step: 1,
  max: 60,
  min: -60,
  slide: function (event, slider) {
    $("#2").val(parseInt(slider.value));
    update();
  }
})
$("#column1").slider({
  value: 0,
  step: 1,
  max: 60,
  min: -60,
  slide: function (event, slider) {
    $("#1").val(parseInt(slider.value));
    update();
  }
})
$("#row2").slider({
  value: 0,
  step: 1,
  max: 60,
  min: 0,
  slide: function (event, slider) {
    $("#3").val(parseInt(slider.value));
    update();
  }
})
$("#column2").slider({
  value: 0,
  step: 1,
  max: 60,
  min: 0,
  slide: function (event, slider) {
    $("#4").val(parseInt(slider.value));
    update();
  }
})
// 2nd binding to the data. numbers in the form will match the ones inside the slider
//as long as it is whithin max and min
$("#1").change(function () {
  var item = this.value;
  if (item < 61 && item > -61) {
    $("#column1").slider("value", parseInt(item));
    update();
  }
})
$("#2").change(function () {
  var item = this.value;
  if (item < 61 && item > -61) {
    $("#row1").slider("value", parseInt(item));
    update();
  }
})
$("#3").change(function () {
  var item = this.value;
  if (item < 61 && item > -1) {
    $("#row2").slider("value", parseInt(item));
    update();
  }
})
$("#4").change(function () {
  var item = this.value;
  if (item < 61 && item > -1) {
    $("#column2").slider("value", parseInt(item));
    update();
  }
})

//JQ ope tabs
$("#tab").tabs();
// create a new tab
function newTab(table, label) {
  var tabId = "tab-" + nTab;
  var panelId = "tab-panel-" + nTab;

  // Create new panel div.
  $("#tab > div.panels").append("<div id=\"" + panelId + "\"></div>");

  // Create li that represents the new tab.
  $("#tab ul").append("<li id=\"" + tabId + "\"><a href=\"#" + panelId + "\"><div>" + label + "</div></a><img src=\"https://and3rsontorres.github.io/Graphic_user_Interface/HW4:2/img/closeicon.png\" class=\"ui-icon ui-icon-close\" role=\"presentation\"><input type=\"checkbox\" class=\"tabCheckBox\"></li>");

  // process the new li
  $("#tab").tabs("refresh");

  // Insert the table into the new panel div.
  $("#" + panelId).empty();
  $("#" + panelId).append($(table));

  ++nTab;
  selectTab(tabId);

  return panelId;
}


// Selects a tab by the ID
function selectTab(Id) {
  var i = $("#tab a[href='#" + Id + "']").parent().index();
  $("#tab").tabs("option", "active", i);
}

// Generate the label for the tab
function generateTabLabel() {
  return parseInt(form.elements[1].value) + " &minus; " + parseInt(form.elements[3].value) + "<br>" + parseInt(form.elements[0].value) + " &minus; " + parseInt(form.elements[2].value);
}
//update the table by sliding or type table.
function update() {
  if (!$("#form").valid()) {
    return;
  }
  if (!$("#tab > ul > li").size()) {
    return;
  }
  var minC = parseInt(form.elements[0].value);
  var minR = parseInt(form.elements[1].value);
  let maxC = parseInt(form.elements[2].value);
  let maxR = parseInt(form.elements[3].value);
  var table = tableGen();
  var currentIndex = $("#tab").tabs("option", "active");
  var tabId = $("#tab ul li").eq(currentIndex).attr("id");
  var tabNum = tabId.substr(4);
  var panelId = "tab-panel-" + tabNum;

  var label = generateTabLabel(minR, maxR, minC, maxC);
  $("#" + tabId + " div").html(label);
  $("#" + panelId).empty();
  $("#" + panelId).append(table);
}
$("#tabs").tabs();

// Deletes all selected tabs as soon as another tab is create.
function deleteSelectedTabs() {
  $("#tab ul li").each(function () {
    var tabId = $(this).attr("id");
    if ($("#" + tabId + " .tabCheckBox").prop("checked")) {
      var panelId = $(this).remove().attr("aria-controls");
      $("#" + panelId).remove();
      $("#tab").tabs("refresh");
    }
  });
}
//use the icon x to delete 
$("#tab").delegate("img.ui-icon-close", "click", function () {
  var panelId = $(this).closest("li").remove().attr("aria-controls");
  $("#" + panelId).remove();
  $("#tabs").tabs("refresh");

});






