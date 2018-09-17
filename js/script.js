// MODAL FOR ADDING LINKS 

var quitModal = document.getElementById('quitModal');
var quitBtn = document.getElementById("quitBtn");
var quitCancelBtn = document.getElementById("quitCancelBtn");
var quitQuitBtn = document.getElementById("quitQuitBtn");
var quitModalClose = document.getElementsByClassName("close")[1];

quitBtn.onclick = function() {quitModal.style.display = "block";}
quitModalClose.onclick = function() {quitModal.style.display = "none";}
quitCancelBtn.onclick = function() {quitModal.style.display = "none";}
quitQuitBtn.onclick = function () {window.top.close();}
window.onclick = function(event) {
    if (event.target == quitModal) {
        quitModal.style.display = "none";
    }
}
/* LOGIN BTN */
var loginBtn = document.getElementById('loginBtn');
var loginModal = document.getElementById("loginModal");
var loginModalClose = document.getElementsByClassName("close")[2];

loginBtn.onclick = function() {loginModal.style.display = "block";}
loginModalClose.onclick = function() {loginModal.style.display = "none";}
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}

/* NOTIFICATIONS */

var notificationBtn = document.getElementById('notificationBtn');
var notificationModal = document.getElementById("notificationModal");
var notificationModal = document.getElementById("notificationModal");
var notificationModalClose = document.getElementsByClassName("close")[3];

notificationBtn.onclick = function() {notificationModal.style.display = "block";}
notificationModalClose.onclick = function() {notificationModal.style.display = "none";}
okayBtn.onclick = function() {notificationModal.style.display = "none";}
window.onclick = function(event) {
    if (event.target == notificationModal) {
        notificationModal.style.display = "none";
    }
}