import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container, NavDropdown, Form, Button } from 'react-bootstrap'

import { DB } from '../context/database';
import { ActiveLink } from '../context/avtiveLinks';
import { UsersContext } from '../context/UsersInfo';

import logo from '../images/nav-logo.png';
import '../styles/components/Navbar.css';

function NavbarComponent() {
    // const [movies, setMovies] = useState(['']);
    // useEffect(() => {
    //     fetch('http://www.omdbapi.com/?apikey=329ffa13&s=panda')
    //     .then(Response=>Response.json())
    //     .then(data=>(setMovies(data.Search)));

    //     console.log(movies[0].Poster)
    // }, [movies])
    const { database } = useContext(DB);
    const { activeLink, setActiveLink } = useContext(ActiveLink);
    const { currentUser } = useContext(UsersContext);

    let likes = 0,
        itemsInCart = 0;
    database.forEach( item => item.isLiked ? likes += 1 : likes );
    database.forEach( item => item.isBought ? itemsInCart += 1 : itemsInCart );

    return ( 
        <Navbar className="navbar navbar-light bg-light" expand="lg">
            <Container flui>
                <Navbar.Brand className="navbar-brand logo mobile" href="#"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" />
                <Navbar.Collapse id="navbarSupportedContent navbarScroll">
                    <ul className="navbar-nav align-items-center">
                        <Nav.Item className="nav-item">
                            <Link to="/" onClick={() => setActiveLink('home')} className={activeLink === "home" ? 'nav-link active' : 'nav-link'}>Home</Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item" >
                            <Link to="/clothes" onClick={() => setActiveLink('clothes')} className={activeLink === "clothes" ? 'nav-link active' : 'nav-link'}>Clothes</Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item">
                            <Link to="/shoes" onClick={() => setActiveLink('shoes')}  className={activeLink === "shoes" ? 'nav-link active' : 'nav-link'}>Shoes</Link>
                        </Nav.Item >
                        <Nav.Item  className="nav-item">
                            <Link to="/accessories" onClick={() => setActiveLink('accessories')} className={activeLink === "accessories" ? 'nav-link active' : 'nav-link'}>Accessories</Link>
                        </Nav.Item >
                        
                        <Navbar.Brand className="navbar-brand logo" href="#"><img src={logo} alt="" /></Navbar.Brand>
                        
                        <div className="d-flex align-items-center">
                            <li className="nav-item">
                                <Form>
                                    <input className="form-control" type="search" placeholder="Search..." aria-label="Search" />
                                    <i className="fas fa-search"></i>
                                </Form>
                            </li>

                            <li className="nav-item" >
                                <Link to={currentUser.id > 0 ? "/dashboard" : "/sign-in"} 
                                    onClick={() => setActiveLink('signIn')} 
                                    className={activeLink === "signIn" ? 'nav-link active' : 'nav-link'}>
                                    <i className="fas fa-user"></i>
                                    </Link>
                            </li>
                            <li className="nav-item" >
                                <Link to="/shopping-cart" onClick={() => setActiveLink('shoppingCart')} className={activeLink === "shoppingCart" ? 'nav-link active' : 'nav-link'}>
                                    <i className="fas fa-shopping-cart"></i>
                                    <span className='bullet-points' style={{display: itemsInCart === 0 && "none"}}>{itemsInCart > 0 ? itemsInCart : null}</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/likes" onClick={() => setActiveLink('likes')} className={activeLink === "likes" ? 'nav-link active' : 'nav-link'}>
                                    <i className="fas fa-heart"></i>
                                    <span className='bullet-points' style={{display: likes === 0 && "none"}}>{likes > 0 ? likes : null}</span>
                                </Link>
                            </li>
                        </div>
                    </ul>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;