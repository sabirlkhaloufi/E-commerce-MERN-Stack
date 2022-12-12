import React from 'react'
// import { Admin } from "react-admin";
import { Admin, Resource, ListGuesser } from "react-admin";
import { List, Datagrid, TextField, EmailField } from "react-admin";
// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
// const Dash = () => <Admin dataProvider={dataProvider} />;
const dataProvider = [
    { id: 1, title: 'Hello, world!' },
    { id: 2, title: 'FooBar' }

]
const Dash = () => {
  return (
      <>
      <Admin dataProvider={dataProvider}>
        {/* <Resource name="users" list={ListGuesser} /> */}
        <List>
            <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            {/* <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <TextField source="website" />
            <TextField source="company.name" /> */}
            </Datagrid>
        </List>
      </Admin>
    
    </>
  )
}

export default Dash
