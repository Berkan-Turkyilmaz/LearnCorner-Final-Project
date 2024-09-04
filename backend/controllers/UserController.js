import User from "../models/UserModel.js";
import userSchema from "../schemas/UserSchema.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export const getUsers = async (req, res) => {

try {
    const Users = await User.findAll({attributes:{exclude:["createdAt", "updatedAt"]}});

    if (!Users) {

    return res.status(404).json({message:"No users found"})
    } 

    return res.status(200).json(Users);


} catch (error) {
    console.log(error);
    res.status(500).json({error: error.message})
}};

export const getUser = async (req, res) => {
    
    try {

    const foundUser = await User.findByPk(req.params.id, {attributes: {exclude:["createdAt","updatedAt"]}});

    if (!foundUser) {
        return res.status(400).send("There is no user with such an id")
    } else {
        return res.status(200).json({message: "User found", userInfo: foundUser})
    }
} catch (error) {
    console.log(error);
    res.status(500).json({error: error.message}) 
}};


    export const createUser = async (req, res) => {

        try {
            const { error } = userSchema.validate(req.body);

            if (error) {
                return res.status(400).json({error: error.message})
            } else {

                const {email, firstname, password} = req.body;

                const existedFirstName = await User.findOne({where: {firstname:firstname}});
                const existedEmail = await User.findOne({where: {email:email}});

                if(existedEmail || existedFirstName) {
                    return res.status(400).json({message: "Email or Username is already taken"})
                } else {



                const hashedPassword = await bcrypt.hash(password, 10)
                const createdUser = await User.create({email, firstname, password: hashedPassword});
            return  res.status(201).json({
                    id: createdUser.id,
                    firstname: createdUser.firstname,
                   
                    message:"User was created"})
                }; }
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error.message})
        }
    };

export const deleteUser = async (req, res) => {

    try {
        
    
        const foundUser = await User.findByPk(req.params.id);
        if (!foundUser) {
            return res.status(404).json({error: "User not found"});
        } else {
            const deleted = await User.destroy({where: {id: req.params.id}});
            if (deleted === 0) {
            res.status(500).json({error:"Couldnt delete "})
        } else {
            return res.status(201).json({errormessage:"User with these informations was deleted", userInfos: foundUser})
        }
    }
        
    } catch (error) {
        console.log(error);
        res.status(500).send("something went wrong")
    }
    };


    export const updateUser = async (req, res) => {

        try {
            const { error } = userSchema.validate(req.body);
            if (error) {
            return res.status(400).json({error: error.details[0].message})
    }
          const [updatedUser] = await User.update(req.body,{where:{id: req.params.id}});
          if (updatedUser === 0) {
            return res.status(404).json({message: "There is no such an user"});
          } else {
            const updatedUserInfos = await User.findByPk(req.params.id);
            return res.status(200).json({message:"User was updated", updatedUserInfos})
          }
     
        } catch (error) {
            return res.status(500).send("Something went wrong")
        }};


        export const loginUser = async (req, res) => {
            const { email, password } = req.body;
        
            try {
                const user = await User.findOne({ where: { email: email } });
                
                if (!user) {
                    return res.status(404).json({ message: 'User not found' });
                }
        
                const isMatch = await bcrypt.compare(password, user.password);
                
                if (!isMatch) {
                    return res.status(400).json({ message: 'Invalid credentials' });
                }
        
                const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
        
                return res.status(200).json({ message: 'Login successful', token: token });
        
            } catch (error) {
                console.error(error);
                return res.status(500).json({ error: error.message });
            }
        };