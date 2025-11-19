<template>
  <div class="syrup" :style="{ backgroundColor: color, height: height + '%' }"></div>
</template>

<script setup lang="ts">
type Props = {
  color: string;
  height: number;
};
defineProps<Props>();
</script>
<style lang="scss" scoped>
.syrup {
  transform: translateY(400%);
  position: relative;
  width: 100%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
}
</style>
