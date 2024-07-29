import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../lib/db';

interface ProductAttributes {
  id: number;
  name: string;
  description?: string;
  price: number;
  stock: number;
  images?: string[]; // Ensure this is an array of strings
  createdAt?: Date;
  updatedAt?: Date;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, 'id' | 'description' | 'images' | 'createdAt' | 'updatedAt'> { }

class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  public id!: number;
  public name!: string;
  public description?: string;
  public price!: number;
  public stock!: number;
  public images?: string[]; // Array of strings for images

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
    images: {
      type: DataTypes.JSON, // Use JSON to store arrays
      allowNull: true, // Allow null if there are no images
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


