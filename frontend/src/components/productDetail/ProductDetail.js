import React from 'react'
// import { Link } from 'react-router-dom'

 function ProductDetail() {
  return (
  <div>

  <div className="page-wrapper">
    <main className="main">
      <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
        <div className="container d-flex align-items-center">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Products</a></li>
            <li className="breadcrumb-item active" aria-current="page">Default</li>
          </ol>
        </div>{/* End .container */}
      </nav>{/* End .breadcrumb-nav */}
      <div className="page-content">
        <div className="container">
          <div className="product-details-top">
            <div className="row">
              <div className="col-md-6">
                <div className="product-gallery product-gallery-vertical">
                  <div className="row">
                    <figure className="product-main-image">
                      <img id="product-zoom" src="assets/images/products/single/1.jpg" data-zoom-image="assets/images/products/single/1-big.jpg" alt="product image" />
                      <a href="#" id="btn-product-gallery" className="btn-product-gallery">
                        <i className="icon-arrows" />
                      </a>
                    </figure>{/* End .product-main-image */}
                    <div id="product-zoom-gallery" className="product-image-gallery">
                      <a className="product-gallery-item active" href="#" data-image="assets/images/products/single/1.jpg" data-zoom-image="assets/images/products/single/1-big.jpg">
                        <img  src="assets/images/products/single/1-small.jpg" alt="product side" />
                      </a>
                      <a className="product-gallery-item" href="#" data-image="assets/images/products/single/2.jpg" data-zoom-image="assets/images/products/single/2-big.jpg">
                        <img src="assets/images/products/single/2-small.jpg" alt="product cross" />
                      </a>
                      <a className="product-gallery-item" href="#" data-image="assets/images/products/single/3.jpg" data-zoom-image="assets/images/products/single/3-big.jpg">
                        <img src="assets/images/products/single/3-small.jpg" alt="product with model" />
                      </a>
                      <a className="product-gallery-item" href="#" data-image="assets/images/products/single/4.jpg" data-zoom-image="assets/images/products/single/4-big.jpg">
                        <img src="assets/images/products/single/4-small.jpg" alt="product back" />
                      </a>
                    </div>{/* End .product-image-gallery */}
                  </div>{/* End .row */}
                </div>{/* End .product-gallery */}
              </div>{/* End .col-md-6 */}
              <div className="col-md-6">
                <div className="product-details">
                  <h1 className="product-title">Dark yellow lace cut out swing dress</h1>{/* End .product-title */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <a className="ratings-text" href="#product-review-link" id="review-link">( 2 Reviews )</a>
                  </div>{/* End .rating-container */}
                  <div className="product-price">
                    $84.00
                  </div>{/* End .product-price */}
                  <div className="product-content">
                    <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing. Sed lectus. </p>
                  </div>{/* End .product-content */}
                 
                  <div className="details-filter-row details-row-size">
                    <label htmlFor="size">Size:</label>
                    <div className="select-custom">
                      <select name="size" id="size" className="form-control">
                        <option value="#" selected="selected">Select a size</option>
                        <option value="s">Small</option>
                        <option value="m">Medium</option>
                        <option value="l">Large</option>
                        <option value="xl">Extra Large</option>
                      </select>
                    </div>{/* End .select-custom */}
                   
                  </div>{/* End .details-filter-row */}
                  <div className="details-filter-row details-row-size">
                    <label htmlFor="qty">Qty:</label>
                    <div class="product-details-quantity">
                     <input type="number" id="qty" class="form-control" value="1" min="1" max="10" step="1" data-decimals="0" required />
                                        </div>
                  </div>{/* End .details-filter-row */}
                  <div className="product-details-action">
                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                  
                  </div>{/* End .product-details-action */}
                  <div className="product-details-footer">
                 
                  </div>{/* End .product-details-footer */}
                </div>{/* End .product-details */}
              </div>{/* End .col-md-6 */}
            </div>{/* End .row */}
          </div>{/* End .product-details-top */}
          <div className="product-details-tab">
            <ul className="nav nav-pills justify-content-center" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="product-desc-link" data-toggle="tab" href="#product-desc-tab" role="tab" aria-controls="product-desc-tab" aria-selected="true">Description</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" id="product-review-link" data-toggle="tab" href="#product-review-tab" role="tab" aria-controls="product-review-tab" aria-selected="false">Reviews </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="product-desc-tab" role="tabpanel" aria-labelledby="product-desc-link">
                <div className="product-desc-content">
                  <h3>Product Information</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. </p>
                  <ul>
                    <li>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit. </li>
                    <li>Vivamus finibus vel mauris ut vehicula.</li>
                    <li>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</li>
                  </ul>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. </p>
                </div>{/* End .product-desc-content */}
              </div>{/* .End .tab-pane */}
              <div className="tab-pane fade" id="product-info-tab" role="tabpanel" aria-labelledby="product-info-link">
               
              </div>{/* .End .tab-pane */}
              <div className="tab-pane fade" id="product-shipping-tab" role="tabpanel" aria-labelledby="product-shipping-link">
               
              </div>{/* .End .tab-pane */}
              <div className="tab-pane fade" id="product-review-tab" role="tabpanel" aria-labelledby="product-review-link">
                <div className="reviews">
                  <h3>Reviews</h3>
                  <div className="review">
                    <div className="row no-gutters">
                      <div className="col-auto">
                        <h4><a href="#">Samanta J.</a></h4>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                        </div>{/* End .rating-container */}
                        <span className="review-date">6 days ago</span>
                      </div>{/* End .col */}
                      <div className="col">
                        <h4>Good, perfect size</h4>
                        <div className="review-content">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!</p>
                        </div>{/* End .review-content */}
                        <div className="review-action">
                          <a href="#"><i className="icon-thumbs-up" />Helpful (2)</a>
                          <a href="#"><i className="icon-thumbs-down" />Unhelpful (0)</a>
                        </div>{/* End .review-action */}
                      </div>{/* End .col-auto */}
                    </div>{/* End .row */}
                  </div>{/* End .review */}
                  <div className="review">
                    <div className="row no-gutters">
                      <div className="col-auto">
                        <h4><a href="#">John Doe</a></h4>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                        </div>{/* End .rating-container */}
                        <span className="review-date">5 days ago</span>
                      </div>{/* End .col */}
                      <div className="col">
                        <h4>Very good</h4>
                        <div className="review-content">
                          <p>Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!</p>
                        </div>{/* End .review-content */}
                        <div className="review-action">
                          <a href="#"><i className="icon-thumbs-up" />Helpful (0)</a>
                          <a href="#"><i className="icon-thumbs-down" />Unhelpful (0)</a>
                        </div>{/* End .review-action */}
                      </div>{/* End .col-auto */}
                    </div>{/* End .row */}
                  </div>{/* End .review */}
                </div>{/* End .reviews */}
              </div>{/* .End .tab-pane */}
            </div>{/* End .tab-content */}
          </div>
         
        
        </div>{/* End .container */}
      </div>{/* End .page-content */}
    </main>{/* End .main */}
    
  </div>{/* End .page-wrapper */}
  <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up" /></button>
 
  <div className="mobile-menu-overlay" />{/* End .mobil-menu-overlay */}
 

 
</div>

  )
}
export default ProductDetail
