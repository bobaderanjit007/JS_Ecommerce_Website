import {products, products2} from './data.js';

const barEl = document.getElementById("bar");
const navEl = document.getElementById("navbar");
const closeEl = document.getElementById("close");
const proConEl = document.getElementById("pro-con");
const proCon2El = document.getElementById("pro-con2");
const shopProCon2El = document.getElementById("shop-pro-container");

document.addEventListener('DOMContentLoaded', getData);
document.addEventListener('DOMContentLoaded', getShopData);

function getShopData(){
    for (let i = 0; i < products.length; i++) {
        shopProCon2El.innerHTML += `<div class="pro" onclick="window.location.href = 'sproduct.html?id=${products[i].id}'">
        <img src="${products[i].image}" alt="" srcset="">
        <div class="des">
            <span>${products[i].title}</span>
            <h5>${products[i].discription}</h5>
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <h4 class="price">$ ${products[i].price}</h4>
        </div>
        <a href="#"><i class="fas fa-shopping-cart cart"></i></a>
    </div>`;
    }
    for (let i = 0; i < products2.length; i++) {
        shopProCon2El.innerHTML += `<div class="pro">
        <img src="${products2[i].image}" alt="" srcset="">
        <div class="des">
            <span>${products2[i].title}</span>
            <h5>${products2[i].discription}</h5>
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <h4 class="price">$ ${products2[i].price}</h4>
        </div>
        <a href=""><i class="fas fa-shopping-cart cart"></i></a>
    </div>`;
    }
}

function getData() {
    for (let i = 0; i < products.length; i++) {
        proConEl.innerHTML += `<div class="pro" onclick="window.location.href = 'sproduct.html?id=${products[i].id}'" >
        <img src="${products[i].image}" alt="" srcset="">
        <div class="des">
            <span>${products[i].title}</span>
            <h5>${products[i].discription}</h5>
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <h4 class="price">$ ${products[i].price}</h4>
        </div>
        <a href=""><i class="fas fa-shopping-cart cart"></i></a>
    </div>`;
    }
    for (let i = 0; i < products2.length; i++) {
        proCon2El.innerHTML += `<div class="pro">
        <img src="${products2[i].image}" alt="" srcset="">
        <div class="des">
            <span>${products2[i].title}</span>
            <h5>${products2[i].discription}</h5>
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <h4 class="price">$ ${products2[i].price}</h4>
        </div>
        <a href=""><i class="fas fa-shopping-cart cart"></i></a>
    </div>`;
    }
    
}


barEl.addEventListener("click", () => {
    navEl.classList.add('active');
})

closeEl.addEventListener("click", () => {
    navEl.classList.remove("active");
})


