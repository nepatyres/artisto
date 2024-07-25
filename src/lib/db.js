import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
dotenv.config({path: '../../.env'});
console.log(process.env.REACT_APP_DB_NAME)

if (!process.env.REACT_APP_DB_NAME || !process.env.REACT_APP_DB_USER || !process.env.REACT_APP_DB_PASSWORD || !process.env.REACT_APP_DB_HOST) {
    throw new Error('Missing required environment variables for database connection');
}

const sequelize = new Sequelize(
    process.env.REACT_APP_DB_NAME,
    process.env.REACT_APP_DB_USER,
    process.env.REACT_APP_DB_PASSWORD,
    {
        host: process.env.REACT_APP_DB_HOST,
        dialect: 'mysql',
    }
);

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

testConnection();

export default sequelize;