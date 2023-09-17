// 1 find min number in array
function findMinNumber(numbers) {
    return Math.min(...numbers);
}
let numbers = [4, 2, 7, 1, 9, 3];
let minNumber = findMinNumber(numbers);
console.log(minNumber);


// 2 reverse an array
let myArray = [1, 2, 3, 4, 5];
myArray.reverse();
console.log(myArray);


//3.find the average of an arrayfunction calculateAverage(numbers) {
function calculatedAverage(numbers) {
    if (numbers.length === 0) {
        return null;
    }
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}
const number = [1, 2, 3, 4, 5];
const average = calculatedAverage(numbers);
console.log(average)


// 4 remove even numbers
function removeEvenNumbers(arr) {
    return arr.filter((num) => num % 2 !== 0);
}
const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const oddNumbers = removeEvenNumbers(numbers);
console.log(oddNumbers);



// 5ind common elements amongst two arrys
function getCommonItems(array1, array2) {
    var common = []; // Initialize array to contain common items

    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]) { // If item is present in both arrays
                common.push(array1[i]); // Push to common array
            }
        }
    }
    return common;

}
var array1 = [1, 4, 5, 6, 8, 9, 3, 16, 18];
var array2 = [1, 2, 3, 8, 9, 18];
var commonItemList = getCommonItems(array1, array2);
console.log(commonItemList);
