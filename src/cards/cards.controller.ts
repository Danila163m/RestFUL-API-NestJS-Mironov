import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CardsService } from './cards.service';
import { Card } from './card.entity';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  findAll(): Promise<Card[]> {
    return this.cardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Card> {
    return this.cardsService.findOne(id);
  }

  @Post()
  create(@Body() card: Card): Promise<Card> {
    return this.cardsService.create(card);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() card: Partial<Card>): Promise<void> {
    return this.cardsService.update(id, card);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.cardsService.remove(id);
  }
}
