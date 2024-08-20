var maxProfit = function(prices) {
    let profit=0;
    let buyprice=prices[0]
    for(let i=1; i<prices.length; i++){
        if(prices[i]<buyprice){
            buyprice=prices[i]
        }
        if(prices[i]-buyprice>profit){
            profit = prices[i]-buyprice
        }
    }
    console.log(profit)
    return profit;

};
let prices = [7,6,4,3,1];
console.log(maxProfit(prices));



// BST
// function isBST(root, min=null,max=null){
//     if(root===null){
//         return true
//     }
//     if(min !==null && root.val <=min){
//         return false
//     }
//     if(max !==null && root.val>= max){
//         return false
//     }
//     return isBST(root.left, min, root.val) && isBST(root.right, root.val,max)
// }
// const root = new TreeNode(5);
// root.left = new TreeNod