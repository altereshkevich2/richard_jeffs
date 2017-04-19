var products = {
    1: {name: 'Apple', cost: 25},
    2: {name: 'Orange', cost: 60}
};

var offers = {
    1: { itemsToBuy: 1, itemsToRelease: 2 },
    2: { itemsToBuy: 2, itemsToRelease: 3 }
};

function start() {
    var cost = calculateTotalCost([1, 1, 2, 1]);
    document.getElementById("result").innerHTML = "Total Cost = " + cost;
}

function start2() {
    var items = [1, 1, 2, 1, 2, 2, 2];
    var cost = calculateTotalCost(items);
    var discount = calculateDiscount(items);
    document.getElementById("result2").innerHTML = "Total Cost With Discount = " + (cost - discount) +
            " (discount is " + discount + ")";
}

function calculateTotalCost(items) {
    var cost = 0;
    if (items && items.length > 0) {
        items.forEach(function (item) {
            cost += getItemCostByItemId(item);
        });
    }
    return cost;
}

function calculateDiscount(items) {
    var discount = 0;
    if (items && items.length > 0) {
        var productMap = {};
        items.forEach(function (item) {
            if (productMap.hasOwnProperty(item)) {
                productMap[item] = productMap[item] + 1;
            } else {
                productMap[item] = 1;
            }
        });
        Object.keys(productMap).forEach(function (productId) {
            var offer = getOfferByProductId(productId);
            if (offer != undefined) {
                // calculating how many items we need to buy with offer
                var itemsToBuyWithOffer =
                    Math.ceil(productMap[productId] * offer.itemsToBuy / offer.itemsToRelease);
                // if we need to buy less that we added to shopping cart - calculating discount
                if (itemsToBuyWithOffer < productMap[productId]) {
                    var itemCost = getItemCostByItemId(productId);
                    var productDiscount = (productMap[productId] - itemsToBuyWithOffer) * itemCost;
                    discount += productDiscount;
                }
            }
        });
    }
    return discount;
}

function getOfferByProductId(id) {
    if (offers.hasOwnProperty(id)) {
        return offers[id];
    }
    return undefined;
}

function getItemCostByItemId(id) {
    if (products.hasOwnProperty(id)) {
        return products[id].cost;
    }
    return 0;
}