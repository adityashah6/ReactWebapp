import React from 'react'
import { ProductCollection } from './ProductCollection';

export const Shoes = () => {
    return (
        <div className="Shoes">
            <h1>Welcome to Shoes 👟</h1>

            <ProductCollection entry="category" condition="Shoes"/>
            
        </div>
    );
}
