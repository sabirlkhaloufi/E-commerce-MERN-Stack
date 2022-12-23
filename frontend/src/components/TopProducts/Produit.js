import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Produit = ({ product, handleClick }) => {
    const url = "http://localhost:8000"
  return (
    
        <div  className="col-6 col-md-4 col-lg-3 col-xl-5col">
        <div className="product product-11 text-center">
          <figure className="product-media">
            <Link to={"/productDetail/"+product.id}>
              <img src={url+product.image[0]} alt="Product image" className="product-image" />
              <img src={product.image[1] && url+product.image[1]} alt="Product image" className="product-image-hover" />
            </Link>
            <div className="product-action-vertical">
              <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
            </div>{/* End .product-action-vertical */}
          </figure>{/* End .product-media */}
          <div className="product-body">
            <div className="product-cat">
              <Link to={"/productDetail/"+product.id}>{product.title} </Link>
            </div>{/* End .product-cat */}
            <h3 className="product-title"><a href="product.html">{product.description}</a></h3>{/* End .product-title */}
            <div className="product-price">
              ${product.price}
            </div>{/* End .product-price */}
          </div>{/* End .product-body */}
          <div className="product-action">
            <button className="btn-product btn-cart" onClick={() => handleClick(product)}><span>add to cart</span></button>
          </div>{/* End .product-action */}
        </div>{/* End .product */}
        </div>
  )
}

export default Produit