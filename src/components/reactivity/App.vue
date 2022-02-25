<template>
  <div>
    {{ value }} | isGreaterThan5 {{ isGreaterThan5 }}
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
  </div>
</template>

<script lang="ts" setup>
import { useCounter } from './useCounter.ts';
import { computed }   from 'vue';

const { increment, decrement, value } = useCounter({ initialValue: 4 });

const isGreaterThan5 = computed(() => value.value > 5);
</script>