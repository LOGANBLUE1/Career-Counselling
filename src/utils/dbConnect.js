import mongoose from "mongoose";

const { MONGODB_URL } = process.env;

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connection Success");
    } catch (err) {
        console.error("DB Connection Failed", err);
        process.exit(1);
    }
};
