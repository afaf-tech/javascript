function testingSwitch(nilai){
    
    // let integ = (nilai.which)? nilai.which : event.keyCode;
   
    if(typeof(aa)!== "number"){
        console.log("Bukan Nomor");
    }else{
        
        switch(aa){
            case 10:
                console.log("sangat Bagus");
                break;
            case 8:
                console.log("Baik");
                break;
            case 6:
                console.log("Cukup");
                break;
            default:
                console.log("lainnya");
        }
    }
}
var nilai = 3.2;
var aa= nilai.toFixed();

console.log(typeOf(aa));

testingSwitch(3.2);

function hanyaAngka(evt){
    var charCode = (evt.which)? evt.which : event.keyCode;
    if(charCode > 31 && (charCode < 48 || charCode > 57))
    return false;
    return true;
}


function ii(event){
    return hanyaAngka();
}

console.log(ii()); 