import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { ColumnEntity } from '../columns/column.entity';
import { Comment } from '../comments/comment.entity';

@Entity('cards')
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => ColumnEntity, column => column.cards)
  column: ColumnEntity;

  @OneToMany(() => Comment, comment => comment.card)
  comments: Comment[];
}
