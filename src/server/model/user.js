// Import any required dependencies
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({

    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: Object,
        required: true
    },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        required: true
    },
    accessToken: {
        type: String
      },
}, { timestamps: true });

// Create and export the user model
export const User = mongoose.models.User || mongoose.model('User', userSchema);