$(document).ready(function() {
  // check off todos by clicking
  $("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
  });

  // click on x to remove todo
  $("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
      $(this).remove();
    });
    // prevens li click
    event.stopPropagation();
  });

  // add input box to todo list
  $("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
      // get text in input
      let newToDo = $(this).val();
      $(this).val("");
      // creates a new todo in the list
      $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + newToDo + "</li>");
    }
  });

  // toggle inputbox
  $(".fa-plus").on("click", function() {
    $("input[type='text']").fadeToggle();
  });





}); //closes document ready

