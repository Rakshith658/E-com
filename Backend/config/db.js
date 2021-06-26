require("dotenv").config()
const mongoos = require("mongoose")

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL,
        { useNewUrlParser: true,useUnifiedTopology: true },
          () => {
            console.log('connected to mongodb');
          }
        );
        
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
}

module.exports = connectDB