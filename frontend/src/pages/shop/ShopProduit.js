import React from 'react'
import BarRechercheShop from './warpers/BarRechercheShop'
import Categorie from './warpers/Categorie'
import Pagination from './warpers/Pagination'
import Price from './warpers/Price'



function ShopProduit() {
  return (
    <>
    <div className="page-content">
  <div className="container">
    <div className="row">
      <div className="col-lg-9">
       <BarRechercheShop/>

        <div className="products mb-3">
          <div className="row justify-content-center">
            <div className="col-6 col-md-4 col-lg-4">
              <div className="product product-7 text-center">
                <figure className="product-media">
                  <span className="product-label label-new">New</span>
                  <a href="product.html">
                    <img src="assets/images/products/product-4.jpg" alt="Product image" className="product-image" />
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
                  <h3 className="product-title"><a href="product.html">Brown paperbag waist pencil skirt</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $60.00
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '20%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 2 Reviews )</span>
                  </div>{/* End .rating-container */}
                  
                </div>{/* End .product-body */}
              </div>{/* End .product */}
            </div>{/* End .col-sm-6 col-lg-4 */}
           
            <div className="col-6 col-md-4 col-lg-4">
              <div className="product product-7 text-center">
                <figure className="product-media">
                  <span className="product-label label-out">Out of Stock</span>
                  <a href="product.html">
                    <img src="assets/images/products/product-6.jpg" alt="Product image" className="product-image" />
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
                    <a href="#">Jackets</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">Khaki utility boiler jumpsuit</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    <span className="out-price">$120.00</span>
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 6 Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
            </div>{/* End .col-sm-6 col-lg-4 */}
            <div className="col-6 col-md-4 col-lg-4">
              <div className="product product-7 text-center">
                <figure className="product-media">
                  <a href="product.html">
                    <img src="assets/images/products/product-7.jpg" alt="Product image" className="product-image" />
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
                    <a href="#">Jeans</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">Blue utility pinafore denim dress</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $76.00
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '20%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 2 Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
            </div>{/* End .col-sm-6 col-lg-4 */}
            
            
            
          </div>{/* End .row */}
        </div>{/* End .products */}

       <Pagination/>
        
      </div>{/* End .col-lg-9 */}
      <aside className="col-lg-3 order-lg-first">
        <div className="sidebar sidebar-shop">
          <div className="widget widget-clean">
            <label>Filters:</label>
            <a href="#" className="sidebar-filter-clear">Clean All</a>
          </div>{/* End .widget widget-clean */}
          
          <Categorie/>
          
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