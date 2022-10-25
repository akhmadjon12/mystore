import React, { useContext, useRef, useState } from 'react';
import Card from '../components/Card';
import CategoryFilter from '../components/CategoryFilter';
import PriceFilter from '../components/PriceFilter';
import SizeFilter from '../components/SizeFilter';
import Pagination from '../globalComponents/pagination';
import { paginate } from '../utils/paginate';
import { DB } from '../context/database';
import '../styles/pages/Clothes.css';

function Clothes() {

    const categories = ['All', 'Dresses', 'Jeans', 'Skirts', 'Caps', 'Coat', 'Pants', 'Shorts'];
    const sizes = [ 'XXII', 'XL', 'L', 'M', 'S', '18', '20', '27', '28', '29'];
    const prices = ['$0 - $100', '$101 - $150','$151 - $200', '$201 - $300', '$301 - $500', '$501 - $800', '$801 - $1000', '$1001 - $...'];
   
    const { database } = useContext(DB);
    let clothes = database.filter(cloth => cloth.productType === 'clothes');
    const [ products, setProducts ] = useState(clothes);
    // const [ filteredProducts, setFilteredProducts ] = useState(products)

    const [ currentPage, setCurrentPage ] = useState(1);


    const changeCategory = category => {
        if (category === 'All' ) setProducts(clothes)
        else setProducts(clothes.filter(item => item.category === category ))
    }
    const changeSize = size => {
        setProducts(clothes.filter(item => item.size === size ))
    }

    const changePrice = price => {
        switch (price) {
            case '$0 - $100':
                setProducts(clothes.filter(item => item.price <= 100 ))
                break;
            case '$101 - $150':
                setProducts(clothes.filter(item => item.price > 101 && item.price <= 150 ));
                break;
            case '$151 - $200':
                setProducts(clothes.filter(item => item.price > 150 && item.price <= 200 ));
                break;
            case '$201 - $300':
                setProducts(clothes.filter(item => item.price > 200 && item.price <= 300 ));
                break;
            case '$301 - $500': 
                setProducts(clothes.filter(item => item.price > 300 && item.price <= 500 ));
                break;
            case '$501 - $800': 
                setProducts(clothes.filter(item => item.price > 500 && item.price <= 800 ));
                break;
            case '$801 - $1000': 
                setProducts(clothes.filter(item => item.price > 800 && item.price <= 1000 ));
                break;
            case '$1001 - $...': 
                setProducts(clothes.filter(item => item.price > 1000 ));
                break;
            default: setProducts(clothes);
        }
    }

    const sortBtn = useRef();

    const changeSort = () => {
        console.log(sortBtn.current.value);
        switch (sortBtn.current.value) {
            case 'most popular':
                clothes = clothes.sort();
                console.log(clothes)
                break;    
            case 'best selling':
                console.log(clothes.sort((a, b) => a.isLiked ? a-b : a+b));
                break;
            case 'high to low':
                console.log(clothes.sort((a, b) => a.isLiked ? a-b : b));
                break;

            default: console.log('dunno sorting')
        }
    }

    // change page with pagination
    const onPageChange = page => {
        setCurrentPage(page);
        setProducts(paginate(products, currentPage, 6));
    }

    
    return (
        <div className="clothes-page">
            <h2>Clothes</h2>
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
                    </div>

                    <div className="center">
                        <Pagination itemsCount={products.length} 
                                    pageSize={6} 
                                    onPageChange={onPageChange} 
                                    currentPage={currentPage}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Clothes;