import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function PromotionProduct() {

  const [promoProduct, setPromoProduct] = useState([])

  const url = "http://localhost:8000"
  const getAllProducts = async()=>{
    axios.get("http://localhost:8000/api/produit/getallPromo").then((Response)=>{
      setPromoProduct(Response.data.AllProduit);
    }).catch((error)=>{
      console.log(error);
    })
  }

 

  return (
    <div>
      <div className="container">
          <ul className="nav nav-pills nav-border-anim nav-big justify-content-center mb-3" role="tablist">
            <li className="nav-item">
              <a className="nav-link" id="products-featured-link" data-toggle="tab" href="#products-featured-tab" role="tab" aria-controls="products-featured-tab" aria-selected="true">Promotion product</a>
            </li>
          </ul>
        </div>{/* End .container */}
      <div className="container-fluid">
      <div className="tab-pane p-0 fade show active" id="top-all-tab" role="tabpanel" aria-labelledby="top-all-link">
            <div className="products">
              <div className="row justify-content-center">

              {promoProduct.map((product)=>{
                return(
                <Link to={"/productDetail/"+product.id} className="col-6 col-md-4 col-lg-3 col-xl-5col">
                <div className="product product-11 text-center">
                  <figure className="product-media">
                    <a href="product.html">
                      <img src={url+product.image[0]} alt="Product image" className="product-image" />
                      <img src={product.image[1] && url+product.image[1]} alt="Product image" className="product-image-hover" />
                    </a>
                    <div className="product-action-vertical">
                      <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                    </div>{/* End .product-action-vertical */}
                  </figure>{/* End .product-media */}
                  <div className="product-body">
                    <div className="product-cat">
                      <a href="#">{product.title}</a>
                    </div>{/* End .product-cat */}
                    <h3 className="product-title"><a href="product.html">{product.description}</a></h3>{/* End .product-title */}
                    <div className="product-price">
                      $401,00
                    </div>{/* End .product-price */}
                  </div>{/* End .product-body */}
                  <div className="product-action">
                    <button className="btn-product btn-cart"><span>add to cart</span></button>
                  </div>{/* End .product-action */}
                </div>{/* End .product */}
                </Link>)
                
              })}

                
                
              </div>{/* End .row */}
            </div>{/* End .products */}
            <div> <Link to={"/shop"} className="btn-product btn-cart">Show All ...</Link> </div>
          </div>{/* .End .tab-pane */} 
        </div>{/* End .tab-content */}
    </div>
  )
}

export default PromotionProduct
