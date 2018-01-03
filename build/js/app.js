(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Entry = require("./../js/journaling.js").journalingModule;

$(document).ready(function() {
  $("#entry").submit(function(event) {
    event.preventDefault();

    var title = $("#journal-title").val();
    var titleCharLength = title.length;
    console.log(titleCharLength);
    var titleArray = title.split(" ");
    var entry = $("#journal-entry").val();
    var entryArray = entry.split(" ");

    var lowercaseTitle = title.toLowerCase();
    var lowercaseEntry = entry.toLowerCase();

    $("#results").append("<h3>" + title + "</h3> <p>" + entry + "</p> <p>Your entry has "+ entryArray.length + " words</p>");

    $('#entry')[0].reset();


  });
});

},{"./../js/journaling.js":2}],2:[function(require,module,exports){
function Entry(title, entry) {
  this.title = title;
  this.entry = entry;
}

Entry.prototype.wordCount = function() {
  var output = [];
}







var vowels = ["a", "e", "i", "o", "u"];




exports.journalingModule = Entry

},{}]},{},[1]);
