// MODAL FOR ADDING LINKS

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


// MODAL FOR ADDING BANNERS

var addBannerModal = document.getElementById('addBannerModal');
var addBannerBtn = document.getElementById("addBannerBtn");
var addBannerBtn2 = document.getElementById("addBannerBtn2");
var addBannerModalClose = document.getElementById("bannerModalClose");

addBannerBtn.onclick = function() {
    addBannerModal.style.display = "block";
}
addBannerModalClose.onclick = function() {
    addBannerModal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == addBannerModal) {
        addBannerModal.style.display = "none";
    }
}

addBannerBtn2.onclick = function() {
    addBannerModal.style.display = "block";
}
addBannerModalClose.onclick = function() {
    addBannerModal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == addBannerModal) {
        addBannerModal.style.display = "none";
    }
}