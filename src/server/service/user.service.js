import {User} from '../model/user.js';
import {Group} from '../model/group.js';
import { connectToDB } from '../config/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Rock_3D } from 'next/font/google/index.js';

export const register = async ({ firstName, lastName, login, password, contact, group }) => {
    await connectToDB();

    try {
        const user = await User.findOne({ login});
        if (user) {
            return { message: 'User already exists' };
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ firstName, lastName, login, password: hashedPassword, contact, group });
        if (!newUser) {
            return  { message: 'User creation failed' };
        }
        
        await newUser.save();
        const response  = await newUser.populate('group')
        console.log(response);
        
    
        
        return { message: 'User created successfully' , newUser: response};
    }
    catch (error) {
    console.log(error.message);
        return { message: 'User creation failed' };
    }
}

export const loginUser = async ({ login, password }) => {
    await connectToDB();
    
    try {
        const user = await User.findOne({ login });
        if (!user) {
            return { success: false, message: 'User does not exist' };
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return { success: false, message: 'Invalid credentials' };
        }
        const token = jwt.sign({ login: user.login, id: user._id }, process.env.ACCESS_TOKEN_SECRET);
        await User.findOneAndUpdate({ login },  { token }).select('-password').populate('group').lean().exec();
        
        
        return { success: true, token };     
    } catch (error) {
        return { success: false, message: error.message };
    }
}

export const logout = async ({ login }) => {
    await connectToDB();
    try {
        await User.findOneAndUpdate({ login },  { accessToken: '' }).lean().exec();   
        return { message: 'Logout successful' };
    }
    catch (error) {
        return { message: 'Logout failed' };
    }
}

//get all users

export const getUsers = async () => {
    await connectToDB();
    try {
        const users = await User.find().select('-password').populate('group').lean().exec();
        return users;
    }
    catch (error) {
        return { message: 'Fetching users failed' };
    }
}
//get user by id
export const getUserById = async (id) => {
    await connectToDB();
    try {
        const user = await User.findById(id).select('-password').populate('group').lean().exec();
        return user;
    }
    catch (error) {
        return { message: 'Fetching user failed' };
    }
}
//update user
export const updateUser = async (id, data) => {
    await connectToDB();
    try {
        if (data.password) {
            data.password = await bcrypt.hash(data.password, 10);
        }
        const user = await User.findByIdAndUpdate(id, data, { new: true, omitUndefined: true }).select('-password').populate('group').lean().exec();
        if (!user) {
            return { message: 'User does not exist' };
        }
        return user;
    }   
    catch (error) {
        return { message: 'Updating user failed' };
    }
}
//delete user
export const deleteUser = async (id) => {
    await connectToDB();
    try {
        await User.findByIdAndDelete(id);
        return { message: 'User deleted successfully' };
    }
    catch (error) {
        return { message: 'Deleting user failed' };
    }
}

