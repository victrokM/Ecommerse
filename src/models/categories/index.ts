import {
  Model,
  Column,
  Table,
  PrimaryKey,
  AutoIncrement,
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

  @Column({ allowNull: false, defaultValue: [] })
  subCategories!: string;

  @Column({ allowNull: false, defaultValue: [] })
  products!: string;
}

export default Category;
