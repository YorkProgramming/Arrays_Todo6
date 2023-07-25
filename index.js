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

//We set the mid to the middle of the array. using Math.floor to round down.
//math.floor is used to round down to the nearest integer.
//If the value is equal to the mid, we return true.
//If the value is greater than the mid, we slice the array from the mid to the end of the array.
//Using Number.MAX_VALUE to get the largest possible number.
//If the value is less than the mid, we slice the array from the start to the mid.
//If the array length is 1 and the value is not equal to the mid, we return false.
//If the value is not found, we return false.

//#####################################################################################################################

//2.
//Min of Sorted-Rotated

/* You will be given a numerical array that has first been sorted, 
then rotated by an unknown amount. Find and return the minimum value in that array. 
Don’t use built-in functions (surprise!). 

Given the input array ["Gigli","Jay is  cool","Mavis","Phoebe","Thurber","Anna","Celeste","Elon"], 
you should return "Anna". Remember, do not linearly iterate the array!
*/