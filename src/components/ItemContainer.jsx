import React, { useState } from 'react'
import { useEffect } from 'react'
import Items from './Items'
function ItemContainer() {

    const [items, setItems] = useState([])

useEffect(() => {
    fetch('http://localhost:3000/items')
    .then(response => response.json())
    .then(setItems)
},[])

console.log(items)

const renderItems = items.map(item => <Items key={item.id} item={item}/>)


    return (
        <div className='item-container'>
            <h3>Test</h3>

            <div className='grid-container'>
            {renderItems}
            </div>

        </div>
    )
}

export default ItemContainer