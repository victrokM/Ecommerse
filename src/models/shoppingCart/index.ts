import {
  Model,
  Column,
  Table,
  PrimaryKey,
  AutoIncrement,
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

  // @Column({ allowNull: false, defaultValue: [] })
  // products!: string[];
}

export default ShoppingCart;
