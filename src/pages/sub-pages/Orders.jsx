import React, { useContext } from 'react';
import { UsersContext } from '../../context/UsersInfo';
import '../../styles/components/sub-pages.css';

function Orders() {

    const { currentUser } = useContext(UsersContext);


    if (currentUser.orders.length > 0)
    return (
        <div className="orders-page">
            <h3>My Orders</h3>

            <div className="order card " >
                {currentUser.orders.map(order =>
                    <table className="table border" key={order.id}>
                        <tbody>
                            {order.products.map(product => {
                                const { id, img, productName, size, price, count, discountPercent } = product;
                                const deliveryMethod = order.deliveryFee === 0 ? "Delivery free" 
                                : order.deliveryFee === 2000 ? "City delivery"
                                : "Door delivery";

                                return (
                                    <tr key={id}>
                                        <td>
                                            <img src={img} alt="" /> <br />
                                            
                                            <div className="align-right">
                                                <h4> {productName} </h4>
                                                <p> Size - {size} </p>
                                                <p> $ {price} </p>
                                                <p> Qty: {count} </p>
                                            </div>
                                        </td>
                                        <td>
                                            <h4>Payment details</h4>
                                            <p> Sub total - ${order.productPrice} </p>
                                            <p> Delivery fee - ${order.deliveryFee}</p>
                                            <p>TOTAL - ${order.total}</p>
                                        </td>
                                        <td> 
                                            <h4>Delivery method</h4>
                                            <p>{deliveryMethod}</p>
                                            <br />
                                            <h4>Shipping address</h4>
                                            <p>{currentUser.shippingAddress[0].address}, {currentUser.shippingAddress[0].city}, {currentUser.shippingAddress[0].state}</p>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
    else return (
        <div className='orders-page'>
            <h3>My orders are empty</h3>
        </div>
    )
}

export default Orders;