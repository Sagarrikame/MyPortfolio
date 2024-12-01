
function opentab(tabname){
    $(".tab-links").removeClass("active-link");
    $(".tab-contents").removeClass("active-tab");
    event.currentTarget.classList.add("active-link");
    $("#"+tabname).addClass("active-tab");
}

function openmenu(){
    $("#sidemenu").css("right","0");
}
function closemenu(){
    $("#sidemenu").css("right","-400px");
}