<script setup lang="ts">
import { ref } from 'vue';

const courseList = ref([
  {id:'monday_am_1', label:'早1', course: '物理'},
  {id:'tuesday_am_1', label:'早1', course: '语文'},
  {id:'wednesday_am_1', label:'早1', course: '英文'},
  {id:'thursday_am_1', label:'早1', course: '语文'},
  {id:'friday_am_1', label:'早1', course: '语文'},
  {id:'monday_am_2', label:'早2', course: '生物'},
  {id:'tuesday_am_2', label:'早2', course: '语文'},
  {id:'wednesday_am_2', label:'早2', course: '英文'},
  {id:'thursday_am_2', label:'早2', course: '化学'},
  {id:'friday_am_2', label:'早2', course: '数学'},
  {id:'monday_pm_1', label:'午1', course: '化学'},
  {id:'tuesday_pm_1', label:'午1', course: '生物'},
  {id:'wednesday_pm_1', label:'午1', course: '英文'},
  {id:'thursday_pm_1', label:'午1', course: '化学'},
  {id:'friday_pm_1', label:'午1', course: '数学'},
  {id:'monday_pm_2', label:'午2', course: '物理'},
  {id:'tuesday_pm_2', label:'午2', course: '语文'},
  {id:'wednesday_pm_2', label:'午2', course: '生物'},
  {id:'thursday_pm_2', label:'午2', course: '化学'},
  {id:'friday_pm_2', label:'午2', course: '数学'},
  {id:'monday_pm_3', label:'午3', course: '语文'},
  {id:'tuesday_pm_3', label:'午3', course: '语文'},
  {id:'wednesday_pm_3', label:'午3', course: '英文'},
  {id:'thursday_pm_3', label:'午3', course: '生物'},
  {id:'friday_pm_3', label:'午3', course: '化学'},
])
const backgroundColorList = {
 '物理': '#eecece',
 '语文': '#f8f8cd',
 '英文': '#c8f3d6',
 '化学': '#7aa488',
 '数学': '#6eb1fa',
 '生物': '#be9bd9',
}
const setGridClass = (course: string) =>{
  return backgroundColorList[course] || '#fff'
}
</script>

<template>
  <div class="home_container">
    <div class="grid_title">
      <span>周一</span>
      <span>周二</span>
      <span>周三</span>
      <span>周四</span>
      <span>周五</span>
    </div>
    <nut-grid :column-num="5" :border="false">
      <nut-grid-item v-for="item in courseList" :key="item.id" >
        <div slot="default" class="grid_item" :style="{backgroundColor: setGridClass(item.course)}">
          <span>{{item.course}}</span>
        </div>
      </nut-grid-item>
    </nut-grid>
  </div>

</template>

<style scoped lang="less">
.home_container{
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;

  .grid_title{
    display: flex;
    width: 100vw;
    height: 2.4rem;
    justify-content: space-between;
    span{
      width: 20%;
      text-align: center;
    }
  }
}

.grid_item{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
