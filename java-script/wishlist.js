//local storage is loaded in a variable
let products =JSON.parse(localStorage.getItem('products'))?JSON.parse(localStorage.getItem('products')):[];


//Creating product grid for wishlist 
let mainElement = document.getElementById("product-grid");

let wishlistProducts = []

products.forEach((product)=>{
  if(product.isAddedToWishlist == true){
    wishlistProducts.push(product);
  }
})

wishlistProducts.forEach((product,index)=>{
  
  let product_info_grid = document.createElement("div");
  product_info_grid.classList.add("product_info_grid");

  product_info_grid.innerHTML = 
  `
  <div class="product-details">
    <div class="product-image-section">
    <button class="wishlist-button" style="color: red" onclick=removeFromWishlist(${product.index})>
    <p class="wishlist-tooltip">
      Remove From Wishlist
    </p>
    <i class="fa-solid fa-heart"></i>
    </button>
      <img class="image" src= ${product.img}> 
    </div>

    <div class="product-description">
      <div class="product-title">
        ${product.product_title}
      </div>
      <div class="product-price">
        $${product.price} <div style="display: inline-block; font-size: 12px;">per kg</div> <!--inline css is used to decrease font size-->
      </div>
    </div>
    
  </div>
  `
  mainElement.appendChild(product_info_grid);
})

//Remove items from wishlist
const removeFromWishlist =(i)=>{
  products[i-1].isAddedToWishlist=false;
  saveData();
  window.location.reload();
}

function saveData(){
localStorage.setItem('products',JSON.stringify(products));
}