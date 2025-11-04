import { IsOptional, IsString } from 'class-validator'

export class CreateTeamDto {
  @IsString()
  name: string

  @IsString()
  role: string

  @IsOptional()
  @IsString()
  photoUrl?: string
}
