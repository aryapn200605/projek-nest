import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(private dbService: PrismaService){}

    /**
     * Get all user
     * @returns 
     */
    async findAll(){
        return await this.dbService.user.findMany()
    }

    /**
     * Get user by id
     * @param id 
     * @returns 
     */
    async findById(id: string){
        return await this.dbService.user.findUnique({
            where: {
                id
            }
        })
    }

    /**
     * Create user
     * @param data 
     */
    async createData(data: CreateUserDto){
        return await this.dbService.user.create({
            data: data
        })
    }

    /**
     * Update user
     * @param id 
     * @param data 
     */
    async updateData(id: string, data: any){
        return await this.dbService.user.update({
            data: data,
            where: {
                id
            }
        }) 
    }

    /**
     * Delete user
     * @param id 
     */
    async deleteData(id: string){
        return await this.dbService.user.delete({
            where: {
                id
            }
        })
    }
}
