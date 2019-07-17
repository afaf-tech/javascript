// fungdi nested if = untuk membuat if di dalam if
var x = 80;
var y = 20;
var z = "30";
if(x>y){
    if(x>z){
        console.log("x adalah yang paling besar");
    }else{
        console.log("nlai x adlah yang terbesar kedua");
    }
}else{
    if(x<z){
        console.log("x adalah yang terkecil");
    }else{
        console.log("nlai x adlah yang terkecil kedua");
    }
}



// Ternary oprtator
(typeof(z)== "string")?console.log("benar"): console.log("salah");