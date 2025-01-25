import {
  Model,
  Column,
  Table,
  PrimaryKey,
  AutoIncrement,
  DataType,
} from "sequelize-typescript";

interface categoryI {
  id?: number;
  name: string;
  subCategories: string[];
  products: string[];
}

@Table({ modelName: "categories" })
class Category extends Model<categoryI> {
  @PrimaryKey
  @AutoIncrement
  @Column({ allowNull: false })
  readonly id!: number;

  @Column({ allowNull: false, defaultValue: "" })
  name!: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
    defaultValue: [],
  })
  subCategories!: string;

  @Column({
    /*
    cuando sea un array se tiene que colocar de esta manera obviamente
    cambiando su type
    */
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
    defaultValue: [],
  })
  products!: string[];
}

export default Category;
