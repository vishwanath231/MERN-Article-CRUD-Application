const mongoose = require('mongoose');


const connectDB = async () => {

    try {

        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('mongodb connected'.bgGreen.bold);

    } catch (err) {
        console.log(err);
        console.log('mongodb connection error'.bgRed.bold);
        process.exit(1);
    }
}

module.exports = connectDB;