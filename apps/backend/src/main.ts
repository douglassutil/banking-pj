import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 3000;

  await app.listen(port);

  console.log(`Server running on port ${port}`);
}

bootstrap();

/**
 * TODO (Student Task):
 *
 * 1. Create your first controller
 * 2. Implement GET /health endpoint
 * 3. Return: { status: 'ok' }
 *
 */
