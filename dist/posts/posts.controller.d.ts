import { PostsService } from './posts.service';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getPosts(page?: number, limit?: number): Promise<{
        posts: ({
            _count: {
                likes: number;
                comments: number;
            };
            author: {
                id: string;
                name: string;
                avatar: string;
            };
        } & {
            tags: string[];
            content: string | null;
            id: string;
            location: string | null;
            createdAt: Date;
            updatedAt: Date;
            imageUrl: string | null;
            authorId: string;
        })[];
        hasMore: boolean;
        total: number;
    }>;
    createPost(req: any, createPostDto: any): Promise<{
        _count: {
            likes: number;
            comments: number;
        };
        author: {
            id: string;
            name: string;
            avatar: string;
        };
    } & {
        tags: string[];
        content: string | null;
        id: string;
        location: string | null;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string | null;
        authorId: string;
    }>;
    toggleLike(req: any, postId: string): Promise<{
        liked: boolean;
    }>;
}
