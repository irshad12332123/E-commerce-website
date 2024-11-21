import  {products}  from "./products.js";

let innerProdFrame = document.querySelector("#inner-prod-frame");

console.log(innerProdFrame);
let HTML = ``;
products.forEach((prodObj) => {
  let html = `<div class="item item1">
              <div class="item-inner-frame">
              <div class="item-inner-frame-img">
              <img src="assets/images/${prodObj.imgSrc}" alt="samsung ">
              </div>
              <p>${prodObj.name}</p>
              <p>${prodObj.rating}</p>
              <p>${prodObj.price}</p>
              <button class="btn buy-btn">Buy</button>
              <button class="btn cart-btn">Add to cart</button>
             </div>
            </div>   `;
  HTML += html;
  innerProdFrame.innerHTML = HTML;
});

