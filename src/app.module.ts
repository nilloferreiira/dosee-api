import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { TeamModule } from './team/team.module'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), TeamModule],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule {}
