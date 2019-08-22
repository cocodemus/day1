function balikKata(kata) {
    // you can only write your code here!
    var str = ''
    for (var a = kata.length-1; a >= 0; a--) {
        str = str + kata[a]
    } return str
  }
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS
