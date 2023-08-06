import { products, products2 } from './data.js';

const cartBodyEl = document.getElementById("cart-body");
const tableBodyEl = document.getElementById("table-body")


document.addEventListener("DOMContentLoaded", showCart);

const totleEl = document.createElement("tr");

function showCart() {
    let totlePrice = 0;
    const cart = getCartData();
    for (let i = 0; i < cart.length; i++) {
        for (let j = 0; j < products.length; j++) {
            if (cart[i].id === products[j].id) {
                cartBodyEl.innerHTML += `
                <tr>
                <td><span onclick="delData(${cart[i].id})"><i class="del-data far fa-times-circle"></i></span></td>
                <td><img src=${products[j].image} alt=""></td>
                <td>${products[j].title}</td>
                <td>$${products[j].price}</td>
                <td><input type="number" value="1"></td>
                <td>$${products[j].price}</td>
                </tr>
                `;

                tableBodyEl.innerHTML += `
                <tr>
                    <td>${products[j].title}</td>
                    <td>$ ${products[j].price}</td>
                </tr>
                `;
                totlePrice += products[j].price;


            }
            totleEl.innerHTML = `
                <td><strong>Total</strong></td>
                <td><strong>$ ${totlePrice}</strong></td>
            `;
        }
    }
    tableBodyEl.appendChild(totleEl);
}


function getCartData() {
    return JSON.parse(localStorage.getItem("MyCart") || "[]");
}

const delBtnEl = document.querySelectorAll(".delData");

delBtnEl.forEach((element, index) => {
  element.addEventListener("click", () => {
    console.log("Clicked element:", index);
    // Add your desired code here to handle the click event for each element
  });
});
