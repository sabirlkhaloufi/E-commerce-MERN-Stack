# E-commerce-MERN-Stack
project E-commerce with technology :

## Tech Stack

**Client:** React, bootstrap

**Server:** Node, Express

**database:** PostgreSql


## API Reference

### Autentication

| Method | Api     | Description                |
| :-------- | :------- | :------------------------- |
| `POST` | `/api/Auth/login` | **Register**|
| `POST` | `/api/Auth/register` | **Login**|
| `GET` | `/api/Auth/confirm/:token` | **confirmEmail**|
| `POST` | `/api/Auth/forgetpassword` | **forgetpassword**|
| `POST` | `/api/Auth/resetpassword/:token` | **resetpassword**|

### Categories

| Method | Api     | Description                |
| :-------- | :------- | :------------------------- |
| `POST` | `/api/Categories/add` | **addCategories**|
| `PUT` | `/api/Categories/update/:id` | **updateCategories**|
| `DELETE` | `/api/Categories/delete/:id` | **deleteCategories**|
| `GET` | `/api/Categories/getAll` | **GetAllCategories**|

### CodePromo

| Method | Api     | Description                |
| :-------- | :------- | :------------------------- |
| `POST` | `/api/Categories/add` | **addCategories**|
| `PUT` | `/api/Categories/update/:id` | **updateCategories**|
| `DELETE` | `/api/Categories/delete/:id` | **deleteCategories**|
| `GET` | `/api/Categories/getAll` | **GetAllCategories**|
