import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: [true, 'Email already exists']
    },
    username: {
        type: String,
        required: [true, 'Please enter a username'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_·]{2})[a-zA-Z0-9.]+(?<![_.])$/, "Username invalid, it should contain 8 - 20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String,
    },
});

export default models.User || model('User', UserSchema);