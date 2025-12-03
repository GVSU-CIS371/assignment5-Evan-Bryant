<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template v-slot:top>
        <Creamer v-if="hasCreamer" :color="creamer.color" :height="layerHeight" />
      </template>
      <template v-slot:mid>
        <Syrup v-if="hasSyrup" :color="syrup.color" :height="layerHeight" />
      </template>
      <template v-slot:bottom>
        <Base :color="base.color" :height="baseHeight" />
      </template>
    </Contents>
  </Mug>
</template>
<script setup lang="ts">
import { computed } from "vue";
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";
import type { BaseBeverageType, CreamerType, SyrupType } from "../types/beverage";

type Props = {
  isIced: boolean;
  base: BaseBeverageType;
  creamer: CreamerType;
  syrup: SyrupType;
};
const props = defineProps<Props>();

const hasCreamer = computed(() => props.creamer.name !== "No Cream");
const hasSyrup = computed(() => props.syrup.name !== "No Syrup");
const layerHeight = 20;
const baseHeight = computed(() => 100 - (hasCreamer.value ? layerHeight : 0) - (hasSyrup.value ? layerHeight : 0));
</script>
