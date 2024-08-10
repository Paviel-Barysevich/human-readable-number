module.exports = function toReadable (number) {
  let numberToString = number.toString();
  let fromZeroToNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let decacdes = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let result = [];

  if (number < 20) {
    result.push(fromZeroToNineteen[number]);
  }

  if (number >= 20 && number <= 99) {
     if (number % 10 === 0) {
        result.push(decacdes[+numberToString[0] - 2]);
    } else {
        result.push(decacdes[+numberToString[0] - 2]);
        result.push(fromZeroToNineteen[+numberToString[1]]);
      }
  }

  if (number >= 100 && number <= 999) {
    result.push(`${fromZeroToNineteen[+numberToString[0]]} hundred`);
    if (number % 100 < 20 && number % 100 !== 0) {
        result.push(fromZeroToNineteen[number % 100]);
        return result.join(' ');
      } else if (number % 100 === 0) {
        return result.join(' ');
      }

      if (number % 100 >= 20 && number % 10 === 0) {
            result.push(decacdes[+numberToString[1] - 2]);
        } else {
            result.push(decacdes[+numberToString[1] - 2]);
            result.push(fromZeroToNineteen[+numberToString[2]]);
          }
      }

  return result.join(' ');
}