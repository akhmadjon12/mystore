import React from 'react';
import footerLogo from '../images/nav-logo.png';
import '../styles/components/footer.css'

function Footer () {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 py-3"><img src={footerLogo} alt="" className="footer-logo" /></div>
                    {/* <div className="col-md-2"></div> */}
                    <div className="col-md-2 sm-icons">
                        <a href="#" target="_blank"><i className="fab fa-facebook"></i> Facebook <br /></a>
                        <a href="#" target="_blank"><i className="fab fa-twitter"></i> Twitter <br /></a>
                        <a href="#" target="_blank"><i className="fab fa-instagram"></i> Instagram </a>
                    </div>
                    <div className="col-md-6">
                        <form action="" className='form'>
                            <label htmlFor="subscribe">Subscribe to our newsletter</label> <br />
                            <input type="email" placeholder='Email Address' className="form-input" />
                            <button className="btn btn-danger">OK</button>
                        </form>
                    </div>
                    {/* <div className="col-md-3"></div> */}
                </div>
            </div>
        </footer>
     );
}

export default Footer ;