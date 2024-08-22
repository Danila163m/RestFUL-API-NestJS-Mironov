import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { ColumnEntity } from './column.entity';

@Controller('columns')
export class ColumnsController {
  constructor(private readonly columnsService: ColumnsService) {}

  @Get()
  findAll(): Promise<ColumnEntity[]> {
    return this.columnsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<ColumnEntity> {
    return this.columnsService.findOne(id);
  }

  @Post()
  create(@Body() column: ColumnEntity): Promise<ColumnEntity> {
    return this.columnsService.create(column);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() column: Partial<ColumnEntity>): Promise<void> {
    return this.columnsService.update(id, column);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.columnsService.remove(id);
  }
}
