// ---------- PAGES CHANGING ------------- 
// VARIABLES
//side menu buttons
var menuGeneral = document.getElementById('menuGeneral');
var menuDetails = document.getElementById('menuDetails');
var menuLinks = document.getElementById('menuLinks');
var menuBanners = document.getElementById('menuBanners');
var menuPersonalData = document.getElementById('menuPersonalData');
var menuPayout = document.getElementById('menuPayout');
var menuPostback = document.getElementById('menuPostback');
//pages
var general = document.getElementById('general');
var statistics = document.getElementById('statistics');
var details = document.getElementById('details');
var links = document.getElementById('links');
var banners = document.getElementById('banners');
var personalData = document.getElementById('personalData');
var payout = document.getElementById('payout');
//var postback = document.getElementById('postback');
// functions for buttons
menuGeneral.addEventListener('click', function(){
    general.classList.remove('unvisible');
    statistics.classList.remove('unvisible');
    links.classList.remove('unvisible');
    details.classList.add('unvisible');
    banners.classList.add('unvisible');
    personalData.classList.add('unvisible');
    payout.classList.add('unvisible');
    postback.classList.add('unvisible');
});
menuDetails.addEventListener('click', function(){
    general.classList.add('unvisible');
    statistics.classList.add('unvisible');
    links.classList.add('unvisible');
    details.classList.remove('unvisible');
    banners.classList.add('unvisible');
    personalData.classList.add('unvisible');
    payout.classList.add('unvisible');
    postback.classList.add('unvisible');
});
menuLinks.addEventListener('click', function(){
    general.classList.remove('unvisible');
    statistics.classList.add('unvisible');
    links.classList.remove('unvisible');
    details.classList.add('unvisible');
    banners.classList.add('unvisible');
    personalData.classList.add('unvisible');
    payout.classList.add('unvisible');
    postback.classList.add('unvisible');
});
menuBanners.addEventListener('click', function(){
    general.classList.add('unvisible');
    statistics.classList.add('unvisible');
    links.classList.add('unvisible');
    details.classList.add('unvisible');
    banners.classList.remove('unvisible');
    personalData.classList.add('unvisible');
    payout.classList.add('unvisible');
    postback.classList.add('unvisible');
});
menuPersonalData.addEventListener('click', function(){
    general.classList.add('unvisible');
    statistics.classList.add('unvisible');
    links.classList.add('unvisible');
    details.classList.add('unvisible');
    banners.classList.add('unvisible');
    personalData.classList.remove('unvisible');
    payout.classList.add('unvisible');
    postback.classList.add('unvisible');
});
menuPayout.addEventListener('click', function(){
    general.classList.add('unvisible');
    statistics.classList.add('unvisible');
    links.classList.add('unvisible');
    details.classList.add('unvisible');
    banners.classList.add('unvisible');
    personalData.classList.add('unvisible');
    payout.classList.remove('unvisible');
    postback.classList.add('unvisible');
});
