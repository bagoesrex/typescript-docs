function getFirst(arr: any[]): any {
    return arr[0];
}

// Masalah:

// Kehilangan informasi tipe (any terlalu umum).
// Tidak ada pengecekan tipe saat mengakses hasilnya.