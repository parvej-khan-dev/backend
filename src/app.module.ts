import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ArticlesService } from './modules/articles/articles.service';
import { ArticlesModule } from './modules/articles/articles.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule, ArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
