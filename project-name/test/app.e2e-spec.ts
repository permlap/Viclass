import { EditBookmarkDto } from './../src/bookmark/dto/edit-bookmark.dto';

import { PrismaService } from './../src/prisma/prisma.service';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app/app.module';
import * as pactum from "pactum"
import { CreateAuthDto } from 'src/auth/dto';
import { EditUserDto } from 'src/user/dto';
import { CreateBookmarkDto } from 'src/bookmark/dto/create-bookmark.dto';





describe('App e2e', () => {
  let app: INestApplication;
  let prismaSerivce: PrismaService;
  beforeAll(async () => {
    const moduleRef =
      await Test.createTestingModule({
        imports: [AppModule],
      }).compile(); 
      app = moduleRef.createNestApplication();
      
      app.useGlobalPipes(new ValidationPipe({
        whitelist:true
      }
    
      ));
      await app.init();
      await app.listen(3333);
      pactum.request.setBaseUrl("http://localhost:3333")

      prismaSerivce = app.get(PrismaService)
      await prismaSerivce.cleanDB()
  });
  afterAll(()=>{
    app.close();
  })
  it.todo("pass")
  describe('Auth', () => { 
   
      const dto:CreateAuthDto ={
        email: "permlap1@gmail.com",
        password: "123"
      } 
      describe('SignUp', () => {  
        it("should throw if eamil emty", () =>{
          return pactum.spec().post("/auth/Sign-up",
          ).withBody({
            password: dto.password,
          })
          .expectStatus(400)
        })
        it("should throw if password emty", () =>{
          return pactum.spec().post("/auth/Sign-up",
          ).withBody({
            email: dto.email,
          })
          .expectStatus(400)
        })
        it("should throw if email&password emty", () =>{
          return pactum.spec().post("/auth/Sign-up",
          ).expectStatus(400)
        })
        it("should sign up", () =>{
          return pactum.spec().post("/auth/Sign-up",
          ).withBody(dto)
          .expectStatus(201)
          
        })
      })

      describe('SignIn', () => {  
        it("should throw if eamil emty", () =>{
          return pactum.spec().post("/auth/Sign-in",
          ).withBody({
            password: dto.password,
          })
          .expectStatus(400)
        })
        it("should throw if password emty", () =>{
          return pactum.spec().post("/auth/Sign-in",
          ).withBody({
            email: dto.email,
          })
          .expectStatus(400)
        })
        it("should throw if email&password emty", () =>{
          return pactum.spec().post("/auth/Sign-in",
          ).expectStatus(400)
        })
        it("should sign in", () =>{
          return pactum.spec().post("/auth/Sign-in",
          ).withBody(dto)
          .expectStatus(200)
          .stores("userAt", "acces_token")
         
        })
      })
  })

  describe('User', () => {  
    describe('Get user', () => { 
      it("should get current user", () =>{
        return pactum.spec().get("/users/me",
        )
        .withHeaders({
          Authorization: `Bearer $S{userAt}`
        })
        .expectStatus(200)
        
        
      })
     })
    describe('Edit user', () => { 
      it('should edit user', () => {
        const dto: EditUserDto = {
          firstName: 'Vladimir',
          email: 'vlad@codewithvlad.com',
        };
        return pactum
          .spec()
          .patch('/users/:id')
          .withHeaders({
            Authorization: 'Bearer $S{userAt}',
          })
          .withBody(dto)
          .expectStatus(200)
          .expectBodyContains(dto.email)
          .expectBodyContains(dto.firstName)
          

        })
     })
  })

  describe('Bookmark', () => { 
    describe('Get emty bookmark', () => { 
      it("should get bookmark", () =>{
        return pactum
        .spec()
        .get('/bookmark')
        .withHeaders({
          Authorization: 'Bearer $S{userAt}',
        })
        .expectStatus(200)
        .expectBody([])
      
      })
    })
    describe('Create bookmark', () => {  
      it("should create bookmark", ()=>{
        const dto: CreateBookmarkDto ={
          title: "Google.com",
          link:"https://www.google.com",
          description:"Easy to use"
        }
        return pactum
        .spec()
        .post('/bookmark')
        .withHeaders({
          Authorization: 'Bearer $S{userAt}',
        })
        .withBody(dto)
        .expectStatus(201)
        .stores("bookmarkId", "id")

    
      
      })
    })
    describe('Get bookmark', () => { 
      it("should get bookmark", () =>{
        return pactum
        .spec()
        .get('/bookmark')
        .withHeaders({
          Authorization: 'Bearer $S{userAt}',
        })
        .expectStatus(200)
        .expectJsonLength(1)
       
      })
      })
    describe('Get bookmark by Id', () => { 
      it("should get bookmark by id", () =>{
        return pactum
        .spec()
        .get("/bookmark/{id}")
        .withPathParams("id","$S{bookmarkId}")
        .withHeaders({
          Authorization: 'Bearer $S{userAt}',
        })
        .expectStatus(200)
        .expectBodyContains("$S{bookmarkId}")
        
      })
      })
      
    describe('Edit bookmark', () => { 
      it("should edit bookmark by id", () =>{
        const dto:EditBookmarkDto ={
          title:"Edited verions",
          link: "www.pornhub.com"
        }
        return pactum
        .spec()
        .patch("/bookmark/{id}")
        .withPathParams("id","$S{bookmarkId}")
        .withHeaders({
          Authorization: 'Bearer $S{userAt}',
        })
        .withBody(dto)
        .expectStatus(200)
        .expectBodyContains("$S{bookmarkId}")
        .expectBodyContains(dto.title)
        .expectBodyContains(dto.link)
        
      })
     })
    describe('Delete bookmark', () => { 
      it("should delete bookmark by id", () =>{
        
        return pactum
        .spec()
        .delete("/bookmark/{id}")
        .withPathParams("id","$S{bookmarkId}")
        .withHeaders({
          Authorization: 'Bearer $S{userAt}',
        })
        .expectStatus(204)

      })
      it("should emty", () =>{
        return pactum
        .spec()
        .get('/bookmark')
        .withHeaders({
          Authorization: 'Bearer $S{userAt}',
        })
        .expectStatus(200)
        .expectJsonLength(0)
      })
     })

   })
})

function dto(dto: any) {
  throw new Error('Function not implemented.');
}
