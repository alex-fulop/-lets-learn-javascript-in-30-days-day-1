document.querySelector("button").addEventListener("click", function () {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.querySelector("body").style.background = '#' + randomColor;
});