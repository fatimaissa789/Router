import React from 'react'

const  Search =({gestionSearch }) =>{

    return (
        <div>
            <input type='text' placeholder='recherche' onChange={gestionSearch}></input>
        </div>
    )
}

export default Search;
