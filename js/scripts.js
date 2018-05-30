$(document).ready(function() {

    $(".contents").click(function() {
      $(".flashcard", this).toggle();
      $(".info", this).toggle();
    });
});

/*
$(document).ready(function() {
  $(".contents").click() {
    $(this).click(function() {
      $(".flashcard").toggle();
      $(".info").toggle();
    });
  });

});
*/
