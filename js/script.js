// MODAL FOR ADDING LINKS 


var quitModal = document.getElementById('quitModal');
var quitBtn = document.getElementById("quitBtn");

quitBtn.onclick = function() {quitModal.style.display = "block";}
quitModalClose.onclick = function() {quitModal.style.display = "none";}
window.onclick = function(event) {
    if (event.target == quitModal) {
        quitModal.style.display = "none";
    }
}