const mongoose = require('mongoose');

const permissionSchema = {
    name: {
        type: String,
        required: true
    },
    module: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    route: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
        required: true
    }
};

export const Permission = mongoose.models.Permission || mongoose.model('Permission', permissionSchema);