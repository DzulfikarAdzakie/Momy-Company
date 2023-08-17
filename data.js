const nama = "Momy Company";
let usia = 31;
// console.log ( 'Brand yang bernama ${nama} yang memasuki tahun ke ${usia} ')

function generateBiodata() {
    if(usia > 10 && usia < 18 ) {
        console.log('Wah Brand lama')
    } 
    else if(usia > 18 && usia < 30) {
        console.log('Wah Brand Nanggung')
    }
    else if(usia > 30) {
        console.log('Brand Legend ini mah')
    }
    else {
        console.log('Wah Brand Baru')
    }
    console.log ('Brand yang bernama', nama, 'yang memasuki tahun ke', usia );
}

console.log(nama)
console.log(usia)

generateBiodata()