let quantity = 2
let price = 15000000


function calculateTotalPrice(quantity, price) {
    let amount = quantity * price;
    return alert('Стоимость покупки: ' + amount.toLocaleString('ru-RU') + ' рублей.');
}

calculateTotalPrice(quantity, price);

console.log(calculateTotalPrice(quantity, price));
