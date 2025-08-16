import { Controller, Get, Post, Body, Query, Param, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { PostsService } from './posts.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @ApiOperation({ summary: 'Listar posts' })
  async getPosts(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.postsService.getPosts(page, limit);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Criar novo post' })
  async createPost(@Request() req, @Body() createPostDto: any) {
    return this.postsService.createPost(req.user.userId, createPostDto);
  }

  @Post(':id/like')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Curtir/descurtir post' })
  async toggleLike(@Request() req, @Param('id') postId: string) {
    return this.postsService.toggleLike(req.user.userId, postId);
  }
}
