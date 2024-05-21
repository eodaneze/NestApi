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

  const port = 3000
  await app.listen(port);

  console.log(`\x1b[32mApplication is running on: http://localhost:${port}\x1b[0m`);
  console.log(`\x1b[32mSwagger documentation is available on: http://localhost:${port}/api-docs\x1b[0m`);
}
bootstrap();
