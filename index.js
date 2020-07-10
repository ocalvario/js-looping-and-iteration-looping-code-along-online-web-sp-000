// Code your solutions in this file
function printBadges(names) {
  for (let count = 0; count < names.length; count++) {
    console.log(`Welcome ${names[count]}! You are employee #${count + 1}.`)
  }
  return names
}

function countdown(integer) {
    while (integer > -1 ) {
        console.log(integer);
        integer--;
    }
} 