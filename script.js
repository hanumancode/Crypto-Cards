$.ajax({
    url: 'https://api.coinmarketcap.com/v2/ticker/?limit=10',
    type: 'GET',
    dataType: "json",
    success: displayAll
});

function displayAll(data){

allData = data.data;

var obj = allData;

const ace = Object.values(obj);

console.log(Object.values(obj));

console.log('ace typeof', typeof(ace));

for (i = 0; i < ace.length; i++) {
    // document.write('<h4>' + ace[i].name + '</h4>');
    // document.getElementById('cryptoName').innerHTML = [`${(ace[0].name)}`],

}

a = JSON.stringify(allData);

result = (allData["1"].name);

var obj = JSON.parse(a);

Object.entries(obj).forEach(
    ([key, value]) => console.log(key, value),
    document.getElementById('cryptoName').innerHTML = [`${(ace[0].name)}`],
    document.getElementById('cryptoSymbol').innerHTML = [`${(ace[0].symbol)}`],
    document.getElementById('cryptoRank').innerHTML = [`Rank: ${ace[0].rank}`],
    document.getElementById('cryptoSupply').innerHTML = [`
    
    <p id="circ_supply">Cirulation Supply: ${ace[0].circulating_supply}</p>
    
    `],
    
    document.getElementById('cryptoName3').innerHTML = obj[52].circulating_supply,
    document.getElementById('cryptoSymbol3').innerHTML = obj[52].symbol,
    document.getElementById('cryptoRank3').innerHTML = obj[52].rank
);

}
