import {
  Model,
  Column,
  Table,
  PrimaryKey,
  AutoIncrement,
} from "sequelize-typescript";

interface storeI {
  id?: number;
  name: string;
  logo: string;
  phone: string;
  email: string;
}

@Table({ modelName: "stores" })
class Store extends Model<storeI> {     
  @PrimaryKey
  @AutoIncrement
  @Column({ allowNull: false })
  readonly id!: number;

  @Column({ allowNull: false, defaultValue: "" })
  name!: string;

  @Column({ allowNull: false, defaultValue: "" })
  logo!: string;

  @Column({ allowNull: false, defaultValue: "" })
  phone!: string;
  
  @Column({ allowNull: false, defaultValue: "" })
  email!: string;
}

export default Store;
