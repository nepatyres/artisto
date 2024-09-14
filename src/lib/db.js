import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('artisto', 'julijus', 'GddpndpXzZrja+', {
    host: '35.202.159.100',
    dialect: 'mysql',
    port: 3306,
});

export default sequelize;
