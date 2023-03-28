//Soal 1
// deklarasi var adalah scope global atau scope function sementara let dan const adalah  scope blok.
// variabel var dapat diperbaharui dan dideklarasikan ulang didalam scope nya; variabel let dapat diperbaharui namun tidak dapat dideklarasikan ulang; variabel const tidak dapat diperbaharui maupun di deklarasikan ulang.

// var nama = "Daus";
// var nama = "Amat";
// console.log(nama);

// let nama = "Daus";
// let nama = "Amat";
// console.log(nama);

// const nama = "Daus";
// const nama = "Amat";
// console.log(nama);

// Semuanya akan dinaikkan ke atas scope nya. Namun variabel var akan diinisialisasi dengan undefined, let dan const tidak akan diinisialisasi

//         var name1 = "var";
//         let name2 = "let";
//         const name3 = "const";

// function test() {
    
    // console.log(name1+ " Di panngil di Local Scope"); //Di panngil di Local Scope
    // console.log(name2 + " Di panngil di Local Scope"); //Di panngil di Local Scope
    // console.log(name3 + " Di panngil di Local Scope"); //Di panngil di Local Scope
    
//     if(true) {
//         console.log(`${name1} Di panngil di Block Scope`); //Di panngil di Block Scope
//         console.log(`${name2} Di panngil di Block Scope`); //Di panngil di Block Scope
//         console.log(`${name3} Di panngil di Block Scope`); //Di panngil di Block Scope
//     }else {
//     console.log("Gagal Di Panggil");
//     }
// }

// console.log(`${name1} Di panngil di Global Scope`); //Di panngil di Global Scope
// console.log(`${name2} Di panngil di Global Scope`); //Di panngil di Global Scope
// console.log(`${name3} Di panngil di Global Scope`); //Di panngil di Global Scope
// test();