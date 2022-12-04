const Role = require('../Models/RoleModel')

// create default roles
const CreateRoles = ()=>{
    Role.bulkCreate({role:"client"},{role:"manager"})
}

module.exports = CreateRoles;