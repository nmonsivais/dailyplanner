var currentTime = moment().format("H");

for (var i = 9; i < 18; i++) {
  console.log(i);

  if (currentTime > i) {
    console.log("found current time");
    $("#" + i).attr("class", "past");
  }

  if (currentTime == i) {
    console.log("found current time");
    $("#" + i).attr("class", "present");
  }

  if (currentTime < i) {
    console.log("found current time");
    $("#" + i).attr("class", "future");
  }
}

// in order to get one segment or block of time on page...

// #1 create div with class of row and append it to container.

// var row = $("<row>");
// var column = $("<col-XL-4>");
// var row3column = $(row).append(column);
// var container = document.querySelector(".container");

// container.append(row3column);

// #2 first column will contain time via moment (use placeholer to start)
// #3 second column will contain user INPUT field
// #4 third column will contain save BUTTON
// ---------------------------------------------------------------
// #5 to capture user information from the INPUT field, you will
// store their information via a variable (google how to get
// information from HTML with JavaScript)
// #6 on the click of save BUTTON, save userinput via local storage
// - use event listener to listen for button click
// - google how to save information to local storage
// - console.log the data once its saved
// #7 get current time of day via Moment.js to display at top of page
// to get multiple rows or blocks of time on the
// page, you would use a for loop
// focus on styling based off of current time after other functionality
// is complete
