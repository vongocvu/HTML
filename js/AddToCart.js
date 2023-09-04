import { AllProducts } from "./Products.js";

let ProductInCart = [];

const btn_add_to_cart = document.querySelectorAll(".btn-add-to-cart");
const cart = document.getElementById("cart");

btn_add_to_cart.forEach((btn) => {
  btn.addEventListener("click", () => {
    const product_id = parseInt(btn.getAttribute("product_id")); // convert string to Interger...
    if (ProductInCart.some((product) => product.id === product_id)) {
      // kiem tra san pham vua them co trong gio hang chua
      ProductInCart.forEach((data, index) => {
        if (data.id === product_id) {
          ProductInCart[index].quantity = ProductInCart[index].quantity + 1; // neu co thi update quantiy len 1
        }
      });
    } else {
      // neu khong co trong gio hang thi them moi san pham vao
      AllProducts.forEach((data) => {
        if (data.id === product_id) {
          ProductInCart.push({ ...data, quantity: 1 });
        }
      });
    }

    cart.innerHTML = "";
    ProductInCart.forEach((product) => {
      cart.innerHTML += `
         <div>
           <h1>${product.name}</h1>
           <img src="${product.image[0]}" />
           <span>${product.quantity}</span>
         </div>
        `;
    });
  });
});
