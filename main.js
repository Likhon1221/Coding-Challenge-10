// Task 2. Add Event Listeners for Product Selection 

let priceElement = document.getElementById('product-price');
let sizeSelector = document.getElementById('size-selector');

sizeSelector.addEventListener('change', function(event) {
    const selectedPrice = event.target.value;
    priceElement.textContent = `$${selectedPrice}`;
    }
);

// Task 3. Handle Stock Availability

let stockStatusElement = document.getElementById('stock-status');
let purchaseButton = document.getElementById('purchase-button');

const stock = {
    small: { price: 20, available: 15 },  
    medium: { price: 25, available: 17 }, 
    large: { price: 30, available: 0 }  
}
sizeSelector.addEventListener('change', function(event) {
    let selectedSize = event.target.value;  
    let selectedStock = stock[selectedSize];  
    priceElement.textContent = `$${selectedStock.price}`;

    if (selectedStock.available) {
        stockStatusElement.textContent = "In Stock";
        purchaseButton.disabled = false;  
    } else {
        stockStatusElement.textContent = "Out of Stock";
        purchaseButton.disabled = true;  
    }
    }
);