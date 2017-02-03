import $ from 'jquery';
var mega = {};
mega.$ = $;
$.ready
$( document ).ready(function() {
  console.log("jQuery ready!");
});
$("html").css('background-color','red');

export var mega = mega;
