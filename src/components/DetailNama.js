import React from 'react';
import {useSelector} from 'react-redux';

export const DetailNama = () => {

    const info = useSelector(state => state.PilihNama);
    console.log('info', info);

    if (!info) {
        return (
            <div>
                Pilih Nama..
            </div>
        )
    }
    const {id, nama, peran, tanggalLahir} = info

    return (
        <div>
            <p>ID : {id}</p>
            <p>Nama : {nama}</p>
            <p>Peran : {peran}</p>
            <p>Tanggal Lahir : {tanggalLahir}</p>
        </div>
    )
}