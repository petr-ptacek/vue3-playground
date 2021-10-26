<template>
  <div class="card">
    <img :src="`/images/${experience.image}`" :alt="experience.name">
    <span class="card__text">
      {{ experience.name }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { DestinationExperience }     from '@/typings';

export default defineComponent({
  name: 'ExperienceCard',
  props: {
    experience: {
      type: Object as PropType<DestinationExperience>,
      required: true
    }
  }

});
</script>