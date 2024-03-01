import mongoose from 'mongoose';

const Connection = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/Crud-app');
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    process.exit(1); // Exit the process if the database connection fails
  }
};

export default Connection;





