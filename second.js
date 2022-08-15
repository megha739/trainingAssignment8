
        var arrayA = ["h","e","l","l","o"];
var arrayB = [];
function copyArray(oldArray, newArray) {         
    oldArray.forEach(function(item,index) {                         
        newArray.push(oldArray[oldArray.length-1-index]); 
    });
    console.log(oldArray + " old array");
    console.log(newArray + " new array");
}

copyArray(arrayA, arrayB);
 