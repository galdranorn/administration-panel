var addLinkModal = document.getElementById('addLinkModal');
var addLinkBtn = document.getElementById("addLinkBtn");
var addLinkBtn2 = document.getElementById("addLinkBtn2");
var addLinkModalClose = document.getElementsByClassName("close")[0];

addLinkBtn.onclick = function() {addLinkModal.style.display = "block";}
addLinkModalClose.onclick = function() {addLinkModal.style.display = "none";}
window.onclick = function(event) {
    if (event.target == addLinkModal) {
        addLinkModal.style.display = "none";
    }
}

addLinkBtn2.onclick = function() {addLinkModal.style.display = "block";}
addLinkModalClose.onclick = function() {addLinkModal.style.display = "none";}
window.onclick = function(event) {
    if (event.target == addLinkModal) {
        addLinkModal.style.display = "none";
    }
}