var products = {
    1: {name: 'Apple', cost: 25},
    2: {name: 'Orange', cost: 60}
};

function start() {
    var cost = calculateTotalCost([1, 1, 2, 1]);
    document.getElementById("result").innerHTML = "Total Cost = " + cost;
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

function getItemCostByItemId(id) {
    if (products.hasOwnProperty(id)) {
        return products[id].cost;
    }
    return 0;
}