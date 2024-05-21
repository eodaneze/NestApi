import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
      constructor(private authService: AuthService){}


      @Post('/signup')
      @ApiOperation({ summary: 'User SignUp' })
      @ApiResponse({ status: 201, description: 'New User have been created successfully.' })
      @ApiResponse({ status: 400, description: 'Bad Request' })
      @ApiBody({ type: SignUpDto })
      signUp( @Body() signUpDto: SignUpDto):Promise<{token: string}> {
          return this.authService.signUp(signUpDto)
      }
        
}
