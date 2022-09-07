
// For user user example -> create a table for user
import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
    {
        // here we create the column in the table
        name:{
            type: String,
            required: true,
            maxlength: 20
        },
        surname: {
            type: String,
            required: true,
            maxlength: 30
        },
        age: {
            type: Number,
            required: true,
        },
        password: {
            type: String,
            required: true,
            maxlength: 50,
        }
    },
    {
        timestamps: true, // For date and time
    }
)


// if not exist then create a table
export default mongoose.models.User || mongoose.model("User", UserSchema)