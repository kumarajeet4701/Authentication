const mongoose =require("mongoose")
mongoose.connect("mongodb://localhost:27017/LoginDB").then(() => {
    console.log("MongoDB Connected");
}).catch(() => {
    console.log("Failed to connect to MongoDB");
});

const LoginSchema = mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    password: {
        type: String,
        required: true 
    }
});

const LoginModel = mongoose.model("collection1", LoginSchema);
module.exports = LoginModel;
