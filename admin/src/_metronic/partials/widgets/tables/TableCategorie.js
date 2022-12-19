/* eslint-disable jsx-a11y/anchor-is-valid */
import React , {useState, useEffect} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import axios from 'axios'

// type Props = {
//   className: string
// }

const TableCategogie = ({className}) => {

  const [categories, setCategories] = useState([])
  const [formData, setFormData] = useState({})
  const [updateInput, setupdateInput] = useState(false)


  const showData = async(categorie, id)=>{
    await setFormData({categorie:categorie,id:id});
    console.log(formData);
  }

  const onChange = (e)=>{
		setFormData((prevState) =>({
			...prevState,
			[e.target.name]:e.target.value
		}))
	}

  const getAllCategories = async()=>{
    axios.get('http://localhost:8000/api/categories/getAll').then((response)=>{
      setCategories(response.data)
      console.log(response.data);
    }).catch((error)=>{
      console.log(error);
    })
  }

  const addCategorie = async(e)=>{
    e.preventDefault();
    axios.post('http://localhost:8000/api/categories/add',formData).then((response)=>{
      console.log(response.data);
      getAllCategories();
    }).catch((error)=>{
      console.log(error);
    })
  }


  const deleteCategorie = async(id)=>{
    console.log(id);
    axios.delete(`http://localhost:8000/api/categories/delete/${id}`).then((response)=>{
      console.log(response.data);
      getAllCategories();
    }).catch((error)=>{
      console.log(error);
    })
  }

  const updateCategorie = async()=>{
    axios.put(`http://localhost:8000/api/categories/update/${formData.id}`,formData).then((response)=>{
      console.log(response.data);
      getAllCategories();
    }).catch((error)=>{
      console.log(error);
    })
  }

  useEffect(() => {
    getAllCategories();
  } , []);


  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>All Categories</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Over 500 members</span>
        </h3>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to add a user'
        >
          <a
            href='#'
            className='btn btn-sm btn-light-primary'
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_1"
            // data-bs-toggle='modal'
            // data-bs-target='#kt_modal_invite_friends'
          >
            <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
            New Categorie
          </a>

          <div className="modal fade" tabIndex={-1} id="kt_modal_1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">New Categorie</h5>
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
                  <form>
                  <div className="">
                    <label className="form-label">Categorie</label>
                    <input onChange={onChange}
                      type="text"
                      className="form-control"
                      placeholder="categorie"
                      name='categorie'
                      value={formData.categorie}
                    />
                  </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-light"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" onClick={addCategorie} className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" tabIndex={-1} id="kt_modal_2">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">update Categorie</h5>
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
                  <form>
                  <div className="">
                    <label className="form-label">Categorie</label>
                    <input onChange={onChange}
                      type="text"
                      className="form-control"
                      placeholder="categorie"
                      name='categorie'
                      value={formData.categorie}
                    />
                  </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-light"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" onClick={updateCategorie} className="btn btn-primary">
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
      <div className='card-body py-3 d-flex gap-3 flex-wrap'>
        {/* begin::Table container */}
        

        {categories.map((categorie)=>{
            return(
            <div className="card card-custom shadow">
          <div className="card-header">
          
              <h3 className="card-title">{categorie.categorie}</h3>
              <div className="card-toolbar">
              <div className='text-end'>
                  <a onClick={() => showData(categorie.categorie, categorie.id)}
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_2"
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </a>

                  <a onClick={() => deleteCategorie(categorie.id)} className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                  </a>

                </div>
              </div>
              
          </div>
        </div>
            )
        })}
        

        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {TableCategogie}
