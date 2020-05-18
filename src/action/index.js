import API from '../api';

// export const AmbilJson = () => {

//     const data = API.get("/posts");

//     return {
//         type: "AMBIL_JSON",
//         data: data
//     }
// }

//Use Middleware
export const AmbilJson = () => async dispatch => {

    const data = await API.get("/posts");

    dispatch({
        type: "AMBIL_JSON",
        data: data
    })
}


// Actoin Creator
export const AmbilData = () => {
    const data = [
        {id: 1, nama: "Endang Jaenudin",peran: "Ayah", tanggalLahir: "06 Juni 1963"},
        {id: 2, nama: "Nia Kurniawati Zenab",peran: "Ibu", tanggalLahir: "01 Februari 1971"},
        {id: 3, nama: "Alifa Nur Zaini",peran: "Anak ke-1", tanggalLahir: "26 Maret 1995"},
        {id: 4, nama: "Muhammad Gifar Zaini",peran: "Anak ke-2", tanggalLahir: "06 November 1997"},
        {id: 5, nama: "Theta Trinanda Zaini",peran: "Anak ke-3", tanggalLahir: "21 Desember 2000"}
    ]

    //Action
    return {
        type: "AMBIL_DATA",
        data: data
    }
}

export const PilihNama = (data) => {
    return {
        type: "PILIH_NAMA",
        data: data
    }
}