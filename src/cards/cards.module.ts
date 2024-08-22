import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { Card } from './card.entity';
import { ColumnEntity } from '../columns/column.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Card, ColumnEntity])],
  providers: [CardsService],
  controllers: [CardsController],
  exports: [CardsService],
})
export class CardsModule {}
