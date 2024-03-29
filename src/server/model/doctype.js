const mongoose = require('mongoose');

const doctypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    formSchema: {
        type: Object,
        required: true
    },
    formUISchema: {
        type: Object,
        required: true
    },
    path: {
        type: array,
        required: false
    }
}, { timestamps: true});

export const Doctype = mongoose.models.Doctype || mongoose.model('Doctype', doctypeSchema);