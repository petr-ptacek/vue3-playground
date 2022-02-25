<template>

</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface Exposed {
  sayHello: () => string;
}

const message = ref('Joe Doe');
const sayHello = () => console.log(`${ message.value }`);


defineExpose({
  sayHello
});
</script>