import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './core/config/data-source';

async function bootstrap() {
  await AppDataSource.initialize()
    .then(() => {
      console.log('DataSource inicializado');
    })
    .catch((err) => {
      console.error('Error durante la inizialicacón del DataSource:', err);
    });
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.startAllMicroservices();
  await app.listen(3000);
}

bootstrap();
