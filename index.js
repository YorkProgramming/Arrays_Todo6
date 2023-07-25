//1. 
//Array: Binary Search

/* Given a sorted array and a value, return whether the array contains that value. 
Do not sequentially iterate the array. Instead, ‘divide and conquer’, 
taking advantage of the fact that the array is sorted. 
As always, only use built-in functions that you are prepared to recreate (write yourself) on demand! */

function binarySearch(arr, val){
    var mid = Math.floor(arr.length/2);
    if (arr[mid] == val){
        return true;
    }
    else if (arr[mid] < val && arr.length > 1){
        return binarySearch(arr.splice(mid, Number.MAX_VALUE), val);
    }
    else if (arr[mid] > val && arr.length > 1){
        return binarySearch(arr.splice(0, mid), val);
    }
    else return false;
}

//Example:
var arr = [1,2,3,4,5,6,7,8,9,10];
console.log(binarySearch(arr, 5)); //true
console.log(binarySearch(arr, 11)); //false

//#####################################################################################################################