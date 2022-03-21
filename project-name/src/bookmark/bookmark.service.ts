import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';


@Injectable()
export class BookmarkService {
    constructor(private prisma:PrismaService){}

   
    GetBookmarks(userId: number) {
        return this.prisma.bookmark.findMany({
            where:{
                UserId : userId
            }
        })


      }
  
    GetBookmarkById(userId:number,bookmarkId: number){
      
        return this.prisma.bookmark.findFirst({
            where:{
                id:bookmarkId,
                UserId : userId,
            }
        })
    }
   
   async CreateBookmark(userId: number, dto:CreateBookmarkDto){
    const bookmark = await this.prisma.bookmark.create({
        data:{
            UserId : userId,
            ...dto
        }
    })
        return bookmark
    }

  
   async EditBookmarkById(userId:number, dto : EditBookmarkDto,bookmarkId: number){
      
        const bookmark = await this.prisma.bookmark.findUnique({
            where: {
                id : bookmarkId,
            }
        })
        if(!bookmark || bookmark.UserId !== userId){
            throw new ForbiddenException("Acces to resours denied!",)
        }
        return this.prisma.bookmark.update({
            where:{
                id: userId,
            },
            data:{
                 ...dto,
            },
        })
    }

   
    async DeleteBookmarkByid(userId:number, bookmarkId: number){
         const bookmark = await this.prisma.bookmark.findUnique({
             where:{
                 id : bookmarkId
             }
         })
         if(!bookmark || bookmark.UserId !== userId){
             throw new ForbiddenException("Can't find object to delete",)
         }
         await this.prisma.bookmark.delete({
             where: {
                 id : bookmarkId
             }
         })
    }
}
