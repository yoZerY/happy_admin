<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import ReCol from "@/components/ReCol";
import { formRules } from "../utils/rule";
import { FormProps } from "../utils/types";
import { usePublicHooks } from "../../hooks";
import { OPERATION_TYPE } from "@/constant";

const {
  userInfo = {
    nickName: "",
    username: "",
    password: "",
    phone: "",
    email: "",
    gender: null,
    roles: [],
    deptId: null,
    status: 1,
    remark: ""
  },
  roleOptions = [],
  higherDeptOptions = [],
  opType = ""
} = defineProps<FormProps>();

const sexOptions = [
  { value: 0, label: "男" },
  { value: 1, label: "女" }
];

const ruleFormRef = useTemplateRef("ruleFormRef");
const { switchStyle } = usePublicHooks();
const formData = ref(userInfo);

function getRef() {
  return ruleFormRef.value;
}

defineExpose({ getRef, formData: formData.value });
</script>

<template>
  <el-form
    ref="ruleFormRef"
    :model="formData"
    :rules="formRules"
    label-width="100px"
  >
    <el-row :gutter="30">
      <re-col :value="12" :xs="24" :sm="24">
        <el-form-item label="用户昵称" prop="nickName">
          <el-input
            v-model="formData.nickName"
            clearable
            placeholder="请输入用户昵称"
          />
        </el-form-item>
      </re-col>
      <re-col :value="12" :xs="24" :sm="24">
        <el-form-item label="用户名称" prop="username">
          <el-input
            v-model="formData.username"
            clearable
            placeholder="请输入用户名称"
          />
        </el-form-item>
      </re-col>
      <re-col
        v-if="opType === OPERATION_TYPE.CREATE"
        :value="12"
        :xs="24"
        :sm="24"
      >
        <el-form-item label="用户密码" prop="password">
          <el-input
            v-model="formData.password"
            clearable
            placeholder="请输入用户密码"
          />
        </el-form-item>
      </re-col>
      <re-col :value="12" :xs="24" :sm="24">
        <el-form-item label="手机号" prop="phone">
          <el-input
            v-model="formData.phone"
            clearable
            placeholder="请输入手机号"
          />
        </el-form-item>
      </re-col>
      <re-col :value="12" :xs="24" :sm="24">
        <el-form-item label="邮箱" prop="email">
          <el-input
            v-model="formData.email"
            clearable
            placeholder="请输入邮箱"
          />
        </el-form-item>
      </re-col>
      <re-col :value="12" :xs="24" :sm="24">
        <el-form-item label="用户性别">
          <el-select
            v-model="formData.gender"
            placeholder="请选择用户性别"
            class="w-full"
            clearable
          >
            <el-option
              v-for="(item, index) in sexOptions"
              :key="index"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </re-col>
      <re-col :value="12" :xs="24" :sm="24">
        <el-form-item label="用户角色" prop="roles">
          <el-select
            v-model="formData.roles"
            placeholder="请选择"
            class="w-full"
            clearable
            multiple
          >
            <el-option
              v-for="(item, index) in roleOptions"
              :key="index"
              :value="item.id"
              :label="item.name"
            >
              {{ item.name }}
            </el-option>
          </el-select>
        </el-form-item>
      </re-col>
      <re-col :value="12" :xs="24" :sm="24">
        <el-form-item label="归属部门" prop="deptId">
          <el-cascader
            v-model="formData.deptId"
            class="w-full"
            :options="higherDeptOptions"
            :props="{
              value: 'id',
              label: 'name',
              emitPath: false,
              checkStrictly: true
            }"
            clearable
            filterable
            placeholder="请选择归属部门"
          >
            <template #default="{ node, data }">
              <span>{{ data.name }}</span>
              <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
            </template>
          </el-cascader>
        </el-form-item>
      </re-col>
      <re-col :value="12" :xs="24" :sm="24">
        <el-form-item label="用户状态">
          <el-switch
            v-model="formData.status"
            inline-prompt
            :active-value="1"
            :inactive-value="0"
            active-text="启用"
            inactive-text="停用"
            :style="switchStyle"
          />
        </el-form-item>
      </re-col>
      <re-col>
        <el-form-item label="备注">
          <el-input
            v-model="formData.remark"
            placeholder="请输入备注信息"
            type="textarea"
          />
        </el-form-item>
      </re-col>
    </el-row>
  </el-form>
</template>
