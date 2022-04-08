
const contenitore = document.querySelector(".container")

const limit = 100

for(let i = 1; i <= limit; i++){

  const boxEr = document.createElement("div");

  boxEr.className = "box";
  

  if((i % 15)=== 0) {

    boxEr.textContent = "FizzBuzz!";
  } else if((i % 3)=== 0) {

      boxEr.textContent = "Fizz!";

  }else if((i % 5)=== 0) {

      boxEr.textContent = "Buzz!";

  }else {

    boxEr.append(i);

  }

  contenitore.append(boxEr);

}