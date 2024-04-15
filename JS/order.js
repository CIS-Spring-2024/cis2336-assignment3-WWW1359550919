document.getElementById('update-form').addEventListener('submit', function(event) {
  event.preventDefault();

  let totalCost = 0;

  // Loop through each product entry in the form
  for (let i = 1; i <= 9; i++) {
      let price = parseFloat(document.getElementById(`price${i}`).value);
      let quantity = parseInt(document.getElementById(`quantity${i}`).value);

      if (!isNaN(price) && !isNaN(quantity) && price > 0 && quantity >= 0 && quantity <= 10) {
          totalCost += price * quantity;
      }
  }


  document.getElementById('total-cost').innerHTML = `Total Cost: $${totalCost.toFixed(2)} `;
});
