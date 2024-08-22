import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ColumnEntity } from '../columns/column.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => ColumnEntity, column => column.user)
  columns: ColumnEntity[];
}
