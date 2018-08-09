$.ajax({
    url: 'https://api.coinmarketcap.com/v2/global/',
    type: 'GET',
    dataType: "json",
    success: displayAll
});

function displayAll(data){

console.table(data.data);

a = data.data.active_cryptocurrencies
// console.log(a);

//document.write(a);
document.getElementById('coinData').innerHTML = a;
}
