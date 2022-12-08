import React from 'react'

function BarRechercheShop() {
  return (
    <> <div className="toolbox">

    <div className="toolbox-right">
      <div className="toolbox-sort">
        <label htmlFor="sortby">Sort by:</label>
        <div className="select-custom">
          <select name="sortby" id="sortby" className="form-control">
            <option value="popularity" selected="selected">Most Popular</option>
            <option value="rating">Most Rated</option>
            <option value="date">Date</option>
          </select>
        </div>
      </div>{/* End .toolbox-sort */}
    
    </div>{/* End .toolbox-right */}
  </div>{/* End .toolbox */}</>
  )
}

export default BarRechercheShop