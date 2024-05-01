product = {
    1: {
        name: "Laptop",
        price: 1000,
    },
    2: {
        name: "Phone",
        price: 500,
    },
    3: {
        name: "Tablet",
        price: 700,
    },
};

for (let i in product) {
    console.log(product[i].name, product[i].price);
    console.log("Select product to buy by:", i);
}

productPrice = 0;

function buyProduct(id) {
    console.log("You have bought:", product[id].name);
    productPrice += product[id].price;
}

buyProduct(1);
buyProduct(2);
buyProduct(3);

console.log("Total price:", productPrice);

// Exploring function in js
totalAmount = 1000;

function deposit(amount) {
    totalAmount += amount;
}

deposit(300);

function withdraw(amount) {
    if (totalAmount < amount) {
        console.log("Insufficient balance");
        return;
    }
    totalAmount -= amount;
}

withdraw(500);

function checkBalance() {
    return totalAmount;
}

console.log("Total amount:", checkBalance());

withdraw(801);
