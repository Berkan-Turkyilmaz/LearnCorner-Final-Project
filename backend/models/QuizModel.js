import  { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';




const Quiz = sequelize.define("Quiz",{


    quiznumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 

    question: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    options: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    correctanswer: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quizthema: {
        type: DataTypes.STRING,
        allowNull:false
    }
    

});

Quiz.sync();

export default Quiz;