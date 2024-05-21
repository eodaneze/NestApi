import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import {JwtService} from '@nestjs/jwt'
import mongoose, { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { InjectModel } from '@nestjs/mongoose';
import { SignUpDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>,

        private jwtService: JwtService
    ){}


    async signUp(signUpDto: SignUpDto): Promise<{token: string}>{
         const {name, email, password} = signUpDto

         const hashedPassword = await bcrypt.hash(password, 10)

         const user = await this.userModel.create({
            name,
            email,
            password: hashedPassword
         })

         const token = this.jwtService.sign({id: user._id})
         return {token}
    }
}
