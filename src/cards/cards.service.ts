import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './card.entity';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Card)
    private cardsRepository: Repository<Card>,
  ) {}

  findAll(): Promise<Card[]> {
    return this.cardsRepository.find({ relations: ['comments'] });
  }

  findOne(id: number): Promise<Card> {
    return this.cardsRepository.findOne({ where: { id }, relations: ['comments'] });
  }

  async create(card: Card): Promise<Card> {
    return this.cardsRepository.save(card);
  }

  async update(id: number, card: Partial<Card>): Promise<void> {
    await this.cardsRepository.update(id, card);
  }

  async remove(id: number): Promise<void> {
    await this.cardsRepository.delete(id);
  }
}
