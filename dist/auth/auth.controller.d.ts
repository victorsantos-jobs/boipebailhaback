import { AuthService } from './auth.service';
import { RegisterDto, LoginDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<{
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
    login(loginDto: LoginDto): Promise<{
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
    getProfile(req: any): Promise<{
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
    googleAuth(): Promise<{
        message: string;
    }>;
    facebookAuth(): Promise<{
        message: string;
    }>;
}
