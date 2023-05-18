import React from 'react'
import { ProductCollection } from './ProductCollection';


export const Tshirts = () => {
    return (
        <div className='Tshirts'>
            <h1>Welcome to Tshirts 👕</h1>
            <ProductCollection entry="category" condition="T-shirt"/>
        </div>
    )
}