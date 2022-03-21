

import { BookmarkService } from './bookmark.service';
import { Controller, Get, UseGuards, Patch, Post, Delete, Param, ParseIntPipe, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { GetUser } from '../auth/decorater';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';

@UseGuards(JwtGuard)
@Controller('bookmark')
export class BookmarkController {
constructor(private bookmarkService:BookmarkService){}
    @Get()
    getBookmarks(@GetUser('id') userId: number) {
    return this.bookmarkService.GetBookmarks(
        userId,
    );
    }

    @Get(":id")
    GetBookmarkById(@GetUser("id") userId:number,
    @Param("id", ParseIntPipe) bookmarkId: number
    ){
        return this.bookmarkService.GetBookmarkById(userId,bookmarkId)
    }
    @Post()
    CreateBookmark(@GetUser("id") userId:number,
    @Body() dto:CreateBookmarkDto
    ){
        return this.bookmarkService.CreateBookmark(userId,dto)
    }

    @Patch(":id")
    EditBookmarkById(@GetUser("id") userId:number,
    @Param("id", ParseIntPipe) bookmarkId: number, 
    @Body() dto:EditBookmarkDto
    
    ){
        return this.bookmarkService.EditBookmarkById(userId,dto,bookmarkId)
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(":id")
    DeleteBookmarkByid(@GetUser("id") userId:number,
    @Param("id", ParseIntPipe) bookmarkId: number ){
        return this.bookmarkService.DeleteBookmarkByid(userId,bookmarkId)
    }

}
