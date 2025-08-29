console.log(document);

function getElement(id) {
  const element = document.getElementById(id);

  return element;
}
// delegation
getElement("product-box").addEventListener("click", function name(e) {
  if (e.target.className.includes("btn-cart")) {
    // alert("card clicked");
    const cartBtn = e.target;
    const productImage =
      cartBtn.parentNode.parentNode.parentNode.children[0].children[0].src;
    const productTitle =
      cartBtn.parentNode.parentNode.parentNode.children[1].children[1]
        .innerText;

    const productPrice =
      cartBtn.parentNode.parentNode.parentNode.children[1].children[2]
        .innerText;
    const totalPrice = getElement("total-price").innerText;
    const currentPrice = parseInt(productPrice) + parseInt(totalPrice);
    getElement("total-price").innerText = currentPrice.toFixed(2);
    const totalquintity = getElement("total-quantity").innerText;
    const currentQuantity = parseInt(totalquintity) + 1;

    getElement("total-quantity").innerText = currentQuantity;
    const newCart = document.createElement("div");
    newCart.innerHTML = `<div class="bg-gray-200 rounded-xl flex justify-between p-4">
                  <img src="${productImage}" alt="" class="w-10" />
                  <div class="">
                    <h2 class="font-bold">${productTitle}</h2>
                    <h2 class="">${productPrice} </h2>
                  </div>
            </div>
    `;
    const cartContainer = getElement("cart-container");
    cartContainer.append(newCart);
  }
});

getElement("btn-clear").addEventListener("click", function () {
  const container = getElement("cart-container");
  container.innerHTML = "";
  getElement("total-price").innerText = 0;
  getElement("total-quantity").innerText = 0;
});
