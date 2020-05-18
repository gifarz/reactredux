import React from 'react';
import {DaftarKeluarga} from './DaftarKeluarga';
import {DetailNama} from './DetailNama'
import Posts from './Posts';

const App = () => {
    return (
        <div className="container mt-5">
            <DaftarKeluarga/>
            <hr/>
            <DetailNama/>
            <hr/>
            <h3 style={{textAlign: "center", marginBottom: "50px"}}>List Post JsonPlaceholder</h3>
            <Posts/>
        </div>
    )
}

export default App;