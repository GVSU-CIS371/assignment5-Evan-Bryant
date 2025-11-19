<template>
  <div class="baseBeverage" :style="{ backgroundColor: color, height: height + '%' }"></div>
</template>

<script setup lang="ts">
type Props = {
  color: string;
  height: number;
};
defineProps<Props>();
</script>

<style scoped>
.baseBeverage {
  position: relative;
  width: 100%;
  bottom: 0;
  animation: pour-tea 2s;
  z-index: 1;
}
</style>
