//product details is saved in local storage
let products = JSON.parse(localStorage.getItem("products"))? JSON.parse(localStorage.getItem("products")) : [
  {index: 1, img: "../images/potato.png", product_title: "Fresh and organic potatoes", price: 30, unit:"per kg",isAddedToCart : false, isAddedToWishlist : false, onSale : true, quantity:1, type:"vegetable", link: "product1.html"},
  {index: 2, img: "../images/tomato-lays.png", product_title: "Crunchy Lay's chips", price: 10, unit:"",isAddedToCart : false, isAddedToWishlist : false, onSale : false,  quantity:1, type:"instant",link: "product2.html"},
  {index: 3, img: "../images/basmati-rice.png", product_title: "Premium Basmati rice", price: 45, unit:"per kg",isAddedToCart : false, isAddedToWishlist : false, onSale : false,  quantity:1, type:"essentials", link: "product3.html"},
  {index: 4, img: "../images/banana.png", product_title: "Ripe and sweet bananas", price: 2, unit:"per kg",isAddedToCart : false, isAddedToWishlist : false, onSale : true,  quantity:1, type:"fruit", link: "product4.html"},
  {index: 5, img: "../images/carrot.png", product_title: "Crunchy farm carrots", price: 2, unit:"per kg",isAddedToCart : false, isAddedToWishlist : false, onSale : false,  quantity:1, type:"vegetable", link: "product5.html"},
  {index: 6, img: "../images/orange.png", product_title: "Succulent oranges", price: 3, unit: "per kg", isAddedToCart: false, isAddedToWishlist: false, onSale: false, quantity: 1, type: "fruit", link: "product5.html"},
  {index: 7, img: "../images/bread.png", product_title: "Whole wheat bread", price: 5, unit: "", isAddedToCart: false, isAddedToWishlist: false, onSale: false, quantity: 1, type: "dairy", link: "product5.html"},
  {index: 8, img: "../images/milk.png", product_title: "Fresh cow's milk", price: 2, unit: "per bottle", isAddedToCart: false, isAddedToWishlist: false, onSale: false, quantity: 1, type: "dairy", link: "product5.html"},
  {index: 9, img: "../images/eggs.png", product_title: "Farm-fresh eggs", price: 10, unit: "per crate", isAddedToCart: false, isAddedToWishlist: false, onSale: true, quantity: 1, type: "dairy", link: "product5.html"},
  {index: 10, img: "../images/hershey'schocolate.png", product_title: "Hershey's milk chocolate", price: 5, unit: "", isAddedToCart: false, isAddedToWishlist: false, onSale: false, quantity: 1, type: "instant", link: "product5.html"},
  {index: 11, img: "../images/spaghetti.png", product_title: "Italian spaghetti pasta", price: 16, unit: "", isAddedToCart: false, isAddedToWishlist: false, onSale: true, quantity: 1, type: "instant", link: "product5.html"},
  {index: 12, img: "../images/butter.png", product_title: "French Salted Butter", price: 15, unit: "per 250g", isAddedToCart: false, isAddedToWishlist: false, onSale: false, quantity: 1, type: "dairy", link: "product5.html"},
  {index: 13, img: "../images/yogurt.png", product_title: "Strawberry flavoured creamy yogurt", price: 8, unit: "", isAddedToCart: false, onSale: false, quantity: 1, type: "dairy", link: "product5.html"},
  {index: 14, img: "../images/lettuce.png", product_title: "Crisp lettuce", price: 5, unit: "per kg", isAddedToCart: false, isAddedToWishlist: false, onSale: true, quantity: 1, type: "vegetable", link: "product5.html"},
  {index: 15, img: "../images/cheese.png", product_title: "Amul Cheese", price: 10, unit: "", isAddedToCart: false, isAddedToWishlist: false, onSale: false, quantity: 1, type: "dairy", link: "product5.html"},
  {index: 16, img: "../images/apple.png", product_title: "Fresh Red Apples", price: 4, unit: "per kg", isAddedToCart: false, isAddedToWishlist: false, onSale: false, quantity: 1, type: "fruit", link: "product5.html"},
  {index: 17, img: "../images/grapes.png", product_title: "Juicy Green Grapes", price: 6, unit: "per kg", isAddedToCart: false, isAddedToWishlist: false, onSale: true, quantity: 1, type: "fruit", link: "product5.html"},
  {index: 18, img: "../images/kiwi.png", product_title: "Ripe Kiwi Fruit", price: 7, unit: "per kg", isAddedToCart: false, isAddedToWishlist: false, onSale: false, quantity: 1, type: "fruit", link: "product5.html"},
  {index: 19, img: "../images/broccoli.png", product_title: "Fresh Broccoli", price: 4, unit: "per kg", isAddedToCart: false, isAddedToWishlist: false, onSale: false, quantity: 1, type: "vegetable", link: "product5.html"},
  {index: 20, img: "../images/peas.png", product_title: "Sweet Peas", price: 3, unit: "per kg", isAddedToCart: false, isAddedToWishlist: false, onSale: true, quantity: 1, type: "vegetable", link: "product5.html"},
  {index: 21, img: "../images/pepper.png", product_title: "Green Peppers", price: 6, unit: "per kg", isAddedToCart: false, isAddedToWishlist: false, onSale: false, quantity: 1, type: "vegetable", link: "product5.html"},
  {index: 22, img: "../images/avocado.png", product_title: "Creamy Avocado", price: 5, unit: "per piece", isAddedToCart: false, isAddedToWishlist: false, onSale: true, quantity: 1, type: "fruit", link: "product5.html"},
  {index: 23, img: "../images/pumpkin.png", product_title: "Ripe Pumpkin", price: 2, unit: "per kg", isAddedToCart: false, isAddedToWishlist: false, onSale: false, quantity: 1, type: "vegetable", link: "product5.html"},
  {index: 24, img: "../images/flour.png", product_title: "Organic Whole Wheat Flour", price: 3, unit: "per kg", isAddedToCart: false, isAddedToWishlist: false, onSale: true, quantity: 1, type: "essentials", link: "product5.html"},
  {index: 25, img: "../images/pulses.png", product_title: "Mixed Lentils", price: 4, unit: "per kg", isAddedToCart: false, isAddedToWishlist: false, onSale: false, quantity: 1, type: "essentials", link: "product5.html"},
  {index: 26, img: "../images/sugar.png", product_title: "Processed Cane Sugar", price: 3, unit: "per kg", isAddedToCart: false, isAddedToWishlist: false, onSale: false, quantity: 1, type: "essentials", link: "product5.html"},
  {index: 27, img: "../images/salt.png", product_title: "Pink Himalayan Salt", price: 4, unit: "per kg", isAddedToCart: false, isAddedToWishlist: false, onSale: false, quantity: 1, type: "essentials", link: "product5.html"},
  {index: 28, img: "../images/oil.png", product_title: "Cold Pressed Olive Oil", price: 10, unit: "per liter", isAddedToCart: false, isAddedToWishlist: false, onSale: false, quantity: 1, type: "essentials", link: "product5.html"},
  {index: 29, img: "../images/noodles.png", product_title: "Instant Noodles", price: 5, unit: "per pack", isAddedToCart: false, isAddedToWishlist: false, onSale: true, quantity: 1, type: "instant", link: "product5.html"},
  {index: 30, img: "../images/coffee.png", product_title: "Instant Macchiato Coffee", price: 8, unit: "per pack", isAddedToCart: false, isAddedToWishlist: false, onSale: false, quantity: 1, type: "instant", link: "product5.html"},
  {index: 31, img: "../images/oatmeal.png", product_title: "Instant Oatmeal", price: 6, unit: "per pack", isAddedToCart: false, isAddedToWishlist: false, onSale: false, quantity: 1, type: "instant", link: "product5.html"},
  {index: 32, img: "../images/soup.png", product_title: "Instant Soup Mix", price: 4, unit: "per pack", isAddedToCart: false, isAddedToWishlist: false, onSale: true, quantity: 1, type: "instant", link: "product5.html"},
  {index: 33, img: "../images/cup-noodles.png", product_title: "Cup Noodles", price: 3, unit: "per cup", isAddedToCart: false, isAddedToWishlist: false, onSale: false, quantity: 1, type: "instant", link: "product5.html"},
  {index: 34, img: "../images/momo.png", product_title: "Frozen Chicken MOMO", price: 20, unit: "per pack", isAddedToCart: false, isAddedToWishlist: false, onSale: false, quantity: 1, type: "instant", link: "product5.html"}  
];

