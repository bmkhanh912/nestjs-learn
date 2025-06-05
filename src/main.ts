import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /** Gắn microservice gRPC vào app HTTP chính */
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'order',
      protoPath: join(__dirname, '../src/order/hero.proto'),
      url: 'localhost:50051',
    },
  });

  await app.startAllMicroservices();

  await app.listen(3000);
}
bootstrap();
