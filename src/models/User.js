import {Schema, model} from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const User = new Schema({
    role: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        trim: true
    }
}, {
    versionKey: false,
    timestamps: true
});

User.plugin(mongoosePaginate);
export default model('User', User);