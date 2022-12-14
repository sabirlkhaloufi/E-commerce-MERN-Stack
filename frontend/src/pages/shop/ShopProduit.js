import React , {useEffect, useState} from 'react'
import BarRechercheShop from './warpers/BarRechercheShop'
import {Pagination} from '@mui/material'
import Price from './warpers/Price'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Header from '../../components/header/Header'

function ShopProduit() {

  const [panier , setPanier] = useState([])
  const [show, setShow] = useState(true);
  const [item, setItem] = useState([]);
  console.log("show: ", show);
  console.log("panier: ", panier);
  const handleClick = (item) => {
    setItem(item);
    console.log("item: ", item);
    if (panier.indexOf(item) !== -1) return;
    setPanier([...panier, item]);
    // save to local storage

    localStorage.setItem("panier", JSON.stringify([...panier, item]));

    // setCart([...cart, item]);
  };

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
  const [paginate, setPaginate] = useState({limit:6,offset:0});
  const url = "http://localhost:8000"
  const getAllProducts = async()=>{
    axios.get(`http://localhost:8000/api/produit/getallPagination?limit=${paginate.limit}&offset=${paginate.offset+paginate.limit}`).then((Response)=>{
      console.log(Response.data);
      setAllProducts(Response.data);
    }).catch((error)=>{
      console.log(error);
    })
  }

  const handlPagination = async(event, value)=>{
    await setPaginate({limit:6,offset:value})
  }



  useEffect(() => {
    getCategories();
    getAllProducts();
    filterByCategorie()
  }, [])

  useEffect(() => {
    getCategories();
    getAllProducts();
    filterByCategorie()
  }, [paginate])


  return (
    <>
      <Header  item={item} />

    <div className="page-content">
  <div className="container">
    <div className="row">
      <div className="col-lg-9">
       <BarRechercheShop/>

        <div className="products mb-3">
          <div className="row justify-content-center">



          {AllProducts.map((product)=>{
            return (
              
              <Link to={"/productDetail/"+product.id} className="col-6 col-md-4 col-lg-4">
              <div className="product product-7 text-center">
                <figure className="product-media">
                  
                  {product.promotion === true ? <span className="product-label label-promo">Promo</span> : <span className="product-label label-new">New</span>}
                  
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

        <Pagination count={10} color="primary" onChange={handlPagination}/>
        

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