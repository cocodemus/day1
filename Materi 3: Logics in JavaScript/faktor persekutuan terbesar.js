// Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka. 
// Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). 
// FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.


function fpb(angka1, angka2) {
  for(i = 1; i <= angka1; i++){
    var mod1 = angka1 % i;
    var mod2 = angka2 % i;
    // console.log(mod1)
    // console.log(mod2)
    // console.log('------')
    if(mod1 === mod2 && mod2 === 0){
      var FPB = i;
    }
  }
  return FPB
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
