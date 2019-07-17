function fungsiObject(){
    let x = {
        // nilai dari x mengambil nilai dari function halo yang memiliki nilai halo teman2
        pesan: halo()
    }

    console.log(x.pesan);
}


// akan diambil nilainya oleh fungsi diatas
function halo(){
    return "halo teman2";
}


fungsiObject();