import  { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';




const User = sequelize.define("User",{

    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    email: {
        type: DataTypes.STRING,
        allowNull: false
        
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    

});

User.sync();

export default User;