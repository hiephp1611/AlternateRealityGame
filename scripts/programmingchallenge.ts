export function main(NUMBER_LIST: string[]): number {
  for (let i = 0; i < NUMBER_LIST.length; i++) {
    const char = NUMBER_LIST[i];
    if (char === "0") {
      const before = NUMBER_LIST[i-1];
      const after = NUMBER_LIST[i+1];
      NUMBER_LIST[i-1] = after;
      NUMBER_LIST[i+1] = before;
    }
  }

  logging && console.log(NUMBER_LIST.join(""))

  for (let i = 0; i < NUMBER_LIST.length; i++) {
    const char = NUMBER_LIST[i];
    if (char === "1") {
      const next1 = NUMBER_LIST[i+1];
      const next2 = NUMBER_LIST[i+2];
      let sum = parseInt(next1) + parseInt(next2);
      if (sum > 9) {
        sum = 9;
      }
      NUMBER_LIST[i+1] = sum.toString();
      NUMBER_LIST.splice(i+2, 1);
    }
  }

  logging && console.log(NUMBER_LIST.join(""))

  for (let i = 0; i < NUMBER_LIST.length; i++) {
    const char = NUMBER_LIST[i];
    if (char === "2") {
      const next = NUMBER_LIST[i+1];
      NUMBER_LIST[i] = next;
    }
  }

  logging && console.log(NUMBER_LIST.join(""))

  for (let i = 0; i < NUMBER_LIST.length; i++) {
    const char = NUMBER_LIST[i];
    if (char === "3") {
      const fiveAhead = NUMBER_LIST.slice(i+1, i+6);
      if (fiveAhead.includes("7")) {
        NUMBER_LIST.splice(i, 1);
      }
    }
  }

  logging && console.log(NUMBER_LIST.join(""))

  for (let i = 0; i < NUMBER_LIST.length; i++) {
    const char = NUMBER_LIST[i];
    if (char === "4") {
      const fourAhead = NUMBER_LIST.slice(i+1, i+5);
      let sum = 0;
      for (const char of fourAhead) {
        sum += parseInt(char);
      }
      if (sum % 2 === 0) {
        NUMBER_LIST[i] = "8";
      }
    }
  }

  logging && console.log(NUMBER_LIST.join(""))

  for (let i = 0; i < NUMBER_LIST.length; i++) {
    const char = NUMBER_LIST[i];
    if (char === "5") {
      NUMBER_LIST.splice(i-1, 1);
    }
  }

  logging && console.log(NUMBER_LIST.join(""))

  for (let i = 0; i < NUMBER_LIST.length; i++) {
    const char = NUMBER_LIST[i];
    if (char === "6") {
      NUMBER_LIST.splice(i, 1);
      NUMBER_LIST.push("6");
    }
  }

  logging && console.log(NUMBER_LIST.join(""))

  for (let i = 0; i < NUMBER_LIST.length; i++) {
    const char = NUMBER_LIST[i];
    if (char === "7") {
      let j = 1;
      while (i + j < NUMBER_LIST.length) {
        if (isPrime(parseInt(NUMBER_LIST[i+j]))) {
          if (j > 9) {
            j = 9;
          }
          NUMBER_LIST[i] = j.toString();
          break;
        }
        j++;
      }

      if (i + j >= NUMBER_LIST.length) {
        NUMBER_LIST[i] = "0";
      }
    }
  }

  logging && console.log(NUMBER_LIST.join(""))

  for (let i = 0; i < NUMBER_LIST.length; i++) {
    const char = NUMBER_LIST[i];
    if (char === "8") {
      const count = NUMBER_LIST.filter(c => c === "8").length;
      const filteredNumbers = NUMBER_LIST.filter(c => c !== "8");
      filteredNumbers.splice(i, 0, (count % 10).toString());
      NUMBER_LIST = filteredNumbers;
      break
    }
  }

  logging && console.log(NUMBER_LIST.join(""))

  for (let i = 0; i < NUMBER_LIST.length; i++) {
    const char = NUMBER_LIST[i];
    if (char === "9") {
      for (let j = i+1; j < NUMBER_LIST.length; j++) {
        const char = NUMBER_LIST[j];
        if (char === "1") {
          NUMBER_LIST.splice(i, 1);
          NUMBER_LIST.splice(j, 1);
          break;
        }
      }
    }
  }

  logging && console.log(NUMBER_LIST.join(""))

  let sum = 0
  for (const char of NUMBER_LIST) {
    sum += parseInt(char);
  }
  return sum
}

function isPrime(num: number): boolean {
  return [2,3,5,7].includes(num)  
}

const logging = false

//console.log(main("9236590123506283690126359012358013612834238750237865023650160189265189063258063250012639316518936518763491264891642124691961065346".split("")))
