import { Injectable } from '@nestjs/common'
import { CreateTeamDto } from './dto/create-team.dto'
import { UpdateTeamDto } from './dto/update-team.dto'

@Injectable()
export class TeamService {


  create(dto: CreateTeamDto) {
    try {
      return 'create team member'
    } catch (error) {
      console.error('Erro ao criar Team:', error)
      throw error
    }
  }

  findAll() {
    // return this.prisma.find()
    return null
  }

  findOne(id: string) {
    // return this.prisma.findOneBy({ id })
    return null
  }

  async update(id: string, dto: UpdateTeamDto) {
    // const teamMember = await this.prisma.findOneBy({ id })
    // if (!teamMember) return null
    // return this.prisma.merge(teamMember, dto)
    return null
  }

  async remove(id: string) {
    // const teamMember = await this.prisma.findOneBy({ id })
    // if (!teamMember) return null
    // return this.prisma.softRemove(teamMember)
    return null
  }
}
