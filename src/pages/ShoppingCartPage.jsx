import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DB } from '../context/database';
import { ActiveLink } from '../context/avtiveLinks';
import '../styles/pages/shoppingCart.css';


function ShoppingCart () {
    
    const { setActiveLink } = useContext(ActiveLink);
    const { database, setLike, buyItem } = useContext(DB);
    const boughtItems = database.filter(item => item.isBought && item.count > 0);

    let totalPrice = 0;
    boughtItems.forEach(item => totalPrice += item.price * item.count)

    return ( 
        <div className="shopping-cart-page container">
            <h2>Shopping cart ({boughtItems.length} items)</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='text-left'>item description</th>
                        <th>quantity</th>
                        <th>unit price</th>
                        <th>subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {boughtItems.map(item => {
                        const { id, productName, img, count, price, isLiked, size, } = item;

                        return <tr key={id}>
                            <td>
                                <div className="col-sm-3"><img src={img} alt="" /></div>
                                <div className="col-sm-9 text-left">
                                    <h5>{productName}</h5>
                                    <p>Size: {size}</p>
                                    <br />
                                    <button className='btn' onClick={() =>setLike(id)}> 
                                        <i className={isLiked ? "fas fa-heart" : 'far fa-heart'}></i> 
                                        {isLiked ? 'Remove from favourites' : 'move to favourites'}    
                                    </button>
                                    <button className="btn" onClick={() => buyItem(id)}>
                                        <i className="fas fa-del"></i> remove
                                    </button>
                                </div>
                            </td>
                            <td><p className='qty'>{count}</p></td>
                            <td>$ {price} </td>
                            <td>$ {count * price} </td>
                        </tr>    
                    })}
                </tbody>
            </table>
            <div className="calc-all">
                <h3>total:   $ {totalPrice}</h3>
                <p>Delivery fee is not included yet</p>
                <Link to='/'>
                    <button className='btn' onClick={() => setActiveLink('home')} > continue shopping</button>
                </Link>
                <Link to={boughtItems.length > 0 && '/shopping-cart/checkout'}>
                    <button  onClick={ () => setActiveLink('checkout') }
                        className={boughtItems.length > 0 ? 'red btn' : 'red btn disabled'}> proceed to checkout</button>
                </Link>
            </div>
            <div className="clr"></div>
        </div>
     );
}

export default ShoppingCart ;