import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModel, PostSchema } from './models/post.model';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: PostModel.name, schema: PostSchema }]),
    ],
    providers: [PostService, PostResolver],
    exports: [PostService]
})
export class PostModule { }