let n1 = 0;
let n2 = 0;
let sum = 0;

function getRandomNumber(n) {
  return Math.floor(Math.random() * n);
}

function setNumToBtn(n) {
  if (n == 0) {
    return "c1";
  }
  if (n == 1) {
    return "c2";
  }
  if (n == 2) {
    return "c3";
  }
  if (n == 3) {
    return "c4";
  }
}

function setNumbers() {
  n1 = getRandomNumber(10);
  n2 = getRandomNumber(10);
  sum = n1 + n2;
  document.getElementById("AddendOne").innerHTML = n1;
  document.getElementById("AddendTwo").innerHTML = n2;
  let num = getRandomNumber(4);
  document.getElementById(setNumToBtn(num)).innerHTML = sum;
  for (let i = 0; i < 4; i++) {
    if (i != num) {
      let random = getRandomNumber(19);
      document.getElementById(setNumToBtn(i)).innerHTML = random;
    }
  }
}

function clicked(n) {
  let num = document.getElementById(setNumToBtn(n)).innerHTML;
  if (num == sum) {
    document.getElementById(setNumToBtn(n)).style.backgroundColor = "green";
  }
  else {
    document.getElementById(setNumToBtn(n)).style.backgroundColor = "red";
  }
}

setNumbers();
