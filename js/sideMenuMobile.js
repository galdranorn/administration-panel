// ---------- SIDE MENU MOBILE ------------- 

var dropdownBtn = document.getElementById('dropdown-toggle');
var menuContent = document.getElementById('dropdown-content');
//var postback = document.getElementById('postback');
// functions for buttons
dropdownBtn.addEventListener('click', function(){
    menuContent.classList.toggle('unvisible-menu'); 
})

