// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  // let revString = ''
  // for (let i = str.length - 1; i >= 0; i--) {
  //   revString += str[i]
  // }
  // return revString
  ////////////////////////////
  // return str.split('').reverse().join('')
  ////////////////////////////
  // let revString = ''
  // for (const char of str) {
  //   revString = char + revString
  // }
  // return revString
  ////////////////////////////
  // let revString = ''
  // str.split('').forEach((char) => (revString = char + revString))
  // return revString
  ////////////////////////////
  // return str.split('').reduce((revString, char) => {
  //   return char + revString
  // }, '')
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  const revString = str.split('').reverse().join('')

  return revString === str
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const revString = int.toString().split('').reverse().join('')

  return parseInt(revString) * Math.sign(int) // we're keeping the original sign
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  // const strArr = str.toLowerCase().split(' ')
  // console.log(strArr)

  // for (let i = 0; i < strArr.length; i++) {
  //   strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1)
  // }
  // return strArr.join(' ')

  /////////////////////////////////

  return str
    .toLowerCase()
    .split(' ')
    .map((word) => (word = word[0].toUpperCase() + word.substring(1)))
    .join(' ')
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {}

// Call Function

// const output = reverseString('hello')
// console.log(output)

// const output = isPalindrome('hello')
// console.log(output)

// const output = reverseInt(-911)
// console.log(output)

const output = capitalizeLetters('i love javascript')
console.log(output)
