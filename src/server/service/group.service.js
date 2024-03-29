//group.service.js

import { Group } from '../model/group';
import { connectToDB } from '../config/db.js';
import { User } from '../model/user';


export const createGroup = async ({ name, description }) => {
    await connectToDB();
    try {
        const group = await Group.findOne({ name }).lean().exec() ;
        if (group) {
            return { message: 'Group already exists' };
        }
        const newGroup = new Group({ name, description });
        if (!newGroup) {
            return { message: 'Group creation failed' };
        }
        await newGroup.save();

        return { message: 'Group created successfully', newGroup };

    } catch (error) {
        console.log(error.message);
        return { message: 'Group creation failed' };
    }
}

export const getGroupByID = async ({ id }) => {
    await connectToDB();
    try {
        const group = await Group.findOne({ id }).lean().exec();
        if (!group) {
            return { message: 'Group does not exist' };
        }
        return { message: 'Group found', group };
    }
    catch (error) {
        console.log(error.message);
        return { message: 'Group not found' };
    }
}

export const getGroupByName = async ({ name }) => {
    await connectToDB();
    try {
        const group = await Group.findOne({ name }).lean().exec();
        if (!group) {
            return { message: 'Group does not exist' };
        }
        return { message: 'Group found', group };
    }catch (error) {
        console.log(error.message);
        return { message: 'Group not found' };
    }
}

export const getGroups = async () => {
    await connectToDB();
    try {
        const groups = await Group.find().lean().exec();
        if (!groups) {
            return { message: 'Groups not found' };
        }
        return { message: 'Groups found', groups };
    }
    catch (error) {
        console.log(error.message);
        return { message: 'Groups not found' };
    }
}

export const updateGroup = async (id, { name, description }) => {
    await connectToDB();
    try {
        const group = await Group.findByIdAndUpdate(id, { name, description }, { new: true, omitUndefined: true });
        if (!group) {
            return { message: 'Group does not exist' };
        }
        return { group };
    }
    catch (error) {
        console.log(error.message);
        return { message: 'Group update failed' };
    }
}

export const deleteGroup = async ({ id }) => {
    await connectToDB();
    try {
        const group = await Group.findOne( { id }).lean().exec();
        if (!group) {
            return { message: 'Group does not exist' };
        }
        await User.deleteMany({ group: group._id });
        await Group.deleteOne({ id });
        return { message: 'Group deleted' };
    }catch (error) {
        console.log(error.message);
        return { message: 'Group deletion failed' };
    }
}

export const addPermissionToGroup = async ( id, permission ) => {
    await connectToDB();
    try {
        const group = await Group.findById( id );
        if (!group) {
            return { message: 'Group does not exist' };
        }
        if (!permission) {
            return { message: 'Permission is required' };
        }
        await Group.updateOne({ _id: id }, { $addToSet: { permissions: permission } });
        return { message: 'Permission added to group', group };
    }catch (error) {
        console.log(error.message);
        return { message: 'Permission addition failed' };
    }
}

export const removePermissionFromGroup = async ({ id, permission }) => {
    await connectToDB();
    try {
        const group = await Group.findOne({ id }).exec();
        if (!group) {
            return { message: 'Group does not exist' };
        }
        group.permissions.pull(permission);
        await group.save();
        return { message: 'Permission removed from group', group };
    } catch (error) {
        console.log(error.message);
        return { message: 'Permission removal failed' };
    }
}