interface FormItemProps {
  id?: number;
  deptId: number;
  nickName: string;
  username: string;
  password: string;
  phone: string | number;
  email: string;
  gender: string | number;
  status: number;
  remark: string;
  roles: any[];
}

interface FormProps {
  userInfo: FormItemProps;
  roleOptions: any[];
  higherDeptOptions: any[];
  opType: string;
}

interface RoleFormItemProps {
  username: string;
  nickName: string;
  /** 角色列表 */
  roleOptions: any[];
  /** 选中的角色列表 */
  ids: Record<number, unknown>[];
}

interface RoleFormProps {
  formInline: RoleFormItemProps;
}

export type { FormItemProps, FormProps, RoleFormItemProps, RoleFormProps };
