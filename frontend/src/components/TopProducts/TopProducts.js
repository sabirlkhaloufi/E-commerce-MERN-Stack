import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function TopProducts() {


  const [AllProducts, setAllProducts] = useState([])
  const url = "http://localhost:8000"
  const getAllProducts = async()=>{
    axios.get("http://localhost:8000/api/produit/getall").then((Response)=>{
      console.log(Response.data.AllProduit);
      setAllProducts(Response.data.AllProduit);
    }).catch((error)=>{
      console.log(error);
    })
  }

  useEffect(() => {
    getAllProducts();
  }, [])

  console.log(AllProducts);


  return (
    <div className="container">
        <div className="heading heading-center mb-3">
          <h2 className="title">Top Selling Products</h2>{/* End .title */}
        </div>{/* End .heading */}
        <div className="tab-content">
          <div className="tab-pane p-0 fade show active" id="top-all-tab" role="tabpanel" aria-labelledby="top-all-link">
            <div className="products">
              <div className="row justify-content-center">

              {AllProducts.map((product)=>{
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
          </div>{/* .End .tab-pane */} 
          
        </div>{/* End .tab-content */}
      </div>
  )
}

export default TopProducts
