$.ajax({
    url: 'https://api.coinmarketcap.com/v2/ticker/?limit=10',
    type: 'GET',
    dataType: "json",
    success: displayAll
});

function displayAll(data){

//console.table(data.data);

//a = data.data.active_cryptocurrencies
// console.log(a);

allData = data.data;
console.table(allData);


//document.write(a);
document.getElementById('coinData').innerHTML = JSON.stringify(allData);
document.getElementById('cryptoName').innerHTML = JSON.stringify(data.data);

}
