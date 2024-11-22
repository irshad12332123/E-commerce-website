import  {products}  from "./products.js";
import { socialMediaImg } from "./socialMediaImages.js";
let innerProdFrame = document.querySelector("#inner-prod-frame");//selecting outer frame for painting the cards

let socialOuterFrame = document.querySelector("#social-icon-frame");//selecting outer frame of social icon to display it by using javascript

let menuIcon = document.querySelector("#menu");// selecting the menu icon

let closeIcon = document.querySelector("#close");// selecting the menu icon

let sideBar = document.querySelector("#sidebar");// selecting the aside div


// This block is for painting the product cards
let ProdHTML = ``;
products.forEach((prodObj) => {
  let html = `<div class="item item1">
              <div class="item-inner-frame">
              <div class="item-inner-frame-img">
              <img src="assets/images/${prodObj.imgSrc}" alt="${prodObj.name} ">
              </div>
              <p>${prodObj.name}</p>
              <p>${prodObj.rating}</p>
              <p>${prodObj.price}</p>
              <button class="btn buy-btn">Buy</button>
              <button class="btn cart-btn">Add to cart</button>
             </div>
            </div>`;
            ProdHTML += html;
  innerProdFrame.innerHTML = ProdHTML;
});

// This block is for painting the social media icons
let imgHTML = ``;
socialMediaImg.forEach((source)=>{  
  let html = `<img src="assets/images/${source.src}.svg" alt="${source.id}">`;
  imgHTML += html;  
  socialOuterFrame.innerHTML = imgHTML;
})

// Manupulating nav by listening to click event

menuIcon.addEventListener("click",(e)=>{
  sideBar.style.display ="block";
  menuIcon.style.display='none';
  closeIcon.style.display ='block'
  
})  // menu click event

closeIcon.addEventListener("click",(e)=>{
  sideBar.style.display ="none";
  menuIcon.style.display='block';
  closeIcon.style.display ='none'
  
}) // close click event