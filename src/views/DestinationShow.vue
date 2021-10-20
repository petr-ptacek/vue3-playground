<template>
  <section class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${ destination.image }`"
           :alt="destination.name">
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, reactive, toRefs } from 'vue';
import { useRoute }                                                 from 'vue-router';
import sourceData                                                   from '@/assets/data.json';
import { Destination }                                              from '@/typings';

export default defineComponent({
  name: 'DestinationShow',
  setup() {
    const route = useRoute();
    const state: { destinationId: number, destination: Destination } = reactive({
      destinationId: computed((): number => {
        return +route.params.id;
      }),
      destination: computed((): Destination => {
        return (sourceData.destinations as Destination[]).find(d => d.id === state.destinationId);
      })
    });

    // const destinationId: ComputedRef<number> = computed((): number => {
    //   return +route.params.id;
    // });
    //
    // const destination: Destination = computed(() => {
    //   return (sourceData.destinations as Destination[]).find(d => d.id === destinationId.value);
    // });

    return {
      ...toRefs(state)
    };
  }
});
</script>