//init
$(".langEN").show()
$(".langPT").hide()

// English Language Switch Function
$("#langEnPicker").click(function () {
    $(".langEN").show()
    $(".langPT").hide()
})

// Portuguese Language Switch Function
$("#langPtPicker").click(function () {
    $(".langPT").show()
    $(".langEN").hide()
})

// Dark Mode Toggle
function darkMode() {
    var docuBody = document.body;
    docuBody.classList.toggle("dark-mode");
    var docuMenu = document.getElementById("offcanvasNavbar");
    docuMenu.classList.toggle("text-bg-dark");
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