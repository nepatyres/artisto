import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../lib/db';

interface ProductAttributes {
  id: number;
  name: string;
  description?: string;
  price: number;
  stock: number;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, 'id' | 'description' | 'image' | 'createdAt' | 'updatedAt'> { }

class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  public id!: number;
  public name!: string;
  public description?: string;
  public price!: number;
  public stock!: number;
  public image?: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    image: {
      type: DataTypes.STRING(255),
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'products',
    timestamps: true,
  }
);

export default Product;

