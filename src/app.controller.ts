import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('health')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Health check da API' })
  @ApiResponse({ 
    status: 200, 
    description: 'API funcionando corretamente',
    schema: {
      type: 'object',
      properties: {
        message: { type: 'string' },
        version: { type: 'string' },
        timestamp: { type: 'string' },
        environment: { type: 'string' }
      }
    }
  })
  getHealth() {
    return this.appService.getHealth();
  }

  @Get('version')
  @ApiOperation({ summary: 'Versão da API' })
  @ApiResponse({ 
    status: 200, 
    description: 'Informações da versão',
  })
  getVersion() {
    return this.appService.getVersion();
  }
}
