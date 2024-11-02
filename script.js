let inputArea = document.getElementById("inputArea");

let keys = document.querySelectorAll(".inp");
keys.forEach(key => {
    key.addEventListener('click', function () {
        inputArea.value += key.value;
    });
});
document.getElementById("spaceBar").addEventListener('click', function () {
    inputArea.value += " ";
});

let light = document.getElementById("light");

let dark = document.getElementById("dark");

let container = document.getElementById('container');

let keyBox = document.querySelector(".key-box");

light.addEventListener('click', function () {
    light.style.display = "none";
    dark.style.display = "block";
    container.style.background = "black";
    keyBox.style.background = "black";
    inputArea.style.background = "black";
    inputArea.style.color = "white";
    document.getElementById("spaceBar").style.background = "black";

    document.getElementById("link").style.display = "none"

    keys.forEach(key => {

        key.style.background = "black";
    });
});


dark.addEventListener('click', function () {
    light.style.display = "block";
    dark.style.display = "none";
    container.style.background = "#dde1e7";
    keyBox.style.background = "#dde1e7";
    inputArea.style.background = "#dde1e7";
    inputArea.style.color = "rgb(0,179,255)";
    document.getElementById("spaceBar").style.background = "#dde1e7";
    document.getElementById("spaceBar").style.color = "grey";

    document.getElementById("link").style.display = "block"
    keys.forEach(key => {

        key.style.background = "#dde1e7";
    });
});
