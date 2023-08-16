import $ from "jquery";
import _ from "lodash";
import "./body.css";

$("body").append('<p>Dashboard data for the students</p>');
$("body").append('<button>Click here to get started</button>');
$("body").append('<p id="count"></p>');

// clickupdater
let count = 0;

 const updateCounter = _.debounce(function() {
    count++;
    $("#count").text(`${count} clicks on the button`);
 }, 500);

 $("button").on('click', updateCounter);