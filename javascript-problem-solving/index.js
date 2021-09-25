function cl(value) {
      console.log(value);
}


/**
 * fizz buzz
 * 2 sum
 * remove all duplicates from an array
 * convert array to string 
 * convert string to array
 * find count of each unique alphabets in a string for eg - missisippi
 * Check if the string has any repeating character within it, if yes return true else return false(isogram?)
 * check if the given array has unique integers or not
 * 
 */



/**
 * check if the given array has unique integers or not
 */

function checkUniqueIntegerArray(arr) {

      arr.map(ele => {
            console.log(ele)
      });
}

/**
 * to be done
 */



/**
 * remove all duplicate entries in the array
 * for eg let arr = [{id:1, name:"dhee"},{id:2,name:"popo"},{id:1, name:"dhee"}]
 */

function removeDuplicateEntries(arr) {
      const allIdsArr = arr.map(ele => ele.id);
      cl(allIdsArr);
      //return new Set(arr)
      //return arr.filter((ele, i) => arr.indexOf(ele) == i);
}

let arrR = [{ id: 1, name: "dhee" }, { id: 2, name: "popo" }, { id: 1, name: "dhee" }];
//let arrR = [1, 2, 2, 2, 77, 8, 87, 98998, 5, 4, 6, 5, 7, 2, 3, 6, 975, 2, 48, 4, 1, 1];
cl(removeDuplicateEntries(arrR));