import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { AuthController } from './auth.controller.js'
import { AuthService } from './auth.service.js'
import { PrismaService } from 'prisma/prisma.service.js'
import { JwtStrategy } from './strategies/jwt.strategy.js'

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '1h' },
      }),
    }),

    // JwtModule.register({
    //   secret: 'SECRET_KEY',
    //   signOptions: { expiresIn: '1h'},
    // }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
