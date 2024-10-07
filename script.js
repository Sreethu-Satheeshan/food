let orderItems = {}; // Use an object to store item counts

function addItem(name, price) {
    if (orderItems[name]) {
        orderItems[name].count += 1; // Increment count if item already exists
    } else {
        orderItems[name] = { price: price, count: 1 }; // Add new item with count 1
    }
    updateOrderList();
    calculateTotal(); // Automatically calculate total after adding an item
}

function updateOrderList() {
    const orderList = document.getElementById("orderList");
    orderList.innerHTML = ""; // Clear the list
    for (const item in orderItems) {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";
        listItem.textContent = `${item} - $${orderItems[item].price} (x${orderItems[item].count})`;
        orderList.appendChild(listItem);
    }
}

function calculateTotal() {
    const totalAmount = Object.values(orderItems).reduce((total, item) => total + (item.price * item.count), 0);
    document.getElementById("totalAmount").textContent = totalAmount;
}

function placeOrder() {
    // Display a confirmation message
    alert("Order placed!");

    // Clear the order items
    orderItems = {};
    
    // Update the order summary UI
    updateOrderList();
    calculateTotal();
}
