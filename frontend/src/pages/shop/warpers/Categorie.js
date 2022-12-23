// import React, {useState, useEffect} from 'react'
// import axios from 'axios'
// import { Filter } from 'react-admin'

// function Categorie() {

//   const [categories, setCategories] = useState([])

//   const getCategories = async()=>{
//     axios.get("http://localhost:8000/api/categories/getall").then((Response)=>{
//       setCategories(Response.data);
//       console.log(Response.data);
//     }).catch((error)=>{
//       console.log(error);
//     })
//   }

//   const filterByCategorie = async(id)=>{
//     console.log(id);
//   }

//   const [AllProducts, setAllProducts] = useState([])
//   const url = "http://localhost:8000"
//   const getAllProducts = async()=>{
//     axios.get("http://localhost:8000/api/produit/getall").then((Response)=>{
//       console.log(Response.data.AllProduit);
//       setAllProducts(Response.data.AllProduit);
//     }).catch((error)=>{
//       console.log(error);
//     })
//   }


//   useEffect(() => {
//     getCategories();
//   }, [])
  

//   {categories.map((categorie)=>{
//     return(
//       <div className="filter-item">
//         <div className="custom-control custom-checkbox">
//           <input type="checkbox" className="custom-control-input" id={"cat-"+categorie.id} onChange={()=>filterByCategorie(categorie.id)} />
//           <label className="custom-control-label" htmlFor={"cat-"+categorie.id}>{categorie.categorie}</label>
//         </div>{/* End .custom-checkbox */}
//         <span className="item-count">0</span>
//       </div>
//     )
//   })}
// }

// export default Categorie