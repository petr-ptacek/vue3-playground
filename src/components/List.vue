<template>
  <ul :style="['padding: 40px;', styleDef]">
    <ListItem
      v-for="item in items"
      :label="item.label"
      :key="item.id"
    />
  </ul>
</template>

<script lang="ts" setup>
import ListItem             from '@/components/ListItem.vue';
import { computed, toRefs } from 'vue';

const props = defineProps<{
  items: { label: string; id: string; }[];
  fontSize: number;
}>();

const { fontSize, items } = toRefs(props);

const styleDef = computed(() => ({
  fontSize: `${ fontSize.value * 2 }px`
}));
</script>