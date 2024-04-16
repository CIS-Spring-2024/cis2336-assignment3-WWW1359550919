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
document.getElementById("quantity1").addEventListener("change", function() {
  var quantity = parseInt(this.value);
  var quantityError = document.getElementById("quantityError");
  
  if (quantity < 0 || quantity > 10) {
    quantityError.textContent = "Quantity must be between 0 and 10";
    this.value = ""; // return empty value if quantity is invalid
  } else {
    quantityError.textContent = ""; // Clear the  messages
  }
});
document.getElementById("quantity2").addEventListener("change", function() {
  var quantity = parseInt(this.value);
  var quantityError = document.getElementById("quantityError");
  
  if (quantity < 0 || quantity > 10) {
    quantityError.textContent = "Quantity must be between 0 and 10";
    this.value = ""; 
  } else {
    quantityError.textContent = ""; 
  }
});
document.getElementById("quantity3").addEventListener("change", function() {
  var quantity = parseInt(this.value);
  var quantityError = document.getElementById("quantityError");
  
  if (quantity < 0 || quantity > 10) {
    quantityError.textContent = "Quantity must be between 0 and 10";
    this.value = ""; 
  } else {
    quantityError.textContent = ""; 
  }
});
document.getElementById("quantity4").addEventListener("change", function() {
  var quantity = parseInt(this.value);
  var quantityError = document.getElementById("quantityError");
  
  if (quantity < 0 || quantity > 10) {
    quantityError.textContent = "Quantity must be between 0 and 10";
    this.value = ""; 
  } else {
    quantityError.textContent = ""; 
  }
});
document.getElementById("quantity5").addEventListener("change", function() {
  var quantity = parseInt(this.value);
  var quantityError = document.getElementById("quantityError");
  
  if (quantity < 0 || quantity > 10) {
    quantityError.textContent = "Quantity must be between 0 and 10";
    this.value = ""; 
  } else {
    quantityError.textContent = ""; 
  }
});
document.getElementById("quantity6").addEventListener("change", function() {
  var quantity = parseInt(this.value);
  var quantityError = document.getElementById("quantityError");
  
  if (quantity < 0 || quantity > 10) {
    quantityError.textContent = "Quantity must be between 0 and 10";
    this.value = ""; 
  } else {
    quantityError.textContent = ""; 
  }
});
document.getElementById("quantity7").addEventListener("change", function() {
  var quantity = parseInt(this.value);
  var quantityError = document.getElementById("quantityError");
  
  if (quantity < 0 || quantity > 10) {
    quantityError.textContent = "Quantity must be between 0 and 10";
    this.value = ""; 
  } else {
    quantityError.textContent = ""; 
  }
});
document.getElementById("quantity8").addEventListener("change", function() {
  var quantity = parseInt(this.value);
  var quantityError = document.getElementById("quantityError");
  
  if (quantity < 0 || quantity > 10) {
    quantityError.textContent = "Quantity must be between 0 and 10";
    this.value = ""; 
  } else {
    quantityError.textContent = ""; 
  }
});
document.getElementById("quantity9").addEventListener("change", function() {
  var quantity = parseInt(this.value);
  var quantityError = document.getElementById("quantityError");
  
  if (quantity < 0 || quantity > 10) {
    quantityError.textContent = "Quantity must be between 0 and 10";
    this.value = ""; 
  } else {
    quantityError.textContent = ""; 
  }
});
