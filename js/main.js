var currentActiveDiv=""

var currentActiveDiv2=""


$("#product-list").hide()

$.fn.showFlex = function() {
    this.css('display','flex');
    this.css('transition','0.2s');

  }

  $(document).on("mouseover", ".nav-dropdown-first-col a", function () {
      $(".nav-dropdown-first-col a").css("background","rgba(15, 15, 15, 0.938)")
      $(".nav-dropdown-first-col a").css("color","rgb(129, 132, 143)")

    $(this).css("background","#fd871f")
    $(this).css("color","black")


})

$(document).on("mouseover", ".nav-dropdown-second-col a", function () {
    $(".nav-dropdown-second-col a").css("background","rgba(15, 15, 15, 0.938)")
    $(".nav-dropdown-second-col a").css("color","rgb(129, 132, 143)")


  $(this).css("background","#fd871f")
  $(this).css("color","black")

})

function showSubCategory(id)
{ 
    if(currentActiveDiv2!=="")
    {
        $(currentActiveDiv2).hide()
    }
    if (currentActiveDiv!=="") {
        $(currentActiveDiv).hide()
        $(id).showFlex();
        currentActiveDiv=id
       
    }
    else
    {
        $(id).showFlex();
        currentActiveDiv=id 
    }
}

function showSubCategoryItems(id)
{
    if (currentActiveDiv2!=="") {
        $(currentActiveDiv2).hide()
        $(id).showFlex();
        currentActiveDiv2=id
    }
    else
    {
        $(id).showFlex();
        currentActiveDiv2=id 
    }
}

var mousevisited=false
function mouseinout(id)
{
if(mousevisited)
{
    $(id).slideUp(200)
    mousevisited=false
}
else{
    $(id).slideDown(200)
    mousevisited=true
}
}



$('#product-list').mouseleave(function(event) {
    $(this).hide()
    mousevisited=false
  });

