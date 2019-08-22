function konversiMenit(menit) {
    // you can only write your code here!
    var minute = Math.floor(menit / 60)
    var detik = menit % 60
    
    if (detik.length === 1) {
      detik = "0"+detik
    }
    
    var hasil = minute + ":" + detik
    
    return hasil
  }
  
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00
