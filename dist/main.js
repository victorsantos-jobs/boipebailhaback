"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const helmet_1 = require("helmet");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, helmet_1.default)());
    app.enableCors({
        origin: [
            'http://localhost:3000',
            'https://social.boipebailha.com.br',
            'https://boipebailha.com.br',
            'https://www.boipebailha.com.br'
        ],
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    app.setGlobalPrefix('api/v1');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Boipebailha Social API')
        .setDescription('API para rede social de viajantes da Ilha de Boipeba')
        .setVersion('1.0')
        .addBearerAuth()
        .addTag('auth', 'Autenticação')
        .addTag('users', 'Usuários')
        .addTag('posts', 'Publicações')
        .addTag('events', 'Eventos')
        .addTag('upload', 'Upload de arquivos')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document, {
        customSiteTitle: 'Boipebailha Social API',
        customCss: '.swagger-ui .topbar { display: none }',
    });
    const port = process.env.PORT || 3001;
    await app.listen(port);
    console.log(`🚀 Boipebailha Social API running on port ${port}`);
    console.log(`📚 Documentation available at http://localhost:${port}/docs`);
}
bootstrap();
//# sourceMappingURL=main.js.map