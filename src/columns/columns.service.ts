import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ColumnEntity } from './column.entity';

@Injectable()
export class ColumnsService {
  constructor(
    @InjectRepository(ColumnEntity)
    private columnsRepository: Repository<ColumnEntity>,
  ) {}

  findAll(): Promise<ColumnEntity[]> {
    return this.columnsRepository.find({ relations: ['cards'] });
  }

  findOne(id: number): Promise<ColumnEntity> {
    return this.columnsRepository.findOne({ where: { id }, relations: ['cards'] });
  }

  async create(column: ColumnEntity): Promise<ColumnEntity> {
    return this.columnsRepository.save(column);
  }

  async update(id: number, column: Partial<ColumnEntity>): Promise<void> {
    await this.columnsRepository.update(id, column);
  }

  async remove(id: number): Promise<void> {
    await this.columnsRepository.delete(id);
  }
}
