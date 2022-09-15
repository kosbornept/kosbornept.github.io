//init
$("#aboutPage").show()
$("#projectPage").hide()
$("#contactPage").hide()
$(".langEN").show()
$(".langPT").hide()

$("#langEnPicker").click(function(){
    $(".langEN").show()
    $(".langPT").hide()
})

$("#langPtPicker").click(function(){
    $(".langPT").show()
    $(".langEN").hide()
})

$(".homeAbout").click(function(){
    $("#aboutPage").show()
    $(".homeAbout").addClass("active")
    $("#projectPage").hide()
    $(".homeProject").removeClass("active")
    $("#contactPage").hide()
    $(".homeSkills").removeClass("active")
})
$(".homeProject").click(function(){
    $("#projectPage").show()
    $(".homeProject").addClass("active")
    $("#aboutPage").hide()
    $(".homeAbout").removeClass("active")
    $("#contactPage").hide()
    $(".homeSkills").removeClass("active")
})
$(".homeSkills").click(function(){
    $("#contactPage").show()
    $(".homeSkills").addClass("active")
    $("#projectPage").hide()
    $(".homeProject").removeClass("active")
    $("#aboutPage").hide()
    $(".homeAbout").removeClass("active")
})

function darkMode() {
    var docuBody = document.body;
    docuBody.classList.toggle("dark-mode");
    var docuMenu = document.getElementById("offcanvasNavbar");
    docuMenu.classList.toggle("text-bg-dark");
 }