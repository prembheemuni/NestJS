import { IsEnum, IsOptional } from 'class-validator';
export class UserFilterDto {
  @IsOptional()
  @IsEnum(['male', 'female'])
  gender: 'male' | 'female';
}
