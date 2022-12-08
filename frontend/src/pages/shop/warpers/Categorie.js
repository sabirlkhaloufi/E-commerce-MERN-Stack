import React from 'react'

function Categorie() {
  return (
    <> <div className="widget widget-collapsible">
    <h3 className="widget-title">
      <a data-toggle="collapse" href="#widget-1" role="button" aria-expanded="true" aria-controls="widget-1">
        Category
      </a>
    </h3>{/* End .widget-title */}
    <div className="collapse show" id="widget-1">
      <div className="widget-body">
        <div className="filter-items filter-items-count">
          <div className="filter-item">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="cat-1" />
              <label className="custom-control-label" htmlFor="cat-1">Dresses</label>
            </div>{/* End .custom-checkbox */}
            <span className="item-count">3</span>
          </div>{/* End .filter-item */}
          <div className="filter-item">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="cat-2" />
              <label className="custom-control-label" htmlFor="cat-2">T-shirts</label>
            </div>{/* End .custom-checkbox */}
            <span className="item-count">0</span>
          </div>{/* End .filter-item */}
          <div className="filter-item">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="cat-3" />
              <label className="custom-control-label" htmlFor="cat-3">Bags</label>
            </div>{/* End .custom-checkbox */}
            <span className="item-count">4</span>
          </div>{/* End .filter-item */}
          <div className="filter-item">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="cat-4" />
              <label className="custom-control-label" htmlFor="cat-4">Jackets</label>
            </div>{/* End .custom-checkbox */}
            <span className="item-count">2</span>
          </div>{/* End .filter-item */}
          <div className="filter-item">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="cat-5" />
              <label className="custom-control-label" htmlFor="cat-5">Shoes</label>
            </div>{/* End .custom-checkbox */}
            <span className="item-count">2</span>
          </div>{/* End .filter-item */}
          <div className="filter-item">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="cat-6" />
              <label className="custom-control-label" htmlFor="cat-6">Jumpers</label>
            </div>{/* End .custom-checkbox */}
            <span className="item-count">1</span>
          </div>{/* End .filter-item */}
          <div className="filter-item">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="cat-7" />
              <label className="custom-control-label" htmlFor="cat-7">Jeans</label>
            </div>{/* End .custom-checkbox */}
            <span className="item-count">1</span>
          </div>{/* End .filter-item */}
          <div className="filter-item">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="cat-8" />
              <label className="custom-control-label" htmlFor="cat-8">Sportwear</label>
            </div>{/* End .custom-checkbox */}
            <span className="item-count">0</span>
          </div>{/* End .filter-item */}
        </div>{/* End .filter-items */}
      </div>{/* End .widget-body */}
    </div>{/* End .collapse */}
  </div>{/* End .widget */}
  </>
  )
}

export default Categorie