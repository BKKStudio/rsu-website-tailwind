import mongoose from "mongoose";

export async function ConnectDb() {
    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected To Database Successfull!!");
    } catch (error) {
        console.log("Error Is ",error);
    }

}


export default ConnectDb;