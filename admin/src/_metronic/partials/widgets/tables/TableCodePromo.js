/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import axios from 'axios'
import { useState , useEffect } from 'react'
import {useParams } from 'react-router-dom';
import {KTSVG} from '../../../helpers'


import "bootstrap/dist/css/bootstrap.css";


const handleSubmit = (values) => {
  console.log(values)
};

const TableCodePromo = ({className}) => {
  
  // const { id } = useParams();


  const [codepromo, setCodepromo] = useState([])
  const [update , SetUpdate] = useState('')
  const [loading, setLoading] = useState(false)
  const [code_promo, setCodePromo] = useState("")
  const [pourcentage_promo, setBourcentagePromo] = useState("")
  const [date_expiration, setDateExpiration] = useState("")

  const getCodepromo = async () => {
   
    const res = await axios.get('http://localhost:8000/api/codePromo/getAllCodePromo')
    setCodepromo(res.data)
    setLoading(true)
  }

  useEffect(() => {
    getCodepromo()
    SetUpdate('all data')
  }, [update])
  console.log(codepromo)
  
  const CodePromo =(e)=>{
    // e.preventDefault()
    
    axios.post('http://localhost:8000/api/codePromo/creatPromoCode', {
      
      code_promo: code_promo,
      pourcentage_promo: pourcentage_promo,
      date_expiration: date_expiration,
      
    })
    .then(result => {
    SetUpdate('add data')
    setLoading(true)

   
    console.log(result)

  })
  .catch(err => {
    console.log(err)
   
  })
}
  
const deletCodePromo = (id)=> {
  // Simple DELETE request with axios
  axios.delete(`http://localhost:8000/api/codePromo/deletePromoCode/${id}`)
  .then(result => {
    SetUpdate('delete data')
    setLoading(true)

   
    console.log(result)

  })
  .catch(err => {
    console.log(err)
   
  })
     
}

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Recent Code promos</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Over 500 orders</span>
        </h3>
        <div className='card-toolbar'>
   <button type="button"
  className="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#kt_modal_1">
New Code Promo
</button>

<div className="modal fade" tabIndex={-1} id="kt_modal_1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
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
     
        <div className="form-group mb-3">
            <label htmlFor="code_promo">
            code_promo:
            </label>
        </div>
        <div className="form-group mb-3">
            <label htmlFor="pourcentage_promo">
            pourcentage_promo:
            </label>
           
           
        </div>
        <div className="form-group mb-3">
            <label htmlFor="date_expiration">
            date_expiration:
            </label>
          
        </div>
        <div className="form-group form-check mb-5">
          
            <label
                htmlFor="acceptTerms"
                className="form-check-label"
            >
                J'ai lu et j'accepte
                les conditions
            </label>
         
        </div>
        <div className="form-group d-flex justify-content-end gap-3">
            <button
            type="submit" 
            onClick={CodePromo} 
               
                className="btn btn-primary"
            >
               save
            </button>
            <button
                type="button"
               
                className="btn btn-danger"
            >
                Close
            </button>
        </div>
 

      </div>
    
    </div>
  </div>
</div>
        {/* <div className='card-toolbar'>
          <a href='#' className='btn btn-sm btn-light-primary'>
            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
            New Code Promo
          </a>
        </div> */}
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
          {/* begin::Menu 2 */}
          <div
            className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px'
            data-kt-menu='true'
          >
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <div className='menu-content fs-6 text-dark fw-bold px-3 py-4'>Quick Actions</div>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu separator */}
            <div className='separator mb-3 opacity-75'></div>
            {/* end::Menu separator */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <a href='#' className='menu-link px-3'>
                New Ticket
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <a href='#' className='menu-link px-3'>
                New Customer
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div
              className='menu-item px-3'
              data-kt-menu-trigger='hover'
              data-kt-menu-placement='right-start'
              data-kt-menu-flip='left-start, top'
            >
              {/* begin::Menu item */}
              <a href='#' className='menu-link px-3'>
                <span className='menu-title'>New Group</span>
                <span className='menu-arrow'></span>
              </a>
              {/* end::Menu item */}
              {/* begin::Menu sub */}
              <div className='menu-sub menu-sub-dropdown w-175px py-4'>
                {/* begin::Menu item */}
                <div className='menu-item px-3'>
                  <a href='#' className='menu-link px-3'>
                    Admin Group
                  </a>
                </div>
                {/* end::Menu item */}
                {/* begin::Menu item */}
                <div className='menu-item px-3'>
                  <a href='#' className='menu-link px-3'>
                    Staff Group
                  </a>
                </div>
                {/* end::Menu item */}
                {/* begin::Menu item */}
                <div className='menu-item px-3'>
                  <a href='#' className='menu-link px-3'>
                    Member Group
                  </a>
                </div>
                {/* end::Menu item */}
              </div>
              {/* end::Menu sub */}
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <a href='#' className='menu-link px-3'>
                New Contact
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu separator */}
            <div className='separator mt-3 opacity-75'></div>
            {/* end::Menu separator */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <div className='menu-content px-3 py-3'>
                <a className='btn btn-primary btn-sm px-4' href='#'>
                  Generate Reports
                </a>
              </div>
            </div>
            {/* end::Menu item */}
          </div>
          {/* end::Menu 2 */}
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                <th className='w-25px'>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='1'
                      data-kt-check='true'
                      data-kt-check-target='.widget-13-check'
                    />
                  </div>
                </th>
                <th className='min-w-150px'>Order Id</th>
                <th className='min-w-140px'>code promo</th>
                <th className='min-w-120px'>pourcentage promo</th>
                <th className='min-w-120px'>date expiration</th>
              

              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}


            
            <tbody>
                 
              { codepromo.map((item  ) => (
                <tr key={item.id}>
                {/* <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-13-check' type='checkbox' value='1' />
                  </div>
                </td> */}
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                 
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'> {item.id}</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                  {item.code_promo}
                 
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>code promo</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                  {item.pourcentage_promo}
                
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>pourcentage</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                  {item.date_expiration}
                
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>date</span>
                </td>
                <td className='text-dark fw-bold text-hover-primary fs-6'> </td>
                
                <td>
                  <span className='badge badge-light-info'>Rejected</span>
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
                  <a href='#' onClick={() => deletCodePromo(item.id)}  className= 'btn btn-icon btn-bg-light btn-active-color-primary btn-sm' >
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

export {TableCodePromo}
