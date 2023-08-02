window.onscroll = function()
{stickyMenu()};

var menu =
document.querySelector(".menu");
var headerHeight =
document.querySelector(".head").offsetHeight;
var content = document.querySelector(".content");
var sticky = menu.offsetTop;

function stickyMenu() {
    if (window.pageYOffset >= sticky)
    {
        menu.classList.add("sticky");
        content.style.marginTop = headerHeight + "px";

    } else {
        menu.classList.remove("sticky");
        document.body.style.paddingTop = 0;
    }
}