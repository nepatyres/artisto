import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../lib/db';

interface MoreProductsAttributes {
  id: number;
  name: string;
  price: number;
  image?: string;
}

interface MoreProductsCreationAttributes extends Optional<MoreProductsAttributes, 'image'> { }

class MoreProducts extends Model<MoreProductsAttributes, MoreProductsCreationAttributes> implements MoreProductsAttributes {
  public id!: number;
  public name!: string;
  public price!: number;
  public image?: string;
}

MoreProducts.init(
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
    tableName: 'moreproducts',
    timestamps: false,
  }
);

export default MoreProducts;