import React from 'react'

function Items(props) {

    const {item} = props
    return (
        <div>
            
        <div className='grid-items'>
            <img src={item.image} />
        <h2>{item.name}</h2>
        <h4>{item.description}</h4>
        </div>

        </div>
    )
}

export default Items