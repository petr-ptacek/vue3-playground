<template>
  <div>
    <div>
      <label for="name">Name</label>
      <input id="name"
             v-model="_name"
             type="text">
    </div>

    <div>
      <label for="age">Age</label>
      <input id="age"
             v-model="_age"
             type="number">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheInput',
  props: {
    name: String,
    age: Number,
    modelModifiers: {}
  },
  emits: {
    'update:name': (name: any) => typeof name === 'string',
    'update:age': (age: any) => typeof age === 'number'
  },
  computed: {
    _name: {
      get(): string {
        return this.name;
      },
      set(name): void {
        this.emitName(name);
      }
    },
    _age: {
      get(): number {
        return this.age;
      },
      set(age: number): void {
        this.emitAge(age);
      }
    }
  },
  methods: {
    emitName(name) {
      this.$emit('update:name', name);
    },
    emitAge(age) {
      this.$emit('update:age', age);
    }
  }
});
</script>

<style scoped>

</style>