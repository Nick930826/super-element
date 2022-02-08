<template>
  <div>
    <my-button type='primary' @click="onClick(1)">默认</my-button>
    <my-button type='danger' @click="onClick(2)">危险</my-button>
    <my-button type='success' @click="onClick(3)">成功</my-button>
  </div>
</template>

<script setup>
const onClick = (num) => { console.log(`我是第 ${num} 个自定义按钮`) }
</script>