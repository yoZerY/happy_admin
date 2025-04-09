import { PrismaClient } from '@prisma/client'
import { registerDecorator, ValidationArguments } from 'class-validator'

const prisma = new PrismaClient()

type Options = {
  model: string
  field: string
  message?: string
}

export function IsUnique(options: Options) {
  const { model, field, message } = options
  return (object: Record<string, any>, propertyName: string) => {
    registerDecorator({
      name: 'IsUnique',
      target: object.constructor,
      propertyName: propertyName,
      validator: {
        async validate(value: any) {
          const record = await prisma[model].findUnique({
            where: {
              [field]: value
            }
          })
          return !record
        },
        defaultMessage(args: ValidationArguments): string {
          return message || `${args.value}已存在`
        }
      }
    })
  }
}
