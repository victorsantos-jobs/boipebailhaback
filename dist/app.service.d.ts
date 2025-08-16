export declare class AppService {
    getHealth(): {
        message: string;
        version: string;
        timestamp: string;
        environment: string;
        features: string[];
    };
    getVersion(): {
        version: string;
        name: string;
        description: string;
        author: string;
        license: string;
    };
}