// Creating video slider
let videos = ["tomato.mp4" ,"veggie1.mp4" , "veggie2.mp4" ,"veggie3.mp4"];
let i = 1;

setInterval(video, 10000);


function video(){
  if(i<videos.length){
    document.getElementById("video").innerHTML = "<video src=/video/"+ videos[i] + " loop autoplay muted></video>";
    i++;
  }
  else{
    i = 0;
  }
}

//creating on-sales products
let OnSale = []
let onsaleElement = document.getElementById("on-sale")
products.forEach(product => {
  if(product.onSale)
    OnSale.push(product);
});

OnSale.forEach((product)=>{
  let sale_info_grid = document.createElement("div");
  sale_info_grid.classList.add("sale_info");

  sale_info_grid.innerHTML = 
  `
  <div class="product-details" style="margin:10px; margin-top:0px;">
    <div class="product-image-section">
    <a href="${product.link}">
      <img class="image" src= ${product.img}> 
    </a>
    </div>

    <div class="product-description">
      <div class="product-title">
        ${product.product_title}
      </div>
      <div class="product-price" style="text-decoration-line: line-through; text-decoration-color: red; text-decoration-thickness: 2px;">
        $${product.price} <div style="display: inline-block; font-size: 12px;">${product.unit} </div>
      </div><div style="color:red; padding-bottom:8px;">-20% off</div>
      <div class="new-product-price">
        $${(0.8*(product.price)).toFixed(2)} <div style="display: inline-block; font-size: 12px;">${product.unit}</div>
      </div>
      <div class="buy-options">
        <button class="buy-button"">Buy Now</button>
      </div>
    </div>
  </div>
  `
  onsaleElement.appendChild(sale_info_grid);
})


