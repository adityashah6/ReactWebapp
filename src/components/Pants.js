import React from 'react';
import { ProductCollection } from './ProductCollection';

export const Pants = () => {
    return (
        <div className="Shorts">
            <h1>Welcome to Pants 👖</h1>
            <ProductCollection entry="category" condition="Pants"/>
        </div>
    );
}
