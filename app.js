$(document).ready(() => {

    // List of added stocks, with the names of users who own them
    const stocks = [
        {ticker: 'AMZN', price: 1696, ownedBy: ['gabriel', 'joe', 'chris', 'liz', 'gulia']},
        {ticker: 'appl', price: 1696, ownedBy: ['gabriel', 'joe', 'connor']},
        {ticker: 'micRO', price: 1696, ownedBy: ['gabriel', 'joe']},
        {ticker: 'xrb', price: 1696, ownedBy: ['gabriel']}  
    ];

    // Object constructor
    class Stock {
        constructor(ticker, price, ownedBy) {
            this.ticker = ticker;
            this.price = price;
            this.ownedBy = ownedBy;
        }
    }

    // Allows Enter key to submit
    $('#name-input').keypress((event) => {
        if(event.which == 13){
            event.preventDefault();
            $('#add-stock-btn').click();
        }
    });

    // Gets form input, creates new stock object and pushes it to stocks array
    $('#add-stock-btn').click(() => {
            const tickerName = $('#stock-input').val();
            const stockPrice = $('#price-input').val();
            const ownersName = $('#name-input').val();
        
            let newStock = new Stock(tickerName, stockPrice, ownersName);
            
            stocks.push(newStock);
            upperCaseTicker(stocks);
            displayStocks(stocks);

            $('#stock-input').val('');
            $('#price-input').val('');
            $('#name-input').val('');
            
        }
    );

    // Sets ticker value toUpperCase if the are not already
    const upperCaseTicker = array => {
        array.forEach(stock => {
            if (stock.ticker !== stock.ticker.toUpperCase()) {
                stock.ticker = stock.ticker.toUpperCase();
            }   
        });
        return array;
    }

    // Displays Stock to the content div
    const displayStocks = array => {
        $("#content").empty();
        array.forEach(stock => {
            $("#content").append(`
                <div style="max-width: 300px; border-bottom: 1px black solid">
                    <p>${stock.ticker}</p> 
                    <p>$${stock.price}</p> 
                    <p>Owned by: ${stock.ownedBy}</p>
                </div>
            `);
        })
    }
    
    upperCaseTicker(stocks);
    displayStocks(stocks);

});

