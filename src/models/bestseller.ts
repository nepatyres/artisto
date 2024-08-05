import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../lib/db';

interface BestsellerAttributes {
  id: number;
  name: string;
  price: number;
  image?: string;
}

interface BestsellerCreationAttributes extends Optional<BestsellerAttributes, 'image'> {}

class Bestseller extends Model<BestsellerAttributes, BestsellerCreationAttributes> implements BestsellerAttributes {
  public id!: number;
  public name!: string;
  public price!: number;
  public image?: string;
}

Bestseller.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'bestseller',
    timestamps: false,
  }
);

export default Bestseller;

