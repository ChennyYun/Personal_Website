document.addEventListener("scroll", function () {
    var animatedDivs = document.querySelectorAll(".animated-div");
    var scrollPosition = window.scrollY + window.innerHeight;

    animatedDivs.forEach(function (animatedDiv) {
        var offsetTop = animatedDiv.offsetTop+animatedDiv.offsetParent.offsetTop;
        var offsetBottom = offsetTop + animatedDiv.offsetHeight;
        var something = scrollPosition + window.innerHeight
        // Check if the user has scrolled to the position of the element
        if (scrollPosition > offsetTop && scrollPosition < offsetBottom + window.innerHeight) {
            // Add class to make the div visible
            animatedDiv.classList.remove("hidden");
            animatedDiv.classList.add("visible");
        } else {
            // If scrolled away from the element, hide it again
            animatedDiv.classList.remove("visible");
            animatedDiv.classList.add("hidden");
        }
    });
});

// document.querySelectorAll('.proj-clickable').forEach(element => {
//     element.addEventListener('mouseenter', function (event) {
//         const oldInfo = document.getElementById("old-info");
//         const newInfo = document.getElementById("new-info");
//         const card = document.getElementById("projCard");
//         newInfo.classList.remove("hide-left");
//         newInfo.classList.add("show");
//         oldInfo.classList.add("hide-right");
//         setTimeout(function () {
//             card.removeChild(oldInfo);
//             [oldInfo.id, newInfo.id] = [newInfo.id, oldInfo.id]
//             console.log(oldInfo.id);
//             console.log(newInfo.id);
//             oldInfo.classList.remove("show");
//             oldInfo.classList.remove("hide-right");
//             oldInfo.classList.add("hide-left");
//             card.appendChild(oldInfo);
//         }, 500);

//     });
// });