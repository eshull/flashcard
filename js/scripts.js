$(document).ready(function() {

    $(".contents").click(function() {
      $(".flashcard", this).slideToggle();
      $(".info", this).slideToggle();
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
