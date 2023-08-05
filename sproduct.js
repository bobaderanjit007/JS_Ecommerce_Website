import {products, products2} from './data.js';


const proImgEl = document.getElementById("pro-img");
const proDetailsEl = document.getElementById("shop-pro-details");
const addCartEl = document.getElementById("add-cart");

let mainImgEl = document.getElementById("main-img");
let smallImgEl = document.querySelectorAll(".small-img")

smallImgEl.forEach(element => {
    element.addEventListener("mouseover",()=>{
        mainImgEl.src = element.src;
    })
});

// JavaScript function to extract the ID parameter from the URL
function getParameterByName(name, url) {
if (!url) url = window.location.href;
name = name.replace(/[\[\]]/g, "\\$&");
var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
if (!results) return null;
if (!results[2]) return '';
return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Usage: Assuming the URL is "http://example.com/page?id=123"
var id = getParameterByName('id');

// Output the ID value to the console or use it as needed
console.log("ID value:", id);

console.log(products[id-1]);

proImgEl.src = products[id-1].image;

proDetailsEl.innerHTML = `
<h6>Home / T-Shirt</h6>
<h4>${products[id-1].title}</h4>
<h2>$${products[id-1].price}</h2>
<select >
    <option value="Select Size">Select Size</option>
    <option value="XL">XL</option>
    <option value="XXL">XXL</option>
    <option value="s">Small</option>
    <option value="L">Large</option>
</select>
<input type="number" value="1">
<button id="add-cart" class="normal">Add To Cart</button>
<h4>Product Details</h4>
<span>${products[id-1].info}/span>
`

addCartEl.addEventListener('click' , addToCart);

function addToCart(){
    console.log("clicked");
    // localStorage.setItem(id,products[id-1]);
    // alert("Data Saved");
}