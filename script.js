// var footerEl = document.getElementsByTagName("footer")[0];

// var onFooterClick = function() {
//     console.log("clique");
//    };

//  footerEl.addEventListener("click", onFooterClick);

// exo 1
var footerEl = document.getElementsByTagName("footer")[0];

 footerEl.addEventListener("click", function(){
    console.log("clique");
 });

//  exo 1-bis
 var footerEl = document.getElementsByTagName("footer")[0];
var x = 1
 footerEl.addEventListener("click", function(){
    console.log("Clic numéro:" + x);
    x++;
 });

//  exo 2
var HamburgerBtn = document.getElementsByClassName("navbar-toggler")[0];
var navbar = document.getElementById("navbarHeader");

var onHamburgerBtnClick = function() {
       navbar.classList.toggle("collapse");
       };

HamburgerBtn.addEventListener("click", onHamburgerBtnClick);

// exo 3
var EditBtn = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
var TexteCard = document.getElementsByClassName("card-text")[0];
var clickOnEdit = function () {
    TexteCard.style.color = "red"
};

EditBtn.addEventListener("click", clickOnEdit);

// exo 4
var EditBtn2 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
var TexteCard = document.getElementsByClassName("card-text")[1];
var clickOnEdit2 = function () {
    TexteCard.style.color = "green"
};

EditBtn2.addEventListener("click", clickOnEdit2);

var EditBtn2 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
var TexteCard = document.getElementsByClassName("card-text")[1];
var clickOnEdit2 = function () {
    if (TexteCard.style.color === 'green'){
        TexteCard.style.color = '' ;
        } else {TexteCard.style.color = "green"}    
};
EditBtn2.addEventListener("click", clickOnEdit2);

// exo 5
// var Navbar2 = document.getElementsByClassName("navbar navbar-dark bg-dark box-shadow")[0];
// var link = document.getElementsByTagName("link")[0];
// var disableLink = function () {
//   link.href = ' ';
// };

// Navbar2.addEventListener("dblclick", disableLink);

var Navbar2 = document.getElementsByClassName("navbar navbar-dark bg-dark box-shadow")[0];
var link = document.getElementsByTagName("link")[0];
var disableLink = function () {
    if (link.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"){
        link.href = ' ' ;
        } else {link.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"}    
};

Navbar2.addEventListener("dblclick", disableLink);

// if (TexteCard.style.color === 'green'){
//     TexteCard.style.color = '' ;
//     } else {TexteCard.style.color = "green"}    

 










