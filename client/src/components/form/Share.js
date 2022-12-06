// import { Alert } from "react-bootstrap";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import React, { useEffect , useState  } from "react";
import { Lang, useFormInputValidation } from "react-form-input-validation";
import { sendForgetPasswordEmail } from "../../utils/requests";
import { Link } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select'

function Share() {
    const [age, setAge] = React.useState('');

//   const handleChange = (event: SelectChangeEvent) => {
//     setAge(event.target.value as string);
//   };
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const [fields, errors, form] = useFormInputValidation({
    email: ""
  }, {
    email: "required|email"
  });

  
  form.useLang(Lang.en);

    const onSubmit = async (event) => {
    const isValid = await form.validate(event);
    console.log('isValid', isValid)
    if (isValid) {
        const email = fields.email ;
      try {
        const res = await sendForgetPasswordEmail(email);
        console.log(res);
        if (res.status === 200) {
          setSent(true);
        }
      } catch (error) {
        const errorMessage = error?.response?.data?.message || "something went wrong please try again later";
        setError(errorMessage);
        setSent(false);
        return;
      }
    }
  };
    if (sent) {
        return (
          <div className="login-form-box">
            <Alert severity="info">
              <AlertTitle>Check your email</AlertTitle>
              We have sent you an email with a link to — <strong>to reset your password.</strong>
            </Alert>
            <Link to="/login-register/login" className='rn-btn edu-btn w-100 mt--30 text-decoration-none text-center'>Login</Link>


          </div>
          
        );
      }
  if (!sent) {
    return (
      <div className="login-form-box">
          <h3 className="mb-30">ForgetPassword </h3>
          {error && <Alert variant="danger">{error}</Alert>}
          {error === false && <Alert variant="success">plaise checkout your email for reset password</Alert>}
          <form className="login-form" noValidate autoComplete="off" onSubmit={onSubmit}>
              <div className="input-box mb--30">
                  <label className="text-danger">{errors.email ? errors.email : ""}</label>
                  <input type="file" name='email'  onBlur={form.handleBlurEvent}  onChange={form.handleChangeEvent} value={fields.email} placeholder="Username or Email" />
              </div>
              <div className="input-box mb--30">
                  <label className="text-danger">{errors.email ? errors.email : ""}</label>
                  <input type="email" name='email'  onBlur={form.handleBlurEvent}  onChange={form.handleChangeEvent} value={fields.email} placeholder="Username or Email" />
              </div>



              <div className="d-flex flex-row justify-content-between mb--30">


                    <FormControl className='w-50 pe-1' >
                        <InputLabel id="demo-simple-select-label" >Specialite</InputLabel>
                        <Select
                        
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Spacilite"
                        onChange={setAge }
                        >
                        <MenuItem value={10}>biologie</MenuItem>
                        <MenuItem value={20}>geologie</MenuItem>
                        <MenuItem value={30}>physique</MenuItem>
                        <MenuItem value={30}>informatique</MenuItem>
                        <MenuItem value={30}>chimie</MenuItem>
                        <MenuItem value={30}>droit arabe</MenuItem>
                        </Select>
                </FormControl>
                    <FormControl className='w-50'>
                        <InputLabel id="demo-simple-select-label">Faculté</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Faculté"
                        onChange={setAge }
                        >
                        <MenuItem value={10}>fp safi</MenuItem>
                        <MenuItem value={20}>fp nador</MenuItem>
                        <MenuItem value={30}>fs agadir</MenuItem>
                        </Select>
                </FormControl>
                </div>
              <div className="d-flex flex-row justify-content-between mb--30">


                    <FormControl className='w-50 pe-1'>
                        <InputLabel id="demo-simple-select-label">catégorie</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="catégorie"
                        onChange={setAge }
                        >
                                <MenuItem value={10}>cour</MenuItem>
                                <MenuItem value={20}>travaux pratique</MenuItem>
                                <MenuItem value={30}>travaux dirige</MenuItem>
                                <MenuItem value={40}>travaux dirige</MenuItem>
                                <MenuItem value={50}>support</MenuItem>
                                <MenuItem value={60}>exmens</MenuItem>
                                <MenuItem value={70}>résumé</MenuItem>
                        </Select>
                </FormControl>
                    <FormControl className='w-50'>
                        <InputLabel id="demo-simple-select-label">annnéé</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="annnéé"
                        onChange={setAge }
                        >
                        <MenuItem value={10}>2014</MenuItem>
                        <MenuItem value={20}>2015</MenuItem>
                        <MenuItem value={30}>2016</MenuItem>
                        <MenuItem value={40}>2017</MenuItem>
                        <MenuItem value={50}>2018</MenuItem>
                        <MenuItem value={60}>2019</MenuItem>
                        
                        </Select>
                </FormControl>
                </div>
                <div className='mb--30'>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Module</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Module"
          onChange={setAge }
        >
          <MenuItem value={10}>biologie cellulaire</MenuItem>
          <MenuItem value={20}>genetique 1</MenuItem>
          <MenuItem value={30}>immunologie</MenuItem>
        </Select>
      </FormControl>
                </div>
                <div className="input-box mb--30">
                  <label className="text-danger">{errors.email ? errors.email : ""}</label>
                  <input type="email" name='email'  onBlur={form.handleBlurEvent}  onChange={form.handleChangeEvent} value={fields.email} placeholder="Username or Email" />
              </div>
              <button className="rn-btn edu-btn w-100 mb--30" type="submit" >
                  <span>Envoyer</span>
              </button>
          </form>
      </div>
  ) ;
  } 
}

export default Share