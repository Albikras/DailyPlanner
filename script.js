var primaryDiv = $("#primaryDiv");//declaring new variable primaryDiv, and setting it equal to the id of primaryDiv in the html

var today = $("#currentDay");//declaring new variable today, and setting it equal to the id of currentDay in the html
var divContainer = $("#rowContainer");//declaring new variable divContainer, and setting it equal to the id of rowContainer in the html

var nowTime = dayjs().hour();//declaring new variable nowTime and setting it equal to the current hour

var hoursArray = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];//declaring new variable hoursArray, set it equal to an array with 9 string elements

//function that was given as starter code 
$(function () {
    /**function for the date protion at the top of the html*/ 
    function dailyDate() {
        var todaysDate = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");//declare new variable todaysDate, and set it equal to the daysjs function to display todays date and time
        today.text(todaysDate);//set variable today's text as todaysDate
    }
    dailyDate();//calls to the function dailyDate
    
    setInterval(dailyDate, 1000);//use set interval in order to make the time at the top to keep track of time in real time
    
    for (var x = 0; x < hoursArray.length; x++) {//standard for loop
    var secondaryDivBlocks = $("<div></div>");//declare variable secondaryDivBlocks and set it equal to a created div element
    var tiertiaryDivBlocks = $("<div></div>");//declare variable tiertiaryDivBlocks and set it equal to a created div element
    var textAreaElement = $("<textarea></textarea>");//declare variable textAreaElement and set it equal to a created textarea element
    var savingBtnElement = $("<button></button>");//declare variable savingBtnElement and set it equal to a created button element
    var weirdiElement = $("<i></i>");//declare variable weirdiElement and set it equal to a created i element

    primaryDiv.append(secondaryDivBlocks);//append secondaryDivBlocks to primaryDiv

    secondaryDivBlocks.addClass(`row time-block ${colorAdd(hoursArray[x])}`);//add several classes to secondaryDivBlocks use back ticks in order to add the colorAdd funtion to it aswell
    secondaryDivBlocks.attr("id", hoursArray[x]);//add an id to secondaryDivBlocks id is equal to hoursArray and index x

    tiertiaryDivBlocks.addClass("col-2 col-md-1 hour text-center py-3");//add several classes to tiertiaryDivBlocks

    tiertiaryDivBlocks.text(timeSet(hoursArray[x]));//set the tiertiaryDivBlocks text equal to the value of timeSet function

    textAreaElement.addClass("col-8 col-md-10 description");//add several classes to textAreaElement

    savingBtnElement.addClass(`btn saveBtn col-2 col-md-1`);//add several classes to savingBtnElement

    weirdiElement.addClass("fas fa-save");//add several classes to weirdiElement

    /**append tiertiaryDivBlocks, textAreaElement, and savingBtnElement to secondaryDivBlocks*/
    secondaryDivBlocks.append(
      tiertiaryDivBlocks,
      textAreaElement,
      savingBtnElement
    );

    savingBtnElement.append(weirdiElement);//append weirdiElement to savingBtnElement

    savingBtnElement.attr("aria-label", "save");//declare an attribute for savingBtnElement  and set it equal to save 

    weirdiElement.attr("aria-hidden", "true");//declare an attribute for weirdiElement  and set it equal to true

    textAreaElement.attr("row", "3");//declare an attribute for textAreaElement  and set it equal to 3

    textAreaElement.text(localStorage.getItem(hoursArray[x]) || "");//set the text of textAreaElement equal to local storage of hoursArray or and empty string
  }
  var saveBtn = $(".saveBtn");//declare variable saveBtn to all elements with the class saveBtn

  /*funtion for timeSet with the parameters hoursArray*/
  function timeSet(hoursArray) {

    /**switch statement for ease jsut changing the value from the array to proper times instead of military time
     * also with the parameters of hoursArray, returns string values based on which case it falls under
    */
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
  }

  /**event listener for the variable saveBtn, use local storage to save values when clicked to the text area*/
  saveBtn.on("click", function () {
    localStorage.setItem(
      $(this).parent().attr("id"),
      $(this).siblings(".description").val()
    );
  });

  /**function colorAdd with parameters hoursArray*/
  function colorAdd(hoursArray) {
    if (hoursArray < nowTime) {//if value of hoursArray is less then the value of variable nowTime
      return "past";//return string past
    } else if (hoursArray > nowTime) {//else if value of hoursArray is greater then the value of variable nowTime
      return "future";//return string future
    } else {//if both conditions aren't met
      return "present";// return string present
    }
  }
});
