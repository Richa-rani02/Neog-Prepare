// 12th April

// Question 2

// const arr = [
//     { category: "men", color: "blue", quantity: 5, item: "jeans" },
//     { category: "women", color: "blue", quantity: 5, item: "jeans" },
//     { category: "women", color: "blue", quantity: 6, item: "tshirt" },
//     { category: "men", color: "blue", quantity: 2, item: "tshirt" }
//   ];



// Expected Output:
// {
// 	jeansQuantity: 10, 
// 	tshirtQuantity: 8
// }










//Star question

// const storeData = {
//     women: {
//       top: {
//         id: "at12",
//         availability: [
//           { id: 1, color: "blue", quantity: 5, inStock: true },
//           { id: 2, color: "black", quantity: 3, inStock: true }
//         ]
//       },
//       jeans: {
//         id: "aj12",
//         availability: [
//           { id: 3, color: "dark blue", quantity: 0, inStock: false },
//           { id: 4, color: "dark blue", quantity: 5, inStock: true },
//           { id: 5, color: "black", quantity: 5, inStock: true }
//         ]
//       },
//       purse: {
//         id: "ap12",
//         availability: [
//           { id: 6, color: "red", quantity: 5, inStock: true },
//           { id: 7, color: "white", quantity: 0, inStock: false }
//         ]
//       }
//     },
//     men: {
//       shirt: {
//         id: "ms12",
//         availability: [
//           { id: 8, color: "yellow", quantity: 5, inStock: true },
//           { id: 9, color: "black", quantity: 3, inStock: true }
//         ]
//       },
//       jeans: {
//         id: "mj12",
//         availability: [
//           { id: 10, color: "blue", quantity: 0, inStock: false },
//           { id: 11, color: "black", quantity: 9, inStock: true }
//         ]
//       },
//       wallet: {
//         id: "mw12",
//         availability: [
//           { id: 12, color: "blue", quantity: 15, inStock: true },
//           { id: 13, color: "black", quantity: 10, inStock: true }
//         ]
//       }
//     }
//   };

// 3a: Find and console the quantity of dark blue women jeans in stock.
// Expected Output: 
// 5
// 3b: Get the total quantity of men’s wallet.
// Expected Output:

// { menWalletQuantity: 25 }



//13th April Question 1
/*

const clothingStock = [
    {id: "0a1", color: "blue", category: "men shirt", item: "Regular Fit Men Shirt", inStock: true}, 
    {id: "0a2", color: "black", category: "women top", item: "Regular Fit Women Top", inStock: true}, 
    {id: "0a3", color: "grey", category: "men shirt", item: "Slim Fit Men Shirt", inStock: false},
    {id: "0a4", color: "grey", category: "men tshirt", item: "Slim Fit Men Tshirt", inStock: false},
    {id: "0a5", color: "red", category: "women top", item: "Slim Fit Women Top", inStock: true},
    {id: "0a6", color: "yellow", category: "men shirt", item: "Casual Fit Men Shirt", inStock: true},
    {id: "0a7", color: "orange", category: "men shirt", item: "Straight Fit Men Shirt", inStock: true},
    {id: "0a8", color: "orange", category: "women top", item: "Casual Fit Women Top", inStock: false}
]

1a. Console all the different colours available for men shirt.

// Expected Output:
blue
grey
yellow
orange

1b. Console all the different colours available for men shirt which are currently in stock.

// Expected Output:
blue
yellow
orange

1c: Console an array which only contains the elements which are in stock.

// Expected Output:
[
    {id: "0a1", color: "blue", category: "men shirt", item: "Regular Fit Men Shirt", inStock: true}, 
    {id: "0a2", color: "black", category: "women top", item: "Regular Fit Women Top", inStock: true},
    {id: "0a5", color: "red", category: "women top", item: "Slim Fit Women Top", inStock: true},
    {id: "0a6", color: "yellow", category: "men shirt", item: "Casual Fit Men Shirt", inStock: true},
    {id: "0a7", color: "orange", category: "men shirt", item: "Straight Fit Men Shirt", inStock: true}
]
*/


// star Question
/*
var sentence = "Welcome to neoG Camp!";

// Expected Output
emocleW ot Goen !pmaC
*/