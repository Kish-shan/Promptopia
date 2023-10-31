import mongoose from "mongoose";

let isConnecetd = false

export const connectToDB = async () => {
    mongoose.set('strictQuery'), true;
    if (isConnecetd) {
        console.log("mongoDB is Already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_promt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnecetd = true;
        console.log('mongoDB connected')

    } catch (error) {
        console.log(error);
    }
}