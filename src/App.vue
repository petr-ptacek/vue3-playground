<template>
  <div id="app">
    <List
      :items="listItems"
      :font-size="fontSize"
    />

    <button type="submit" @click="addItem">Add item</button>
    <hr>
    <input type="number" min="10" max="20" v-model="fontSize">
  </div>
</template>

<script lang="ts" setup>
import { provide, ref } from 'vue';
import List             from '@/components/List.vue';

const listItems = ref([
  { label: '1', id: '1' },
  { label: '2', id: '2' }
]);

const fontSize = ref(10);

function addItem() {
  listItems.value.push({
    label: Math.floor(Math.random() * 1000).toString(),
    id: Date.now().toString(16)
  });
}
</script>