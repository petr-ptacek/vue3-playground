<template>
  <ul v-if="isListVisible">
    <li v-for="i in 5" :ref="($el) => listItemRefs.push($el)" :key="i">
      {{ i }}
    </li>
  </ul>

  <button @click="isListVisible = !isListVisible">Toggle</button>

  <hr>

  <Greeter ref="greeterComponent" />
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import Greeter                   from './Greeter.vue';

const isListVisible = ref<boolean>(true);
const listItemRefs = ref<HTMLElement[]>([]);
const greeterComponent = ref<InstanceType<typeof Greeter> | null>(null);

watch(isListVisible, () => {
  if ( !isListVisible.value ) {
    listItemRefs.value = [];
  }
}, { flush: 'post' });

onMounted(() => {
  greeterComponent.value.sayHello();
});
</script>