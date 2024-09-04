import  { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';

const Post = sequelize.define("Post",{

    titel: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isUrl: true
        }
    },
    content: {
        type: DataTypes.TEXT,
        allowNull:true
    },
    likes: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull:true
    },
    createdAt: {
        type: DataTypes.DATEONLY,
        allowNull:false
    }
    }
);

Post.sync();

export default Post;