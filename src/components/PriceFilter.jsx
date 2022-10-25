import React, { useState } from 'react';
import '../styles/components/allFilters.css';

function PriceFilter (props) {
    const { prices, changePrice } = props;
    const [ activePrice, setActivePrice ] = useState(-1);

    return (
        <div className="price-card" >
            <h4>PRICE</h4>

            <ul className='price-list'>
                {prices.map((price, index) => (
                    <li key={price} onClick={() => {changePrice(price); setActivePrice(index); console.log(price)} }
                        className={activePrice === index ? "active" : ''}>
                        {price}
                    </li>)
                )}
            </ul>
        </div>
    );
}

export default PriceFilter;