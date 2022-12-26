/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState , useEffect } from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import axios from 'axios';

const TableProduit= ({className}) => {

  const [getproduits, setProduits] = useState([])
  const [getcategories, setcategories] = useState([])
  const [oneproduit,setoneproduit] = useState({})
  const [loading, setLoading] = useState(false)
  const [updateImage, setUpdateImage] = useState('')
  const [alert, setAlert] = useState("")

  const handleChangeOnUpdate = (e) => {
    setoneproduit({
      ...oneproduit,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeImageOnUpdate = (e) => {
    setUpdateImage(e.target.files[0])
  }
  
  // start function get all categorie
  const getAllCategorie = async ()=> {
    const  categories = await axios.get(
      'http://localhost:8000/api/categories/getAll'
    );
    // console.log(categories.data)
    setcategories(categories.data)
    setLoading(true)
  }
  // end function get all categorie

  // get all produits 
 const getAllproduits = async ()=> {
   await axios.get(
    'http://localhost:8000/api/produit/getall'
  ).then(({data})=>{
    setProduits(data.AllProduit)
    // console.log(data.AllProduit);
    // console.log('item.image',data.AllProduit)
  }).catch((error)=>{
    console.log(error);
  })
}

  // delet poduit
  const deletproduit = async (id) =>{
    await  axios.delete(`http://localhost:8000/api/produit/delete/${id}`)
    .then((response)=>{
      // console.log(response.data);
      getAllproduits();
    }).catch((error)=>{
      console.log(error);
    })
  }

  const getoneproduit = async (id) =>{
    console.log(id)
     await  axios.get(`http://localhost:8000/api/produit/getone/${id}`)
    .then((response)=>{
      setoneproduit(response.data.OneProduit)
    }).catch((error)=>{
      console.log(error);
    })
  }
  

  useEffect(() => {
    getAllproduits()
    getoneproduit();
    getAllCategorie()
  } , [oneproduit , alert]);
 
  // start function add produit --------------------------------
  const [ image, setImage ] = useState('');
  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ price, setPrice ] = useState('');
  const [ oldprice, setOldprice ] = useState('');
  const [ quantite, setQuantite ] = useState('');
  const [ promotion, setPromotion ] = useState('');
  const [ categorie, setCategorie ] = useState('');

  const handleUpdate = async (e, id) => {
    e.preventDefault()
    console.log("test",oneproduit)
    const formData = new FormData();
    formData.append('image',updateImage);
    
    formData.append('title', oneproduit.title);
    formData.append('description', oneproduit.description);
    formData.append('price', oneproduit.price);
    formData.append('oldprice', oneproduit.oldprice);
    formData.append('quantite', oneproduit.quantite);
    formData.append('promotion', oneproduit.promotion);
    formData.append('categorie', oneproduit.categorie);
    
    

    let config = {
    method: "post",
    url: `http://localhost:8000/api/produit/update/${id}`,
    headers: {
      "content-type": "application/json",
      "content-type": "multipart/form-data"
    },
    data: formData,
  };
 await axios(config)
    .then((res) => {
      // getAllproduits();
        console.log(('update produit is valid'))
        console.log(res.data)
        setAlert(res.data.title,"is updated ")
        console.log(alert)

    })
    .catch((error) => {
        console.log(error)
    })

  }
  
  const handleAdd = (e) => {
    e.preventDefault()
        const formData = new FormData(e.target);
        formData.append('image',image);
        formData.get('title');
        formData.get('description');
        formData.get('price');
        formData.get('oldprice');
        formData.get('quantite');
        formData.get('promotion');
        formData.get('categorie');
        // console.log("form data" ,formData)
        // console.log('categorie',categorie)
        // if( !image || !title || !description || !price || !oldprice || !quantite || !promotion || !categorie ) {
        // return( alert("fill in alll details"))
        // }
      
        let config = {
        method: "post",
        url: "http://localhost:8000/api/produit/add",
        headers: {
          "content-type": "application/json",
          "content-type": "multipart/form-data"
        },
        data: formData,
      };
      axios(config)
                .then((res) => {
                  getAllproduits();
                  setAlert("produit added")
                    console.log(('create produit is valid'))
                    // console.log(formData)
                    

                })
                .catch((error) => {
                    console.log(error)
                })
    }
  // end function add produit --------------------------------
  
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}

      {/* <div>
        id : {oneproduit.id} 
        <br/>

        title : {oneproduit.title}

      </div> */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>New Arrivals</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Over 500 new products</span>
        </h3>
        <div className='card-toolbar'>
          
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

          {/* ----------- start form update -------------- */}
          
          <div className="modal fade" tabIndex={-1} id="kt_modal_2">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Update Produit</h5>
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

                  
                  <form className="form" onSubmit={(e)=>handleUpdate(e, oneproduit.id)} method="post" encType='multipart/form-data'>
                  <div className="image-upload">
                    <label htmlFor="file-input">
                      <img   src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png"/>
                    </label>
                      
                    <input id="file-input" type="file" accept=".png, .jpg, .jpeg" name="image"  onChange={handleChangeImageOnUpdate}  multiple/>
                    </div>

                  <div className="mb-10">
                      <label className="form-label">Title</label>
                      <input type="text" name='title'  className="form-control" value={oneproduit.title} onChange={handleChangeOnUpdate} placeholder="title" 
                      />
                      <label className="form-label">Description</label>
                      <input type="text" name='description' className="form-control" value={oneproduit.description} onChange={handleChangeOnUpdate} placeholder="description" 
                      />
                      <label className="form-label">Price</label>
                      <input type="number" name='price' className="form-control" value={oneproduit.price} onChange={handleChangeOnUpdate} placeholder="price" 
                      />
                      <label className="form-label">OldPrice</label>
                      <input type="number" name='oldprice' className="form-control" value={oneproduit.oldprice} onChange={handleChangeOnUpdate} placeholder="oldprice"
                      />
                      <label className="form-label">Quantite</label>
                      <input type="number" name='quantite' className="form-control"  value={oneproduit.quantite} onChange={handleChangeOnUpdate} placeholder="quantite" 
                      />
                      <label className="form-label">Promotion</label><br/>
                      <select className="form-select" name='promotion' value={oneproduit.promotion}  onChange={handleChangeOnUpdate } aria-label="Select example">
                        <option value='false' >non</option>
                        <option value='true'  >Oui</option>
                      </select>
                      <label className="form-label">Categorie</label>
                      <select className="form-select" name='categorie' value={oneproduit.categorie}  onChange={handleChangeOnUpdate } aria-label="Select example">
                            { getcategories.map((item  ) => (
                        <option value={item.id}  key={item.id}>{item.categorie}</option>
                        ))}
                      </select>
                      </div> 
                      <div className="modal-footer ">
                  <button
                    type="button"
                    className="btn btn-light"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button  type="submit" data-bs-dismiss="modal" className="btn btn-primary" >
                    Save changes
                  </button>
                </div>
                  </form>
                  
                
                </div>
                
              </div>
            </div>
          </div>

          {/* -----------end form update -------------- */}

          {/* start form add */}
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
                  <form className="form" onSubmit={handleAdd} method="post" encType='multipart/form-data'>
                  <div className="image-upload">
                    <label htmlFor="file-input">
                      <img   src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png"/>
                    </label>

                    <input id="file-input" type="file" accept=".png, .jpg, .jpeg" name="image" onChange={(e) => setImage(e.target.value)}  multiple/>
                    </div>

                  <div className="mb-10">
                      <label className="form-label">Title</label>
                      <input type="text" name='title'  className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="title" 
                      />
                      <label className="form-label">Description</label>
                      <input type="text" name='description' className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="description" 
                      />
                      <label className="form-label">Price</label>
                      <input type="number" name='price' className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="price" 
                      />
                      <label className="form-label">OldPrice</label>
                      <input type="number" name='oldprice' className="form-control" value={oldprice} onChange={(e) => setOldprice(e.target.value)} placeholder="oldprice"
                      />
                      <label className="form-label">Quantite</label>
                      <input type="number" name='quantite' className="form-control"  value={quantite} onChange={(e) => setQuantite(e.target.value)} placeholder="quantite" 
                      />
                      <label className="form-label">Promotion</label><br/>
                      <select className="form-select" name='promotion' value={promotion}  onChange={(e) => setPromotion(e.target.value) } aria-label="Select example">
                        <option value='false' >non</option>
                        <option value='true'  >Oui</option>
                      </select>

                      <label className="form-label">Categorie</label>
                      <select className="form-select" name='categorie' value={categorie}  onChange={(e) => setCategorie(e.target.value) } aria-label="Select example">
                            { getcategories.map((item  ) => (
                        <option value={item.id}  key={item.id}>{item.categorie}</option>
                        ))}
                      </select>
                      </div> 
                      <div className="modal-footer ">
                  <button
                    type="button"
                    className="btn btn-light"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button  type="submit" data-bs-dismiss="modal" className="btn btn-primary" >
                    Save changes
                  </button>
                </div>
                  </form>
                  {/* end form add produit */}
                
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

                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-50px me-5'>
                    { item.image.map((img) => (
                      <img
                        src={`http://localhost:8000${[img]}`}
                        className=''
                        alt=''
                      />
                      ))}

                    </div>
                    
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6 text-center'>
                  {item.title}
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6 text-center'>
                  {item.description}
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6 text-center'>
                  {item.price}
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6 text-center'>
                  {item.oldprice}
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6 text-center'>
                  {item.quantite}
                  </a>
                </td>
                <td>
                <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6 text-center'>
                  {item.promotion}
                  </a>
                </td>
                <td className='text-end'>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                  </a>

                  <a
                    onClick={() => getoneproduit(item.id)}
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_2"
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </a>

                  <a onClick={() => deletproduit(item.id)} className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
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