//Updates Localstorage
function updateProducts(){
  localStorage.setItem("products",JSON.stringify(products));
}



update();
//It is for notification in the cart icon
function update(){
let noOfItemsInCart=0;
products.forEach(product=>{
    if(product.isAddedToCart){
      noOfItemsInCart++;
    }
  })
  document.getElementById('noInCart').innerText = noOfItemsInCart;
  if(noOfItemsInCart==0){
    document.getElementById('noInCart').style.display = "none"
  }
  else{
    document.getElementById("noInCart").style.display = "grid"
  }
}



//Creating the products for product page one by one using the objects
let mainElement = document.getElementById("product-grid");

products.forEach((product,index)=>{

  let product_info_grid = document.createElement("div");
  product_info_grid.classList.add("product_info_grid");

  product_info_grid.innerHTML = 
  `
  <div class="product-details">
    
    <div class="product-image-section">
      <button class="wishlist-button" onclick=addToWishlist(event,${index})>
      <i class="fa-solid fa-heart ${product.isAddedToWishlist?"red" : ""}"></i>
      <p class="wishlist-tooltip">
        Wishlist
      </p>
      </button>
      <a href="${product.link}">
      <img class="image" src= ${product.img}> 
      </a>
    </div>
    

    <div class="product-description">
      <div class="product-title">
        ${product.product_title}
      </div>
      <div class="product-price">
        $${product.price} <div style="display: inline-block; font-size: 12px;">${product.unit}</div> 
      </div>
      <div class="buy-options">
        <a href="cart.html#checkout">
          <button class="buy-button">Buy Now</button>
        <a>
        <button id="addToCart" class="buy-button" onclick="addToCart(event,${index})" style="${product.isAddedToCart?"background-color:yellow; color:black":""}">${!product.isAddedToCart ? "Add To Cart":"Added To Cart"}</button>
      </div>
    </div>
  </div>
  `

  mainElement.appendChild(product_info_grid);

})


