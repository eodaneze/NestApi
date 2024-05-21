import { Controller, Get, Post, Body, Param, Put, Delete} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('Book')
@Controller('book')
export class BookController {
    constructor(private bookService: BookService){}

    @Get()
    @ApiOperation({ summary: 'Get All Books' })
    @ApiResponse({ status: 200, description: 'Success' })
    async getAllBooks(): Promise<Book[]>{
         return this.bookService.findAll()
    }

    @Post('create')
    @ApiOperation({ summary: 'Create Book' })
    @ApiResponse({ status: 201, description: 'The book has been successfully created.' })
    @ApiResponse({ status: 400, description: 'Bad Request' })
    @ApiBody({ type: CreateBookDto })
    async createBook(@Body() book: CreateBookDto): Promise<Book>{
        return this.bookService.create(book)
    }
    @Get(':id')
    @ApiOperation({summary: 'Get a book by id'})
    @ApiParam({ name: 'id', description: 'The ID of the book', type: String })
    @ApiResponse({status: 200, description: 'book found', type: Book})
    @ApiResponse({ status: 404, description: 'Book not found' })
    async getBook(@Param('id') id: string): Promise<Book>{
        return this.bookService.findById(id)
    }
    @Put(':id')
    @ApiOperation({summary: 'Update book by id'})
    @ApiParam({ name: 'id', description: 'The ID of the book', type: String })
    @ApiResponse({status: 200, description: 'book updated', type: Book})
    @ApiBody({ type: UpdateBookDto })
    async updateBook(
        @Param('id')
        id: string,
        @Body() 
        book: UpdateBookDto
       ): Promise<Book>{
        return this.bookService.updateById(id, book)
    }

    @Delete(':id')
    @ApiOperation({summary: 'Delete book by id'})
    @ApiParam({ name: 'id', description: 'The ID of the book', type: String })
    @ApiResponse({status: 200, description: 'book deleted'})
    async deleteBook(
        @Param('id')
        id: string
    ): Promise<Book>{
        return this.bookService.deleteByid(id)
    }
}
