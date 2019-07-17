var personalInfo = {
    nama: "Ahmad Fatih Al Fikri",
    umur: 19,
    skill : ['progamming','3D design']

}


for(var x in personalInfo){
    console.log(personalInfo[x]);
}


function checktype(){
    var a = [1,2,3,3];

    console.log(typeof(a));
}

checktype();