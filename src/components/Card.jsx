import React, { useContext } from 'react';
import '../styles/components/card.css';
import { DB } from '../context/database';

const Card = props => {
    const {id, img, productName, price, isLiked, isBought } = props.data
    const { setLike, buyItem } = useContext(DB);

    return ( 
        <div className="card item-card" onDoubleClick={() => setLike(id)}>
            <img className='item-img' src={img} alt="" />
            <h4 className="item-name">{productName}</h4>
            <p className="item-price">${price}</p>

            <div className="onHover">
                <button className="btn btn-light" onClick={() => setLike(id)}>
                    <i className={ isLiked ? "fas fa-heart" : "far fa-heart"}></i>
                </button>
                <br />
                <button className="btn btn-light" onClick={() => buyItem(id) } > {isBought ? <>ADDED <i className="fas fa-check"></i></> : <>ADD TO CART <i className="fas fa-shopping-cart"></i></> }</button>
            </div>
        </div>
    );
}
 
export default Card;