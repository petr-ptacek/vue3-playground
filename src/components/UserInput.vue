<template>
  <div>
    <button @click="emit('enlargeFontSize', 1)">{{ props.label }}</button>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  label?: string;
  message?: string;
}

const props = withDefaults(
  defineProps<Props>(),
  {
    label: 'default label',
    message: 'default message'
  }
);

const emit = defineEmits<{
  (e: 'enlargeFontSize', pxValue: number | string): void
}>();

function enlargeFontSizeHandler() {
  emit('enlargeFontSize', 4);
}
</script>