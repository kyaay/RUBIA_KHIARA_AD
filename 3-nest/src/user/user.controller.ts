import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly user:UserService){}


    @Get("/all")
    getAll(){
        return this.user.getAll();
    }

    @Post("/register")
    register(@Body() body:any){
        return this.user.register(body);
    }

    @Delete('/deleteUser/:id')
    deleteUser(@Param("id") id:number){
        return this.user.deleteUser(id);
    }

}
