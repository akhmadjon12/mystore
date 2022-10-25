import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { UsersContext } from '../context/UsersInfo';
import { ActiveLink } from '../context/avtiveLinks';

import '../styles/pages/userDashboard.css'

// import pages
import Information from './sub-pages/Information';
import Address from './sub-pages/Address';
import Orders from './sub-pages/Orders'
import Favorites from './sub-pages/Favorites';

function UserDashboard () {
    const { currentUser, setCurrentUser } = useContext(UsersContext);
    const { setActiveLink } = useContext(ActiveLink);
    const [ activeList, setActiveList ] = useState('info');
    
    // Conditional rendering to know if the user is verified or not
    if ( currentUser.id ) 
    return ( 
        <div className="user-dashboard">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <h3>account dashboard</h3>

                            <ul>
                                <li onClick={() => setActiveList('info')} className={activeList === 'info' ? 'active' : ''}>
                                    <i className="fas fa-user"></i> Account Information
                                </li>
                                <li onClick={() => setActiveList('address')} className={activeList === 'address' ? 'active' : ''}>
                                    <i className="fas fa-book"></i> Address Book
                                </li>
                                <li onClick={() => setActiveList('orders')} className={activeList === 'orders' ? 'active' : ''}>
                                    <i className="fas fa-tablet"></i> My Orders
                                </li>
                            </ul>

                            <button className="btn btn-danger" onClick={() => setCurrentUser({})}>Sign out</button>
                        </div>
                    </div>
                    <div className="col-md-9">
                        {activeList === 'info' ? <Information />
                        : activeList === 'address' ? <Address />
                        :  <Orders /> }                  
                    </div>
                </div>
            </div>
        </div>
    )
    else return (
        <div className="user-dashboard container">
            <h2 className='py-4'>Ooops! Account is not verified. <br /> Please sign in or create an account first.</h2>
            <Link to="/sign-in" onClick={() => setActiveLink('signIn')}>
                <button className="btn btn-dark px-5 my-4 text-bold">Go</button>
            </Link>
        </div>
    )    
}

export default UserDashboard ;