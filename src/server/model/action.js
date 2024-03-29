const mongoose = require('mongoose');

const actionSchema = new mongoose.Schema({
    
    document: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Document',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type: {
        type: String,
        enum: ['CREATE', 'UPDATE', 'DELETE'],
        required: true
    },
    logMessage: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const Action = mongoose.models.Action || mongoose.model('Action', actionSchema);