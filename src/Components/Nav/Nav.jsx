import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import { CartContext } from './../../Context/CartContext';


function Nav() {
    // const [ cartItems ] = useContext(CartContext);
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const cartCount = 0; // Placeholder for cart count to prevent error

    // useEffect(() => {
    //     const updateeCount = () => {
    //         const cart = JSON.parse(localStorage.getItem('cart')) || [];
    //         const total = cart.reduce((sum, item) => sum + (item.quantity)) || [];
    //         setCartCount(total);
    //     };

    //     updateeCount();
    //     window.addEventListener('cartUpdated', updateeCount);
    //     window.addEventListener('storage', updateeCount);
    // }, []);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false);

  return (
   <nav className='text-white p-0 navbar navbar-expand-lg flex-column' style={{backgroundColor: "#12151e"}}>
    <div className='container d-flex align-items-center justify-content-center'>
        <div className="row w-100 py-3" style={{borderBottom: '1px solid rgba(248, 250, 252, 0.08)'}}>
            <div className="col-12">
                <div className="row align-items-center">
                    <div className="col-6 col-lg-4">
                        <div className="d-flex align-items-center">
                            <span className='bi bi-telephone me-3 d-inline-flex align-items-center justify-content-center rounded-circle' style={{backgroundColor: "#222839", width: 36, height: 36}}></span>
                            <div className='call-text'>
                                <p className='m-0 small opacity-75'>Call Anytime</p>
                                <h4 className="fs-6 m-0 fw-semibold">00 (888) +123456</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-4 text-center my-2 my-lg-0">
                        <h1 className="p-0 m-0 text-uppercase fw-semibold">
                            <Link to="/" className="text-white text-decoration-none navbar-brand fs-2 m-0">
                                Fly<span style={{color: "#f26f55"}}>n</span>est
                            </Link>
                        </h1>
                    </div>
                    <div className="col-12 col-lg-4 d-flex justify-content-end align-items-center gap-3">
                        <div className="top-header-right d-none d-lg-flex align-items-center gap-4">
                            <div className="lang d-flex align-items-center gap-2 fs-6">
                                <span className="ri-global-line"></span>
                                <p className="m-0">English</p>
                            </div>
                            <div className="divider gradient-divider"></div>
                            <a href="#" className="cartpage-cart-link position-relative">
                                <i className="bi bi-cart text-white fs-5"></i>
                                <span className="cart-count">
                                    {cartCount}
                                </span>
                            </a>
                            <button className='btn sign-up btn-custome text-white rounded-5 px-4 py-2 fs-6 fw-semibold'>Sign up</button>
                        </div>
                        <button 
                            className="navbar-toggler nav-toggle d-block d-lg-none box-shadow-none"
                            type='button'
                            onClick={toggleMenu}
                            aria-label='Toggle navigation'
                        >
                            <span className="bi bi-list fs-1 text-white"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="row py-0 py-lg-4 w-100 d-flex align-items-center">
            <div className="col-lg-9">
                {/* Responsive here nav */}
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id='navtoggle'>
                    <ul className="nav-menu list-unstyled m-0 d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-3 gap-xl-5 gap-lg-4">
                        <li className="nav-items position-relative">
                            <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
                        </li>
                        <li className="nav-items position-relative">
                            <Link to="/tours" className="nav-link" onClick={closeMenu}>Tours</Link>
                        </li>
                        <li className="nav-items position-relative">
                            <Link to="/hotels" className="nav-link" onClick={closeMenu}>Hotels</Link>
                        </li>
                        <li className="nav-items position-relative">
                            <Link to="/transports" className="nav-link" onClick={closeMenu}>Transports</Link>
                        </li>
                        <li className="nav-items position-relative">
                            <Link to="/restaurants" className="nav-link" onClick={closeMenu}>Restaurants</Link>
                        </li>
                        <li className="nav-items position-relative">
                            <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
                        </li>
                        <li className="nav-items position-relative">
                            <Link to="/news" className="nav-link" onClick={closeMenu}>News</Link>
                        </li>
                        <li className="nav-items position-relative">
                            <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3">
               <div className="nav-input-box w-100 d-lg-flex align-items-center justify-content-between gap-2">
                <i className="bi bi-search"></i>
                <input type="text" className='form-control form-control-sm w-100' placeholder='Destinations, Attraction'/>
                </div> 
            </div>
        </div>
    </div>
   </nav>
  )
}

export default Nav
