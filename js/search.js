var bangButtons = document.getElementsByClassName("bang-button");
var searchBox = document.getElementById("searchBox");

for (let i = 0; i < bangButtons.length; i++) {
    bangButtons[i].addEventListener('click', function() {
        searchBox.value = bangButtons[i].textContent.split(" ")[0] + " ";
        searchBox.focus();
    });
}
