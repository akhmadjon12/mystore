import React, { useState, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { DB } from '../context/database';
import { UsersContext } from '../context/UsersInfo';
import { ActiveLink } from '../context/avtiveLinks';
import '../styles/pages/Checkout.css'

function Checkout() {

    // Get info from LocalStorage
    const [emailFromLocalStorage, setEmailFromLocalStorage] = useState(localStorage.getItem('emailForDelivery'));
    const [fullNameFromLocalStorage, setFullNameFromLocalStorage] = useState(localStorage.getItem('fullName'));
    const [addressFromLocalStorage, setAddressFromLocalStorage] = useState(localStorage.getItem('address'));
    const [stateFromLocalStorage, setStateFromLocalStorage] = useState(localStorage.getItem('state'));
    const [cityFromLocalStorage, setCityFromLocalStorage] = useState(localStorage.getItem('city'));
    const [phoneNumberFromLocalStorage, setPhoneNumberFromLocalStorage] = useState(localStorage.getItem('phoneNumber'));

    // Context
    const { database, add, remove } = useContext(DB);
    const { currentUser } = useContext(UsersContext);
    const { setActiveLink } = useContext(ActiveLink);
    //  States
    const [isGift, setIsGift] = useState(false);
    const [deliveryFee, setDeliveryFee] = useState(0);
    const [paymentDiscount, setPaymentDiscount] = useState(false);
    const [isDefaultAddress, setDefaultAddress] = useState(false);

    let subtotal = 0,
        totalPrice = 0,
        discount = paymentDiscount;

    const boughtItems = database.filter(item => item.isBought && item.count > 0);

    boughtItems.forEach(item => {
        subtotal += item.price * item.count;
        discount += (item.discountPercent * item.price / 100)
    });

    if (paymentDiscount) discount += (subtotal / 100 * 5) - 1;
    totalPrice = subtotal + deliveryFee - discount;


    const email = useRef();
    const fullName = useRef();
    const address = useRef();
    const state = useRef();
    const city = useRef();
    const phoneNumber = useRef();
    const message = useRef();

    let order = {
        id: currentUser.id > 0 ? currentUser.orders.length + 1 : 0,
        email: '',
        fullName: '',
        products: boughtItems,
        productPrice: subtotal,
        deliveryFee: deliveryFee,
        total: totalPrice,
        paymentMethod: paymentDiscount ? "Pay with Card" : "Pay on delivery",
    }
    let shippingAddress = {
        id: currentUser.id > 0 ? currentUser.shippingAddress.length + 1 : 0,
    };

    const placeToOrders = () => {
        order.email = email.current.value;
        order.fullName = fullName.current.value;

        shippingAddress.status = isDefaultAddress ? "Default" : "Ordinary";
        shippingAddress.address = address.current.value;
        shippingAddress.state = state.current.value;
        shippingAddress.city = city.current.value;
        shippingAddress.phoneNumber = phoneNumber.current.value;

        if (email.current.value.length > 4) {
            if (fullName.current.value.length > 2) {
                if (address.current.value !== '' && state.current.value !== '' && city.current.value !== '') {
                    if (phoneNumber.current.value > 7) {
                        if (isDefaultAddress) {
                            localStorage.setItem("emailForDelivery", email.current.value);
                            localStorage.setItem("fullName", fullName.current.value);
                            localStorage.setItem("address", address.current.value);
                            localStorage.setItem("state", state.current.value);
                            localStorage.setItem("city", city.current.value);
                            localStorage.setItem("phoneNumber", phoneNumber.current.value);
                        }
                        currentUser.orders.push(order);
                        currentUser.shippingAddress.push(shippingAddress);
                        message.current.innerText = "This order is added successfully"

                    } else {
                        phoneNumber.current.placeholder = "Write phone number"
                        phoneNumber.current.focus()
                    }
                } else {
                    message.current.innerText = 'Write address fully'
                    address.current.placeholder = 'Write address fully'
                    address.current.focus()
                }
            } else {
                fullName.current.placeholder = "Write full name"
                fullName.current.focus();
            }
        } else {
            email.current.focus();
            email.current.placeholder = "Write email";
        }
    }

    if (currentUser.id)
        if (boughtItems.length > 0)
            return (
                <div className="checkout-page container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="shipping-address card">
                                <h3>
                                    <i className="fas fa-check"></i>
                                    Shipping Address
                                </h3>

                                <label htmlFor="">Email</label>
                                <input type="email" name="" id="" ref={email} value={emailFromLocalStorage}
                                    onChange={e => setEmailFromLocalStorage(e.target.value)} />
                                <br />

                                <label htmlFor="">Full name</label>
                                <input type="text" name="" id="" ref={fullName} value={fullNameFromLocalStorage}
                                    onChange={e => setFullNameFromLocalStorage(e.target.value)} />
                                <br />

                                <label htmlFor="">Address</label>
                                <textarea name="" id="" cols="30" rows="10" ref={address} value={addressFromLocalStorage}
                                    onChange={e => setAddressFromLocalStorage(e.target.value)}></textarea>
                                <br />

                                <label htmlFor="">State/Province</label>
                                <input type="text" name="" id="" ref={state} value={stateFromLocalStorage}
                                    onChange={e => setStateFromLocalStorage(e.target.value)} />
                                <br />

                                <label htmlFor="">City</label>
                                <input type="text" name="" id="" ref={city} value={cityFromLocalStorage}
                                    onChange={e => setCityFromLocalStorage(e.target.value)} />
                                <br />

                                <label htmlFor="">Phone number</label>
                                <input type="tel" name="" id="" ref={phoneNumber} value={phoneNumberFromLocalStorage}
                                    onChange={e => setPhoneNumberFromLocalStorage(e.target.value)} />
                                <br />

                                <p className='clickable' onClick={() => setDefaultAddress(!isDefaultAddress)}>
                                    <i className={isDefaultAddress ? "fas fa-check" : 'd-none'}></i>
                                    Set default shipping address
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="delivery-method card">
                                <h3>
                                    <i className="fas fa-check"></i>
                                    Delivery Method
                                </h3>

                                <div className="row">
                                    <div onClick={() => setDeliveryFee(0)} className={deliveryFee === 0 ? "active col-sm-4" : "col-sm-4"}>Delivery free</div>
                                    <div onClick={() => setDeliveryFee(2000)} className={deliveryFee === 2000 ? "active col-sm-4" : "col-sm-4"}>City delivery</div>
                                    <div onClick={() => setDeliveryFee(4000)} className={deliveryFee === 4000 ? "active col-sm-4" : "col-sm-4"}>Door delivery</div>
                                </div>

                            </div>

                            <div className="payment-method card">
                                <h3>
                                    <i className="fas fa-check"></i>
                                    Payment Method
                                </h3>

                                <h5 onClick={() => setPaymentDiscount(true)} className={paymentDiscount ? "active" : null}>Pay with card</h5>
                                <p style={{ transition: '0.3s ease', opacity: !paymentDiscount && .7 }}>(Get 5% off total price and money back guarantee)</p>

                                <h5 onClick={() => setPaymentDiscount(false)} className={!paymentDiscount ? "active" : null}>Pay on delivery</h5>
                                <ul style={{ transition: '0.3s ease', opacity: paymentDiscount && .7 }}>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                                    <li>Lorem ipsum consectetur adipisicing.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <h3>
                                    <i className="fas fa-check"></i>
                                    ORDER SUMMARY
                                </h3>
                                {boughtItems.map(item =>
                                    <div key={item.id} className='item'>
                                        <img src={item.img} alt="" />
                                        <div className="info">
                                            <h5> {item.productName} </h5>
                                            <p> {item.size} </p>
                                            <p> $ {item.price} </p>
                                            Qty: <button className="btn" onClick={() => add(item.id)}>+</button>
                                            {item.count}
                                            <button className={item.count > 0 ? "btn" : 'btn disabled'} onClick={() => remove(item.id)}>-</button>
                                        </div>
                                        <div className="clr"></div>
                                    </div>
                                )}


                                <table className='table border-top'>
                                    <tbody>
                                        <tr>
                                            <td>Cart sub-total</td>
                                            <td className='text-right'>$ {subtotal}</td>
                                        </tr>
                                        {discount > 0 &&
                                            <tr>
                                                <td>Card discount</td>
                                                <td className='text-right'>- $ {discount} </td>
                                            </tr>
                                        }
                                        <tr>
                                            <td>Delivery Fee</td>
                                            <td className='text-right'>$ {deliveryFee}</td>
                                        </tr>
                                        <tr className='border-top'>
                                            <td>TOTAL</td>
                                            <td className='text-right'>$ {totalPrice}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <br />
                            <div className="gift-part">
                                <p className='col-sm-6'>Is this a gift?</p>
                                <button className={isGift ? "btn red" : 'btn'} onClick={() => setIsGift(true)}>Yes</button>
                                <button className={isGift ? "btn" : 'btn red'} onClick={() => setIsGift(false)}>No</button>
                                {isGift && <p className='text-left'>A coplimentary gift receipt will be included in the package, and price will be hidden in the receipt</p>}
                            </div>

                            {/* <Link to={linkForPlaceOrderBtn}> */}
                            <button className="btn btn-danger"
                                onClick={placeToOrders}>place order</button>
                            {/* </Link> */}

                            <p className="text-bold py-4" ref={message}></p>

                        </div>
                    </div>
                </div>
            )
        else return (
            <div className="checkout-page container">
                <h2 className='py-4'>You have no items to buy! </h2>
                <Link to="/" onClick={() => setActiveLink('home')}>
                    <button className="btn btn-dark px-5 my-4 text-bold">Go Shopping </button>
                </Link>
            </div>
        ) 
    else return (
        <div className="checkout-page container">
            <h2 className='py-4'>Ooops! Account is not verified. <br /> Please sign in or create an account first.</h2>
            <Link to="/sign-in" onClick={() => setActiveLink('signIn')}>
                <button className="btn btn-dark px-5 my-4 text-bold">Go</button>
            </Link>
        </div>
    )
}

export default Checkout;