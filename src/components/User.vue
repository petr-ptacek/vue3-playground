<template>
  <div>
    <h1>User</h1>
    <ul class="list">
      <li class="list__item">
        id: {{ user.id }}
      </li>
      <li class="list__item">
        name: {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IUser }                     from '@/typings/shared.d.ts';

export default defineComponent({
  name: 'UserDetail',
  props: {
    user: {
      type: Object as PropType<IUser>
    }
  }
});
</script>