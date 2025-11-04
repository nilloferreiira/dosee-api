import { IsOptional, IsString, IsUrl, MinLength } from 'class-validator'

export class CreateTeamDto {
  @IsString({
    message: 'O nome deve ser uma string'
  })
  @MinLength(2, {
    message: 'O nome deve ter no mínimo 2 caracteres'
  })
  name: string

  @IsString({
    message: 'O cargo deve ser uma string'
  })
  @MinLength(2, {
    message: 'O cargo deve ter no mínimo 2 caracteres'
  })
  role: string

  @IsOptional()
  @IsString({
    message: 'A URL da foto deve ser uma string'
  })
  @IsUrl()
  photoUrl?: string
}
