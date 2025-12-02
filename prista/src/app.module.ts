import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { ClientsModule } from './clients/clients.module';
import { UserService } from './user/user.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule, ClientsModule, ProjectsModule, TasksModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, UserService],
})
export class AppModule {}
