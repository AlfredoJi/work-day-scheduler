
// All code in one JQuery function so the code doesnt run till all the elements in the html render.
$(function () {
  // Using dayjs to get the current time in a variable.
  var currentHour = dayjs().hour();
  // Using JQuery to get the ID "currentDay" and adding the current date using dayjs and putting it in the html.
  $("#currentDay").text(dayjs().format("MMM DD YYYY"));
  // Getting the data-hour that was set in the html.
  var hourNine = $("#hour-9")[0].dataset.hour;
  // Using a if statement to compare the current hour to that data-hour.
  if (currentHour > hourNine) {
    // If current hour is greater then data-hour remove "present" from the class and add "past".
    $("#hour-9").removeClass("present").addClass("past");
  } else if (currentHour < hourNine) {
    // If current hour is less then data-hour remove "present" from the class and add "future".
    $("#hour-9").removeClass("present").addClass("future");
  } else {
    // Else keep the "present" class.
    $("#hour-9").removeClass("present").addClass("present");
  }

  // This is just getting the textarea from local storage if there was anything there when the page loads.
  $("#hour-9 textarea").val(localStorage.getItem("9"));

  var hourTen = $("#hour-10")[0].dataset.hour;

  if (currentHour > hourTen) {
    $("#hour-10").removeClass("present").addClass("past");
  } else if (currentHour < hourTen) {
    $("#hour-10").removeClass("present").addClass("future");
  } else {
    $("#hour-10").removeClass("present").addClass("present");
  }

  $("#hour-10 textarea").val(localStorage.getItem("10"));

  var hourEleven = $("#hour-11")[0].dataset.hour;

  if (currentHour > hourEleven) {
    $("#hour-11").removeClass("present").addClass("past");
  } else if (currentHour < hourEleven) {
    $("#hour-11").removeClass("present").addClass("future");
  } else {
    $("#hour-11").removeClass("present").addClass("present");
  }

  $("#hour-11 textarea").val(localStorage.getItem("11"));

  var hourTwelve = $("#hour-12")[0].dataset.hour;

  if (currentHour > hourTwelve) {
    $("#hour-12").removeClass("present").addClass("past");
  } else if (currentHour < hourNine) {
    $("#hour-12").removeClass("present").addClass("future");
  } else {
    $("#hour-12").removeClass("present").addClass("present");
  }

  $("#hour-12 textarea").val(localStorage.getItem("12"));

  var hourOne = $("#hour-1")[0].dataset.hour;

  if (currentHour > hourOne) {
    $("#hour-1").removeClass("present").addClass("past");
  } else if (currentHour < hourOne) {
    $("#hour-1").removeClass("present").addClass("future");
  } else {
    $("#hour-1").removeClass("present").addClass("present");
  }

  $("#hour-1 textarea").val(localStorage.getItem("13"));

  var hourTwo = $("#hour-2")[0].dataset.hour;

  if (currentHour > hourTwo) {
    $("#hour-2").removeClass("present").addClass("past");
  } else if (currentHour < hourTwo) {
    $("#hour-2").removeClass("present").addClass("future");
  } else {
    $("#hour-2").removeClass("present").addClass("present");
  }

  $("#hour-2 textarea").val(localStorage.getItem("14"));

  var hourThree = $("#hour-3")[0].dataset.hour;

  if (currentHour > hourThree) {
    $("#hour-3").removeClass("present").addClass("past");
  } else if (currentHour < hourThree) {
    $("#hour-3").removeClass("present").addClass("future");
  } else {
    $("#hour-3").removeClass("present").addClass("present");
  }

  $("#hour-3 textarea").val(localStorage.getItem("15"));

  var hourFour = $("#hour-4")[0].dataset.hour;

  if (currentHour > hourFour) {
    $("#hour-4").removeClass("present").addClass("past");
  } else if (currentHour < hourFour) {
    $("#hour-4").removeClass("present").addClass("future");
  } else {
    $("#hour-4").removeClass("present").addClass("present");
  }

  $("#hour-4 textarea").val(localStorage.getItem("16"));

  var hourFive = $("#hour-5")[0].dataset.hour;

  if (currentHour > hourFive) {
    $("#hour-5").removeClass("present").addClass("past");
  } else if (currentHour < hourFive) {
    $("#hour-5").removeClass("present").addClass("future");
  } else {
    $("#hour-5").removeClass("present").addClass("present");
  }

  $("#hour-5 textarea").val(localStorage.getItem("17"));

  // This is a button event listener for the save button.
  $("button").click(function () {
    // Grabbing the text from textarea of the timeblock that was saved.
    var textBox = $(this).siblings("textarea").val();
    // Grabbing the data-hour of the said timeblock that was pressed.
    var timeBlock = $(this).parent()[0].dataset.hour;
    // Saving the timeblock and text area to local storage so they can be grabbed if needed.
    localStorage.setItem(timeBlock, textBox);
  })
 
});
