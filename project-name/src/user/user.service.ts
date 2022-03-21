import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { EditUserDto } from './dto';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    getMe(user: User){
        return user
    }
  async editUser(
    userId: number,
    dto: EditUserDto,
  ) {
    const user = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
       ...dto,
      },
    });

    delete user.hash;

    return user;
  }
}
