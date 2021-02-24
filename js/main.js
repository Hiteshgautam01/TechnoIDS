var currentActiveDiv=""
var currentActiveDiv2=""


// $("#product-list").hide()

$.fn.showFlex = function() {
    this.css('display','flex');
    this.css('transition','0.2s');

  }


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