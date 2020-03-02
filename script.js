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
var TexteCard1 = document.getElementsByClassName("card-text")[0];
var clickOnEdit = function () {
    TexteCard1.style.color = "red"
};

EditBtn.addEventListener("click", clickOnEdit);

var EditBtn2 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
var TexteCard = document.getElementsByClassName("card-text")[1];
var clickOnEdit2 = function () {
    if (TexteCard.style.color === 'green'){
        TexteCard.style.color = '' ;
        } else {TexteCard.style.color = "green"}    
};
EditBtn2.addEventListener("click", clickOnEdit2);

// exo 5
var Navbar2 = document.getElementsByClassName("navbar navbar-dark bg-dark box-shadow")[0]
 var link = document.getElementsByTagName("link")[0]
 var disableLink = function (){
    if (link.disabled == true) {
    link.disabled = false
    } else { 
    link.disabled = true
}
 }

 Navbar2.addEventListener("dblclick", disableLink);

 //exo 6
const BtnView = document.getElementsByClassName("btn btn-sm btn-success");
 const card = document.getElementsByClassName("card");
 const cardText = document.getElementsByClassName('card-text');

for(let i = 0; i < BtnView.length; i++){
    BtnView[i].addEventListener("mouseover", function(){
      cardText[i].classList.toggle("collapse");
      if (card[i].style.width === "20%"){
      card[i].style.width = "100%";}
     else { 
         card[i].style.width = "20%";
        }
 });
    }




 










