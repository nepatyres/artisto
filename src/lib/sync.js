import sequelize from './db';
import Product from '../models/Product';

async function syncDatabase() {
    try {
        await sequelize.sync(); // Sync all models with the database
        console.log('Database synchronized');
    } catch (error) {
        console.error('Error synchronizing database:', error.message);
    }
}

syncDatabase();
