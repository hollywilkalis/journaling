$(document).ready(function() {
  $("#entry").submit(function(event) {
    event.preventDefault();

    var title = $("#journal-title").val();
    var titleArray = title.split(" ");
    console.log(titleArray.length);
    var entry = $("#journal-entry").val();
    var entryArray = entry.split(" ");

    $("#results").append("<h2>" + title + "</h2>");
    $("#results").append("<p>" + entry + "</p>");

  });
});
