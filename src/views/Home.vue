<template>
  <div class="home">
    <h1>All Destinations</h1>

    <div class="destinations">
      <router-link
        v-for="destination of destinations"
        :key="destination.id"
        :to="destination.slug"
      >
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`"
             :alt="destination.name">
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import sourceData               from '@/assets/data.json';
import { Destination }          from '@/typings/shared.d.ts';

export default defineComponent({
  setup() {
    const destinations: Destination[] = ref(JSON.parse(JSON.stringify(sourceData.destinations)));

    return {
      destinations
    };
  }
});
</script>