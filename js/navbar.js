//  When mouse hover on the  products
$(document).ready(function () {
  $("#products").mouseenter(function () {
    $("#toggler").stop().show();
  });

  $("#products, #toggler").mouseleave(function () {
    if (!$("#toggler").is(":hover")) {
      $("#toggler").hide();
    }
  });
});
