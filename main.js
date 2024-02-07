const input = "turpentine and turntles ";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  //console.log(`inputIndex is ${inputIndex}.`)

  for (let vowelsIndex = 0; vowelsIndex < vowels.lenght; vowelsIndex++) {
    //console.log(`vowelsIndex is ${vowelsIndex}.`)
    if (input[inputIndex] === vowels[vowelsIndex]) {
      console.log(input[inputIndex]);
    }
  }
}

//i am on 8
