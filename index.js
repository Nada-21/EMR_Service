const express = require('express');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const connectionModule = require('./DataBase/connection');

const RecordRoute = require('./routes/recordRouter');
const PrescriptionRoute = require('./routes/prescriptionRouter');
const medicalHistoryRoute = require('./routes/historyRouter');

const EMR_app = express();
const PORT =  process.env.PORT;

//====================================================================
EMR_app.listen(PORT, async () => {
  console.log(`SERVER: http://localhost:${PORT}`);

  try {
    // Get a connection from the pool to check the database connection
    const connection = await connectionModule.getConnection();
    connection.release();
    console.log('DATABASE CONNECTED');
  } catch (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1); // Exit the application if there's an error connecting to the database
  }
});
//====================================================================
EMR_app.use(express.json());
EMR_app.use('/', RecordRoute);
EMR_app.use('/', PrescriptionRoute);
EMR_app.use('/', medicalHistoryRoute);
