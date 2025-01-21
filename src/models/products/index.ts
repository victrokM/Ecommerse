import {
  Model,
  Column,
  Table,
  PrimaryKey,
  AutoIncrement,
} from "sequelize-typescript";

interface productsI {
  id?: number;
  name: string;
  priority: number;
  description: string;
}

@Table({ modelName: "projects" })
class Project extends Model<productsI> {
  @PrimaryKey
  @AutoIncrement
  @Column({ allowNull: false })
  readonly id!: number;

  @Column({ allowNull: false, defaultValue: "" })
  name!: string;

  @Column({ allowNull: false, defaultValue: 0 })
  priority!: number;

  @Column({ allowNull: false, defaultValue: "" })
  description!: string;
}

export default Project;
