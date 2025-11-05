import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  ServiceUnavailableException
} from '@nestjs/common'
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
      console.error('Erro ao criar o membro do time:', error)
      throw new ServiceUnavailableException('Erro ao criar o membro do time')
    }
  }

  async findAll() {
    try {
      const allTeam = await this.prismaService.team.findMany({
        where: { deletedAt: null }
      })

      if (!allTeam) return new NotFoundException('Nenhum membro do time encontrado')

      return allTeam
    } catch (error) {
      console.error('Erro ao buscar o time:', error)
      throw new ServiceUnavailableException('Erro ao buscar o time')
    }
  }

  async findOne(id: number) {
    try {
      const teamMember = await this.prismaService.team.findFirst({
        where: { id, deletedAt: null }
      })

      if (!teamMember) return new NotFoundException('Membro do time não encontrado')

      return teamMember
    } catch (error) {
      console.error('Erro ao buscar o membro do time:', error)
      throw new InternalServerErrorException('Erro ao buscar o membro do time')
    }
  }

  async update(id: number, dto: UpdateTeamDto) {
    try {
      const teamMember = await this.prismaService.team.findFirst({
        where: { id, deletedAt: null }
      })

      if (!teamMember) return new NotFoundException('Membro do time não encontrado')

      const updated = await this.prismaService.team.update({
        where: { id },
        data: dto
      })

      return updated
    } catch (error) {
      console.error('Erro ao atualizar o membro do time:', error)
      throw new InternalServerErrorException('Erro ao atualizar o membro do time')
    }
  }

  async softDelete(id: number) {
    try {
      const teamMember = await this.prismaService.team.findFirst({
        where: { id, deletedAt: null }
      })

      if (!teamMember) return new NotFoundException('Membro do time não encontrado')

      const updated = await this.prismaService.team.update({
        where: { id },
        data: { deletedAt: new Date() }
      })

      return updated
    } catch (error) {
      console.error('Erro ao remover (soft delete) o membro do time:', error)
      throw new InternalServerErrorException('Erro ao remover o membro do time')
    }
  }

  async remove(id: number) {
    try {
      const teamMember = await this.prismaService.team.findFirst({
        where: { id, deletedAt: null }
      })

      if (!teamMember) return new NotFoundException('Membro do time não encontrado')

      await this.prismaService.team.delete({
        where: { id }
      })
    } catch (error) {
      console.error('Erro ao deletar o membro do time:', error)
      throw new InternalServerErrorException('Erro ao deletar o membro do time')
    }
  }
}
