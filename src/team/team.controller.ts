import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  InternalServerErrorException
} from '@nestjs/common'
import { TeamService } from './team.service'
import { CreateTeamDto } from './dto/create-team.dto'
import { UpdateTeamDto } from './dto/update-team.dto'

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post('member')
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamService.create(createTeamDto)
  }

  @Get()
  findAll() {
    return this.teamService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      return await this.teamService.findOne(id)
    } catch (error) {
      throw new InternalServerErrorException('Erro ao buscar o membro do time')
    }
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateTeamDto: UpdateTeamDto) {
    try {
      return await this.teamService.update(id, updateTeamDto)
    } catch (error) {
      throw new InternalServerErrorException('Erro ao atualizar o membro do time')
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: number) {
    try {
      return await this.teamService.softDelete(id)
    } catch (error) {
      throw new InternalServerErrorException('Erro ao deletar o membro do time')
    }
  }
}
