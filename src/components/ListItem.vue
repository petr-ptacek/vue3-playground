<template>
  <li :style="styleDef">
    {{ label }}
  </li>
</template>

<script lang="ts" setup>
import { computed, ref, toRefs } from 'vue';


defineProps<{
  label: string;
}>();

const styleDef = computed(() => ({
  // backgroundColor: props.backgroundColor
}));

</script>