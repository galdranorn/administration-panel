// MODAL FOR ADDING LINKS 

var addLinkModal = document.getElementById('addLinkModal');
var addLinkBtn = document.getElementById("addLinkBtn");
var addLinkModalClose = document.getElementsByClassName("close")[0];

addLinkBtn.onclick = function() {addLinkModal.style.display = "block";}
addLinkModalClose.onclick = function() {addLinkModal.style.display = "none";}
window.onclick = function(event) {
    if (event.target == addLinkModal) {
        addLinkModal.style.display = "none";
    }
} 
