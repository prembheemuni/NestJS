import {
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsNumber,
  IsEnum,
  Min,
  Max,
} from 'class-validator';
export class UserDto {
  @IsNotEmpty()
  @IsNumber()
  _id: number;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(15)
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Max(100)
  @Min(3)
  age: number;

  @IsNotEmpty()
  @IsEnum(['male', 'female'], { message: 'male or female' })
  gender: 'male' | 'female';
}
