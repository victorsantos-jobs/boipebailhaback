import { PrismaService } from '../prisma/prisma.service';
export declare class PostsService {
    private prisma;
    constructor(prisma: PrismaService);
    createPost(userId: string, data: any): Promise<{
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
    toggleLike(userId: string, postId: string): Promise<{
        liked: boolean;
    }>;
}
