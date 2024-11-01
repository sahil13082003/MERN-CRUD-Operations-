import mongoose from 'mongoose';

const Connection = async () => {
  try {
    // await mongoose.connect('mongodb://localhost:27017/Crud-app');
    await mongoose.connect('mongodb+srv://sahilgolhar7:rdsIfa7pkrDXt0EW@cluster0.fbsb4.mongodb.net/MERN_CRUD_Operation?retryWrites=true&w=majority&appName=Cluster0');


    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    process.exit(1); // Exit the process if the database connection fails
  }
};

export default Connection;





