import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
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
