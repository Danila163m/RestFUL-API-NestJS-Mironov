import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
  ) {}

  findAll(): Promise<Comment[]> {
    return this.commentsRepository.find({ relations: ['card'] });
  }

  findOne(id: number): Promise<Comment> {
    return this.commentsRepository.findOne({ where: { id }, relations: ['card'] });
  }

  async create(comment: Comment): Promise<Comment> {
    return this.commentsRepository.save(comment);
  }

  async update(id: number, comment: Partial<Comment>): Promise<void> {
    await this.commentsRepository.update(id, comment);
  }

  async remove(id: number): Promise<void> {
    await this.commentsRepository.delete(id);
  }
}
