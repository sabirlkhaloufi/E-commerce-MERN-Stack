import React from 'react'
import { useState , createContext , useEffect } from 'react'
import {render} from 'react-dom'
import { Link } from "react-router-dom";
import PromotionProduct from '../components/PromotionProduct/PromotionProduct'
import TopProducts from '../components/TopProducts/TopProducts'
// import Header from '../components/header/Header'
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import NavMobile from "../components/header/NavMobile";



const Cart = () => {
    const [panier , setPanier] = useState([])
    // const [show, setShow] = useState(true);
    const [item, setItem] = useState([]);
    // const [totalPrice, setTotalPrice] = useState(0);
    const [itemCount, setItemCount] = useState(0)
    // const [totalItem, setTotalItem] = useState(0)
    const [total, setTotal] = useState(0)


    useEffect(() => {
        const getPanier = async() => {
        //    await localStorage.getItem('total') ? JSON.parse(localStorage.getItem('total')) : JSON.parse(localStorage.setItem('total', 0))
        //    await locationStorage.getItem('qty') ? JSON.parse(localStorage.getItem('qty')) : JSON.parse(localStorage.setItem('qty', 1))
            const panierData = await localStorage.getItem('panier') ? JSON.parse(localStorage.getItem('panier')) : []
            
            await setPanier(panierData)
           
        }
        getPanier()
    }, [item])

    console.log('itemCount :>> ', itemCount);

    // const ChangePrice = (price) => {

            
   

  return (
    <>
    <Header   />
        <main className="main">
    <div className="page-header text-center" style={{backgroundImage: 'url("assets/images/page-header-bg.jpg")'}}>
        <div className="container">
        <h1 className="page-title">Shopping Cart<span>Shop</span></h1>
        </div>{/* End .container */}
    </div>{/* End .page-header */}
    <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <div className="container">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Shop</a></li>
            <li className="breadcrumb-item active" aria-current="page">Shopping Cart</li>
        </ol>
        </div>{/* End .container */}
    </nav>{/* End .breadcrumb-nav */}
    <div className="page-content">
        <div className="cart">
        <div className="container">
            <div className="row">
            <div className="col-lg-9">
                <table className="table table-cart table-mobile">
                <thead>
                    <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th />
                    </tr>
                </thead>
                <tbody>
                    {panier.map((item) => (
                    <tr key={item.id}>
                        
                    <td className="product-col">
                        <div className="product">
                        <figure className="product-media">
                            <a href="#">
                            <img src="assets/images/products/table/product-1.jpg" alt="Product image" />
                            </a>
                        </figure>
                        <h3 className="product-title">
                            <a href="#">{ item.title }</a>
                        </h3>{/* End .product-title */}
                        </div>{/* End .product */}
                    </td>
                    <td className="price-col">${item.price}</td>
                    <td className="quantity-col">
                        <div className="cart-product-quantity">
                        <input type="number" className="form-control" defaultValue={
                            item.total ? item.total/item.price : 1
                        } min={1} max={10} step={1} onChange={
                           async (e) => { 
                                // set in local storage total and item count
                                const value = e.target.value
                                const price = item.price
                                const totalItem = await value * price
                                console.log('newPrice :>> ', totalItem);
                                console.log('value :>> ', value);
                                // setItemCount(newPrice)
                                // set new price where the item is in local storage
                                // await localStorage.setItem('panier', JSON.stringify(panier.map((item) => item.id === item.id ? {...item, quantity: totalItem} : item)))
                                //  set quantity in local storage
                //  await localStorage.setItem('panier', JSON.stringify(panier.map((item) => item.id === item.id ? {...item, quantite : value} : item)))
                                localStorage.setItem('panier', JSON.stringify(
                                      panier.map((produit) => produit.id === item.id ? {...produit, total : totalItem, quantite : value} : produit)
                               ))
                                
                                
                               

                                // const value = e.target.value
                                // console.log(value)
                                // const price = item.price
                                // console.log(price)
                                // const newPrice = value * price
                                // console.log(newPrice)
                                // setItemCount(newPrice)
                                // setTotalPrice(newPrice)
                                
                            }

                        } data-decimals={0} required />
                        </div>{/* End .cart-product-quantity */}
                    </td>
                    <td className="total-col">${item.total ? item.total : item.price}</td>
                    <td className="remove-col"><button className="btn-remove"><i className="icon-close" /></button></td>
                    </tr>
                    ))}
                    
                </tbody>
                </table>{/* End .table table-wishlist */}
                <div className="cart-bottom">
                <div className="cart-discount">
                    <form action="#">
                    <div className="input-group">
                        <input type="text" className="form-control" required placeholder="coupon code" />
                        <div className="input-group-append">
                        <button className="btn btn-outline-primary-2" type="submit"><i className="icon-long-arrow-right" /></button>
                        </div>{/* .End .input-group-append */}
                    </div>{/* End .input-group */}
                    </form>
                </div>{/* End .cart-discount */}
                <a href="#" className="btn btn-outline-dark-2"><span>UPDATE CART</span><i className="icon-refresh" /></a>
                </div>{/* End .cart-bottom */}
            </div>{/* End .col-lg-9 */}
            <aside className="col-lg-3">
                <div className="summary summary-cart">
                <h3 className="summary-title">Cart Total</h3>{/* End .summary-title */}
                <table className="table table-summary">
                    <tbody>
                    <tr className="summary-subtotal">
                        <td>Subtotal:</td>
                        <td>${total}</td>
                    </tr>{/* End .summary-subtotal */}
                    <tr className="summary-shipping">
                        <td>Shipping:</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr className="summary-shipping-row">
                        <td>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="free-shipping" name="shipping" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="free-shipping">Free Shipping</label>
                        </div>{/* End .custom-control */}
                        </td>
                        <td>$0.00</td>
                    </tr>{/* End .summary-shipping-row */}
                    <tr className="summary-shipping-row">
                        <td>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="standart-shipping" name="shipping" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="standart-shipping">Standart:</label>
                        </div>{/* End .custom-control */}
                        </td>
                        <td>$10.00</td>
                    </tr>{/* End .summary-shipping-row */}
                    <tr className="summary-shipping-row">
                        <td>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="express-shipping" name="shipping" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="express-shipping">Express:</label>
                        </div>{/* End .custom-control */}
                        </td>
                        <td>$20.00</td>
                    </tr>{/* End .summary-shipping-row */}
                    <tr className="summary-shipping-estimate">
                        <td>Estimate for Your Country<br /> <a href="dashboard.html">Change address</a></td>
                        <td>&nbsp;</td>
                    </tr>{/* End .summary-shipping-estimate */}
                    <tr className="summary-total">
                        <td>Total:</td>
                        <td>$160.00</td>
                    </tr>{/* End .summary-total */}
                    </tbody>
                </table>{/* End .table table-summary */}
                <a href="checkout.html" className="btn btn-outline-primary-2 btn-order btn-block">PROCEED TO CHECKOUT</a>
                </div>{/* End .summary */}
                <a href="category.html" className="btn btn-outline-dark-2 btn-block mb-3"><span>CONTINUE SHOPPING</span><i className="icon-refresh" /></a>
            </aside>{/* End .col-lg-3 */}
            </div>{/* End .row */}
        </div>{/* End .container */}
        </div>{/* End .cart */}
    </div>{/* End .page-content */}
        </main>
    <NavMobile/>
    <Footer/>
    </>

  )
}

export default Cart ;