//Action when add to cart is clicked,popupnotification is created, bgcolor and color is changed 
//and the local storage is updated along with that the notification on cart is added by 1
function addToCart(e,i){

  popupnotification("Added To Cart");
  if(products[i].isAddedToCart)return;
  e.target.innerText = "Added To Cart";
  e.target.style="background-color:yellow";
  e.target.style.color= 'black';
  e.target.disabled = true;
  products[i].isAddedToCart = true;
  updateProducts();
  update();
}

//Action when add to cart is clicked,popupnotification is created, color is changed and the local storage is updated
function addToWishlist(e,i){
  if(products[i].isAddedToWishlist){
    popupnotification("Removed From WishList");
    e.target.classList.toggle('red');
    products[i].isAddedToWishlist = false;
  }
  else{
    products[i].isAddedToWishlist = true;
    popupnotification("Added To WishList");
    e.target.classList.toggle('red');
  }
 updateProducts();
}


//popup notification for addtocart and wishlist
function popupnotification(message){
  let child = document.createElement('div');

  child.classList.add("notification");

  child.innerHTML=`
    <h5>${message}</h5>
  `;

  body.appendChild(child);

  setTimeout(()=>{
    body.removeChild(child);
  },1000);
}


//filtered vegetables items list from obect array
let vegetable = [];

let vegetableElement = document.getElementById("product-vegetable");

products.forEach((product)=>{
  if(product.type === "vegetable"){
    vegetable.push(product);
  }
})

vegetable.forEach((product,index)=>{
  let product_info_grid = document.createElement("div");
  product_info_grid.classList.add("product_info_grid");

  product_info_grid.innerHTML = 
  `
  <div class="product-details">
    <div class="product-image-section">
      <button class="wishlist-button" onclick=addToWishlist(event,${index})>
      <i class="fa-solid fa-heart ${product.isAddedToWishlist?"red" : ""}"></i>
      </button>
      <a href="${product.link}">
        <img class="image" src= ${product.img}> 
      </a>
    </div>

    <div class="product-description">
      <div class="product-title">
        ${product.product_title}
      </div>
      <div class="product-price">
        $${product.price} <div style="display: inline-block; font-size: 12px;">${product.unit}</div> 
      </div>
      <div class="buy-options">
        <button class="buy-button">Buy Now</button>
        <button id="addToCart" class="buy-button" onclick="addToCart(event,${index})" style="${product.isAddedToCart?"background-color:yellow":""}">${!product.isAddedToCart ? "Add To Cart":"Added To Cart"}</button>
      </div>
    </div>
  </div>
  `
  vegetableElement.appendChild(product_info_grid);
})

//Filtered Dairy products list from obect array
let dairy = [];

let dairyElement = document.getElementById("product-dairy");

products.forEach((product)=>{
  if(product.type === "dairy"){
    dairy.push(product);
  }
})

dairy.forEach((product,index)=>{
  let product_info_grid = document.createElement("div");
  product_info_grid.classList.add("product_info_grid");

  product_info_grid.innerHTML = 
  `
  <div class="product-details">
    <div class="product-image-section">
      <button class="wishlist-button" onclick=addToWishlist(event,${index})>
      <i class="fa-solid fa-heart ${product.isAddedToWishlist?"red" : ""}"></i>
      </button>
      <a href="${product.link}">
      <img class="image" src= ${product.img}> 
    </a>
    </div>

    <div class="product-description">
      <div class="product-title">
        ${product.product_title}
      </div>
      <div class="product-price">
        $${product.price} <div style="display: inline-block; font-size: 12px;">${product.unit}</div> 
      </div>
      <div class="buy-options">
        <button class="buy-button">Buy Now</button>
        <button id="addToCart" class="buy-button" onclick="addToCart(event,${index})" style="${product.isAddedToCart?"background-color:yellow":""}">${!product.isAddedToCart ? "Add To Cart":"Added To Cart"}</button>
      </div>
    </div>
  </div>
  `
  dairyElement.appendChild(product_info_grid);
})

//Filtered Fruits products list from obect array
let fruit = [];

