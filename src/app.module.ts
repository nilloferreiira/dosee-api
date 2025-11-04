import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TeamModule } from './team/team.module'
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), TeamModule],
  controllers: [],
  providers: [PrismaService],
  exports: []
})
export class AppModule {}
