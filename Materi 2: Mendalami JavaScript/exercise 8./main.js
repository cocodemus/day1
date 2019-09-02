function pasanganTerbesar(num){
  
  var ubahNum=num.toString();//ubah number menjadi string
  var hasil = 0;//intialisasi nilai hasil
  for(i = 0; i < ubahNum.length ; i++){//membaca array dari kiri ke kanan
    if(hasil<Number(ubahNum[i]+ubahNum[i+1])){//jika array ke i +array ke i+1 > hasil
      //console.log(Number())
      hasil = Number(ubahNum[i]+ubahNum[i+1]);//ubah nilai hasil menjadi nilai baru dan ubah kembalistring jadi Number
    }
  }
  return hasil;
}


// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
