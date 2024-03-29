const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    permissions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Permission' 
    }]
}, { timestamps: true });

export const Group = mongoose.models.Group || mongoose.model('Group', groupSchema);