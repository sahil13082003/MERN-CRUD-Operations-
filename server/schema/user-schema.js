import mongoose from "mongoose";
import mongooseSequence from 'mongoose-sequence';

const userSchema = new mongoose.Schema({
    _id: Number, // Auto-incremented field of type Number
    name: String,
    username: String,
    email: String,
    phone: String
});

userSchema.plugin(mongooseSequence(mongoose), { inc_field: '_id' });

const User = mongoose.model('User', userSchema);

export default User;
