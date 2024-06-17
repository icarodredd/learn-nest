import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('dogs')
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get('all')
  async getHello() {
    const dog = await this.prisma.dogs.create({
      data: {
        id: '144f5ggg7',
        name: 'spike',
      },
    });

    return dog;
  }
}
