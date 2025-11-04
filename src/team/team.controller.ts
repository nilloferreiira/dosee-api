import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, NotFoundException } from '@nestjs/common'
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
  async findOne(@Param('id') id: string) {
    const teamMember = await this.teamService.findOne(id)
    if (!teamMember) throw new NotFoundException()
    return teamMember
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
    const teamMember = await this.teamService.update(id, updateTeamDto)
    if (!teamMember) throw new NotFoundException()
    return teamMember
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const teamMember = await this.teamService.remove(id)
    if (!teamMember) throw new NotFoundException()
  }
}
