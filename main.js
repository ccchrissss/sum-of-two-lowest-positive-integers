function sumTwoSmallestNumbers(numbers) {

  numbers.sort( (a,b) => a - b )

  return numbers[0] + numbers[1]
}

console.log(sumTwoSmallestNumbers([4, 600, 598, 201]))

// parameter: an array of at least 4 positive integers
// return: the sum of the two lowest positive numbers from the array
// sumTwoSmallestNumbers([4, 600, 598, 201])
// results in 205

// sort the array from smallest to largest number
// return the sum of numbers[0] and numbers[1]