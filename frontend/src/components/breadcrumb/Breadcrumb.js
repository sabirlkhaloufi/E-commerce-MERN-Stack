import React from 'react'

const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
<div className="container">
<ol className="breadcrumb">
<li className="breadcrumb-item"><a href="index.html">Home</a></li>
<li className="breadcrumb-item"><a href="#">Pages</a></li>
<li className="breadcrumb-item active" aria-current="page">Login</li>
</ol>
</div>{/* End .container */}
</nav>
  )
}

export default Breadcrumb