import React from 'react'

function TopProducts() {
  return (
    <div className="container">
        <div className="heading heading-center mb-3">
          <h2 className="title">Top Selling Products</h2>{/* End .title */}
        </div>{/* End .heading */}
        <div className="tab-content">
          <div className="tab-pane p-0 fade show active" id="top-all-tab" role="tabpanel" aria-labelledby="top-all-link">
            <div className="products">
              <div className="row justify-content-center">
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-2/products/product-7-1.jpg" alt="Product image" className="product-image" />
                        <img src="assets/images/demos/demo-2/products/product-7-2.jpg" alt="Product image" className="product-image-hover" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                      </div>{/* End .product-action-vertical */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Lighting</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Petite Table Lamp</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $401,00
                      </div>{/* End .product-price */}
                    </div>{/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                    </div>{/* End .product-action */}
                  </div>{/* End .product */}
                </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-2/products/product-8-1.jpg" alt="Product image" className="product-image" />
                        <img src="assets/images/demos/demo-2/products/product-8-2.jpg" alt="Product image" className="product-image-hover" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                      </div>{/* End .product-action-vertical */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Decor</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Madra Log Holder</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $401,00
                      </div>{/* End .product-price */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#927764'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                    </div>{/* End .product-action */}
                  </div>{/* End .product */}
                </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <span className="product-label label-circle label-sale">Sale</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-2/products/product-9-1.jpg" alt="Product image" className="product-image" />
                        <img src="assets/images/demos/demo-2/products/product-9-2.jpg" alt="Product image" className="product-image-hover" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                      </div>{/* End .product-action-vertical */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Furniture</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Garden Armchair</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        <span className="new-price">$94,00</span>
                        <span className="old-price">Was $94,00</span>
                      </div>{/* End .product-price */}
                    </div>{/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                    </div>{/* End .product-action */}
                  </div>{/* End .product */}
                </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-2/products/product-10-1.jpg" alt="Product image" className="product-image" />
                        <img src="assets/images/demos/demo-2/products/product-10-2.jpg" alt="Product image" className="product-image-hover" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                      </div>{/* End .product-action-vertical */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Lighting</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Carronade Large Suspension Lamp</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $401,00
                      </div>{/* End .product-price */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#e8e8e8'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                    </div>{/* End .product-action */}
                  </div>{/* End .product */}
                </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-2/products/product-11-1.jpg" alt="Product image" className="product-image" />
                        <img src="assets/images/demos/demo-2/products/product-11-2.jpg" alt="Product image" className="product-image-hover" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                      </div>{/* End .product-action-vertical */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Decor</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Original Outdoor Beanbag</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $259,00
                      </div>{/* End .product-price */}
                    </div>{/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                    </div>{/* End .product-action */}
                  </div>{/* End .product */}
                </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <span className="product-label label-circle label-new">New</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-2/products/product-12-1.jpg" alt="Product image" className="product-image" />
                        <img src="assets/images/demos/demo-2/products/product-12-2.jpg" alt="Product image" className="product-image-hover" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                      </div>{/* End .product-action-vertical */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Furniture</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">2-Seater</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $3.107,00
                      </div>{/* End .product-price */}
                    </div>{/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                    </div>{/* End .product-action */}
                  </div>{/* End .product */}
                </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-2/products/product-15-1.jpg" alt="Product image" className="product-image" />
                        <img src="assets/images/demos/demo-2/products/product-15-2.jpg" alt="Product image" className="product-image-hover" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                      </div>{/* End .product-action-vertical */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Decor</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Cushion Set 3 Pieces</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $199,00
                      </div>{/* End .product-price */}
                    </div>{/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                    </div>{/* End .product-action */}
                  </div>{/* End .product */}
                </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-2/products/product-16-1.jpg" alt="Product image" className="product-image" />
                        <img src="assets/images/demos/demo-2/products/product-16-2.jpg" alt="Product image" className="product-image-hover" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                      </div>{/* End .product-action-vertical */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Lighting</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Carronade Table Lamp</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $499,00
                      </div>{/* End .product-price */}
                    </div>{/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                    </div>{/* End .product-action */}
                  </div>{/* End .product */}
                </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
              </div>{/* End .row */}
            </div>{/* End .products */}
          </div>{/* .End .tab-pane */}
          <div className="tab-pane p-0 fade" id="top-fur-tab" role="tabpanel" aria-labelledby="top-fur-link">
            <div className="products">
              <div className="row justify-content-center">
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <span className="product-label label-circle label-sale">Sale</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-2/products/product-9-1.jpg" alt="Product image" className="product-image" />
                        <img src="assets/images/demos/demo-2/products/product-9-2.jpg" alt="Product image" className="product-image-hover" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                      </div>{/* End .product-action-vertical */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Furniture</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Garden Armchair</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        <span className="new-price">$94,00</span>
                        <span className="old-price">Was $94,00</span>
                      </div>{/* End .product-price */}
                    </div>{/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                    </div>{/* End .product-action */}
                  </div>{/* End .product */}
                </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <span className="product-label label-circle label-new">New</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-2/products/product-12-1.jpg" alt="Product image" className="product-image" />
                        <img src="assets/images/demos/demo-2/products/product-12-2.jpg" alt="Product image" className="product-image-hover" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                      </div>{/* End .product-action-vertical */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Furniture</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">2-Seater</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $3.107,00
                      </div>{/* End .product-price */}
                    </div>{/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                    </div>{/* End .product-action */}
                  </div>{/* End .product */}
                </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-2/products/product-13-1.jpg" alt="Product image" className="product-image" />
                        <img src="assets/images/demos/demo-2/products/product-13-2.jpg" alt="Product image" className="product-image-hover" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                      </div>{/* End .product-action-vertical */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Furniture</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Wingback Chair</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $2.486,00
                      </div>{/* End .product-price */}
                    </div>{/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                    </div>{/* End .product-action */}
                  </div>{/* End .product */}
                </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
              </div>{/* End .row */}
            </div>{/* End .products */}
          </div>{/* .End .tab-pane */}
          <div className="tab-pane p-0 fade" id="top-decor-tab" role="tabpanel" aria-labelledby="top-decor-link">
            <div className="products">
              <div className="row justify-content-center">
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-2/products/product-8-1.jpg" alt="Product image" className="product-image" />
                        <img src="assets/images/demos/demo-2/products/product-8-2.jpg" alt="Product image" className="product-image-hover" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                      </div>{/* End .product-action-vertical */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Decor</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Madra Log Holder</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $401,00
                      </div>{/* End .product-price */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#927764'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                    </div>{/* End .product-action */}
                  </div>{/* End .product */}
                </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-2/products/product-11-1.jpg" alt="Product image" className="product-image" />
                        <img src="assets/images/demos/demo-2/products/product-11-2.jpg" alt="Product image" className="product-image-hover" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                      </div>{/* End .product-action-vertical */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Decor</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Original Outdoor Beanbag</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $259,00
                      </div>{/* End .product-price */}
                    </div>{/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                    </div>{/* End .product-action */}
                  </div>{/* End .product */}
                </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-2/products/product-14-1.jpg" alt="Product image" className="product-image" />
                        <img src="assets/images/demos/demo-2/products/product-14-2.jpg" alt="Product image" className="product-image-hover" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                      </div>{/* End .product-action-vertical */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Decor</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Cushion Set 3 Pieces</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $199,00
                      </div>{/* End .product-price */}
                    </div>{/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                    </div>{/* End .product-action */}
                  </div>{/* End .product */}
                </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-2/products/product-15-1.jpg" alt="Product image" className="product-image" />
                        <img src="assets/images/demos/demo-2/products/product-15-2.jpg" alt="Product image" className="product-image-hover" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                      </div>{/* End .product-action-vertical */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Decor</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Cushion Set 3 Pieces</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $199,00
                      </div>{/* End .product-price */}
                    </div>{/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                    </div>{/* End .product-action */}
                  </div>{/* End .product */}
                </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
              </div>{/* End .row */}
            </div>{/* End .products */}
          </div>{/* .End .tab-pane */}
          <div className="tab-pane p-0 fade" id="top-light-tab" role="tabpanel" aria-labelledby="top-light-link">
            <div className="products">
              <div className="row justify-content-center">
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-2/products/product-7-1.jpg" alt="Product image" className="product-image" />
                        <img src="assets/images/demos/demo-2/products/product-7-2.jpg" alt="Product image" className="product-image-hover" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                      </div>{/* End .product-action-vertical */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Lighting</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Petite Table Lamp</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $401,00
                      </div>{/* End .product-price */}
                    </div>{/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                    </div>{/* End .product-action */}
                  </div>{/* End .product */}
                </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-2/products/product-10-1.jpg" alt="Product image" className="product-image" />
                        <img src="assets/images/demos/demo-2/products/product-10-2.jpg" alt="Product image" className="product-image-hover" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                      </div>{/* End .product-action-vertical */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Lighting</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Carronade Large Suspension Lamp</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $401,00
                      </div>{/* End .product-price */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#e8e8e8'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                    </div>{/* End .product-action */}
                  </div>{/* End .product */}
                </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-2/products/product-16-1.jpg" alt="Product image" className="product-image" />
                        <img src="assets/images/demos/demo-2/products/product-16-2.jpg" alt="Product image" className="product-image-hover" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist "><span>add to wishlist</span></a>
                      </div>{/* End .product-action-vertical */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Lighting</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Carronade Table Lamp</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $499,00
                      </div>{/* End .product-price */}
                    </div>{/* End .product-body */}
                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                    </div>{/* End .product-action */}
                  </div>{/* End .product */}
                </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
              </div>{/* End .row */}
            </div>{/* End .products */}
          </div>{/* .End .tab-pane */}
        </div>{/* End .tab-content */}
      </div>
  )
}

export default TopProducts
