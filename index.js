$(function () {

    //This function is to add the user entry from the input
    //to the end of the list as a list item
    $("#js-shopping-list-form").submit(function (event) {
      // this stops the default form submission behavior
      event.preventDefault();

      let userValue = $("#js-shopping-list-form :input").val();

      let large = "<li><span class='shopping-item'>" + userValue + "</span> <div class='shopping-item-controls'> <button class='shopping-item-toggle'> <span class='button-label'>check</span> </button> <button class='shopping-item-delete'> <span class='button-label'>delete</span> </button> </div> </li>"

      $("ul").append(large);
    });


    //When check is click, the item is crossed
    $(document).on('click', '.shopping-item-toggle', function (event) {
      // toggle the presence of 'strike through' on this item;
      $(this).parent().prev().toggleClass("shopping-item__checked");
    });


    //When delete is clicked, whole 'li' is removed
    $(document).on('click', '.shopping-item-delete', function (event) {
      //removes the whole li
      $(this).parent().prev().parent().remove();
    });
  });
