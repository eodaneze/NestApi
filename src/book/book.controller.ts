import { Controller, Get, Post, Body} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService){}

    @Get()
    async getAllBooks(): Promise<Book[]>{
         return this.bookService.findAll()
    }

    @Post('create')
    async createBook(@Body() book: CreateBookDto): Promise<Book>{
        return this.bookService.create(book)
    }
}
