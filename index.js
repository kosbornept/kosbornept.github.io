//init
$(".langEN").show()
$(".langPT").hide()
let langLocal = localStorage.getItem("lang-local")

// English Language Switch Function
$("#langEnPicker").click(function () {
    $(".langEN").show()
    $(".langPT").hide()
    localStorage.setItem("lang-local", "english");
})
$("#langEnPickerMobile").click(function () {
    $(".langEN").show()
    $(".langPT").hide()
    localStorage.setItem("lang-local", "english-mobile");
})

// Portuguese Language Switch Function
$("#langPtPicker").click(function () {
    $(".langPT").show()
    $(".langEN").hide()
    localStorage.setItem("lang-local", "portugues");
})
$("#langPtPickerMobile").click(function () {
    $(".langPT").show()
    $(".langEN").hide()
    localStorage.setItem("lang-local", "portugues-mobile");
})

// Lang Local Storage
if (langLocal == "english") {
    $(".langEN").show()
    $(".langPT").hide()
} else if (langLocal == "english-mobile") {
    $(".langEN").show()
    $(".langPT").hide()
} else if (langLocal == "portugues") {
    $(".langEN").hide()
    $(".langPT").show()
} else if (langLocal == "portugues-mobile") {
    $(".langEN").hide()
    $(".langPT").show()
}

// Nav Hide on Scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navScroll").style.top = "0";
  } else {
    document.getElementById("navScroll").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}

// Dark Mode Toggle
let darkLocal = localStorage.getItem("dark-local")
let selCheck = document.getElementById("toggleSwitch");
selCheck.checked = (localStorage.getItem("dark-switch")=="true");
function darkMode() {
    var docuBody = document.body;
    var selCheck = document.getElementById("toggleSwitch");
    docuBody.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-local", "enabled");
        localStorage.setItem("dark-switch", selCheck.checked);
    } else {
        localStorage.setItem("dark-local", "disabled");
        localStorage.setItem("dark-switch", selCheck.unchecked);
    }
}
if (darkLocal === "enabled") {
    darkMode();
}   

// Intersection Observer for Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Intersection Observer for Active Nav Link
const navObserver = new IntersectionObserver((entries, options) => {
    var dropItemMenu = '.projectDrop'
    $(dropItemMenu).removeClass("active")
    entries.forEach((entry) => {
        // console.log($(entry.target));
        var navActive = $(entry.target).data('navbar-item');
        if (entry.isIntersecting) {
            $(navActive).addClass("active")
            if (entry.target.classList.contains('dropCheck')) {
                $(dropItemMenu).addClass("active")
            }
        } else {
            $(navActive).removeClass("active")
        }
    });
}, {
    threshold: .7
});
const activeNav = document.querySelectorAll('[data-navbar-item]');
activeNav.forEach((el) => navObserver.observe(el));