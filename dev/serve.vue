<script lang="ts">
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { TempSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  TempSample,
  // }
});
</script>

<template>
  <div id="app">
    <temp-sample />
  </div>
</template>