let fruitElement = document.getElementById("product-fruit");

products.forEach((product)=>{
  if(product.type === "fruit"){
    fruit.push(product);
  }
})

fruit.forEach((product,index)=>{
  let product_info_grid = document.createElement("div");
  product_info_grid.classList.add("product_info_grid");

  product_info_grid.innerHTML = 
  `
  <div class="product-details">
    <div class="product-image-section">
      <button class="wishlist-button" onclick=addToWishlist(event,${index})>
      <i class="fa-solid fa-heart ${product.isAddedToWishlist?"red" : ""}"></i>
      </button>
      <a href="${product.link}">
      <img class="image" src= ${product.img}> 
    </a>
    </div>

    <div class="product-description">
      <div class="product-title">
        ${product.product_title}
      </div>
      <div class="product-price">
        $${product.price} <div style="display: inline-block; font-size: 12px;">${product.unit}</div> 
      </div>
      <div class="buy-options">
        <button class="buy-button">Buy Now</button>
        <button id="addToCart" class="buy-button" onclick="addToCart(event,${index})" style="${product.isAddedToCart?"background-color:yellow":""}">${!product.isAddedToCart ? "Add To Cart":"Added To Cart"}</button>
      </div>
    </div>
  </div>
  `
  fruitElement.appendChild(product_info_grid);
})

//Filtered Daily Cooking Essentials products list
let essentials = [];

let essentialsElement = document.getElementById("product-essentials");

products.forEach((product)=>{
  if(product.type === "essentials"){
    essentials.push(product);
  }
})

essentials.forEach((product,index)=>{
  let product_info_grid = document.createElement("div");
  product_info_grid.classList.add("product_info_grid");

  product_info_grid.innerHTML = 
  `
  <div class="product-details">
    <div class="product-image-section">
      <button class="wishlist-button" onclick=addToWishlist(event,${index})>
      <i class="fa-solid fa-heart ${product.isAddedToWishlist?"red" : ""}"></i>
      </button>
      <a href="${product.link}">
      <img class="image" src= ${product.img}> 
    </a>
    </div>

    <div class="product-description">
      <div class="product-title">
        ${product.product_title}
      </div>
      <div class="product-price">
        $${product.price} <div style="display: inline-block; font-size: 12px;">${product.unit}</div> 
      </div>
      <div class="buy-options">
        <button class="buy-button">Buy Now</button>
        <button id="addToCart" class="buy-button" onclick="addToCart(event,${index})" style="${product.isAddedToCart?"background-color:yellow":""}">${!product.isAddedToCart ? "Add To Cart":"Added To Cart"}</button>
      </div>
    </div>
  </div>
  `
  essentialsElement.appendChild(product_info_grid);
})

//Filtered Instant Food products list
let instant = [];

let instantElement = document.getElementById("product-instant");

products.forEach((product)=>{
  if(product.type === "instant"){
    instant.push(product);
  }
})

instant.forEach((product,index)=>{
  let product_info_grid = document.createElement("div");
  product_info_grid.classList.add("product_info_grid");

  product_info_grid.innerHTML = 
  `
  <div class="product-details">
    <div class="product-image-section">
      <button class="wishlist-button" onclick=addToWishlist(event,${index})>
      <i class="fa-solid fa-heart ${product.isAddedToWishlist?"red" : ""}"></i>
      </button>
      <a href="${product.link}">
      <img class="image" src= ${product.img}> 
    </a>
    </div>

    <div class="product-description">
      <div class="product-title">
        ${product.product_title}
      </div>
      <div class="product-price">
        $${product.price} <div style="display: inline-block; font-size: 12px;">${product.unit}</div> 
      </div>
      <div class="buy-options">
        <button class="buy-button">Buy Now</button>
        <button id="addToCart" class="buy-button" onclick="addToCart(event,${index})" style="${product.isAddedToCart?"background-color:yellow":""}">${!product.isAddedToCart ? "Add To Cart":"Added To Cart"}</button>
      </div>
    </div>
  </div>
  `
  instantElement.appendChild(product_info_grid);
})
