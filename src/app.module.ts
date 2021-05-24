import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';

import { MongooseModule } from '@nestjs/mongoose';
import { TasksController } from './tasks/tasks.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://db_user:B4mVdSwPEc3CroyK@dog.jqrqk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    TasksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
