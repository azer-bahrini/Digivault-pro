const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    file: {
        type: String,
        required: true
    },
    doctype: {
        type: String,
        required: true
    },
    metadata: {
        type: Object,
        required: true
    }
}, { timestamps: true });

export const Document = mongoose.models.Document || mongoose.model('Document', documentSchema);