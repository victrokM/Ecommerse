import {
  Model,
  Column,
  Table,
  PrimaryKey,
  AutoIncrement,
} from "sequelize-typescript";

interface addressI {
  id?: number;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: number;
}

@Table({ modelName: "addresses" })
class Address extends Model<addressI> {     
  @PrimaryKey
  @AutoIncrement
  @Column({ allowNull: false })
  readonly id!: number;

  @Column({ allowNull: false, defaultValue: "" })
  address!: string;

  @Column({ allowNull: false, defaultValue: "" })
  city!: string;

  @Column({ allowNull: false, defaultValue: "" })
  state!: string;

  @Column({ allowNull: false, defaultValue: "" })
  country!: string;

  @Column({ allowNull: false, defaultValue: 0 })
  postalCode!: number
}

export default Address;
