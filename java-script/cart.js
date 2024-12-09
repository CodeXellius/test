// loading localstorage content in a variable
let products = JSON.parse(localStorage.getItem('products'))?JSON.parse(localStorage.getItem('products')):[] ;

//Selecting the element to insert the created product grid in cart.html
//cartProducts empty arry is declared and the data is pushed by filtering when the Boolean isAddedToCart is true
let mainElement = document.getElementById("product-grid");

let cartProducts = [];

products.forEach((product)=>{
  if(product.isAddedToCart){
    cartProducts.push(product);
  }
})

//to change and update the values in the invoice of the checkout box
let checkOutProductDetails = document.getElementById('checkOutProductDetails');

let TotalItems=0;

//Creating individual product grid for products of cart page
cartProducts.forEach((product,index)=>{
  let product_info_grid = document.createElement("div");
  product_info_grid.classList.add("product_info_grid");

  product_info_grid.innerHTML = 
  `
  <div class="product-details">
    <div class="product-image-section">
      <img class="image" src= ${product.img}> 
    </div>

    <div class="product-description">
      <div class="product-title">
        ${product.product_title}
      </div>
      <div class="product-price">
        $${product.price} <div style="display: inline-block; font-size: 12px;">${product.unit}</div> <!--inline css is used to decrease font size-->
      </div>
      <div>
        Quantity : <button class="quantitybtn subtract" ${product.quantity === 1 ? "disabled" : "" } onclick={updateValue(event,'-',${index},${product.index})}>-</button> <input type="number" class="quantityInput" value="${product.quantity}" readonly> <button onclick={updateValue(event,'+',${index},${product.index})} class="quantitybtn">+</button>
      </div>
      <div class="buy-options">
        <button class="buy-button" onclick="removeFromCart(${product.index})">Remove From Cart</button>
      </div>
    </div>
    
  </div>
  `
  updateProductCheckOutDetails(product);
  mainElement.appendChild(product_info_grid);
  document.getElementById('TotalItems').innerText = `Total Items : (${++TotalItems})`; 
})

//Updates the quantity of the product in both invoice and product grid and call function to update price in invoice
const updateValue=(e,op,i,productIndex)=>{
  --productIndex;
  if(products[productIndex].quantity == 2 && op=="-" ){
    e.target.disabled = true;
  }
  else{
    document.getElementsByClassName("quantitybtn")[i*2].disabled = false;
  }
  if(op == "+"){
    products[productIndex].quantity++;
  }
  else if(op == "-"){
    products[productIndex].quantity--;
  }
  else{
    console.log("Error updating values");
  }
  saveData();

  document.getElementsByClassName("quantityInput")[i].value = products[productIndex].quantity.toString();
  document.getElementsByClassName("checkoutquantity")[i].innerText = products[productIndex].quantity;
  document.getElementById("totalPrice").innerText = updateTotalPrice();
}

//Remove items from cart
const removeFromCart =(i)=>{
    products[i-1].isAddedToCart=false;
    products[i-1].quantity=1;
    saveData();
    window.location.reload();
}

//Saves changes to localstorege
function saveData(){
  localStorage.setItem('products',JSON.stringify(products));
}

//It creates the invoice in the checkout box
function updateProductCheckOutDetails(product){
  document.getElementById("totalPrice").innerText = updateTotalPrice();

  let childProductDetails = document.createElement("div");
  childProductDetails.classList.add('invoice')
  childProductDetails.innerHTML=`
            <p class="flex2">${product.product_title}</p>
            <p class="flex1 checkoutquantity">${product.quantity}</p>
            <p class="flex1">${product.price}</p>
  `
  checkOutProductDetails.appendChild(childProductDetails);
}

//Updates the total price in invoice
function updateTotalPrice(){
  let total=0;
  products.forEach(product=>{
    if(product.isAddedToCart){
    total = total + product.quantity*product.price;
    }
  })
  return total;
}

//When the submit button is clicked in the checkout form
function submit(){
  alert("Your Order Has Been Placed");
  alert("Thank You!!!");
  localStorage.clear();
  window.location.reload();
}
