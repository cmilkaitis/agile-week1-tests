
// TEST PAGE IN jQUERY
$(document).ready(function() {
    let stocks = []; 
    
    $("#btn").click(function() {
        let term = $("#search-text").val();
        stocks.push(term);
        $("#content").append(`<p>${term}</p>`);
        $("#search-text").val("");
    }); 
    console.log(stocks);
});


    // FUNCTIONS FOR PROJECT BELOW

    // Sets ticker value toUpperCase if the are not already
    const upperCaseTicker = array => {
        array.forEach(stock => {
            if (stock.ticker !== stock.ticker.toUpperCase()) {
                stock.ticker = stock.ticker.toUpperCase();
            }   
        });
        return array;
    }

    console.log(upperCaseTicker(stocks));


    // Displays Stock to the content div
    const displayStocks = array => {
        array.forEach(stock => {
            $("#content").append(`<div style="border-bottom: 1px black solid"><p>Ticker: ${stock.ticker}</p> <p>Price: ${stock.price}</p> <p>Owned by: ${stock.ownedBy}</p></div>`);
        })
    }

    displayStocks(stocks);