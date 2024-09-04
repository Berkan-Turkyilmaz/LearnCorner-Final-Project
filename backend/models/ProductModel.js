import  { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';




const Product = sequelize.define("Product",{


    definition: {
        type: DataTypes.STRING,
        allowNull: false
    }, 

    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull:false
    }

    

});

Product.sync();

export default Product;