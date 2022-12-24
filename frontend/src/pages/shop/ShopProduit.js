import React , {useState, useEffect} from 'react'
import BarRechercheShop from './warpers/BarRechercheShop'
import {Pagination} from '@mui/material'
import Price from './warpers/Price'
import {Link} from 'react-router-dom'
import axios from 'axios'


function ShopProduit() {

  const [categories, setCategories] = useState([])

  const getCategories = async()=>{
    axios.get("http://localhost:8000/api/categories/getall").then((Response)=>{
      setCategories(Response.data);
      console.log(Response.data);
    }).catch((error)=>{
      console.log(error);
    })
  }

  const filterByCategorie = async(id)=>{ 
    
    console.log(id);
    // const getAllProduitByCategorie = async (id) =>{
      await  axios.get(`http://localhost:8000/api/produit/getallproduitsidcategorie/${id}`)
      .then((response)=>{
        // console.log('allProduitByCategorie',response.data.allProduitByCategorie);
        setAllProducts(response.data.allProduitByCategorie);
        console.log('all prduits categorie ',AllProducts);
        // getAllproduits();
      }).catch((error)=>{
        console.log(error);
      })
    }
  

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


  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = AllProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(AllProducts.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % AllProducts.length;
    setItemOffset(newOffset);
  };


  useEffect(() => {
    getCategories();
    getAllProducts();
    filterByCategorie()
  }, [])


  return (
    <>
    <div className="page-content">
  <div className="container">
    <div className="row">
      <div className="col-lg-9">
       <BarRechercheShop/>

        <div className="products mb-3">
          <div className="row justify-content-center">



          {currentItems.map((product)=>{
            return (
              <Link to={"/productDetail/"+product.id} className="col-6 col-md-4 col-lg-4">
              <div className="product product-7 text-center">
                <figure className="product-media">
                  <span className="product-label label-new">New</span>
                  <a href="product.html">
                    <img src={url+product.image[0]} alt="Product image" className="product-image" />
                  </a>
                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                  </div>{/* End .product-action-vertical */}
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Women</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">{product.title}</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    {product.price}
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '20%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 2 Reviews )</span>
                  </div>{/* End .rating-container */}
                  
                </div>{/* End .product-body */}
              </div>{/* End .product */}
            </Link>
            )
          })}
            
            


            
            
            
          </div>{/* End .row */}
        </div>{/* End .products */}

        <Pagination count={10} color="primary" />
        
      </div>{/* End .col-lg-9 */}
      <aside className="col-lg-3 order-lg-first">
        <div className="sidebar sidebar-shop">
          <div className="widget widget-clean">
            <label>Filters:</label>
            <a href="#" className="sidebar-filter-clear">Clean All</a>
          </div>{/* End .widget widget-clean */}
          
          <div className="widget widget-collapsible">
    <h3 className="widget-title">
      <a data-toggle="collapse" href="#widget-1" role="button" aria-expanded="true" aria-controls="widget-1">
        Category
      </a>
    </h3>{/* End .widget-title */}
    <div className="collapse show" id="widget-1">
      <div className="widget-body">
        <div className="filter-items filter-items-count">


          {categories.map((categorie)=>{
            return(
              <div className="filter-item">
                <div className="custom-control custom-checkbox">
                  {/* <input type="checkbox" className="custom-control-input" id={"cat-"+categorie.id} onChange={()=>filterByCategorie(categorie.id)} /> */}
                  {/* <input type="checkbox" className="custom-control-input"  /> */}

                  <a href='#' className=''  onClick={()=>filterByCategorie(categorie.id)}
                  >{categorie.categorie}</a>
                  {/* <label className="custom-control-label" htmlFor={"cat-"+categorie.id}>{categorie.categorie}</label> */}
                </div>{/* End .custom-checkbox */}
                <span className="item-count">0</span>
              </div>
            )
          })}
          
        </div>{/* End .filter-items */}
      </div>{/* End .widget-body */}
    </div>{/* End .collapse */}
  </div>{/* End .widget */}
          
          <Price/>

          
        </div>{/* End .sidebar sidebar-shop */}
      </aside>{/* End .col-lg-3 */}
    </div>{/* End .row */}
  </div>{/* End .container */}
</div>


    </>
  )
}

export default ShopProduit