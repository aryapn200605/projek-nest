import { Body, Controller, Get, Delete,  Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    /**
     * Get users
     * @returns 
     */
    @Get()
    async getUsers(){
        return await this.userService.findAll()
    }

    /**
     * Get user by id
     * @param id 
     * @returns 
     */
    @Get('/:id')
    async getUserById(@Param('id') id: string){
        return await this.userService.findById(id)
    }
    
    /**
     * Create user
     * @param body
     * @returns 
     */
    @Post()
    async createUser(@Body() body: CreateUserDto){
        return await this.userService.createData(body)
    }

    /**
     * Update user
     * @param id 
     * @param body 
     * @returns 
     */
    @Patch('/:id')
    async updateUser(@Param('id') id: string, @Body() body: any){
        return await this.userService.updateData(id, body)
    }

    /**
     * Delete user
     * @param id 
     * @returns 
     */
    @Delete('/:id')
    async deleteUser(@Param('id') id: string){
        return await this.userService.deleteData(id)
    }
}
