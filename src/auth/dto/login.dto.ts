
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail, MinLength} from 'class-validator';
export class LoginDto{


    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsEmail({}, {message: "Please enter a correct email"})
    email: string;
   
    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;  
}