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

function minOfSortedRotated(arr){
    var min = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

//Example:
var arr = ["Gigli","Jay is  cool","Mavis","Phoebe","Thurber","Anna","Celeste","Elon"];
console.log(minOfSortedRotated(arr)); //Anna

//We set the min to the first value of the array.
//We loop through the array starting at the second value.
//If the value is less than the min, we set the min to the value.
//We return the min.

//#####################################################################################################################

//3.
//String: Binary Search

/* You will be given a very long string and a single character. 
Return whether that character is present in the string. 
Note: the characters in the string have been arranged so that the charCodeAt() values for each character 
are monotonically ascending from the beginning of the string to the back. 
Use the fact that the string is effectively sorted. Don’t use built-in functions. 
Note: characters may not be exactly as you might have considered ‘alphabetized’, but char.charCodeAt() works well.  

Example: if your function is given the inputs (" &-0379DEFXZ[abcz|", "6"), 
it should return false. If instead it is sent (" &-0379DEFXZ[abcz|", "c"), return true. 
Remember, don’t iterate the string linearly!
*/