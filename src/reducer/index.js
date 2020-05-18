import {combineReducers} from 'redux';


const DaftarKeluargaReducer = (state=[], action) => {
    if (action.type === "AMBIL_DATA"){
        return action.data
    }

    return state
}

const PilihNamaReducer = (pilihan=null, action) => {
    if (action.type === "PILIH_NAMA"){
        return action.data
    }

    return pilihan
}

const AmbilJsonReducers = (post=[], action) => {
    if (action.type === "AMBIL_JSON"){
        return action.data
    }

    return post
}

export default combineReducers({
    DaftarKeluarga: DaftarKeluargaReducer,
    PilihNama : PilihNamaReducer,
    AmbilJson : AmbilJsonReducers
})