//  When mouse hover on the  products
$(document).ready(function () {
  $("#products").mouseenter(function () {
    $("#toggler").stop().show();
  });

  $("#products, #toggler").mouseleave(function () {
    if (!$("#toggler").is(":hover")) {
      $("#products").trigger("mouseover");
      $("#toggler").hide();
    }
  });
});
// For Bottom When mouse hover on the products
$(document).ready(function () {
  $(".products").click(function () {
    $("#toggler").stop().show();
  });

  $(".products, #toggler").mouseleave(function () {
    if (!$("#toggler").is(":hover")) {
      $(".products").trigger("mouseover");
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

// -----PRODUCT CATEGORY SHOW OR HIDE-----
// CATEGORY A-1
$(document).ready(function () {
  $("#parent__biometric").click(function () {
    $("#productCategoryA-1").stop().show();
  });

  $("#parent__biometric, #productCategoryA-1").mouseleave(function () {
    if (!$("#category__product").is(":hover")) {
      $("#productCategoryA-1").hide();
    }
  });
});
// CATEGORY A-2
$(document).ready(function () {
  $("#subcategoryA-2").mouseenter(function () {
    $("#productCategoryA-2").stop().show();
  });

  $("#subcategoryA-2, #productCategoryA-2").mouseleave(function () {
    if (!$("#category__product").is(":hover")) {
      $("#productCategoryA-2").hide();
    }
  });
});
// CATEGORY A-3
$(document).ready(function () {
  $("#subcategoryA-3").mouseenter(function () {
    $("#productCategoryA-3").stop().show();
  });

  $("#subcategoryA-3, #productCategoryA-3").mouseleave(function () {
    if (!$("#category__product").is(":hover")) {
      $("#productCategoryA-3").hide();
    }
  });
});

// CATEGORY A-4
$(document).ready(function () {
  $("#subcategoryA-4").mouseenter(function () {
    $("#productCategoryA-4").stop().show();
  });

  $("#subcategoryA-4, #productCategoryA-4").mouseleave(function () {
    if (!$("#category__product").is(":hover")) {
      $("#productCategoryA-4").hide();
    }
  });
});

// CATEGORY B-3
$(document).ready(function () {
  $("#subcategoryB-1").mouseenter(function () {
    $("#productCategoryB-1").stop().show();
  });

  $("#subcategoryB-1, #productCategoryB-1").mouseleave(function () {
    if (!$("#category__product").is(":hover")) {
      $("#productCategoryB-1").hide();
    }
  });
});
// CATEGORY C-1
$(document).ready(function () {
  $("#subcategoryC-1").mouseenter(function () {
    $("#productCategoryC-1").stop().show();
  });

  $("#subcategoryC-1, #productCategoryBC-1").mouseleave(function () {
    if (!$("#category__product").is(":hover")) {
      $("#productCategoryC-1").hide();
    }
  });
});

// CATEGORY C-2`
$(document).ready(function () {
  $("#subcategoryC-3").mouseenter(function () {
    $("#productCategoryC-2").stop().show();
  });

  $("#subcategoryC-2, #productCategoryBC-2").mouseleave(function () {
    if (!$("#category__product").is(":hover")) {
      $("#productCategoryC-2").hide();
    }
  });
});

// CATEGORY C-3
$(document).ready(function () {
  $("#subcategoryC-3").mouseenter(function () {
    $("#productCategoryC-3").stop().show();
  });

  $("#subcategoryC-3, #productCategoryBC-3").mouseleave(function () {
    if (!$("#category__product").is(":hover")) {
      $("#productCategoryC-3").hide();
    }
  });
});
