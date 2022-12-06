import React from 'react'

function Header() {
  return (
    <header className="header header-2 header-intro-clearance">
      <div className="header-top">
        <div className="container">
          <div className="header-left">
            <p>Special collection already available.</p><a href="#">&nbsp;Read more ...</a>
          </div>{/* End .header-left */}
          <div className="header-right">
            <ul className="top-menu">
              <li>
                <a href="#">Links</a>
                <ul>
                  <li><a href="#signin-modal" data-toggle="modal">Sign in / Sign up</a></li>
                </ul>
              </li>
            </ul>{/* End .top-menu */}
          </div>{/* End .header-right */}
        </div>{/* End .container */}
      </div>{/* End .header-top */}
      <div className="header-middle">
        <div className="container">
          <div className="header-left">
            <button className="mobile-menu-toggler">
              <span className="sr-only">Toggle mobile menu</span>
              <i className="icon-bars" />
            </button>
            <a href="index.html" className="logo">
              <img src="assets/images/demos/demo-2/logo.png" alt="Molla Logo" width={105} height={25} />
            </a>
          </div>{/* End .header-left */}
          <div className="header-center">
            <div className="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
              <a href="#" className="search-toggle" role="button"><i className="icon-search" /></a>
              <form action="#" method="get">
                <div className="header-search-wrapper search-wrapper-wide">
                  <label htmlFor="q" className="sr-only">Search</label>
                  <input type="search" className="form-control" name="q" id="q" placeholder="Search product ..." required />
                  <button className="btn btn-primary" type="submit"><i className="icon-search" /></button>
                </div>{/* End .header-search-wrapper */}
              </form>
            </div>{/* End .header-search */}
          </div>
          <div className="header-right">
            <div className="account">
              <a href="dashboard.html" title="My account">
                <div className="icon">
                  <i className="icon-user" />
                </div>
                <p>Account</p>
              </a>
            </div>{/* End .compare-dropdown */}
            <div className="wishlist">
              <a href="wishlist.html" title="Wishlist">
                <div className="icon">
                  <i className="icon-heart-o" />
                  <span className="wishlist-count badge">3</span>
                </div>
                <p>Wishlist</p>
              </a>
            </div>{/* End .compare-dropdown */}
            <div className="dropdown cart-dropdown">
              <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                <div className="icon">
                  <i className="icon-shopping-cart" />
                  <span className="cart-count">2</span>
                </div>
                <p>Cart</p>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-cart-products">
                  <div className="product">
                    <div className="product-cart-details">
                      <h4 className="product-title">
                        <a href="product.html">Beige knitted elastic runner shoes</a>
                      </h4>
                      <span className="cart-product-info">
                        <span className="cart-product-qty">1</span>
                        x $84.00
                      </span>
                    </div>{/* End .product-cart-details */}
                    <figure className="product-image-container">
                      <a href="product.html" className="product-image">
                        <img src="assets/images/products/cart/product-1.jpg" alt="product" />
                      </a>
                    </figure>
                    <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close" /></a>
                  </div>{/* End .product */}
                  <div className="product">
                    <div className="product-cart-details">
                      <h4 className="product-title">
                        <a href="product.html">Blue utility pinafore denim dress</a>
                      </h4>
                      <span className="cart-product-info">
                        <span className="cart-product-qty">1</span>
                        x $76.00
                      </span>
                    </div>{/* End .product-cart-details */}
                    <figure className="product-image-container">
                      <a href="product.html" className="product-image">
                        <img src="assets/images/products/cart/product-2.jpg" alt="product" />
                      </a>
                    </figure>
                    <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close" /></a>
                  </div>{/* End .product */}
                </div>{/* End .cart-product */}
                <div className="dropdown-cart-total">
                  <span>Total</span>
                  <span className="cart-total-price">$160.00</span>
                </div>{/* End .dropdown-cart-total */}
                <div className="dropdown-cart-action">
                  <a href="cart.html" className="btn btn-primary">View Cart</a>
                  <a href="checkout.html" className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right" /></a>
                </div>{/* End .dropdown-cart-total */}
              </div>{/* End .dropdown-menu */}
            </div>{/* End .cart-dropdown */}
          </div>{/* End .header-right */}
        </div>{/* End .container */}
      </div>{/* End .header-middle */}
      <div className="header-bottom sticky-header">
        <div className="container">
          <div className="header-left">
            <div className="dropdown category-dropdown">
              <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Browse Categories">
                Browse Categories
              </a>
              <div className="dropdown-menu">
                <nav className="side-nav">
                  <ul className="menu-vertical sf-arrows">
                    <li className="item-lead"><a href="#">Daily offers</a></li>
                    <li className="item-lead"><a href="#">Gift Ideas</a></li>
                    <li><a href="#">Beds</a></li>
                    <li><a href="#">Lighting</a></li>
                    
                  </ul>{/* End .menu-vertical */}
                </nav>{/* End .side-nav */}
              </div>{/* End .dropdown-menu */}
            </div>{/* End .category-dropdown */}
          </div>{/* End .header-left */}
          <div className="header-center">
            <nav className="main-nav">
              <ul className="menu sf-arrows">
                <li className="megamenu-container active">
                  <a href="index.html" className="sf-with-ul">Home</a>
                </li>
                <li>
                  <a href="category.html" className="sf-with-ul">Shop</a>
                </li>
                <li>
                  <a href="product.html" className="sf-with-ul">Product</a>
                </li>
                <li>
                  <a href="#" className="sf-with-ul">Pages</a>
                </li>
                <li>
                  <a href="blog.html" className="sf-with-ul">Blog</a>
                  <ul>
                    <li><a href="blog.html">Classic</a></li>
                    <li><a href="blog-listing.html">Listing</a></li>
                    <li>
                      <a href="#">Grid</a>
                      <ul>
                        <li><a href="blog-grid-2cols.html">Grid 2 columns</a></li>
                        <li><a href="blog-grid-3cols.html">Grid 3 columns</a></li>
                        <li><a href="blog-grid-4cols.html">Grid 4 columns</a></li>
                        <li><a href="blog-grid-sidebar.html">Grid sidebar</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Masonry</a>
                      <ul>
                        <li><a href="blog-masonry-2cols.html">Masonry 2 columns</a></li>
                        <li><a href="blog-masonry-3cols.html">Masonry 3 columns</a></li>
                        <li><a href="blog-masonry-4cols.html">Masonry 4 columns</a></li>
                        <li><a href="blog-masonry-sidebar.html">Masonry sidebar</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Mask</a>
                      <ul>
                        <li><a href="blog-mask-grid.html">Blog mask grid</a></li>
                        <li><a href="blog-mask-masonry.html">Blog mask masonry</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Single Post</a>
                      <ul>
                        <li><a href="single.html">Default with sidebar</a></li>
                        <li><a href="single-fullwidth.html">Fullwidth no sidebar</a></li>
                        <li><a href="single-fullwidth-sidebar.html">Fullwidth with sidebar</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="elements-list.html" className="sf-with-ul">Elements</a>
                  <ul>
                    <li><a href="elements-products.html">Products</a></li>
                    <li><a href="elements-typography.html">Typography</a></li>
                    <li><a href="elements-titles.html">Titles</a></li>
                    <li><a href="elements-banners.html">Banners</a></li>
                    <li><a href="elements-product-category.html">Product Category</a></li>
                    <li><a href="elements-video-banners.html">Video Banners</a></li>
                    <li><a href="elements-buttons.html">Buttons</a></li>
                    <li><a href="elements-accordions.html">Accordions</a></li>
                    <li><a href="elements-tabs.html">Tabs</a></li>
                    <li><a href="elements-testimonials.html">Testimonials</a></li>
                    <li><a href="elements-blog-posts.html">Blog Posts</a></li>
                    <li><a href="elements-portfolio.html">Portfolio</a></li>
                    <li><a href="elements-cta.html">Call to Action</a></li>
                    <li><a href="elements-icon-boxes.html">Icon Boxes</a></li>
                  </ul>
                </li>
              </ul>{/* End .menu */}
            </nav>{/* End .main-nav */}
          </div>{/* End .header-center */}
          <div className="header-right">
            <i className="la la-lightbulb-o" /><p>Clearance<span className="highlight">&nbsp;Up to 30% Off</span></p>
          </div>
        </div>{/* End .container */}
      </div>{/* End .header-bottom */}
    </header>
  )
}

export default Header
