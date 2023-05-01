import { Module } from '@nestjs/common';
import { NunjucksModule } from 'nest-nunjucks';
import { AppController } from './app.controller';

@Module({
  imports: [
    NunjucksModule.forRoot({
      paths: [__dirname + '/views'],
      options: {
        autoescape: true,
        throwOnUndefined: false,
        trimBlocks: false,
        lstripBlocks: false,
      },
    }),
  ],
  controllers: [AppController],
})
export class AppModule { }
