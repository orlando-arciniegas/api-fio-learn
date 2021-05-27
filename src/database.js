import mongoose from 'mongoose';
import config from './config';

(async () => {
   try {
    const db = await mongoose.connect(config.mongodbURL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false 
    });
    console.log(`Connect to DB: ${db.connection.name}`);
   } catch (error) {
    console.error(error)  
   }
})();