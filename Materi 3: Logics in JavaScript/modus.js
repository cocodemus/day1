// Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. Function akan me-return modus dari array atau deret angka tersebut. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan).

function cariModus(arr) {
  // you can only write your code here!
  var frekuensi = 0;
  var greatestFrekuensi = 0;
  var modus = 0;

  for(var i = 0; i < arr.length; i ++) {
    for(var j = 0; j < arr.length; j ++) {
      if(arr[i] === arr[j] && i !== j) {
        frekuensi ++;
        if(frekuensi > greatestFrekuensi) {
          greatestFrekuensi = frekuensi;
          modus = i;
        }
      }
    }
  }
  
  if(modus === 0) {
    return -1;
  }
  
  var angkaSama = 0;
  for(var k = 0; k < arr.length; k ++) {
    angkaSama += arr[k];
    if(angkaSama/arr.length === arr[k]) {
      return -1;
    }
  }
  return arr[modus];
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1