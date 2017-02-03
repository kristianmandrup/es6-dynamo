import $ from 'jquery';
var mega = {};
mega.$ = $;
$.ready
$( document ).ready(function() {
  console.log("jQuery ready!");
});
$("html").css('background-color','green');

export var mega = mega;
