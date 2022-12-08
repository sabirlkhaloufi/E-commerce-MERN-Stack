import React from 'react'

function Price() {
  return (
    <><div className="widget widget-collapsible">
    <h3 className="widget-title">
      <a data-toggle="collapse" href="#widget-5" role="button" aria-expanded="true" aria-controls="widget-5">
        Price
      </a>
    </h3>{/* End .widget-title */}
    <div className="collapse show" id="widget-5">
      <div className="widget-body">
        <div className="filter-price">
          <div className="filter-price-text">
            Price Range:
            <span id="filter-price-range">$0 - $750</span>
          </div>{/* End .filter-price-text */}
          <div id="price-slider" className="noUi-target noUi-ltr noUi-horizontal"><div className="noUi-base"><div className="noUi-connects"><div className="noUi-connect" style={{transform: 'translate(0%, 0px) scale(0.75, 1)'}} /></div><div className="noUi-origin" style={{transform: 'translate(-100%, 0px)', zIndex: 5}}><div className="noUi-handle noUi-handle-lower" data-handle={0} tabIndex={0} role="slider" aria-orientation="horizontal" aria-valuemin={0.0} aria-valuemax={550.0} aria-valuenow={0.0} aria-valuetext="$0"><div className="noUi-touch-area" /><div className="noUi-tooltip">$0</div></div></div><div className="noUi-origin" style={{transform: 'translate(-25%, 0px)', zIndex: 4}}><div className="noUi-handle noUi-handle-upper" data-handle={1} tabIndex={0} role="slider" aria-orientation="horizontal" aria-valuemin={200.0} aria-valuemax={1000.0} aria-valuenow={750.0} aria-valuetext="$750"><div className="noUi-touch-area" /><div className="noUi-tooltip">$750</div></div></div></div></div>{/* End #price-slider */}
        </div>{/* End .filter-price */}
      </div>{/* End .widget-body */}
    </div>{/* End .collapse */}
  </div>{/* End .widget */}</>
  )
}

export default Price