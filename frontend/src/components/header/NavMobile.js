import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function NavMobile() {


  const [categories, setCategories] = useState([])

  const getCategories = async()=>{
    axios.get("http://localhost:8000/api/categories/getall").then((Response)=>{
      setCategories(Response.data);
      console.log(Response.data);
    }).catch((error)=>{
      console.log(error);
    })
  }

  useEffect(() => {
    getCategories();
  }, [])


  return (
    <div>
      {/* Mobile Menu */}
  <div className="mobile-menu-overlay" />{/* End .mobil-menu-overlay */}
  <div className="mobile-menu-container mobile-menu-light">
    <div className="mobile-menu-wrapper">
      <span className="mobile-menu-close"><i className="icon-close" /></span>
      <form action="#" method="get" className="mobile-search">
        <label htmlFor="mobile-search" className="sr-only">Search</label>
        <input type="search" className="form-control" name="mobile-search" id="mobile-search" placeholder="Search product ..." required />
        <button className="btn btn-primary" type="submit"><i className="icon-search" /></button>
      </form>
      <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="mobile-menu-link" data-toggle="tab" href="#mobile-menu-tab" role="tab" aria-controls="mobile-menu-tab" aria-selected="true">Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="mobile-cats-link" data-toggle="tab" href="#mobile-cats-tab" role="tab" aria-controls="mobile-cats-tab" aria-selected="false">Categories</a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="mobile-menu-tab" role="tabpanel" aria-labelledby="mobile-menu-link">
          <nav className="mobile-nav">
            <ul className="mobile-menu">
              <li className="active">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="category.html">Shop</a>
              </li>
              <li>
                <a href="product.html" className="sf-with-ul">Product</a>
              </li>
            </ul>
          </nav>{/* End .mobile-nav */}
        </div>{/* .End .tab-pane */}
        <div className="tab-pane fade" id="mobile-cats-tab" role="tabpanel" aria-labelledby="mobile-cats-link">
          <nav className="mobile-cats-nav">
            <ul className="mobile-cats-menu">
            {categories.map((categorie)=>{
                      return(
                        <li  className="item-lead"><Link to={"/categorie/"+categorie.id}>{categorie.categorie}</Link></li>
                      )
                    })}
            </ul>{/* End .mobile-cats-menu */}
          </nav>{/* End .mobile-cats-nav */}
        </div>{/* .End .tab-pane */}
      </div>{/* End .tab-content */}
      <div className="social-icons">
        <a href="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f" /></a>
        <a href="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter" /></a>
        <a href="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram" /></a>
        <a href="#" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube" /></a>
      </div>{/* End .social-icons */}
    </div>{/* End .mobile-menu-wrapper */}
  </div>{/* End .mobile-menu-container */}
    </div>
  )
}

export default NavMobile
