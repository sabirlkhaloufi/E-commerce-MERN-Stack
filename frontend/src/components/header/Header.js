import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import ShopProduit from '../../pages/shop/ShopProduit';
import Home from '../../pages/Home'
import axios from 'axios';


  

function Header({item}) {

  const [categories, setCategories] = useState([])
  const [totalPrice, setTotalPrice] = useState(0);
  const [panier, setPanier] = useState([])
  const [itemCount, setItemCount] = useState(0)
  const [remove, setRemove] = useState(0)
  console.log('itemmo :>> ', item);

  // const handlePrice = () => {


  


  useEffect(() => {
    const getPanier = async() => {
      const panierData = await localStorage.getItem('panier') ? JSON.parse(localStorage.getItem('panier')) : []
      await setPanier(panierData)
      let totalPrice =  0 ;
      panierData.forEach((item) => {
        totalPrice += item.price 
        
      })
      setTotalPrice(totalPrice)
      setItemCount(panierData.length)
    }
    getPanier()
    
  }, [item , remove])

  const handleRemove = (id) => {
    const newPanier = panier.filter((item) => item.id !== id)
    setPanier(newPanier)
    localStorage.setItem('panier', JSON.stringify(newPanier))
    setItemCount(newPanier.length)
    setRemove(remove + 1)
  }
  
  // get product from local storage
  // getPanier()
  


  // useEffect(() => {
  //   const panierData = localStorage.getItem('panier') ? JSON.parse(localStorage.getItem('panier')) : []
  //   setPanier(panierData)
  //   console.log('panier :>> ', panier);
  // })

  
   

  const getCategories = async()=>{
    axios.get("http://localhost:8000/api/categories/getall").then((Response)=>{
      setCategories(Response.data);
    }).catch((error)=>{
      console.log(error);
    })
  }

  useEffect(() => {
    getCategories();
  }, [])

  return (
    <header className="header header-2 header-intro-clearance">
      <div className="header-top">
        <div className="container">
          <div className="header-left">
            <p>Special collection already available.</p><a href="#">&nbsp;Read more ...</a>
          </div>{/* End .header-left */}
          <div className="header-right">
            <ul className="top-menu">
              <li>
                <a href="#">Links</a>
                <ul>
                  <li><a href="#signin-modal" data-toggle="modal">Sign in / Sign up</a></li>
                </ul>
              </li>
            </ul>{/* End .top-menu */}
          </div>{/* End .header-right */}
        </div>{/* End .container */}
      </div>{/* End .header-top */}
      <div className="header-middle">
        <div className="container">
          <div className="header-left">
            <button className="mobile-menu-toggler">
              <span className="sr-only">Toggle mobile menu</span>
              <i className="icon-bars" />
            </button>
            <a href="index.html" className="logo">
              <img src="./assets/images/demos/demo-2/logo.png" alt="Molla Logo" width={105} height={25} />
            </a>
          </div>{/* End .header-left */}
          <div className="header-center">
            <div className="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
              <a href="#" className="search-toggle" role="button"><i className="icon-search" /></a>
              <form action="#" method="get">
                <div className="header-search-wrapper search-wrapper-wide">
                  <label htmlFor="q" className="sr-only">Search</label>
                  <input type="search" className="form-control" name="q" id="q" placeholder="Search product ..." required />
                  <button className="btn btn-primary" type="submit"><i className="icon-search" /></button>
                </div>{/* End .header-search-wrapper */}
              </form>
            </div>{/* End .header-search */}
          </div>
          <div className="header-right">
            <div className="account">
              <a href="dashboard.html" title="My account">
                <div className="icon">
                  <i className="icon-user" />
                </div>
                <p>Account</p>
              </a>
            </div>{/* End .compare-dropdown */}
            <div className="wishlist">
              <a href="wishlist.html" title="Wishlist">
                <div className="icon">
                  <i className="icon-heart-o" />
                  <span className="wishlist-count badge">3</span>
                </div>
                <p>Wishlist</p>
              </a>
            </div>{/* End .compare-dropdown */}
            <div className="dropdown cart-dropdown">
              <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                <div className="icon">
                  <i className="icon-shopping-cart" />
                  <span className="cart-count">{itemCount}</span>
                </div>
                <p>Cart</p>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-cart-products">
                  {panier.map((item) => (
                   
                      <div className="product">
                    <div className="product-cart-details">
                      <h4 className="product-title">
                        <a href="product.html">{item.title}</a>
                      </h4>
                      <span className="cart-product-info">
                        <span className="cart-product-qty"></span>
                        {item.price}
                      </span>
                    </div>{/* End .product-cart-details */}
                    <figure className="product-image-container">
                      <a href="product.html" className="product-image">
                        <img src="assets/images/products/cart/product-1.jpg" alt="product" />
                      </a>
                    </figure>
                    <button  className="btn-remove" title="Remove Product" onClick={
                      () => {
                        handleRemove(item.id);
                      }
                    }><i className="icon-close" /></button>
                   </div>
                    )
                  )}
                </div>{/* End .cart-product */}
                <div className="dropdown-cart-total">
                  <span>Total</span>
                  <span className="cart-total-price">${totalPrice}</span>
                </div>{/* End .dropdown-cart-total */}
                <div className="dropdown-cart-action">
                  <a href="cart.html" className="btn btn-primary">View Cart</a>
                  <a href="checkout.html" className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right" /></a>
                </div>{/* End .dropdown-cart-total */}
              </div>{/* End .dropdown-menu */}
            </div>{/* End .cart-dropdown */}
          </div>{/* End .header-right */}
        </div>{/* End .container */}
      </div>{/* End .header-middle */}
      <div className="header-bottom sticky-header">
        <div className="container">
          <div className="header-left">
            <div className="dropdown category-dropdown">
              <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Browse Categories">
                Browse Categoes
              </a>
              <div className="dropdown-menu">
                <nav className="side-nav">
                  <ul className="menu-vertical sf-arrows">

                    {categories.map((categorie)=>{
                      return(
                        <li  className="item-lead"><Link to={"/categorie/"+categorie.id}>{categorie.categorie}</Link></li>
                      )
                    })}
                    
                  </ul>{/* End .menu-vertical */}
                </nav>{/* End .side-nav */}
              </div>{/* End .dropdown-menu */}
            </div>{/* End .category-dropdown */}
          </div>{/* End .header-left */}
          <div className="header-center">
            <nav className="main-nav">
              <ul className="menu sf-arrows">
                <li className="megamenu-container active">
                  {/* <a href="index.html" className="sf-with-ul">Home</a> */}
                  <a href='http://localhost:3000' className="sf-with-ul">Home</a>

                </li>
                <li>
                  {/* <a href="category.html" className="sf-with-ul">Shop</a> */}
                  {/* <LINK></LINK> */}
                  <Link to="/shop" element={ShopProduit} className="sf-with-ul">Shop</Link>
                </li>
                <li>
                  <a href="product.html" className="sf-with-ul">Product</a>
                </li>
              </ul>{/* End .menu */}
            </nav>{/* End .main-nav */}
          </div>{/* End .header-center */}
          <div className="header-right">
            <i className="la la-lightbulb-o" /><p>Clearance<span className="highlight">&nbsp;Up to 30% Off</span></p>
          </div>
        </div>{/* End .container */}
      </div>{/* End .header-bottom */}
    </header>
  )
}

export default Header
