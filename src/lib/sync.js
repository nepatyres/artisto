import sequelize from './db';

async function syncDatabase() {
    try {
        await sequelize.sync();
        console.log('Database synchronized');
    } catch (error) {
        console.error('Error synchronizing database:', error.message);
    }
}

syncDatabase();
