$.ajax({
    url: 'https://api.coinmarketcap.com/v2/ticker/?limit=10',
    type: 'GET',
    dataType: "json",
    success: displayAll
});

function displayAll(data){

allData = data.data;

a = JSON.stringify(allData);

//console.log(typeof(allData));

result = (allData["1"].name);

var obj = JSON.parse(a);

Object.entries(obj).forEach(
    ([key, value]) => console.log(key, value),
    document.getElementById('cryptoName').innerHTML = obj[1].circulating_supply,
    document.getElementById('cryptoSymbol').innerHTML = obj[1].symbol,
    document.getElementById('cryptoRank').innerHTML = obj[1].rank,
    document.getElementById('cryptoName2').innerHTML = obj[2].circulating_supply,
    document.getElementById('cryptoSymbol2').innerHTML = obj[2].symbol,
    document.getElementById('cryptoRank2').innerHTML = obj[2].rank,
    document.getElementById('cryptoName3').innerHTML = obj[52].circulating_supply,
    document.getElementById('cryptoSymbol3').innerHTML = obj[52].symbol,
    document.getElementById('cryptoRank3').innerHTML = obj[52].rank
);

}
