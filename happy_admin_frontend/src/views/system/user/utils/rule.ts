import { reactive } from "vue";
import type { FormRules } from "element-plus";
import { isEmail, isPhone } from "@pureadmin/utils";

/** 自定义表单规则校验 */
export const formRules = reactive(<FormRules>{
  nickName: [{ required: true, message: "用户昵称为必填项", trigger: "blur" }],
  username: [{ required: true, message: "用户名称为必填项", trigger: "blur" }],
  password: [{ required: true, message: "用户密码为必填项", trigger: "blur" }],
  roles: [{ required: true, message: "用户角色为必填项", trigger: "blur" }],
  deptId: [{ required: true, message: "部门为必填项", trigger: "blur" }],
  phone: [
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback();
        } else if (!isPhone(value)) {
          callback(new Error("请输入正确的手机号码格式"));
        } else {
          callback();
        }
      },
      trigger: "blur"
    }
  ],
  email: [
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback();
        } else if (!isEmail(value)) {
          callback(new Error("请输入正确的邮箱格式"));
        } else {
          callback();
        }
      },
      trigger: "blur"
    }
  ]
});
