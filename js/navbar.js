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

//------ TOGGLE PARENT CTAEGORY -------
//FOR ACCESS
$(document).ready(function () {
  $("#parent__access").mouseenter(function () {
    $("#child__access").stop().show();
  });

  $("#parent__access, #child__access").mouseleave(function () {
    if (!$("#child__access").is(":hover")) {
      $("#child__access").hide();
    }
  });
});
//FOR SECURITY
$(document).ready(function () {
  $("#parent__security").mouseenter(function () {
    $("#child__security").stop().show();
  });

  $("#parent__security, #child__security").mouseleave(function () {
    if (!$("#child__security").is(":hover")) {
      $("#child__security").hide();
    }
  });
});
//FOR PARKING
$(document).ready(function () {
  $("#parent__parking").mouseenter(function () {
    $("#child__parking").stop().show();
  });

  $("#parent__parking, #child__parking").mouseleave(function () {
    if (!$("#child__parking").is(":hover")) {
      $("#child__parking").hide();
    }
  });
});
