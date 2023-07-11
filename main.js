// Main Javascript

function myFunction() {
    var x = document.getElementsByClassName("navbar__nav__dropdown__items");
    console.log(x);
    if (x[0].style.display === "block") {
        x[0].style.display = "none";
    } else {
        x[0].style.display = "block";
    }
}