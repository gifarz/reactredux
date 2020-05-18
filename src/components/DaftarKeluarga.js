import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AmbilData, PilihNama} from '../action';

export const DaftarKeluarga = () => {

    const daftarKeluarga = useSelector(state => state.DaftarKeluarga);
    // console.log(daftarKeluarga);
    const dispatch = useDispatch();
    
    useEffect(()=> {
        dispatch(AmbilData());
    }, [])

    function renderList() {
        return daftarKeluarga.map(detail=>{
            console.log('details', detail)
            return (
                <div key={detail.id}>
                    <h5 onClick={()=>dispatch(PilihNama(detail))} style={{cursor: "pointer"}}>{detail.nama}</h5>
                </div>
            )
        })
    }

    return (
        <>
            <h3>Daftar Keluarga</h3> 
            <hr/>
            {renderList()}
        </>
    )
}