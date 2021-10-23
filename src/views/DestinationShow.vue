<template>
  <section class="destination"
           v-if="destination"
  >
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${ destination.image }`"
           :alt="destination.name">
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { Destination }                    from '@/typings';

export default defineComponent({
  name: 'DestinationShow',
  props: {
    id: { type: Number as PropType<number>, required: true },
    slug: { type: String as PropType<string>, required: true }
  },
  setup(props) {
    const destination = ref<Destination | null>(null);
    const fetchDestinationData = async (): Promise<void> => {
      const response = await fetch(`https://travel-dummy-api.netlify.app/${ props.slug }`);
      destination.value = await response.json();
    };

    fetchDestinationData();

    return {
      destination
    };
  }
});
</script>