import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(email: string, password: string, name: string): Promise<{
        user: {
            id: string;
            email: string;
            name: string;
            avatar: string;
            bio: string;
            location: string;
            verified: boolean;
            createdAt: Date;
        };
        token: string;
    }>;
    login(email: string, password: string): Promise<{
        user: {
            id: string;
            email: string;
            name: string;
            avatar: string | null;
            bio: string | null;
            location: string | null;
            verified: boolean;
            provider: string | null;
            providerId: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
        token: string;
    }>;
    getProfile(userId: string): Promise<{
        id: string;
        email: string;
        name: string;
        avatar: string;
        bio: string;
        location: string;
        verified: boolean;
        createdAt: Date;
        _count: {
            posts: number;
            followers: number;
            following: number;
        };
    }>;
    updateProfile(userId: string, updateData: any): Promise<{
        id: string;
        email: string;
        name: string;
        avatar: string;
        bio: string;
        location: string;
        verified: boolean;
        createdAt: Date;
    }>;
    googleLogin(googleUser: any): Promise<{
        user: {
            id: string;
            email: string;
            name: string;
            avatar: string | null;
            bio: string | null;
            location: string | null;
            verified: boolean;
            provider: string | null;
            providerId: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
        token: string;
    }>;
}
