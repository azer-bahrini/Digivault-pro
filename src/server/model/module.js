const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
    // Define your module properties here
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    permisions:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Permission'
    }]

    
}, { timestamps: true });

export const Module = mongoose.models.Module || mongoose.model('Module', moduleSchema);