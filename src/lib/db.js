import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
    logging: console.log,  // Enable logging to see SQL queries
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

// Test the connection
sequelize.authenticate()
    .then(() => console.log('Database connection has been established successfully.'))
    .catch(err => {
        console.error('Unable to connect to the database:', err);
        // Log more details about the error
        console.error('Error name:', err.name);
        console.error('Error message:', err.message);
        if (err.parent) {
            console.error('Parent error:', err.parent);
        }
    });

export default sequelize;
