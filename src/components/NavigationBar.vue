<script setup lang="ts">
import Taro from '@tarojs/taro';
import { Home, Find, My } from '@nutui/icons-vue';
import { useCurrentRoute } from '../stores/counter';

const jumpTo =(url: string) => {
  Taro.navigateTo({
    url,
  })
}
const tabSwitch= (item: ProxyHandler<any>, name: string) =>{
  const {setRoute} = useCurrentRoute();
  setRoute(name)
  //jumpTo('/pages/index/index')
  //'/pages/score/index'
  ///pages/myInfo/index
}
</script>

<template>
  <nut-tabbar @tab-switch="tabSwitch" bottom>
    <nut-tabbar-item tab-title="规划" name="home">
      <template #icon>
        <Home width="16" height="16"></Home>
      </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="成绩" name="score">
      <template #icon>
        <Find width="16" height="16"></Find>
      </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="我的" name="myInfo">
      <template #icon>
        <My width="16" height="16"></My>
      </template>
    </nut-tabbar-item>
  </nut-tabbar>
</template>

<style lang="less" scoped>
.nut-tabbar{
  height: 2.2rem !important;
}
</style>
