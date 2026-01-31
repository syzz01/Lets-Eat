// main.ts
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalPipes(
  new ValidationPipe({
    transform: true,
    whitelist: true,
  }),
);


  const config = new DocumentBuilder()
    .setTitle('Lets Eat API')
    .setDescription('This API is for learning purpose only.')
    .setVersion('1.0')
    .addTag('Eat')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
