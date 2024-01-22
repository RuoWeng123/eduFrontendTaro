<template>
  <view class="container">
    <component :is="currentView" class="content"/>
    <NavigationBar class="bottom_bar"/>
  </view>
</template>

<script setup lang="ts">
import './index.less'
import {useUserStore, useCurrentRoute} from "../../stores/counter";
import { computed, onMounted } from 'vue';
import NavigationBar from '../../components/NavigationBar.vue';
import Home from '../home/index.vue';
import Score from '../score/index.vue';
import MyInfo from '../myInfo/index.vue';
const routers = {
  'home': Home,
  'score': Score,
  'myInfo': MyInfo
}
onMounted(() =>{
  const {user} = useUserStore();
  console.log('登录用户',user)
})
const currentView = computed(() =>{
  const { route } = useCurrentRoute();
  console.log('currentRoute',route)
  return routers[route] || routers['home']
})
</script>
<style lang="less" scoped>
.container{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .content{
    flex: 1;
  }

  .bottom_bar{
    display: block;
    position: relative;
    height: 40px;
    width: 100vw;
  }
}
</style>
