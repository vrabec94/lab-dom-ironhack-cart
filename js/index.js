// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;

  const quantity = product.querySelector('.quantity input').value;

  const subtotal = price * quantity;

  const subtotalElm = product.querySelector('.subtotal span');

  subtotalElm.innerText = subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  const products = document.getElementsByClassName('product');
  let subtotals = [];
  [...products].forEach((product) => {
    updateSubtotal(product);
    subtotals.push(product.querySelector('td.subtotal span').innerHTML);
  });
  console.log(subtotals);
  // ITERATION 3
  let total = 0;
  subtotals.forEach((value) => {
    total += Number(value);
  });
  console.log(total);
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerText = total;
  const removeBtn = document.querySelectorAll('.btn-remove');
  console.log([...removeBtn]);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const row = target.parentNode.parentNode;
  row.remove();

  calculateAll();
 
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
    [...removeBtn].forEach(button => {
      button.addEventListener('click', removeProduct);
    });
  
});
