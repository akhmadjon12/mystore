import React, { useContext, useState } from 'react';
import { UsersContext } from '../../context/UsersInfo';
import '../../styles/components/sub-pages.css';

function Address () {

    const { currentUser, setCurrentUser } = useContext(UsersContext);
    // const [ isEdited, setIsEdited ] = useState(true);

    // const deleteShippingAddress = id => {
    //     currentUser.shippingAddress = currentUser.shippingAddress.filter( address => address.id !== id );
    //     setCurrentUser(currentUser);
    // }

    return (
        <div className='address-book'>
            <h3> Address Book </h3>

            {currentUser.shippingAddress.map( (address, index) =>      
                <div className="card my-3" key={index}>
                    <div className="row">
                        <div className="col-md-4">
                            <h4>{address.status} Shipping Address</h4>
                            {address.address && <p>Address: {address.address}</p>}
                            {address.state && <p>State: { address.state}</p>}
                            {address.city && <p>City:  { address.city}</p>}
                            {address.phoneNumber && <p>Phone #: {address.phoneNumber}</p>}
                        </div>
                        {/* <div className="col-md-4">
                            <input type="text" placeholder='Change State' value={address.state} 
                                onChange={e => {currentUser.shippingAddress[index].state = e.target.value; setCurrentUser(currentUser)}} />
                            <textarea cols="30" rows="10"
                            onChange={e => {currentUser.shippingAddress[index].address = e.target.value; console.log(currentUser.shippingAddress[index]); setCurrentUser(currentUser)}}></textarea>
                        </div>
                        <div className="col-md-4">
                            {isEdited ? 
                            <button className="btn btn-light px-2 m-3" 
                                onClick={() => setIsEdited(!isEdited)}> Edit </button> : 
                            <button className="btn btn-success px-2 m-3" 
                                onClick={() => setIsEdited(!isEdited)
                            }> 
                                DONE <i className="fas fa-check"></i> 
                            </button>
                            }

                            <button onClick={() => deleteShippingAddress(address.id)} 
                                className="btn btn-light px-2 m-3">Delete</button>
                        </div> */}
                    </div>
                </div>
            )}        
        </div>
    );
}

export default Address ;