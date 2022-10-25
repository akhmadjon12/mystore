import React, { createContext, useState } from "react";
import luxuryWatch from '../images/luxury-watch.png'
import facemask from '../images/facemask.png'

let usersDB = [
    {
        id: 1, 
        firstName: 'a', 
        lastName: "b", 
        email: 'ab@gmail.com', 
        password: 'fakepassword', 
        gender: '',
        dateOfBirth: '',
        shippingAddress: [
            {
                id: 1,
                status: "Default",
                address: "somewhere",
                state: "namangan",
                city: "namangan",
                phoneNumber: '99888811888',
            },
        ],
        orders: [
            {
                id: 1,
                email: 'my email is here',
                fullName: 'fully written name',
                products: [
                    {id: 43, productType: "accessories", category: "Watches", productName: "Ladies Luxury watch", img: luxuryWatch, price: 990, discountPercent: 20, availableInStock: 700, count: 5, isLiked: false, isBought: false},
                    {id: 44, productType: "accessories", category: "Facemask", productName: "Pattern cloth face mask", img: facemask, price: 2, discountPercent: 0, availableInStock: 700, count: 0, isLiked: false, isBought: false},
                ],
                productPrice: 5000, 
                deliveryFee: 2000, 
                total: 7000, 
                paymentMethod: "Pay with Card",
               
            }
        ]
    }
];

export const UsersContext = createContext();

export const UsersProvider = ({children}) => {
    const [ users, setUsers ] = useState(usersDB);
    const [ currentUser, setCurrentUser ] = useState({});

    return (
        <UsersContext.Provider value={{ users, setUsers, usersDB, currentUser, setCurrentUser }}>
            {children}
        </UsersContext.Provider>
    )
}