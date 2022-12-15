/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState , useEffect } from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import axios from 'axios';
// import { useParams } from "react-router-dom"
// import { string } from 'yup/lib/locale'
const element = document.querySelector('#delete-request .status');



const TableProduit= ({className}) => {

  const [getproduits, setProduits] = useState([])
  const [getcategories, setcategories] = useState([])
  const [loading, setLoading] = useState(false)

  // start function get all categorie
  const getAllCategorie = async ()=> {
    const  categories = await axios.get(
      'http://localhost:8000/api/categories/getAll'
    );
    // console.log(categories.data)
    setcategories(categories.data)
    setLoading(true)
  }
  useEffect(() => {
    getAllCategorie()
  } , []);
  console.log(getcategories)
  // end function get all categorie


  // delet poduit
  const deletproduit = async (id) =>{
    // const id = useParams()
    // console.log(id)
    await  axios.delete(`http://localhost:8000/api/produit/delete/${id}`)
    .then(() => element.innerHTML = 'Delete successful');
  }

// get all produits 
 const getAllproduits = async ()=> {
    const  {data}  = await axios.get(
      'http://localhost:8000/api/produit/getall'
    );
    setProduits(data.AllProduit)
    setLoading(true)
  }
  useEffect(() => {
    getAllproduits()
    getAllCategorie()
  } , []);
  
  // console.log( getproduits)
  
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>New Arrivals</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Over 500 new products</span>
        </h3>
        <div className='card-toolbar'>
          {/* <a href='#' className='btn btn-sm btn-light-primary'>
            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
            New Produit
          </a> */}



<div className='card-toolbar'>
          <button className='btn btn-sm btn-light-primary'
           data-bs-toggle="modal"
           data-bs-target="#kt_modal_1"
           >
            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
            New Produit
          </button>
        </div>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button>

          {/* form add */}
          <div className="modal fade" tabIndex={-1} id="kt_modal_1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Produit</h5>
                  <div
                    className="btn btn-icon btn-sm btn-active-light-primary ms-2"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <KTSVG
                      path="/media/icons/duotune/arrows/arr061.svg"
                      className="svg-icon svg-icon-2x"
                    />
                  </div>
                </div>
                <div className="modal-body">
                  {/* start form add produit */}
                  <form className="form">
                  <div className="image-upload">
                    <label for="file-input">
                      <img   src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png"/>
                    </label>

                    <input id="file-input" type="file" />
                    </div>

                  <div className="mb-10">
                      <label className="form-label">Title</label>
                      <input type="text" name=' title' className="form-control" placeholder="title" />

                      <label className="form-label">Description</label>
                      <input type="text" name=' description' className="form-control" placeholder="description" />

                      <label className="form-label">Price</label>
                      <input type="text" name=' price' className="form-control" placeholder="price" />

                      <label className="form-label">OldPrice</label>
                      <input type="text" name=' oldprice' className="form-control" placeholder="oldprice" />

                      <label className="form-label">Quantite</label>
                      <input type="text" name=' quantite' className="form-control" placeholder="quantite" />

                      <label className="form-label">Promotion</label>
                      <input type="text" name=' promotion' className="form-control" placeholder="promotion" />
                    
                      <label className="form-label">Categorie</label>
                        
                      <select className="form-select" aria-label="Select example">
                            { getcategories.map((item  ) => (
                        <option value={item.id}>{item.categorie}</option>
                        ))}
                      </select>
                      </div> 
                  </form>
                  {/* end form add produit */}
                
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-light"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
  

        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted bg-light'>
                <th className='ps-4 min-w-325px rounded-start'>Product</th>
                <th className='min-w-125px text-center'>title</th>
                <th className='min-w-125px text-center'>description</th>
                <th className='min-w-200px text-center'>price</th>
                <th className='min-w-150px text-center'>oldprice</th>
                <th className='min-w-150px text-center'>quantite</th>
                <th className='min-w-150px text-center'>promotion</th>


                <th className='min-w-200px text-end rounded-end'></th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
            { getproduits.map((item  ) => (
                <tr key={item.id}>


                  {/* <tr> */}


                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-50px me-5'>
                      <img 
                        // src={`http://localhost:8000/images/1670857435031.png`}
                        src={`http://localhost:8000${item.image}`}

                        className=''
                        alt=''
                      />
                    </div>
                    
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6 text-center'>
                  {item.title}
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Paid</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6 text-center'>
                  {item.description}
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Rejected</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6 text-center'>
                  {item.price}
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Rejected</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6 text-center'>
                  {item.oldprice}
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Rejected</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6 text-center'>
                  {item.quantite}
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Insurance</span> */}
                </td>
                <td>
                <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6 text-center'>
                  {item.promotion}
                  </a>
                  {/* <span className='badge badge-light-primary fs-7 fw-semibold'>Approved</span> */}
                </td>
                <td className='text-end'>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                  </a>

                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </a>

                  <a href={'' } onClick={() => deletproduit(item.id)}className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    {/* <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' /> */}
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />

                  </a>

                </td>
              </tr> 
               ))} 





            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {TableProduit }
