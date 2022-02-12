import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://VictorDiego:Delta0652@cluster0.n2kqd.mongodb.net/test'),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
