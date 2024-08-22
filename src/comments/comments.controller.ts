import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from './comment.entity';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  findAll(): Promise<Comment[]> {
    return this.commentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Comment> {
    return this.commentsService.findOne(id);
  }

  @Post()
  create(@Body() comment: Comment): Promise<Comment> {
    return this.commentsService.create(comment);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() comment: Partial<Comment>): Promise<void> {
    return this.commentsService.update(id, comment);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.commentsService.remove(id);
  }
}
