<template>
  <div>
    <ui-button @click="openDialog">Select backup location</ui-button>
  </div>
</template>

<script>
  import UiButton from 'keen-ui/lib/UiButton';

  export default {
    name: 'open-dialog',
    components: { UiButton },
  };
</script>
