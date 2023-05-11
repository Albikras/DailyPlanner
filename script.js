var primaryDiv = $("#primaryDiv");

var today = $("#currentDay");
var divContainer = $("#rowContainer");

var nowTime = dayjs().hour();

var hoursArray = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

function dailyDate() {
  var todaysDate = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
  today.text(todaysDate);
}
dailyDate();

setInterval(dailyDate, 1000);

$(document).ready(function () {
  for (var x = 0; x < hoursArray.length; x++) {
    var secondaryDivBlocks = $("<div></div>");
    var tiertiaryDivBlocks = $("<div></div>");
    var textAreaElement = $("<textarea></textarea>");
    var savingBtnElement = $("<button></button>");
    var weirdiElement = $("<i></i>");

    primaryDiv.append(secondaryDivBlocks);

    secondaryDivBlocks.addClass(`row time-block ${colorAdd(hoursArray[x])}`);
    secondaryDivBlocks.attr("id", hoursArray[x]);

    tiertiaryDivBlocks.addClass("col-2 col-md-1 hour text-center py-3");

    tiertiaryDivBlocks.text(timeSet(hoursArray[x]));

    textAreaElement.addClass("col-8 col-md-10 description");

    savingBtnElement.addClass(`btn saveBtn col-2 col-md-1`);

    weirdiElement.addClass("fas fa-save");

    secondaryDivBlocks.append(
      tiertiaryDivBlocks,
      textAreaElement,
      savingBtnElement
    );

    savingBtnElement.append(weirdiElement);

    savingBtnElement.attr("aria-label", "save");

    weirdiElement.attr("aria-hidden", "true");

    textAreaElement.attr("row", "3");

    textAreaElement.text(localStorage.getItem(hoursArray[x]) || "");
  }
  var saveBtn = $(".saveBtn");

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
  }

  saveBtn.on("click", function () {
    localStorage.setItem(
      $(this).parent().attr("id"),
      $(this).siblings(".description").val()
    );
  });

  function colorAdd(hoursArray) {
    if (hoursArray < nowTime) {
      return "past";
    } else if (hoursArray > nowTime) {
      return "future";
    } else {
      return "present";
    }
  }
});
