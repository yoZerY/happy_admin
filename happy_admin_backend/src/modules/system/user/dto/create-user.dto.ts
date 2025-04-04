import { IsNotEmpty } from 'class-validator'

export class CreateUserDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  username: string

  @IsNotEmpty({ message: '密码不能为空' })
  password: string

  @IsNotEmpty({ message: 'nickName不能为空' })
  nickName: string

  phone?: string

  email?: string

  gender?: number
  status?: number
  deptId?: number
  remark?: string

  @IsNotEmpty({ message: 'roles不能为空' })
  roles: number[]
}
