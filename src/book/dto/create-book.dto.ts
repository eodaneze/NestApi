import {Category} from '../schemas/book.schema'
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEnum, IsUrl} from 'class-validator';
export class CreateBookDto{
    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    description: string;
   
    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    author: string;
 
    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    price: string;
   
    @ApiProperty({ required: true})
    @IsNotEmpty()
    @IsEnum(Category)
    category: Category;
   
}