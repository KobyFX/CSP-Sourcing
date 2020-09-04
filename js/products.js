//function to show th modal and hide it
(function () {
    var showBtn = document.querySelectorAll(".btn-show-modal");
    showBtn.forEach(function (item) {
        item.addEventListener("click", function () {
            var modalBox = this.parentElement.parentElement.querySelector(".container-modal-box");
            var modalImg = modalBox.querySelector(".book-img img");
            modalImg.src = this.parentElement.parentElement.querySelector(".thumb-img img").src;
            fadeIn(modalBox, 30);
            var closeBtn = modalBox.querySelector(".btn-close-modal");
            closeBtn.addEventListener("click", function () {
                fadeOut(modalBox, 50);
            });
        });
    });

})();
//ffade in function
function fadeIn(element, time) {
    var fadingFrom = 0;
    element.style.opacity = 0;
    var fading = setInterval(function () {
        var fade = fadingFrom / time;
        element.style.display = "block";
        element.style.opacity = fade;
        fadingFrom++;
        if (fadingFrom == time) {
            element.style.opacity = 1;
            clearInterval(fading);
            fadingFrom = 0;
            return false;
        }
    }, time);
}

//fade out function
function fadeOut(element, time) {
    var fadingFrom = 10;
    var fading = setInterval(function () {
        var fade = fadingFrom / time;
        element.style.opacity = fade;
        fadingFrom--;
        if (fadingFrom == 0) {
            element.style.opacity = 0;
            element.style.display = "none";
            clearInterval(fading);
            fadingFrom = 10;
            return false;
        }
    }, time);
}