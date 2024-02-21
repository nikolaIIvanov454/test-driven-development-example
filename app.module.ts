import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterService } from './register/register.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, RegisterService],
})
export class AppModule {}
