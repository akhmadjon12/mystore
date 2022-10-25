import React, { useContext, useRef, useState } from 'react';
import Card from '../components/Card';
import CategoryFilter from '../components/CategoryFilter';
import PriceFilter from '../components/PriceFilter';
import SizeFilter from '../components/SizeFilter';
import { DB } from '../context/database';
import '../styles/pages/Clothes.css';

function Accessories() {

    const categories = ["All", 'Handbags', 'Hats', 'Sunglasses & Eyewears', 'Jewelry', 'Watches', 'Facemask', 'Bagpacks'];
    const sizes = [ 'X', 'S', 'M', 'XL', 'ML', '6', '7', '8' ];
    const prices = ['$0 - $50', '$51 - $100', '$101 - $150', '$151 - $300', '$301 - $500', '$501 - $1000', '$1001 - $10000', '$10001 - $...'];
    const { database } = useContext(DB);
    let accessories = database.filter(accessory => accessory.productType === 'accessories');
    const [ products, setProducts ] = useState(accessories);

    const changeCategory = category => {
        if (category === 'All' ) setProducts(accessories)
        else setProducts(accessories.filter(item => item.category === category ))
    }
    
    const changeSize = size => {
        setProducts(accessories.filter(item => item.size === size ))
    }
    
    const changePrice = price => {
        switch (price) {
            case '$0 - $50':
                setProducts(accessories.filter(item => item.price <= 50 ))
                break;
            case '$51 - $100':
                setProducts(accessories.filter(item => item.price > 51 && item.price <= 100 ));
                break;
            case '$101 - $150':
                setProducts(accessories.filter(item => item.price > 100 && item.price <= 150 ));
                break;
            case '$151 - $300':
                setProducts(accessories.filter(item => item.price > 150 && item.price <= 300 ));
                break;
            case '$301 - $500': 
                setProducts(accessories.filter(item => item.price > 300 && item.price <= 500 ));
                break;
            case '$501 - $1000': 
                setProducts(accessories.filter(item => item.price > 500 && item.price <= 1000 ));
                break;
            case '$1001 - $10000': 
                setProducts(accessories.filter(item => item.price > 1000 && item.price <= 10000 ));
                break;
            case '$10001 - $...': 
                setProducts(accessories.filter(item => item.price > 10000 ));
                break;
            default: setProducts(accessories);
        }
    }

    const sortBtn = useRef();

    const changeSort = () => {
        switch (sortBtn.current.value) {
            case 'most popular':
                accessories = accessories.sort();
                console.log(accessories)
                break;    
            case 'best selling':
                console.log(accessories.sort((a, b) => a.isLiked ? a-b : a+b));
                break;
            case 'high to low':
                console.log(accessories.sort((a, b) => a.isLiked ? a-b : b));
                break;

            default: console.log('dunno sorting')
            }
    }
    
    // Infinite pagination

    const [pageNumber, setPageNumber] = useState(1);
    const [hasMore, setHasMore] = useState(false);
    const [loading, setLoading] = useState(true);




    if (products.length > 0)
    return (
        <div className="clothes-page">
            <h2>Accessories</h2>
            <div className="row">
                <div className="col-md-3">

                    <CategoryFilter categories={categories} products={products} handleClick={changeCategory} />

                    <SizeFilter sizes={sizes} changeSize={changeSize} />
                    
                    <PriceFilter prices={prices} changePrice={changePrice} />

                </div>
                <div className="col-md-9">

                    <select ref={sortBtn} name="" id="sort" onChange={changeSort} >
                        <option value="most popular">Sort by: Most popular</option>
                        <option value="best selling">Best Selling</option>
                        <option value="high to low">Price: High to Low</option>
                        <option value="low to high">Price: Low to High</option>
                    </select>

                    <div className="clr"></div>

                    {/* <hr/> */}

                    <div className="row border-top-1">
                        {products.map(item => <div className='col-md-4' key={item.id}>
                            <Card data={item} />
                        </div>)}
                        {loading && <p>Loading...</p>}
                    </div>

                </div>
            </div>
        </div>
    )
    else return (
        <div className="clothes-page">
            <h2>You have no items based on filters...</h2>
        </div>
    )
}

export default Accessories;