"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getHealth() {
        return {
            message: '🌴 Boipebailha Social API está funcionando!',
            version: '1.0.0',
            timestamp: new Date().toISOString(),
            environment: process.env.NODE_ENV || 'development',
            features: [
                '👤 Autenticação social',
                '📸 Upload de fotos',
                '💬 Sistema de posts',
                '📅 Eventos e programação',
                '⭐ Sistema de likes'
            ]
        };
    }
    getVersion() {
        return {
            version: '1.0.0',
            name: 'Boipebailha Social API',
            description: 'API para rede social de viajantes da Ilha de Boipeba',
            author: 'Ilha de Boipeba',
            license: 'MIT'
        };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map