import React from 'react'
import { useState , createContext } from 'react'
import {render} from 'react-dom'
import PromotionProduct from '../components/PromotionProduct/PromotionProduct'
import TopProducts from '../components/TopProducts/TopProducts'
// import Header from '../components/header/Header'
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import NavMobile from "../components/header/NavMobile";
const Home = () => {
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
  
  return (
    <>
    <Header  item={item} />
      <div>
        <div className="page-wrapper">
          
          <main className="main">
            <div className="intro-slider-container">
              <div className="owl-carousel owl-simple owl-light owl-nav-inside" data-toggle="owl" data-owl-options="{&quot;nav&quot;: false}">
                <div className="intro-slide" style={{backgroundImage: 'url(assets/images/demos/demo-2/slider/slide-1.jpg)'}}>
                  <div className="container intro-content">
                    <h3 className="intro-subtitle">Bedroom Furniture</h3>{/* End .h3 intro-subtitle */}
                    <h1 className="intro-title">Find Comfort <br />That Suits You.</h1>{/* End .intro-title */}
                    <a href="category.html" className="btn btn-primary">
                      <span>Shop Now</span>
                      <i className="icon-long-arrow-right" />
                    </a>
                  </div>{/* End .container intro-content */}
                </div>{/* End .intro-slide */}
                <div className="intro-slide" style={{backgroundImage: 'url(assets/images/demos/demo-2/slider/slide-2.jpg)'}}>
                  <div className="container intro-content">
                    <h3 className="intro-subtitle">Deals and Promotions</h3>{/* End .h3 intro-subtitle */}
                    <h1 className="intro-title">Ypperlig <br />Coffee Table <br /><span className="text-primary"><sup>$</sup>49,99</span></h1>{/* End .intro-title */}
                    <a href="category.html" className="btn btn-primary">
                      <span>Shop Now</span>
                      <i className="icon-long-arrow-right" />
                    </a>
                  </div>{/* End .container intro-content */}
                </div>{/* End .intro-slide */}
                <div className="intro-slide" style={{backgroundImage: 'url(assets/images/demos/demo-2/slider/slide-3.jpg)'}}>
                  <div className="container intro-content">
                    <h3 className="intro-subtitle">Living Room</h3>{/* End .h3 intro-subtitle */}
                    <h1 className="intro-title">
                      Make Your Living Room <br />Work For You.<br />
                      <span className="text-primary">
                        <sup className="text-white font-weight-light">from</sup><sup>$</sup>9,99
                      </span>
                    </h1>{/* End .intro-title */}
                    <a href="category.html" className="btn btn-primary">
                      <span>Shop Now</span>
                      <i className="icon-long-arrow-right" />
                    </a>
                  </div>{/* End .container intro-content */}
                </div>{/* End .intro-slide */}
              </div>{/* End .owl-carousel owl-simple */}
              <span className="slider-loader text-white" />{/* End .slider-loader */}
            </div>{/* End .intro-slider-container */}
            <div className="mb-3 mb-lg-5" />{/* End .mb-3 mb-lg-5 */}
            <div className="mb-3" />{/* End .mb-6 */}

            <PromotionProduct/>

            
            <div className="mb-5" />{/* End .mb-5 */}
            <div className="mb-6" />{/* End .mb-6 */}
            
            <TopProducts handleClick={handleClick}/>

            <div className="container">
              <hr className="mt-1 mb-6" />
            </div>{/* End .container */}

          </main>{/* End .main */}
        </div>
        <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up" /></button>
      </div>
      <NavMobile/>
    <Footer/>
    </>


  )
}

export default Home
