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
 * Fidelity internation -- String encryption asci to char and car to asci
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
      let newMap = new Map();
      const newArr = arr.map(ele => {
            console.log("here", ele)
            let mapVal = `${ele.id}${ele.name}`
            newMap.set(mapVal, ele)

      }

      );
      console.log("mapArr", Array.from(newMap));
      return newMap;
      //cl(newArr);
      let uniqArr = [...new Set(newArr)];

      ///return arr.filter((ele, i) => Object.keys(ele)[0]  arr.indexOf(ele) == i);
}

let arrR = [{ id: 1, name: "dhee" }, { id: 2, name: "popo" }, { id: 1, name: "dhee" }];
//let arrR = [1, 2, 2, 2, 77, 8, 87, 98998, 5, 4, 6, 5, 7, 2, 3, 6, 975, 2, 48, 4, 1, 1];
// cl(removeDuplicateEntries(arrR));

/**
 * solution by aditya
 */
// console.log({

//       filtered: arr.reduce((acc, current) => {
//               return acc.some(el => el.name.toLowerCase() === current.name.toLowerCase())
//                       ? acc
//                       : acc.concat(current)
//                         }, [])
// });


//understand these array methods below to grab concept

/**
 * some()
 * from()
 * indexOf()
 */




/**
 * find count of each unique alphabets in a string for eg - missisippi
 */

function uniqueOccuranceChars(str) {
      let arrEkstr = str.split("");
      let thisMap = new Map();
      arrEkstr.map((ele, i) => {

            if (arrEkstr.indexOf(ele) == i) {
                  thisMap.set(ele, 1);
            }
            else {
                  let k = thisMap.get(ele);
                  k = k + 1;
                  thisMap.set(ele, k);
            }
      }
      )
      return thisMap;
}
// cl(uniqueOccuranceChars("aabbCCddEEefF"));

// to conver charcter to its ascii value we can use str.charCodeAt(index) OR "a".charCodeAt() like this




//Fidelity internation -- String encryption asci to char and car to asci

/***
 * import "./styles.css";
import { useState } from "react";

export default function App() {
  const [inputBoxValue, setInputBoxValue] = useState("");

  const [key, setKey] = useState("");
  const [outputVal, setOutputVal] = useState("");

  let arr = [];
  for (let j = 0; j < 26; j++) {
    arr[j] = String.fromCharCode(97 + j);
    // console.log(arr[j]);
  }
  console.log(arr);
  const encryptInput = (event) => {
    let asciValOfInput = inputBoxValue.charCodeAt(0);

    let afterEncryption = asciValOfInput + Number.parseInt(key);

    setOutputVal(String.fromCharCode(afterEncryption));
    console.log(asciValOfInput, key, afterEncryption);
  };
  return (
    <div className="App">
      InputBox:
      <input
        value={inputBoxValue}
        onChange={(event) => setInputBoxValue(event.target.value)}
      ></input>
      key:
      <input
        value={key}
        onChange={(event) => setKey(event.target.value)}
      ></input>
      Clock:<input type="radio"></input>
      <button onClick={encryptInput}>Encrypt</button>
      Output: <input readOnly value={outputVal}></input>
    </div>
  );
}

 */