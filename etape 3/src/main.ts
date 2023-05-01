import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as nunjucks from 'nunjucks';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Configuration du dossier "public" pour que les fichiers statiques soient servis correctement
  app.useStaticAssets(join(__dirname, '../src/public'));

  // Configuration du moteur de template Nunjucks
  nunjucks.configure(join(__dirname, '..', 'views'), {
    autoescape: true,
    express: app,
  });

  // Définition du moteur de template Nunjucks comme moteur de rendu par défaut pour les fichiers .njk
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('njk');

  await app.listen(3000);
}
bootstrap();
