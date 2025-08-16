import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Security
  app.use(helmet());
  
  // CORS
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://social.boipebailha.com.br',
      'https://boipebailha.com.br',
      'https://www.boipebailha.com.br'
    ],
    credentials: true,
  });

  // Global validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // API prefix
  app.setGlobalPrefix('api/v1');

  // Swagger documentation
  const config = new DocumentBuilder()
    .setTitle('Boipebailha Social API')
    .setDescription('API para rede social de viajantes da Ilha de Boipeba')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('auth', 'Autenticação')
    .addTag('users', 'Usuários')
    .addTag('posts', 'Publicações')
    .addTag('events', 'Eventos')
    .addTag('upload', 'Upload de arquivos')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    customSiteTitle: 'Boipebailha Social API',
    customCss: '.swagger-ui .topbar { display: none }',
  });

  // Start server
  const port = process.env.PORT || 3001;
  await app.listen(port, '0.0.0.0'); // Heroku precisa escutar em 0.0.0.0
  
  console.log(`🚀 Boipebailha Social API running on port ${port}`);
  console.log(`📚 Documentation available at http://localhost:${port}/docs`);
  console.log(`💚 Health check: http://localhost:${port}/health`);
}

bootstrap();
