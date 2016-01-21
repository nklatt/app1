var colorOne = "blue";
var colorTwo = "red";
var nextColor = colorOne;
$(".board td").on("click", function() {
  $(this).css("background-color", nextColor);
  nextColor = nextColor === colorOne ? colorTwo : colorOne;
});
$("#reset").on("click", function() {
  $(".board td").css("background-color", "white");
});
$(".colA").css("background-color", "purple");
