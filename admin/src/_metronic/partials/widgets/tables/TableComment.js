/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useState , useEffect } from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import axios from 'axios'
import { string } from 'yup/lib/locale'
// import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Import React FilePond
import { FilePond, File, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import { async } from 'q'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const TableComment= ({className}) => {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [image, setImage] = useState([])
  const [content, setContent] = useState("")
  const [update , setUpdate] = useState("")


  const deleteComment = async (id) => {
    console.log(id)
    await axios.delete(`http://localhost:8000/api/comments/${id}`)
    setUpdate("delete")


  }


  const getComments = async () => {
    const res = await axios.get('http://localhost:8000/api/comments')
    setComments(res.data)
    setUpdate("selectall")
    setLoading(true)
  }

  useEffect(() => {
    getComments()
  }, [ update ])

  const handleAdd = async (e) => {
    e.preventDefault()
    let config = {
      method: 'post',
      url: 'http://localhost:8000/api/comments',
      headers: {
        "content-type": "application/json",
        'Content-Type': 'multipart/form-data'
      },
      data : JSON.stringify({
        content: content
      })

    }
    axios(config)
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
    alert('Comment added successfully')
  }
  const handleEdit = async (e) => {
    e.preventDefault()
    let config = {
      method: 'put',
      url: 'http://localhost:8000/api/comments/1',
      headers: {
        "content-type": "application/json",
        'Content-Type': 'multipart/form-data'
      },
      data : JSON.stringify({
        content: content
      })

    }
    axios(config)
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
    alert('Comment edited successfully')
  }


  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Member Statistics</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Over 500 new members</span>
        </h3>
        <div className='card-toolbar'>
        <div className='card-toolbar'>
          <button className='btn btn-sm btn-light-primary'
           data-bs-toggle="modal"
           data-bs-target="#kt_modal_1"
           >
            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
            New Comment
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
                  <form className="form" method='post' encType='multipart/form-data' onSubmit={handleAdd}>
                      <div className="mb-10">
                       <FilePond
                          files={image}
                          value={image}
                          allowMultiple={false}
                          allowReorder={true}
                          allowRemove={true}
                          credits={false}

                          name="image"
                          server={
                            {
                              process: (fieldName, file, metadata, load, error, progress, abort) => {
                                // console.log('file',file)
                                // console.log('fieldName',fieldName)
                                // console.log('metadata',metadata)
                                const formData = new FormData()
                                formData.append(fieldName, file, file.name)
                                // with axios
                                axios.post('http://localhost:8000/api/comments/upload', formData, {
                                  onUploadProgress: (e) => {
                                    progress(e.lengthComputable, e.loaded, e.total)
                                  }
                                })
                                  .then(res => {
                                    console.log('res',res)
                                    load(res.data)
                                  })
                                  .catch(err => {
                                    console.log('err',err)
                                    error('oh no')
                                  })

                                // const request = new XMLHttpRequest()
                                // request.open('POST', 'http://localhost:8000/api/comments')
                                // request.upload.onprogress = (e) => {
                                //   progress(e.lengthComputable, e.loaded, e.total)
                                // }
                                // request.onload = function () {
                                //   if (request.status >= 200 && request.status < 300) {
                                //     load(request.responseText)
                                //   } else {
                                //     error('oh no')
                                //   }
                                // }
                                // request.send(formData)
                                // return {
                                //   abort: () => {
                                //     request.abort()
                                //     abort()
                                //   }
                                // }
                              }



                          }
                          }
                          
                          onupdatefiles={
                            (fileItems) => {
                              console.log('test',fileItems.map(fileItem => fileItem.file))
                              setImage(fileItems.map(fileItem => fileItem.file))
                            }
                          }
                          maxFiles={1}
                          labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                      />
                      {/* <label className="form-label">image </label> */}
                      {/* <input type="file"
                       name='image'
                        className="form-control"
                        value={image}
                        onChange={(e) => setImage(e.target.value)} 
                        /> */}
                    </div>
                  <div className="mb-10">
                      <label className="form-label">Content</label>
                      <input
                        type="text"
                        name='content'
                        className="form-control"
                        placeholder="bla bla bla"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                      />
                      </div>
                      <div className="mb-10">
                      <label className="form-label">Produit Related </label>
                      <select className="form-select" aria-label="Select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>

                     
                      <div className="mb-10">
                      <label className="form-label">User Related </label>
                      <select className="form-select form-select-solid" aria-label="Select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-light"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </form>
                 
                </div>
              </div>
            </div>
          </div>
          {/* form edit */}
          <div className="modal fade" tabIndex={-1} id="#editcomment">
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
                  <form className="form" method='post' encType='multipart/form-data' onSubmit={handleEdit}>
                      <div className="mb-10">
                       <FilePond
                          files={image}
                          value={image}
                          allowMultiple={false}
                          allowReorder={true}
                          allowRemove={true}
                          credits={false}

                          name="image"
                          server={
                            {
                              process: (fieldName, file, metadata, load, error, progress, abort) => {
                                // console.log('file',file)
                                // console.log('fieldName',fieldName)
                                // console.log('metadata',metadata)
                                const formData = new FormData()
                                formData.append(fieldName, file, file.name)
                                // with axios
                                axios.post('http://localhost:8000/api/comments/upload', formData, {
                                  onUploadProgress: (e) => {
                                    progress(e.lengthComputable, e.loaded, e.total)
                                  }
                                })
                                  .then(res => {
                                    console.log('res',res)
                                    load(res.data)
                                  })
                                  .catch(err => {
                                    console.log('err',err)
                                    error('oh no')
                                  })

                                // const request = new XMLHttpRequest()
                                // request.open('POST', 'http://localhost:8000/api/comments')
                                // request.upload.onprogress = (e) => {
                                //   progress(e.lengthComputable, e.loaded, e.total)
                                // }
                                // request.onload = function () {
                                //   if (request.status >= 200 && request.status < 300) {
                                //     load(request.responseText)
                                //   } else {
                                //     error('oh no')
                                //   }
                                // }
                                // request.send(formData)
                                // return {
                                //   abort: () => {
                                //     request.abort()
                                //     abort()
                                //   }
                                // }
                              }



                          }
                          }
                          
                          onupdatefiles={
                            (fileItems) => {
                              console.log('test',fileItems.map(fileItem => fileItem.file))
                              setImage(fileItems.map(fileItem => fileItem.file))
                            }
                          }
                          maxFiles={1}
                          labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                      />
                      {/* <label className="form-label">image </label> */}
                      {/* <input type="file"
                       name='image'
                        className="form-control"
                        value={image}
                        onChange={(e) => setImage(e.target.value)} 
                        /> */}
                    </div>
                  <div className="mb-10">
                      <label className="form-label">Content</label>
                      <input
                        type="text"
                        name='content'
                        className="form-control"
                        placeholder="bla bla bla"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                      />
                      </div>
                      <div className="mb-10">
                      <label className="form-label">Produit Related </label>
                      <select className="form-select" aria-label="Select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>

                     
                      <div className="mb-10">
                      <label className="form-label">User Related </label>
                      <select className="form-select form-select-solid" aria-label="Select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-light"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </form>
                 
                </div>
              </div>
            </div>
          </div>

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
          <table className='table align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted bg-light'>
                <th className='ps-4 min-w-300px rounded-start'>Agent</th>
                {/* <th className='min-w-125px'>Earnings</th>
                <th className='min-w-125px'>Comission</th>
                <th className='min-w-200px'>Company</th> */}
                <th className='min-w-150px'>Rating</th>
                <th className='min-w-200px text-end rounded-end'></th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              { comments.map((item  ) => (
                <tr key={item.id}>

                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-50px me-5'>
                      <span className='symbol-label bg-light'>
                        <img
                          src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                          className='h-75 align-self-end'
                          alt=''
                        />
                      </span>
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        {item.id}
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                       {item.content}
                      </span>
                    </div>
                  </div>
                </td>
                {/* <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    $8,000,000
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Pending</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    $5,400
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Paid</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    Intertico
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                    Web, UI/UX Design
                  </span>
                </td> */}
                <td>
                  <div className='rating'>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-7 mt-1'>
                    Best Rated
                  </span>
                </td>
                <td className='text-end'>
                  <a
                    href='#' onClick={() => deleteComment(item.id)}
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2'
                  >
                    delete comment
                  </a>
                  {/* <button
                    // href='#'
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4'
                    data-bs-toggle="modal"
                    data-bs-target={"#editcomment"}
                  >
                    Edit
                  </button> */}
                </td>
              </tr>
              ))}


              {/* <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-50px me-5'>
                      <span className='symbol-label bg-light'>
                        <img
                          src={toAbsoluteUrl('/media/svg/avatars/047-girl-25.svg')}
                          className='h-75 align-self-end'
                          alt=''
                        />
                      </span>
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Lebron Wayde
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        PHP, Laravel, VueJS
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    $8,750,000
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Paid</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    $7,400
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Paid</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    Agoda
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                    Houses &amp; Hotels
                  </span>
                </td>
                <td>
                  <div className='rating'>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-7 mt-1'>
                    Above Avarage
                  </span>
                </td>
                <td className='text-end'>
                  <a
                    href='#'
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2'
                  >
                    View
                  </a>
                  <a
                    href='#'
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4'
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-50px me-5'>
                      <span className='symbol-label bg-light'>
                        <img
                          src={toAbsoluteUrl('/media/svg/avatars/006-girl-3.svg')}
                          className='h-75 align-self-end'
                          alt=''
                        />
                      </span>
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Brad Simmons
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        HTML, JS, ReactJS
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    $8,000,000
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>In Proccess</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    $2,500
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Rejected</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    RoadGee
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Paid</span>
                </td>
                <td>
                  <div className='rating'>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-7 mt-1'>
                    Best Rated
                  </span>
                </td>
                <td className='text-end'>
                  <a
                    href='#'
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2'
                  >
                    View
                  </a>
                  <a
                    href='#'
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4'
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-50px me-5'>
                      <span className='symbol-label bg-light'>
                        <img
                          src={toAbsoluteUrl('/media/svg/avatars/014-girl-7.svg')}
                          className='h-75 align-self-end'
                          alt=''
                        />
                      </span>
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Natali Trump
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        HTML, JS, ReactJS
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    $700,000
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Pending</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    $7,760
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Paid</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    The Hill
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Insurance</span>
                </td>
                <td>
                  <div className='rating'>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-7 mt-1'>Avarage</span>
                </td>
                <td className='text-end'>
                  <a
                    href='#'
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2'
                  >
                    View
                  </a>
                  <a
                    href='#'
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4'
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-50px me-5'>
                      <span className='symbol-label bg-light'>
                        <img
                          src={toAbsoluteUrl('/media/svg/avatars/020-girl-11.svg')}
                          className='h-75 align-self-end'
                          alt=''
                        />
                      </span>
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Jessie Clarcson
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        HTML, JS, ReactJS
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    $1,320,000
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Pending</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    $6,250
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Paid</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    Intertico
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                    Web, UI/UX Design
                  </span>
                </td>
                <td>
                  <div className='rating'>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                    <div className='rating-label me-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                  </div>
                  <span className='text-muted fw-semibold text-muted d-block fs-7 mt-1'>
                    Best Rated
                  </span>
                </td>
                <td className='text-end'>
                  <a
                    href='#'
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2'
                  >
                    View
                  </a>
                  <a
                    href='#'
                    className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4'
                  >
                    Edit
                  </a>
                </td>
              </tr> */}
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

export {TableComment}
