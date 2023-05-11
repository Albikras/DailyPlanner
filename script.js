// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var today = $("#currentDay");
var divContainer = $("#rowContainer");

var nowTime = dayjs();

$(".saveBtn").each();
console.log(saveBtn);
var allBtns = saveBtn

var hoursArray = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

function dailyDate() {
  var todaysDate = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
  today.text(todaysDate);
}
dailyDate();

setInterval(dailyDate, 1000);

$(function () {
  for (var x = 0; x < hoursArray.length; x++) {
    var newDiv = $("<div></div>");
    newDiv.id = hoursArray[x];
    newDiv.addClass("row", "time-block", colorAdd(hoursArray[x]));
    newDiv.html = `<div class="col-2 col-md-1 hour text-center py-3">${timeSet(
      hoursArray[x]
    )}</div>                                                                                        
       <textarea class="col-8 col-md-10 description" rows="3">${                                    
         localStorage.getItem(hoursArray[x]) || ""
       }</textarea>
       <button id="${
         hoursArray[x]
       }" class="btn saveBtn col-2 col-md-1" aria-label="save">
        <i class="fas fa-save" aria-hidden="true"></i></button>`;

    divContainer.append(newDiv);
  }
  function timeSet(hoursArray) {
    switch (hoursArray) {
      case "09":
        return "9am";
      case "10":
        return "10am";
      case "11":
        return "11am";
      case "12":
        return "12pm";
      case "13":
        return "1pm";
      case "14":
        return "2pm";
      case "15":
        return "3pm";
      case "16":
        return "4pm";
      case "17":
        return "5pm";
    }

    allBtns.forEach().click((event)=>{
        var saveInfo = (event.currentTarget.previousElementSibling.value);
        localStorage.setitem(event.currentTarget.id, saveInfo)
    }) 

  }
  function colorAdd(hoursArray) {
    if(hoursArray < nowTime){
        return 'past';
    }
    else if(hoursArray > nowTime){
        return 'future';
    }
    else{
        return 'present';
    }
  }
});

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
