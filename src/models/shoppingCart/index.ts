import {
  Model,
  Column,
  Table,
  PrimaryKey,
  AutoIncrement,
  DataType,
} from "sequelize-typescript";

interface shoppingCartI {
  id?: number;
  products: string[];
}

@Table({ modelName: "ShoppingCarts" })
class ShoppingCart extends Model<shoppingCartI> {
  @PrimaryKey
  @AutoIncrement
  @Column({ allowNull: false })
  readonly id!: number;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
    defaultValue: [],
  })
  products!: string[];
}

export default ShoppingCart;
