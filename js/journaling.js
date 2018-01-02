function Entry(title, entry) {
  this.title = title;
  this.entry = entry;
}

Entry.prototype.wordCount = function() {
  var output = [];
}

// $(document).ready(function() {
//   $("#entry").submit(function(event) {
//     event.preventDefault();
//
//     var title = $("#journal-title").val();
//     var titleArray = title.split(" ");
//     var entry = $("#journal-entry").val();
//     var entryArray = entry.split(" ");
//
//     $("#results").append("<h2>" + title + "</h2>");
//     $("#results").append("<p>" + entry + "</p>");
//
//   });
// });
