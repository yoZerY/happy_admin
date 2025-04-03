import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly prisma: PrismaService) {
    super()
  }

  async validate(username: string, password: string): Promise<any> {
    console.log('username', username)
    console.log('password', password)
    const user = await this.prisma.user.findUnique({
      where: {
        username: username
      }
    })
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}
