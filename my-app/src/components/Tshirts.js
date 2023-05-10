import React from 'react'


export const Tshirts = () => {
    return (
        <div className='Tshirts'>
            <h1>Welcome to Tshirts 👕</h1>
            
            <div class="card clothing-card">
                <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSRAs5CFqkxXt2Grk6_uT9tMZ6JS5PK6UREDpXyVOhrAd4_bV2C3tUaDqzj46hgxRz5jwRXjspvlPDuK5XR1VbWygJthC4Mok1pHEUeTqK3NDIhsGK9XRUiNA" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Black T-Shirt</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a class="btn btn-info add-cart-btn">Add to Cart</a>
                </div>
            </div>
        </div>
    )
}