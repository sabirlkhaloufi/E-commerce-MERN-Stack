import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Produit from './Produit'

function TopProducts({ handleClick }) {


  const [AllProducts, setAllProducts] = useState([])
  
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

              {AllProducts.map((product)=>(
                <Produit key={product.id} product={product} handleClick={handleClick}/>
                
                
              ))}

                
                
              </div>{/* End .row */}
            </div>{/* End .products */}
          </div>{/* .End .tab-pane */} 
          
        </div>{/* End .tab-content */}
      </div>
  )
}

export default TopProducts
