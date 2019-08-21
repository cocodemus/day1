function processSentence(name, age, address, hobby) {

var ktp = "Nama saya " + name + " umur " + age + " tahun, alamat saya di " +  address + " , dan saya punya hobby yaitu " + hobby + '!'
    return ktp
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);