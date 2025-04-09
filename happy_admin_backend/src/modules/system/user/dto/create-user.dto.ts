import { IsNotEmpty } from 'class-validator'
import { IsUnique } from '../../../../common/decorators/is-unique.decorator'

const model = 'user'

export class CreateUserDto {
  @IsUnique({
    model,
    field: 'username',
    message: '用户名已存在'
  })
  @IsNotEmpty({ message: '用户名不能为空' })
  username: string

  @IsNotEmpty({ message: '密码不能为空' })
  password: string

  @IsNotEmpty({ message: '昵称不能为空' })
  nickName: string

  @IsUnique({
    model,
    field: 'phone',
    message: '手机号码已存在'
  })
  phone?: string

  @IsUnique({
    model,
    field: 'email',
    message: '邮箱已存在'
  })
  email?: string

  gender?: number
  status?: number
  deptId?: number
  remark?: string

  @IsNotEmpty({ message: 'roles不能为空' })
  roles: number[]
}
