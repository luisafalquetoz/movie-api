import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    type:{
        type: String,
        require: true,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    },
}); 

export default mongoose.model('Category', categorySchema);
