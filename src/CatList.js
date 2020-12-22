import React from 'react'


const CatList = props => {
    return(
        <div>
        {props.catPics.map(catpic => <img src={catpic}/>)}
        </div>

        
    )
}

export default CatList