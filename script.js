$.ajax({
    url: 'https://api.coinmarketcap.com/v2/ticker/?limit=10',
    type: 'GET',
    dataType: "json",
    success: displayAll
});

function displayAll(data){

allData = data.data;

a = document.getElementById('coinData').innerHTML = JSON.stringify(allData);

console.log(typeof(allData));

result = (allData["1"].name);

var obj = JSON.parse(a);

console.log(obj[2].circulating_supply);


const cryptoData = obj[2].circulating_supply;
console.log(cryptoData);

document.getElementById('cryptoName').innerHTML = cryptoData;
document.getElementById('cryptoSymbol').innerHTML = obj[2].symbol;;
document.getElementById('cryptoRank').innerHTML = obj[2].rank;;

}
