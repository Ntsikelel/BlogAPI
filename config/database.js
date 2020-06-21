const mongoose = require('mongoose')

module.exports = async () => {
    try {
            const conn = await mongoose.connect(process.env.MONGO_LINK,{
            useNewUrlParser:true,
            useCreateIndex : true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log(`MongoDB Database connected on :  ${conn.connection.host}`);
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}
