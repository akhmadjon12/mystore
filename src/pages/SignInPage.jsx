import React, { useState, useRef, useContext } from 'react';
import '../styles/pages/signIn.css';
import { UsersContext } from '../context/UsersInfo';
import { Link } from 'react-router-dom';

function SignInPage() {

    const signInEmailInput = useRef();
    const signInPasswordInput = useRef();
    const firstNameInput = useRef();
    const lastNameInput = useRef();
    const signUpEmailInput = useRef();
    const signUpPasswordInput = useRef();
    const signUpConfirmPasswordInput = useRef();
    const loginMessage = useRef();
    const message = useRef();

    const { usersDB, users, setUsers, currentUser, setCurrentUser } = useContext(UsersContext);

    const [rememberMe, setRememberMe] = useState(true);
    const [emailFromLocalStorage, setEmailFromLocalStorage] = useState(localStorage.getItem('email'));
    const [passwordFromLocalStorage, setPasswordFromLocalStorage] = useState(localStorage.getItem('password'));
    // Create a new Account
    let newUser = { id: users.length + 1, firstName: '', lastName: '', email: '', password: '', orders: [] }

    const createAccount = () => {
        if (newUser.firstName && newUser.lastName) {
            if (newUser.email) {
                if (newUser.password === confirmPassword && confirmPassword.length >= 6) {
                    users.forEach(user => {

                        if (user.email !== newUser.email) {
                            usersDB.push(newUser);
                            setUsers(usersDB);
                            setCurrentUser(newUser);
                            message.current.innerHTML = 'Account Successfully Created!'

                        } else message.current.innerHTML = 'This email is already registered!'
                    })
                }
                else { message.current.innerHTML = 'Password is Empty or Mismach' }
            } else { message.current.innerHTML = 'Write Your Email' }
        } else { message.current.innerHTML = 'Write Your Fullname' }
    }

    // Sign in 
    let email, password, confirmPassword;
    const signIn = () => {
        password = signInPasswordInput.current.value;
        email = signInEmailInput.current.value;
        newUser.firstName = firstNameInput.current.value;
        newUser.lastName = lastNameInput.current.value;
        newUser.email = signUpEmailInput.current.value;
        newUser.password = signUpPasswordInput.current.value;
        confirmPassword = signUpConfirmPasswordInput.current.value;
        
        users.forEach(user => {    
            if (user.email === email && user.password === password) {
                localStorage.clear();
                if (rememberMe) {
                    localStorage.setItem("email", email)
                    localStorage.setItem("password", password)
                }

                setCurrentUser(user);
                loginMessage.current.innerText = 'Please sign in now'
            } else loginMessage.current.innerText = 'Email or Password is wrong'
        })
    }

    return (
        <div className="container sign-in-page">
            <div className="row">
                <h2>Hello there!</h2>
                <p>Please sign in or create account to continue</p>

                <div className="col-md-6">
                    <div className="login-card">
                        <h3>SIGN IN</h3>

                        <label htmlFor="">Email</label>
                        <input type="email" ref={signInEmailInput}
                            value={emailFromLocalStorage} 
                            onChange={e => setEmailFromLocalStorage(e.target.value)} required />

                        <br />

                        <label htmlFor="">Password</label>
                        <input type="password"  ref={signInPasswordInput}
                            value={passwordFromLocalStorage} 
                            onChange={e => setPasswordFromLocalStorage(e.target.value)} required />

                        <p className="rememberMe clickable" onClick={() => { setRememberMe(!rememberMe); console.log('rememberMe ', rememberMe) }}>
                            <i className="fas fa-check" style={{ opacity: rememberMe ? 1 : 0 }}></i>
                            Remember my details
                        </p>

                        <Link to={currentUser.id > 0 ? "/dashboard" : ""}>
                            <input type="button" value="SIGN IN" onClick={signIn} />
                        </Link>

                        <p ref={loginMessage}></p>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="login-card">
                        <h3>CREATE ACCOUNT</h3>

                        <label htmlFor="">First name</label>
                        <input type="text" ref={firstNameInput} required />

                        <br />

                        <label htmlFor="">Last Name</label>
                        <input type="text" ref={lastNameInput} required />

                        <br />

                        <label htmlFor="">Email</label>
                        <input type="email" ref={signUpEmailInput} required />

                        <br />

                        <label htmlFor="">Create Password</label>
                        <input type="password" ref={signUpPasswordInput} required />

                        <br />

                        <label htmlFor="">Confirm Password</label>
                        <input type="password" ref={signUpConfirmPasswordInput} required />

                        <Link to={currentUser.id > 0 ? "/dashboard" : ""}>
                            <input type="button" value="CREATE ACCOUNT" onClick={createAccount} />
                        </Link>

                        <p className="message" ref={message}></p>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignInPage;