const Role = require('../Models/RoleModel')

//roles for this application
const Roles = ["client","manager"];

// create default roles
const CreateRoles = ()=>{
    Roles.forEach(role => {
        createR = async()=>{
            const findRole = await Role.findOne({where: {role:role}});
            if(!findRole){
                await Role.create({role:role})
            }
        }
        createR();
        
    });
    
}

module.exports = CreateRoles;