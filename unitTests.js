function runTests() {
    testCostCalculation();
    testDiscountCalculation();
}

function testCostCalculation() {
    var testProducts = {
        1: {name: 'Apple', cost: 25},
        2: {name: 'Orange', cost: 60}
    };

    products = testProducts;

    var items = [1, 1, 2, 1];
    var result = calculateTotalCost(items);
    if (result == 135) {
        document.getElementById("result3").innerHTML = "Calculating total cost correct";
    }
}

function testDiscountCalculation() {
    var testProducts = {
        1: {name: 'Apple', cost: 25},
        2: {name: 'Orange', cost: 60}
    };
    var testOffers = {
        1: { itemsToBuy: 1, itemsToRelease: 2 },
        2: { itemsToBuy: 2, itemsToRelease: 3 }
    };

    products = testProducts;
    offers = testOffers;

    var items = [1, 1, 2, 1, 2, 2, 2];
    var result = calculateDiscount(items);
    if (result == 85) {
        document.getElementById("result4").innerHTML = "Calculating discount correct";
    }
}