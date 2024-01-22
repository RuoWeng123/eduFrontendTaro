<script setup lang="ts">
import { reactive } from 'vue';
import { getEduApi } from '../../api/eduApi';
import { useUserStore } from '../../stores/counter';
import Taro from '@tarojs/taro';

const {setUser} = useUserStore()
const formSubmit = (e: Event) => {
  e.preventDefault()
  getEduApi().loginStudent(formData.username, formData.password).then((res: any) => {
    if(res.id){
      setUser({
        id: res.id,
        name: formData.username,
        token: res.token
      })
      Taro.navigateTo({
        url: '/pages/index/index'
      })
    }
  })
}
const formData = reactive({
  username: '',
  password: ''
})
</script>

<template>
  <view class="login_page">
    <div class="title">教务系统</div>
    <form @submit="formSubmit" class="form_content" v-model="formData">
      <input v-model="formData.username" type="text" class="mb1" placeholder="请输入用户名" />
      <input v-model="formData.password" type="password" placeholder="请输入密码" />
      <button form-type="submit"  class="btn_submit">登录</button>
    </form>
  </view>
</template>

<style scoped lang="less">
.login_page{
  display: flex;
  flex-direction: column;
  padding: 1rem;
  .title{
    margin-bottom: 3.2rem;
  }
  .form_content{
    height: auto;
  }
  .btn_submit{
    margin-top: 2rem;
    height: 3.2rem;
    width: 100%;
  }

  .mb1{
    margin-bottom: 1rem;
  }
}
</style>
