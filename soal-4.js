function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (nilaiAwal >= nilaiAkhir) {
        console.log("Nilai akhir harus lebih besar dari nilai awal");
        return;
    }else if (dataArray.length <= 5) {
        console.log("Jumlah data dalam dataArray harus lebih dari 5.");
        return;
    };

    const result = dataArray.filter((dataArray) => dataArray >= nilaiAwal && dataArray <= nilaiAkhir);
    if (result.length > 0) {
        result.sort((a, b) => a - b);
        console.log(result);
    } else {
        console.log(`Nilai tidak ditemukan`);
    }
};

seleksiNilai(15,3,[2,25,4,14,17,30,8]);
// seleksiNilai(4,17,[2,25,4]);
// seleksiNilai(5,20,[2,25,4,14,17,30,8]);
// seleksiNilai(5,17,[2,25,4,1,30,18]);