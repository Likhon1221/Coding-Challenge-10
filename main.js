// Task 2. Add Event Listeners for Product Selection 

let priceElement = document.getElementById('product-price');
let sizeSelector = document.getElementById('size-selector');

sizeSelector.addEventListener('change', function(event) {
    const selectedPrice = event.target.value;
    priceElement.textContent = `$${selectedPrice}`;
    }
);