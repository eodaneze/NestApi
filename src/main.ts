import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    // Configure Swagger options
    const config = new DocumentBuilder()
    .setTitle('Edosel API DOCUMENTATION')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('api')
    .build();

     // Create the document
  const document = SwaggerModule.createDocument(app, config);

  // Setup the Swagger module
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(3000);
}
bootstrap();
