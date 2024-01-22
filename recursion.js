
/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if (i === nums.length) return 1;
  return nums[i] * product(nums, i + 1);

  }


const result = product([1,2,3])
// console.log(result)

/** longest: return the length of the longest word in an array of words. */

function longest(words, i =0, maxLength = 0) {
  if (i === words.length) {
    return maxLength;
  } const currentLength = words[i].length;
  const updateMaxLength = Math.max(currentLength,maxLength);
  return longest(words, i+1, updateMaxLength)
}

/** everyOther: return a string with every other letter. */
//hello
function everyOther(str, i = 0) {
  if (i >= str.length) {return ''} ;
  const currentLetter = str[i]
  if (i % 2 === 0){
    const reminaingLetters = everyOther(str, i+1);
    return currentLetter + reminaingLetters
  } else{
    return everyOther(str, i+1);
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }

  const firstChar = str[0].toLowerCase();
  const lastChar = str[str.length - 1].toLowerCase();

  if (firstChar !== lastChar) {
    return false;
  }

  const remainingSubstring = str.substring(1, str.length - 1);
  return isPalindrome(remainingSubstring);
}


/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (val === null) return -1;
  if (i === arr.length){
    return -1
  }
  if(arr[i] === val){
    return i;
  } else {
    return findIndex(arr, val, i + 1);
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length -1) {
  if (i < 0){
    return ''
  };
  return str[i] + revString(str,i - 1);
 
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      result.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      result = result.concat(gatherStrings(obj[key]));
    }
  }

  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === val) {
      return mid; 
    } else if (arr[mid] < val) {
      left = mid + 1; 
    } else {
      right = mid - 1; 
    }
  }

  return -1; 
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  
};


toString()