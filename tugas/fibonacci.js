let angkaSekarang = 0;
let angkaSebelumnya = 1;

console.log(angkaSekarang);
console.log(angkaSebelumnya);

for(let i=0; i<10; i++){
    var output = angkaSekarang + angkaSebelumnya;
    console.log(output);
    angkaSebelumnya = angkaSekarang;
    angkaSekarang= output;
};