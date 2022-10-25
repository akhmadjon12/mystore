import React, { useContext, useRef, useState } from 'react';
import { UsersContext } from '../../context/UsersInfo'
import '../../styles/components/sub-pages.css';

function Information() {

    const { currentUser, setCurrentUser } = useContext(UsersContext);
    const [changePassword, setChangePassword] = useState(false);
    const [ successfullyUpdated, setSuccessfullyUpdated ] = useState(false);

    const fName = useRef();
    const lName = useRef();
    const email = useRef();
    const gender = useRef();
    const dateOfBirth = useRef();
    const currentPass = useRef();
    const newPass = useRef();
    const confirmPass = useRef();

    const message = useRef();

    const saveChanges = () => {
        if (changePassword) {
            if (currentPass.current.value === currentUser.password) {
                if (newPass.current.value === confirmPass.current.value && confirmPass.current.value.length >= 6) {
                    setSuccessfullyUpdated(true);
                    message.current.innerHTML = " <i class='fas fa-check text-success'></i> Successfully updated"
                    currentUser.password = newPass.current.value;
                    setCurrentUser(currentUser);
                } else {
                    setSuccessfullyUpdated(false);
                    message.current.innerText = 'Password confirmation failed or Your password is too short!'
                }
            } else {
                setSuccessfullyUpdated(false);
                message.current.innerText = 'Current password mismatch!'
            }
        } else if ( fName.current.value.length 
                    || lName.current.value.length 
                    || email.current.value.length 
                    || gender.current.value.length 
                    || dateOfBirth.current.value.length 
                    || currentPass.current.value.length ) {
            setCurrentUser(currentUser);
            setSuccessfullyUpdated(true);
            message.current.innerHTML = " <i class='fas fa-check text-success'></i> Successfully updated"
        } else {
            setSuccessfullyUpdated(false);
            message.current.innerHTML = "You have no changes yet"
        }
    }
    return (
        <div className='user-info'>
            <h3> User Information </h3>
            <div className="card">
                <div className="row">
                    <div className="col-md-6">

                        <label htmlFor="">First name</label>
                        <input type="text" ref={fName} placeholder={currentUser.firstName}
                            onChange={e => currentUser.firstName = e.target.value} />
                        <br />

                        <label htmlFor="">Last name</label>
                        <input type="text" ref={lName} placeholder={currentUser.lastName}
                            onChange={e => currentUser.lastName = e.target.value} />
                        <br />

                        <label htmlFor="" >Email</label>
                        <input type="email" ref={email} placeholder={currentUser.email}
                            onChange={e => currentUser.email = e.target.value} />
                        <br />

                        <label htmlFor="">Gender</label>
                        <select name="" id="" ref={gender}
                            onChange={e => currentUser.gender = e.target.value}>
                            <option value="">Choose</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>

                        <label htmlFor="">Date of birth</label>
                        <input type="date" ref={dateOfBirth}
                            onChange={e => currentUser.dateOfBirth = e.target.value} />
                        <br />

                        <p onClick={() => setChangePassword(!changePassword)} className="clickable">Change password</p>

                        <p className={successfullyUpdated ? 'text-bold text-success' : 'text-bold text-danger'} ref={message}></p>

                        <button className="btn btn-danger my-3 px-5"
                            onClick={saveChanges}>SAVE CHANGES</button>

                    </div>
                    <div className={changePassword ? "col-md-6" : "d-none"}>

                        <label htmlFor="">Current password</label>
                        <input type="password" ref={currentPass} />
                        <br />

                        <label htmlFor="">New password</label>
                        <input type="password" ref={newPass} />
                        <br />

                        <label htmlFor="">Confirm password</label>
                        <input type="password" ref={confirmPass} />
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Information;