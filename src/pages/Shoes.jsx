import React, { useContext, useEffect, useRef, useState } from 'react';
import Card from '../components/Card';
import CategoryFilter from '../components/CategoryFilter';
import PriceFilter from '../components/PriceFilter';
import SizeFilter from '../components/SizeFilter';
import { DB } from '../context/database';
import '../styles/pages/Clothes.css';

function Shoes() {
    const categories = ['All', 'Sneakers', 'Slides & Slippers', 'Flats', 'Party shoes', 'Sandals', 'Boots'];
    const sizes = ['35', '36', '37', '38', '39', '40', '41', '42'];
    const prices = ['$0 - $50', '$51 - $100', '$101 - $150', '$151 - $200', '$201 - $...'];
    const { database } = useContext(DB);

    let shoes = database.filter(shoe => shoe.productType === 'shoes');
    const [ products, setProducts ] = useState(shoes);

    const changeCategory = category => {
        if (category === 'All' ) setProducts(shoes)
        else setProducts(shoes.filter(item => item.category === category ))
    }
    
    const changeSize = size => {
        setProducts(shoes.filter(item => item.size === size ))
        
        // if (products !== shoes) 
        //     setProducts(products.filter(item => item.size === size ))
        // else setProducts(shoes.filter(item => item.size === size ))
    }
    
    const changePrice = price => {
        switch (price) {
            case '$0 - $50':
                setProducts(shoes.filter(item => item.price <= 50 ))
                break;
            case '$51 - $100':
                setProducts(shoes.filter(item => item.price > 50 && item.price <= 100 ));
                break;
            case '$101 - $150':
                setProducts(shoes.filter(item => item.price > 100 && item.price <= 150 ));
                break;
            case '$151 - $200':
                setProducts(shoes.filter(item => item.price > 150 && item.price <= 200 ));
                break;
            case '$201 - $...': 
                setProducts(shoes.filter(item => item.price > 200 ));
                break;
            default: setProducts(shoes);
        }
    }

    const sortBtn = useRef();

    const changeSort = () => {
        console.log(sortBtn.current.value);
        switch (sortBtn.current.value) {
            case 'most popular':
                shoes = shoes.sort();
                console.log(shoes)
                break;    
            case 'best selling':
                console.log(shoes.sort((a, b) => a.isLiked ? a-b : a+b));
                break;
            case 'high to low':
                console.log(shoes.sort((a, b) => a.isLiked ? a-b : b));
                break;

            default: console.log('dunno sorting')
            }
    }

    return (
        <div className="clothes-page">
            <h2>Clothes</h2>
            <div className="row">
                <div className="col-md-3">

                    <CategoryFilter categories={categories} 
                        products={products} 
                        handleClick={changeCategory} 
                    />
                    
                    <SizeFilter sizes={sizes} changeSize={changeSize} />
                    
                    <PriceFilter prices={prices} changePrice={changePrice} />

                </div>

                <div className="col-md-9">
                {products.length > 0 ? 
                    <>
                        <select ref={sortBtn} name="" id="sort" onChange={changeSort} >
                            <option value="most popular">Sort by: Most popular</option>
                            <option value="best selling">Best Selling</option>
                            <option value="high to low">Price: High to Low</option>
                            <option value="low to high">Price: Low to High</option>
                        </select>

                        <div className="clr"></div>
                        <div className="row border-top-1">
                            {products.map(item => <div className='col-md-4' key={item.id}>
                                <Card data={item} />
                            </div>)}
                        </div>
                    </>
                : <h2>You have no filtered items</h2>
                }
                </div>
            </div>
        </div>
    )
    
}

export default Shoes;