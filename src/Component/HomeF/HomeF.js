import React from 'react';
import './HomeF.css'

const HomeF = () => {
    return (
        <div>
            <h1 className='H1'>Add New Item For Sell !</h1>
            <div className='sell-container'>
                <form className='sell-form' action="">
                    <label>Name of the product</label>
                    <input type="text" />
                    <label>Category</label>
                    <input type="text" />
                    <label>Quantity</label>
                    <input type="number" />
                    <label>Unit</label>
                    <input type="number" />
                    <label>Price</label>
                    <input type="number" />
                    <button type='submit'>Add Product</button>
                </form>
            </div>
            <h1 className='H1'> Your Listed Product </h1>
            
        </div>
    );
};

export default HomeF;