<template>
  <div class="my-kit-doc">
    <aside>
      <el-menu
        active-text-color="#ffffff"
        :default-active="active"
        style="border-right: none;height: 100%;"
        router
      >
        <el-menu-item v-for="(link, index) in data.links" :key="index" :index="link.path">
          <span>{{ link.name }}</span>
        </el-menu-item>
      </el-menu>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import ComponentList from '../packages/list.json';
import { reactive } from 'vue'

const data = reactive({
  links: ComponentList.map(item => ({
    path: `/components/${item.compName}`,
    name: item.compZhName
  }))
})
const active = `/components/${ComponentList[0].compName}`
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}
.my-kit-doc {
  display: flex;
  min-height: 100vh;
  aside {
    width: 200px;
    padding: 15px;
    border-right: 1px solid #ccc;
  }
  main {
    width: 100%;
    flex: 1;
    padding: 15px;
  }
  .el-menu-item {
    border-radius: 8px;
    height: 36px;
    &.is-active {
      background-color: #7B68EE;
    }
  }
}
</style>