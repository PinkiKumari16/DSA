var maxProfit = function(prices) {
    let profit=0;
    let bp=prices[0]
    for(let i=1; i<prices.length; i++){
        if(prices[i]<bp){
            bp=prices[i]
        }
        if(prices[i]-bp>profit){
            profit = prices[i]-bp
        }
    }
    console.log(profit)
    return profit;

};
let prices = [7,6,4,3,1];
console.log(maxProfit(prices));