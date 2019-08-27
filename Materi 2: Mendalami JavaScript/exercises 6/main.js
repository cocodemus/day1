function angkaPalindrome(num) {
  
  var numBalik="";
  var i = true;
  var result;
  // result = num.toString().split('').reverse().join('')
  while(i){
    num++;
    
    if(num<9){
      i = false
      result = num;
    }
      // console.log(numBalik)
       numBalik = num.toString().split('').reverse().join('')
     if(String(num) === numBalik){
       i = false;
      result = num;
     }
    
  }

return  result   
    
}
