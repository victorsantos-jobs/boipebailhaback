import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
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
}
