import mongoose from "mongoose";

let isConnected = false; // track connection

export const connectToDB = async () => {
    mongoose.set('strictQuery',true);

    if (isConnected) {
        console.log("MongoDB is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MOGODB_URI, {
            dbName: "share_prompt",
            // useNewUrlParser: true,
            // useUnifiedTopology: true,

        })

        isConnected = true;
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw new Error("MongoDB connection failed");
    }
};