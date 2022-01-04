<script lang="ts">
import { defineComponent } from 'vue';
import { TempComp } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  components: {
   TempComp,
  }
});
</script>

<template lang="pug">
#app
  TempComp
</template>
