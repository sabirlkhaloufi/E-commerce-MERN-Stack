/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState , useEffect } from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import axios from 'axios';
// import { useParams } from "react-router-dom"
// import { string } from 'yup/lib/locale'
const element = document.querySelector('#delete-request .status');



const TableProduit= ({className}) => {

  const [getproduits, setProduits] = useState([])
  const [loading, setLoading] = useState(false)

  const deletproduit = async (id) =>{
    // const id = useParams()
    // console.log(id)
    await  axios.delete(`http://localhost:8000/api/produit/delete/${id}`)
    .then(() => element.innerHTML = 'Delete successful');
  }
    useEffect(() => {
      deletproduit()
    } , []);




 const getAllproduits = async ()=> {
    const  {data}  = await axios.get(
      'http://localhost:8000/api/produit/getall'
    );
    setProduits(data.AllProduit)
    setLoading(true)
  }
  useEffect(() => {
    getAllproduits()
  } , []);
  
  console.log( getproduits)
  
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>New Arrivals</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Over 500 new products</span>
        </h3>
        <div className='card-toolbar'>
          <a href='#' className='btn btn-sm btn-light-primary'>
            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
            New Produit
          </a>
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
