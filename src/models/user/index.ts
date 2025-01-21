import {
  Model,
  Column,
  Table,
  PrimaryKey,
  AutoIncrement,
} from "sequelize-typescript";

interface userI {
  id?: number;
  firstName: string;
  Email: string;
  lastName: string;
  password: string;
  role: string;
  avatar: string;
  phone: string;
  addressId: string;
  isActive: boolean;
  CC: string;
  birthday: string;
  gender: string;
  country: string;
  city: string;
}

@Table({ modelName: "users" })
class user extends Model<userI> {
  @PrimaryKey
  @AutoIncrement
  @Column({ allowNull: false })
  readonly id!: number;

  @Column({ allowNull: false, defaultValue: "" })
  firstName!: string;

  @Column({ allowNull: false, defaultValue: 0 })
  lastName!: number;

  @Column({ allowNull: false, defaultValue: "" })
  Email!: string;

  @Column({ allowNull: false, defaultValue: "" })
  password!: string;

  @Column({ allowNull: false, defaultValue: "" })
  role!: string;

  @Column({ allowNull: false, defaultValue: "" })
  avatar!: string;
  
  @Column({ allowNull: false, defaultValue: "" })
  phone!: string;
  
  @Column({ allowNull: false, defaultValue: "" })
  addressId!: string;
  
  @Column({ allowNull: false, defaultValue: "" })
  isActive!: string;
  
  @Column({ allowNull: false, defaultValue: "" })
  CC!: string;
  
  @Column({ allowNull: false, defaultValue: "" })
  birthday!: string;
  
  @Column({ allowNull: false, defaultValue: "" })
  gender!: string;
  
  @Column({ allowNull: false, defaultValue: "" })
  country!: string;
  
  @Column({ allowNull: false, defaultValue: "" })
  city!: string;
}

export default user;
