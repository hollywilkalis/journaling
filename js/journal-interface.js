var Entry = require("./../js/journaling.js").journalingModule;

$(document).ready(function() {
  $("#entry").submit(function(event) {
    event.preventDefault();

    var title = $("#journal-title").val();
    var titleCharLength = title.length;
    var titleArray = title.split(" ");
    var entry = $("#journal-entry").val();
    var entryCharLength = entry.length;
    var entryArray = entry.split(" ");

    var lowercaseTitle = title.toLowerCase();
    var lowercaseEntry = entry.toLowerCase();

    $("#results").append("<h3>" + title + "</h3> <p>" + entry + "</p> <p>Your entry has "+ entryArray.length + " words</p>");

    $('#entry')[0].reset();


  });
});
