import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { CreateTeamDto } from './dto/create-team.dto'
import { UpdateTeamDto } from './dto/update-team.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class TeamService {
  constructor(private prismaService: PrismaService) {}

  async create(dto: CreateTeamDto) {
    try {
      return this.prismaService.team.create({ data: dto })
    } catch (error) {
      console.error('Erro ao criar Team:', error)
      throw new InternalServerErrorException('Erro ao criar Team')
    }
  }

  findAll() {
    return this.prismaService.team.findMany()
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
