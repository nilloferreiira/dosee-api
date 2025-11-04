import { Module } from '@nestjs/common'
import { TeamService } from './team.service'
import { TeamController } from './team.controller'
import { PrismaService } from '../prisma/prisma.service'

@Module({
  imports: [],
  controllers: [TeamController],
  providers: [TeamService, PrismaService]
})
export class TeamModule {}
