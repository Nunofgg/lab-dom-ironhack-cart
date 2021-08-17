console.log("Java");
// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const quantity = product.querySelector(".quantity input").value;
  const price = product.querySelector(".price span").innerText;
  const subtotal = product.querySelector(".subtotal span");
  const subtotalPrice = quantity * price;
  subtotal.innerText = subtotalPrice;
  return subtotalPrice;
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let total = 0;
  const singleProduct = document.getElementsByClassName("product");
  for(let i = 0; i < singleProduct.length; i++){
    let prices = updateSubtotal(singleProduct[i]);
    total = total + prices;
  }

  // ITERATION 3
  const totalButton = document.querySelector("#total-value span");
  totalButton.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove();
  return calculateAll();
}

// ITERATION 5

function createProduct() {
  let newProductName = document.querySelector("#newName");
  let newProductNameValue = newProductName.value;
  let newProductPrice = document.querySelector("#newPrice");
  let newProductPriceValue = Number(newProductPrice.value).toFixed(2);

  const newTableRow = document.createElement("tr");
  newTableRow.className = "product";
  newTableRow.innerHTML = `
  <td class="name">
    <span>${newProductNameValue}</span>
  </td>
  <td class="price">$<span>${newProductPriceValue}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`
;

const parent = document.querySelector("#cart tbody");
parent.appendChild(newTableRow);

removeButton = newTableRow.querySelector(".btn-remove")
removeButton.addEventListener("click", removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.getElementsByClassName("btn-remove")
  const removeButtonsArray = [...removeButtons];
  removeButtonsArray.forEach(button => {
    button.addEventListener("click", removeProduct);
  });


  const addButton = document.querySelector("#create");
  addButton.addEventListener("click", createProduct);
  
  //... your code goes here
});
