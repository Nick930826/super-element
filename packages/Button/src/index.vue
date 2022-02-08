<template>
  <el-button class="my-button" @click="$emit('click', $event)">
    <slot></slot>
  </el-button>
</template>

<script lang="ts" setup>
defineEmits(['click']);
</script>

<style lang="less" scoped>

</style>