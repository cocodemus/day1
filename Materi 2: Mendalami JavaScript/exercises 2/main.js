function balikNama(string){
var dumBalik = ''

for (i=string.length-1; i>=0; i--) {
dumBalik = dumBalik + string[i]
}
return dumBalik
}

console.log (balikNama('Hello World'))
