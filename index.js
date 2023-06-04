var imgContainer = document.querySelector(".img-container");
var view = document.querySelector(".view");
var view2 = document.querySelector(".view2");

imgContainer.addEventListener("mouseover", function()
{
    view.style.display = "block";
    view2.style.display = "block";

    setTimeout(() => {
        view.style.display = "none";
        view2.style.display = "none";
    }, 2000);
})