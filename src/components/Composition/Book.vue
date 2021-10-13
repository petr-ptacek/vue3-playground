<template>
  <div>
    <h1>Book</h1>
    <h2>Name: {{ title }}</h2>
    <h2>Pages: {{ pages }}</h2>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  SetupContext,
  toRef,
  PropType
} from 'vue';

type BookProps = {
  title: string;
  pages: number;
}

export default defineComponent({
  name: 'Book',
  props: {
    title: {
      type: Object as PropType<string>,
      required: true
    },
    currentPage: {
      type: Object as PropType<number>,
      required: false
    },
    pagesTotal: {
      type: Object as PropType<number>,
      default: 10
    }
  },
  emits: {
    nextPage(payload: { page: number }): void {
      return payload.page >= 0 && payload.page <= this.pagesTotal;
    }
  },
  setup(props, ctx: SetupContext) {
    ctx.emit('nextPage', { page: 12 });

    return {};
  },
  methods: {
    foo(num: string): void {
    }
  }
});
</script>