import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, 'tLgM=T/C$7"by_<6D9%R!n', {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
});

export default sequelize;
