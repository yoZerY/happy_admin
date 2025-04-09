import { IsUnique } from '../../../../common/decorators/is-unique.decorator'

const model = 'role'

export class CreateRoleDto {
  @IsUnique({
    model,
    field: 'name',
    message: '角色名称已存在'
  })
  name: string

  @IsUnique({
    model,
    field: 'code',
    message: '角色标识已存在'
  })
  code: string

  status: number
}
