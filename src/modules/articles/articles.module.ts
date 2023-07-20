import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { articlesProviders } from './articles.provider';
import { OpenAIService } from './openai.service';
@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService, ...articlesProviders, OpenAIService],
})
export class ArticlesModule {}
