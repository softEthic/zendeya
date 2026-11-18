alert("JavaScript is working!");


const hamburger = document.getElementById("hamburger");
const navigation = document.getElementById("menu");

hamburger.onclick = function () {
    navigation.classList.toggle("open");
};